"use client";

import React, { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  GeoJSON,
  useMap,
  Marker,
  Tooltip,
} from "react-leaflet";
import L from "leaflet";
import "leaflet/dist/leaflet.css";

interface CrimeData {
  [stateName: string]: number;
}

const crimeDataByYear: { [year: string]: CrimeData } = {
  "2025": {
    Lagos: 120,
    Kano: 80,
    Kaduna: 95,
    Rivers: 110,
    Oyo: 70,
  },
  "2024": {
    Lagos: 100,
    Kano: 70,
    Kaduna: 85,
    Rivers: 90,
    Oyo: 60,
  },
};

const stateCenters: { [state: string]: [number, number] } = {
  Lagos: [6.5244, 3.3792],
  Kano: [12.0022, 8.5919],
  Kaduna: [10.5105, 7.4165],
  Rivers: [4.8436, 6.9112],
  Oyo: [7.3775, 3.947],
};

const getColor = (value: number) => {
  return value > 100
    ? "#800026"
    : value > 90
    ? "#BD0026"
    : value > 80
    ? "#E31A1C"
    : value > 70
    ? "#FC4E2A"
    : value > 60
    ? "#FD8D3C"
    : value > 50
    ? "#FEB24C"
    : value > 40
    ? "#FED976"
    : "#FFEDA0";
};

const Legend = () => {
  const map = useMap();

  useEffect(() => {
    const legend = new L.Control({ position: "bottomright" });

    legend.onAdd = () => {
      const div = L.DomUtil.create(
        "div",
        "info legend text-sm p-2 bg-white shadow rounded"
      );
      const grades = [0, 40, 50, 60, 70, 80, 90, 100];

      div.innerHTML = grades
        .map((grade, i) => {
          const from = grade;
          const to = grades[i + 1];
          return `
            <div style="display: flex; align-items: center; gap: 6px; margin-bottom: 4px;">
              <span style="background:${getColor(
                from + 1
              )}; width: 18px; height: 18px; border-radius: 4px;"></span>
              <span>${from}${to ? "&ndash;" + to : "+"}</span>
            </div>
          `;
        })
        .join("");
      return div;
    };

    legend.addTo(map);
    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
};

export default function NigeriaChoroplethMap({ year }: { year: string }) {
  const [geoData, setGeoData] = useState<any>(null);
  const crimeData = crimeDataByYear[year] || {};

  useEffect(() => {
    fetch("/nigeria-states.geojson")
      .then((res) => res.json())
      .then(setGeoData);
  }, []);

  const style = (feature: any) => {
    const name = feature.properties.name;
    const value = crimeData[name];
    return value !== undefined
      ? {
          fillColor: getColor(value),
          weight: 2,
          color: "white",
          dashArray: "3",
          fillOpacity: 0.7,
        }
      : { fillOpacity: 0 };
  };

  const onEachFeature = (feature: any, layer: L.Layer) => {
    const name = feature.properties.name;
    const value = crimeData[name];
    if (value !== undefined) {
      layer.bindTooltip(
        `<strong>${name}</strong><br/>Crime Reports: ${value}`,
        { sticky: true }
      );
    }
  };

  return (
    <MapContainer
      center={[9.082, 8.6753]}
      zoom={6}
      maxBounds={[
        [3.5, 2.5],
        [14, 15.5],
      ]}
      maxBoundsViscosity={1.0}
      className="h-[600px] w-full rounded shadow"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {geoData && (
        <GeoJSON
          data={{
            ...geoData,
            features: geoData.features.filter(
              (feature: any) => crimeData[feature.properties.name] !== undefined
            ),
          }}
          style={style}
          onEachFeature={onEachFeature}
        />
      )}

      {Object.entries(crimeData).map(([state, count]) => {
        const coords = stateCenters[state];
        if (!coords) return null;

        return (
          <Marker
            key={state}
            position={coords}
            icon={L.divIcon({
              className: "",
              html: `<div style="width:10px;height:10px;background:#dc2626;border-radius:50%;box-shadow:0 0 3px rgba(0,0,0,0.5);"></div>`,
              iconSize: [10, 10],
              iconAnchor: [5, 5],
            })}
          >
            <Tooltip sticky>
              <strong>{state}</strong>: {count} reports
            </Tooltip>
          </Marker>
        );
      })}

      <Legend />
    </MapContainer>
  );
}

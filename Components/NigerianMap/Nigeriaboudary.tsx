// components/NigeriaBoundary.tsx
import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

const NigeriaBoundary = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    // Fetch the GeoJSON file
    fetch("/nigeria-boundary.geojson")
      .then((res) => res.json())
      .then((data) => {
        const geojsonLayer = L.geoJSON(data, {
          style: {
            color: "#3388ff",
            weight: 2,
            fillOpacity: 0.1,
          },
        }).addTo(map);

        // Fit the map view to Nigeria's boundary
        map.fitBounds(geojsonLayer.getBounds());

        // Set max bounds to limit panning outside Nigeria
        map.setMaxBounds(geojsonLayer.getBounds());
        map.setMinZoom(6); // Optional: prevent too much zoom out
      });
  }, [map]);

  return null;
};

export default NigeriaBoundary;

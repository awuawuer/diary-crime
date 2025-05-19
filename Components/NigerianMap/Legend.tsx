import { useEffect } from "react";
import { useMap } from "react-leaflet";
import L from "leaflet";

// Match color scale to choropleth
const getColor = (d: number) => {
  return d > 100
    ? "#800026"
    : d > 90
    ? "#BD0026"
    : d > 80
    ? "#E31A1C"
    : d > 70
    ? "#FC4E2A"
    : d > 60
    ? "#FD8D3C"
    : d > 50
    ? "#FEB24C"
    : d > 40
    ? "#FED976"
    : "#FFEDA0";
};

const MapLegend = () => {
  const map = useMap();

  useEffect(() => {
    if (!map) return;

    const legend = new L.Control({ position: "bottomright" });

    legend.onAdd = function () {
      const div = L.DomUtil.create(
        "div",
        "info legend bg-white text-xs p-3 rounded shadow-md"
      );
      const grades = [0, 40, 50, 60, 70, 80, 90, 100];

      let labels = '<h4 class="font-semibold mb-2">Crime Intensity</h4>';

      for (let i = 0; i < grades.length; i++) {
        const from = grades[i];
        const to = grades[i + 1];

        labels += `
          <div class="flex items-center space-x-2 mb-1">
            <span style="background:${getColor(
              from + 1
            )}; width:16px; height:16px; display:inline-block; border-radius:4px;"></span>
            <span>${from}${to ? "&ndash;" + to : "+"}</span>
          </div>
        `;
      }

      div.innerHTML = labels;
      return div;
    };

    legend.addTo(map);

    return () => {
      legend.remove();
    };
  }, [map]);

  return null;
};

export default MapLegend;

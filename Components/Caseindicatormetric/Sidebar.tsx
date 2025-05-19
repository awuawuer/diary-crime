import React from "react";

export default function Sidebar({
  year,
  setYear,
}: {
  year: string;
  setYear: (year: string) => void;
}) {
  const years = ["2025", "2024", "2023", "2022", "2021"];
  return (
    <div className="w-full md:w-1/3 p-4">
      <div className="mb-4 border p-4 rounded shadow bg-white">
        <h2 className="font-semibold mb-2">Case indicator metrics</h2>
        <p className="text-sm text-gray-500 mb-3">Based on crime density</p>
        <ul className="space-y-2 text-sm">
          <li>
            <span className="inline-block w-4 h-4 bg-red-600 mr-2 rounded"></span>
            1000+
          </li>
          <li>
            <span className="inline-block w-4 h-4 bg-yellow-500 mr-2 rounded"></span>
            201 - 999
          </li>
          <li>
            <span className="inline-block w-4 h-4 bg-purple-800 mr-2 rounded"></span>
            199 - 200
          </li>
          <li>
            <span className="inline-block w-4 h-4 bg-gray-300 mr-2 rounded"></span>
            Less than 100
          </li>
        </ul>
      </div>

      <div className="border p-4 rounded shadow bg-white">
        <label htmlFor="year" className="block text-sm font-medium mb-2">
          Year
        </label>
        <select
          id="year"
          className="w-full border rounded p-2"
          value={year}
          onChange={(e) => setYear(e.target.value)}
        >
          {years.map((yr) => (
            <option key={yr} value={yr}>
              {yr}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
}

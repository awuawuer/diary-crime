"use client";

import { useState } from "react";
import { Search, Download, Pencil, Trash } from "lucide-react";

const agencies = [
  {
    id: 1,
    zone: "Central 1",
    type: "State Headquarters",
    agency: "Police",
    location: "Benue State",
    status: "Active",
  },
  {
    id: 2,
    zone: "Central 2",
    type: "State Headquarters",
    agency: "EFCC",
    location: "Kwara State",
    status: "Active",
  },
  {
    id: 3,
    zone: "Central 3",
    type: "State Headquarters",
    agency: "ICPC",
    location: "Kano State",
    status: "Pending",
  },
  // Add more as needed
];

const statusClass = {
  Active: "bg-green-100 text-green-700",
  Pending: "bg-yellow-100 text-yellow-700",
  Flagged: "bg-red-100 text-red-700",
};

export default function AgenciesPage() {
  const [search, setSearch] = useState("");

  return (
    <div className="p-4 sm:p-6 md:p-8">
      <div className="flex flex-col md:flex-row justify-between gap-4 mb-4">
        <h2 className="text-xl">Agencies (10)</h2>
        <div className="flex items-center gap-3 w-full md:w-auto">
          <div className="relative w-full md:w-64">
            <Search className="absolute left-3 top-2.5 h-5 w-5 text-gray-500" />
            <input
              type="text"
              placeholder="Search by name/zone/state"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="pl-10 pr-4 py-2 w-full border rounded-lg focus:outline-none focus:ring"
            />
          </div>
          <button className="bg-green-600 hover:bg-green-700 text-white px-4 py-2 rounded-lg text-sm flex items-center gap-2">
            <Download className="h-4 w-4" />
            Export
          </button>
        </div>
      </div>

      <div className="overflow-auto rounded-lg border shadow-sm">
        <table className="min-w-full bg-white text-sm text-left">
          <thead className="bg-gray-50 text-gray-700">
            <tr>
              <th className="px-4 py-3 font-normal">ID</th>
              <th className="px-4 py-3 font-normal">Zone</th>
              <th className="px-4 py-3 font-normal">Type</th>
              <th className="px-4 py-3 font-normal">Agency</th>
              <th className="px-4 py-3 font-normal">Location</th>
              <th className="px-4 py-3 font-normal">Status</th>
              <th className="px-4 py-3 font-normal">Action</th>
            </tr>
          </thead>
          <tbody>
            {agencies.map((agency) => (
              <tr key={agency.id} className="border-t">
                <td className="px-4 py-2">{agency.id}</td>
                <td className="px-4 py-2">{agency.zone}</td>
                <td className="px-4 py-2">{agency.type}</td>
                <td className="px-4 py-2">{agency.agency}</td>
                <td className="px-4 py-2">{agency.location}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs ${
                      statusClass[agency.status as keyof typeof statusClass]
                    }`}
                  >
                    {agency.status}
                  </span>
                </td>
                <td className="px-4 py-2 flex items-center gap-3 flex-wrap">
                  <button className="text-blue-600 hover:underline text-sm">
                    View
                  </button>
                  <button className="text-yellow-600 hover:underline text-sm">
                    Disable
                  </button>
                  <button
                    title="Edit"
                    className="text-gray-600 hover:text-blue-500"
                  >
                    <Pencil className="w-4 h-4" />
                  </button>
                  <button
                    title="Delete"
                    className="text-red-600 hover:text-red-800"
                  >
                    <Trash className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="flex justify-between items-center mt-4 text-sm">
        <p className="text-gray-500">← Previous</p>
        <div className="flex gap-1">
          {[1, 2, 3, "...", 10].map((page, idx) => (
            <button
              key={idx}
              className={`px-3 py-1 rounded-lg ${
                page === 1
                  ? "bg-green-600 text-white"
                  : "bg-gray-100 text-gray-700"
              }`}
            >
              {page}
            </button>
          ))}
        </div>
        <p className="text-gray-500">Next →</p>
      </div>
    </div>
  );
}

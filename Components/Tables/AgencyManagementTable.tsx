"use client";

import { useState } from "react";
import { Search, Download, Eye, Edit, Trash2 } from "lucide-react";
import Pagination from "@/Components/pagination";

const agencyData = [
  {
    zone: "Central",
    type: "State Headquarters",
    agency: "Police",
    location: "Benue State",
    status: "Active",
  },
  {
    zone: "District",
    type: "State Headquarters",
    agency: "NPCC",
    location: "Benue State",
    status: "Active",
  },
  {
    zone: "Central",
    type: "State Headquarters",
    agency: "NSCDC",
    location: "Kano State",
    status: "Inactive",
  },
  {
    zone: "Provincial",
    type: "State",
    agency: "Police",
    location: "Cross State",
    status: "Active",
  },
  {
    zone: "District",
    type: "State Headquarters",
    agency: "Police",
    location: "Katsina State",
    status: "Inactive",
  },
  {
    zone: "District",
    type: "State Headquarters",
    agency: "Police",
    location: "Enugu State",
    status: "Active",
  },
  {
    zone: "Central",
    type: "State Headquarters",
    agency: "Police",
    location: "Ebonyi State",
    status: "Inactive",
  },
  {
    zone: "Provincial",
    type: "State Headquarters",
    agency: "Police",
    location: "Cross River State",
    status: "Active",
  },
];

const StatusBadge = ({ status }: { status: string }) => {
  const color =
    status === "Active"
      ? "text-green-600 bg-green-100"
      : status === "Inactive"
      ? "text-red-600 bg-red-100"
      : "text-yellow-600 bg-yellow-100";

  return (
    <span className={`text-xs px-3 py-1 rounded-full font-medium ${color}`}>
      {status}
    </span>
  );
};

export default function AgenciesPage() {
  const [searchTerm, setSearchTerm] = useState("");

  const filteredData = agencyData.filter((item) =>
    Object.values(item).some((val) =>
      val.toLowerCase().includes(searchTerm.toLowerCase())
    )
  );

  return (
    <div className="p-4 sm:p-6 lg:p-10">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-6 gap-4">
        <div>
          <h1 className="text-lg sm:text-xl font-semibold text-gray-800">
            Agencies ({filteredData.length})
          </h1>
          <p className="text-sm text-gray-500">View all across the system</p>
        </div>

        {/* Search + Export */}
        <div className="flex items-center gap-2">
          <div className="relative w-full sm:w-72">
            <Search
              className="absolute left-2.5 top-3.5 text-gray-400"
              size={16}
            />
            <input
              type="text"
              placeholder="Search by name or zone ID"
              className="w-full pl-8 pr-4 py-2 border border-gray-200 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-green-500"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <button className="bg-green-600 text-white px-4 py-2 rounded-md text-sm hover:bg-green-700 flex items-center gap-2">
            <Download size={16} />
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-auto">
        <table className="min-w-full bg-white border border-gray-200 text-sm">
          <thead className="bg-gray-50 text-gray-600 font-medium text-left">
            <tr>
              <th className="p-3">S/N</th>
              <th className="p-3">Zone</th>
              <th className="p-3">Type</th>
              <th className="p-3">Agency</th>
              <th className="p-3">Location</th>
              <th className="p-3">Status</th>
              <th className="p-3 text-right">Actions</th>
            </tr>
          </thead>
          <tbody>
            {filteredData.map((item, idx) => (
              <tr
                key={idx}
                className="border-t border-gray-100 hover:bg-gray-50"
              >
                <td className="p-3">{idx + 1}</td>
                <td className="p-3">{item.zone}</td>
                <td className="p-3">{item.type}</td>
                <td className="p-3">{item.agency}</td>
                <td className="p-3">{item.location}</td>
                <td className="p-3">
                  <StatusBadge status={item.status} />
                </td>
                <td className="p-3 text-right space-x-2">
                  <button
                    className="text-gray-500 hover:text-blue-800 text-xs font-medium underline"
                    title="View"
                  >
                    View
                  </button>
                  <button
                    className="text-gray-500 hover:text-yellow-800 text-xs font-medium underline"
                    title="Disable"
                  >
                    Disable
                  </button>
                  <button
                    className="text-green-600 hover:text-green-800"
                    title="Edit"
                  >
                    <Edit size={16} />
                  </button>
                  <button
                    className="text-red-600 hover:text-red-800"
                    title="Delete"
                  >
                    <Trash2 size={16} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {/* Pagination */}
      <Pagination
        currentPage={1}
        totalPages={10}
        onPageChange={(page) => console.log("Go to", page)}
      />
    </div>
  );
}

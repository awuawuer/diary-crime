"use client";

import React from "react";
import { Edit, Trash, Eye, X } from "lucide-react";

type Jurisdiction = {
  sn: number;
  name: string;
  type: string;
  region: string;
  admins: string;
  users: number;
  cases: number;
  status: "Active" | "Inactive" | "Pending";
};

const jurisdictions: Jurisdiction[] = [
  {
    sn: 1,
    name: "Central Precinct",
    type: "State Headquarters",
    region: "North Central Zone",
    admins: "Inspector Jonah, ACP Bayo",
    users: 42,
    cases: 187,
    status: "Active",
  },
  {
    sn: 2,
    name: "Eastern Division",
    type: "Divisional Command",
    region: "South Eastern Zone",
    admins: "DSP Olumide",
    users: 28,
    cases: 94,
    status: "Active",
  },
  {
    sn: 3,
    name: "Western Outpost",
    type: "Station",
    region: "South Western Zone",
    admins: "ASP Chioma, Inspector David",
    users: 15,
    cases: 63,
    status: "Inactive",
  },
  {
    sn: 4,
    name: "Northern Territory",
    type: "Area Command",
    region: "North Eastern Zone",
    admins: "CSP Musa",
    users: 37,
    cases: 142,
    status: "Pending",
  },
];

const getStatusBadgeClass = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-100 text-green-700";
    case "Inactive":
      return "bg-red-100 text-red-700";
    case "Pending":
      return "bg-yellow-100 text-yellow-700";
    default:
      return "";
  }
};

export default function JurisdictionTable() {
  return (
    <div className="p-6 max-w-7xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Jurisdiction Overview
        </h2>
        <a
          href="#"
          className="text-blue-600 text-sm font-medium hover:underline"
        >
          View all
        </a>
      </div>

      <div className="overflow-x-auto bg-white rounded-xl border border-gray-200">
        <table className="min-w-full text-sm text-left">
          <thead className="bg-gray-50 text-gray-500 uppercase text-xs">
            <tr>
              {[
                "S/N",
                "Jurisdiction Name",
                "Type",
                "Region",
                "Assigned Admin(s)",
                "Users",
                "Cases",
                "Status",
                "Action",
              ].map((header) => (
                <th key={header} className="px-4 py-3 whitespace-nowrap">
                  {header}
                </th>
              ))}
            </tr>
          </thead>

          <tbody className="divide-y divide-gray-200 text-gray-700">
            {jurisdictions.map((j) => (
              <tr key={j.sn} className="hover:bg-gray-50">
                <td className="px-4 py-3">{j.sn}</td>
                <td className="px-4 py-3">{j.name}</td>
                <td className="px-4 py-3">{j.type}</td>
                <td className="px-4 py-3">{j.region}</td>
                <td className="px-4 py-3">{j.admins}</td>
                <td className="px-4 py-3">{j.users}</td>
                <td className="px-4 py-3">{j.cases}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusBadgeClass(
                      j.status
                    )}`}
                  >
                    {j.status}
                  </span>
                </td>
                <td className="px-4 py-3">
                  <div className="flex gap-2 items-center">
                    <button className="flex items-center text-gray-500 hover:text-blue-600 text-xs font-medium">
                      <Eye className="w-4 h-4 mr-1" />
                      View
                    </button>
                    <button className="flex items-center text-gray-500 hover:text-red-600 text-xs font-medium">
                      <X className="w-4 h-4 mr-1" />
                      Disable
                    </button>
                    <button className="text-gray-400 hover:text-green-600 p-1 rounded">
                      <Edit className="w-4 h-4" />
                    </button>
                    <button className="text-gray-400 hover:text-yellow-600 p-1 rounded">
                      <Trash className="w-4 h-4" />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

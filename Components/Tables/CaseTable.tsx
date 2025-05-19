"use client";

import { Eye, X, Edit, Trash } from "lucide-react";

type Case = {
  sn: number;
  jurisdictionName: string;
  type: string;
  agency: string;
  category: string;
  caseNumber: string;
  status: "Active" | "Inactive" | "Pending";
};

const cases: Case[] = [
  {
    sn: 1,
    jurisdictionName: "Central Precinct",
    type: "State Headquarters",
    agency: "Police",
    category: "Felony",
    caseNumber: "420-AB",
    status: "Active",
  },
  {
    sn: 2,
    jurisdictionName: "Central Precinct",
    type: "State Headquarters",
    agency: "EFCC",
    category: "Misdemeanour",
    caseNumber: "420-AB",
    status: "Active",
  },
  {
    sn: 3,
    jurisdictionName: "Central Precinct",
    type: "State Headquarters",
    agency: "NDLEA",
    category: "Drug trafficking",
    caseNumber: "420-AB",
    status: "Active",
  },
  {
    sn: 4,
    jurisdictionName: "Central Precinct",
    type: "State Headquarters",
    agency: "Police",
    category: "Hit and run",
    caseNumber: "420-AB",
    status: "Active",
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

export default function CaseOverviewTable() {
  return (
    <div className="p-6 max-w-6xl mx-auto">
      <div className="flex justify-between items-center mb-4">
        <h2 className="text-lg font-semibold text-gray-800">
          Case Overview Table
        </h2>
        <a
          href="#"
          className="text-green-600 text-sm font-medium hover:underline"
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
                "Agency",
                "Category",
                "Case No.",
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
            {cases.map((c) => (
              <tr key={c.sn} className="hover:bg-gray-50">
                <td className="px-4 py-3">{c.sn}</td>
                <td className="px-4 py-3">{c.jurisdictionName}</td>
                <td className="px-4 py-3">{c.type}</td>
                <td className="px-4 py-3">{c.agency}</td>
                <td className="px-4 py-3">{c.category}</td>
                <td className="px-4 py-3">{c.caseNumber}</td>
                <td className="px-4 py-3">
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-semibold ${getStatusBadgeClass(
                      c.status
                    )}`}
                  >
                    {c.status}
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

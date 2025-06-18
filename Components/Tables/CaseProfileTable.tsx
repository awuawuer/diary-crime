"use client";

import { useState } from "react";
import { FaEdit, FaTrash } from "react-icons/fa";
import Link from "next/link";
import Pagination from "@/Components/pagination";

const caseData = [
  {
    id: 1,
    date: "12/02/2025",
    division: "State Headquarters",
    agency: "Police",
    category: "Felony",
    caseNo: "420-AB",
    status: "Active",
  },
  {
    id: 2,
    date: "12/02/2025",
    division: "State Headquarters",
    agency: "Police",
    category: "Misdemeanour",
    caseNo: "420-AB",
    status: "Active",
  },
  {
    id: 3,
    date: "12/02/2025",
    division: "State Headquarters",
    agency: "Police",
    category: "Drug trafficking",
    caseNo: "420-AB",
    status: "Closed",
  },
  {
    id: 4,
    date: "12/02/2025",
    division: "State Headquarters",
    agency: "Police",
    category: "Hit and run",
    caseNo: "420-AB",
    status: "Pending",
  },
  {
    id: 5,
    date: "12/02/2025",
    division: "State Headquarters",
    agency: "Police",
    category: "Hit and run",
    caseNo: "420-AB",
    status: "Closed",
  },
  {
    id: 6,
    date: "12/02/2025",
    division: "State Headquarters",
    agency: "Police",
    category: "Hit and run",
    caseNo: "420-AB",
    status: "Active",
  },
  {
    id: 7,
    date: "12/02/2025",
    division: "State Headquarters",
    agency: "Police",
    category: "Hit and run",
    caseNo: "420-AB",
    status: "Active",
  },
  {
    id: 8,
    date: "12/02/2025",
    division: "State Headquarters",
    agency: "Police",
    category: "Hit and run",
    caseNo: "420-AB",
    status: "Active",
  },
];

const getStatusClass = (status: string) => {
  switch (status) {
    case "Active":
      return "bg-green-500 text-white";
    case "Closed":
      return "bg-yellow-400 text-black";
    case "Pending":
      return "bg-red-500 text-white";
    default:
      return "bg-gray-300 text-black";
  }
};

export default function CasesTable() {
  return (
    <div className="p-6 bg-white min-h-screen">
      {/* Header */}
      <div className="flex flex-col md:flex-row justify-between md:items-center mb-4 gap-4">
        <div>
          <h1 className="text-2xl font-semibold">Cases (8)</h1>
          <p className="text-gray-500">
            View and manage cases across the system
          </p>
        </div>
        <div className="flex items-center gap-2">
          <input
            type="text"
            placeholder="Search by name or case ID"
            className="border border-gray-300 px-4 py-2 rounded-md w-full md:w-72"
          />
          <button className="bg-green-700 text-white px-4 py-2 rounded-md">
            Export
          </button>
        </div>
      </div>

      {/* Table */}
      <div className="overflow-x-auto bg-white rounded-md border border-gray-200">
        <table className="min-w-full divide-y divide-gray-200 text-sm">
          <thead className="bg-gray-100 text-gray-700">
            <tr>
              <th className="px-4 py-2 text-left">S/N</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Division</th>
              <th className="px-4 py-2 text-left">Agency</th>
              <th className="px-4 py-2 text-left">Category</th>
              <th className="px-4 py-2 text-left">Case No.</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Action</th>
            </tr>
          </thead>
          <tbody className="text-gray-700">
            {caseData.map((item, index) => (
              <tr
                key={item.id}
                className="border-t border-gray-100 hover:bg-gray-50"
              >
                <td className="px-4 py-2">{index + 1}</td>
                <td className="px-4 py-2">{item.date}</td>
                <td className="px-4 py-2">{item.division}</td>
                <td className="px-4 py-2">{item.agency}</td>
                <td className="px-4 py-2">{item.category}</td>
                <td className="px-4 py-2">{item.caseNo}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-3 py-1 rounded-full text-xs font-semibold ${getStatusClass(
                      item.status
                    )}`}
                  >
                    {item.status}
                  </span>
                </td>
                <td className="px-4 py-2 space-x-2">
                  <Link href={`/cases/${item.id}`}>
                    <button className="border border-gray-500 px-3 py-1 rounded-full text-sm hover:bg-gray-100">
                      View
                    </button>
                  </Link>
                  <button className="text-gray-600">
                    <FaEdit />
                  </button>
                  <button className="text-gray-600">
                    <FaTrash />
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

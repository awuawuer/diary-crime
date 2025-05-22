"use client";

import React from "react";
import { Pencil, Trash2 } from "lucide-react";

const users = [
  {
    name: "Jonah Musa",
    email: "jonah.musa@lawforce.gov",
    role: "Admin",
    agency: "NPF",
    status: "Active",
    lastActive: "May 6, 2025 - 09:42am",
  },
  {
    name: "Jonah Musa",
    email: "jonah.musa@lawforce.gov",
    role: "Admin",
    agency: "EFCC",
    status: "Active",
    lastActive: "May 6, 2025 - 09:42am",
  },
  {
    name: "Jonah Musa",
    email: "jonah.musa@lawforce.gov",
    role: "Admin",
    agency: "NIS",
    status: "Active",
    lastActive: "May 6, 2025 - 09:42am",
  },
  {
    name: "Jonah Musa",
    email: "jonah.musa@lawforce.gov",
    role: "Admin",
    agency: "NPF",
    status: "Active",
    lastActive: "May 6, 2025 - 09:42am",
  },
  {
    name: "Jonah Musa",
    email: "jonah.musa@lawforce.gov",
    role: "Admin",
    agency: "NPF",
    status: "Inactive",
    lastActive: "May 6, 2025 - 09:42am",
  },
  {
    name: "Jonah Musa",
    email: "jonah.musa@lawforce.gov",
    role: "Admin",
    agency: "EFCC",
    status: "Inactive",
    lastActive: "May 6, 2025 - 09:42am",
  },
  {
    name: "Jonah Musa",
    email: "jonah.musa@lawforce.gov",
    role: "Admin",
    agency: "NDLEA",
    status: "Inactive",
    lastActive: "May 6, 2025 - 09:42am",
  },
  {
    name: "Jonah Musa",
    email: "jonah.musa@lawforce.gov",
    role: "Admin",
    agency: "NIS",
    status: "Inactive",
    lastActive: "May 6, 2025 - 09:42am",
  },
];

export default function UserRoleTable() {
  return (
    <div className="p-4 w-full overflow-x-auto">
      <table className="min-w-full bg-white text-sm rounded-lg overflow-hidden">
        <thead>
          <tr className="bg-gray-100 text-left">
            <th className="p-3">S/N</th>
            <th className="p-3">Name</th>
            <th className="p-3">Email</th>
            <th className="p-3">Role</th>
            <th className="p-3">Agency</th>
            <th className="p-3">Status</th>
            <th className="p-3">Last Active</th>
            <th className="p-3">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index} className="hover:bg-gray-50">
              <td className="p-3">{index + 1}</td>
              <td className="p-3">{user.name}</td>
              <td className="p-3">{user.email}</td>
              <td className="p-3">{user.role}</td>
              <td className="p-3">{user.agency}</td>
              <td className="p-3">
                <span
                  className={`px-2 py-1 rounded text-xs font-medium ${
                    user.status === "Active"
                      ? "bg-green-100 text-green-800"
                      : "bg-red-100 text-red-800"
                  }`}
                >
                  {user.status}
                </span>
              </td>
              <td className="p-3">{user.lastActive}</td>
              <td className="p-3 space-x-2">
                <button className="text-gray-700 text-xs px-2 py-1 border rounded">
                  View
                </button>
                <button className="text-gray-700 text-xs px-2 py-1 border rounded">
                  {user.status === "Active" ? "Deactivate" : "Activate"}
                </button>
                <button className="inline-flex items-center text-gray-600 hover:text-blue-600">
                  <Pencil className="w-4 h-4" />
                </button>
                <button className="inline-flex items-center text-gray-600 hover:text-red-600">
                  <Trash2 className="w-4 h-4" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

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

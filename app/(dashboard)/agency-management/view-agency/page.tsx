"use client";

import React from "react";
import Image from "next/image";
import { BadgeCheck, Edit, Eye, Plus, Trash } from "lucide-react";

export default function AgencyUserDashboard() {
  const users = [
    {
      id: 1,
      name: "John Abah",
      role: "Inspector",
      zone: "Admin",
      status: "Active",
    },
    {
      id: 2,
      name: "Peter Obi",
      role: "Sergeant",
      zone: "Admin",
      status: "Inactive",
    },
    { id: 3, name: "Ngugi", role: "Admin", zone: "Admin", status: "Inactive" },
    {
      id: 4,
      name: "Hycintha Ada",
      role: "Admin",
      zone: "Admin",
      status: "Active",
    },
  ];

  return (
    <div className="p-4 md:p-8 space-y-6">
      {/* Back link */}
      <div className="text-sm text-gray-600 underline cursor-pointer">
        ← Back to agency management
      </div>

      {/* User Overview */}
      <div className="bg-white p-6 rounded-xl shadow border space-y-4">
        <div className="flex justify-between items-start">
          <div className="space-y-2">
            <h2 className="text-xl font-semibold text-gray-800">
              NIGERIA POLICE FORCE
            </h2>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 text-sm text-gray-600">
              <p>
                <strong>Admin type:</strong> Directorate
              </p>
              <p>
                <strong>Authorization level:</strong> 5
              </p>
              <p>
                <strong>Role:</strong> Admin
              </p>
              <p>
                <strong>Employment No:</strong> CNA/012345-67
              </p>
              <p>
                <strong>First name:</strong> Peter
              </p>
              <p>
                <strong>Middle name:</strong> Budi
              </p>
              <p>
                <strong>Last name:</strong> Ngugi
              </p>
              <p>
                <strong>Email address:</strong> ngugi@gmail.com
              </p>
            </div>
          </div>
          <span className="text-green-600 bg-green-100 text-sm font-semibold px-3 py-1 rounded-full">
            ACTIVE
          </span>
        </div>
      </div>

      {/* Agency Details */}
      <div className="bg-white p-6 rounded-xl shadow border space-y-2">
        <h3 className="text-lg font-semibold">Agency details</h3>
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 text-sm text-gray-600">
          <p>
            <strong>Agency name:</strong> NIGERIA POLICE FORCE
          </p>
          <p>
            <strong>Location:</strong> S
          </p>
          <p>
            <strong>Zones:</strong> 4
          </p>
          <p>
            <strong>LocalGov:</strong> Gboko
          </p>
        </div>
        <p className="text-sm text-gray-500">Address: 4 Division N HQ</p>
      </div>

      {/* Zones Overview */}
      <div className="bg-white p-6 rounded-xl shadow border">
        <p className="text-sm text-gray-600">
          This agency has control over some zones. View agency
        </p>
        <p className="font-semibold text-gray-700">17 active zones</p>
      </div>

      {/* Users Table */}
      <div className="bg-white p-6 rounded-xl shadow border space-y-4">
        <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <p className="text-gray-800 font-semibold">Users assigned to zones</p>
          <div className="flex items-center gap-2 w-full md:w-auto">
            <div className="relative w-full md:w-64">
              <span className="absolute left-3 top-2.5 text-gray-400">
                <svg
                  width="16"
                  height="16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  viewBox="0 0 24 24"
                >
                  <path d="M21 21l-4.35-4.35" />
                  <circle cx="10" cy="10" r="7" />
                </svg>
              </span>
              <input
                type="text"
                placeholder="Search users"
                className="pl-8 pr-4 py-2 border rounded w-full text-sm"
              />
            </div>
            <button className="bg-green-600 hover:bg-green-700 text-white text-sm px-4 py-2 rounded flex items-center">
              <Plus size={16} className="mr-1" /> New user
            </button>
          </div>
        </div>

        {/* Table */}
        <div className="overflow-x-auto">
          <table className="min-w-full text-sm">
            <thead className="bg-gray-100 text-gray-600">
              <tr>
                <th className="text-left px-4 py-2">#</th>
                <th className="text-left px-4 py-2">Name</th>
                <th className="text-left px-4 py-2">Role</th>
                <th className="text-left px-4 py-2">Zone</th>
                <th className="text-left px-4 py-2">Status</th>
                <th className="text-left px-4 py-2">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y">
              {users.map((user) => (
                <tr key={user.id} className="hover:bg-gray-50">
                  <td className="px-4 py-2">{user.id}</td>
                  <td className="px-4 py-2">{user.name}</td>
                  <td className="px-4 py-2">{user.role}</td>
                  <td className="px-4 py-2">{user.zone}</td>
                  <td className="px-4 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        user.status === "Active"
                          ? "bg-green-100 text-green-600"
                          : "bg-red-100 text-red-600"
                      }`}
                    >
                      {user.status}
                    </span>
                  </td>
                  <td className="px-4 py-2 flex gap-2 items-center">
                    <Eye size={16} className="text-blue-600 cursor-pointer" />
                    <Edit size={16} className="text-gray-600 cursor-pointer" />
                    <Trash size={16} className="text-red-600 cursor-pointer" />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* Pagination */}
        <div className="flex items-center justify-between text-sm text-gray-500">
          <span>Showing 1 to 4 of 4 entries</span>
          <div className="flex gap-2 items-center">
            <button className="px-2 py-1 border rounded">Previous</button>
            <button className="px-2 py-1 border rounded bg-green-600 text-white">
              1
            </button>
            <button className="px-2 py-1 border rounded">2</button>
            <button className="px-2 py-1 border rounded">Next</button>
          </div>
        </div>
      </div>

      {/* Contained cases */}
      <div className="bg-white p-6 rounded-xl shadow border">
        <div className="flex justify-between items-center">
          <div>
            <p className="text-sm text-gray-600">Contained cases profiled</p>
            <p className="text-lg font-semibold text-gray-800">214 cases</p>
          </div>
          <button className="px-4 py-2 border rounded text-green-600 border-green-600 hover:bg-green-50">
            View
          </button>
        </div>
      </div>

      {/* Last session */}
      <div className="bg-white p-6 rounded-xl shadow border">
        <p className="text-sm text-gray-600">Last session</p>
        <p className="text-lg font-semibold text-gray-800">28th April, 2025</p>
      </div>
    </div>
  );
}
// This component is a user dashboard for an agency management system.
// It displays user details, agency information, a list of users assigned to zones,
// and their respective statuses.
// The dashboard includes sections for user overview, agency details, zones overview,
// a table of users with actions, contained cases, and the last session date.
// The design is responsive and uses Tailwind CSS for styling.
// The component is structured to provide a clean and organized view of the agency's user management,

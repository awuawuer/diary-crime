"use client";
import React from "react";

export default function ZonalDashboard() {
  return (
    <div>
      <h1 className="text-2xl font-bold mb-6">Welcome, Zonal Admin</h1>

      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-8">
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Total Cases</p>
          <h2 className="text-2xl font-bold">1,254</h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Active Jurisdictions</p>
          <h2 className="text-2xl font-bold">18</h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Known Reporters</p>
          <h2 className="text-2xl font-bold">340</h2>
        </div>
        <div className="bg-white p-4 rounded-lg shadow">
          <p className="text-gray-500">Resolved Cases</p>
          <h2 className="text-2xl font-bold">890</h2>
        </div>
      </div>

      <div className="bg-white p-6 rounded-lg shadow mb-6">
        <h2 className="text-lg font-semibold mb-4">Recent Case Reports</h2>
        <table className="w-full text-sm">
          <thead>
            <tr className="text-left text-gray-600">
              <th className="p-2">Type</th>
              <th className="p-2">Location</th>
              <th className="p-2">Date</th>
              <th className="p-2">Status</th>
              <th className="p-2">Actions</th>
            </tr>
          </thead>
          <tbody>
            <tr className="border-t">
              <td className="p-2">Robbery</td>
              <td className="p-2">Zaria, Kaduna</td>
              <td className="p-2">2025-05-23</td>
              <td className="p-2 text-yellow-600">Pending</td>
              <td className="p-2">
                <button className="text-blue-600 hover:underline">View</button>
              </td>
            </tr>
            {/* Repeat rows or map data */}
          </tbody>
        </table>
      </div>

      {/* You can include chart or map component here */}
    </div>
  );
}

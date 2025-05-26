"use client";

import React, { useState } from "react";
import UserCard from "@/Component/UserCard/UserCard";
import AgencyManagementTable from "@/Components/Tables/AgencyManagementTable";
import AddZoneModal from "@/Components/modals/AddZoneModal"; // path might differ

const AgencyManagementPage = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="p-4 space-y-6">
      {/* Cards and Add Button */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-2 lg:space-y-0 lg:gap-2 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 flex-grow">
          <UserCard type="Total Agencies" value={8} bgColor="bg-green-100" />
          <UserCard type="Active Agencies" value={7} bgColor="bg-gray-100" />
          <UserCard
            type="Inactive Agencies"
            value={1}
            bgColor="bg-yellow-100"
          />
        </div>

        <button
          onClick={() => setShowModal(true)}
          className="bg-green-700 hover:bg-green-800 text-white text-sm font-medium px-4 py-2 rounded"
        >
          Add New Zone
        </button>
      </div>

      {/* Table */}
      <div className="min-h-screen bg-gray-100">
        <AgencyManagementTable />
      </div>

      {/* Show modal only if true */}
      {showModal && <AddZoneModal onClose={() => setShowModal(false)} />}
    </main>
  );
};

export default AgencyManagementPage;

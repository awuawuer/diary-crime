"use client";
import React, { useState } from "react";
import UserCard from "@/Component/UserCard/UserCard";
import CaseProfileTable from "@/Components/Tables/CaseProfileTable";

const userDashboard = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <main className="p-4 space-y-6">
      {/* Cards and Add Button */}
      <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center space-y-2 lg:space-y-0 lg:gap-2 w-full">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-2 flex-grow">
          <UserCard type="TOTAL PROFILES" value={8} bgColor="bg-green-100" />
          <UserCard type="CLOSED CASES" value={2} bgColor="bg-gray-100" />
          <UserCard type="PENDING CASES" value={1} bgColor="bg-yellow-100" />
          <UserCard type="ACTIVE CASES" value={5} bgColor="bg-orange-100" />
        </div>
      </div>

      {/* Table */}
      <div className="min-h-screen bg-gray-100">
        <CaseProfileTable />
      </div>
    </main>
  );
};

export default userDashboard;

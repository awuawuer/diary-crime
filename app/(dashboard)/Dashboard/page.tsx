"use client";

import { useState } from "react";
import dynamic from "next/dynamic";
import UserCard from "@/Component/UserCard/UserCard";
import MetricCard from "@/Component/MatricCard/MatricCard";
import Sidebar from "@/Components/Caseindicatormetric/Sidebar";
// import Admintable from "@/Components/Tables/Admintable";
import CaseTable from "@/Components/Tables/CaseTable";
import JurisdictionTable from "@/Components/Tables/JurisdictionTable";

const NigeriaChoroplethMap = dynamic<{ year: string }>(
  () => import("@/Components/NigerianMap/NigeriaChoroplethMap"),
  { ssr: false }
);

const AdminPage = () => {
  const [year, setYear] = useState("2025");

  return (
    <main className="p-4 space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <UserCard type="Total Case" value={1234} bgColor="bg-green-100" />
        <UserCard type="Total Jurisdiction" value={32} bgColor="bg-gray-100" />
        <UserCard type="Pending Case" value={87} bgColor="bg-yellow-100" />
        <UserCard type="Flagged Report" value={5} bgColor="bg-red-100" />
      </div>

      <MetricCard
        title="Crime metric visualization"
        subtitle="View crime data based on states"
      />

      <div className="flex flex-col md:flex-row min-h-screen p-4 bg-gray-50">
        <div className="w-full md:w-2/3">
          <h2 className="text-xl font-semibold mb-4">Nigeria Crime Data Map</h2>
          <NigeriaChoroplethMap year={year} /> {/* ✅ This will work now */}
        </div>
        <Sidebar year={year} setYear={setYear} />
      </div>
      <div className="min-h-screen bg-gray-100">
        {/* <main className="container mx-auto py-8 px-4 lg:px-8"> */}
        <div className="space-y-8">
          <CaseTable />
          <JurisdictionTable />
        </div>
        {/* </main> */}
      </div>
    </main>
  );
};

export default AdminPage;

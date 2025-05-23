"use client";
import React from "react";
import UserCard from "@/Component/UserCard/UserCard";
import CaseoversihtTable from "@/Components/Tables/caseoversightTable/caseoversightTable";
import CountChart from "@/Component/CountChart/CountChart";
import AttendanceChart from "@/Component/ArrestChart/ArrestChart";

const AdminPage = () => {
  return (
    <main className="p-4 space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <UserCard type="Total Case" value={1234} bgColor="bg-green-100" />
        <UserCard type="Total Jurisdiction" value={32} bgColor="bg-gray-100" />
        <UserCard type="Pending Case" value={87} bgColor="bg-yellow-100" />
        <UserCard type="Flagged Report" value={5} bgColor="bg-red-100" />
      </div>

      {/* <MetricCard
        title="Crime metric visualization"
        subtitle="View crime data based on states"
      /> */}

      {/* MIDDLE CHARTS */}
      <div className="flex gap-4 flex-col lg:flex-row">
        {/* COUNT CHART */}
        <div className="w-full lg:w-1/3 h-[450px]">
          <CountChart />
        </div>
        {/* ATTENDANCE CHART */}
        <div className="w-full lg:w-2/3 h-[450px]">
          <AttendanceChart />
        </div>
      </div>
      <div className="min-h-screen bg-gray-100">
        {/* <main className="container mx-auto py-8 px-4 lg:px-8"> */}
        <div className="space-y-8">
          <CaseoversihtTable />
        </div>
        {/* </main> */}
      </div>
    </main>
  );
};

export default AdminPage;

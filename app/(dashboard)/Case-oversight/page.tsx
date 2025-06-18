"use client";
import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import UserCard from "@/Component/UserCard/UserCard";
import CaseoversihtTable from "@/Components/Tables/caseoversightTable/caseoversightTable";
import CountChart from "@/Components/charts/CountChart";
import ArrestChart from "@/Components/charts/ArrestChart";

const AdminPage = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // ← prevent premature render

  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated !== "true") {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return null; // or a spinner
  return (
    <main className="p-4 space-y-8">
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 w-full">
        <UserCard type="Total Case" value={1234} bgColor="bg-green-100" />
        <UserCard type="Total Jurisdiction" value={32} bgColor="bg-gray-100" />
        <UserCard type="Pending Case" value={87} bgColor="bg-yellow-100" />
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
        {/* Arrest CHART */}
        <div className="w-full lg:w-2/3 h-[450px]">
          <ArrestChart />
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

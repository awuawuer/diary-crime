"use client";

import React from "react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { BarChart2, Users, Shield, FileText } from "lucide-react";
import AnalyticsBarChart from "@/Components/charts/AnalyticsBarChart";
import AnalyticsPieChart from "@/Components/charts/AnalyticsPieChart";

const metricCard = [
  {
    title: "Total Reports",
    value: 1280,
    icon: <FileText className="text-blue-600" />,
  },
  {
    title: "Known Reporters",
    value: 215,
    icon: <Users className="text-green-600" />,
  },
  {
    title: "Anonymous Reports",
    value: 53,
    icon: <BarChart2 className="text-red-600" />,
  },
  {
    title: "Active Agencies",
    value: 32,
    icon: <Shield className="text-yellow-600" />,
  },
];

export default function AnalyticsDashboard() {
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
    <div className="p-6 space-y-6">
      <h1 className="text-2xl font-bold text-gray-800">Analytics & Reports</h1>

      {/* Metric Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {metricCard.map((card, index) => (
          <div
            key={index}
            className="bg-white p-4 rounded-lg shadow hover:shadow-md transition"
          >
            <div className="flex items-center space-x-4">
              <div className="bg-gray-100 p-3 rounded-full">{card.icon}</div>
              <div>
                <p className="text-sm text-gray-500">{card.title}</p>
                <p className="text-xl font-semibold text-gray-700">
                  {card.value}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <AnalyticsBarChart />
      <AnalyticsPieChart />
    </div>
  );
}

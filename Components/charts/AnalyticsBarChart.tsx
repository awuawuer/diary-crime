"use client";

import React from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const barData = [
  { month: "Jan", reports: 40 },
  { month: "Feb", reports: 60 },
  { month: "Mar", reports: 75 },
  { month: "Apr", reports: 90 },
  { month: "May", reports: 50 },
  { month: "Jun", reports: 100 },
  { month: "Jul", reports: 85 },
  { month: "Aug", reports: 70 },
  { month: "Sep", reports: 65 },
  { month: "Oct", reports: 95 },
  { month: "Nov", reports: 80 },
  { month: "Dec", reports: 110 },
];

const BarChartComponent = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Monthly Crime Reports</h2>
      <ResponsiveContainer width="100%" height={300}>
        <BarChart data={barData}>
          <XAxis dataKey="month" stroke="#888888" />
          <YAxis stroke="#888888" />
          <Tooltip />
          <Bar dataKey="reports" fill="#10b981" radius={[5, 5, 0, 0]} />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default BarChartComponent;

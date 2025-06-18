"use client";

import React from "react";
import { PieChart, Pie, Cell, ResponsiveContainer, Tooltip } from "recharts";

const pieData = [
  { name: "NPF", value: 400, fullName: "Nigeria Police Force" },
  {
    name: "NSCDC",
    value: 300,
    fullName: "Nigeria Security and Civil Defence Corps",
  },
  {
    name: "NAPTIP",
    value: 300,
    fullName: "National Agency for the Prohibition of Trafficking in Persons",
  },
  { name: "NAF", value: 80, fullName: "Nigerian Air Force" },
  { name: "DSS", value: 50, fullName: "Department of State Services" },
  { name: "NIS", value: 200, fullName: "Nigeria Immigration Service" },
  { name: "NCS", value: 200, fullName: "Nigeria Customs Service" },
  {
    name: "EFCC",
    value: 200,
    fullName: "Economic and Financial Crimes Commission",
  },
  {
    name: "NDLEA",
    value: 200,
    fullName: "National Drug Law Enforcement Agency",
  },
  { name: "FRSC", value: 200, fullName: "Federal Road Safety Corps" },
  { name: "NIA", value: 200, fullName: "National Intelligence Agency" },
  { name: "NCoS", value: 200, fullName: "Nigeria Correctional Service" },
];

const COLORS = [
  "#2563eb", // NPF - Blue
  "#16a34a", // NSCDC - Green
  "#f59e0b", // NAPTIP - Amber
  "#dc2626", // NAF - Red
  "#7c3aed", // DSS - Purple
  "#0d9488", // NIS - Teal
  "#f43f5e", // NCS - Rose
  "#eab308", // EFCC - Yellow
  "#4f46e5", // NDLEA - Indigo
  "#10b981", // FRSC - Emerald
  "#ea580c", // NIA - Orange
  "#6b7280", // NCoS - Gray
];

const CustomTooltip = ({ active, payload }: any) => {
  if (active && payload && payload.length) {
    return (
      <div className="bg-white border border-gray-300 px-3 py-2 rounded shadow text-sm">
        <strong>{payload[0].payload.fullName}</strong>: {payload[0].value}{" "}
        reports
      </div>
    );
  }
  return null;
};

const PieChartComponent = () => {
  return (
    <div className="bg-white p-6 rounded-lg shadow">
      <h2 className="text-lg font-semibold mb-4">Reports by Agency</h2>
      <ResponsiveContainer width="100%" height={400}>
        <PieChart>
          <Pie
            data={pieData}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={({ name }) => name}
            outerRadius={150}
            fill="#8884d8"
            dataKey="value"
          >
            {pieData.map((entry, index) => (
              <Cell key={`cell-${index}`} fill={COLORS[index]} />
            ))}
          </Pie>
          <Tooltip content={<CustomTooltip />} />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default PieChartComponent;

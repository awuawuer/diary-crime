"use client";
import { useState } from "react";

import CaseReportTable from "@/Component/CaseReportTable/CaseReportTable"; // Link to case reports
import KnownReporter from "@/Component/KnownReporter/KnownReporter"; // Link to submission form

export default function Dashboard() {
  const [activePage, setActivePage] = useState("dashboard");

  const renderContent = () => {
    switch (activePage) {
      case "dashboard":
        return <div>📊 Welcome to your Dashboard</div>;
      case "reports":
        return (
          <div>
            📄 Your Case Reports
            <CaseReportTable />
          </div>
        );
      case "submit":
        return (
          <div>
            📝 Submit New Information
            <KnownReporter />
          </div>
        );
      case "settings":
        return <div>⚙️ Account Settings (coming soon)</div>;
      default:
        return null;
    }
  };

  return (
    <div className="flex min-h-screen bg-gray-100">
      {/* Sidebar */}
      <div className="w-64 bg-white p-6 shadow-lg">
        <h2 className="text-xl font-bold mb-6">Reporter Portal</h2>
        <ul className="space-y-4 text-gray-700 font-medium">
          <li
            className={`hover:text-blue-600 cursor-pointer ${
              activePage === "dashboard" ? "text-blue-600" : ""
            }`}
            onClick={() => setActivePage("dashboard")}
          >
            🏠 Dashboard
          </li>
          <li
            className={`hover:text-blue-600 cursor-pointer ${
              activePage === "reports" ? "text-blue-600" : ""
            }`}
            onClick={() => setActivePage("reports")}
          >
            📄 Case Report History
          </li>
          <li
            className={`hover:text-blue-600 cursor-pointer ${
              activePage === "submit" ? "text-blue-600" : ""
            }`}
            onClick={() => setActivePage("submit")}
          >
            📝 Report New Case
          </li>
          <li
            className={`hover:text-blue-600 cursor-pointer ${
              activePage === "settings" ? "text-blue-600" : ""
            }`}
            onClick={() => setActivePage("settings")}
          >
            ⚙️ Settings
          </li>
        </ul>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-8">
        <h1 className="text-2xl font-semibold mb-6 capitalize">
          {activePage.replace(/^\w/, (c) => c.toUpperCase())}
        </h1>
        <div className="bg-white p-6 rounded-xl shadow">{renderContent()}</div>
      </div>
    </div>
  );
}

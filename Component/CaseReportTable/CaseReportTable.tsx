"use client";
import React, { useState } from "react";
import CaseDetailsModal from "@/Components/CaseDetailsModal/CaseDetailsModal"; // adjust path if needed

interface CaseReport {
  reporterName: string;
  typeOfCrime: string;
  location: string;
  date: string;
  time: string;
  crimeDescription: string;
  status: "Pending" | "In Review" | "Resolved";
}

const mockCaseReports: CaseReport[] = [
  {
    reporterName: "Jane Doe",
    typeOfCrime: "Theft",
    location: "123 Market St",
    date: "2025-05-10",
    time: "14:30",
    crimeDescription:
      "A wallet was stolen from a parked car near the grocery store.",
    status: "Pending",
  },
  {
    reporterName: "John Smith",
    typeOfCrime: "Assault",
    location: "Green Park",
    date: "2025-05-09",
    time: "18:15",
    crimeDescription:
      "Altercation between two individuals near the playground.",
    status: "In Review",
  },
];

export default function CaseReportTable() {
  const [selectedReport, setSelectedReport] = useState<CaseReport | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewDetails = (report: CaseReport) => {
    setSelectedReport(report);
    setIsModalOpen(true);
  };

  return (
    <>
      <div className="overflow-x-auto rounded-lg shadow-md bg-white mt-6">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-100 text-gray-600 text-sm font-semibold">
            <tr>
              <th className="px-4 py-2 text-left">Reporter</th>
              <th className="px-4 py-2 text-left">Crime Type</th>
              <th className="px-4 py-2 text-left">Location</th>
              <th className="px-4 py-2 text-left">Date</th>
              <th className="px-4 py-2 text-left">Time</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
            {mockCaseReports.map((report, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{report.reporterName}</td>
                <td className="px-4 py-2">{report.typeOfCrime}</td>
                <td className="px-4 py-2">{report.location}</td>
                <td className="px-4 py-2">{report.date}</td>
                <td className="px-4 py-2">{report.time}</td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded text-xs font-semibold ${
                      report.status === "Pending"
                        ? "bg-yellow-100 text-yellow-800"
                        : report.status === "In Review"
                        ? "bg-blue-100 text-blue-800"
                        : "bg-green-100 text-green-800"
                    }`}
                  >
                    {report.status}
                  </span>
                </td>
                <td className="px-4 py-2">
                  <button
                    className="text-blue-600 hover:underline"
                    onClick={() => handleViewDetails(report)}
                  >
                    View Details
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <CaseDetailsModal
        isOpen={isModalOpen}
        report={selectedReport}
        onClose={() => setIsModalOpen(false)}
      />
    </>
  );
}

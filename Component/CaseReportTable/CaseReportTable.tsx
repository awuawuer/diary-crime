"use client";
import React, { useEffect, useState } from "react";
import CaseDetailsModal from "@/Components/CaseDetailsModal/CaseDetailsModal";

interface CaseReport {
  type_of_crime: string;
  crime_location: string;
  crime_date: string;
  crime_time: string;
  crime_description: string;
  status: string;
}

export default function CaseReportTable() {
  const [known, setReport] = useState<CaseReport[]>([]);
  const [selectedReport, setSelectedReport] = useState<CaseReport | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // Fetch reports on mount
  useEffect(() => {
    const fetchReports = async () => {
      try {
        const res = await fetch("http://localhost/crime_api/known", {
          credentials: "include",
        });
        const data = await res.json();
        setReport(Array.isArray(data) ? data : []);
      } catch (err) {
        console.error("Failed to fetch report", err);
      }
    };

    fetchReports();
  }, []);

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
              <th className="px-4 py-2 text-left">Type of Crime</th>
              <th className="px-4 py-2 text-left">Crime Location</th>
              <th className="px-4 py-2 text-left">Crime Date</th>
              <th className="px-4 py-2 text-left">Crime Time</th>
              <th className="px-4 py-2 text-left">Status</th>
              <th className="px-4 py-2 text-left">Actions</th>
            </tr>
          </thead>
          <tbody className="text-sm text-gray-700 divide-y divide-gray-200">
            {known.map((report, index) => (
              <tr key={index}>
                <td className="px-4 py-2">{report.type_of_crime}</td>
                <td className="px-4 py-2">{report.crime_location}</td>
                <td className="px-4 py-2">{report.crime_date}</td>
                <td className="px-4 py-2">{report.crime_time}</td>
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

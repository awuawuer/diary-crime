"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: {
    reporterName: string;
    typeOfCrime: string;
    location: string;
    date: string;
    time: string;
    crimeDescription: string;
    status: string;
  } | null;
}

export default function CaseDetailsModal({
  isOpen,
  onClose,
  report,
}: ModalProps) {
  if (!isOpen || !report) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 flex items-center justify-center z-50">
      <div className="bg-white w-[90%] max-w-lg p-6 rounded-lg shadow-lg">
        <h2 className="text-xl font-bold mb-4">Case Details</h2>
        <div className="space-y-2 text-sm text-gray-800">
          <p>
            <strong>Reporter:</strong> {report.reporterName}
          </p>
          <p>
            <strong>Type of Crime:</strong> {report.typeOfCrime}
          </p>
          <p>
            <strong>Location:</strong> {report.location}
          </p>
          <p>
            <strong>Date:</strong> {report.date}
          </p>
          <p>
            <strong>Time:</strong> {report.time}
          </p>
          <p>
            <strong>Status:</strong> {report.status}
          </p>
          <p>
            <strong>Description:</strong> {report.crimeDescription}
          </p>
        </div>
        <div className="mt-6 flex justify-end">
          <button
            onClick={onClose}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700 transition"
          >
            Close
          </button>
        </div>
      </div>
    </div>
  );
}

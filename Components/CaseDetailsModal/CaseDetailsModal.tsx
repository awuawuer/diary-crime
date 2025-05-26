"use client";
import React from "react";

interface ModalProps {
  isOpen: boolean;
  onClose: () => void;
  report: {
    name: string;
    type_of_crime: string;
    crime_location: string;
    crime_date: string;
    crime_time: string;
    report_date: string;
    report_time: string;
    crime_description: string;
    victim_name: string;
    witness_name: string;
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
        <div className="grid gap-3 text-sm text-gray-800">
          <p>
            <span className="font-semibold">Reporter Name:</span> {report.name}
          </p>
          <p>
            <span className="font-semibold">Type of Crime:</span>{" "}
            {report.type_of_crime}
          </p>
          <p>
            <span className="font-semibold">Crime Location:</span>{" "}
            {report.crime_location}
          </p>
          <p>
            <span className="font-semibold">Crime Date:</span>{" "}
            {report.crime_date}
          </p>
          <p>
            <span className="font-semibold">Crime Time:</span>{" "}
            {report.crime_time}
          </p>
          <p>
            <span className="font-semibold">Crime Report Date:</span>{" "}
            {report.report_date}
          </p>
          <p>
            <span className="font-semibold">Crime Report Time:</span>{" "}
            {report.report_time}
          </p>
          <p>
            <span className="font-semibold">Crime Description:</span>{" "}
            {report.crime_description}
          </p>
          <p>
            <span className="font-semibold">Victim Name:</span>{" "}
            {report.victim_name}
          </p>
          <p>
            <span className="font-semibold">Witness Name:</span>{" "}
            {report.witness_name}
          </p>
          <p>
            <span className="font-semibold">Status:</span> {report.status}
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

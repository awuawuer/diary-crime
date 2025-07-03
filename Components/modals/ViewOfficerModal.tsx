// components/modals/ViewOfficerModal.tsx
"use client";

import { useEffect, useState } from "react";
import { X } from "lucide-react";


interface ViewOfficerModalProps {
  officerId: string;
  onClose: () => void;
}

export default function ViewOfficerModal({ officerId, onClose }: ViewOfficerModalProps) {
  const [officer, setOfficer] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchOfficer = async () => {
      try {
        const res = await fetch(`http://localhost/crime_api/officers/${officerId}`);
        const data = await res.json();
        setOfficer(data);
      } catch (error) {
        console.error("Failed to fetch officer:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchOfficer();
  }, [officerId]);

  if (loading) return <div className="p-4">Loading...</div>;

  if (!officer) return <div className="p-4 text-red-500">Officer not found.</div>;

  const handlePrint = () => {
    const printContent = document.getElementById("print-area");
    if (printContent) {
      const win = window.open("", "", "width=800,height=600");
      if (win) {
        win.document.write(`
          <html>
            <head><title>Print Officer</title></head>
            <body>${printContent.innerHTML}</body>
          </html>
        `);
        win.document.close();
        win.print();
      }
    }
  };

  const handleExport = () => {
    const dataStr = JSON.stringify(officer, null, 2);
    const blob = new Blob([dataStr], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = `officer_${officer.id}.json`;
    link.click();
    URL.revokeObjectURL(url);
  };


  return (
    <div className="fixed inset-0 bg-black/30 backdrop-blur-sm flex justify-center items-center z-50">
    <div className="bg-white p-6 rounded-md shadow-lg max-w-lg w-full">
    <button className="absolute top-2 right-2" onClick={onClose}>
          <X className="w-5 h-5 text-gray-600" />
        </button>

      <div className="flex justify-center mb-4">
  <img
    src={
      officer.photo
        ? (officer.photo.startsWith("http")
            ? officer.photo
            : `http://localhost/crime_api${officer.photo}`)
        : "/default-profile.jpg"
    }
    alt="Profile"
    className="w-40 h-40 rounded-full object-cover border"
  />
</div>
<div id="print-area">
        <h2 className="text-lg font-semibold mb-4">Officer Details</h2>
        <p><strong>Code:</strong> {officer.officer_code}</p>
        <p><strong>Agency:</strong> {officer.agency_name}</p>
        <p><strong>Zone:</strong> {officer.zone_name}</p>
        <p><strong>State:</strong> {officer.state_name}</p>
        <p><strong>LGA:</strong> {officer.lga_name}</p>
        <p><strong>Division:</strong> {officer.division_name}</p>
        <p><strong>Name:</strong> {officer.first_name} {officer.middle_name} {officer.last_name}</p>
        <p><strong>Email:</strong> {officer.email}</p>
        {/* <p><strong>Role:</strong> {officer.role}</p> */}
        <p><strong>Role Id:</strong> {officer.role_name}</p>
        <p><strong>Status:</strong> {officer.status}</p>
        <p><strong>Rank:</strong> {officer.officer_rank}</p>
        <p><strong>Employment Number:</strong> {officer.employment_number}</p>
        <p><strong>Authorization Level:</strong> {officer.authorization_level}</p>
        {/* <p><strong>Role:</strong> {officer.role}</p> */}
        <p><strong>Phone:</strong> {officer.phone}</p>
        <p><strong>Email:</strong> {officer.email}</p>
        <p><strong>last login:</strong> {officer.last_active}</p>
        <p><strong>Date created:</strong> {officer.created_at}</p>
        <p><strong>Date Updated:</strong> {officer.updated_at}</p>
        {/* Add more fields as needed */}
        <button onClick={onClose} className="mt-4 bg-blue-600 text-white px-4 py-2 rounded">Close</button>
        <button onClick={handlePrint} className="inline-flex items-center px-4 py-2 bg-gray-500 text-white rounded hover:bg-gray-600">
            🖨️ Print
          </button>

          <button onClick={handleExport} className="inline-flex items-center px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700">
            ⬇️ Export
          </button>

          
      </div>
    </div>
    </div>
  );
}

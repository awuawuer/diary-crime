"use client";
import { useEffect, useState } from "react";

type AccessRequest = {
  id: number;
  suspect_id: number;
  requesting_agency: string;
  approving_agency: string;
  approved_by: string;
  requesting_officer: string;
  reason_for_request: string;
  status: string;
};

export default function AccessRequestList() {
  const [requests, setRequests] = useState<AccessRequest[]>([]);
  const [info, setInfo] = useState("");

  const fetchRequests = async () => {
    try {
      const res = await fetch("http://localhost/crime_api/access-requests");
      const data = await res.json();
  
      if (Array.isArray(data.requests)) {
        setRequests(data.requests);
        setInfo("");
      } else {
        setRequests([]);
        setInfo("No access requests found.");
      }
    } catch (error) {
      console.error("Fetch error:", error);
      setRequests([]);
      setInfo("Failed to fetch access requests.");
    }
  };

  useEffect(() => {
    fetchRequests();
  }, []);
  
    
  const handleStatusChange = async (id: number, status: string) => {
    try {
      const res = await fetch(`http://localhost/crime_api/access-request/${id}`, {
        method: "PATCH",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ status }),
      });
  
      const result = await res.json();
  
      if (!res.ok) {
        setInfo(result.message || "Update failed");
        return;
      }
  
      setInfo(result.message || "Status updated");
  
      // Delay fetch to show message for a bit
      setTimeout(() => {
        fetchRequests();
        setInfo(""); // Clear the message after fetch
      }, 2000); // Show the message for 2 seconds
  
    } catch (err) {
      console.error("Request error:", err);
      setInfo("An error occurred while updating");
    }
  };
      
  return (
    <div className="max-w-4xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Access Requests for Approval</h2>

      {requests.length === 0 ? (
        <p>No access requests found.</p>
      ) : (
        <div className="space-y-4">
          {requests.map((req) => (
            <div key={req.id} className="border p-4 rounded shadow">
              <p><strong>Suspect ID:</strong> {req.suspect_id}</p>
              <p><strong>From:</strong> {req.requesting_agency} - {req.requesting_officer}</p>
              <p><strong>To:</strong> {req.approving_agency} - {req.approved_by}</p>
              <p><strong>Reason:</strong> {req.reason_for_request}</p>
              <p><strong>Status:</strong> {req.status}</p>

              <select
                className="mt-2 border px-2 py-1 rounded"
                value={req.status}
                onChange={(e) => handleStatusChange(req.id, e.target.value)}
              >
                <option value="pending">Pending</option>
                <option value="approved">Approve</option>
                <option value="declined">Decline</option>
              </select>
            </div>
          ))}
        </div>
      )}

{info && (
  <p className="mt-4 text-center text-sm text-green-600 transition-opacity duration-300">
    {info}
  </p>
)}
    </div>
  );
}

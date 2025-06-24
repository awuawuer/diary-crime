"use client";
import { useState } from "react";

type Suspect = {
  id: number;
  first_name: string;
  middle_name: string;
  last_name: string;
  suspect_code: string;
  nin: string;
  profiled_agency: string;
};

export default function SearchSuspect() {
  const [search, setSearch] = useState("");
  const [results, setResults] = useState<Suspect[]>([]);
  const [info, setInfo] = useState("");

  const handleSearch = async () => {
    setInfo(""); // Clear previous messages
    setResults([]); // Clear previous results

    const res = await fetch(`http://localhost/crime_api/suspects?search=${encodeURIComponent(search)}`);
    const data = await res.json();

    if (data.suspects && data.suspects.length > 0) {
      setResults(data.suspects);
    } else {
      setInfo("No suspects found for your search.");
    }
  };

  const requestAccess = async (suspect: Suspect) => {
    const payload = {
      suspect_id: suspect.id,
      requesting_agency: "EFCC", //Session of agency requesting
      approving_agency: suspect.profiled_agency, //this has to be what is in the suspect profile
      requesting_officer: "John Doe",// Session name of agency requesting
      officer_rank: "Detective",
      reason_for_request: "Ongoing investigation",
      approved_by: null,
      approval_date: null,
      reason: "classified",
    };

    const res = await fetch("http://localhost/crime_api/access-request", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(payload),
    });

    const data = await res.json();
    setInfo(data.message || "Access requested");
  };

  return (
    <div className="max-w-2xl mx-auto p-4">
      <h2 className="text-xl font-bold mb-4">Search Suspect</h2>

      <input
        type="text"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        placeholder="Enter NIN, name or suspect code"
        className="w-full border px-3 py-2 mb-4 rounded"
      />

      <button
        onClick={handleSearch}
        className="bg-blue-600 text-white px-4 py-2 rounded"
      >
        Search
      </button>

      {/* Show suspects if found */}
      {results.length > 0 && (
        <div className="mt-6 space-y-4">
          {results.map((suspect) => (
            <div key={suspect.id} className="border p-4 rounded">
              <p><strong>Name:</strong> {suspect.first_name} {suspect.middle_name} {suspect.last_name}</p>
              <p><strong>NIN:</strong> {suspect.nin}</p>
              <p><strong>Code:</strong> {suspect.suspect_code}</p>
              <p><strong>Profiled Agency:</strong> {suspect.profiled_agency}</p>
              <button
                className="mt-2 bg-green-600 text-white px-3 py-1 rounded"
                onClick={() => requestAccess(suspect)}
              >
                Request Access
              </button>
            </div>
          ))}
        </div>
      )}

      {/* Show info message (either success or "no result") */}
      {info && <p className="mt-4 text-center text-green-600">{info}</p>}
    </div>
  );
}

"use client";

import React, { useState } from "react";
import { Eye, X, Edit, Trash } from "lucide-react";

import ViewModal from "@/Components/Tables/caseoversightTable/ViewModal";
import EditModal from "@/Components/Tables/caseoversightTable/EditModal";

const initialCases = [
  {
    sn: 1,
    jurisdiction: "Central Precinct",
    type: "State Headquarters",
    agency: "Police",
    category: "Felony",
    caseNo: "420-AB",
    status: "Active",
  },
  {
    sn: 2,
    jurisdiction: "Central Precinct",
    type: "State Headquarters",
    agency: "EFCC",
    category: "Misdemeanour",
    caseNo: "420-AB",
    status: "Active",
  },
  {
    sn: 3,
    jurisdiction: "Central Precinct",
    type: "State Headquarters",
    agency: "NDLEA",
    category: "Drug trafficking",
    caseNo: "420-AB",
    status: "Pending",
  },
  {
    sn: 4,
    jurisdiction: "Central Precinct",
    type: "State Headquarters",
    agency: "Police",
    category: "Hit and run",
    caseNo: "420-AB",
    status: "Flagged",
  },
];

const statusColor: Record<string, string> = {
  Active: "bg-green-100 text-green-800",
  Pending: "bg-yellow-100 text-yellow-800",
  Flagged: "bg-red-100 text-red-800",
};

export default function CaseTable() {
  const [cases, setCases] = useState(initialCases);
  const [search, setSearch] = useState("");
  const [selectedCase, setSelectedCase] = useState<
    (typeof initialCases)[number] | null
  >(null);
  const [isViewing, setIsViewing] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const filteredCases = cases.filter((item) =>
    [item.category, item.caseNo, item.agency]
      .join(" ")
      .toLowerCase()
      .includes(search.toLowerCase())
  );

  const handleView = (caseItem: (typeof initialCases)[number]) => {
    setSelectedCase(caseItem);
    setIsViewing(true);
  };

  const handleEdit = (caseItem: (typeof initialCases)[number]) => {
    setSelectedCase(caseItem);
    setIsEditing(true);
  };

  const handleDelete = (caseItem: (typeof initialCases)[number]) => {
    setCases((prev) => prev.filter((c) => c.sn !== caseItem.sn));
  };

  const handleSaveEdit = (updatedCase: (typeof initialCases)[number]) => {
    setCases((prev) =>
      prev.map((c) => (c.sn === updatedCase.sn ? updatedCase : c))
    );
    setIsEditing(false);
  };

  return (
    <div className="p-4 md:p-6 w-full overflow-auto">
      <div className="flex flex-col md:flex-row justify-between items-center mb-4">
        <div>
          <h1 className="text-xl font-semibold">Cases ({cases.length})</h1>
          <p className="text-sm text-gray-500">
            View and manage cases across the system
          </p>
        </div>
        <div className="flex mt-4 md:mt-0 gap-2">
          <input
            type="text"
            placeholder="Search by name or case ID"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="px-3 py-2 border border-gray-300 rounded-md w-64"
          />
          <button className="bg-green-800 text-white px-4 py-2 rounded-md">
            Export
          </button>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr className="text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
              <th className="px-3 py-2">S/N</th>
              <th className="px-3 py-2">Jurisdiction Name</th>
              <th className="px-3 py-2">Type</th>
              <th className="px-3 py-2">Agency</th>
              <th className="px-3 py-2">Category</th>
              <th className="px-3 py-2">Case No.</th>
              <th className="px-3 py-2">Status</th>
              <th className="px-3 py-2">Action</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200">
            {filteredCases.length === 0 ? (
              <tr>
                <td colSpan={8} className="text-center py-4 text-gray-500">
                  No cases found.
                </td>
              </tr>
            ) : (
              filteredCases.map((item) => (
                <tr key={item.sn} className="text-sm">
                  <td className="px-3 py-2">{item.sn}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {item.jurisdiction}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{item.type}</td>
                  <td className="px-3 py-2 whitespace-nowrap">{item.agency}</td>
                  <td className="px-3 py-2 whitespace-nowrap">
                    {item.category}
                  </td>
                  <td className="px-3 py-2 whitespace-nowrap">{item.caseNo}</td>
                  <td className="px-3 py-2">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-semibold ${
                        statusColor[item.status]
                      }`}
                    >
                      {item.status}
                    </span>
                  </td>
                  <td className="px-4 py-3">
                    <div className="flex gap-2 items-center">
                      <button
                        onClick={() => handleView(item)}
                        className="flex items-center text-gray-500 hover:text-blue-600 text-xs font-medium"
                      >
                        <Eye className="w-4 h-4 mr-1" /> View
                      </button>
                      <button
                        onClick={() => console.log("Disable clicked")}
                        className="flex items-center text-gray-500 hover:text-red-600 text-xs font-medium"
                      >
                        <X className="w-4 h-4 mr-1" /> Disable
                      </button>
                      <button
                        onClick={() => handleEdit(item)}
                        className="text-gray-400 hover:text-green-600 p-1 rounded"
                      >
                        <Edit className="w-4 h-4" />
                      </button>
                      <button
                        onClick={() => handleDelete(item)}
                        className="text-gray-400 hover:text-yellow-600 p-1 rounded"
                      >
                        <Trash className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>

      {isViewing && selectedCase && (
        <ViewModal
          caseData={selectedCase}
          onClose={() => setIsViewing(false)}
        />
      )}

      {isEditing && selectedCase && (
        <EditModal
          caseData={selectedCase}
          onClose={() => setIsEditing(false)}
          onSave={handleSaveEdit}
        />
      )}
    </div>
  );
}

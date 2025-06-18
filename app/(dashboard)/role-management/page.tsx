"use client";

import React, { useState, useEffect } from "react";
import { useRouter } from "next/navigation";

import { Search, Download, PlusCircle } from "lucide-react";
import Rolemanagementtable from "@/Components/Tables/Rolemanagementtable";
import AddUserModal from "@/Components/modals/AddUserModal"; // ✅ IMPORT MODAL

export default function UserRoleManagementHeader() {
  const [status, setStatus] = useState("");
  const [role, setRole] = useState("");
  const [jurisdiction, setJurisdiction] = useState("");
  const [searchText, setSearchText] = useState("");
  const [showModal, setShowModal] = useState(false); // ✅ MODAL STATE

  const router = useRouter();
  const [isLoading, setIsLoading] = useState(true); // ← prevent premature render
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    if (isAuthenticated !== "true") {
      router.push("/login");
    } else {
      setIsLoading(false);
    }
  }, [router]);

  if (isLoading) return null; // or a spinner
  const handleApplyFilters = () => {
    console.log("Filters applied:", { status, role, jurisdiction, searchText });
  };

  const handleExport = () => {
    console.log("Exporting data...");
  };

  const handleAddUser = () => {
    setShowModal(true); // ✅ OPEN MODAL
  };

  return (
    <div className="w-full p-4 md:p-6">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
        <div className="flex-1">
          <h2 className="text-xl font-semibold">User & Role Management</h2>
          <p className="text-sm text-gray-500">
            View and manage users across the system
          </p>
          <div className="mt-2 flex items-center border border-gray-300 rounded-md px-3 py-2 w-full max-w-md">
            <Search className="w-4 h-4 text-gray-400 mr-2" />
            <input
              type="text"
              placeholder="Search by name, role, jurisdiction, or email"
              value={searchText}
              onChange={(e) => setSearchText(e.target.value)}
              className="outline-none w-full"
            />
          </div>
        </div>

        <div className="flex flex-wrap items-center gap-2">
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">Status</option>
            <option value="active">Active</option>
            <option value="inactive">Inactive</option>
          </select>

          <select
            value={role}
            onChange={(e) => setRole(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">Role</option>
            <option value="admin">Admin</option>
            <option value="editor">Editor</option>
          </select>

          <select
            value={jurisdiction}
            onChange={(e) => setJurisdiction(e.target.value)}
            className="border border-gray-300 rounded-md px-3 py-2 text-sm"
          >
            <option value="">Jurisdiction</option>
            <option value="north">North</option>
            <option value="south">South</option>
          </select>

          <button
            onClick={handleApplyFilters}
            className="bg-green-800 text-white px-4 py-2 rounded-md text-sm"
          >
            Apply filters
          </button>

          <button
            onClick={handleExport}
            className="bg-green-800 text-white px-4 py-2 rounded-md flex items-center gap-1 text-sm"
          >
            <Download className="w-4 h-4" /> Export
          </button>

          <button
            onClick={handleAddUser}
            className="bg-green-800 text-white px-4 py-2 rounded-md flex items-center gap-1 text-sm"
          >
            <PlusCircle className="w-4 h-4" /> Add New User
          </button>
        </div>
      </div>

      <Rolemanagementtable />

      {/* ✅ Add Modal Here */}
      {showModal && <AddUserModal onClose={() => setShowModal(false)} />}
    </div>
  );
}

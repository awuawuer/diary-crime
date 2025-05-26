"use client";

import { useState } from "react";
import { X } from "lucide-react";

export default function AddUserModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    employmentNumber: "",
    agency: "",
    authorizationLevel: "",
    role: "Admin",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Submitting user:", formData);
    // Submit logic here
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-30 z-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg w-full max-w-3xl shadow-lg p-6 md:p-10 relative">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-black"
        >
          <X className="h-5 w-5" />
        </button>

        <h2 className="text-xl md:text-2xl font-semibold text-gray-800 mb-1">
          Add New User
        </h2>
        <p className="text-sm text-gray-500 mb-6">
          Fill in user information below
        </p>

        <form
          onSubmit={handleSubmit}
          className="grid grid-cols-1 md:grid-cols-2 gap-6"
        >
          <div>
            <label className="block mb-2 text-sm text-gray-700">
              First Name
            </label>
            <input
              name="firstName"
              value={formData.firstName}
              onChange={handleChange}
              type="text"
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-700">
              Middle Name
            </label>
            <input
              name="middleName"
              value={formData.middleName}
              onChange={handleChange}
              type="text"
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-700">
              Last Name
            </label>
            <input
              name="lastName"
              value={formData.lastName}
              onChange={handleChange}
              type="text"
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-700">Email</label>
            <input
              name="email"
              value={formData.email}
              onChange={handleChange}
              type="email"
              className="w-full border rounded px-4 py-2"
              required
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-700">
              Employment Number
            </label>
            <input
              name="employmentNumber"
              value={formData.employmentNumber}
              onChange={handleChange}
              type="text"
              className="w-full border rounded px-4 py-2"
            />
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-700">Agency</label>
            <select
              name="agency"
              value={formData.agency}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            >
              <option value="">Select agency</option>
              <option value="NPF">NPF</option>
              <option value="EFCC">EFCC</option>
              <option value="NIS">NIS</option>
              <option value="NDLEA">NDLEA</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-700">
              Authorization Level
            </label>
            <select
              name="authorizationLevel"
              value={formData.authorizationLevel}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            >
              <option value="">Select level</option>
              <option value="1">Level 1</option>
              <option value="2">Level 2</option>
              <option value="3">Level 3</option>
            </select>
          </div>
          <div>
            <label className="block mb-2 text-sm text-gray-700">Role</label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className="w-full border rounded px-4 py-2"
            >
              <option value="Admin">Admin</option>
              <option value="Editor">Editor</option>
              <option value="Viewer">Viewer</option>
            </select>
          </div>
        </form>

        {/* Submit */}
        <div className="mt-8">
          <button
            type="submit"
            onClick={handleSubmit}
            className="w-full bg-green-800 hover:bg-green-700 text-white py-3 rounded"
          >
            Add User
          </button>
        </div>
      </div>
    </div>
  );
}

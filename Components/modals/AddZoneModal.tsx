"use client";

import React, { useState } from "react";

export default function AddZoneModal({ onClose }: { onClose: () => void }) {
  const [formData, setFormData] = useState({
    zone: "",
    address: "",
    firstName: "",
    middleName: "",
    lastName: "",
    email: "",
    employmentNumber: "",
    agency: "",
    authorizationLevel: "",
    adminRank: "Admin",
    role: "Admin",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(formData);
    onClose(); // Close modal on submit (optional)
  };

  const inputClass =
    "block w-full border border-gray-300 rounded-md px-3 py-2 text-gray-900 placeholder-gray-400 bg-white focus:outline-none focus:ring-2 focus:ring-green-600 focus:border-green-600";

  return (
    <div className="fixed inset-0 bg-black bg-opacity-40 z-50 flex items-center justify-center p-4">
      <div className="bg-white w-full max-w-2xl p-6 md:p-8 rounded-lg shadow-xl overflow-y-auto max-h-[90vh] relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-600 hover:text-black text-xl font-bold"
        >
          ×
        </button>

        {/* Modal Header */}
        <div className="mb-6">
          <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
            Add new zone
          </h2>
          <p className="text-sm text-gray-500 mt-1">Provide new zone details</p>
        </div>

        {/* Form */}
        <form onSubmit={handleSubmit} className="space-y-4">
          {[
            { label: "Zone", name: "zone", placeholder: "Zone here" },
            {
              label: "Zone address",
              name: "address",
              placeholder: "Zone address",
            },
            {
              label: "First name",
              name: "firstName",
              placeholder: "Name here",
            },
            {
              label: "Middle name",
              name: "middleName",
              placeholder: "Name here",
            },
            {
              label: "Last name",
              name: "lastName",
              placeholder: "Surname here",
            },
            {
              label: "Email address",
              name: "email",
              placeholder: "example@mail.com",
              type: "email",
            },
            {
              label: "Employment number",
              name: "employmentNumber",
              placeholder: "000-000-000",
            },
          ].map(({ label, name, placeholder, type = "text" }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700">
                {label}
              </label>
              <input
                type={type}
                name={name}
                value={(formData as any)[name]}
                onChange={handleChange}
                placeholder={placeholder}
                className={inputClass}
              />
            </div>
          ))}

          {/* Select Inputs */}
          <div>
            <label className="block text-sm font-medium text-gray-700">
              Agency
            </label>
            <select
              name="agency"
              value={formData.agency}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select agency</option>
              <option value="Police">Police</option>
              <option value="EFCC">EFCC</option>
              <option value="Custom">Custom</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Authorization Level
            </label>
            <select
              name="authorizationLevel"
              value={formData.authorizationLevel}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="">Select level here</option>
              <option value="Level 1">Level 1</option>
              <option value="Level 2">Level 2</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Admin rank
            </label>
            <select
              name="adminRank"
              value={formData.adminRank}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Admin">Admin</option>
            </select>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700">
              Role
            </label>
            <select
              name="role"
              value={formData.role}
              onChange={handleChange}
              className={inputClass}
            >
              <option value="Admin">Admin</option>
            </select>
          </div>

          {/* Submit Button */}
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-700 transition"
            >
              Add
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

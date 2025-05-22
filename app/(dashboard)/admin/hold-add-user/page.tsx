"use client";

import React, { useState } from "react";
import { X } from "lucide-react";

export default function AddUserForm() {
  const [showForm, setShowForm] = useState(true); // Toggle form visibility
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
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    // Add your submit logic here
  };

  const handleClose = () => {
    setShowForm(false); // Hide the form
  };

  if (!showForm) return null; // Hide the component if closed

  return (
    <div className="relative max-w-2xl mx-auto p-6 bg-white rounded shadow-md">
      {/* Close icon */}
      <button
        type="button"
        onClick={handleClose}
        className="absolute top-4 right-4 text-gray-500 hover:text-red-600"
      >
        <X size={24} />
      </button>

      <h2 className="text-2xl font-bold text-gray-900 mb-1">
        Add/Register admin
      </h2>
      <p className="text-sm text-blue-500 mb-6 cursor-pointer">
        Add a new user
      </p>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">First name</label>
          <input
            name="firstName"
            type="text"
            placeholder="Name here"
            value={formData.firstName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Middle name</label>
          <input
            name="middleName"
            type="text"
            placeholder="Name here"
            value={formData.middleName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Last name</label>
          <input
            name="lastName"
            type="text"
            placeholder="Surname here"
            value={formData.lastName}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Email address</label>
          <input
            name="email"
            type="email"
            placeholder="example@mail.com"
            value={formData.email}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Employment number</label>
          <input
            name="employmentNumber"
            type="text"
            placeholder="000-000-000"
            value={formData.employmentNumber}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Agency</label>
          <select
            name="agency"
            value={formData.agency}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          >
            <option value="">Select agency</option>
            <option value="npf">NPF</option>
            <option value="efcc">EFCC</option>
            <option value="ndlea">NDLEA</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">
            Authorization Level
          </label>
          <select
            name="authorizationLevel"
            value={formData.authorizationLevel}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          >
            <option value="">Select level here</option>
            <option value="1">Level 1</option>
            <option value="2">Level 2</option>
            <option value="3">Level 3</option>
          </select>
        </div>

        <div>
          <label className="block text-sm font-medium">Role</label>
          <select
            name="role"
            value={formData.role}
            onChange={handleChange}
            className="w-full border border-gray-300 rounded px-4 py-2"
          >
            <option value="admin">Admin</option>
            <option value="user">User</option>
          </select>
        </div>

        <button
          type="submit"
          className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-700"
        >
          Add
        </button>
      </form>
    </div>
  );
}

"use client";

import { useState } from "react";

export default function SpouseDetailsForm() {
  const [formData, setFormData] = useState({
    occupation: "",
    firstName: "",
    middleName: "",
    lastName: "",
    phoneNumber: "",
    address: "",
    height: "",
    eyeColor: "",
    skinColor: "",
    employmentStatus: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
  };

  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <h1 className="text-2xl font-semibold">Spouse details</h1>
      <p className="text-gray-500 mb-6">Input suspect spouse details here</p>

      <form onSubmit={handleSubmit} className="space-y-6">
        <Input name="occupation" label="Occupation" onChange={handleChange} />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Input name="firstName" label="First name" onChange={handleChange} />
          <Input
            name="middleName"
            label="Middle name"
            onChange={handleChange}
          />
          <Input name="lastName" label="Last name" onChange={handleChange} />
        </div>

        <Input
          name="phoneNumber"
          label="Phone number"
          placeholder="+234 0123456789"
          onChange={handleChange}
        />
        <Input name="address" label="Address" onChange={handleChange} />
        <Input
          name="height"
          label="Height"
          placeholder="0'00 ft"
          onChange={handleChange}
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <Select
            name="eyeColor"
            label="Eye colour"
            onChange={handleChange}
            options={["Brown", "Black", "Blue", "Green"]}
          />
          <Select
            name="skinColor"
            label="Skin colour"
            onChange={handleChange}
            options={["Light", "Fair", "Dark"]}
          />
          <Select
            name="employmentStatus"
            label="Employment status"
            onChange={handleChange}
            options={["Employed", "Unemployed", "Self-employed"]}
          />
        </div>

        {/* Submit button */}
        {/* <button
          type="submit"
          className="w-full bg-green-800 text-white py-3 rounded-md font-medium hover:bg-green-900 transition-colors"
        >
          Save and continue
        </button> */}

        {/* <div className="mt-4 text-center">
          <button
            type="button"
            className="text-sm text-gray-500 hover:underline"
          >
            Go back
          </button>
        </div> */}
      </form>
    </div>
  );
}

function Input({
  name,
  label,
  type = "text",
  placeholder = "name here",
  onChange,
}: {
  name: string;
  label: string;
  type?: string;
  placeholder?: string;
  onChange: React.ChangeEventHandler<HTMLInputElement>;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <input
        type={type}
        name={name}
        placeholder={placeholder}
        onChange={onChange}
        className="w-full border border-gray-300 rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-600"
      />
    </div>
  );
}

function Select({
  name,
  label,
  options,
  onChange,
}: {
  name: string;
  label: string;
  options: string[];
  onChange: React.ChangeEventHandler<HTMLSelectElement>;
}) {
  return (
    <div>
      <label className="block text-sm font-medium text-gray-700 mb-1">
        {label}
      </label>
      <select
        name={name}
        onChange={onChange}
        className="w-full border border-gray-300 rounded px-3 py-2 bg-white focus:outline-none focus:ring-2 focus:ring-green-600"
      >
        <option value="">Select</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );
}

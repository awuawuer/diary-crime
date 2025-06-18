"use client";

import React, { useState } from "react";
import CapturedPhoto from "@/Components/newCase/CapturedPhoto";

type FormData = {
  firstName: string;
  middleName: string;
  lastName: string;
  nickName: string;
  dob: string;
  age: string;
  height: string;
  weight: string;
  eyeColor: string;
  skinColor: string;
  scars: string;
  address: string;
  phone: string;
  NIN: string;
  tattoos: string;
  caseStatus: string;
  gender: string;
  legalStatus: string;
  biometricCapture: string;
};

export default function PersonalDetails() {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    middleName: "",
    lastName: "",
    nickName: "",
    dob: "",
    age: "",
    height: "",
    weight: "",
    eyeColor: "",
    skinColor: "",
    scars: "",
    address: "",
    phone: "",
    NIN: "",
    tattoos: "",
    caseStatus: "",
    gender: "",
    legalStatus: "",
    biometricCapture: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const renderInput = (
    name: keyof FormData,
    label: string,
    type: string = "text"
  ) => (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 font-medium text-sm text-gray-700">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        placeholder={label}
        value={formData[name]}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded"
      />
    </div>
  );

  const renderSelect = (
    name: keyof FormData,
    label: string,
    options: string[]
  ) => (
    <div className="flex flex-col">
      <label htmlFor={name} className="mb-1 font-medium text-sm text-gray-700">
        {label}
      </label>
      <select
        id={name}
        name={name}
        value={formData[name]}
        onChange={handleChange}
        className="w-full border border-gray-300 px-4 py-2 rounded bg-white"
      >
        <option value="">{`Select ${label.toLowerCase()}`}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </div>
  );

  return (
    <form className="space-y-6">
      <h2 className="text-xl font-semibold">
        Input suspect personal details here
      </h2>

      {/* Name Section */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderInput("firstName", "First Name")}
        {renderInput("middleName", "Middle Name")}
        {renderInput("lastName", "Last Name")}
        {renderInput("nickName", "Nick Name")}
      </div>

      {/* DOB + Age */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderInput("dob", "Date of Birth", "date")}
        {renderInput("age", "Age", "number")}
      </div>

      {/* Physical Characteristics */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {renderInput("height", "Height")}
        {renderInput("weight", "Weight")}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        {renderSelect("eyeColor", "Eye Color", ["Brown", "Blue"])}
        {renderSelect("skinColor", "Skin Color", ["Dark", "Fair"])}
        {renderSelect("scars", "Scars", ["Yes", "No"])}
        {renderSelect("tattoos", "Tattoos", ["Yes", "No"])}
      </div>
      <div>
        {/* Contact Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {renderInput("address", "Address")}
          {renderInput("phone", "Phone Number")}
        </div>

        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1 space-y-4">
            {renderInput("NIN", "National Identification Number")}
          </div>
          {/* File Upload */}
          <div className="flex-1 flex flex-col">
            <label className="mb-1 font-medium text-sm text-gray-700">
              Upload Files
            </label>
            <input
              type="file"
              multiple
              className="w-full border px-4 py-2 rounded"
            />
          </div>
        </div>
        {/* Legal Info */}
        <div className="flex flex-col md:flex-row gap-4">
          <div className="w-full md:w-1/3">
            {renderSelect("caseStatus", "Case Status", ["Pending", "Closed"])}
          </div>
          <div className="w-full md:w-1/3">
            {renderSelect("legalStatus", "Legal Status", ["Pending", "Trial"])}
          </div>
          {/* Gender */}
          <div className="w-full md:w-1/3">
            {renderSelect("gender", "Gender", ["Male", "Female", "Other"])}
          </div>
        </div>
        {/* Photo Buttons */}

        <CapturedPhoto />

        {/* Fingerprint Buttons */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {renderSelect("biometricCapture", "Biometric capture", ["Yes", "No"])}
        </div>
        <div>
          <h3 className="text-md font-medium mt-4">Left hand (fingers)</h3>
          <div className="grid grid-cols-5 gap-2">
            {["Thumb", "Index", "Middle", "Ring", "Pinky"].map((finger) => (
              <button
                key={finger}
                type="button"
                className="border font-semibold text-sm py-6 px-2 rounded hover:bg-gray-100 w-full text-center"
              >
                {finger} +
              </button>
            ))}
          </div>

          <h3 className="text-md font-medium mt-4">Right hand (fingers)</h3>
          <div className="grid grid-cols-5 gap-2">
            {["Thumb", "Index", "Middle", "Ring", "Pinky"].map((finger) => (
              <button
                key={finger}
                type="button"
                className="border font-semibold text-sm py-6 px-2 rounded hover:bg-gray-100 w-full text-center"
              >
                {finger} +
              </button>
            ))}
          </div>
        </div>
      </div>
    </form>
  );
}

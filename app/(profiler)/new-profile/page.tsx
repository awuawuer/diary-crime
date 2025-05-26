"use client";

import React, { useState, ChangeEvent, FormEvent, ReactNode } from "react";
import { Plus } from "lucide-react";

export default function ProfileNewCaseForm() {
  const [formData, setFormData] = useState<Record<string, string>>({});

  const handleChange = (
    e: ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    console.log(formData);
  };

  const Input = ({ ...props }) => (
    <input {...props} className="w-full p-2 border border-gray-300 rounded" />
  );

  const Button = ({
    children,
    ...props
  }: {
    children: ReactNode;
    [key: string]: any;
  }) => (
    <button
      {...props}
      className="bg-green-800 text-white w-full py-2 rounded hover:bg-green-700"
    >
      {children}
    </button>
  );

  const renderUploadButton = (label: string, isFinger: boolean = false) => (
    <div key={label} className="text-center border border-gray-300 rounded p-4">
      <div className="text-sm text-gray-700 mb-2">{label}</div>
      <button className="w-full flex items-center justify-center gap-1 text-green-700 font-medium">
        {!isFinger && <Plus className="w-4 h-4" />}
        {isFinger ? "Capture" : "Upload"}
      </button>
    </div>
  );

  return (
    <div className="p-4 md:p-8 max-w-6xl mx-auto">
      <h1 className="text-2xl md:text-3xl font-bold mb-1">Profile new case</h1>
      <p className="text-sm text-gray-500 mb-6">Enter details for a new case</p>

      <div className="flex flex-wrap gap-2 border-b border-gray-200 mb-6">
        {[
          "Personal details",
          "Employment details",
          "Family details",
          "Other family relations",
          "Crime details",
          "Reporter details",
          "Witness details",
        ].map((tab) => (
          <button
            key={tab}
            className="text-sm text-gray-500 hover:text-black px-3 py-2 border-b-2 border-transparent hover:border-green-700"
          >
            {tab}
          </button>
        ))}
      </div>

      <form onSubmit={handleSubmit} className="space-y-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {[
            { label: "First name", name: "firstName" },
            { label: "Middle name", name: "middleName" },
            { label: "Last name", name: "lastName" },
            { label: "Nick name", name: "nickName" },
            { label: "Date of birth", name: "dob", type: "date" },
            { label: "Age", name: "age", type: "number" },
            { label: "Height", name: "height" },
            { label: "Weight", name: "weight" },
            { label: "Eye colour", name: "eyeColor" },
            { label: "Skin colour", name: "skinColor" },
            { label: "Scars", name: "scars" },
            { label: "Tattoos", name: "tattoos" },
            { label: "Address", name: "address", type: "textarea" },
            { label: "Phone number", name: "phoneNumber", type: "tel" },
            { label: "Case status", name: "caseStatus" },
            { label: "Biometric capture", name: "biometricCapture" },
            { label: "Legal status", name: "legalStatus" },
          ].map(({ label, name, type = "text" }) => (
            <div key={name}>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                {label}
              </label>
              {type === "textarea" ? (
                <textarea
                  name={name}
                  onChange={handleChange}
                  className="w-full p-2 border border-gray-300 rounded"
                  rows={2}
                />
              ) : (
                <Input type={type} name={name} onChange={handleChange} />
              )}
            </div>
          ))}
        </div>

        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Evidence
          </label>
          <input
            type="file"
            multiple
            className="block w-full border border-gray-300 p-2 rounded"
          />
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Photo (Full face)</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {["Front view", "Left view", "Right view", "Full view"].map(
              (label) => renderUploadButton(label)
            )}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Left hand (fingers)</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Thumb", "Index", "Middle", "Ring", "Pinky"].map((label) =>
              renderUploadButton(label, true)
            )}
          </div>
        </div>

        <div className="mt-8">
          <h2 className="text-lg font-semibold mb-2">Right hand (fingers)</h2>
          <div className="grid grid-cols-2 md:grid-cols-5 gap-4">
            {["Thumb", "Index", "Middle", "Ring", "Pinky"].map((label) =>
              renderUploadButton(label, true)
            )}
          </div>
        </div>

        <Button type="submit">Save and continue</Button>
      </form>
    </div>
  );
}

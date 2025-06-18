import React, { useState } from "react";

type FormData = {
  occupation: string;
  status: string;
  lastWorkPlace: string;
};

export default function EmploymentDetails() {
  const [formData, setFormData] = useState<FormData>({
    occupation: "",
    status: "Employed",
    lastWorkPlace: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = () => {
    // Local validation example
    if (formData.occupation.trim() === "") {
      alert("Occupation is required.");
      return;
    }

    console.log("Saving employment details:", formData);
    // Proceed with navigation or state update
  };

  return (
    <div className="max-w-3xl mx-auto p-6 space-y-6">
      <div>
        <h2 className="text-2xl font-semibold">Employment details</h2>
        <p className="text-sm text-gray-500">
          Input suspect employment details here
        </p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block font-medium mb-1">Occupation</label>
          <input
            type="text"
            name="occupation"
            value={formData.occupation}
            onChange={handleChange}
            placeholder="Occupation here"
            className="w-full border rounded px-3 py-2"
          />
        </div>

        <div>
          <label className="block font-medium mb-1">Employment status</label>
          <select
            name="status"
            value={formData.status}
            onChange={handleChange}
            className="w-full border rounded px-3 py-2"
          >
            <option value="Employed">Employed</option>
            <option value="Unemployed">Unemployed</option>
            <option value="Self-employed">Self-employed</option>
          </select>
        </div>

        <div>
          <label className="block font-medium mb-1">Last place of work</label>
          <input
            type="text"
            name="lastWorkPlace"
            value={formData.lastWorkPlace}
            onChange={handleChange}
            placeholder="Type here"
            className="w-full border rounded px-3 py-2"
          />
        </div>
      </div>

      {/* Submit button */}
      {/* <button
        type="submit"
        className="w-full bg-green-800 text-white py-3 rounded-md font-medium hover:bg-green-900 transition-colors"
      >
        Save and continue
      </button> */}

      {/* <div className="mt-4 text-center">
        <button type="button" className="text-sm text-gray-500 hover:underline">
          Go back
        </button>
      </div> */}
    </div>
  );
}

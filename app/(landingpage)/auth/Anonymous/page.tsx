"use client";
import React from "react";
import { useState } from "react";

export default function CrimeReportForm() {
  const [formData, setFormData] = useState({
    typeOfCrime: "",
    specificDetail: "",
    location: "",
    date: "",
    time: "",
    suspects: "",
    suspectDescriptions: "",
    vehicles: "",
    victim: "",
    witnesses: "",
    recurring: false,
    otherDetails: "",
  });

  const [ethicalAccepted, setEthicalAccepted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [submitted, setSubmitted] = useState(false); // ✅ Submission state

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    const { name, value, type } = e.target;

    const isCheckbox = type === "checkbox";
    const checked = isCheckbox
      ? (e.target as HTMLInputElement).checked
      : undefined;

    if (name === "ethicalAccepted") {
      setEthicalAccepted(!!checked);
    } else {
      setFormData((prev) => ({
        ...prev,
        [name]: isCheckbox ? checked : value,
      }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!ethicalAccepted) {
      setShowError(true);
      return;
    }

    setShowError(false);
    setSubmitted(true); // ✅ Mark as submitted
    console.log("Form submitted:", formData);
  };

  // ✅ Submission message
  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Thank you for your report</h1>
        <p className="text-lg">
          We appreciate your contribution to justice and safety.
        </p>
      </div>
    );
  }

  return (
    <main className="bg-gray-200">
      <div className="max-w-3xl mx-auto px-4 py-8 ">
        <h1 className="text-3xl font-bold mb-6 items-center text-center">
          Anonymous Crime Report
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-6 bg-white p-6 rounded-xl shadow-md"
        >
          {/* Crime Details */}
          <fieldset>
            <legend className="text-xl font-semibold mb-2 text-green-700">
              Crime Details
            </legend>
            <div>
              <label className="block font-medium">Type of Crime</label>
              <select
                name="typeOfCrime"
                value={formData.typeOfCrime}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required
              >
                <option value="">Select the crime type</option>
                <option value="theft">Theft</option>
                <option value="assault">Assault</option>
                <option value="drug_trafficking">Drug Trafficking</option>
                <option value="other">Other</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Specific Detail</label>
              <textarea
                name="specificDetail"
                placeholder="Describe how the crime was committed, any weapons used, etc."
                value={formData.specificDetail}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={4}
                required
              />
            </div>

            <div>
              <label className="block font-medium">Location</label>
              <input
                type="text"
                name="location"
                placeholder="e.g., 123 Main St, Building A, 2nd Floor"
                value={formData.location}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block font-medium">Date</label>
                <input
                  type="date"
                  name="date"
                  value={formData.date}
                  onChange={handleChange}
                  className="w-full border rounded p-2 mt-1"
                  required
                />
              </div>
              <div>
                <label className="block font-medium">Time</label>
                <input
                  type="time"
                  name="time"
                  value={formData.time}
                  onChange={handleChange}
                  className="w-full border rounded p-2 mt-1"
                  required
                />
              </div>
            </div>
          </fieldset>

          {/* Individuals Involved */}
          <fieldset>
            <legend className="text-xl font-semibold mb-2 text-green-700">
              Individuals Involved
            </legend>
            <div>
              <label className="block font-medium">
                Suspects or Individuals (Names if known)
              </label>
              <textarea
                name="suspects"
                placeholder="Enter any known names or contact details"
                value={formData.suspects}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={2}
              />
            </div>

            <div>
              <label className="block font-medium">
                Descriptions of Suspects or Individuals
              </label>
              <textarea
                name="suspectDescriptions"
                placeholder="e.g., Height, clothing, hair color, tattoos"
                value={formData.suspectDescriptions}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={3}
              />
            </div>

            <div>
              <label className="block font-medium">Vehicles Involved</label>
              <textarea
                name="vehicles"
                placeholder="e.g., Black Toyota Corolla, license plate ABC123"
                value={formData.vehicles}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={2}
              />
            </div>
          </fieldset>

          {/* Additional Information */}
          <fieldset>
            <legend className="text-xl font-semibold mb-2 text-green-700">
              Additional Information
            </legend>
            <div>
              <label className="block font-medium">
                Name of Victim (if applicable)
              </label>
              <input
                type="text"
                name="victim"
                placeholder="Optional: Victim's name if known"
                value={formData.victim}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
              />
            </div>

            <div>
              <label className="block font-medium">Witnesses</label>
              <textarea
                name="witnesses"
                placeholder="List any witnesses or people nearby"
                value={formData.witnesses}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={2}
              />
            </div>

            <div>
              <label className="block font-medium mb-1">
                Is this a recurring pattern?
              </label>
              <div className="flex space-x-6">
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="recurring"
                    value="yes"
                    checked={formData.recurring === true}
                    onChange={() =>
                      setFormData((prev) => ({ ...prev, recurring: true }))
                    }
                  />
                  <span>Yes</span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    type="radio"
                    name="recurring"
                    value="no"
                    checked={formData.recurring === false}
                    onChange={() =>
                      setFormData((prev) => ({ ...prev, recurring: false }))
                    }
                  />
                  <span>No</span>
                </label>
              </div>
            </div>

            <div>
              <label className="block font-medium">Any Other Details</label>
              <textarea
                name="otherDetails"
                placeholder="Add anything else that could assist the investigation"
                value={formData.otherDetails}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={4}
              />
            </div>
          </fieldset>

          {/* Ethical Considerations */}
          <fieldset>
            <legend className="text-xl font-semibold mb-2 text-green-700">
              Ethical Considerations
            </legend>
            <div className="flex items-start space-x-3">
              <input
                type="checkbox"
                id="ethicalAccepted"
                name="ethicalAccepted"
                checked={ethicalAccepted}
                onChange={handleChange}
                className="mt-1 w-4 h-4"
              />
              <label htmlFor="ethicalAccepted" className="text-sm">
                <strong>Ethical Considerations:</strong> Crime reporters must
                adhere to ethical standards, including accuracy, fairness, and
                sensitivity, while balancing the public's right to know with the
                need to protect privacy and avoid sensationalism.
              </label>
            </div>
            {showError && (
              <p className="text-red-600 text-sm">
                You must agree to the ethical considerations before submitting.
              </p>
            )}
          </fieldset>

          <div className="text-center">
            <button
              type="submit"
              className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit Report
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}

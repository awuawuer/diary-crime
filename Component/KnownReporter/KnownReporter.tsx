"use client";
import react from "react";
import Link from "next/link";
import { useState } from "react";

export default function CrimeReportForm() {
  const [formData, setFormData] = useState({
    reporterName: "",
    reporterPhone: "",
    reporterEmail: "",
    typeOfCrime: "",
    location: "",
    date: "",
    time: "",
    crimeDescription: "",
    victimNames: "",
    victimAges: "",
    victimInjuries: "",
    suspectDescriptions: "",
    suspectMotives: "",
    suspectConnections: "",
    witnessNames: "",
    witnessContacts: "",
    backgroundInfo: "",
  });

  const [ethicalAccepted, setEthicalAccepted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [submitted, setSubmitted] = useState(false);

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
    console.log("Form submitted:", formData);
    setSubmitted(true);
    // TODO: Add API submission or storage logic
  };

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
    <main className="bg-gray-100">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <h1 className="text-3xl font-bold mb-6 items-center text-center">
          Known Reporter
        </h1>
        <form
          onSubmit={handleSubmit}
          className="space-y-8 bg-white p-6 rounded-xl shadow-md"
        >
          {/* Reporter Personal Information */}
          <fieldset>
            <legend className="text-xl font-semibold mb-2 text-green-700">
              Reporter Personal Information
            </legend>
            <div>
              <label className="block font-medium">Name</label>
              <input
                type="text"
                name="reporterName"
                placeholder="Your full name"
                value={formData.reporterName}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Phone</label>
              <input
                type="tel"
                name="reporterPhone"
                placeholder="Your phone number"
                value={formData.reporterPhone}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="reporterEmail"
                placeholder="Your email address"
                value={formData.reporterEmail}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required
              />
            </div>
          </fieldset>

          {/* Basic Details of the Crime */}
          <fieldset>
            <legend className="text-xl font-semibold mb-2 text-green-700">
              Basic Details of the Crime
            </legend>
            <div>
              <label className="block font-medium">Type of Crime</label>
              <input
                type="text"
                name="typeOfCrime"
                placeholder="e.g., Theft, Assault, Drug Trafficking"
                value={formData.typeOfCrime}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Location</label>
              <input
                type="text"
                name="location"
                placeholder="Exact location of the incident"
                value={formData.location}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required
              />
            </div>
            <div className="flex gap-4">
              <div className="flex-1">
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
              <div className="flex-1">
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

            <div>
              <label className="block font-medium">
                Describe how the crime occurred
              </label>
              <textarea
                name="crimeDescription"
                placeholder="Detailed explanation of how the crime took place"
                value={formData.crimeDescription}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={4}
                required
              />
            </div>
          </fieldset>

          {/* Victims */}
          <fieldset>
            <legend className="text-xl font-semibold mb-2 text-green-700">
              Victims
            </legend>
            <div>
              <label className="block font-medium">Victim Names</label>
              <input
                type="text"
                name="victimNames"
                placeholder="Full names of victims"
                value={formData.victimNames}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">Victim Ages</label>
              <input
                type="text"
                name="victimAges"
                placeholder="Age(s) of victims"
                value={formData.victimAges}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">Victim Injuries</label>
              <textarea
                name="victimInjuries"
                placeholder="Describe injuries if any"
                value={formData.victimInjuries}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={2}
              />
            </div>
          </fieldset>

          {/* Suspects */}
          <fieldset>
            <legend className="text-xl font-semibold mb-2 text-green-700">
              Suspects
            </legend>
            <div>
              <label className="block font-medium">Suspect Descriptions</label>
              <textarea
                name="suspectDescriptions"
                placeholder="Physical features, clothing, etc."
                value={formData.suspectDescriptions}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={2}
              />
            </div>
            <div>
              <label className="block font-medium">Suspect Motives</label>
              <textarea
                name="suspectMotives"
                placeholder="Possible reasons behind the crime"
                value={formData.suspectMotives}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={2}
              />
            </div>
            <div>
              <label className="block font-medium">
                Suspect Connections to Victim
              </label>
              <textarea
                name="suspectConnections"
                placeholder="Relationship or interactions with the victim"
                value={formData.suspectConnections}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={2}
              />
            </div>
          </fieldset>

          {/* Witnesses */}
          <fieldset>
            <legend className="text-xl font-semibold mb-2 text-green-700">
              Witnesses
            </legend>
            <div>
              <label className="block font-medium">Witness Names</label>
              <input
                type="text"
                name="witnessNames"
                placeholder="Names of witnesses"
                value={formData.witnessNames}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">
                Witness Contact Information
              </label>
              <input
                type="text"
                name="witnessContacts"
                placeholder="Phone or email contacts"
                value={formData.witnessContacts}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
              />
            </div>
          </fieldset>

          {/* Background Information */}
          <fieldset>
            <legend className="text-xl font-semibold mb-2 text-green-700">
              Background Information
            </legend>
            <div>
              <label className="block font-medium">Previous Incidents</label>
              <textarea
                name="backgroundInfo"
                placeholder="Any previous related incidents or history"
                value={formData.backgroundInfo}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={3}
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
            <Link
              href="/Logindashboard" // change to your actual route
              className="inline-block bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
            >
              Submit Report
            </Link>
          </div>
        </form>
      </div>
    </main>
  );
}

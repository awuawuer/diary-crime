"use client";
import react from "react";
import Link from "next/link";
// import { useState } from "react";
import { fetchUserProfile } from "@/lib/auth"; // Adjust the path if needed
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";




export default function CrimeReportForm() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      try {
        const profile = await fetchUserProfile();
        console.log("Fetched profile:", profile);
        if (!profile) {
          router.replace("/auth/Login");
          return;
        }
        setUser(profile);
  
        // Pre-fill form fields from session data
        setFormData((prev) => ({
          ...prev,
          name: `${profile.firstname} ${profile.surname}`,
          email: profile.email || "",
          phone: profile.phone || "",
          track_id: profile.user_id || "",

        }));
      } catch (err) {
        router.replace("/auth/Login");
      } finally {
        setLoading(false);
      }
    };
  
    verify();
  }, []);
  

  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    type_of_crime: "",
    crime_location: "",
    crime_date: "",
    crime_time: "",
    crime_description: "",
    victim_name: "",
    victim_age: "",
    victim_injury: "",
    suspect_description: "",
    suspect_motive: "",
    suspect_connection_to_crime: "",
    witness_name: "",
    witness_contact: "",
    previous_incident: "",
    status: "Pending",
    track_id: "",
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

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
  
    if (!ethicalAccepted) {
      setShowError(true);
      return;
    }
  
    setShowError(false);
  
    try {
      const res = await fetch("http://localhost/crime_api/known", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include", // Include cookies for session-based auth
      });
  
      if (res.ok) {
        const data = await res.json();
        console.log("Form submitted successfully:", data);
        setSubmitted(true);
      } else {
        const errorData = await res.text();
        console.error("Failed to submit:", errorData);
        alert("Submission failed. Please try again.");
      }
    } catch (error) {
      console.error("Error submitting form:", error);
      alert("An error occurred. Please try again.");
    }
  };
  
  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your report is recieved. Thank you!</h1>
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
                name="name"
                placeholder="Your full name"
                value={formData.name}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                readOnly
              />
            </div>
            <div>
              <label className="block font-medium">Phone</label>
              <input
                type="tel"
                name="phone"
                placeholder="Your phone number"
                value={formData.phone}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Email</label>
              <input
                type="email"
                name="email"
                placeholder="Your email address"
                value={formData.email}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required readOnly
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
                name="type_of_crime"
                placeholder="e.g., Theft, Assault, Drug Trafficking"
                value={formData.type_of_crime}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required
              />
            </div>
            <div>
              <label className="block font-medium">Location</label>
              <input
                type="text"
                name="crime_location"
                placeholder="Exact location of the incident"
                value={formData.crime_location}
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
                  name="crime_date"
                  value={formData.crime_date}
                  onChange={handleChange}
                  className="w-full border rounded p-2 mt-1"
                  required
                />
              </div>
              <div className="flex-1">
                <label className="block font-medium">Time</label>
                <input
                  type="time"
                  name="crime_time"
                  value={formData.crime_time}
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
                name="crime_description"
                placeholder="Detailed explanation of how the crime took place"
                value={formData.crime_description}
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
                name="victim_name"
                placeholder="Full names of victims"
                value={formData.victim_name}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">Victim Ages</label>
              <input
                type="number"
                name="victim_age"
                placeholder="Age(s) of victims"
                value={formData.victim_age}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
              />
            </div>
            <div>
              <label className="block font-medium">Victim Injuries</label>
              <textarea
                name="victim_injury"
                placeholder="Describe injuries if any"
                value={formData.victim_injury}
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
                name="suspect_description"
                placeholder="Physical features, clothing, etc."
                value={formData.suspect_description}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={2}
              />
            </div>
            <div>
              <label className="block font-medium">Suspect Motives</label>
              <textarea
                name="suspect_motive"
                placeholder="Possible reasons behind the crime"
                value={formData.suspect_motive}
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
                name="suspect_connection_to_crime"
                placeholder="Relationship or interactions with the victim"
                value={formData.suspect_connection_to_crime}
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
                name="witness_name"
                placeholder="Names of witnesses"
                value={formData.witness_name}
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
                name="witness_contact"
                placeholder="Phone or email contacts"
                value={formData.witness_contact}
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
                name="previous_incident"
                placeholder="Any previous related incidents or history"
                value={formData.previous_incident}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={3}
              />
            </div>

              <input
                type="hidden"
                name="status"
                value={formData.status}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
              />

<input
                type="hidden"
                name="track_id"
                value={formData.track_id}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
              />
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
  className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-700 transition"
>
Submit Report
</button>

          </div>
        </form>
      </div>
    </main>
  );
}

"use client";
import React from "react";
import { useState } from "react";
import { useRouter } from "next/navigation";


export default function CrimeReportForm() {
  const [formData, setFormData] = useState({
    crime_type: "",
    crime_description: "",
    crime_location: "",
    crime_date: "",
    crime_time: "",
    suspect_name: "",
    suspect_description: "",
    vehicle_type: "",
    victim_name: "",
    witness_name: "",
    One_time_occurrence: false,
    other_details: "",
  });

  const [ethicalAccepted, setEthicalAccepted] = useState(false);
  const [showError, setShowError] = useState(false);
  const [submitted, setSubmitted] = useState(false);  // const router = useRouter();
  const router = useRouter();
  const [redirecting, setRedirecting] = useState(false);


  

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
      const res = await fetch("http://localhost/crime_api/anonymous", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
        credentials: "include", // Include cookies for session-based auth
      });
  
      if (res.ok) {
        const data = await res.json();
        console.log("Form submitted successfully:", data);
        setSubmitted(true);
        setRedirecting(true);
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


  React.useEffect(() => {
    if (submitted) {
      const timer = setTimeout(() => {
        alert("Thanks, your report is recieved. Redirecting to home page...");
        router.push("/");
      }, 3000); // 3 seconds
  
      return () => clearTimeout(timer); // cleanup
    }
  }, [submitted]);
  
  // ✅ Submission message
  if (submitted) {
    return (
      <div className="max-w-3xl mx-auto px-4 py-8 text-center">
        <h1 className="text-3xl font-bold mb-4">Your report is received. Thank you!</h1>
        <p className="text-lg">
          We appreciate your contribution to justice and safety.
        </p>
        <p className="text-sm text-gray-600 mt-4">Redirecting to homepage...</p>
  
        {redirecting && (
          <div className="mt-4 flex justify-center">
            <div className="w-6 h-6 border-4 border-blue-500 border-t-transparent rounded-full animate-spin"></div>
          </div>
        )}
      </div>
    );
  }
  
  
 
  
  // if (submitted) {
  
  //   return (
  //     <div className="max-w-3xl mx-auto px-4 py-8 text-center">
  //       <h1 className="text-3xl font-bold mb-4">Your report is received. Thank you!</h1>
  //       <p className="text-lg">
  //         We appreciate your contribution to justice and safety.
  //       </p>
  //       <p className="text-sm text-gray-600 mt-4">Redirecting to homepage...</p>
  //     </div>
  //   );
  // }


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
                name="crime_type"
                value={formData.crime_type}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                required
              >
                <option value="">Select the crime type</option>
                <option value="Theft">Theft</option>
                <option value="Assault">Assault</option>
                <option value="Drug Trafficking">Drug Trafficking</option>
                <option value="Other">Other</option>
              </select>
            </div>

            <div>
              <label className="block font-medium">Specific Detail</label>
              <textarea
                name="crime_description"
                placeholder="Describe how the crime was committed, any weapons used, etc."
                value={formData.crime_description}
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
                name="crime_location"
                placeholder="e.g., 123 Main St, Building A, 2nd Floor"
                value={formData.crime_location}
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
                  name="crime_date"
                  value={formData.crime_date}
                  onChange={handleChange}
                  className="w-full border rounded p-2 mt-1"
                  required
                />
              </div>
              <div>
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
                name="suspect_name"
                placeholder="Enter any known names or contact details"
                value={formData.suspect_name}
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
                name="suspect_description"
                placeholder="e.g., Height, clothing, hair color, tattoos"
                value={formData.suspect_description}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
                rows={3}
              />
            </div>

            <div>
              <label className="block font-medium">Vehicles Involved</label>
              <textarea
                name="vehicle_type"
                placeholder="e.g., Black Toyota Corolla, license plate ABC123"
                value={formData.vehicle_type}
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
                name="victim_name"
                placeholder="Optional: Victim's name if known"
                value={formData.victim_name}
                onChange={handleChange}
                className="w-full border rounded p-2 mt-1"
              />
            </div>

            <div>
              <label className="block font-medium">Witnesses</label>
              <textarea
                name="witness_name"
                placeholder="List any witnesses or people nearby"
                value={formData.witness_name}
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
        name="One_time_occurrence"
        value="yes"
        checked={formData.One_time_occurrence === true}
        onChange={() =>
          setFormData((prev) => ({ ...prev, One_time_occurrence: true }))
        }
      />
      <span>Yes</span>
    </label>
    <label className="flex items-center space-x-2">
      <input
        type="radio"
        name="One_time_occurrence"
        value="no"
        checked={formData.One_time_occurrence === false}
        onChange={() =>
          setFormData((prev) => ({ ...prev, One_time_occurrence: false }))
        }
      />
      <span>No</span>
    </label>
  </div>
</div>


            <div>
              <label className="block font-medium">Any Other Details</label>
              <textarea
                name="other_details"
                placeholder="Add anything else that could assist the investigation"
                value={formData.other_details}
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

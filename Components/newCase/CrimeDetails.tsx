"use client";

import React from "react";

export default function CrimeDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-semibold text-gray-900">Crime details</h2>
      <p className="text-sm text-gray-500 mb-6">Input crime details here</p>

      <form className="space-y-6">
        {/* Grid: two-column layout for most fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="charge"
              className="block text-sm font-medium text-gray-700"
            >
              Charge
            </label>
            <input
              type="text"
              id="charge"
              placeholder="what is the charge"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-green-600 focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="interrogationDate"
              className="block text-sm font-medium text-gray-700"
            >
              Date of interrogation
            </label>
            <input
              type="date"
              id="interrogationDate"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:ring-green-600 focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="category"
              className="block text-sm font-medium text-gray-700"
            >
              Category of crime
            </label>
            <select
              id="category"
              defaultValue="Felonies"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 bg-white text-gray-700 focus:ring-green-600 focus:ring-2 focus:outline-none"
            >
              <option value="Felonies">Felonies</option>
              <option value="Misdemeanors">Misdemeanors</option>
              <option value="Infractions">Infractions</option>
              <option value="Other">Other</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="crimeDate"
              className="block text-sm font-medium text-gray-700"
            >
              Date of crime
            </label>
            <input
              type="date"
              id="crimeDate"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:ring-green-600 focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="arrestDate"
              className="block text-sm font-medium text-gray-700"
            >
              Date of arrest
            </label>
            <input
              type="date"
              id="arrestDate"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 text-gray-700 focus:ring-green-600 focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="arrestCount"
              className="block text-sm font-medium text-gray-700"
            >
              Arrest count
            </label>
            <input
              type="number"
              id="arrestCount"
              placeholder="0"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-green-600 focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="affiliations"
              className="block text-sm font-medium text-gray-700"
            >
              Criminal affiliations
            </label>
            <select
              id="affiliations"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 bg-white focus:ring-green-600 focus:ring-2 focus:outline-none"
              defaultValue="Yes"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>

          <div>
            <label
              htmlFor="gangMembership"
              className="block text-sm font-medium text-gray-700"
            >
              Gang membership
            </label>
            <select
              id="gangMembership"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 bg-white focus:ring-green-600 focus:ring-2 focus:outline-none"
              defaultValue="Yes"
            >
              <option value="Yes">Yes</option>
              <option value="No">No</option>
            </select>
          </div>
        </div>

        {/* Full-width: offender’s statement */}
        <div>
          <label
            htmlFor="statement"
            className="block text-sm font-medium text-gray-700"
          >
            Offender’s statement
          </label>
          <textarea
            id="statement"
            rows={4}
            placeholder="Statement here"
            className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-green-600 focus:ring-2 focus:outline-none"
          />
        </div>

        {/* Submit */}
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
// This component is a form for entering crime details in a case management system.
// It includes fields for charge, interrogation date, category of crime, date of crime, date of arrest, arrest count, criminal affiliations, gang membership, and an offender's statement.
// The form is styled using Tailwind CSS classes for a clean and responsive layout.
// The submit button is styled to be prominent, and there is a link to go back to the previous page.
// The component uses React functional components and hooks for state management, but does not include any state or form submission logic in this snippet.
// It is designed to be part of a larger application where crime details need to be recorded for legal or administrative purposes.

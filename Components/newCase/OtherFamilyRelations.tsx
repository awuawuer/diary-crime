"use client";

import React from "react";

export default function OtherFamilyDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-semibold text-gray-900">
        Other family details
      </h2>
      <p className="text-sm text-gray-500 mb-6">
        Input suspect family details here
      </p>

      <form className="space-y-6">
        {/* Grid for paired fields */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <label
              htmlFor="firstName"
              className="block text-sm font-medium text-gray-700"
            >
              First name
            </label>
            <input
              type="text"
              id="firstName"
              placeholder="name here"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="middleName"
              className="block text-sm font-medium text-gray-700"
            >
              Middle name
            </label>
            <input
              type="text"
              id="middleName"
              placeholder="name here"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="lastName"
              className="block text-sm font-medium text-gray-700"
            >
              Last name
            </label>
            <input
              type="text"
              id="lastName"
              placeholder="name here"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="phoneNumber"
              className="block text-sm font-medium text-gray-700"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phoneNumber"
              placeholder="+234 0123456789"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
            />
          </div>
        </div>

        {/* Full-width fields */}
        <div>
          <label
            htmlFor="address"
            className="block text-sm font-medium text-gray-700"
          >
            Address
          </label>
          <input
            type="text"
            id="address"
            placeholder="Full address here"
            className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="occupation"
            className="block text-sm font-medium text-gray-700"
          >
            Occupation
          </label>
          <input
            type="text"
            id="occupation"
            placeholder="occupation here"
            className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-2 focus:ring-green-600 focus:outline-none"
          />
        </div>

        {/* Relationship dropdown */}
        <div>
          <label
            htmlFor="relationship"
            className="block text-sm font-medium text-gray-700"
          >
            Relationship
          </label>
          <select
            id="relationship"
            className="mt-1 w-full border border-gray-300 rounded-md p-2.5 bg-white focus:ring-2 focus:ring-green-600 focus:outline-none"
            defaultValue=""
          >
            <option value="" disabled>
              Select relationship
            </option>
            <option value="Father">Father</option>
            <option value="Mother">Mother</option>
            <option value="Brother">Brother</option>
            <option value="Sister">Sister</option>
            <option value="Spouse">Spouse</option>
            <option value="Child">Child</option>
            <option value="Relative">Relative</option>
            <option value="Other">Other</option>
          </select>
        </div>

        {/* Buttons */}
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

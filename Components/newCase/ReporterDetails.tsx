"use client";

import React from "react";

export default function ReporterDetails() {
  return (
    <div className="max-w-4xl mx-auto p-6">
      <h2 className="text-xl font-semibold text-gray-900">Reporter details</h2>
      <p className="text-sm text-gray-500 mb-6">Input reporter details here</p>

      <form className="space-y-6">
        {/* Grid: two-column layout for names */}
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
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-green-600 focus:ring-2 focus:outline-none"
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
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-green-600 focus:ring-2 focus:outline-none"
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
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-green-600 focus:ring-2 focus:outline-none"
            />
          </div>

          <div>
            <label
              htmlFor="phone"
              className="block text-sm font-medium text-gray-700"
            >
              Phone number
            </label>
            <input
              type="tel"
              id="phone"
              placeholder="+234 0123456789"
              className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-green-600 focus:ring-2 focus:outline-none"
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
            className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-green-600 focus:ring-2 focus:outline-none"
          />
        </div>

        <div>
          <label
            htmlFor="statement"
            className="block text-sm font-medium text-gray-700"
          >
            Statement
          </label>
          <textarea
            id="statement"
            placeholder="Type full statement here..."
            rows={5}
            className="mt-1 w-full border border-gray-300 rounded-md p-2.5 resize-y focus:ring-green-600 focus:ring-2 focus:outline-none"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="age"
            className="block text-sm font-medium text-gray-700"
          >
            Age
          </label>
          <input
            type="text"
            id="age"
            placeholder="0 years"
            className="mt-1 w-full border border-gray-300 rounded-md p-2.5 focus:ring-green-600 focus:ring-2 focus:outline-none"
          />
        </div>

        {/* Submit button */}
        {/* <button
          type="submit"
          className="w-full bg-green-800 text-white py-3 rounded-md font-medium hover:bg-green-900 transition-colors"
        >
          Save and continue
        </button> */}
        {/* 
        <div className="mt-4 text-center">
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
// This component is a form for entering reporter details in a case management system.
// It includes fields for first name, middle name, last name, phone number, address, statement, and age.

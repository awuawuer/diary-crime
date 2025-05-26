"use client";

import React, { useState } from "react";

export default function ResetPasswordForm() {
  const [password, setPassword] = useState("");
  const [confirm, setConfirm] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  

  const handleSubmit = async () => {
    if (password !== confirm) {
      setError("Passwords do not match.");
      return;
    }

    try {
      const res = await fetch("http://localhost/crime_api/reset-password", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        credentials: "include",
        body: JSON.stringify({ password }),
      });

      const data = await res.json();

      if (res.ok) {
        setSuccess(data.message);
        setError("");
      } else {
        setError(data.message || "Failed to reset password");
      }
    } catch (err) {
      console.error(err);
      setError("Error connecting to server.");
    }
    
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100">
      <div className="bg-white p-8 rounded shadow-md w-full max-w-sm">
        <h2 className="text-2xl font-semibold text-center mb-4">
          Reset Your Password
        </h2>
        <input
          type="password"
          placeholder="New Password"
          className="w-full border border-gray-300 p-2 rounded mb-2"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <input
          type="password"
          placeholder="Confirm Password"
          className="w-full border border-gray-300 p-2 rounded mb-2"
          value={confirm}
          onChange={(e) => setConfirm(e.target.value)}
        />
        {error && <p className="text-red-500 text-sm mb-2">{error}</p>}
        {success && <p className="text-green-600 text-sm mb-2">{success}</p>}
        <button
          onClick={handleSubmit}
          className="bg-green-700 text-white w-full p-2 rounded hover:bg-green-600"
        >
          Reset Password
        </button>
      </div>
    </div>
  );
}

"use client";
import React, { useState } from "react";
import Image from "next/image";

const ForgotPassword: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [message, setMessage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);

  const handleSendMail = async () => {
    setLoading(true);
    setMessage(null);
    setError(null);

    try {
      const response = await fetch("/api/send-reset-email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email }),
      });

      if (!response.ok) {
        throw new Error("Failed to send email. Please try again.");
      }

      setMessage("Reset email sent successfully!");
      setEmail("");
    } catch (err) {
      setError((err as Error).message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="flex flex-col md:flex-row h-screen w-full">
      {/* Left Section */}
      <div className="md:w-1/2 w-full bg-green-700 text-white flex flex-col justify-center items-center p-6">
        {/* <img src="/logo.png" alt="BDIC Logo" className="mb-4" /> */}
        <h1 className="text-2xl font-bold text-center">
          BDIC DIGITAL CRIME DAIRY.
        </h1>
        <Image
          src="/images/officer.png"
          alt="Police Officers"
          className="mt-6 w-4/5 md:w-3/5"
          width={400}
          height={400}
        />
      </div>

      {/* Right Section */}
      <div className="md:w-1/2 w-full flex flex-col justify-center items-center bg-gray-100 p-6">
        <div className="bg-white shadow-sm p-8 rounded-lg w-full max-w-md">
          <h2 className="text-xl font-bold mb-4 text-center">
            Forgot Password?
          </h2>
          <input
            type="email"
            placeholder="Enter email"
            className="w-full border px-4 py-2 rounded mb-4"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button
            className="w-full bg-green-700 text-white py-2 rounded disabled:opacity-50"
            onClick={handleSendMail}
            disabled={loading || !email}
          >
            {loading ? "Sending..." : "Send mail"}
          </button>

          {message && <p className="text-green-600 mt-4">{message}</p>}
          {error && <p className="text-red-600 mt-4">{error}</p>}
        </div>
        {/* <p className="mt-4 text-gray-600 text-sm">Powered By BDIC © 2025</p> */}
      </div>
    </div>
  );
};

export default ForgotPassword;

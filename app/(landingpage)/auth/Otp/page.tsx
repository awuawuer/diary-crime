"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";

export default function OTPResetPage() {
  const [otp, setOtp] = useState<string[]>(Array(6).fill(""));
  const [error, setError] = useState("");
  const [resendTimer, setResendTimer] = useState<number>(30);
  const [canResend, setCanResend] = useState<boolean>(false);
  const inputsRef = useRef<Array<HTMLInputElement | null>>([]);

  useEffect(() => {
    if (resendTimer > 0) {
      const timer = setTimeout(() => setResendTimer(resendTimer - 1), 1000);
      return () => clearTimeout(timer);
    } else {
      setCanResend(true);
    }
  }, [resendTimer]);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    index: number
  ) => {
    const value = e.target.value;
    if (!/^[0-9]?$/.test(value)) return;

    const newOtp = [...otp];
    newOtp[index] = value;
    setOtp(newOtp);

    if (value && index < 5) {
      inputsRef.current[index + 1]?.focus();
    }
  };

  const handleReset = () => {
    if (otp.some((digit) => digit === "")) {
      setError("Please enter all 6 digits of the OTP.");
    } else {
      setError("");
      console.log("Entered OTP:", otp.join(""));
      // Proceed with OTP submission logic here
    }
  };

  const handleResendOTP = () => {
    console.log("Resend OTP logic triggered");
    setOtp(Array(6).fill(""));
    setCanResend(false);
    setResendTimer(30);
    // Add your resend OTP logic here
  };

  return (
    <div className="min-h-screen grid grid-cols-1 md:grid-cols-2">
      {/* Left Section */}
      <div className="bg-green-800 relative flex items-center justify-center p-6">
        <div className="absolute inset-0 bg-opacity-90 bg-green-800 z-0">
          <div className="absolute inset-0 opacity-20"></div>
        </div>
        <div className="z-10 text-white text-center">
          <div className="mb-6">
            <h1 className="text-2xl font-bold mt-4">
              BDIC DIGITAL CRIME DAIRY.
            </h1>
          </div>
          <div className="flex flex-col items-center">
            <Image
              src="/images/officer.png"
              alt="Male Officer"
              width={120}
              height={240}
              className="mb-2"
            />
          </div>
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col items-center justify-center bg-gray-50 p-6">
        <div className="bg-white rounded-lg shadow-lg p-8 max-w-md w-full">
          <h2 className="text-center text-2xl font-semibold mb-6">Enter OTP</h2>
          <div className="flex justify-between gap-2 mb-4">
            {otp.map((value, idx) => (
              <input
                key={idx}
                ref={(el) => {
                  if (el) inputsRef.current[idx] = el;
                }}
                type="text"
                maxLength={1}
                value={value}
                onChange={(e) => handleChange(e, idx)}
                onKeyDown={(e) => {
                  if (e.key === "Backspace" && !otp[idx] && idx > 0) {
                    inputsRef.current[idx - 1]?.focus();
                  }
                }}
                className="w-10 h-10 text-center border border-blue-300 rounded text-lg"
              />
            ))}
          </div>
          {error && (
            <p className="text-red-500 text-sm mb-4 text-center">{error}</p>
          )}
          <button
            onClick={handleReset}
            className="w-full bg-green-900 text-white py-2 rounded hover:bg-green-800"
          >
            Reset Password
          </button>

          <div className="mt-4 text-center text-sm">
            {canResend ? (
              <button
                onClick={handleResendOTP}
                className="text-green-700 underline"
              >
                Resend OTP
              </button>
            ) : (
              <span className="text-gray-500">
                Resend available in {resendTimer}s
              </span>
            )}
          </div>
        </div>

        {/* <div className="mt-6 text-center text-sm text-gray-500">
          Powered By:{" "}
          <Image
            src="/bdic-logo.png"
            alt="BDIC Logo"
            width={20}
            height={20}
            className="inline mx-1"
          />
          2025
        </div> */}
      </div>
    </div>
  );
}
//     </Link>

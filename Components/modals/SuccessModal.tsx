"use client";

import React from "react";
import Image from "next/image";
import { useRouter } from "next/navigation"; // ✅ Correct import for App Router

export default function SuccessModal() {
  const router = useRouter();

  return (
    <div className="min-h-screen flex items-center justify-center bg-white px-4 py-12">
      <div className="flex flex-col items-center text-center space-y-6">
        <div className="relative w-24 h-24 md:w-28 md:h-28">
          <Image src="/images/success-check.png" alt="Success" fill priority />
        </div>

        <div>
          <h1 className="text-xl md:text-2xl font-semibold text-gray-900">
            Suspect successfully profiled
          </h1>
          <p className="text-sm md:text-base text-gray-500 mt-2">
            You just successfully profiled a suspect on the platform
          </p>
        </div>

        <div className="flex flex-col space-y-4 w-full max-w-xs">
          <button
            onClick={() => router.push("/user-dashboard")}
            className="bg-green-700 hover:bg-green-800 text-white font-medium py-3 rounded-lg transition duration-200"
          >
            Go to dashboard
          </button>
          <button
            onClick={() => router.push("/Cases")}
            className="border border-green-700 text-green-700 hover:bg-green-50 font-medium py-3 rounded-lg transition duration-200"
          >
            Profile new suspect
          </button>
        </div>
      </div>
    </div>
  );
}

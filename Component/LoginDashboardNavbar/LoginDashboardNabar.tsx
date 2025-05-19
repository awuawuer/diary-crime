"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function LoginHeader() {
  const router = useRouter();

  const handleLogout = () => {
    // Clear token from localStorage (or cookies if used)
    localStorage.removeItem("authToken");

    // Redirect to login page
    router.push("/auth/login");
  };

  return (
    <header className="bg-green-700 text-white shadow-md py-4 px-6 flex justify-between items-center">
      <div className="text-xl font-bold">
        <div className="flex items-center gap-2">
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/images/BDICLOGO.png"
              alt="BDIC Logo"
              width={40}
              height={40}
              priority
            />
            <span className="hidden lg:block font-bold text-white">BDIC</span>
          </Link>
        </div>
      </div>
      <div className="flex items-center gap-4">
        <span className="hidden sm:inline">Welcome, Reporter</span>
        <button
          onClick={handleLogout}
          className="bg-white text-green-700 px-4 py-2 rounded hover:bg-gray-100 transition"
        >
          Logout
        </button>
      </div>
    </header>
  );
}

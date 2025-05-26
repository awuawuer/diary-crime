"use client";

import { fetchUserProfile } from "@/lib/auth";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import React from "react";
import Link from "next/link";
import Image from "next/image";

// const [user, setUser] = useState(null);
// const [loading, setLoading] = useState(true);

export default function LoginPage() {
  const router = useRouter();
  const [form, setForm] = useState({ email: "", password: "" });
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
    fetchUserProfile()
      .then((profile) => {
        setUser(profile);
        setLoading(false);
        router.push("/Logindashboard");
      })
      .catch(() => {
        setLoading(false); // allow form to render if not logged in
      });
  }, []);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setForm({ ...form, [name]: value });
  };

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const res = await fetch("http://localhost/crime_api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
      credentials: "include",
    });

    if (res.ok) {
      router.push("/Logindashboard");
    } else {
      const err = await res.json();
      setErrorMsg(err.message || "Login failed");
    }
  };

  if (loading) return <p>Loading...</p>;
  if (user) return null;

  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="hidden md:flex md:w-1/2 bg-green-700 relative text-white items-center justify-center">
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="z-10 text-center px-6">
          <h1 className="text-2xl font-bold font-[sora]">
            BDIC DIGITAL CRIME DIARY SOLUTION
          </h1>
          <Image
            src="/images/officer.png"
            alt="Police Officers"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6 font-[sora]">Sign in</h2>
        <form onSubmit={handleSubmit} className="w-full max-w-sm">
          <div className="mb-4">
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              name="password"
              placeholder="Enter Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
              required
            />
          </div>
          <div className="flex justify-between items-center mb-4 font-[plus-jakata]">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link href="/auth/ForgetPassword" className="text-blue-600 text-sm">
              Forgot Password?
            </Link>
          </div>
          {errorMsg && (
            <p className="text-red-600 text-sm text-center mb-4">{errorMsg}</p>
          )}
          <button className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition">
            Sign in
          </button>
        </form>
      </div>
    </div>
  );
}

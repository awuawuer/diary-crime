"use client";
import React from "react";
import LoginForm from "@/Components/LoginForm";

export default function AdminLoginPage() {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Admin Login</h2>
        <LoginForm />
      </div>
    </div>
  );
}

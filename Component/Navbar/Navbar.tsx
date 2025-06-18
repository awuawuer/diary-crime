"use client";

import React, { useState, useRef, useEffect } from "react";
import { Bell, ChevronDown, LogOut } from "lucide-react";
import { useRouter } from "next/navigation";

export default function DashboardHeader() {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [user, setUser] = useState<{ name: string; email: string } | null>(
    null
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const router = useRouter();

  // ✅ Check auth and load user info
  useEffect(() => {
    const isAuthenticated = localStorage.getItem("isAuthenticated");
    const userData = localStorage.getItem("user");

    if (!isAuthenticated || !userData) {
      router.push("/login");
    } else {
      try {
        const parsedUser = JSON.parse(userData);
        setUser(parsedUser);
      } catch (err) {
        console.error("Failed to parse user:", err);
        router.push("/login");
      }
    }
  }, [router]);

  // ✅ Close dropdown on outside click
  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setDropdownOpen(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem("isAuthenticated");
    localStorage.removeItem("user");
    router.push("/login");
  };

  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase()
      .slice(0, 2);
  };

  if (!user) return null; // Don't render header until user is loaded

  return (
    <div className="flex items-center justify-between px-4 md:px-8 py-4 w-full">
      {/* Left: Title and Subtitle */}
      <div>
        <h1 className="text-xl font-semibold text-black">Cases</h1>
        <p className="text-sm text-gray-500">View about your cases</p>
      </div>

      {/* Right: Notification and User Info */}
      <div className="flex items-center gap-4 relative">
        {/* Notification bell */}
        <div className="bg-gray-100 p-2 rounded-full cursor-pointer">
          <Bell className="text-gray-600 w-5 h-5" />
        </div>

        {/* User profile with dropdown */}
        <div
          className="flex items-center gap-2 cursor-pointer"
          onClick={() => setDropdownOpen(!dropdownOpen)}
        >
          <div className="w-10 h-10 rounded-full bg-green-600 text-white flex items-center justify-center font-bold text-sm">
            {getInitials(user.name)}
          </div>
          <div className="leading-tight text-left">
            <p className="text-sm font-semibold text-black">{user.name}</p>
            <p className="text-xs text-gray-500">{user.email}</p>
          </div>
          <ChevronDown className="w-4 h-4 text-gray-500" />
        </div>

        {/* Dropdown */}
        {dropdownOpen && (
          <div
            ref={dropdownRef}
            className="absolute top-16 right-0 bg-white border rounded-md shadow-md w-40 z-50"
          >
            <button
              onClick={handleLogout}
              className="w-full flex items-center px-4 py-2 text-sm hover:bg-gray-100 text-red-600"
            >
              <LogOut className="w-4 h-4 mr-2" />
              Logout
            </button>
          </div>
        )}
      </div>
    </div>
  );
}

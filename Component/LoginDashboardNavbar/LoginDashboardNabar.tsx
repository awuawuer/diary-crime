"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { fetchUserProfile } from "@/lib/auth"; // Adjust the path if needed

export default function LoginHeader() {
  const [user, setUser] = useState<any | null>(null);
  const [loading, setLoading] = useState(true);
  const router = useRouter();

  useEffect(() => {
    const verify = async () => {
      try {
        const profile = await fetchUserProfile();
        if (!profile) {
          router.replace("/auth/Login");
          return;
        }
        setUser(profile);
      } catch (err) {
        router.replace("/auth/Login");
      } finally {
        setLoading(false);
      }
    };

    verify();
  }, []);

  const handleLogout = async () => {
    await fetch("http://localhost/crime_api/logout", {
      method: "POST",
      credentials: "include",
    });
    router.push("/auth/Login");
  };

  if (loading) return <p className="text-white p-4">Loading...</p>;

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
        {user && (
          <span className="hidden sm:inline">
            Welcome, {user.surname}, Track ID: {user.user_id}
          </span>
        )}
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

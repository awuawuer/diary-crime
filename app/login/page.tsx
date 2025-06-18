"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleLogin = (e: React.FormEvent) => {
    e.preventDefault();

    if (email === "awuawuerphilipn@gmail.com" && password === "password12345") {
      // ✅ Save auth flag
      localStorage.setItem("isAuthenticated", "true");

      // ✅ Save user info
      localStorage.setItem(
        "user",
        JSON.stringify({
          name: "ASP Philip Awuaweur",
          email: "awuawuerphilipn@gmail.com",
        })
      );

      // ✅ Redirect to dashboard
      router.push("/admin");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 p-4">
      <form
        onSubmit={handleLogin}
        className="bg-white p-6 rounded shadow-md w-full max-w-md space-y-4"
      >
        <h1 className="text-2xl font-bold text-center">Login</h1>

        {error && <p className="text-red-500 text-sm text-center">{error}</p>}

        <input
          type="email"
          placeholder="Email"
          className="w-full p-2 border rounded"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="w-full p-2 border rounded"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white p-2 rounded hover:bg-green-700"
        >
          Sign In
        </button>
      </form>
    </div>
  );
}

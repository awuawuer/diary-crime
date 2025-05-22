"use client";
import React, { useState } from "react";
import Link from "next/link";
import { FaGoogle, FaApple } from "react-icons/fa";
import Image from "next/image";
import Head from "next/head";
import { useRouter } from "next/navigation";

export default function Signup() {
  const [form, setForm] = useState({
    surname: "",
    firstname: "",
    email: "",
    password: "",
    confirm: "",
    agree: false,
  });

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [submitted, setSubmitted] = useState(false);
  const router = useRouter();


  const handleChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const { name, value, type, checked } = e.target;
    setForm({
      ...form,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  const validate = () => {
    const newErrors: Record<string, string> = {};

    if (!form.surname.trim()) newErrors.surname = "Surname is required";
    if (!form.firstname.trim()) newErrors.firstname = "Firstname is required";
    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      newErrors.email = "Invalid email address";
    }

    if (!form.password) newErrors.password = "Password is required";
    if (form.password && form.password.length < 6)
      newErrors.password = "Password must be at least 6 characters";

    if (!form.confirm) newErrors.confirm = "Please confirm your password";
    if (form.password !== form.confirm)
      newErrors.confirm = "Passwords do not match";

    if (!form.agree)
      newErrors.agree = "You must agree to the terms and conditions";

    return newErrors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      setSubmitted(true);
      console.log("Form submitted:", form);

      const res = await fetch("http://localhost/crime_api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
        credentials: "include"
  
      });

// ...
// router.push("/auth/Knownreporter");
router.push("/auth/Login");

      // TODO: Send form data to backend here

      // Optional: Reset form
      setForm({
        surname: "",
        firstname: "",
        email: "",
        password: "",
        confirm: "",
        agree: false,
      });
    }
  };

  return (
    <div className="min-h-screen flex flex-col md:flex-row">
      <Head>
        <title>BDIC Digital Crime Dairy - Signup</title>
      </Head>

      {/* Left side */}
      <div className="w-full md:w-1/2 bg-green-700 text-white flex flex-col justify-center items-center p-6">
        <div className="max-w-sm text-center">
          <h1 className="text-2xl font-bold mb-4">
            BDIC DIGITAL CRIME DAIRY SOLUTION.
          </h1>
          <Image
            src="/images/officer.png"
            alt="Officers"
            width={300}
            height={400}
            className="mx-auto"
          />
        </div>
      </div>

      {/* Right side */}
      <div className="w-full md:w-1/2 bg-gray-100 flex flex-col justify-center items-center p-8">
        <div className="w-full max-w-md">
          <h2 className="text-2xl font-bold mb-2 text-center">
            Create an account
          </h2>
          <p className="mb-4 text-sm">
            Already have an account?{" "}
            <Link href="/auth/Login" className="text-blue-600">
              Login
            </Link>
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <div className="flex gap-2">
              <div className="w-1/2">
                <input
                  type="text"
                  name="surname"
                  placeholder="Surname"
                  value={form.surname}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.surname && (
                  <p className="text-red-600 text-sm">{errors.surname}</p>
                )}
              </div>
              <div className="w-1/2">
                <input
                  type="text"
                  name="firstname"
                  placeholder="Firstname"
                  value={form.firstname}
                  onChange={handleChange}
                  className="w-full border p-2 rounded"
                />
                {errors.firstname && (
                  <p className="text-red-600 text-sm">{errors.firstname}</p>
                )}
              </div>
            </div>
            <div>
              <input
                type="email"
                name="email"
                placeholder="Email"
                value={form.email}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.email && (
                <p className="text-red-600 text-sm">{errors.email}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="password"
                placeholder="Enter Password"
                value={form.password}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.password && (
                <p className="text-red-600 text-sm">{errors.password}</p>
              )}
            </div>
            <div>
              <input
                type="password"
                name="confirm"
                placeholder="Re-enter Password"
                value={form.confirm}
                onChange={handleChange}
                className="w-full border p-2 rounded"
              />
              {errors.confirm && (
                <p className="text-red-600 text-sm">{errors.confirm}</p>
              )}
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                name="agree"
                checked={form.agree}
                onChange={handleChange}
                className="mr-2"
              />
              <label htmlFor="terms" className="text-sm">
                I agree to the{" "}
                <a href="#" className="text-blue-600">
                  terms and conditions
                </a>
              </label>
            </div>
            {errors.agree && (
              <p className="text-red-600 text-sm">{errors.agree}</p>
            )}
<button
  type="submit"
  className="w-full bg-green-800 text-white py-2 rounded hover:bg-green-700 transition"
>
  Create account
</button>


            {submitted && Object.keys(errors).length === 0 && (
              <p className="text-green-700 mt-2 text-sm">
                Account created successfully
              </p>
            )}
          </form>

          <div className="my-4 flex items-center justify-center">
            <span className="border-t w-1/4"></span>
            <span className="mx-2 text-sm">Or register with</span>
            <span className="border-t w-1/4"></span>
          </div>

          <div className="flex space-x-4 justify-center mb-4">
            <button className="flex items-center border px-4 py-2 rounded">
              <FaGoogle className="mr-2" /> Google
            </button>
            <button className="flex items-center border px-4 py-2 rounded">
              <FaApple className="mr-2" /> Apple
            </button>
          </div>

          <p className="text-xs text-center mt-8">Powered by BDIC © 2025</p>
        </div>
      </div>
    </div>
  );
}

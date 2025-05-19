import React from "react";
import Link from "next/link";
import Image from "next/image";
// import { Link } from "lucide-react";

const Login = () => {
  return (
    <div className="flex h-screen">
      {/* Left Section */}
      <div className="hidden md:flex md:w-1/2 bg-green-700 relative text-white items-center justify-center">
        <div className="absolute inset-0 bg-opacity-50"></div>
        <div className="z-10 text-center px-6">
          <h1 className="text-2xl font-bold">
            BDIC DIGITAL CRIME DAIRY SOLUTION
          </h1>
          <Image
            src="/images/officer.png"
            alt="Police Officers"
            // className="mt-6 w-4/5 md:w-3/5"
            width={400}
            height={400}
          />
        </div>
      </div>

      {/* Right Section */}
      <div className="flex flex-col justify-center items-center w-full md:w-1/2 p-6 bg-gray-100">
        <h2 className="text-2xl font-semibold mb-6">Sign in</h2>
        <form className="w-full max-w-sm">
          <div className="mb-4">
            <input
              type="email"
              placeholder="Email"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="mb-4">
            <input
              type="password"
              placeholder="Enter Password"
              className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
            />
          </div>
          <div className="flex justify-between items-center mb-4">
            <label className="flex items-center">
              <input type="checkbox" className="mr-2" /> Remember me
            </label>
            <Link href="/auth/ForgetPassword" className="text-blue-600 text-sm">
              Forgot Password?
            </Link>
          </div>
          <button className="w-full bg-green-700 text-white py-2 rounded-md hover:bg-green-800 transition">
            Sign in
          </button>
        </form>
        {/* <p className="mt-4 text-sm text-gray-500">Powered by BDIC 2025</p> */}
      </div>
    </div>
  );
};

export default Login;

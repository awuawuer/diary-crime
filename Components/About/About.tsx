import React from "react";
import Image from "next/image";

export default function AboutUs() {
  return (
    <section className="w-full bg-gradient-to-b from-[#dfe3ee] to-[#90949c] py-12 px-6">
      <div className="text-center mb-12">
        <div className="inline-block relative">
          <div className="absolute top-1 left-1 w-full h-full bg-green-400 rounded-md"></div>
          <div className="relative px-6 py-2 bg-gradient-to-r from-green-900 to-green-500 text-white font-semibold text-lg rounded-md">
            About Us
          </div>
        </div>
      </div>

      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-8 px-4">
        <div className="w-full md:w-1/2">
          <Image
            src="/images/aboutpics.png"
            height={600}
            width={700}
            alt="Laptop with analytics and map interface"
            className="rounded shadow-md w-full h-auto"
          />
        </div>

        <div className="w-full md:w-1/2 text-left text-gray-800">
          <p className="text-md leading-relaxed">
            BDIC Digital Crime Diary Solution is a comprehensive law enforcement
            platform designed to modernize criminal record management, enhance
            inter-agency collaboration, and provide secure crime reporting
            mechanisms. Given the sensitive nature of the data handled by the
            system, robust cybersecurity measures are essential to protect
            against unauthorized access, data breaches, and other cyber threats.
            This document outlines the cybersecurity specifications for the BDIC
            Digital Crime Diary Solution, ensuring the integrity,
            confidentiality, and availability of the system and its data.{" "}
            <a href="#" className="text-blue-600 hover:underline">
              Read more...
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}

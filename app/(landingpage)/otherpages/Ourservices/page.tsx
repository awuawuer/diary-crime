import React from "react";
import Image from "next/image";

export default function AboutSection() {
  return (
    <section
      className="bg-white py-16 px-4 sm:px-6 lg:px-20 bg-cover bg-center min-h-screen"
      style={{ backgroundImage: "url('/images/background3.png')" }}
    >
      <div className="max-w-7xl mx-auto">
        <h2 className="text-center text-3xl font-bold mb-12">Our Services</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
          {/* Image */}
          <div className="w-full">
            <Image
              src="/images/ourservices.png" // Place your uploaded image at public/images/about-us.png
              alt="Digital Crime Data"
              width={700}
              height={500}
              className="w-full h-auto object-cover rounded-md"
            />
          </div>

          {/* Text Content */}
          <div className="text-gray-800">
            <h3 className="text-2xl font-semibold mb-4">
              BDIC DIGITAL CRIME DAIRY SOLUTION
            </h3>
            <p className="text-base leading-relaxed">
              A digital crime diary solution is a specialized software
              application designed to assist law enforcement and investigative
              agencies in tracking, documenting, and analyzing various aspects
              of criminal investigations. This solution allows users to maintain
              detailed logs of incidents, evidence, interviews, and case
              developments in a centralized digital format. Key features may
              include secure data storage, user access controls, customizable
              templates for documentation, and analytical tools to identify
              patterns and correlations in crime data.
              <span className="text-blue-600 ml-1 cursor-pointer hover:underline">
                Read more...
              </span>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}

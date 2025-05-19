"use client";
import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { FaBullhorn } from "react-icons/fa";
import { ArrowRight } from "lucide-react";
const slides = [
  {
    id: 1,
    image: "/images/policepics1.png",
    backgroundImage: "/images/Background5.png",
    backgroundColor: "#1f2937", // Tailwind gray-800 as example
    title: (
      <>
        <span className="text-white">BDIC</span>
        <br />
        <span className="text-green-800">DIGITAL CRIME</span>
        <br />
        <span className="text-white">DAIRY SOLUTION</span>
      </>
    ),
  },
  {
    id: 2,
    backgroundImage: "/images/Background6.png",
    backgroundColor: "#1f2937", // Only color
    title: (
      <>
        <span className="text-white">YOUR SAFETY</span>
        <br />
        <span className="text-green-800">OUR PRIORITY</span>
        <br />
        <span className="text-white">JOIN THE MOVEMENT</span>
      </>
    ),
  },
  {
    id: 3,
    image: "/images/background7.png",
    backgroundColor: "#0f172a",
    title: (
      <>
        <span className="text-white">BDIC</span>
        <br />
        <span className="text-green-800">DIGITAL CRIME</span>
        <br />
        <span className="text-white">DAIRY SOLUTION</span>
      </>
    ),
  },
];

export default function Hero() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [currentSlide, setCurrentSlide] = useState(0);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  useEffect(() => {
    function handleClickOutside(event: MouseEvent) {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsDropdownOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  // Auto slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  return (
    <main
      className="py-16 px-4 sm:px-6 lg:px-20 bg-cover bg-center min-h-screen relative transition-all duration-700 ease-in-out"
      style={{
        backgroundImage: slides[currentSlide].backgroundImage
          ? `url(${slides[currentSlide].backgroundImage})`
          : "none",
        backgroundColor: slides[currentSlide].backgroundColor || "transparent",
      }}
    >
      <div className="h-screen max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        {/* Left Section */}
        <div className="space-y-6">
          <div className="flex items-center space-x-3">
            <FaBullhorn className="text-yellow-400 text-xl" />
            <span className="font-semibold text-lg text-white">
              Your Voice, Your Safety.
            </span>
          </div>

          {/* Dropdown section */}
          <div className="relative inline-block text-left" ref={dropdownRef}>
            <button
              onClick={toggleDropdown}
              className="bg-green-200 text-black px-6 py-2 rounded-md font-semibold shadow-md hover:bg-green-300"
            >
              Report Case
            </button>

            {isDropdownOpen && (
              <div className="absolute mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 z-10">
                <div className="py-1">
                  <Link
                    href="/auth/Anonymous"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
                  >
                    Anonymous Reporter
                  </Link>
                  <Link
                    href="/auth/SignUp"
                    className="block w-full text-left px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 mt-2"
                    onClick={() => alert("Sign up to continue")}
                  >
                    Known Reporter
                  </Link>
                </div>
              </div>
            )}
          </div>

          {/* Hero Text */}
          <h1 className="text-4xl md:text-5xl font-extrabold leading-tight">
            {slides[currentSlide].title}
          </h1>

          <div className="flex space-x-6 text-lg font-semibold">
            <span className="flex items-center text-white">
              <span className="mr-2 w-2 h-2 bg-green-500 rounded-full"></span>
              Document.
            </span>
            <span className="flex items-center text-white">
              <span className="mr-2 w-2 h-2 bg-green-500 rounded-full"></span>
              Analyze.
            </span>
            <span className="flex items-center text-white">
              <span className="mr-2 w-2 h-2 bg-green-500 rounded-full"></span>
              Seek Justice.
            </span>
          </div>

          {/* Get Started Button */}
          <button className="flex items-center space-x-3 bg-green-800 hover:bg-green-700 px-6 py-3 rounded-full shadow-lg">
            <span className="text-white font-bold text-lg">Get Started</span>
            <ArrowRight className="text-white" />
          </button>
        </div>

        {/* Right Section */}
        {/* Right Section */}
        <div className="relative w-full h-auto flex justify-center items-center mt-8 md:mt-0">
          {slides[currentSlide].image && (
            <div className="relative w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl h-auto">
              <Image
                src={slides[currentSlide].image}
                alt="Slide visual"
                layout="responsive"
                width={700}
                height={700}
                className="object-contain transition-opacity duration-700 ease-in-out"
              />
            </div>
          )}
        </div>

        {/* Slide indicators */}
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-2">
          {slides.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full ${
                currentSlide === index ? "bg-green-600" : "bg-white"
              }`}
            ></button>
          ))}
        </div>
      </div>
    </main>
  );
}

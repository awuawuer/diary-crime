import React from "react";
import Image from "next/image";
import Link from "next/link";
import { FaFacebook, FaInstagram, FaWhatsapp } from "react-icons/fa";
import { MdEmail, MdPhone } from "react-icons/md";

function Footer() {
  return (
    <main className="bg-[#52a43e] text-white px-6 py-8 text-center">
      <div className="max-w-[1120px] mx-auto flex flex-col md:flex-row justify-between items-center gap-6 md:gap-0">
        {/* Left Section */}
        <div className="flex flex-col gap-2">
          <Link href="/about" className="hover:underline">
            About Us
          </Link>
          <Link href="/" className="hover:underline">
            Home
          </Link>
        </div>

        {/* Middle Section */}
        <div className="flex flex-col gap-2">
          <Link href="/faq" className="hover:underline">
            FAQ
          </Link>
          <Link href="/privacy-policy" className="hover:underline">
            Privacy Policy
          </Link>
          <Link href="/terms" className="hover:underline">
            Terms of Service
          </Link>
        </div>

        {/* Right Section */}
        <div className="flex flex-col gap-2">
          <div className="flex items-center justify-center gap-2">
            <MdEmail />
            <span>info@bdic.ng</span>
          </div>
          <div className="flex items-center justify-center gap-2">
            <MdPhone />
            <span>+2348120500304</span>
          </div>
        </div>
      </div>

      {/* Social Media & Footer Text */}
      <div className="max-w-[1120px] mx-auto mt-8 flex flex-col md:flex-row justify-between items-center gap-4">
        <div className="flex gap-12 text-xl">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaFacebook />
          </a>
          <a
            href="https://www.facebook.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaWhatsapp />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-gray-300 transition-colors"
          >
            <FaInstagram />
          </a>
        </div>

        {/* <div className="flex items-center gap-2">
          <p className="text-base font-sans font-normal leading-[100px]">
            Powered By: BDIC 2025
          </p>
          <Link href="/">
            <Image
              src="/images/BDICLOGO.png"
              height={90}
              width={70}
              alt="BDIC Logo"
              // className="h-[50px] relative mt-10"
            />
          </Link>
        </div> */}
        <div className="flex items-center gap-2 text-[14px] text-center">
          <p>Powered by BDIC 2025</p>
          <a href="https://bdic.ng/" target="_blank" rel="noopener noreferrer">
            <Image
              src="/images/BDICLOGO.png"
              alt="BDIC Logo"
              width={69}
              height={70}
            />
          </a>
        </div>
      </div>
    </main>
  );
}

export default Footer;

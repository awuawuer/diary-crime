"use client";
import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { BiMenu } from "react-icons/bi";

const Header: React.FC = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setMenuOpen((prev) => !prev);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  const getNavLinkClass = (href: string): string =>
    pathname === href
      ? "inline-flex items-center justify-center text-[rgba(82,164,62,1)] px-8 py-3 "
      : "px-3 py-3 text-black hover:text-[rgba(82,164,62,1)]";

  return (
    <nav className="h-[60px] relative top-[27px] flex justify-between items-center w-[90%] max-w-[1240px] mx-auto mb-7 ">
      <div className="inline-flex items-center gap-1.5 h-[72.45px]">
        <Link href="/">
          <Image
            src="/images/BDICLOGO.png"
            height={100}
            width={80}
            alt="Logo"
            className="h-[72.45px] max-w-none sm:h-[50px]"
          />
        </Link>
      </div>

      <BiMenu
        className="text-white text-[30px] bg-green-600 cursor-pointer md:hidden"
        onClick={toggleMenu}
        aria-label="Toggle menu"
        role="button"
        tabIndex={0}
        onKeyDown={(e) => e.key === "Enter" && toggleMenu()}
      />

      <div
        className={`${
          menuOpen ? "flex" : "hidden"
        } md:inline-flex gap-6 md:flex-row flex-col md:static absolute top-[100px] right-0 bg-white md:bg-transparent p-5 md:p-0 text-center z-[1000] md:z-auto md:w-auto w-fit`}
      >
        <Link href="/" className={getNavLinkClass("/")} onClick={closeMenu}>
          Home
        </Link>
        <Link
          href="/otherpages/AboutUs"
          className={getNavLinkClass("/otherpages/AboutUs")}
          onClick={closeMenu}
        >
          About Us
        </Link>
        <Link
          href="/otherpages/ContactUs"
          className={getNavLinkClass("/otherpages/ContactUs")}
          onClick={closeMenu}
        >
          Contact
        </Link>
        <Link
          href="/otherpages/Ourservices"
          className={getNavLinkClass("/otherpages/Ourservices")}
          onClick={closeMenu}
        >
          Services
        </Link>
        <div className="flex items-center">
          <Link
            className="px-8 py-2.5 bg-green-900 rounded-[10px] text-white border-none cursor-pointer w-full md:w-auto sm:px-5"
            href={"/auth/SignUp"}
            onClick={closeMenu}
          >
            Sign up
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Header;

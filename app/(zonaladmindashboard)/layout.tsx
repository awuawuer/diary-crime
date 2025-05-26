// Zonal Admin Layout (Sidebar + Topbar + Main)
"use client";
import React from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Map,
  Users,
  Shield,
  BarChart2,
  LogOut,
  Settings,
} from "lucide-react";

const navLinks = [
  { name: "Dashboard", href: "/zonaladmin", icon: <Home /> },
  { name: "Zone Reports", href: "/zonaladmin/reports", icon: <Map /> },
  { name: "Known Reporters", href: "/zonaladmin/reporters", icon: <Users /> },
  {
    name: "Jurisdictions",
    href: "/zonaladmin/jurisdictions",
    icon: <Shield />,
  },
  { name: "Analytics", href: "/zonaladmin/analytics", icon: <BarChart2 /> },
  { name: "Settings", href: "/zonaladmin/settings", icon: <Settings /> },
];

export default function ZonalAdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pathname = usePathname();

  return (
    <div className="flex min-h-screen">
      <aside className="w-64 bg-gray-900 text-white">
        <div className="p-4 text-xl font-bold">BDIC Zonal Admin</div>
        <nav className="mt-4">
          {navLinks.map(({ name, href, icon }) => (
            <Link
              key={name}
              href={href}
              className={`flex items-center gap-2 px-4 py-2 hover:bg-gray-800 transition ${
                pathname === href ? "bg-gray-800" : ""
              }`}
            >
              {icon}
              {name}
            </Link>
          ))}
        </nav>
        <div className="mt-auto px-4 py-4 border-t border-gray-700">
          <Link
            href="/logout"
            className="flex items-center gap-2 hover:text-red-400"
          >
            <LogOut />
            Logout
          </Link>
        </div>
      </aside>

      <main className="flex-1 bg-gray-100 p-6">{children}</main>
    </div>
  );
}

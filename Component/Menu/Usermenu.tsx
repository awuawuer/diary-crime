"use client";
import Image from "next/image";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  Home,
  Users,
  Settings,
  Shield,
  BarChart2,
  LogOut,
  Menu,
  X,
} from "lucide-react";

const SidebarMenu = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const pathname = usePathname();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-16 lg:w-64 bg-gray-500 text-gray-300 transform transition-transform duration-300 ease-in-out
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:translate-x-0`}
      >
        <div className="p-4">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center justify-center lg:justify-start gap-2 mb-6"
          >
            <Image
              src="/images/BDICLOGO.png"
              alt="logo"
              width={32}
              height={32}
            />
            <span className="hidden lg:block font-bold text-white">BDIC</span>
          </Link>

          {/* Sidebar Links */}
          <div className="space-y-2 text-[12px] font-[Sora]">
            <SidebarLink
              href="/user-dashboard"
              icon={<Home className="w-6 h-6" strokeWidth={2.5} />}
              label="Dashboard"
              active={pathname === "/user-dashboard"}
            />

            <SidebarLink
              href="/agency-management"
              icon={<Shield className="w-6 h-6" strokeWidth={2.5} />}
              label="Agency Management"
              active={pathname === "/agency-management"}
            />
            <SidebarLink
              href="/analytics"
              icon={<BarChart2 className="w-6 h-6" strokeWidth={2.5} />}
              label="Analytics & Reports"
              active={pathname === "/analytics"}
            />
            <SidebarLink
              href="/system-settings"
              icon={<Settings className="w-6 h-6" strokeWidth={2.5} />}
              label="System Settings"
              active={pathname === "/system-settings"}
            />
            <SidebarLink
              href="/logout"
              icon={<LogOut className="w-6 h-6" strokeWidth={2.5} />}
              label="Logout"
              active={pathname === "/logout"}
            />
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Menu Toggle */}
        <div className="lg:hidden p-4 pb-1 pl-2 pt-2 flex items-center justify-between z-50">
          <button
            onClick={() => setSidebarOpen(!sidebarOpen)}
            className="text-gray-400 justify-items-end rounded-md hover:bg-gray-200 focus:ring-gray-300"
          >
            {sidebarOpen ? (
              <X size={28} strokeWidth={2.5} />
            ) : (
              <Menu size={28} strokeWidth={2.5} />
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

const SidebarLink = ({
  href,
  icon,
  label,
  active = false,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
  active?: boolean;
}) => (
  <Link
    href={href}
    className={`group relative flex items-center justify-center lg:justify-start gap-3 p-2 rounded-md transition-colors
      ${
        active
          ? "bg-green-100 text-black font-semibold"
          : "hover:bg-gray-800 text-gray-300"
      }`}
  >
    {icon}
    <span className="hidden lg:inline text-base">{label}</span>
    <span className="absolute left-full ml-2 top-1/2 -translate-y-1/2 whitespace-nowrap rounded bg-black text-white px-2 py-1 text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-200 lg:hidden z-50 shadow-lg">
      {label}
    </span>
  </Link>
);

export default SidebarMenu;

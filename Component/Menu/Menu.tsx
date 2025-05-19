"use client";

import { useState } from "react";
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
  const pathname = usePathname(); // Get current route path

  return (
    <div className="flex h-screen">
      {/* Sidebar */}
      <aside
        className={`fixed top-0 left-0 z-40 h-full w-64 bg-gray-500 text-gray-300 transform transition-transform duration-300 ease-in-out
        ${
          sidebarOpen ? "translate-x-0" : "-translate-x-full"
        } lg:static lg:translate-x-0`}
      >
        <div className="p-4 space-y-2 text-sm">
          <SidebarLink
            href="/Dashboard"
            icon={<Home className="w-6 h-6" strokeWidth={2.5} />}
            label="Dashboard"
            active={pathname === "/dashboard"}
          />
          <SidebarLink
            href="/Caseoversight"
            icon={<Shield className="w-6 h-6" strokeWidth={2.5} />}
            label="Case Oversight"
            active={pathname === "/case-oversight"}
          />
          <SidebarLink
            href="/UserRoleManagement"
            icon={<Users className="w-6 h-6" strokeWidth={2.5} />}
            label="User & Role Management"
            active={pathname === "/user-role-management"}
          />
          <SidebarLink
            href="/jurisdiction-management"
            icon={<Shield className="w-6 h-6" strokeWidth={2.5} />}
            label="Jurisdiction Management"
            active={pathname === "/jurisdiction-management"}
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
      </aside>

      {/* Main Content */}
      <div className="flex-1 flex flex-col">
        {/* Mobile Menu Bar */}
        <div className="lg:hidden p-4 flex items-center justify-between shadow z-50">
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
    className={`flex items-center gap-3 p-2 rounded-md transition-colors ${
      active
        ? "bg-green-100 text-black font-semibold"
        : "hover:bg-gray-800 text-gray-300"
    }`}
  >
    {icon}
    <span className="text-base">{label}</span>
  </Link>
);

export default SidebarMenu;

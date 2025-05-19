import React from "react";
import LoginDashboardNavbar from "@/Component/LoginDashboardNavbar/LoginDashboardNabar";
export default function LoginDashboardlayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <LoginDashboardNavbar />
      <div>{children}</div>
    </>
  );
}

import React from "react";
import Nav from "@/Components/Nav";
import Footer from "@/Components/Footer";

export default function Homelayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <Nav />
      <div>{children}</div>
      <Footer />
    </>
  );
}

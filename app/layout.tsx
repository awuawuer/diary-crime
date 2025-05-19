import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

const font = Roboto({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "BDIC digital crime diary solution",
  description: "bdic digital crime diary solution",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${font.className}} antialiased`}>{children}</body>
    </html>
  );
}

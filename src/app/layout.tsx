import type { Metadata } from "next";
import localFont from "next/font/local";
import "../assets/styles/globals.css";

export const metadata: Metadata = {
  title: "PropertyPulse | Find the Perfect Rental",
  description: "Find the dream rental property",
  keywords: "rental, find rental, find property",
};

export default function MainLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}

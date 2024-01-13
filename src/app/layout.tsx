import type { Metadata } from "next";
import { GeistSans } from "geist/font/sans";
import "./globals.css";
import Header from "@/components/Header/Header";

const geistFont = GeistSans;

export const metadata: Metadata = {
  title: "LogisMule Logistics",
  description: "An innovative international logistics company",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={geistFont.className}>
        <Header />
        {children}
      </body>
    </html>
  );
}

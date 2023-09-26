import { Inter } from "next/font/google";

import type { Metadata } from "next";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  description: "This page generates a random quote.",
  title: "Random Quote Machine"
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="mx-auto p-12 bg-black min-h-screen text-white">{children}</main>
      </body>
    </html>
  );
};

export default RootLayout;

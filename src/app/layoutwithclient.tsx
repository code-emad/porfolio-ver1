"use client";

import "./globals.css";
import { Inter } from "next/font/google";
import Navbar from "./Components/Navbar";
import { ThemeProvider } from "next-themes";
import Footer from "./Components/Footer";

const inter = Inter({ subsets: ["latin"] });

export default function LayoutWithclient({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ThemeProvider enableSystem={true} attribute="class">
          <Navbar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}

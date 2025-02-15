import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./provider";
import Header from "@/components/header.tsx";
import React from "react";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin-ext"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Oluremi's Portfolio",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      
      <body className={`px-6 md:px-10 pt-6 md:pt-8 ${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <section className="maxWidthSection">
            <Header />
            {children}
          </section>
        </ThemeProvider>
      </body>
    </html>
  );
}

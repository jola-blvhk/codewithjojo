import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import ThemeProvider from "./provider";
import React from "react";
import Header from "@/components/header";
import AnimatedWrapper from "@/components/animated-wrapper";

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Jola | Frontend Developer Portfolio",
  description:
    "Explore my frontend development portfolio showcasing modern, responsive, and user-friendly web applications. Passionate about crafting intuitive UI/UX with React, TypeScript, and cutting-edge technologies. Let's build something amazing!",
  icons: {
    icon: "/logo.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={` ${poppins.variable} antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          <AnimatedWrapper>
            <Header />
            {children}
          </AnimatedWrapper>
        </ThemeProvider>
      </body>
    </html>
  );
}

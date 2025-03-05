"use client";

import Image from "next/image";
import React, { useState } from "react";
import Logo from "../../../public/assets/logo.png";
import Hamburger from "../../../public/assets/menu.png";

import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import { usePathname } from "next/navigation";
import HandDrawnText from "./hand-drawn-text";
import AnimatedThemeToggle from "../animated-theme-toggle";

export default function Header() {
  const pathname = usePathname();
  const [dropNav, setDropNav] = useState(false);

  const navLinks = [
    { title: "Projects", link: "/" },
    { title: "About me", link: "/about-me" },
    { title: "Resume", link: "https://drive.google.com/file/d/1ijlC1vTCeC3n25S8leXm7IJcsM79PbRn/view?usp=sharing"},
  ];

  return (
    <header className="paddingX sticky top-0 z-50 bg-white dark:bg-purple-100 backdrop-blur-lg backdrop-filter dark:backdrop-filter-dark pt-6 md:pt-8 pb-4 md:pb-0 ">
      <div className="maxWidthSection flex justify-between items-center">
        {/* Logo */}
        <Link href="/">
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="logo"
            className="w-[50px] h-auto md:w-[80px]"
          />
        </Link>

        {/* Desktop Navigation */}
        <div className="hidden md:block">
          <ul className="flex gap-[51px] items-center">
            {navLinks.map((link, index) => {
              const isActive =
                pathname === link.link ||
                (link.link === "/" && pathname.startsWith("/project-details"));

              return (
                <Link
                  key={index}
                  href={link.link}
                  className="grid place-items-center"
                >
                  <div className="relative">
                    <li
                      className={`${
                        !isActive && "hover:underline underline-offset-8"
                      } text-lg text-center py-5`}
                    >
                      {isActive ? (
                        <HandDrawnText text={link.title} />
                      ) : (
                        link.title
                      )}
                    </li>
                  </div>
                </Link>
              );
            })}
            <ThemeToggle />
          </ul>
        </div>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setDropNav(!dropNav)}>
            <Image
              src={Hamburger}
              width={28}
              height={28}
              alt="menu"
              className="w-[28px] h-auto"
            />
          </button>
        </div>
      </div>

      {/* Overlay (Only covers screen below the header) */}
      {dropNav && (
        <div
          className="fixed top-[72px] left-0 w-full h-[calc(100vh-72px)] bg-black/10 dark:bg-black/10 z-40 md:hidden"
          onClick={() => setDropNav(false)}
        />
      )}

      {/* Mobile Dropdown Navigation */}
      {dropNav && (
        <div className="absolute top-[72px] left-0 w-full bg-[#FAFAFA] dark:bg-purple-200 drop-shadow-lg shadow-gray-100 dark:shadow-purple-100/10 rounded-b-2xl shadow-lg md:hidden transition-all z-50">
          <ul className="flex flex-col items-center gap-5 py-6">
            {navLinks.map((link, index) => {
              const isActive =
                pathname === link.link ||
                (link.link === "/" && pathname.startsWith("/project-details"));

              return (
                <li key={index}>
                  <Link
                    href={link.link}
                    className="text-lg text-center block py-2 hover:underline"
                    onClick={() => setDropNav(false)}
                  >
                    {isActive ? (
                      <HandDrawnText text={link.title} />
                    ) : (
                      link.title
                    )}
                  </Link>
                </li>
              );
            })}
            <AnimatedThemeToggle />
          </ul>
        </div>
      )}
    </header>
  );
}

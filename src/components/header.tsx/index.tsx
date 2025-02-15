"use client";

import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/logo.png";
import Hamburger from "../../../public/assets/menu.png";
import Link from "next/link";
import ThemeToggle from "../theme-toggle";
import { usePathname } from "next/navigation";
import HandDrawnText from "./hand-drawn-text";
const Header = () => {
  const pathname = usePathname();

  const navLinks = [
    {
      title: "Projects",
      link: "/",
    },
    {
      title: "About me",
      link: "/about-me",
    },
    {
      title: "Resume",
      link: "/resume",
    },
  ];
  return (
    <header className="flex justify-between items-center">
      <div>
        <Image
          src={Logo}
          width={100}
          height={100}
          alt="logo"
          className="w-[50px] h-auto md:w-[80px]"
        />
      </div>
      <div className="flex gap-8 items-center">
        <Image
          src={Hamburger}
          width={100}
          height={100}
          alt="menu"
          className="md:hidden w-[28px] h-auto "
        />

        <div className="hidden md:block">
          <ul className="flex gap-[51px] items-center">
            {navLinks.map((link, index) => {
              // Check if the current link is active
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
                      className={`${!isActive && "hover:underline underline-offset-8 "} text-lg  text-center py-5 `}
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
      </div>
    </header>
  );
};

export default Header;

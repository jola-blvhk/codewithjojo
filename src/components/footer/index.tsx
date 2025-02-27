import Image from "next/image";
import React from "react";
import Logo from "../../../public/assets/logo.png";
import { BsGithub } from "react-icons/bs";
import { FaLinkedinIn } from "react-icons/fa6";
import Link from "next/link";

const Footer = () => {
  const date = new Date().getFullYear();
  return (
    <>
      <section className="m-auto w-fit mt-16  mb-20 md:mb-32 ">
        <div className="flex items-center gap-[22px] ">
          <Image
            src={Logo}
            width={100}
            height={100}
            alt="logo"
            className="w-[50px] h-auto md:w-[80px]"
          />
          <h2 className="font-bold text-2xl md:text-3xl">Oluremi Bello</h2>
        </div>

        <button
          onClick={() =>
            (window.location.href = "mailto:awujoolabello@gmail.com")
          }
          className=" text-white mt-6 sm:mt-3 py-2.5 px-[22.3px] w-full  sm:py-5 sm:px-12 rounded-[50px] text-sm md:text-base lg:text-lg bg-black"
        >
          Send a mail
        </button>

        <div className="flex text-black dark:text-white items-center gap-6 mt-6 m-auto w-fit">
          <Link href="https://github.com/jola-blvhk">
            <BsGithub className="w-[40px] h-[40px] md:w-[65px] md:h-[65px]" />
          </Link>
          <Link href="https://www.linkedin.com/in/oluremi-bello/">
            <div className="w-[40px] h-[40px] md:w-[65px] md:h-[65px] bg-black dark:bg-white text-white dark:text-purple-100 rounded-full flex items-center justify-center">
              <FaLinkedinIn className="text-2xl md:text-4xl" />
            </div>
          </Link>
        </div>
      </section>

      <p className="text-xs md:text-sm text-center mb-8 md:mb-12">
        © {date} All rights reserved. – Designed by Ojuolape Bello
      </p>
    </>
  );
};

export default Footer;

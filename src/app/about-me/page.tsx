"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import ProfilePicture from "../../../public/assets/profile-picture.svg";
import SmallProfilePicture from "../../../public/assets/small-profile-picture.svg";
import { MdOutlineCheckroom } from "react-icons/md";
const AboutMe = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsSmallScreen(window.innerWidth < 640);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);
    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <section className="paddingX py-4 md:py-9">
      <section className="maxWidthSection grid md:flex gap-4 md:gap-8 lg:gap-10">
        <div className="flex gap-5 items-center md:items-start">
          <div className=" w-[60px] sm:w-[90px] md:w-[120px] h-auto md:h-[120px] ">
            <Image
              src={isSmallScreen ? SmallProfilePicture : ProfilePicture}
              width={50}
              height={50}
              alt="Jojo"
              quality={100}
              className="inline md:block w-full h-auto rounded-xl"
            />
          </div>
          <h1 className="md:hidden font-bold mt-3 md:mt-4  text-3xl  sm:text-4xl md:text-5xl xl:text-6xl leading-[70px] sm:leading-[80px] lg:leading-[96px] xl:leading-[96px] ">
            Hi, I&rsquo;m Oluremi !
          </h1>
        </div>

        <section className="lg:w-[70%]">
          <h1 className="hidden md:block font-bold mt-9  text-3xl  sm:text-4xl md:text-5xl xl:text-6xl leading-[70px]  ">
            Hi, I&rsquo;m Oluremi !
          </h1>
          <div className="md:mt-14  space-y-4 text-sm sm:text-base  md:text-lg md:leading-8">
            <p className="">
              I craft <strong> beautiful, responsive, and user-friendly</strong>{" "}
              web experiences using modern front-end technologies. My passion
              lies in transforming ideas into sleek, interactive, and functional
              web applications—ensuring every pixel and interaction feels just
              right!😊
            </p>
            <p>
              Currently, I’m learning <strong>Java</strong> to strengthen my
              understanding of object-oriented programming and backend
              development, allowing me to build more robust and scalable
              applications.
            </p>
            <p>
              I&rsquo;m also working on a
              <strong> mobile app called Jojo-AI</strong>, where I&rsquo;m
              exploring
              <strong> text streaming</strong>, a technology used in AI-powered
              applications (like OpenAI&rsquo;s models) to process and display
              text incrementally for a smoother user experience.
              <br />
              <strong>Jojo-AI</strong> is an app where users type a story prompt
              (e.g., &quot;A spaceship lands in a medieval kingdom&quot;), and
              the AI generates a story in real-time, streaming each paragraph as
              it’s created.
            </p>
          </div>

          <div className="mt-6">
            <h2 className="text-base sm:text-lg md:text-xl font-semibold">
              What I Bring to the Table :
            </h2>
            <ul className="mt-2 md:mt-4 space-y-2">
              {[
                "Pixel-perfect, responsive UI",
                "Seamless user experiences",
                "Performance-optimized web apps",
                "Clean, maintainable code",
              ].map((skill, index) => (
                <li
                  key={index}
                  className="flex items-center gap-2 text-sm sm:text-base md:text-lg"
                >
                  <MdOutlineCheckroom className="text-pink-100" />
                  {skill}
                </li>
              ))}
            </ul>
            <p className="mt-4 text-xs sm:text-sm">
              When I’m not coding, you’ll find me immersed in fantasy books,
              exploring new worlds and epic adventures.{" "}
              <em>
                I Highly recommend &quot;Throne of Glass&quot; series by Sarah
                J. Maas!
              </em>
            </p>
          </div>
          <a
            href="https://drive.google.com/file/d/1ijlC1vTCeC3n25S8leXm7IJcsM79PbRn/view?usp=sharing"
            target="_blank"
            rel="noopener noreferrer"
          >
            {" "}
            <button className=" text-white mt-4 sm:mt-6 py-2 px-[22.3px]  sm:py-5 sm:px-12 rounded-[50px] text-sm md:text-base lg:text-lg bg-black">
              View Resume
            </button>
          </a>
        </section>
      </section>
    </section>
  );
};

export default AboutMe;

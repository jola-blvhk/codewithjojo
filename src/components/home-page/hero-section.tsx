import Image from "next/image";
import React from "react";
import GreenLight from "../../../public/assets/green-light.svg";
import ProfilePicture from "../../../public/assets/profile-picture.png";
import AnimatedSkills from "./animated-skills";
import AnimatedArrows from "./animated-arrows";

const HeroSection = () => {
  return (
    <div className="relative  lg:flex justify-between items-center">
      <div className="sm: w-full  lg:w-[95%] xl:w-[60%]">
        <div className=" pl-1.5 pr-2 pb-1 pt-1.5 w-fit  md:pl-3 md:pr-4 text-xs md:text-base  md:py-3  gap-1.5 md:gap-3 border border-gray-100 rounded-[40px] dark:bg-purple-200 flex items-center">
          <Image
            src={GreenLight}
            alt="green-light"
            className="w-3 h-auto md:w-6  "
          />
          <p>Open to work</p>
        </div>

        <h1 className="font-bold mt-3 md:mt-4  text-3xl  sm:text-5xl  xl:text-6xl leading-[70px] sm:leading-[80px] lg:leading-[96px] ">
          <Image
            src={ProfilePicture}
            alt="Jojo"
            className="inline mr-5 sm:mr-7  md:mr-10 aspect-square w-[60px] sm:w-[90px] md:w-[120px] h-auto rounded-xl"
          />{" "}
          Hi, I&rsquo;m Oluremi !<br />
          <span className="text-gray-100">a</span>{" "}
          <span className="text-pink-100">Front-end Developer</span>
        </h1>
        <p className="lg:w-[80%] sm:mt-3 leading-7 text-sm sm:text-base sm:leading-9   md:leading-9 lg:leading-10 lg:text-lg md:text-xl">
          I craft visually appealing and user-friendly web experiences with
          clean, efficient code. Passionate about turning ideas into
          interactive, responsive, and accessible digital solutions.
        </p>

        <button
          onClick={() =>
            (window.location.href = "mailto:awujoolabello@gmail.com")
          }
          className=" text-white mt-2 sm:mt-3 py-2 px-[22.3px]  sm:py-5 sm:px-12 rounded-[50px] text-sm md:text-base lg:text-lg bg-black"
        >
          Send a mail
        </button>
      </div>

      <div className="  sm:mt-10 md:mt-16 relative right-12 sm:left-20 md:left-40  lg:left-0 lg:right-0 w-fit gap-8 flex scale-75 sm:scale-125  lg:scale-95 xl:scale-100 xl:relative xl:right-0 xl:left-0  items-center">
        <div className="relative top-6">
          <AnimatedArrows />
        </div>

        <AnimatedSkills />
      </div>
    </div>
  );
};

export default HeroSection;

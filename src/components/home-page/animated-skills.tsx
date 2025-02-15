"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import ReactLogo from "../../../public/assets/skills/react.svg";
import HTMLLogo from "../../../public/assets/skills/html.svg";
import CSSLogo from "../../../public/assets/skills/css.svg";
import PythonLogo from "../../../public/assets/skills/python.svg";
import TypeScriptLogo from "../../../public/assets/skills/typescript.svg";

const AnimatedSkills = () => {
  return (
    <div className="relative items-center h-[200px] mt-10 w-[300px]">
      {/* First Row - Three Icons */}
      <motion.div
        initial={{ y: -50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 5 }}
        whileHover={{ scale: 1.1, rotate: 15 }}
        className="flex justify-between border-gray-100 bg-[#DED9D9] dark:bg-purple-200 shadow-lg rounded-full px-6 w-full border h-[74px] transition-all"
      >
        <Image src={ReactLogo} alt="React" width={40} height={40} />
        <Image src={HTMLLogo} alt="HTML" width={80} height={40} />
        <Image src={CSSLogo} alt="CSS" width={50} height={40} />
      </motion.div>

      {/* Second Row - Single Icon (Diagonal) */}
      <motion.div
        initial={{ x: -50, opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        transition={{ duration: 5, delay: 0.2 }}
        whileHover={{ scale: 1.1, rotate: -17.52 }}
      >
        <div className="relative flex justify-between left-[50px] items-center gap-3 border-gray-100 bg-[#DED9D9] dark:bg-purple-200 shadow-lg rounded-full px-6 border rotate-[17.52deg] w-[80%] h-[74px] transition-all">
          <Image
            src={PythonLogo}
            alt="Python"
            width={50}
            height={40}
            className="-rotate-[17.52deg]"
          />
        </div>
      </motion.div>

      {/* Third Row - Two Icons */}
      <motion.div
        initial={{ y: 50, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 5, delay: 0.4 }}
        whileHover={{ scale: 1.1, rotate: 15.25 }}
      >
        <div className="flex relative justify-between bottom-[15px] right-[15%] items-center border-gray-100 bg-[#DED9D9] dark:bg-purple-200 shadow-lg rounded-full px-6 py-3 border -rotate-[15.25deg] h-[74px] w-[115%] transition-all">
          <Image
            src={TypeScriptLogo}
            alt="TypeScript"
            width={168}
            height={40}
            className="rotate-[15.12deg]"
          />
          <Image src={ReactLogo} alt="React" width={40} height={40} />
        </div>
      </motion.div>
    </div>
  );
};

export default AnimatedSkills;

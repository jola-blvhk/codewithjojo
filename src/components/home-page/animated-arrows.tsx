"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Arrow from "../../../public/assets/arrow.svg";

const AnimatedArrows = () => {
  return (
    <div className="relative flex flex-col items-center h-[200px] w-[100px]">
      {/* First Arrow - Rotates to top-left */}
      <motion.div
        initial={{ rotate: 70, opacity: 0 }}
        animate={{ rotate: 15, opacity: 1 }}
        transition={{ duration: 5, delay: 0.2 }}
        whileHover={{
          rotate: [0, 360],
          transition: { duration: 3, ease: "linear" },
        }}
        className="absolute top-0"
      >
        <Image src={Arrow} alt="Arrow 1" width={50} height={50} />
      </motion.div>

      {/* Second Arrow - Rotates to diagonal */}
      <motion.div
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 50, opacity: 1 }}
        transition={{ duration: 5, delay: 0.4 }}
        whileHover={{
          rotate: [0, 360],
          transition: { duration: 3, ease: "linear" },
        }}
        className="absolute top-[40%]"
      >
        <Image src={Arrow} alt="Arrow 2" width={42} height={50} />
      </motion.div>

      {/* Third Arrow - Rotates downward */}
      <motion.div
        initial={{ rotate: 0, opacity: 0 }}
        animate={{ rotate: 100, opacity: 1 }}
        transition={{ duration: 5, delay: 0.6 }}
        whileHover={{
          rotate: [0, 360],
          transition: { duration: 3, ease: "linear" },
        }}
        className="absolute top-[80%]"
      >
        <Image src={Arrow} alt="Arrow 3" width={48} height={50} />
      </motion.div>
    </div>
  );
};

export default AnimatedArrows;

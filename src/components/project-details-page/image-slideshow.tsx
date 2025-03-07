"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";

const Slideshow = ({ images }: { images: string[] }) => {
  const [index, setIndex] = useState(1);

  useEffect(() => {
    if (images.length < 3) return;

    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, [images]);

  return (
    <div className="relative w-full max-w-4xl mx-auto flex items-center justify-center overflow-hidden">
      <div className="relative flex w-full h-[250px] sm:h-[300px] items-center justify-center">
        {images.map((src, i) => {
          // Determine the position in the loop
          const prev = (index - 1 + images.length) % images.length;
          let scale = 0.8;
          let opacity = 0.6;
          let translateX = "95%";

          if (i === prev) {
            translateX = "-95%";
          } else if (i === index) {
            scale = 1;
            opacity = 1;
            translateX = "0%"; // Centered
          }

          return (
            <motion.img
              key={i}
              src={src}
              alt={`Slide ${i + 1}`}
              className="absolute w-[80%] sm:w-[85%] lg:w-[60%] max-w-lg rounded-xl shadow-lg"
              style={{ transform: "translateX(-50%)" }}
              initial={{ opacity: 1, scale: 1 }}
              animate={{
                opacity,
                scale,
                x: translateX,
              }}
              transition={{ duration: 1, ease: "easeInOut" }}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Slideshow;

"use client";

import HeroSection from "@/components/home-page/hero-section";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{
        opacity: 0,
      }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 1.8 }}
      className="min-h-screen   "
    >
      <section className="py-6 md:py-9">
        <HeroSection />
      </section>
    </motion.div>
  );
}

"use client";

import HeroSection from "@/components/home-page/hero-section/hero-section";
import ProjectSection from "@/components/home-page/projects-section/project";

export default function Home() {
  return (
    <section className="paddingX">
      <section className="maxWidthSection ">
        <HeroSection />
        <ProjectSection />
      </section>
    </section>
  );
}

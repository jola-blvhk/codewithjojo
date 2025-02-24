"use client";

import HeroSection from "@/components/home-page/hero-section/hero-section";
import ProjectSection from "@/components/home-page/projects-section/project";
import SkillsSection from "@/components/home-page/skills-section/skills-section";

export default function Home() {
  return (
    <section className="paddingX h-[7000px]">
      <section className="maxWidthSection ">
        <HeroSection />
        <ProjectSection />
        <SkillsSection />
      </section>
    </section>
  );
}

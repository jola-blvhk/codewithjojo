"use client";

import HeroSection from "@/components/home-page/hero-section/hero-section";
import ProjectSection from "@/components/home-page/projects-section/project";
import ReviewsSection from "@/components/home-page/reviews-section/reviews-section";
import SkillsSection from "@/components/home-page/skills-section/skills-section";
import Footer from "@/components/footer";

export default function Home() {
  return (
    <section className="paddingX">
      <section className="maxWidthSection ">
        <HeroSection />
        <ProjectSection />
        <SkillsSection />
        <ReviewsSection />
        <Footer />
      </section>
    </section>
  );
}

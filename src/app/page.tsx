import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { StatSection } from "@/components/sections/StatSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { ShowcaseCarousel } from "@/components/sections/ShowcaseCarousel";
import { Panorama } from "@/components/sections/Panorama";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { Pricing } from "@/components/sections/Pricing";
import { CtaFreya } from "@/components/layout/CtaFreya";

export const metadata: Metadata = {
  alternates: {
    languages: { de: "/", en: "/en" },
  },
};

export default function Home() {
  return (
    <>
      <Hero />
      <LogoStrip />
      <StatSection />
      <ProjectSection />
      <ShowcaseCarousel />
      <Panorama />
      <Testimonials />
      <Team />
      <Pricing />
      <CtaFreya />
    </>
  );
}

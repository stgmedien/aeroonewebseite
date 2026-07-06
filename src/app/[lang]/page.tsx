import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { StatSection } from "@/components/sections/StatSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { ImmoHeroCallout } from "@/components/sections/ImmoHeroCallout";
import { ShowcaseCarousel } from "@/components/sections/ShowcaseCarousel";
import { Panorama } from "@/components/sections/Panorama";
import { NetworkSection } from "@/components/sections/NetworkSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { Pricing } from "@/components/sections/Pricing";
import { CtaFreya } from "@/components/layout/CtaFreya";
import { getDict, isLocale } from "@/i18n";

export const metadata: Metadata = {
  alternates: {
    languages: { de: "/", en: "/en" },
  },
};

/** Startseite nach der Gen-E-Pitch-Storyline: 01 Problem → 02 Lösung → 03 Live-Demo → 04 Vision → 05 Team → 06 Impact → 07 Preise. */
export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "de";
  const d = getDict(locale);

  return (
    <>
      <Hero t={d.hero} locale={locale} />
      <LogoStrip t={d.logoStrip} />
      <ProblemSection t={d.problem} />
      <StatSection t={d.stat} />
      <ProjectSection t={d.project} />
      <ImmoHeroCallout t={d.immoHero} />
      <ShowcaseCarousel t={d.showcase} />
      <Panorama t={d.panorama} />
      <NetworkSection t={d.network} />
      <Testimonials t={d.testimonials} de={locale === "de"} />
      <Team t={d.team} />
      <ImpactSection t={d.impact} />
      <Pricing t={d.pricing} />
      <CtaFreya t={d.freyaCta} />
    </>
  );
}

import type { Metadata } from "next";
import { Hero } from "@/components/sections/Hero";
import { LogoStrip } from "@/components/sections/LogoStrip";
import { PressMarquee } from "@/components/sections/PressMarquee";
import { ProblemSection } from "@/components/sections/ProblemSection";
import { StatSection } from "@/components/sections/StatSection";
import { ProjectSection } from "@/components/sections/ProjectSection";
import { ExposeSimulator } from "@/components/sections/ExposeSimulator";
import { ImmoHeroCallout } from "@/components/sections/ImmoHeroCallout";
import { ShowcaseCarousel } from "@/components/sections/ShowcaseCarousel";
import { Panorama } from "@/components/sections/Panorama";
import { NetworkSection } from "@/components/sections/NetworkSection";
import { Testimonials } from "@/components/sections/Testimonials";
import { Team } from "@/components/sections/Team";
import { ImpactSection } from "@/components/sections/ImpactSection";
import { StatsBand } from "@/components/sections/StatsBand";
import { PackageFinder } from "@/components/sections/PackageFinder";
import { Pricing } from "@/components/sections/Pricing";
import { RoiCalculator } from "@/components/sections/RoiCalculator";
import { CtaFreya } from "@/components/layout/CtaFreya";
import { FlightHud } from "@/components/layout/FlightHud";
import { getDict, isLocale } from "@/i18n";

export const metadata: Metadata = {
  alternates: {
    languages: { de: "/", en: "/en" },
  },
};

export default async function Home({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "de";
  const d = getDict(locale);

  // Kapitel-Stationen fürs Flug-Telemetrie-HUD (Labels aus dem Dict, Ziele = Sektions-IDs)
  const chapters = [
    { no: "01", label: d.problem.eyebrow, target: "#problem" },
    { no: "02", label: d.stat.eyebrow, target: "#loesung" },
    { no: "03", label: d.showcase.eyebrow, target: "#galerie" },
    { no: "04", label: d.network.eyebrow, target: "#netzwerk" },
    { no: "05", label: d.team.eyebrow, target: "#team" },
    { no: "06", label: d.impact.eyebrow, target: "#impact" },
    { no: "07", label: d.pricing.eyebrow, target: "#preise" },
  ];

  return (
    <>
      <FlightHud chapters={chapters} />
      <Hero t={d.hero} locale={locale} />
      <LogoStrip t={d.logoStrip} />
      <PressMarquee label={d.pressMarquee.label} locale={locale} />
      <ProblemSection t={d.problem} />
      <StatSection t={d.stat} />
      <ProjectSection t={d.project} />
      <ExposeSimulator t={d.expose} />
      <ImmoHeroCallout t={d.immoHero} />
      <ShowcaseCarousel t={d.showcase} />
      <Panorama t={d.panorama} />
      <NetworkSection t={d.network} mapT={d.map} />
      <Testimonials t={d.testimonials} de={locale === "de"} />
      <Team t={d.team} />
      <ImpactSection t={d.impact} />
      <StatsBand t={d.statsBand} />
      <PackageFinder t={d.packageFinder} pricing={d.pricing} />
      <Pricing t={d.pricing} />
      <RoiCalculator t={d.roi} locale={locale} />
      <CtaFreya t={d.freyaCta} />
    </>
  );
}

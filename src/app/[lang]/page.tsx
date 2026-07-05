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

  return (
    <>
      <Hero t={d.hero} locale={locale} />
      <LogoStrip t={d.logoStrip} />
      <StatSection t={d.stat} />
      <ProjectSection t={d.project} />
      <ShowcaseCarousel t={d.showcase} />
      <Panorama t={d.panorama} />
      <Testimonials t={d.testimonials} de={locale === "de"} />
      <Team t={d.team} />
      <Pricing t={d.pricing} />
      <CtaFreya t={d.freyaCta} />
    </>
  );
}

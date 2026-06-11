import type { Metadata } from "next";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { ContactForm } from "@/components/sections/ContactForm";
import { CtaFreya } from "@/components/layout/CtaFreya";
import { contactPage } from "@/data/content";

export const metadata: Metadata = {
  title: "Kontakt",
  description: "Stelle deine Anfrage – professionelle Luftbildaufnahmen sind nur einen Klick entfernt.",
};

export default function KontaktPage() {
  return (
    <>
      <section className="relative isolate overflow-hidden pt-32 sm:pt-40">
        <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[44rem] max-w-[92%] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
        <div className="container-x">
          <div className="mx-auto max-w-xl text-center">
            <Reveal>
              <SectionLabel>{contactPage.eyebrow}</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-5 font-display text-5xl font-extrabold tracking-tight sm:text-6xl">
                {contactPage.title}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg text-fg-muted">{contactPage.text}</p>
            </Reveal>
          </div>

          <Reveal delay={0.1}>
            <div className="mx-auto mt-12 max-w-2xl">
              <ContactForm />
            </div>
          </Reveal>
        </div>
      </section>

      <CtaFreya />
    </>
  );
}

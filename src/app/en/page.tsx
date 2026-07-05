import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Trophy, Clock, LayoutGrid, ShieldCheck, Mail, ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { team, video } from "@/data/assets";
import { CONTACT_EMAIL } from "@/data/nav";

export const metadata: Metadata = {
  title: "Professional Drone Footage in 48h — Germany's Best Student Company 2026",
  description:
    "Aero One is a JUNIOR student company from Gütersloh, Germany — named Germany's Best Student Company 2026 (IW JUNIOR) and representing Germany at the Gen-E European finals in Riga, July 7–10. Professional aerial photos & videos for real estate, delivered within 48 hours.",
  openGraph: {
    title: "Aero One — Germany's Best Student Company 2026",
    description:
      "Professional drone footage for real estate, delivered within 48 hours. Representing Germany at Gen-E 2026 in Riga.",
    locale: "en_US",
  },
  alternates: {
    languages: { de: "/", en: "/en" },
  },
};

/** Englische Rollen für die Team-Sektion (Quelle: assets.ts team[]). */
const rolesEn: Record<string, string> = {
  "Jonathan Kreutzheide": "Managing Director & Co-Founder",
  "Linus Held": "Drone Pilot & Co-Founder",
  "Freya Knight": "Head of Sales",
  "Amy Thomalla": "Sales",
  "Friedrich Grüninger": "Marketing & Drone Pilot in Training",
};

const highlights = [
  { label: "NRW State Champion 2026", sub: "IW JUNIOR state competition" },
  { label: "Germany's Best Student Company 2026", sub: "IW JUNIOR national finals, Cologne" },
  { label: "Gen-E European Finals", sub: "Riga · July 7–10, 2026" },
  { label: "13 media reports", sub: "Print · Online · Radio · Social" },
];

const features = [
  {
    icon: Clock,
    title: "Delivered within 48 hours",
    text: "Fully edited aerial photos and videos, ready to publish — two days after the flight.",
  },
  {
    icon: LayoutGrid,
    title: "One digital platform",
    text: "All media available in one central place. Fully digital from request to delivery.",
  },
  {
    icon: ShieldCheck,
    title: "Permits & insurance handled",
    text: "We take care of flight permits, drone insurance and the required approvals — our clients don't have to.",
  },
];

export default function EnglishPage() {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[44rem] max-w-[92%] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
      <div className="container-x">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>Germany&apos;s Best Student Company 2026</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Professional drone footage. <span className="text-gradient">Delivered in 48 hours.</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg text-fg-muted">
              Aero One is a JUNIOR student company founded and run by five students at Evangelisch
              Stiftisches Gymnasium in Gütersloh, Germany. We produce professional aerial photos and
              videos for real estate agents, construction companies and architects — and we are
              representing Germany at the Gen-E European finals in Riga, July 7–10.
            </p>
          </Reveal>
        </div>

        {/* Award highlights */}
        <Reveal delay={0.2}>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {highlights.map((h) => (
              <div key={h.label} className="flex items-center gap-3 rounded-2xl glass px-4 py-3.5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sunset text-ink-deep">
                  <Trophy size={18} />
                </span>
                <span className="flex flex-col">
                  <span className="font-display text-base font-bold leading-tight text-fg">{h.label}</span>
                  <span className="text-xs text-fg-muted">{h.sub}</span>
                </span>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Video */}
        <Reveal delay={0.1}>
          <div className="mt-14 overflow-hidden rounded-[1.75rem] ring-sunset shadow-card">
            <video
              src={video.hero.src}
              poster={video.hero.poster}
              controls
              preload="metadata"
              playsInline
              className="aspect-video w-full object-cover"
            />
          </div>
          <p className="mt-3 text-center text-sm text-fg-muted">Our story — one minute, straight from Gütersloh.</p>
        </Reveal>

        {/* What we do */}
        <div className="mt-16 grid gap-4 md:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.title} delay={0.05 + i * 0.06} className="h-full">
              <div className="flex h-full flex-col rounded-2xl glass p-6">
                <span className="grid h-10 w-10 place-items-center rounded-xl bg-sunset text-ink-deep">
                  <f.icon size={18} />
                </span>
                <h2 className="mt-4 font-display text-lg font-bold tracking-tight text-fg">{f.title}</h2>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{f.text}</p>
              </div>
            </Reveal>
          ))}
        </div>

        {/* Traction */}
        <Reveal delay={0.1}>
          <div className="mt-14 max-w-3xl">
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              A real business — <span className="text-gradient">with paying clients</span>
            </h2>
            <p className="mt-4 text-lg text-fg-muted">
              The idea was born in class in autumn 2025. Since then, Aero One has delivered five
              projects — including work for the Gütersloh real-estate firm Kaup and Concept GT, the
              city&apos;s business development agency. With the national title, the team is now
              investing in training new drone pilots and creating opportunities for young people.
            </p>
          </div>
        </Reveal>

        {/* Team */}
        <div className="mt-16">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Five students. <span className="text-gradient">One company.</span>
            </h2>
          </Reveal>
          <div className="mt-8 grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-5">
            {team.map((m, i) => (
              <Reveal key={m.name} delay={Math.min(i * 0.05, 0.25)} className="h-full">
                <div className="flex h-full flex-col overflow-hidden rounded-2xl glass">
                  <div className="relative aspect-[3/4] w-full">
                    <Image
                      src={m.src}
                      alt={m.name}
                      fill
                      className="object-cover"
                      sizes="(max-width:640px) 50vw, (max-width:1024px) 33vw, 20vw"
                    />
                  </div>
                  <div className="p-3.5">
                    <p className="text-sm font-bold leading-tight text-fg">{m.name}</p>
                    <p className="mt-1 text-xs leading-snug text-fg-muted">{rolesEn[m.name] ?? m.role}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* Contact / Gen-E CTA */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] glass-strong p-7 sm:flex-row sm:items-center sm:p-9">
            <div className="max-w-lg">
              <h2 className="font-display text-2xl font-extrabold tracking-tight">
                Meet us at Gen-E 2026 in Riga
              </h2>
              <p className="mt-2 text-fg-muted">
                July 7–10 · Team Germany. For press inquiries, partnerships or bookings, drop us a
                line — we usually reply within a day.
              </p>
              <p className="mt-4 text-sm text-fg-muted">
                Press coverage (in German):{" "}
                <Link href="/presse" className="inline-flex items-center gap-1 font-semibold text-ember transition-colors hover:text-fg">
                  aeroone.eu/presse <ArrowUpRight size={14} />
                </Link>
              </p>
            </div>
            <a
              href={`mailto:${CONTACT_EMAIL}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-sunset px-6 py-3.5 font-semibold text-ink-deep shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Mail size={18} />
              {CONTACT_EMAIL}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

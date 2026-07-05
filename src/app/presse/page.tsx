import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, Globe, Radio, Megaphone, Trophy, ArrowUpRight, Mail } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import {
  pressIntro,
  pressHighlights,
  pressContact,
  pressItems,
  type PressItem,
  type PressKind,
} from "@/data/press";
import { pressReleases, type PressRelease } from "@/data/pressReleases";

export const metadata: Metadata = {
  title: "Presse",
  description:
    "Aero One in der Presse — Berichterstattung und offizielle Pressemitteilungen der mehrfach ausgezeichneten JUNIOR-Schülerfirma aus Gütersloh (IW JUNIOR Landessieger NRW & Bundessieger 2026).",
  openGraph: {
    title: "Aero One in der Presse — Beste Schülerfirma Deutschlands 2026",
    description:
      "Bundessieger des IW-JUNIOR-Wettbewerbs 2026, Deutschlands Vertreter beim Gen-E-Europa-Finale in Riga: der Medienspiegel und alle offiziellen Pressemitteilungen.",
  },
};

type IconCmp = ComponentType<{ size?: number }>;

const kindIcon: Record<PressKind, IconCmp> = {
  print: Newspaper,
  online: Globe,
  radio: Radio,
  social: InstagramIcon,
  release: Megaphone,
};

function PressCard({ item }: { item: PressItem }) {
  let Icon = kindIcon[item.kind];
  if (item.kindLabel === "LinkedIn") Icon = LinkedInIcon;

  return (
    <a
      href={item.url}
      target="_blank"
      rel="noopener noreferrer"
      className="group flex h-full flex-col rounded-2xl glass p-5 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-card"
    >
      <div className="flex items-center justify-between gap-3">
        <span className="flex items-center gap-2.5">
          <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sunset text-ink-deep">
            <Icon size={17} />
          </span>
          <span className="flex flex-col">
            <span className="text-sm font-semibold leading-tight text-fg">{item.outlet}</span>
            <span className="text-[0.7rem] uppercase tracking-wider text-fg-muted">{item.kindLabel}</span>
          </span>
        </span>
        <time className="shrink-0 text-xs font-medium text-fg-muted">{item.dateLabel}</time>
      </div>

      <h3 className="mt-4 flex-1 font-display text-lg font-bold leading-snug tracking-tight text-fg">
        {item.title}
      </h3>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember transition-colors">
        Zum Beitrag
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

function ReleaseCard({ release }: { release: PressRelease }) {
  return (
    <Link
      href={`/presse/${release.slug}`}
      className="group flex h-full flex-col rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-card sm:p-7"
    >
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sunset text-ink-deep">
          <Megaphone size={17} />
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
          Pressemitteilung · {release.dateLabel}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-extrabold leading-snug tracking-tight text-fg sm:text-2xl">
        {release.title}
      </h3>
      <p className="mt-3 flex-1 text-fg-muted">{release.summary}</p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ember">
        Pressemitteilung lesen
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export default function PressePage() {
  const items = [...pressItems].sort((a, b) => b.date.localeCompare(a.date));
  const releases = [...pressReleases].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[44rem] max-w-[92%] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
      <div className="container-x">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>{pressIntro.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              Aero One <span className="text-gradient">{pressIntro.highlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg text-fg-muted">{pressIntro.text}</p>
          </Reveal>
        </div>

        {/* Highlights */}
        <Reveal delay={0.2}>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {pressHighlights.map((h) => (
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

        {/* Aero One in der Presse (Medienspiegel) */}
        <div className="mt-20">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Der <span className="text-gradient">Medienspiegel</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 max-w-2xl text-fg-muted">
              Eine Auswahl der Berichterstattung über Aero One in Print, Online, Radio und Social Media.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.outlet + item.date + i} delay={Math.min(i * 0.04, 0.3)} className="h-full">
                <PressCard item={item} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Offizielle Pressemitteilungen */}
        <div className="mt-20">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              Offizielle <span className="text-gradient">Pressemitteilungen</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 max-w-2xl text-fg-muted">
              Mitteilungen direkt von Aero One – zur freien redaktionellen Verwendung.
            </p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {releases.map((release, i) => (
              <Reveal key={release.slug} delay={Math.min(i * 0.05, 0.3)} className="h-full">
                <ReleaseCard release={release} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Pressekontakt */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] glass-strong p-7 sm:flex-row sm:items-center sm:p-9">
            <div className="max-w-md">
              <h2 className="font-display text-2xl font-extrabold tracking-tight">{pressContact.title}</h2>
              <p className="mt-2 text-fg-muted">{pressContact.text}</p>
              <p className="mt-4 text-sm">
                <span className="font-semibold text-fg">{pressContact.name}</span>
                <span className="text-fg-muted"> · {pressContact.role}</span>
              </p>
            </div>
            <a
              href={`mailto:${pressContact.email}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-sunset px-6 py-3.5 font-semibold text-ink-deep shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Mail size={18} />
              {pressContact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

import type { ComponentType } from "react";
import type { Metadata } from "next";
import Link from "next/link";
import { Newspaper, Globe, Radio, Megaphone, Trophy, ArrowUpRight, Mail } from "lucide-react";
import { InstagramIcon, LinkedInIcon } from "@/components/ui/Icons";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pressItems, type PressItem, type PressKind } from "@/data/press";
import type { PressRelease } from "@/data/pressReleases";
import { formatDate, getDict, isLocale, localePath, type Dict, type Locale } from "@/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const d = getDict(isLocale(lang) ? lang : "de");
  return {
    title: d.meta.presse.title,
    description: d.meta.presse.description,
    openGraph: {
      title: d.meta.presse.ogTitle,
      description: d.meta.presse.ogDescription,
    },
    alternates: { languages: { de: "/presse", en: "/en/presse" } },
  };
}

type IconCmp = ComponentType<{ size?: number }>;

const kindIcon: Record<PressKind, IconCmp> = {
  print: Newspaper,
  online: Globe,
  radio: Radio,
  social: InstagramIcon,
  release: Megaphone,
};

function PressCard({ item, locale, t }: { item: PressItem; locale: Locale; t: Dict["presse"] }) {
  let Icon = kindIcon[item.kind];
  if (item.url.includes("linkedin.com")) Icon = LinkedInIcon;

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
            <span className="text-[0.7rem] uppercase tracking-wider text-fg-muted">
              {t.kindLabels[item.kind]}
            </span>
          </span>
        </span>
        <time className="shrink-0 text-xs font-medium text-fg-muted">{formatDate(locale, item.date)}</time>
      </div>

      <h3 className="mt-4 flex-1 font-display text-lg font-bold leading-snug tracking-tight text-fg">
        {item.title}
      </h3>

      <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-ember transition-colors">
        {t.toArticle}
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </a>
  );
}

function ReleaseCard({ release, locale, t }: { release: PressRelease; locale: Locale; t: Dict["presse"] }) {
  return (
    <Link
      href={localePath(locale, `/presse/${release.slug}`)}
      className="group flex h-full flex-col rounded-2xl glass p-6 transition-all duration-300 hover:-translate-y-1 hover:border-white/20 hover:shadow-card sm:p-7"
    >
      <div className="flex items-center gap-2.5">
        <span className="grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-sunset text-ink-deep">
          <Megaphone size={17} />
        </span>
        <span className="text-xs font-semibold uppercase tracking-wider text-fg-muted">
          {t.releaseCardKind} · {formatDate(locale, release.date)}
        </span>
      </div>

      <h3 className="mt-4 font-display text-xl font-extrabold leading-snug tracking-tight text-fg sm:text-2xl">
        {release.title}
      </h3>
      <p className="mt-3 flex-1 text-fg-muted">{release.summary}</p>

      <span className="mt-5 inline-flex items-center gap-1.5 text-sm font-semibold text-ember">
        {t.readRelease}
        <ArrowUpRight size={16} className="transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
      </span>
    </Link>
  );
}

export default async function PressePage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "de";
  const d = getDict(locale);
  const t = d.presse;

  const items = [...pressItems].sort((a, b) => b.date.localeCompare(a.date));
  const releases = [...t.releases].sort((a, b) => b.date.localeCompare(a.date));

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[44rem] max-w-[92%] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
      <div className="container-x">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>{t.intro.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {t.intro.title} <span className="text-gradient">{t.intro.highlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg text-fg-muted">{t.intro.text}</p>
          </Reveal>
        </div>

        {/* Highlights */}
        <Reveal delay={0.2}>
          <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
            {t.highlights.map((h) => (
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

        {/* Medienspiegel */}
        <div className="mt-20">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              {t.mediaTitlePre} <span className="text-gradient">{t.mediaTitleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 max-w-2xl text-fg-muted">{t.mediaSub}</p>
          </Reveal>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {items.map((item, i) => (
              <Reveal key={item.outlet + item.date + i} delay={Math.min(i * 0.04, 0.3)} className="h-full">
                <PressCard item={item} locale={locale} t={t} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Offizielle Pressemitteilungen */}
        <div className="mt-20">
          <Reveal>
            <h2 className="font-display text-2xl font-extrabold tracking-tight sm:text-3xl">
              {t.releasesTitlePre} <span className="text-gradient">{t.releasesTitleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.1}>
            <p className="mt-3 max-w-2xl text-fg-muted">{t.releasesSub}</p>
          </Reveal>
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {releases.map((release, i) => (
              <Reveal key={release.slug} delay={Math.min(i * 0.05, 0.3)} className="h-full">
                <ReleaseCard release={release} locale={locale} t={t} />
              </Reveal>
            ))}
          </div>
        </div>

        {/* Pressekontakt */}
        <Reveal delay={0.1}>
          <div className="mt-16 flex flex-col items-start justify-between gap-6 rounded-[1.75rem] glass-strong p-7 sm:flex-row sm:items-center sm:p-9">
            <div className="max-w-md">
              <h2 className="font-display text-2xl font-extrabold tracking-tight">{t.contact.title}</h2>
              <p className="mt-2 text-fg-muted">{t.contact.text}</p>
              <p className="mt-4 text-sm">
                <span className="font-semibold text-fg">{t.contact.name}</span>
                <span className="text-fg-muted"> · {t.contact.role}</span>
              </p>
            </div>
            <a
              href={`mailto:${t.contact.email}`}
              className="inline-flex items-center gap-2.5 rounded-full bg-sunset px-6 py-3.5 font-semibold text-ink-deep shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
            >
              <Mail size={18} />
              {t.contact.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

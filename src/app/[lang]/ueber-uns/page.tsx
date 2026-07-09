import type { Metadata } from "next";
import { Trophy } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { badgeIcon } from "@/components/ui/badgeIcons";
import { getDict, isLocale, localePath } from "@/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const d = getDict(isLocale(lang) ? lang : "de");
  return {
    title: d.meta.about.title,
    description: d.meta.about.description,
    alternates: { languages: { de: "/ueber-uns", en: "/en/ueber-uns" } },
  };
}

export default async function AboutPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "de";
  const t = getDict(locale).about;

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[44rem] max-w-[92%] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
      <div className="container-x">
        {/* Header */}
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel>{t.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {t.titlePre} <span className="text-gradient">{t.titleHighlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-6 text-lg leading-relaxed text-fg-muted">{t.lead}</p>
          </Reveal>
        </div>

        {/* Stats */}
        <Reveal delay={0.2}>
          <div className="mt-12 grid grid-cols-2 gap-4 lg:grid-cols-4">
            {t.stats.map((s) => (
              <div key={s.label} className="rounded-2xl glass px-5 py-6 text-center">
                <p className="font-display text-3xl font-extrabold tracking-tight text-gradient sm:text-4xl">{s.value}</p>
                <p className="mt-1 text-xs font-medium uppercase tracking-wider text-fg-muted">{s.label}</p>
              </div>
            ))}
          </div>
        </Reveal>

        {/* Mission */}
        <div className="mt-24 grid items-start gap-10 lg:grid-cols-[0.8fr_1.2fr]">
          <Reveal>
            <SectionLabel>{t.missionEyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <div>
              <h2 className="font-display text-2xl font-extrabold leading-snug tracking-tight sm:text-3xl">
                {t.missionTitle}
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-fg-muted">{t.missionText}</p>
            </div>
          </Reveal>
        </div>

        {/* Timeline */}
        <div className="mt-24">
          <Reveal>
            <SectionLabel>{t.storyEyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
              {t.storyTitle}
            </h2>
          </Reveal>

          <ol className="mt-12 space-y-0">
            {t.milestones.map((m, i) => (
              <Reveal key={m.date} delay={Math.min(i * 0.05, 0.3)}>
                <li className="relative grid gap-4 pb-10 pl-8 sm:grid-cols-[10rem_1fr] sm:gap-8 sm:pl-0">
                  {/* Linie + Punkt (nur mobil links) */}
                  <span className="absolute left-[5px] top-2 h-full w-px bg-white/10 sm:hidden" aria-hidden />
                  <span className="absolute left-0 top-1.5 h-2.5 w-2.5 rounded-full bg-sunset ring-4 ring-ink sm:hidden" aria-hidden />
                  <time className="text-sm font-semibold uppercase tracking-wider text-ember">{m.date}</time>
                  <div className="border-l border-white/10 pl-6 sm:pl-8">
                    <h3 className="font-display text-lg font-bold text-fg">{m.title}</h3>
                    <p className="mt-2 leading-relaxed text-fg-muted">{m.text}</p>
                  </div>
                </li>
              </Reveal>
            ))}
          </ol>
        </div>

        {/* Werte */}
        <div className="mt-24">
          <div className="max-w-2xl">
            <Reveal>
              <SectionLabel>{t.valuesEyebrow}</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl">
                {t.valuesTitle}
              </h2>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-4 text-lg text-fg-muted">{t.valuesText}</p>
            </Reveal>
          </div>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {t.values.map((v, i) => (
              <Reveal key={v.title} delay={Math.min(i * 0.05, 0.3)} className="h-full">
                <div className="flex h-full flex-col rounded-2xl glass p-6">
                  <span className="grid h-11 w-11 place-items-center rounded-xl bg-sunset text-ink-deep">
                    {badgeIcon(v.icon, 22)}
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-fg">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-fg-muted">{v.text}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        {/* CTA */}
        <Reveal delay={0.1}>
          <div className="mt-24 flex flex-col items-start gap-6 rounded-[1.75rem] glass-strong p-8 sm:flex-row sm:items-center sm:justify-between sm:p-10">
            <div className="max-w-xl">
              <span className="inline-flex items-center gap-2 text-sm font-semibold text-ember">
                <Trophy size={16} /> {t.ctaTitle}
              </span>
              <p className="mt-3 text-lg text-fg-muted">{t.ctaText}</p>
            </div>
            <div className="flex shrink-0 flex-col gap-3 sm:flex-row">
              <Button href={localePath(locale, t.ctaPrimary.href)} size="lg" arrow>
                {t.ctaPrimary.label}
              </Button>
              <Button href={localePath(locale, t.ctaSecondary.href)} size="lg" variant="secondary">
                {t.ctaSecondary.label}
              </Button>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

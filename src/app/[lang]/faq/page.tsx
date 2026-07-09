import type { Metadata } from "next";
import Link from "next/link";
import { Plus } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { getDict, isLocale, localePath } from "@/i18n";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  const d = getDict(isLocale(lang) ? lang : "de");
  return {
    title: d.meta.faq.title,
    description: d.meta.faq.description,
    alternates: { languages: { de: "/faq", en: "/en/faq" } },
  };
}

export default async function FaqPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const locale = isLocale(lang) ? lang : "de";
  const t = getDict(locale).faq;

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[44rem] max-w-[92%] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          {/* Header */}
          <Reveal>
            <SectionLabel>{t.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h1 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
              {t.title}
            </h1>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg text-fg-muted">{t.text}</p>
          </Reveal>

          {/* Accordion */}
          <Reveal delay={0.1}>
            <div className="mt-10 space-y-3">
              {t.items.map((item) => (
                <details
                  key={item.q}
                  className="group rounded-2xl glass px-5 py-1 transition-colors [&[open]]:bg-white/[0.04]"
                >
                  <summary className="flex cursor-pointer list-none items-center justify-between gap-4 py-4 font-display text-lg font-bold text-fg marker:hidden">
                    {item.q}
                    <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-sunset text-ink-deep transition-transform duration-300 group-open:rotate-45">
                      <Plus size={16} strokeWidth={2.5} />
                    </span>
                  </summary>
                  <p className="pb-5 pr-12 leading-relaxed text-fg-muted">{item.a}</p>
                </details>
              ))}
            </div>
          </Reveal>

          {/* CTA */}
          <Reveal delay={0.1}>
            <div className="mt-12 flex flex-col items-center gap-4 rounded-[1.5rem] glass-strong p-8 text-center">
              <p className="font-display text-xl font-bold text-fg">{t.ctaText}</p>
              <Link
                href={localePath(locale, t.ctaHref)}
                className="inline-flex items-center gap-2.5 rounded-full bg-sunset px-6 py-3 font-semibold text-ink-deep shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
              >
                {t.ctaLabel}
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

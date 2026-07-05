import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { partners } from "@/data/nav";
import type { Dict } from "@/i18n";

export function LogoStrip({ t }: { t: Dict["logoStrip"] }) {
  return (
    <section className="relative border-y border-white/8 bg-ink-deep/60 py-14">
      <Reveal className="container-x text-center">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-fg-muted">
          {t.trust}
        </p>
      </Reveal>

      <div className="mt-8">
        <Marquee className="mask-fade-x">
          {partners.map((p) => (
            <a
              key={p.name}
              href={p.href}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2.5 whitespace-nowrap font-display text-xl font-bold text-fg-muted/70 grayscale transition-all duration-300 hover:text-fg hover:grayscale-0"
              title={p.name}
            >
              <span className="grid h-8 w-8 place-items-center rounded-lg border border-white/15 text-ember">
                {p.name.charAt(0)}
              </span>
              {p.name}
            </a>
          ))}
        </Marquee>
      </div>

      <div className="container-x mt-16 text-center">
        <Reveal>
          <SectionLabel>{t.eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
            {t.titlePre}{" "}
            <span className="text-gradient">{t.titleHighlight}</span>
          </h2>
        </Reveal>
      </div>
    </section>
  );
}

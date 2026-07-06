import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GlassCard } from "@/components/ui/GlassCard";
import { badgeIcon } from "@/components/ui/badgeIcons";
import type { Dict } from "@/i18n";

/** Kapitel 01 — die drei Hürden der Immobilienvermarktung (Gen-E-Storyline). */
export function ProblemSection({ t }: { t: Dict["problem"] }) {
  return (
    <section className="section">
      <div className="container-x">
        <div className="mx-auto max-w-3xl text-center">
          <Reveal>
            <SectionLabel no="01">{t.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {t.titlePre} <span className="text-gradient">{t.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-fg-muted">{t.text}</p>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-5 md:grid-cols-3">
          {t.pains.map((p) => (
            <RevealItem key={p.title} className="h-full">
              <GlassCard className="flex h-full flex-col p-7">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-sunset text-ink-deep">
                  {badgeIcon(p.icon, 22)}
                </span>
                <h3 className="mt-5 font-display text-lg font-bold tracking-tight text-fg">{p.title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-fg-muted">{p.text}</p>
              </GlassCard>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

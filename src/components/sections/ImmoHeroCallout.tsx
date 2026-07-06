import { Tag } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { GlassCard } from "@/components/ui/GlassCard";
import { Button } from "@/components/ui/Button";
import { IMMOHERO_URL } from "@/data/nav";
import type { Dict } from "@/i18n";

/** Abschluss des Lösungs-Kapitels: Privatkund:innen → immohero.org (ab 79 €). */
export function ImmoHeroCallout({ t }: { t: Dict["immoHero"] }) {
  return (
    <section className="pb-20 sm:pb-24">
      <div className="container-x">
        <Reveal>
          <GlassCard ring hover={false} className="flex flex-col items-start justify-between gap-6 p-7 sm:flex-row sm:items-center sm:p-9">
            <div className="max-w-xl">
              <div className="flex flex-wrap items-center gap-3">
                <h3 className="font-display text-2xl font-extrabold tracking-tight text-fg">{t.title}</h3>
                <span className="inline-flex items-center gap-1.5 rounded-full bg-sunset px-3 py-1 text-xs font-bold uppercase tracking-wider text-ink-deep">
                  <Tag size={13} />
                  {t.note}
                </span>
              </div>
              <p className="mt-2 text-fg-muted">{t.text}</p>
            </div>
            <Button href={IMMOHERO_URL} size="lg" variant="secondary" arrow newTab className="shrink-0">
              {t.ctaLabel}
            </Button>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

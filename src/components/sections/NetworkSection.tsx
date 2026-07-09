import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import { badgeIcon } from "@/components/ui/badgeIcons";
import { EuropeMap } from "@/components/ui/EuropeMap";
import { onboardingUrl } from "@/lib/immohero";
import type { Dict } from "@/i18n";

/** Kapitel 04 — die Vision: ein europaweites Netzwerk (bewusst ohne Zahlen/Ask). */
export function NetworkSection({ t, mapT }: { t: Dict["network"]; mapT: Dict["map"] }) {
  return (
    <section id="netzwerk" className="relative overflow-hidden scroll-mt-24">
      {/* Sunset-Glow (Muster aus CtaFreya) */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-[42rem] max-w-[90%] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />

      <div className="container-x section relative text-center">
        <Reveal>
          <SectionLabel no="04">{t.eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <h2 className="mx-auto mt-5 max-w-3xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
            {t.titlePre} <span className="text-gradient">{t.titleHighlight}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.15}>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-fg-muted">{t.text}</p>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            {t.roles.map((r) => (
              <Badge key={r.label} icon={badgeIcon(r.icon)}>
                {r.label}
              </Badge>
            ))}
          </div>
        </Reveal>

        {/* Animierte Europa-Karte: Gütersloh → Riga */}
        <Reveal delay={0.25}>
          <div className="mx-auto mt-10 max-w-3xl">
            <EuropeMap t={mapT} />
          </div>
        </Reveal>

        <Reveal delay={0.25}>
          <div className="mt-9 flex flex-col items-center gap-3">
            <Button href={onboardingUrl()} size="lg" arrow newTab>
              {t.ctaLabel}
            </Button>
            <p className="text-sm text-fg-muted">{t.ctaNote}</p>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

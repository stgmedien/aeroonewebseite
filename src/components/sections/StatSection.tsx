import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { badgeIcon } from "@/components/ui/badgeIcons";
import { photos } from "@/data/assets";
import { bookingUrl } from "@/lib/immohero";
import type { Dict } from "@/i18n";
import Image from "next/image";

export function StatSection({ t }: { t: Dict["stat"] }) {
  return (
    <section className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Bild */}
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] ring-sunset shadow-card sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={photos.immobilieNk2.src}
              alt={photos.immobilieNk2.alt}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
          </div>
        </Reveal>

        {/* Inhalt */}
        <div>
          <Reveal>
            <SectionLabel no="02">{t.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              {t.title} <span className="text-gradient">{t.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-md text-lg text-fg-muted">{t.text}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-ember">{t.kicker}</p>
            <div className="mt-3">
              <Button href={bookingUrl()} size="lg" arrow>
                {t.ctaLabel}
              </Button>
            </div>
          </Reveal>

          <div className="mt-9 grid grid-cols-2 gap-3">
            {t.badges.map((b, i) => (
              <Reveal key={b.label} delay={0.25 + i * 0.06}>
                <Badge icon={badgeIcon(b.icon)}>{b.label}</Badge>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

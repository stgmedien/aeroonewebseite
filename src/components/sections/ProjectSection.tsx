import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { BeforeAfterSlider } from "@/components/ui/BeforeAfterSlider";
import { badgeIcon } from "@/components/ui/badgeIcons";
import { photos } from "@/data/assets";
import { bookingUrl } from "@/lib/immohero";
import type { Dict } from "@/i18n";
import Image from "next/image";

export function ProjectSection({ t }: { t: Dict["project"] }) {
  return (
    <section id="leistungen" className="section scroll-mt-24">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Inhalt */}
        <div className="order-2 lg:order-1">
          <Reveal>
            <SectionLabel>{t.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              {t.titlePre} <span className="text-gradient">{t.titleHighlight}</span>
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

        {/* Vorher / Nachher */}
        <Reveal className="order-1 lg:order-2">
          <BeforeAfterSlider
            className="aspect-[4/3] w-full shadow-card"
            beforeLabel={t.beforeLabel}
            afterLabel={t.afterLabel}
            before={
              <Image
                src={photos.immobilieHv1.src}
                alt={photos.immobilieHv1.alt}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            }
            after={
              <Image
                src={photos.immobilieHv2.src}
                alt={photos.immobilieHv2.alt}
                fill
                className="object-cover"
                sizes="(max-width:1024px) 100vw, 50vw"
              />
            }
          />
          <p className="mt-3 text-center text-sm text-fg-muted">{t.sliderHint}</p>
        </Reveal>
      </div>
    </section>
  );
}

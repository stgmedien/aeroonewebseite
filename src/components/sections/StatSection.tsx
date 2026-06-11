import { Button } from "@/components/ui/Button";
import { Badge } from "@/components/ui/Badge";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { badgeIcon } from "@/components/ui/badgeIcons";
import { stat } from "@/data/content";
import { photos } from "@/data/assets";
import { bookingUrl } from "@/lib/immohero";
import Image from "next/image";

export function StatSection() {
  return (
    <section className="section">
      <div className="container-x grid items-center gap-12 lg:grid-cols-2">
        {/* Bild */}
        <Reveal>
          <div className="relative aspect-[4/5] w-full overflow-hidden rounded-[2rem] ring-sunset shadow-card sm:aspect-[5/4] lg:aspect-[4/5]">
            <Image
              src={photos.drohnePortrait.src}
              alt={photos.drohnePortrait.alt}
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 50vw"
            />
            {/* schwebende Stat-Karte */}
            <div className="absolute bottom-5 left-5 rounded-2xl glass-strong px-5 py-4">
              <p className="font-display text-4xl font-extrabold text-gradient">
                <AnimatedCounter value={stat.statValue} suffix={stat.statSuffix} />
              </p>
              <p className="text-xs font-medium uppercase tracking-wider text-fg-muted">schneller verkauft</p>
            </div>
          </div>
        </Reveal>

        {/* Inhalt */}
        <div>
          <Reveal>
            <SectionLabel>{stat.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Immobilien{" "}
              <span className="text-gradient">
                <AnimatedCounter value={stat.statValue} suffix={stat.statSuffix} />
              </span>{" "}
              schneller verkaufen
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-md text-lg text-fg-muted">{stat.text}</p>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="mt-6 text-sm font-semibold uppercase tracking-wider text-ember">{stat.kicker}</p>
            <div className="mt-3">
              <Button href={bookingUrl()} size="lg" arrow>
                {stat.cta.label}
              </Button>
            </div>
          </Reveal>

          <div className="mt-9 grid grid-cols-2 gap-3">
            {stat.badges.map((b, i) => (
              <Reveal key={b} delay={0.25 + i * 0.06}>
                <Badge icon={badgeIcon(b)}>{b}</Badge>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

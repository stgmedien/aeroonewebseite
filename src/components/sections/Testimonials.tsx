import { Star, Quote } from "lucide-react";
import { Marquee } from "@/components/ui/Marquee";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Testimonial } from "@/data/testimonials";
import type { Dict } from "@/i18n";

function Stars({ className = "" }: { className?: string }) {
  return (
    <div className={`flex gap-0.5 ${className}`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <Star key={i} size={16} className="fill-gold text-gold" />
      ))}
    </div>
  );
}

function Avatar({ initials }: { initials: string }) {
  return (
    <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full bg-sunset text-sm font-bold text-ink-deep">
      {initials}
    </span>
  );
}

function Card({ t }: { t: Testimonial }) {
  return (
    <figure className="flex w-[320px] shrink-0 flex-col justify-between gap-5 rounded-3xl glass-strong p-6 sm:w-[360px]">
      <div>
        <Stars />
        <blockquote className="mt-4 text-[0.975rem] leading-relaxed text-fg/90">“{t.quote}”</blockquote>
      </div>
      <figcaption className="flex items-center gap-3">
        <Avatar initials={t.initials} />
        <div>
          <p className="text-sm font-semibold text-fg">{t.name}</p>
          <p className="text-xs leading-tight text-fg-muted">{t.role}</p>
        </div>
      </figcaption>
    </figure>
  );
}

export function Testimonials({ t, de = true }: { t: Dict["testimonials"]; de?: boolean }) {
  const featured = t.items.find((x) => x.featured) ?? t.items[0];
  return (
    <section className="section overflow-hidden">
      <div className="container-x text-center">
        <Reveal>
          <SectionLabel>{t.eyebrow}</SectionLabel>
        </Reveal>
        <Reveal delay={0.1}>
          <Quote className="mx-auto mt-6 text-ember" size={40} />
          <blockquote className="mx-auto mt-4 max-w-3xl font-display text-2xl font-bold leading-snug tracking-tight sm:text-4xl">
            {de ? <>„{featured.quote}“</> : <>“{featured.quote}”</>}
          </blockquote>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-7 flex flex-col items-center gap-3">
            <Avatar initials={featured.initials} />
            <div>
              <p className="font-semibold text-fg">{featured.name}</p>
              <p className="text-sm text-fg-muted">{featured.role}</p>
            </div>
            <Stars className="mt-1" />
          </div>
        </Reveal>
      </div>

      <div className="mt-16">
        <Marquee className="mask-fade-x" gapClass="gap-6">
          {t.items.map((item) => (
            <Card key={item.name} t={item} />
          ))}
        </Marquee>
      </div>
    </section>
  );
}

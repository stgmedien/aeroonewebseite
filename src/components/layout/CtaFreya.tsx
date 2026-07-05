import Image from "next/image";
import { Mail } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { team } from "@/data/assets";
import { bookingUrl } from "@/lib/immohero";
import type { Dict } from "@/i18n";

export function CtaFreya({ t }: { t: Dict["freyaCta"] }) {
  const freya = team.find((m) => m.name.startsWith("Freya"))!;
  return (
    <section className="relative overflow-hidden">
      {/* Sunset-Glow */}
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
      <div className="pointer-events-none absolute left-1/2 top-10 h-72 w-[42rem] max-w-[90%] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />

      <div className="container-x section relative text-center">
        <Reveal>
          <h2 className="mx-auto max-w-4xl font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl md:text-6xl">
            {t.titlePre}{" "}
            <span className="text-gradient">{t.titleHighlight}</span>
          </h2>
        </Reveal>
        <Reveal delay={0.1}>
          <p className="mx-auto mt-5 max-w-xl text-lg text-fg-muted">{t.text}</p>
        </Reveal>
        <Reveal delay={0.15}>
          <div className="mt-8 flex justify-center">
            <Button href={bookingUrl()} size="lg" arrow>
              {t.ctaLabel}
            </Button>
          </div>
        </Reveal>

        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 flex w-full max-w-sm flex-col items-center gap-3 rounded-3xl glass-strong p-6">
            <Image
              src={freya.src}
              width={freya.width}
              height={freya.height}
              alt={freya.name}
              className="h-16 w-16 rounded-full object-cover ring-sunset"
            />
            <div>
              <p className="font-semibold text-fg">{t.person.name}</p>
              <p className="text-sm text-fg-muted">{t.person.role}</p>
            </div>
            <a
              href={`mailto:${t.person.email}`}
              className="inline-flex items-center gap-2 text-sm font-medium text-ember transition-colors hover:text-gold"
            >
              <Mail size={15} />
              {t.person.email}
            </a>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

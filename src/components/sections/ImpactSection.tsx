import { Reveal, RevealGroup, RevealItem } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { badgeIcon } from "@/components/ui/badgeIcons";
import type { Dict } from "@/i18n";

/** Kapitel 06 — Impact: „mit dem Morgen im Blick". */
export function ImpactSection({ t }: { t: Dict["impact"] }) {
  return (
    <section id="impact" className="section">
      <div className="container-x">
        <div className="max-w-3xl">
          <Reveal>
            <SectionLabel no="06">{t.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {t.titlePre} <span className="text-gradient">{t.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 max-w-xl text-lg text-fg-muted">{t.text}</p>
          </Reveal>
        </div>

        <RevealGroup className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {t.items.map((item) => (
            <RevealItem key={item.title} className="h-full">
              <div className="flex h-full gap-4 rounded-2xl glass p-5">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-sunset text-ink-deep">
                  {badgeIcon(item.icon, 20)}
                </span>
                <div>
                  <h3 className="font-display text-base font-bold leading-snug tracking-tight text-fg">
                    {item.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{item.text}</p>
                </div>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

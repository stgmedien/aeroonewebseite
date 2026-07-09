import { AnimatedCounter } from "@/components/ui/AnimatedCounter";
import { RevealGroup, RevealItem } from "@/components/ui/Reveal";
import type { Dict } from "@/i18n";

/**
 * Schmales Zahlen-Band mit Count-up-Effekt.
 * Sitzt zwischen zwei großen Sektionen, daher bewusst kompakt (py-16 statt .section).
 */
export function StatsBand({ t }: { t: Dict["statsBand"] }) {
  return (
    <section className="relative py-16">
      {/* Dezente Sunset-Hairline oben */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent"
      />

      <div className="container-x">
        <RevealGroup className="grid grid-cols-2 gap-4 lg:grid-cols-4">
          {t.items.map((item) => (
            <RevealItem key={item.label}>
              <div className="glass flex h-full flex-col items-center justify-center gap-2 rounded-2xl px-4 py-8 text-center">
                <AnimatedCounter
                  value={item.value}
                  suffix={item.suffix}
                  className="font-display text-4xl font-extrabold text-gradient sm:text-5xl"
                />
                <span className="text-xs uppercase tracking-wider text-fg-muted">
                  {item.label}
                </span>
              </div>
            </RevealItem>
          ))}
        </RevealGroup>
      </div>
    </section>
  );
}

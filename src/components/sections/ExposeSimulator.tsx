"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { AnimatePresence, animate, motion, useReducedMotion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { photos } from "@/data/assets";
import { bookingUrl } from "@/lib/immohero";
import type { Dict } from "@/i18n";

type Mode = "off" | "on";

/** Kennzahlen des fiktiven Inserats — OFF: Bodenfoto, ON: mit Aero-One-Material. */
const STATS: Record<Mode, { views: number; inquiries: number }> = {
  off: { views: 214, inquiries: 3 },
  on: { views: 1418, inquiries: 17 },
};

/**
 * Zahl mit Count-up bei Wertwechsel (animiert vom vorherigen Wert zum neuen).
 * AnimatedCounter aus ui/ triggert nur einmal (useInView once) — daher eigene,
 * kleine Logik mit framer-motion animate(). Respektiert prefers-reduced-motion.
 */
function StatValue({ value, className = "" }: { value: number; className?: string }) {
  const reduceMotion = useReducedMotion();
  const [display, setDisplay] = useState(value);
  const prevRef = useRef(value);

  useEffect(() => {
    const from = prevRef.current;
    if (from === value) return;
    prevRef.current = value;
    if (reduceMotion) {
      setDisplay(value);
      return;
    }
    const controls = animate(from, value, {
      duration: 0.9,
      ease: [0.21, 0.5, 0.2, 1],
      onUpdate: (v) => setDisplay(Math.round(v)),
    });
    return () => controls.stop();
  }, [value, reduceMotion]);

  return <span className={`tabular-nums ${className}`}>{display}</span>;
}

export function ExposeSimulator({ t }: { t: Dict["expose"] }) {
  const [mode, setMode] = useState<Mode>("off");
  const reduceMotion = useReducedMotion();
  const on = mode === "on";

  const img = on ? photos.immobilieHv2 : photos.immobilieHv1;
  const stats = STATS[mode];
  const badges = [t.badgePhotos, t.badgeVideo, t.badge360];

  return (
    <section className="section">
      <div className="container-x">
        {/* Header — Muster wie Pricing */}
        <div className="text-center">
          <Reveal>
            <SectionLabel>{t.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {t.titlePre} <span className="text-gradient">{t.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-lg text-fg-muted">{t.text}</p>
          </Reveal>

          {/* Toggle — exakt im Muster des Billing-Toggles aus Pricing */}
          <Reveal delay={0.2}>
            <div className="mt-8 inline-flex rounded-full glass p-1">
              {(
                [
                  ["off", t.toggleOff],
                  ["on", t.toggleOn],
                ] as const
              ).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setMode(val)}
                  className="relative px-6 py-2 text-sm font-semibold"
                  aria-pressed={mode === val}
                >
                  {mode === val && (
                    <motion.span
                      layoutId="expose-pill"
                      className="absolute inset-0 rounded-full bg-sunset"
                      transition={
                        reduceMotion
                          ? { duration: 0 }
                          : { type: "spring", stiffness: 320, damping: 30 }
                      }
                    />
                  )}
                  <span className={`relative z-10 ${mode === val ? "text-ink-deep" : "text-fg-muted"}`}>
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        {/* Exposé-Karte — Portal-Optik; feste Struktur gegen Layout-Shift */}
        <Reveal delay={0.25}>
          <div
            className={[
              "mx-auto mt-12 max-w-3xl overflow-hidden rounded-3xl glass-strong transition-all duration-500",
              on ? "ring-sunset glow" : "shadow-card",
            ].join(" ")}
          >
            {/* Bildbereich mit Crossfade Bodenfoto ↔ Luftbild */}
            <div className="relative aspect-[16/10] w-full overflow-hidden">
              <AnimatePresence initial={false}>
                <motion.div
                  key={mode}
                  className="absolute inset-0"
                  initial={{ opacity: 0, scale: reduceMotion ? 1 : 1.04 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: reduceMotion ? 0 : 0.6, ease: "easeOut" }}
                >
                  <Image
                    src={img.src}
                    alt={img.alt}
                    fill
                    sizes="(min-width: 768px) 768px, 100vw"
                    className="object-cover"
                  />
                </motion.div>
              </AnimatePresence>

              {/* Lesbarkeits-Verlauf unten (dekorativ) */}
              <div
                aria-hidden
                className="pointer-events-none absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-black/45 to-transparent"
              />

              {/* Feature-Badges — poppen im ON-Zustand mit Spring ein */}
              <AnimatePresence>
                {on && (
                  <div className="pointer-events-none absolute inset-x-0 top-4 z-10 flex flex-wrap justify-center gap-2 px-4">
                    {badges.map((label, i) => (
                      <motion.span
                        key={label}
                        initial={
                          reduceMotion
                            ? { opacity: 0 }
                            : { opacity: 0, y: -14, scale: 0.7 }
                        }
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, transition: { duration: 0.15 } }}
                        transition={
                          reduceMotion
                            ? { duration: 0.2 }
                            : { type: "spring", stiffness: 380, damping: 22, delay: 0.2 + i * 0.1 }
                        }
                        className="rounded-full bg-sunset px-3.5 py-1 text-xs font-bold text-ink-deep shadow-[0_8px_24px_-8px_rgba(239,121,29,0.9)]"
                      >
                        {label}
                      </motion.span>
                    ))}
                  </div>
                )}
              </AnimatePresence>
            </div>

            {/* Inserats-Infos */}
            <div className="p-6 sm:p-8">
              <div className="flex flex-col gap-4 sm:flex-row sm:items-end sm:justify-between">
                <div>
                  <h3 className="font-display text-xl font-bold text-fg sm:text-2xl">
                    {t.listingTitle}
                  </h3>
                  <p className="mt-1 text-sm text-fg-muted">{t.listingLocation}</p>
                </div>
                <p className="shrink-0 font-display text-3xl font-extrabold tracking-tight text-gradient sm:text-4xl">
                  {t.listingPrice}
                </p>
              </div>

              <div className="my-6 h-px bg-white/10" />

              {/* Stat-Zeile mit Count-up bei Toggle-Wechsel */}
              <div className="grid grid-cols-2 gap-4">
                <div className="text-center">
                  <StatValue
                    value={stats.views}
                    className="font-display text-3xl font-extrabold tracking-tight text-fg sm:text-4xl"
                  />
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">
                    {t.statViews}
                  </p>
                </div>
                <div className="text-center">
                  <StatValue
                    value={stats.inquiries}
                    className="font-display text-3xl font-extrabold tracking-tight text-fg sm:text-4xl"
                  />
                  <p className="mt-1 text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted">
                    {t.statInquiries}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>

        {/* Hinweis + CTA */}
        <Reveal delay={0.3}>
          <div className="mt-8 flex flex-col items-center gap-5 text-center">
            <p className="text-sm italic text-fg-muted">{t.note}</p>
            <Button href={bookingUrl()} size="lg" arrow>
              {t.ctaLabel}
            </Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

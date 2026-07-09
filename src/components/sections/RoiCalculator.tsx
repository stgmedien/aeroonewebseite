"use client";

/**
 * Makler-ROI-Rechner: Zwei Slider (Objektwert + Verkäufe/Jahr) zeigen,
 * wie klein der Aero-One-Basic-Preis im Verhältnis zu einer einzigen
 * Maklerprovision ist. Kernzahl animiert per framer-motion-Spring.
 */

import { useEffect, useId, useMemo, useState } from "react";
import {
  motion,
  useReducedMotion,
  useSpring,
  useTransform,
} from "framer-motion";
import { GlassCard } from "@/components/ui/GlassCard";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { Button } from "@/components/ui/Button";
import { bookingUrl } from "@/lib/immohero";
import type { Dict } from "@/i18n";

/** Basic-Paketpreis in € — bewusst hartcodiert, synchron zum Pricing halten! */
const BASIC_PRICE = 449;

/** Typische Käuferprovision: 3,57 % inkl. MwSt. (siehe t.note). */
const COMMISSION_RATE = 0.0357;

/* Slider-Grenzen */
const VALUE_MIN = 100_000;
const VALUE_MAX = 2_000_000;
const VALUE_STEP = 25_000;
const SALES_MIN = 1;
const SALES_MAX = 30;

export function RoiCalculator({
  t,
  locale,
}: {
  t: Dict["roi"];
  locale: "de" | "en";
}) {
  const [value, setValue] = useState(450_000); // Objektwert in €
  const [sales, setSales] = useState(8); // Verkäufe pro Jahr
  const reduced = useReducedMotion();
  const uid = useId();

  /* Zahlformate je Sprache (Währung ohne Cents + Prozent mit 1 Dezimale) */
  const intlLocale = locale === "en" ? "en-US" : "de-DE";
  const cur = useMemo(
    () =>
      new Intl.NumberFormat(intlLocale, {
        style: "currency",
        currency: "EUR",
        maximumFractionDigits: 0,
      }),
    [intlLocale],
  );
  const nf1 = useMemo(
    () =>
      new Intl.NumberFormat(intlLocale, {
        minimumFractionDigits: 1,
        maximumFractionDigits: 1,
      }),
    [intlLocale],
  );

  /* Kernrechnung: Provision einer Transaktion & Preisanteil in Prozent */
  const commission = value * COMMISSION_RATE;
  const pct = (BASIC_PRICE / commission) * 100;

  /* Prozentwert federt animiert auf den neuen Wert (reduced motion: springt) */
  const pctSpring = useSpring(pct, { stiffness: 140, damping: 22, mass: 0.6 });
  useEffect(() => {
    if (reduced) pctSpring.jump(pct);
    else pctSpring.set(pct);
  }, [pct, reduced, pctSpring]);
  const pctText = useTransform(pctSpring, (v) => `${nf1.format(v)} %`);

  /* Balkenbreite: ehrliches Verhältnis, minimal geclampt für Sichtbarkeit */
  const barPct = Math.max(pct, 1.5);
  const barTransition = reduced
    ? { duration: 0 }
    : { type: "spring" as const, stiffness: 140, damping: 24 };

  const valueId = `${uid}-value`;
  const salesId = `${uid}-sales`;

  return (
    <section className="section">
      <div className="container-x">
        {/* Kopf */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel>{t.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              {t.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-4 text-lg text-fg-muted">{t.text}</p>
          </Reveal>
        </div>

        {/* Rechner-Karte */}
        <Reveal delay={0.2}>
          <GlassCard hover={false} className="mx-auto mt-12 max-w-2xl p-6 sm:p-10">
            {/* Slider A: Objektwert */}
            <div>
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <label
                  htmlFor={valueId}
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted"
                >
                  {t.valueLabel}
                </label>
                <span className="font-display text-xl font-extrabold tabular-nums text-gradient sm:text-2xl">
                  {cur.format(value)}
                </span>
              </div>
              <input
                id={valueId}
                type="range"
                min={VALUE_MIN}
                max={VALUE_MAX}
                step={VALUE_STEP}
                value={value}
                onChange={(e) => setValue(Number(e.target.value))}
                aria-valuetext={cur.format(value)}
                className="mt-1 h-9 w-full cursor-pointer accent-ember"
              />
            </div>

            {/* Slider B: Verkäufe pro Jahr */}
            <div className="mt-6">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-1">
                <label
                  htmlFor={salesId}
                  className="text-xs font-semibold uppercase tracking-[0.14em] text-fg-muted"
                >
                  {t.salesLabel}
                </label>
                <span className="font-display text-xl font-extrabold tabular-nums text-gradient sm:text-2xl">
                  {sales}
                </span>
              </div>
              <input
                id={salesId}
                type="range"
                min={SALES_MIN}
                max={SALES_MAX}
                step={1}
                value={sales}
                onChange={(e) => setSales(Number(e.target.value))}
                className="mt-1 h-9 w-full cursor-pointer accent-ember"
              />
            </div>

            {/* Ergebnis: prominenter Prozentwert */}
            <div className="mt-10 text-center">
              <p className="text-sm text-fg-muted">{t.resultPre}</p>
              <p className="mt-1 font-display text-5xl font-extrabold leading-none tracking-tight tabular-nums sm:text-6xl">
                <motion.span className="text-gradient">{pctText}</motion.span>
              </p>
              <p className="mt-2 text-sm text-fg-muted">{t.resultPost}</p>
            </div>

            {/* Vergleichsbalken: Provision (100 %) vs. Basic-Preis (pct %) */}
            <div className="mt-8 space-y-4">
              {/* Provision — einmalig + Jahresperspektive (N × …) */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 text-xs tabular-nums">
                  <span className="font-semibold text-fg">
                    {cur.format(commission)}
                  </span>
                  <span className="text-fg-muted">
                    × {sales} = {cur.format(commission * sales)}
                  </span>
                </div>
                <div className="mt-1.5 h-3 overflow-hidden rounded-full bg-white/5">
                  <div className="h-full w-full rounded-full bg-white/15" />
                </div>
              </div>

              {/* Basic-Preis — einmalig + Jahresperspektive (N × …) */}
              <div>
                <div className="flex flex-wrap items-baseline justify-between gap-x-4 text-xs tabular-nums">
                  <span className="font-semibold text-gradient">
                    {cur.format(BASIC_PRICE)}
                  </span>
                  <span className="text-fg-muted">
                    × {sales} = {cur.format(BASIC_PRICE * sales)}
                  </span>
                </div>
                <div className="mt-1.5 h-3 overflow-hidden rounded-full bg-white/5">
                  <motion.div
                    className="h-full rounded-full bg-sunset"
                    initial={false}
                    animate={{ width: `${barPct}%` }}
                    transition={barTransition}
                  />
                </div>
              </div>
            </div>

            {/* Fußnote + CTA */}
            <p className="mt-6 text-center text-xs text-fg-muted">{t.note}</p>
            <div className="mt-7 flex justify-center">
              <Button href={bookingUrl("basic")} size="lg" arrow>
                {t.ctaLabel}
              </Button>
            </div>
          </GlassCard>
        </Reveal>
      </div>
    </section>
  );
}

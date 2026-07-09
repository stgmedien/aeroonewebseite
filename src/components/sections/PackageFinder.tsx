"use client";

import { useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Check, RotateCcw } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { bookingUrl, type PlanId } from "@/lib/immohero";
import type { Dict } from "@/i18n";

/**
 * Paket-Finder: drei Fragen, eine animierte Paket-Empfehlung.
 *
 * Deterministische Logik:
 *  - q3 === "regelmaessig"  → Plan "retainer"
 *  - sonst q2 === "video"   → Plan "premium"
 *  - sonst                  → Plan "basic"
 */

type Answers = { q1?: string; q2?: string; q3?: string };

/** Slide+Fade-Varianten; bei reduzierter Motion nur Fade ohne Versatz. */
function stepVariants(reduce: boolean) {
  const x = reduce ? 0 : 36;
  return {
    enter: { opacity: 0, x },
    center: { opacity: 1, x: 0 },
    exit: { opacity: 0, x: -x },
  };
}

/** Eine Frage mit großen Glass-Chips als Antwort-Optionen. */
function StepView({
  question,
  options,
  onSelect,
}: {
  question: string;
  options: { label: string; value: string }[];
  onSelect: (value: string) => void;
}) {
  return (
    <div>
      <h3 className="text-center font-display text-xl font-bold text-fg sm:text-2xl">{question}</h3>
      <div
        className={`mt-8 grid gap-3 ${options.length === 2 ? "sm:grid-cols-2" : "sm:grid-cols-3"}`}
      >
        {options.map((opt) => (
          <button
            key={opt.value}
            type="button"
            onClick={() => onSelect(opt.value)}
            className="group relative rounded-2xl glass px-5 py-6 text-center text-sm font-semibold text-fg transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/10 active:scale-[0.98] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink"
          >
            {/* Sunset-Ring blendet beim Hover ein (rein dekorativ) */}
            <span
              aria-hidden="true"
              className="ring-sunset pointer-events-none absolute inset-0 rounded-2xl opacity-0 transition-opacity duration-300 group-hover:opacity-100"
            />
            <span className="relative z-10">{opt.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

export function PackageFinder({
  t,
  pricing,
}: {
  t: Dict["packageFinder"];
  pricing: Dict["pricing"];
}) {
  const reduce = useReducedMotion() ?? false;
  const [stepIndex, setStepIndex] = useState(0);
  const [answers, setAnswers] = useState<Answers>({});

  const steps = [
    { key: "q1", data: t.q1 },
    { key: "q2", data: t.q2 },
    { key: "q3", data: t.q3 },
  ] as const;

  const done = stepIndex >= steps.length;

  // Empfehlung deterministisch aus den Antworten ableiten
  const planId: PlanId =
    answers.q3 === "regelmaessig" ? "retainer" : answers.q2 === "video" ? "premium" : "basic";
  const plan = pricing.plans.find((p) => p.id === planId);

  const variants = stepVariants(reduce);
  const progress = done ? 100 : ((stepIndex + 1) / steps.length) * 100;

  function select(key: "q1" | "q2" | "q3", value: string) {
    setAnswers((a) => ({ ...a, [key]: value }));
    setStepIndex((i) => i + 1);
  }

  function restart() {
    setAnswers({});
    setStepIndex(0);
  }

  return (
    <section className="section">
      <div className="container-x">
        {/* Header */}
        <div className="text-center">
          <Reveal>
            <SectionLabel>{t.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {t.title}
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-lg text-fg-muted">{t.text}</p>
          </Reveal>
        </div>

        {/* Finder-Karte */}
        <Reveal delay={0.2}>
          <div className="mx-auto mt-12 w-full max-w-2xl rounded-3xl glass-strong p-6 sm:p-10">
            {/* Fortschrittsbalken (dekorativ, animierte Breite je Schritt) */}
            <div aria-hidden="true" className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full rounded-full bg-sunset"
                initial={false}
                animate={{ width: `${progress}%` }}
                transition={{ duration: reduce ? 0 : 0.5, ease: [0.21, 0.5, 0.2, 1] }}
              />
            </div>

            {/* Feste Mindesthöhe gegen Springen beim Schrittwechsel */}
            <div className="relative mt-8 min-h-[24rem]">
              <AnimatePresence mode="wait" initial={false}>
                {!done ? (
                  <motion.div
                    key={steps[stepIndex].key}
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: reduce ? 0 : 0.35, ease: [0.21, 0.5, 0.2, 1] }}
                    className="flex min-h-[24rem] flex-col justify-center"
                  >
                    <StepView
                      question={steps[stepIndex].data.question}
                      options={steps[stepIndex].data.options}
                      onSelect={(value) => select(steps[stepIndex].key, value)}
                    />
                  </motion.div>
                ) : (
                  <motion.div
                    key="result"
                    variants={variants}
                    initial="enter"
                    animate="center"
                    exit="exit"
                    transition={{ duration: reduce ? 0 : 0.35, ease: [0.21, 0.5, 0.2, 1] }}
                    className="flex min-h-[24rem] flex-col justify-center text-center"
                  >
                    <h3 className="font-display text-xl font-bold text-fg sm:text-2xl">
                      {t.resultTitle}
                    </h3>
                    <p className="mx-auto mt-2 max-w-md text-sm text-fg-muted">{t.resultText}</p>

                    {/* Kompakte Empfehlung-Karte */}
                    {plan && (
                      <div className="relative mx-auto mt-8 w-full max-w-md rounded-2xl glass ring-sunset p-6 pt-7 text-left">
                        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-sunset px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink-deep shadow-[0_8px_24px_-8px_rgba(239,121,29,0.9)]">
                          {t.recommendedBadge}
                        </span>

                        <h4 className="font-display text-lg font-bold text-fg">{plan.name}</h4>
                        <div className="mt-2 flex items-end gap-1.5">
                          <span className="font-display text-4xl font-extrabold tracking-tight text-gradient">
                            {plan.price}
                          </span>
                          <span className="mb-1 text-sm text-fg-muted">{plan.period}</span>
                        </div>
                        <p className="mt-2 text-sm text-fg-muted">{plan.tagline}</p>

                        <ul className="mt-5 flex flex-col gap-2.5">
                          {plan.features.slice(0, 3).map((f) => (
                            <li key={f} className="flex items-start gap-3 text-sm text-fg/90">
                              <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sunset text-ink-deep">
                                <Check size={13} strokeWidth={3} />
                              </span>
                              {f}
                            </li>
                          ))}
                        </ul>

                        <div className="mt-6">
                          <Button href={bookingUrl(planId)} size="lg" arrow className="w-full">
                            {plan.cta}
                          </Button>
                        </div>
                      </div>
                    )}

                    {/* Dezenter Neustart-Link */}
                    <button
                      type="button"
                      onClick={restart}
                      className="mx-auto mt-6 inline-flex items-center gap-2 text-sm text-fg-muted transition-colors hover:text-fg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold/60 focus-visible:ring-offset-2 focus-visible:ring-offset-ink rounded-full px-2 py-1"
                    >
                      <RotateCcw size={15} aria-hidden="true" />
                      {t.restart}
                    </button>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

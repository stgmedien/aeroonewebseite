"use client";

import { useState } from "react";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/Button";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import type { Plan } from "@/data/pricing";
import { bookingUrl, type PlanId } from "@/lib/immohero";
import { IMMOHERO_URL } from "@/data/nav";
import type { Dict } from "@/i18n";

type Billing = "once" | "monthly";

function PlanCard({ plan, active }: { plan: Plan; active: Billing }) {
  const isActive = plan.type === active;
  const highlighted = plan.highlighted;
  const emphasis = isActive
    ? highlighted
      ? "lg:scale-[1.04]"
      : "ring-1 ring-gold/40 lg:scale-[1.02]"
    : "";
  return (
    <div
      className={[
        "relative flex flex-col rounded-3xl glass-strong p-7 transition-all duration-500",
        highlighted ? "ring-sunset lg:-translate-y-3" : "",
        highlighted && active === "monthly" ? "animate-pulse-glow" : "",
        emphasis,
      ].join(" ")}
    >
      {plan.badge && (
        <span className="absolute -top-3 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-sunset px-4 py-1 text-xs font-bold uppercase tracking-wider text-ink-deep shadow-[0_8px_24px_-8px_rgba(239,121,29,0.9)]">
          {plan.badge}
        </span>
      )}

      <h3 className="font-display text-lg font-bold text-fg">{plan.name}</h3>

      <div className="mt-4 flex items-end gap-1.5">
        <span className="font-display text-5xl font-extrabold tracking-tight text-gradient">{plan.price}</span>
        <span className="mb-1.5 text-sm text-fg-muted">{plan.period}</span>
      </div>

      <p className="mt-3 min-h-[2.5rem] text-sm text-fg-muted">{plan.tagline}</p>

      <div className="my-6 h-px bg-white/10" />

      <ul className="flex flex-1 flex-col gap-3">
        {plan.features.map((f) => (
          <li key={f} className="flex items-start gap-3 text-sm text-fg/90">
            <span className="mt-0.5 grid h-5 w-5 shrink-0 place-items-center rounded-full bg-sunset text-ink-deep">
              <Check size={13} strokeWidth={3} />
            </span>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-7">
        <Button
          href={bookingUrl(plan.id as PlanId)}
          size="lg"
          variant={highlighted ? "primary" : "secondary"}
          className="w-full"
          arrow={highlighted}
        >
          {plan.cta}
        </Button>
      </div>
    </div>
  );
}

export function Pricing({ t }: { t: Dict["pricing"] }) {
  const [active, setActive] = useState<Billing>("monthly");

  return (
    <section id="preise" className="section scroll-mt-24">
      <div className="container-x">
        <div className="text-center">
          <Reveal>
            <SectionLabel no="07">{t.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mx-auto mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {t.titlePre} <span className="text-gradient">{t.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-4 max-w-lg text-fg-muted">{t.text}</p>
          </Reveal>

          {/* Toggle */}
          <Reveal delay={0.2}>
            <div className="mt-8 inline-flex rounded-full glass p-1">
              {(
                [
                  ["once", t.toggle.once],
                  ["monthly", t.toggle.monthly],
                ] as const
              ).map(([val, label]) => (
                <button
                  key={val}
                  onClick={() => setActive(val)}
                  className="relative px-6 py-2 text-sm font-semibold"
                >
                  {active === val && (
                    <motion.span
                      layoutId="billing-pill"
                      className="absolute inset-0 rounded-full bg-sunset"
                      transition={{ type: "spring", stiffness: 320, damping: 30 }}
                    />
                  )}
                  <span className={`relative z-10 ${active === val ? "text-ink-deep" : "text-fg-muted"}`}>
                    {label}
                  </span>
                </button>
              ))}
            </div>
          </Reveal>
        </div>

        <div className="mt-14 grid items-center gap-6 lg:grid-cols-3">
          {t.plans.map((p, i) => (
            <Reveal key={p.id} delay={i * 0.1}>
              <PlanCard plan={p} active={active} />
            </Reveal>
          ))}
        </div>

        <p className="mt-8 text-center text-sm text-fg-muted">{t.footnote}</p>
        <p className="mt-2 text-center text-sm text-fg-muted">
          {t.immoHeroNote.pre}
          <a
            href={IMMOHERO_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-ember transition-colors hover:text-gold"
          >
            {t.immoHeroNote.linkLabel}
          </a>
          {t.immoHeroNote.post}
        </p>
      </div>
    </section>
  );
}

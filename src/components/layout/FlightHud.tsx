"use client";

/**
 * Flug-Telemetrie-HUD — vertikale Scroll-Rail mit Kapiteln (nur Desktop).
 *
 * Ein glühender Ember-Dot („Drohne") fliegt entlang einer dünnen Flugbahn und
 * bildet den Gesamt-Scrollfortschritt ab (useScroll + useSpring). Daneben sitzt
 * pro Kapitel ein Node; das aktive Kapitel wird per IntersectionObserver
 * ermittelt und zeigt sein Label ein. Klick auf einen Node fliegt sanft zur
 * Ziel-Section. Fixed positioniert — kein Layout-Einfluss auf den Content.
 */

import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useReducedMotion,
  useScroll,
  useSpring,
  useTransform,
} from "framer-motion";
import { useEffect, useRef, useState } from "react";

type FlightHudChapter = {
  /** Kapitelnummer, z. B. "01" */
  no: string;
  /** Sichtbares Kapitel-Label (kommt aus dem Dict) */
  label: string;
  /** CSS-Selektor der Ziel-Section, z. B. "#problem" */
  target: string;
};

type FlightHudProps = {
  chapters: FlightHudChapter[];
};

/** Wert hart auf [0, 1] begrenzen (Spring kann leicht überschwingen). */
function clamp01(v: number): number {
  return Math.min(Math.max(v, 0), 1);
}

export function FlightHud({ chapters }: FlightHudProps) {
  const prefersReduced = useReducedMotion();
  const [shown, setShown] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  // Viewport-Höhe als Ref (kein Re-Render nötig, nur für Schwellwerte)
  const vhRef = useRef(900);

  const { scrollY, scrollYProgress } = useScroll();

  // Einblenden erst ab 0.6 × Viewport-Höhe, weich bis 0.9 × vh
  const reveal = useTransform(scrollY, (v) => {
    const start = vhRef.current * 0.6;
    const end = vhRef.current * 0.9;
    return clamp01((v - start) / (end - start));
  });
  const slideX = useTransform(reveal, (r) => (1 - r) * 24);

  // Drohnen-Position: Gesamt-Scrollprogress, mit Feder geglättet.
  // Bei prefers-reduced-motion springt der Dot hart (kein Spring).
  const springProgress = useSpring(scrollYProgress, {
    stiffness: 90,
    damping: 24,
    mass: 0.4,
  });
  const smoothTop = useTransform(springProgress, (v) => `${clamp01(v) * 100}%`);
  const hardTop = useTransform(scrollYProgress, (v) => `${clamp01(v) * 100}%`);
  const droneTop = prefersReduced ? hardTop : smoothTop;

  // Sichtbarkeits-State nur für pointer-events (unsichtbare Rail nicht klickbar)
  useMotionValueEvent(scrollY, "change", (v) => {
    setShown(v > vhRef.current * 0.6);
  });

  // Viewport-Höhe messen + Initialzustand (z. B. Reload mitten auf der Seite)
  useEffect(() => {
    const update = () => {
      vhRef.current = window.innerHeight;
    };
    update();
    setShown(window.scrollY > window.innerHeight * 0.6);
    window.addEventListener("resize", update);
    return () => window.removeEventListener("resize", update);
  }, []);

  // Aktives Kapitel: Section im mittleren Viewport-Band (-40 % oben/unten)
  useEffect(() => {
    const observed = chapters
      .map((c, index) => ({ el: document.querySelector<HTMLElement>(c.target), index }))
      .filter((s): s is { el: HTMLElement; index: number } => s.el !== null);
    if (observed.length === 0) return;

    const indexByEl = new Map(observed.map((s) => [s.el, s.index]));
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (!entry.isIntersecting) continue;
          const index = indexByEl.get(entry.target as HTMLElement);
          if (index !== undefined) setActiveIndex(index);
        }
      },
      { rootMargin: "-40% 0px -40% 0px", threshold: 0 }
    );
    observed.forEach((s) => observer.observe(s.el));
    return () => observer.disconnect();
  }, [chapters]);

  // Klick auf Node → sanft zur Section fliegen (reduced motion: harter Sprung)
  const flyTo = (target: string) => {
    document
      .querySelector(target)
      ?.scrollIntoView({ behavior: prefersReduced ? "auto" : "smooth" });
  };

  const activeNo = chapters[activeIndex]?.no ?? chapters[0]?.no ?? "";

  return (
    <motion.aside
      className="fixed right-5 top-1/2 z-40 hidden lg:flex"
      style={{
        opacity: reveal,
        x: prefersReduced ? 0 : slideX,
        y: "-50%",
        pointerEvents: shown ? "auto" : "none",
      }}
    >
      <div className="flex flex-col items-end gap-3">
        {/* Telemetrie-Mini-Label (rein dekorativ) */}
        <div
          aria-hidden="true"
          className="flex items-baseline gap-1.5 text-[9px] tracking-[0.25em] text-white/30"
        >
          <span>ALT</span>
          <span className="tabular-nums text-ember/80">{activeNo}</span>
        </div>

        <div className="relative">
          {/* Flugbahn */}
          <span
            aria-hidden="true"
            className="absolute right-[3px] top-0 h-full w-px bg-white/10"
          />

          {/* Drohnen-Dot: bildet den Gesamt-Scrollprogress ab */}
          <motion.span
            aria-hidden="true"
            className="absolute right-0 z-10 h-[7px] w-[7px] rounded-full bg-ember shadow-[0_0_12px_2px_rgba(239,121,29,0.65)]"
            style={{ top: droneTop, y: "-50%" }}
          >
            {/* Kleiner Puls um die Drohne (nur ohne reduced motion) */}
            <span className="absolute inset-0 rounded-full bg-ember/70 motion-safe:animate-ping" />
          </motion.span>

          {/* Kapitel-Nodes */}
          <nav className="flex h-[252px] flex-col justify-between py-0.5">
            {chapters.map((c, i) => {
              const active = i === activeIndex;
              return (
                <button
                  key={c.target}
                  type="button"
                  onClick={() => flyTo(c.target)}
                  aria-label={`${c.no} ${c.label}`}
                  aria-current={active ? "true" : undefined}
                  className="group flex cursor-pointer items-center justify-end gap-2"
                >
                  <AnimatePresence initial={false}>
                    {active && (
                      <motion.span
                        initial={{ opacity: 0, x: 6 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 6 }}
                        transition={{
                          duration: prefersReduced ? 0 : 0.25,
                          ease: "easeOut",
                        }}
                        className="whitespace-nowrap text-[10px] uppercase tracking-wider text-fg-muted"
                      >
                        {c.label}
                      </motion.span>
                    )}
                  </AnimatePresence>
                  <span
                    className={`text-[10px] tabular-nums transition-colors ${
                      active ? "text-ember" : "text-white/35 group-hover:text-white/70"
                    }`}
                  >
                    {c.no}
                  </span>
                  <span
                    aria-hidden="true"
                    className={`h-[7px] w-[7px] rounded-full transition-colors ${
                      active
                        ? "bg-ember shadow-[0_0_8px_rgba(239,121,29,0.8)]"
                        : "bg-white/25 group-hover:bg-white/50"
                    }`}
                  />
                </button>
              );
            })}
          </nav>
        </div>
      </div>
    </motion.aside>
  );
}

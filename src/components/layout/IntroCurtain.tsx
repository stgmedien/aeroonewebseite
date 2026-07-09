"use client";

import { AnimatePresence, motion } from "framer-motion";
import Image from "next/image";
import { useEffect, useState } from "react";

/** Haus-Easing der Seite (identisch zu Reveal.tsx). */
const EASE: [number, number, number, number] = [0.21, 0.5, 0.2, 1];

/** SessionStorage-Schlüssel: Intro nur beim ersten Besuch pro Session zeigen. */
const STORAGE_KEY = "aeroone-intro-v1";

/** Nach 300 ms darf das Overlay keine Eingaben mehr blockieren. */
const POINTER_RELEASE_MS = 300;
/** Ab 900 ms startet der Exit-Wipe (0.9 s → 1.4 s). */
const EXIT_START_MS = 900;
/** Harte Obergrenze: Nach 1400 ms wird bedingungslos entfernt. */
const HARD_CAP_MS = 1400;

type Phase = "idle" | "playing" | "leaving" | "gone";

/**
 * Golden-Hour-Intro: 1,4-Sekunden-Titelsequenz beim ersten Besuch pro Session.
 * Logo blendet ein, ein Sunset-Licht-Sweep läuft diagonal darüber,
 * dann wischt das Overlay nach oben aus. Respektiert prefers-reduced-motion.
 */
export function IntroCurtain() {
  // Server & vor Mount: "idle" → rendert null (kein Hydration-Mismatch).
  const [phase, setPhase] = useState<Phase>("idle");
  // Nach 300 ms werden Pointer-Events freigegeben — User nie blockiert.
  const [pointerFree, setPointerFree] = useState(false);

  useEffect(() => {
    let alreadySeen = false;
    try {
      alreadySeen = window.sessionStorage.getItem(STORAGE_KEY) !== null;
    } catch {
      // sessionStorage nicht verfügbar (z. B. Privat-Modus) → Intro einfach zeigen.
    }

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Flag sofort setzen — auch beim Überspringen, damit es pro Session nur 1× läuft.
    try {
      window.sessionStorage.setItem(STORAGE_KEY, "1");
    } catch {
      // Ignorieren: ohne Storage läuft das Intro schlimmstenfalls erneut.
    }

    if (alreadySeen || prefersReduced) {
      return; // bleibt "idle" → null
    }

    setPhase("playing");

    const pointerTimer = window.setTimeout(() => setPointerFree(true), POINTER_RELEASE_MS);
    const exitTimer = window.setTimeout(() => setPhase("leaving"), EXIT_START_MS);
    // Harter Deckel: garantiert null nach 1400 ms, selbst wenn der Exit hängt.
    const killTimer = window.setTimeout(() => setPhase("gone"), HARD_CAP_MS);

    return () => {
      window.clearTimeout(pointerTimer);
      window.clearTimeout(exitTimer);
      window.clearTimeout(killTimer);
    };
  }, []);

  if (phase === "idle" || phase === "gone") return null;

  return (
    <AnimatePresence>
      {phase === "playing" && (
        <motion.div
          aria-hidden="true"
          className={`fixed inset-0 z-[100] grid place-items-center bg-ink-deep ${
            pointerFree ? "pointer-events-none" : ""
          }`}
          initial={{ y: 0 }}
          exit={{ y: "-100%", transition: { duration: 0.5, ease: EASE } }}
        >
          {/* Logo-Bühne: overflow-hidden, damit der Licht-Sweep sauber beschnitten wird */}
          <div className="relative h-[120px] w-[120px] overflow-hidden">
            {/* Logo: Fade/Scale-in, 0 → 0.4 s */}
            <motion.div
              className="relative h-full w-full"
              initial={{ opacity: 0, scale: 0.86 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.4, ease: EASE }}
            >
              <Image
                src="/media/logos/aeroone-mark.png"
                alt=""
                width={120}
                height={120}
                priority
                className="h-full w-full object-contain"
              />
            </motion.div>

            {/* Licht-Sweep: diagonaler Sunset-Streifen, 0.3 → 0.9 s, blend-screen über dem Logo */}
            <motion.div
              className="pointer-events-none absolute inset-y-[-25%] left-0 w-1/2 -skew-x-12 mix-blend-screen"
              style={{
                background:
                  "linear-gradient(90deg, transparent, var(--color-ember) 40%, var(--color-gold) 60%, transparent)",
                opacity: 0.9,
              }}
              initial={{ x: "-150%" }}
              animate={{ x: "320%" }}
              transition={{ delay: 0.3, duration: 0.6, ease: EASE }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

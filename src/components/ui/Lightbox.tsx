"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion, useMotionValue, useSpring } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand, Play } from "lucide-react";

export type GalleryItem = {
  src: string;
  alt: string;
  type?: "image" | "video";
  videoSrc?: string;
  poster?: string;
  className?: string;
};

/** Reagiert auf eine Media-Query (SSR-sicher, initial false). */
function useMediaQuery(query: string) {
  const [matches, setMatches] = useState(false);
  useEffect(() => {
    const mq = window.matchMedia(query);
    const update = () => setMatches(mq.matches);
    update();
    mq.addEventListener("change", update);
    return () => mq.removeEventListener("change", update);
  }, [query]);
  return matches;
}

/** Maximale Neigung in Grad — bewusst dezent gehalten. */
const TILT_MAX = 3;

/**
 * Einzelne Bento-Kachel mit Spotlight-Hover und dezentem 3D-Tilt.
 * Beide Effekte greifen nur bei (hover: hover) and (pointer: fine);
 * der Tilt zusätzlich nur ohne prefers-reduced-motion.
 * Touch-Verhalten bleibt unverändert.
 */
function GalleryTile({ item, onOpen }: { item: GalleryItem; onOpen: () => void }) {
  const finePointer = useMediaQuery("(hover: hover) and (pointer: fine)");
  const reducedMotion = useMediaQuery("(prefers-reduced-motion: reduce)");
  const tiltEnabled = finePointer && !reducedMotion;

  // Tilt-Werte: MotionValues + Spring für weiches Nachfedern
  const rx = useMotionValue(0);
  const ry = useMotionValue(0);
  const rotateX = useSpring(rx, { stiffness: 150, damping: 20 });
  const rotateY = useSpring(ry, { stiffness: 150, damping: 20 });

  const handleMouseMove = (e: React.MouseEvent<HTMLButtonElement>) => {
    if (!finePointer) return;
    const el = e.currentTarget;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    // Spotlight-Position als CSS-Variablen (px relativ zur Kachel)
    el.style.setProperty("--mx", `${x}px`);
    el.style.setProperty("--my", `${y}px`);

    if (!tiltEnabled) return;
    // Cursorposition → Neigung (±TILT_MAX Grad)
    ry.set((x / rect.width - 0.5) * TILT_MAX * 2);
    rx.set((0.5 - y / rect.height) * TILT_MAX * 2);
  };

  const handleMouseLeave = () => {
    rx.set(0);
    ry.set(0);
  };

  const isVideo = item.type === "video";
  const thumbSrc = isVideo ? item.poster ?? item.src : item.src;

  return (
    <motion.button
      onClick={onOpen}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{ rotateX, rotateY, transformPerspective: 800 }}
      className={`group relative overflow-hidden rounded-2xl ring-sunset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold pointer-fine:hover:ring-1 pointer-fine:hover:ring-gold/30 ${item.className ?? ""}`}
      aria-label={`${item.alt} öffnen`}
    >
      <Image
        src={thumbSrc}
        alt={item.alt}
        fill
        sizes="(max-width:768px) 50vw, 25vw"
        className="object-cover transition-transform duration-700 group-hover:scale-105"
      />
      {/* sanfter Verlauf für Kontrast unten */}
      <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

      {/* Spotlight-Overlay: folgt dem Cursor, nur bei feinem Pointer sichtbar */}
      <span
        aria-hidden
        className="pointer-events-none absolute inset-0 hidden opacity-0 transition-opacity duration-300 group-hover:opacity-100 pointer-fine:block"
        style={{
          background:
            "radial-gradient(320px circle at var(--mx, 50%) var(--my, 50%), rgba(246,187,30,0.14), transparent 70%)",
        }}
      />

      {isVideo ? (
        <span className="pointer-events-none absolute inset-0 grid place-items-center">
          <span className="grid h-14 w-14 place-items-center rounded-full glass text-fg ring-1 ring-white/20 transition-transform duration-300 group-hover:scale-110">
            <Play size={22} className="translate-x-[1px]" />
          </span>
        </span>
      ) : (
        <span className="pointer-events-none absolute right-3 top-3 grid h-9 w-9 place-items-center rounded-full bg-black/45 text-white opacity-0 backdrop-blur transition-opacity duration-300 group-hover:opacity-100">
          <Expand size={16} />
        </span>
      )}
    </motion.button>
  );
}

export function GalleryLightbox({ items }: { items: GalleryItem[] }) {
  const [open, setOpen] = useState<number | null>(null);

  const close = useCallback(() => setOpen(null), []);
  const next = useCallback(() => setOpen((i) => (i === null ? i : (i + 1) % items.length)), [items.length]);
  const prev = useCallback(() => setOpen((i) => (i === null ? i : (i - 1 + items.length) % items.length)), [items.length]);

  useEffect(() => {
    if (open === null) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
      if (e.key === "ArrowRight") next();
      if (e.key === "ArrowLeft") prev();
    };
    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [open, close, next, prev]);

  return (
    <>
      <div className="grid auto-rows-[180px] grid-cols-2 gap-4 [grid-auto-flow:dense] sm:auto-rows-[210px] lg:grid-cols-4">
        {items.map((it, i) => (
          <GalleryTile key={i} item={it} onOpen={() => setOpen(i)} />
        ))}
      </div>

      <AnimatePresence>
        {open !== null && (
          <motion.div
            className="fixed inset-0 z-[80] flex items-center justify-center bg-black/85 p-4 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={close}
          >
            <button onClick={close} className="absolute right-5 top-5 grid h-11 w-11 place-items-center rounded-full glass text-fg hover:bg-white/10" aria-label="Schließen">
              <X size={20} />
            </button>
            <button
              onClick={(e) => { e.stopPropagation(); prev(); }}
              className="absolute left-3 sm:left-6 grid h-12 w-12 place-items-center rounded-full glass text-fg hover:bg-white/10"
              aria-label="Vorheriges"
            >
              <ChevronLeft size={22} />
            </button>
            <motion.div
              key={open}
              className="relative aspect-[16/10] w-full max-w-4xl overflow-hidden rounded-3xl ring-sunset"
              initial={{ scale: 0.92, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.92, opacity: 0 }}
              transition={{ type: "spring", stiffness: 260, damping: 28 }}
              onClick={(e) => e.stopPropagation()}
            >
              {items[open].type === "video" ? (
                <video
                  src={items[open].videoSrc}
                  poster={items[open].poster}
                  controls
                  autoPlay
                  playsInline
                  className="h-full w-full object-contain bg-black"
                />
              ) : (
                <Image
                  src={items[open].src}
                  alt={items[open].alt}
                  fill
                  sizes="(max-width:768px) 100vw, 896px"
                  className="object-contain"
                />
              )}
            </motion.div>
            <button
              onClick={(e) => { e.stopPropagation(); next(); }}
              className="absolute right-3 sm:right-6 grid h-12 w-12 place-items-center rounded-full glass text-fg hover:bg-white/10"
              aria-label="Nächstes"
            >
              <ChevronRight size={22} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

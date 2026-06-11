"use client";

import { useCallback, useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { X, ChevronLeft, ChevronRight, Expand, Play } from "lucide-react";

export type GalleryItem = {
  src: string;
  alt: string;
  type?: "image" | "video";
  videoSrc?: string;
  poster?: string;
  className?: string;
};

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
        {items.map((it, i) => {
          const isVideo = it.type === "video";
          const thumbSrc = isVideo ? it.poster ?? it.src : it.src;
          return (
            <button
              key={i}
              onClick={() => setOpen(i)}
              className={`group relative overflow-hidden rounded-2xl ring-sunset focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gold ${it.className ?? ""}`}
              aria-label={`${it.alt} öffnen`}
            >
              <Image
                src={thumbSrc}
                alt={it.alt}
                fill
                sizes="(max-width:768px) 50vw, 25vw"
                className="object-cover transition-transform duration-700 group-hover:scale-105"
              />
              {/* sanfter Verlauf für Kontrast unten */}
              <span className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent" />

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
            </button>
          );
        })}
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

"use client";

import { useRef, useState } from "react";
import { motion, type Variants } from "framer-motion";
import { ChevronDown, Play, Volume2 } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { hero } from "@/data/content";
import { video } from "@/data/assets";

const EASE: [number, number, number, number] = [0.21, 0.5, 0.2, 1];
const container: Variants = { hidden: {}, show: { transition: { staggerChildren: 0.12, delayChildren: 0.1 } } };
const item: Variants = {
  hidden: { opacity: 0, y: 28 },
  show: { opacity: 1, y: 0, transition: { duration: 0.8, ease: EASE } },
};

function Clouds() {
  const clouds = [
    "left-[6%] top-[34%] h-24 w-56",
    "right-[8%] top-[26%] h-28 w-72",
    "left-[20%] top-[52%] h-20 w-48",
    "right-[24%] top-[58%] h-24 w-64",
  ];
  return (
    <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden>
      {clouds.map((c, i) => (
        <div
          key={i}
          className={`absolute rounded-full bg-white/70 blur-2xl animate-float ${c}`}
          style={{ animationDelay: `${i * 1.3}s`, opacity: 0.55 - i * 0.07 }}
        />
      ))}
    </div>
  );
}

/** Hero-Film: läuft stumm als Loop; Play-Overlay startet ihn mit Ton. */
function HeroVideo() {
  const ref = useRef<HTMLVideoElement>(null);
  const [withSound, setWithSound] = useState(false);

  function playWithSound() {
    const v = ref.current;
    if (!v) return;
    v.muted = false; // sofort entmuten, damit der play()-Aufruf (User-Geste) Ton hat
    v.currentTime = 0;
    void v.play();
    setWithSound(true);
  }

  function backToLoop() {
    const v = ref.current;
    if (!v) return;
    v.muted = true;
    v.currentTime = 0;
    void v.play();
    setWithSound(false);
  }

  return (
    <>
      <video
        ref={ref}
        className="h-full w-full object-cover"
        autoPlay
        muted={!withSound}
        loop={!withSound}
        controls={withSound}
        playsInline
        preload="metadata"
        poster={video.hero.poster}
        onEnded={backToLoop}
      >
        <source src={video.hero.src} type="video/mp4" />
      </video>

      {!withSound && (
        <button
          type="button"
          onClick={playWithSound}
          aria-label="Werbefilm mit Ton abspielen"
          className="group absolute inset-0 flex flex-col items-center justify-center gap-5 bg-gradient-to-t from-ink-deep/55 via-ink-deep/10 to-transparent transition-colors duration-300 hover:from-ink-deep/65"
        >
          {/* Play-Button mit Puls */}
          <span className="relative grid h-[4.5rem] w-[4.5rem] place-items-center rounded-full bg-sunset text-ink-deep shadow-[0_14px_44px_-8px_rgba(239,121,29,0.95)] transition-transform duration-300 group-hover:scale-110">
            <span className="absolute inset-0 rounded-full bg-sunset opacity-70 animate-ping" />
            <Play size={30} className="relative translate-x-0.5" fill="currentColor" />
          </span>
          {/* kleiner CTA */}
          <span className="inline-flex items-center gap-2 rounded-full glass-strong px-4 py-2 text-sm font-semibold text-fg shadow-card transition-colors duration-300 group-hover:bg-white/10">
            <Volume2 size={16} className="text-ember" />
            Werbefilm mit Ton ansehen
          </span>
        </button>
      )}
    </>
  );
}

export function Hero() {
  return (
    <section className="relative isolate overflow-hidden">
      {/* Sonnenuntergang-Himmel */}
      <div className="absolute inset-0 -z-30 bg-hero" />
      <div className="absolute inset-0 -z-20 animate-sky bg-[radial-gradient(60%_50%_at_50%_18%,rgba(255,255,255,0.18),transparent_60%)]" />
      <Clouds />
      {/* unten in Ink überblenden */}
      <div className="absolute inset-x-0 bottom-0 -z-10 h-2/5 bg-gradient-to-b from-transparent to-ink" />

      <div className="container-x relative pb-12 pt-32 text-center sm:pt-40">
        <motion.div variants={container} initial="hidden" animate="show" className="flex flex-col items-center">
          <motion.span
            variants={item}
            className="inline-flex items-center gap-2 rounded-full border border-white/25 bg-black/15 px-4 py-1.5 text-sm font-medium text-white/90 backdrop-blur"
          >
            <span className="relative flex h-2 w-2">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white/80" />
              <span className="relative inline-flex h-2 w-2 rounded-full bg-white" />
            </span>
            {hero.badge}
          </motion.span>

          <motion.h1
            variants={item}
            className="mt-7 font-display text-5xl font-extrabold leading-[0.98] tracking-tight text-white drop-shadow-[0_2px_20px_rgba(0,0,0,0.25)] sm:text-7xl md:text-8xl"
          >
            Drohnenvideos
            <br />
            in unter <span className="text-gradient">48h</span>
          </motion.h1>

          <motion.p variants={item} className="mt-6 max-w-2xl text-balance text-lg text-white/85 sm:text-xl">
            {hero.subtitle}
          </motion.p>

          <motion.div variants={item} className="mt-5 flex items-center gap-3 text-sm font-semibold uppercase tracking-wider text-white/90">
            {hero.tags.map((t, i) => (
              <span key={t} className="flex items-center gap-3">
                {i > 0 && <span className="h-1 w-1 rounded-full bg-white/60" />}
                {t}
              </span>
            ))}
          </motion.div>

          <motion.div variants={item} className="mt-9 flex flex-col items-center gap-3 sm:flex-row">
            <Button href={hero.primaryCta.href} size="lg" arrow>
              {hero.primaryCta.label}
            </Button>
            <Button href={hero.secondaryCta.href} size="lg" variant="secondary">
              {hero.secondaryCta.label}
            </Button>
          </motion.div>
        </motion.div>

        {/* Drohnen-Video-Panel */}
        <motion.div
          initial={{ opacity: 0, y: 60, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 1, delay: 0.6, ease: EASE }}
          className="relative mx-auto mt-14 aspect-[16/9] w-full max-w-5xl overflow-hidden rounded-[2rem] ring-sunset shadow-[0_40px_120px_-30px_rgba(239,121,29,0.5)]"
        >
          <HeroVideo />
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.4 }}
          className="mt-10 flex flex-col items-center gap-1 text-white/70"
        >
          <span className="text-xs uppercase tracking-[0.2em]">Scrollen</span>
          <ChevronDown size={18} className="animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
}

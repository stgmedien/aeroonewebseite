"use client";

import { motion, useReducedMotion } from "framer-motion";
import type { Dict } from "@/i18n";

/**
 * Animierte Europa-Karte (Netzwerk-Sektion): stark vereinfachte Silhouette,
 * Pins für Gütersloh (HQ) & Riga (Gen-E-Finale) sowie ein animierter
 * Sunset-Bogen zwischen beiden. Rein dekorativ — Labels sind echte
 * HTML-Text-Elemente, das SVG selbst ist aria-hidden.
 *
 * Projektion (Äquirektangular-Näherung) auf viewBox 0 0 800 600:
 *   Kartenausschnitt: Länge −12°…+34° O, Breite 35°…65° N
 *   x = (lon + 12) * (800 / 46)  ≈ (lon + 12) * 17.39
 *   y = (65 − lat) * (600 / 30)  =  (65 − lat) * 20
 *
 *   Gütersloh (8.4° O, 51.9° N) → x ≈ 355, y ≈ 262
 *   Riga      (24.1° O, 56.9° N) → x ≈ 628, y ≈ 162
 */

// ViewBox-Konstanten (für Pin-Positionierung in Prozent)
const VB_W = 800;
const VB_H = 600;

// Pin-Koordinaten laut Projektion (leicht fein justiert auf die Silhouette)
const GUETERSLOH = { x: 355, y: 262 };
const RIGA = { x: 628, y: 162 };

// „Vision“-Punkte: grob Paris, Madrid, Mailand, Wien, Warschau (gleiche Projektion)
const VISION_DOTS = [
  { x: 250, y: 323 }, // Paris (2.4° O, 48.9° N)
  { x: 144, y: 492 }, // Madrid (−3.7° O, 40.4° N)
  { x: 369, y: 390 }, // Mailand (9.2° O, 45.5° N)
  { x: 494, y: 336 }, // Wien (16.4° O, 48.2° N)
  { x: 574, y: 256 }, // Warschau (21° O, 52.2° N)
];

// Prozent-Position eines viewBox-Punkts (für absolut positionierte HTML-Pins)
const pct = (p: { x: number; y: number }) => ({
  left: `${(p.x / VB_W) * 100}%`,
  top: `${(p.y / VB_H) * 100}%`,
});

/* Stark vereinfachte Landmassen (selbst gezeichnet, keine GeoJSON-Daten).
   Küstenlinie als grobe Polylinie entlang markanter Punkte derselben Projektion. */

// Festland: Iberien → Biskaya → Ärmelkanal → Nordsee → Dänemark → Ostsee →
// Baltikum → Finnischer Meerbusen → (Kartenrand) → Ägäis → Adria → Italien → Mittelmeer
const MAINLAND =
  "M113,580 L52,560 L49,526 L52,430 L139,432 L183,430 L191,400 L127,334 " +
  "L181,306 L209,310 L242,280 L289,242 L330,225 L350,190 L368,150 L391,146 " +
  "L395,180 L383,200 L417,216 L470,222 L532,212 L574,186 L600,190 L618,178 " +
  "L628,162 L640,112 L730,102 L800,96 L800,440 L700,470 L609,488 L621,540 " +
  "L591,578 L560,540 L548,490 L487,440 L449,388 L423,392 L445,430 L500,470 " +
  "L532,496 L505,510 L487,545 L457,484 L426,462 L363,412 L303,434 L278,432 " +
  "L247,472 L204,510 L150,555 Z";

// Skandinavien (Norwegen/Schweden, läuft oben aus dem Bild)
const SCANDINAVIA =
  "M461,192 L417,146 L395,102 L340,108 L301,90 L390,0 L488,0 L504,80 " +
  "L523,114 L487,160 Z";

// Finnland (getrennt durch den Bottnischen Meerbusen)
const FINLAND = "M560,0 L583,42 L625,75 L642,96 L730,90 L800,85 L800,0 Z";

// Großbritannien
const UK =
  "M113,300 L160,290 L215,272 L238,246 L208,208 L172,156 L139,128 " +
  "L113,180 L130,220 L117,258 L135,278 Z";

// Irland
const IRELAND = "M45,225 L70,196 L100,210 L104,245 L80,268 L48,255 Z";

// Bogen Gütersloh → Riga: quadratische Bézier-Kurve, Kontrollpunkt oberhalb
const ARC = `M${GUETERSLOH.x},${GUETERSLOH.y} Q492,110 ${RIGA.x},${RIGA.y}`;

export function EuropeMap({ t }: { t: Dict["map"] }) {
  const reduceMotion = useReducedMotion();

  return (
    <div>
      <div className="relative">
        {/* Dekorative Karte — alle Texte stehen als echte HTML-Elemente darüber */}
        <svg
          viewBox={`0 0 ${VB_W} ${VB_H}`}
          className="h-auto w-full"
          aria-hidden="true"
          focusable="false"
        >
          <defs>
            <linearGradient id="map-sunset-arc" x1="0%" y1="100%" x2="100%" y2="0%">
              <stop offset="0%" stopColor="var(--color-gold)" />
              <stop offset="50%" stopColor="var(--color-ember)" />
              <stop offset="100%" stopColor="var(--color-flame)" />
            </linearGradient>
          </defs>

          {/* Landmasse */}
          <g
            className="fill-white/[0.03] stroke-white/10"
            strokeWidth={1.5}
            strokeLinejoin="round"
          >
            <path d={MAINLAND} />
            <path d={SCANDINAVIA} />
            <path d={FINLAND} />
            <path d={UK} />
            <path d={IRELAND} />
          </g>

          {/* Vision-Punkte: halbtransparent, gestrichelter Ring */}
          <g className="stroke-gold/40" fill="none" opacity={0.2} strokeDasharray="3 3">
            {VISION_DOTS.map((d) => (
              <circle key={`${d.x}-${d.y}`} cx={d.x} cy={d.y} r={7} strokeWidth={1.5} />
            ))}
          </g>
          <g className="fill-gold" opacity={0.2}>
            {VISION_DOTS.map((d) => (
              <circle key={`${d.x}-${d.y}`} cx={d.x} cy={d.y} r={2.5} />
            ))}
          </g>

          {/* Animierter Bogen Gütersloh → Riga */}
          <motion.path
            d={ARC}
            fill="none"
            stroke="url(#map-sunset-arc)"
            strokeWidth={2.5}
            strokeLinecap="round"
            initial={{ pathLength: reduceMotion ? 1 : 0 }}
            whileInView={{ pathLength: 1 }}
            viewport={{ once: true, margin: "-60px" }}
            transition={
              reduceMotion
                ? { duration: 0 }
                : { duration: 1.6, delay: 0.35, ease: [0.21, 0.5, 0.2, 1] }
            }
          />
        </svg>

        {/* Pin: Gütersloh (HQ) — ember mit Ping-Ring */}
        <div
          className="absolute -translate-x-1/2 -translate-y-1/2"
          style={pct(GUETERSLOH)}
        >
          <span className="relative flex h-3 w-3" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-ember/70" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-ember shadow-glow" />
          </span>
        </div>
        <p
          className="absolute -translate-x-1/2 whitespace-nowrap text-xs font-semibold text-fg"
          style={{ left: pct(GUETERSLOH).left, top: `calc(${pct(GUETERSLOH).top} + 14px)` }}
        >
          {t.hq}
        </p>

        {/* Pin: Riga (Gen-E-Finale) — gold, pulsierend */}
        <div className="absolute -translate-x-1/2 -translate-y-1/2" style={pct(RIGA)}>
          <span className="relative flex h-3 w-3" aria-hidden="true">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-gold/60 [animation-duration:2.2s]" />
            <span className="relative inline-flex h-3 w-3 rounded-full bg-gold" />
          </span>
        </div>
        <p
          className="absolute -translate-x-[60%] whitespace-nowrap text-xs font-semibold text-fg"
          style={{ left: pct(RIGA).left, top: `calc(${pct(RIGA).top} - 30px)` }}
        >
          {t.live}
        </p>
      </div>

      {/* Legende für die Vision-Punkte */}
      <p className="mt-3 flex items-center justify-center gap-2 text-xs text-fg-muted">
        <span
          className="inline-block h-2.5 w-2.5 rounded-full border border-dashed border-gold/50"
          aria-hidden="true"
        />
        {t.vision}
      </p>
    </div>
  );
}

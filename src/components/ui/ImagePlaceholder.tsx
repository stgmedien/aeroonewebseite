import type { ReactNode } from "react";
import { Play } from "lucide-react";
import { DroneIcon } from "./Icons";

type Props = {
  label?: string;
  hint?: string;
  className?: string;
  icon?: ReactNode;
  video?: boolean;
  tone?: "warm" | "sky" | "ember";
};

const tones: Record<NonNullable<Props["tone"]>, string> = {
  warm: "from-[#2a1c14] via-ink-soft to-ink-deep",
  sky: "from-[#23303f] via-ink-soft to-ink-deep",
  ember: "from-[#3a1d10] via-[#241712] to-ink-deep",
};

/**
 * Stylischer Platzhalter für Fotos/Videos.
 * Füllt das Eltern-Element (das das Seitenverhältnis vorgibt).
 * Später einfach durch <Image>/<video> ersetzen.
 */
export function ImagePlaceholder({ label, hint, className = "", icon, video, tone = "warm" }: Props) {
  return (
    <div
      className={`group relative isolate flex h-full w-full items-center justify-center overflow-hidden bg-gradient-to-br ${tones[tone]} ${className}`}
    >
      {/* Sunset-Glow */}
      <div className="pointer-events-none absolute -bottom-1/3 left-1/2 h-2/3 w-2/3 -translate-x-1/2 rounded-full bg-ember/25 blur-3xl" />
      {/* feines Raster */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.07]"
        style={{
          backgroundImage:
            "linear-gradient(rgba(255,255,255,0.6) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.6) 1px, transparent 1px)",
          backgroundSize: "44px 44px",
        }}
      />
      {/* Sheen beim Hover */}
      <div className="pointer-events-none absolute inset-0 translate-x-[-120%] bg-gradient-to-r from-transparent via-white/10 to-transparent transition-transform duration-1000 group-hover:translate-x-[120%]" />

      <div className="relative z-10 flex flex-col items-center gap-3 px-6 text-center">
        <span className="grid h-14 w-14 place-items-center rounded-2xl glass text-ember">
          {icon ?? (video ? <Play size={22} /> : <DroneIcon size={26} />)}
        </span>
        {label && <span className="text-sm font-semibold text-fg/90">{label}</span>}
        {hint && (
          <span className="rounded-full border border-white/10 bg-black/30 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wider text-fg-muted">
            {hint}
          </span>
        )}
      </div>
    </div>
  );
}

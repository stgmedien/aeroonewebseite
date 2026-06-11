"use client";

import { useCallback, useRef, useState } from "react";
import { MoveHorizontal } from "lucide-react";
import type { ReactNode } from "react";

/**
 * Interaktiver Vorher/Nachher-Vergleich. `after` liegt oben und wird von links
 * bis zur Slider-Position freigegeben. Ziehen oder klicken.
 */
export function BeforeAfterSlider({
  before,
  after,
  beforeLabel = "Vorher",
  afterLabel = "Nachher",
  className = "",
}: {
  before: ReactNode;
  after: ReactNode;
  beforeLabel?: string;
  afterLabel?: string;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [pos, setPos] = useState(55);
  const dragging = useRef(false);

  const update = useCallback((clientX: number) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const p = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.max(2, Math.min(98, p)));
  }, []);

  return (
    <div
      ref={ref}
      className={`relative select-none overflow-hidden rounded-3xl ring-sunset ${className}`}
      onPointerDown={(e) => {
        dragging.current = true;
        (e.target as HTMLElement).setPointerCapture?.(e.pointerId);
        update(e.clientX);
      }}
      onPointerMove={(e) => dragging.current && update(e.clientX)}
      onPointerUp={() => (dragging.current = false)}
      onPointerCancel={() => (dragging.current = false)}
    >
      {/* Basis: before */}
      <div className="h-full w-full">{before}</div>

      {/* Overlay: after, von links freigelegt */}
      <div
        className="absolute inset-0"
        style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}
      >
        {after}
      </div>

      {/* Labels */}
      <span className="pointer-events-none absolute bottom-3 left-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
        {afterLabel}
      </span>
      <span className="pointer-events-none absolute bottom-3 right-3 rounded-full bg-black/55 px-3 py-1 text-xs font-semibold text-white/80 backdrop-blur">
        {beforeLabel}
      </span>

      {/* Griff */}
      <div
        className="pointer-events-none absolute inset-y-0 z-10 w-0.5 bg-white/90 shadow-[0_0_20px_rgba(0,0,0,0.6)]"
        style={{ left: `${pos}%` }}
      >
        <div className="absolute top-1/2 left-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 place-items-center rounded-full bg-sunset text-ink-deep shadow-[0_8px_24px_rgba(0,0,0,0.5)]">
          <MoveHorizontal size={20} />
        </div>
      </div>
    </div>
  );
}

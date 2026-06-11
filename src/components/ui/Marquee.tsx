import type { ReactNode } from "react";

export function Marquee({
  children,
  reverse = false,
  className = "",
  gapClass = "gap-10 sm:gap-16",
  pauseOnHover = true,
}: {
  children: ReactNode;
  reverse?: boolean;
  className?: string;
  gapClass?: string;
  pauseOnHover?: boolean;
}) {
  const anim = reverse ? "animate-marquee-rev" : "animate-marquee";
  const pause = pauseOnHover ? "group-hover:[animation-play-state:paused]" : "";
  return (
    <div className={`group relative flex overflow-hidden ${className}`}>
      <div className={`flex w-max ${anim} ${pause}`}>
        <div className={`flex ${gapClass} pr-10 sm:pr-16`}>{children}</div>
        <div className={`flex ${gapClass} pr-10 sm:pr-16`} aria-hidden>
          {children}
        </div>
      </div>
    </div>
  );
}

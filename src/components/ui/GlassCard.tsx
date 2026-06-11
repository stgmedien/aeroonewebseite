import type { ReactNode } from "react";

export function GlassCard({
  children,
  className = "",
  ring = false,
  hover = true,
}: {
  children: ReactNode;
  className?: string;
  ring?: boolean;
  hover?: boolean;
}) {
  return (
    <div
      className={[
        "rounded-3xl glass-strong shadow-card",
        ring ? "ring-sunset" : "",
        hover ? "transition-transform duration-500 hover:-translate-y-1.5" : "",
        className,
      ].join(" ")}
    >
      {children}
    </div>
  );
}

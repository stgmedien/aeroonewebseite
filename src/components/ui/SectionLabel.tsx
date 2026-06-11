import { DroneIcon } from "./Icons";

export function SectionLabel({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted ${className}`}
    >
      <DroneIcon size={14} className="text-ember" />
      <span className="text-gradient">{children}</span>
    </span>
  );
}

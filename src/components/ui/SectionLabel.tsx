import { DroneIcon } from "./Icons";

export function SectionLabel({
  children,
  no,
  className = "",
}: {
  children: React.ReactNode;
  /** Kapitelnummer (Gen-E-Storyline-Motiv), z. B. "01" */
  no?: string;
  className?: string;
}) {
  return (
    <span
      className={`inline-flex items-center gap-2 rounded-full glass px-3.5 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-fg-muted ${className}`}
    >
      <DroneIcon size={14} className="text-ember" />
      {no && <span className="tabular-nums text-ember">{no}</span>}
      <span className="text-gradient">{children}</span>
    </span>
  );
}

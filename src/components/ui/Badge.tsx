import type { ReactNode } from "react";

export function Badge({ icon, children }: { icon?: ReactNode; children: ReactNode }) {
  return (
    <div className="flex items-center gap-2.5 rounded-2xl glass px-4 py-3 text-sm font-medium text-fg/90 transition-colors duration-300 hover:border-white/20">
      {icon && (
        <span className="grid h-7 w-7 shrink-0 place-items-center rounded-lg bg-sunset text-ink-deep">
          {icon}
        </span>
      )}
      <span>{children}</span>
    </div>
  );
}

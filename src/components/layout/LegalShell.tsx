import type { ReactNode } from "react";

export function LegalShell({
  title,
  updated,
  children,
}: {
  title: string;
  updated?: string;
  children: ReactNode;
}) {
  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-72 w-[40rem] max-w-[92%] -translate-x-1/2 rounded-full bg-ember/15 blur-[120px]" />
      <div className="container-x">
        <header className="mb-10 border-b border-white/10 pb-8">
          <h1 className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">{title}</h1>
          {updated && <p className="mt-3 text-sm text-fg-muted">{updated}</p>}
        </header>
        <div className="legal max-w-3xl">{children}</div>
      </div>
    </section>
  );
}

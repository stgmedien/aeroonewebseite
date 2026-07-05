import Link from "next/link";
import { Trophy } from "lucide-react";
import type { Dict } from "@/i18n";

/** Schmale Award-Leiste über der Navbar — sichtbar auf allen Seiten. */
export function AnnouncementBar({ t }: { t: Dict["announcement"] }) {
  return (
    <div className="fixed inset-x-0 top-0 z-[60] flex h-9 items-center justify-center gap-2.5 border-b border-ember/25 bg-ink-deep/90 px-3 text-xs font-medium text-fg/90 backdrop-blur-md sm:text-[0.8rem]">
      <Trophy size={13} className="shrink-0 text-ember" aria-hidden />
      <Link href={t.href} className="min-w-0 truncate transition-colors hover:text-fg">
        <span className="hidden md:inline">{t.text}</span>
        <span className="md:hidden">{t.short}</span>
      </Link>
      <span className="h-3.5 w-px shrink-0 bg-white/20" aria-hidden />
      <Link
        href={t.switchHref}
        className="shrink-0 font-semibold text-ember transition-colors hover:text-fg"
        aria-label={t.switchLabel === "EN" ? "English version" : "Deutsche Version"}
      >
        {t.switchLabel}
      </Link>
    </div>
  );
}

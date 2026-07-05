import Link from "next/link";
import { Trophy } from "lucide-react";
import { socials } from "@/data/nav";
import { socialIconMap } from "@/components/ui/Icons";
import { localePath, type Dict, type Locale } from "@/i18n";
import { Logo } from "./Logo";

export function Footer({ t, locale }: { t: Dict["footer"]; locale: Locale }) {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/8 bg-ink-deep">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo href={localePath(locale, "/")} />
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">{t.tagline}</p>
            <Link
              href={localePath(locale, "/presse")}
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-fg transition-colors hover:text-ember"
            >
              <Trophy size={14} className="shrink-0 text-ember" />
              {t.award}
            </Link>
            <div className="mt-5 flex gap-2.5">
              {socials.map((s) => {
                const Icon = socialIconMap[s.icon];
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="grid h-10 w-10 place-items-center rounded-full glass text-fg-muted transition-all duration-300 hover:-translate-y-0.5 hover:text-fg"
                  >
                    <Icon size={18} />
                  </a>
                );
              })}
            </div>
          </div>

          <FooterCol title={t.colPages} links={t.pages} locale={locale} />
          <FooterCol title={t.colInfo} links={t.legal} locale={locale} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-sm text-fg-muted sm:flex-row">
          <p>© {year} {t.copyright}</p>
          <p className="flex items-center gap-1.5">
            {t.vision.split("▲")[0]}<span className="text-ember">▲</span>{t.vision.split("▲")[1]}
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
  locale,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
  locale: Locale;
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={localePath(locale, l.href)} className="text-sm text-fg-muted transition-colors hover:text-fg">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

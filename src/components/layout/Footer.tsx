import Link from "next/link";
import { Trophy } from "lucide-react";
import { footerPages, footerLegal, socials } from "@/data/nav";
import { footer } from "@/data/content";
import { socialIconMap } from "@/components/ui/Icons";
import { Logo } from "./Logo";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="relative border-t border-white/8 bg-ink-deep">
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-ember/40 to-transparent" />
      <div className="container-x py-14">
        <div className="grid gap-10 md:grid-cols-[1.4fr_1fr_1fr]">
          <div className="max-w-xs">
            <Logo />
            <p className="mt-4 text-sm leading-relaxed text-fg-muted">{footer.tagline}</p>
            <Link
              href="/presse"
              className="mt-3 inline-flex items-center gap-2 text-sm font-semibold text-fg transition-colors hover:text-ember"
            >
              <Trophy size={14} className="shrink-0 text-ember" />
              {footer.award}
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

          <FooterCol title="Seiten" links={footerPages} />
          <FooterCol title="Informationen" links={footerLegal} />
        </div>

        <div className="mt-12 flex flex-col items-center justify-between gap-3 border-t border-white/8 pt-6 text-sm text-fg-muted sm:flex-row">
          <p>© {year} Aero One · Gütersloh</p>
          <p className="flex items-center gap-1.5">
            Mit <span className="text-ember">▲</span> Vision gebaut.
          </p>
        </div>
      </div>
    </footer>
  );
}

function FooterCol({
  title,
  links,
}: {
  title: string;
  links: readonly { label: string; href: string }[];
}) {
  return (
    <div>
      <h3 className="text-xs font-semibold uppercase tracking-[0.18em] text-gradient">{title}</h3>
      <ul className="mt-4 space-y-2.5">
        {links.map((l) => (
          <li key={l.href}>
            <Link href={l.href} className="text-sm text-fg-muted transition-colors hover:text-fg">
              {l.label}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}

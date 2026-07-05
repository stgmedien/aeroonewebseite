"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { BOOKING_URL } from "@/data/nav";
import { localePath, type Dict, type Locale } from "@/i18n";
import { Button } from "@/components/ui/Button";
import { Logo } from "./Logo";

export function Navbar({ t, locale }: { t: Dict["nav"]; locale: Locale }) {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header className="fixed inset-x-0 top-9 z-50 flex justify-center px-3 pt-3 sm:px-4 sm:pt-4">
      <nav
        className={`flex w-full max-w-6xl items-center justify-between rounded-full px-3 py-2 transition-all duration-300 sm:px-4 ${
          scrolled ? "glass-strong shadow-card" : "bg-transparent"
        }`}
      >
        <Logo href={localePath(locale, "/")} aria={t.logoAria} />

        <div className="hidden items-center gap-0.5 md:flex">
          {t.links.map((l) => (
            <Link
              key={l.href}
              href={localePath(locale, l.href)}
              className="rounded-full px-4 py-2 text-sm font-medium text-fg-muted transition-colors duration-200 hover:bg-white/5 hover:text-fg"
            >
              {l.label}
            </Link>
          ))}
        </div>

        <div className="flex items-center gap-2">
          <Button href={BOOKING_URL} size="md" className="hidden sm:inline-flex">
            {t.booking}
          </Button>
          <button
            onClick={() => setOpen(true)}
            className="grid h-10 w-10 place-items-center rounded-full glass text-fg md:hidden"
            aria-label={t.menuOpen}
          >
            <Menu size={20} />
          </button>
        </div>
      </nav>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[70] flex flex-col bg-ink-deep/95 backdrop-blur-xl md:hidden"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <div className="flex items-center justify-between px-5 pt-5">
              <Logo href={localePath(locale, "/")} aria={t.logoAria} />
              <button
                onClick={() => setOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-full glass text-fg"
                aria-label={t.menuClose}
              >
                <X size={20} />
              </button>
            </div>
            <div className="flex flex-1 flex-col justify-center gap-2 px-6">
              {t.links.map((l, i) => (
                <motion.div
                  key={l.href}
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.06 }}
                >
                  <Link
                    href={localePath(locale, l.href)}
                    onClick={() => setOpen(false)}
                    className="block py-3 font-display text-3xl font-bold tracking-tight text-fg"
                  >
                    {l.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-6">
                <Button href={BOOKING_URL} size="lg" arrow className="w-full">
                  {t.booking}
                </Button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}

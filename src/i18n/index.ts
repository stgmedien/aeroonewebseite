import type { Dict, Locale } from "./types";
import { locales } from "./types";
import { de } from "./de";
import { en } from "./en";

export { locales } from "./types";
export type { Dict, Locale, BadgeItem, BadgeIconKey, NavLink } from "./types";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getDict(locale: Locale): Dict {
  return locale === "en" ? en : de;
}

/** Interne Links pro Locale: DE bleibt prefixlos, EN bekommt /en davor. */
export function localePath(locale: Locale, href: string): string {
  if (locale === "de" || href.startsWith("http") || href.startsWith("mailto:")) return href;
  if (href === "/") return "/en";
  if (href.startsWith("/#")) return `/en${href.slice(1)}`;
  return `/en${href}`;
}

/** Datum (ISO) locale-gerecht formatieren, z. B. "17. Juni 2026" / "June 17, 2026". */
export function formatDate(locale: Locale, iso: string): string {
  return new Intl.DateTimeFormat(locale === "en" ? "en-US" : "de-DE", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(`${iso}T12:00:00Z`));
}

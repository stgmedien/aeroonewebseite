/**
 * i18n-Typen: EIN Dict-Typ, den de.ts und en.ts identisch erfüllen.
 * Alle sichtbaren UI-Texte der Seite leben im Dict — Komponenten erhalten
 * ihre Slices als Props (Server → Client serialisierbar).
 */

import type { Plan } from "@/data/pricing";
import type { Testimonial } from "@/data/testimonials";
import type { PressKind } from "@/data/press";
import type { PressRelease } from "@/data/pressReleases";

export const locales = ["de", "en"] as const;
export type Locale = (typeof locales)[number];

/** Icon-Schlüssel statt sprachabhängiger Label-Lookups (badgeIcons). */
export type BadgeIconKey =
  | "shield"
  | "camera"
  | "flex"
  | "clock"
  | "tag"
  | "eye"
  | "layers";

export type BadgeItem = { icon: BadgeIconKey; label: string };

export type NavLink = { label: string; href: string };

export type Dict = {
  meta: {
    title: string;
    description: string;
    ogTitle: string;
    ogDescription: string;
    kontakt: { title: string; description: string };
    presse: { title: string; description: string; ogTitle: string; ogDescription: string };
  };
  announcement: { text: string; short: string; href: string; switchLabel: string; switchHref: string };
  nav: { links: NavLink[]; booking: string; menuOpen: string; menuClose: string; logoAria: string };
  hero: {
    badge: string;
    titleLine1: string;
    titleLine2Pre: string;
    titleHighlight: string;
    subtitle: string;
    tags: string[];
    primaryCta: { label: string; href: string };
    secondaryCta: { label: string; href: string };
    playAria: string;
    playCta: string;
    scroll: string;
  };
  logoStrip: { trust: string; eyebrow: string; titlePre: string; titleHighlight: string };
  stat: {
    eyebrow: string;
    title: string;
    titleHighlight: string;
    text: string;
    kicker: string;
    ctaLabel: string;
    badges: BadgeItem[];
  };
  project: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    text: string;
    kicker: string;
    ctaLabel: string;
    badges: BadgeItem[];
    beforeLabel: string;
    afterLabel: string;
    sliderHint: string;
  };
  showcase: { eyebrow: string; title: string; text: string };
  panorama: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    text: string;
    note: string;
    loading: string;
    hint: string;
    sceneLabels: string[];
    /** aria: "Zu {label} wechseln" / "Switch to {label}" — {label} wird ersetzt */
    sceneAria: string;
  };
  team: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    text: string;
    /** Rollen je Person (Key = Name aus assets.team) */
    roles: Record<string, string>;
  };
  testimonials: { eyebrow: string; items: Testimonial[] };
  pricing: {
    eyebrow: string;
    titlePre: string;
    titleHighlight: string;
    text: string;
    toggle: { once: string; monthly: string };
    plans: Plan[];
    footnote: string;
  };
  freyaCta: {
    titlePre: string;
    titleHighlight: string;
    text: string;
    ctaLabel: string;
    person: { name: string; role: string; email: string };
  };
  contact: {
    eyebrow: string;
    title: string;
    text: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
      customer: { label: string; placeholder: string; options: string[] };
    };
    submit: string;
    success: string;
    successMore: string;
    error: string;
    dsgvoPre: string;
    dsgvoLinkLabel: string;
    dsgvoPost: string;
  };
  footer: {
    tagline: string;
    award: string;
    colPages: string;
    colInfo: string;
    pages: NavLink[];
    legal: NavLink[];
    copyright: string;
    vision: string;
  };
  notFound: { headline: string; text: string; cta: string };
  presse: {
    intro: { eyebrow: string; title: string; highlight: string; text: string };
    highlights: { label: string; sub: string }[];
    kindLabels: Record<PressKind, string>;
    mediaTitlePre: string;
    mediaTitleHighlight: string;
    mediaSub: string;
    releasesTitlePre: string;
    releasesTitleHighlight: string;
    releasesSub: string;
    releaseCardKind: string;
    toArticle: string;
    readRelease: string;
    back: string;
    pmEyebrow: string;
    materialNote: string;
    contact: { title: string; text: string; name: string; role: string; email: string };
    /** Pressemitteilungen in dieser Sprache */
    releases: PressRelease[];
    /** Hinweis unter übersetzten Mitteilungen (nur EN gesetzt) */
    translatedNote?: string;
  };
  legal: {
    /** Hinweisbox auf EN-Rechtsseiten (nur EN gesetzt) */
    germanBindingNote?: string;
  };
};

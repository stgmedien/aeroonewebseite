/**
 * Zentrale Navigations-, Social- und Buchungs-Konfiguration.
 * Anker zeigen auf Sektions-IDs der Startseite.
 */

export const BOOKING_URL = "https://immohero.org/buchen";

/** Plattform-Startseite (Privatkund:innen, Pakete ab 79 €). */
export const IMMOHERO_URL = "https://immohero.org";

/** TODO: finaler Onboarding-Link (Netzwerk-Beitritt) folgt vom ImmoHero-Team. */
export const ONBOARDING_URL = "https://immohero.org";

export const CONTACT_EMAIL = "aeroonemail@gmail.com";

export const navLinks = [
  { label: "Home", href: "/" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Galerie", href: "/#galerie" },
  { label: "Preise", href: "/#preise" },
  { label: "Presse", href: "/presse" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "EN", href: "/en" },
] as const;

export const footerPages = [
  { label: "Home", href: "/" },
  { label: "Leistungen", href: "/#leistungen" },
  { label: "Preise", href: "/#preise" },
  { label: "Presse", href: "/presse" },
  { label: "Kontakt", href: "/kontakt" },
  { label: "English", href: "/en" },
] as const;

export const footerLegal = [
  { label: "Impressum", href: "/impressum" },
  { label: "Datenschutz", href: "/datenschutz" },
] as const;

export const socials = [
  { label: "Instagram", href: "https://www.instagram.com/aeroonedrone/", icon: "instagram" },
  { label: "YouTube", href: "https://www.youtube.com/@aeroonedrone", icon: "youtube" },
  { label: "X", href: "https://x.com/Aeroonedrone", icon: "x" },
] as const;

/** Partner / Referenzen (Logo-Strip). Logos = Platzhalter bis Assets geliefert werden. */
export const partners = [
  { name: "STG Medien", href: "https://stg-medien.com/" },
  { name: "Kaup Immobilien", href: "https://www.kaup-immobilien.de/" },
  { name: "Concept GT", href: "https://www.conceptgt.de/" },
  { name: "ESG Gütersloh", href: "https://esg-guetersloh.de/" },
  { name: "Dr. Kreutzheide", href: "https://drkreutzheide.de/" },
  { name: "brandlab", href: "https://brandlab-media.de/" },
  { name: "LaseThat", href: "https://lasethat.com/" },
] as const;

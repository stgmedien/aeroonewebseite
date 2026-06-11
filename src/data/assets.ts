/**
 * Zentrale Referenz aller optimierten Medien in public/media/.
 * Quelle: public/assets/ (Originale) → optimiert via scripts/optimize-*.sh.
 * Bei neuen Assets: Skripte erneut laufen lassen und hier Pfade ergänzen.
 */

export type Img = { src: string; width: number; height: number; alt: string };

export const logo = {
  wordmark: { src: "/media/logos/aeroone-wordmark.png", width: 1024, height: 434, alt: "Aero One" },
  mark: { src: "/media/logos/aeroone-mark.png", width: 512, height: 512, alt: "Aero One" },
};

export const video = {
  hero: { src: "/media/video/hero.mp4", poster: "/media/video/hero-poster.jpg" },
  referenz: {
    src: "/media/video/referenz-conceptgt.mp4",
    poster: "/media/video/referenz-conceptgt-poster.jpg",
    title: "Referenzvideo · ConceptGT",
  },
};

export const photos = {
  drohnePortrait: { src: "/media/photos/drohne-portrait.jpg", width: 1350, height: 2400, alt: "Senkrechte Drohnenaufnahme einer Immobilie aus der Luft" },
  drohneWide: { src: "/media/photos/drohne-wide.jpg", width: 2600, height: 1462, alt: "Weitwinkel-Luftaufnahme per Drohne" },
  drohneAerial: { src: "/media/photos/drohne-aerial.jpg", width: 2400, height: 1349, alt: "Drohnen-Luftbild eines Gebäudes von oben" },
  immobilieHv1: { src: "/media/photos/immobilie-hv-1.jpg", width: 2400, height: 1800, alt: "Moderne Immobilie aus der Bodenperspektive" },
  immobilieHv2: { src: "/media/photos/immobilie-hv-2.jpg", width: 2400, height: 1800, alt: "Senkrechte Drohnenaufnahme derselben Immobilie aus der Luft" },
  immobilieNk1: { src: "/media/photos/immobilie-nk-1.jpg", width: 2400, height: 1797, alt: "Immobilie Neunkirchener Straße, Luftaufnahme" },
  immobilieNk2: { src: "/media/photos/immobilie-nk-2.jpg", width: 2400, height: 1797, alt: "Immobilie Neunkirchener Straße, Drohnenperspektive" },
} satisfies Record<string, Img>;

/** Galerie-Reihenfolge (Bento). Eines der Items ist das Referenzvideo. */
export const galleryPhotos: Img[] = [
  photos.drohneWide,
  photos.immobilieHv2,
  photos.drohnePortrait,
  photos.immobilieNk2,
  photos.drohneAerial,
  photos.immobilieNk1,
];

/** 360°-Panoramen (equirektangular, 4096×2048). Beispielprojekt Kaup Immobilien. */
export const panoramas = [
  { src: "/media/pano/pano-1.jpg", label: "Standpunkt 1" },
  { src: "/media/pano/pano-2.jpg", label: "Standpunkt 2" },
  { src: "/media/pano/pano-3.jpg", label: "Standpunkt 3" },
];

export type TeamMember = { name: string; role: string; src: string; width: number; height: number };

/** Team (Rollen & Reihenfolge vom Kunden bestätigt). Amy steht neben Freya (Vertrieb). */
export const team: TeamMember[] = [
  { name: "Jonathan Kreutzheide", role: "Geschäftsführer", src: "/media/team/jonathan.jpg", width: 725, height: 900 },
  { name: "Freya Knight", role: "Vertriebsleitung", src: "/media/team/freya.jpg", width: 416, height: 900 },
  { name: "Amy Thomalla", role: "Vertriebskraft", src: "/media/team/amy.jpg", width: 600, height: 900 },
  { name: "Linus Held", role: "Drohnenpilot", src: "/media/team/linus.jpg", width: 600, height: 900 },
  { name: "Friedrich Grüninger", role: "Hilfskraft Marketing", src: "/media/team/friederich.jpg", width: 600, height: 900 },
];

/** Sektions-Texte für die neuen Bereiche. */
export const sectionCopy = {
  panorama: {
    eyebrow: "360°-Rundgang",
    title: "Erkunde Immobilien aus jeder Perspektive",
    text: "Interaktive 360°-Luftpanoramen direkt im Browser — ziehen zum Umsehen, scrollen zum Zoomen.",
    note: "Beispielprojekt · Kaup Immobilien",
  },
  team: {
    eyebrow: "Team",
    title: "Die Köpfe hinter Aero One",
    text: "Ein eingespieltes Team aus Piloten, Editoren und Strategen — von der Idee bis zum fertigen Film.",
  },
};

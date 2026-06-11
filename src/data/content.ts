/**
 * Alle Texte der Startseite, zentral & getippt.
 * Inhalte aus der bestehenden aeroone.eu übernommen — offensichtliche Tippfehler korrigiert.
 */

export const hero = {
  badge: "Drohnenvideos in unter 48h",
  titleLines: ["Drohnenvideos", "in unter 48h"],
  highlight: "48h",
  subtitle:
    "Fertig bearbeitete, hochqualitative und professionelle Luftbildaufnahmen für",
  tags: ["Immobilien", "Events", "Projekte"],
  primaryCta: { label: "Anfrage stellen", href: "/kontakt" },
  secondaryCta: { label: "Weitere Informationen", href: "/#leistungen" },
};

export const logoStrip = {
  eyebrow: "Schnell und Einfach",
  title: "Aufnahmen für Immobilien & Projekte in höchster Qualität",
};

export const showcase = {
  eyebrow: "Galerie",
  title: "Ein Blick aus der Vogelperspektive",
  text: "Jedes Projekt verdient eine Bühne. Ein Auszug aus realisierten Aufnahmen für Immobilien, Events und Unternehmen.",
};

export const stat = {
  eyebrow: "Auf Ihre Immobilie zugeschnitten",
  titleBefore: "Immobilien ",
  statValue: 92,
  statSuffix: "%",
  titleAfter: " schneller verkaufen",
  text: "Im Durchschnitt verkaufen sich Immobilien mit professionellen Drohnen-Luftbildaufnahmen von Aero One 92 % besser.",
  kicker: "Bereit durchzustarten?",
  cta: { label: "Jetzt Buchen!", href: "BOOKING" as const },
  badges: ["Rechtssicher", "Aufnahmen", "Flexibilität", "Lieferung in 48h"],
};

export const project = {
  eyebrow: "Passend für jedes Projekt",
  title: "Professionelle Aufnahmen für Ihr Projekt",
  text: "Professionelle Aufnahmen schaffen Aufmerksamkeit und präsentieren Ihr Projekt wirkungsvoll. Mit klarer Bildsprache und hochwertiger Umsetzung entstehen Inhalte, die überzeugen.",
  kicker: "Überzeugen Sie sich selbst",
  cta: { label: "Jetzt Buchen!", href: "BOOKING" as const },
  badges: ["48h Lieferzeit", "Individuelle Preise", "Mehr Sichtbarkeit", "All In One"],
  beforeLabel: "Standard-Foto",
  afterLabel: "Aero One Luftbild",
};

export const testimonialsSection = {
  eyebrow: "Stimmen",
  title: "Professionelle Umsetzung mit beeindruckendem Ergebnis",
};

export const pricingSection = {
  eyebrow: "Preise",
  title: "Simpel und einfach – unsere Preisgestaltung",
  text: "Transparente Pakete ohne Kleingedrucktes. Wählen Sie, was zu Ihrem Projekt passt.",
  toggle: { once: "Einmalig", monthly: "Monatlich" },
};

export const freyaCta = {
  title: "Sprich mit Freya und bring dein Projekt in die Luft.",
  text: "Professionelle Luftbildaufnahmen sind nur einen Klick entfernt.",
  cta: { label: "Jetzt Buchen!", href: "BOOKING" as const },
  person: {
    name: "Freya Knight",
    role: "Head of Sales",
    email: "aeroonemail@gmail.com",
  },
};

export const footer = {
  tagline: "Professionelle Drohnenvideos für Events · Immobilien · Projekte.",
};

export const contactPage = {
  eyebrow: "Kontaktiere uns",
  title: "Bereit?",
  text: "Professionelle Luftbildaufnahmen sind nur einen Klick entfernt.",
  fields: {
    name: { label: "Name", placeholder: "Max Mustermann" },
    email: { label: "E-Mail", placeholder: "max.mustermann@mail.de" },
    message: { label: "Nachricht", placeholder: "Erzähl uns von deinem Projekt …" },
    customer: {
      label: "Sind Sie bereits Kunde?",
      placeholder: "Auswählen …",
      options: ["Nein", "Ja"],
    },
  },
  submit: "Senden",
  success: "Danke! Deine Anfrage ist angekommen – wir melden uns innerhalb von 24h.",
};

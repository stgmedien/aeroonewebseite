/**
 * Deutsches Dictionary – Quelle der Wahrheit für alle deutschen UI-Texte.
 * (Inhalte aus src/data/* konsolidiert; dort liegen weiterhin die
 * sprachneutralen Daten: Assets, URLs, Partner, Presse-Rohdaten.)
 */

import type { Dict } from "./types";
import { pressReleases } from "@/data/pressReleases";

export const de: Dict = {
  meta: {
    title: "Aero One – Professionelle Luftbildaufnahmen",
    description:
      "Drohnenvideos in unter 48h – ausgezeichnet als beste Schülerfirma Deutschlands 2026 (IW JUNIOR). Professionelle Luftbildaufnahmen für Immobilien, Events und Projekte.",
    ogTitle: "Aero One – Beste Schülerfirma Deutschlands 2026",
    ogDescription:
      "Drohnenvideos in unter 48h für Immobilien, Events und Projekte. Bundessieger des IW-JUNIOR-Wettbewerbs 2026 – Deutschlands Vertreter beim Gen-E-Finale in Riga.",
    kontakt: {
      title: "Kontakt",
      description: "Stelle deine Anfrage – professionelle Luftbildaufnahmen sind nur einen Klick entfernt.",
    },
    presse: {
      title: "Presse",
      description:
        "Aero One in der Presse – Berichterstattung und offizielle Pressemitteilungen der mehrfach ausgezeichneten JUNIOR-Schülerfirma aus Gütersloh (IW JUNIOR Landessieger NRW & Bundessieger 2026).",
      ogTitle: "Aero One in der Presse – Beste Schülerfirma Deutschlands 2026",
      ogDescription:
        "Bundessieger des IW-JUNIOR-Wettbewerbs 2026, Deutschlands Vertreter beim Gen-E-Europa-Finale in Riga: der Medienspiegel und alle offiziellen Pressemitteilungen.",
    },
  },

  announcement: {
    text: "Beste Schülerfirma Deutschlands 2026 · Wir vertreten Deutschland beim Gen-E-Finale in Riga (7.–10. Juli)",
    short: "Beste Schülerfirma Deutschlands 2026",
    href: "/presse",
    switchLabel: "EN",
    switchHref: "/en",
  },

  nav: {
    links: [
      { label: "Home", href: "/" },
      { label: "Leistungen", href: "/#leistungen" },
      { label: "Galerie", href: "/#galerie" },
      { label: "Preise", href: "/#preise" },
      { label: "Presse", href: "/presse" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    booking: "Jetzt Buchen!",
    menuOpen: "Menü öffnen",
    menuClose: "Menü schließen",
    logoAria: "Aero One – Startseite",
  },

  hero: {
    badge: "IW JUNIOR Bundessieger 2026 · Beste Schülerfirma Deutschlands",
    titleLine1: "Drohnenvideos",
    titleLine2Pre: "in unter",
    titleHighlight: "48h",
    subtitle: "Fertig bearbeitete, hochqualitative und professionelle Luftbildaufnahmen für",
    tags: ["Immobilien", "Events", "Projekte"],
    primaryCta: { label: "Anfrage stellen", href: "/kontakt" },
    secondaryCta: { label: "Weitere Informationen", href: "/#leistungen" },
    playAria: "Werbefilm mit Ton abspielen",
    playCta: "Werbefilm mit Ton ansehen",
    scroll: "Scrollen",
  },

  logoStrip: {
    trust: "Vertrauen von Unternehmen aus der Region",
    eyebrow: "Schnell und Einfach",
    titlePre: "Aufnahmen für Immobilien & Projekte in",
    titleHighlight: "höchster Qualität",
  },

  problem: {
    eyebrow: "Das Problem",
    titlePre: "Immobilien werden online verkauft – doch die Fotos sind oft",
    titleHighlight: "ein Desaster.",
    text: "Wer heute eine Immobilie vermarktet, kämpft mit drei Hürden – und verliert dabei Reichweite, Zeit und Vertrauen.",
    pains: [
      {
        icon: "hourglass",
        title: "Bis zu 3 Wochen Wartezeit",
        text: "Klassische Anbieter sind ausgebucht. Wer auf professionelle Aufnahmen wartet, verliert wertvolle Vermarktungszeit.",
      },
      {
        icon: "smartphone",
        title: "Handy-Schnappschüsse statt Qualität",
        text: "Schiefe Winkel, schlechtes Licht, keine Bearbeitung – so verliert selbst die beste Immobilie an Wirkung.",
      },
      {
        icon: "scale",
        title: "Datenschutz & Drohnenrecht",
        text: "Drohnenflüge unterliegen strengen Regeln. Ohne Registrierung, Versicherung und Blick auf die DSGVO drohen Bußgelder.",
      },
    ],
  },

  stat: {
    eyebrow: "Die Lösung",
    title: "Rechtssichere Immobilienaufnahmen",
    titleHighlight: "in unter 48 Stunden",
    text: "Für Makler:innen, Bauunternehmen und Architekturbüros: professionelle Luftbilder und Videos – von zertifizierten Pilot:innen geflogen, DSGVO-konform umgesetzt und fertig bearbeitet in unter 48 Stunden.",
    kicker: "Bereit durchzustarten?",
    ctaLabel: "Jetzt Buchen!",
    badges: [
      { icon: "shield", label: "Rechtssicher" },
      { icon: "camera", label: "Aufnahmen" },
      { icon: "flex", label: "Flexibilität" },
      { icon: "clock", label: "Lieferung in 48h" },
    ],
  },

  project: {
    eyebrow: "Passend für jedes Projekt",
    titlePre: "Professionelle Aufnahmen für",
    titleHighlight: "Ihr Projekt",
    text: "Professionelle Aufnahmen schaffen Aufmerksamkeit und präsentieren Ihr Projekt wirkungsvoll. Mit klarer Bildsprache und hochwertiger Umsetzung entstehen Inhalte, die überzeugen.",
    kicker: "Überzeugen Sie sich selbst",
    ctaLabel: "Jetzt Buchen!",
    badges: [
      { icon: "clock", label: "48h Lieferzeit" },
      { icon: "tag", label: "Individuelle Preise" },
      { icon: "eye", label: "Mehr Sichtbarkeit" },
      { icon: "layers", label: "All In One" },
    ],
    beforeLabel: "Bodenperspektive",
    afterLabel: "Aus der Luft",
    sliderHint: "Ziehe den Regler – vom Standardfoto zur Luftaufnahme.",
  },

  immoHero: {
    title: "Sie verkaufen privat?",
    text: "Privatkund:innen buchen professionelle Aufnahmen direkt auf immohero.org.",
    ctaLabel: "Zu immohero.org",
    note: "Pakete ab 79 €",
  },

  showcase: {
    eyebrow: "Referenzen",
    title: "Ein Blick aus der Vogelperspektive",
    text: "Jedes Projekt verdient eine Bühne. Ein Auszug aus realisierten Aufnahmen für Immobilien, Events und Unternehmen.",
  },

  panorama: {
    eyebrow: "360°-Rundgang",
    titlePre: "Erkunde Immobilien aus",
    titleHighlight: "jeder Perspektive",
    text: "Interaktive 360°-Luftpanoramen direkt im Browser – ziehen zum Umsehen, scrollen zum Zoomen.",
    note: "Beispielprojekt · Kaup Immobilien",
    loading: "Panorama lädt …",
    hint: "Ziehen zum Umsehen · Scrollen zum Zoomen",
    sceneLabels: ["Standpunkt 1", "Standpunkt 2"],
    sceneAria: "Zu {label} wechseln",
  },

  network: {
    eyebrow: "Vision",
    titlePre: "Unser Traum: ein Netzwerk für",
    titleHighlight: "ganz Europa",
    text: "Wir bauen ein europaweites Netzwerk aus Drohnenpilot:innen, Videograf:innen und Fotograf:innen – damit professionelle Immobilienaufnahmen überall in unter 48 Stunden möglich werden. Du fliegst, filmst oder fotografierst? Dann werde Teil davon.",
    roles: [
      { icon: "drone", label: "Drohnenpilot:innen" },
      { icon: "video", label: "Videograf:innen" },
      { icon: "camera", label: "Fotograf:innen" },
    ],
    ctaLabel: "Werde Teil des Netzwerks",
    ctaNote: "Onboarding über unseren Partner ImmoHero",
  },

  team: {
    eyebrow: "Team",
    titlePre: "Die Köpfe hinter",
    titleHighlight: "Aero One",
    text: "Fünf Schüler:innen des ESG Gütersloh – 2026 als beste Schülerfirma Deutschlands ausgezeichnet. Von der Idee bis zum fertigen Film.",
    roles: {
      "Jonathan Kreutzheide": "Co-Gründer und Geschäftsführer",
      "Freya Knight": "Head of Sales",
      "Amy Thomalla": "Marketing Manager",
      "Linus Held": "Co-Gründer und Drohnenpilot",
      "Friedrich Grüninger": "Drohnenpilot in Ausbildung",
    },
  },

  impact: {
    eyebrow: "Impact",
    titlePre: "Wir vermarkten Immobilien –",
    titleHighlight: "mit dem Morgen im Blick.",
    text: "Aero One ist mehr als ein Geschäftsmodell. Wir schaffen Chancen für junge Menschen – hier in der Region und überall dort, wo unser Netzwerk wächst.",
    items: [
      {
        icon: "heartHandshake",
        title: "Faire Arbeit für junge Menschen",
        text: "Echte Verantwortung, echte Projekte, echte Wertschätzung – von Anfang an.",
      },
      {
        icon: "graduation",
        title: "Ausbildung & Einstieg in der Region",
        text: "Ausbildungs- und Einstiegsplätze, die jungen Talenten den Start ins Berufsleben öffnen.",
      },
      {
        icon: "handCoins",
        title: "Faire Bezahlung & Perspektive",
        text: "Faire Vergütung und langfristige Karrierewege statt Praktikumsschleifen.",
      },
      {
        icon: "sprout",
        title: "Zukunftsfähige Skills",
        text: "Praxisnahes Lernen: Drohnentechnik, Medienproduktion, Unternehmertum.",
      },
      {
        icon: "mapPin",
        title: "Regionale Wertschöpfung",
        text: "Aufträge, Wissen und Wertschöpfung bleiben in der Region.",
      },
    ],
  },

  testimonials: {
    eyebrow: "Stimmen",
    items: [
      {
        quote: "Professionelle Umsetzung mit beeindruckendem Ergebnis.",
        name: "Martin Fugmann",
        role: "Schulleiter des Evangelisch Stiftischen Gymnasiums in Gütersloh",
        initials: "MF",
        featured: true,
      },
      {
        quote:
          "Von der ersten Idee bis zur finalen Umsetzung hat alles überzeugt. Kreativ, durchdacht und in herausragender Qualität umgesetzt.",
        name: "Thomas Rimpel",
        role: "Stellvertretender Schulleiter des ESG",
        initials: "TR",
      },
      {
        quote:
          "Schnelle Kommunikation, flexible Umsetzung und fertig in unter 48 Stunden. Das ist wirklich eine Turbozeit!",
        name: "Dr. med. Judith Kreutzheide",
        role: "Fachärztin für Plastische und Ästhetische Chirurgie",
        initials: "JK",
      },
      {
        quote:
          "Wie immer schnell, zuverlässig und professionell umgesetzt. Die Zusammenarbeit war unkompliziert und das Ergebnis überzeugte auf ganzer Linie.",
        name: "Dr. Horst Borcherding",
        role: "Chef der Zahnmedizin am Mohnspark",
        initials: "HB",
      },
    ],
  },

  pricing: {
    eyebrow: "Preise",
    titlePre: "Simpel und einfach –",
    titleHighlight: "unsere Preisgestaltung",
    text: "Transparente Pakete ohne Kleingedrucktes. Wählen Sie, was zu Ihrem Projekt passt.",
    toggle: { once: "Einmalig", monthly: "Monatlich" },
    plans: [
      {
        id: "basic",
        name: "Aero One Basic",
        price: "449 €",
        period: "einmalig",
        type: "once",
        tagline: "Der perfekte Einstieg für professionelle Exposé-Bilder.",
        features: [
          "10 HDR Luftbilder / 1 Video",
          "Professionelle Bearbeitung",
          "Inkl. Nutzungsrechte",
          "48h Lieferung",
          "24/7 Kundenservice",
        ],
        cta: "Jetzt Buchen!",
      },
      {
        id: "retainer",
        name: "Aero One Retainer",
        price: "339 €",
        period: "pro Monat",
        type: "monthly",
        tagline: "Volles Basic-Paket zum günstigen Preis.",
        badge: "Bestseller",
        highlighted: true,
        features: [
          "Alles aus Basic",
          "Monatlich kündbar",
          "Schnitt & Bearbeitung",
          "48h Lieferung",
          "Priorisierter Kundenservice",
        ],
        cta: "Jetzt Buchen!",
      },
      {
        id: "premium",
        name: "Aero One Premium",
        price: "559 €",
        period: "einmalig",
        type: "once",
        tagline: "Beste Reichweite durch Video & Foto – ohne vertragliche Bindung.",
        features: [
          "Alles aus Basic",
          "1 Drohnenvideo in 4K",
          "Inkl. Musiklizenz",
          "48h Lieferung",
          "24/7 Kundenservice",
        ],
        cta: "Jetzt Buchen!",
      },
    ],
    footnote:
      "Alle Pakete inkl. professioneller Bearbeitung & Lieferung in 48h. Individuelle Anfragen jederzeit möglich.",
    immoHeroNote: {
      pre: "Privatkund:in? Pakete ab 79 € gibt es direkt auf ",
      linkLabel: "immohero.org",
      post: ".",
    },
  },

  freyaCta: {
    titlePre: "Sprich mit Freya und bring dein Projekt",
    titleHighlight: "in die Luft.",
    text: "Professionelle Luftbildaufnahmen sind nur einen Klick entfernt.",
    ctaLabel: "Jetzt Buchen!",
    person: {
      name: "Freya Knight",
      role: "Head of Sales",
      email: "aeroonemail@gmail.com",
    },
  },

  contact: {
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
    successMore: "Weitere Anfrage senden",
    error: "Etwas ist schiefgelaufen. Bitte versuche es erneut oder schreib uns direkt.",
    dsgvoPre: "Mit dem Absenden stimmst du der Verarbeitung deiner Angaben zur Bearbeitung deiner Anfrage zu. Weitere Informationen in unserer ",
    dsgvoLinkLabel: "Datenschutzerklärung",
    dsgvoPost: ".",
  },

  footer: {
    tagline: "Professionelle Drohnenvideos für Events · Immobilien · Projekte.",
    award: "Beste Schülerfirma Deutschlands 2026 (IW JUNIOR)",
    colPages: "Seiten",
    colInfo: "Informationen",
    pages: [
      { label: "Home", href: "/" },
      { label: "Leistungen", href: "/#leistungen" },
      { label: "Preise", href: "/#preise" },
      { label: "Presse", href: "/presse" },
      { label: "Kontakt", href: "/kontakt" },
    ],
    legal: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
    ],
    copyright: "Aero One · Gütersloh",
    vision: "Mit ▲ Vision gebaut.",
  },

  notFound: {
    headline: "Diese Seite ist abgehoben.",
    text: "Die gesuchte Seite konnte nicht gefunden werden. Vielleicht hilft ein Blick von oben – zurück zur Startseite.",
    cta: "Zurück zur Startseite",
  },

  presse: {
    intro: {
      eyebrow: "Presse",
      title: "Aero One",
      highlight: "in der Presse",
      text: "Als JUNIOR-Schülerfirma am Evangelisch Stiftischen Gymnasium Gütersloh haben wir 2026 den IW-JUNIOR-Landeswettbewerb NRW und das Bundesfinale in Köln gewonnen – als beste Schülerfirma Deutschlands. Vom 7. bis 10. Juli vertreten wir Deutschland beim Europa-Finale „Gen-E“ in Riga. Eine Auswahl der Berichterstattung:",
    },
    highlights: [
      { label: "Landessieger NRW 2026", sub: "IW JUNIOR Landeswettbewerb" },
      { label: "Bundessieger 2026", sub: "Beste Schülerfirma Deutschlands" },
      { label: "Europa-Finale Riga", sub: "Gen-E · 7.–10. Juli 2026" },
      { label: "13 Medienberichte", sub: "Print · Online · Radio · Social" },
    ],
    kindLabels: {
      print: "Tageszeitung",
      online: "Online",
      radio: "Lokalradio",
      social: "Social Media",
      release: "Pressemitteilung",
    },
    mediaTitlePre: "Der",
    mediaTitleHighlight: "Medienspiegel",
    mediaSub: "Eine Auswahl der Berichterstattung über Aero One in Print, Online, Radio und Social Media.",
    releasesTitlePre: "Offizielle",
    releasesTitleHighlight: "Pressemitteilungen",
    releasesSub: "Mitteilungen direkt von Aero One – zur freien redaktionellen Verwendung.",
    releaseCardKind: "Pressemitteilung",
    toArticle: "Zum Beitrag",
    readRelease: "Pressemitteilung lesen",
    back: "Zurück zur Presse",
    pmEyebrow: "Pressemitteilung",
    materialNote: "Bild- und Videomaterial sowie O-Töne stellen wir auf Anfrage gerne zur Verfügung.",
    contact: {
      title: "Pressekontakt",
      text: "Für Interviews, O-Töne, Foto- und Videomaterial stehen wir gerne zur Verfügung.",
      name: "Jonathan Kreutzheide",
      role: "Geschäftsführer Aero One",
      email: "aeroonemail@gmail.com",
    },
    releases: pressReleases,
  },

  legal: {},
};

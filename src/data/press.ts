/**
 * Pressespiegel — Berichterstattung über Aero One (IW JUNIOR Schülerfirma, ESG Gütersloh).
 * Reihenfolge in der UI: neueste zuerst (wird in der Seite sortiert).
 *
 * Hinweis: Die meisten URLs sind exakte Artikel-Deep-Links (per Recherche verifiziert).
 * Ausnahmen (exact:false) sind paywall-/login-geschützt (KSTA, LinkedIn, Instagram)
 * und verweisen auf die Profil-/Übersichtsseite des Mediums.
 */

export type PressKind = "print" | "online" | "radio" | "social" | "release";

export type PressItem = {
  /** ISO-Datum (YYYY-MM-DD) für Sortierung */
  date: string;
  /** Anzeige-Datum */
  dateLabel: string;
  /** Medium / Herausgeber */
  outlet: string;
  /** Schlagzeile */
  title: string;
  /** Link zum Beitrag (ggf. Übersichtsseite, siehe Hinweis oben) */
  url: string;
  kind: PressKind;
  /** kurzes Label für die Art des Beitrags */
  kindLabel: string;
  /** exakter Deep-Link bestätigt? (sonst Übersichtsseite des Mediums) */
  exact?: boolean;
};

export const pressIntro = {
  eyebrow: "Presse",
  title: "Aero One in der Presse",
  highlight: "in der Presse",
  text:
    "Als JUNIOR-Schülerfirma am Evangelisch Stiftischen Gymnasium Gütersloh haben wir den IW-JUNIOR-Landeswettbewerb NRW gewonnen und beim Bundesfinale in Köln überzeugt. Eine Auswahl der Berichterstattung:",
};

export const pressHighlights = [
  { label: "Landessieger NRW 2026", sub: "IW JUNIOR Landeswettbewerb" },
  { label: "Bundesfinale Köln 2026", sub: "IW JUNIOR Bundeswettbewerb" },
  { label: "12 Medienberichte", sub: "Print · Online · Radio · Social" },
];

export const pressContact = {
  title: "Pressekontakt",
  text: "Für Interviews, O-Töne, Foto- und Videomaterial stehen wir gerne zur Verfügung.",
  name: "Jonathan Kreutzheide",
  role: "Geschäftsführer Aero One",
  email: "aeroonemail@gmail.com",
};

export const pressItems: PressItem[] = [
  {
    date: "2026-06-17",
    dateLabel: "17. Juni 2026",
    outlet: "Neue Westfälische",
    title: "Gütersloher Schülerfirma gewinnt Bundesfinale und ist die beste in ganz Deutschland",
    url: "https://www.nw.de/lokal/kreis_guetersloh/guetersloh/24355521_Guetersloher-Schuelerfirma-gewinnt-Bundesfinale-und-ist-die-beste-in-ganz-Deutschland.html",
    kind: "print",
    kindLabel: "Tageszeitung",
    exact: true,
  },
  {
    date: "2026-06-17",
    dateLabel: "17. Juni 2026",
    outlet: "Kölner Stadt-Anzeiger",
    title: "Bundeswettbewerb der Schülerfirmen: Fünf Minuten, eine Bühne, ein Sieger",
    url: "https://www.ksta.de/wirtschaft",
    kind: "print",
    kindLabel: "Tageszeitung",
  },
  {
    date: "2026-06-17",
    dateLabel: "17. Juni 2026",
    outlet: "Die Glocke",
    title: "Schülerfirma des Evangelisch Stiftischen Gymnasiums Gütersloh ist die beste Deutschlands",
    url: "https://www.die-glocke.de/kreis-guetersloh/guetersloh/artikel/schuelerfirma-des-evangelisch-stiftischen-gymnasiums-guetersloh-ist-die-beste-deutschlands-1781704290",
    kind: "print",
    kindLabel: "Tageszeitung",
    exact: true,
  },
  {
    date: "2026-06-17",
    dateLabel: "17. Juni 2026",
    outlet: "Mynewsdesk · IW JUNIOR",
    title: "AeroOne aus Gütersloh holt sich den Titel „Beste Schülerfirma 2026“",
    url: "https://www.mynewsdesk.com/de/iw-junior/pressreleases/aeroone-vom-evangelisch-stiftischen-gymnasium-aus-guetersloh-holt-sich-den-titel-beste-schuelerfirma-2026-3454598",
    kind: "release",
    kindLabel: "Pressemitteilung",
    exact: true,
  },
  {
    date: "2026-06-17",
    dateLabel: "17. Juni 2026",
    outlet: "unternehmer nrw",
    title: "#schülerfirma #unternehmergeist — Glückwunsch an das Team von AeroOne",
    url: "https://de.linkedin.com/company/unternehmer-nrw",
    kind: "social",
    kindLabel: "LinkedIn",
  },
  {
    date: "2026-06-17",
    dateLabel: "17. Juni 2026",
    outlet: "IW JUNIOR",
    title: "„Genau dafür mache ich das“, strahlt Björn Schnieder beim Bundesfinale",
    url: "https://www.instagram.com/iwjunior/",
    kind: "social",
    kindLabel: "Instagram",
  },
  {
    date: "2026-06-12",
    dateLabel: "12. Juni 2026",
    outlet: "IW JUNIOR",
    title: "Beim IW JUNIOR Landeswettbewerb NRW stehen die Sieger fest",
    url: "https://www.instagram.com/iwjunior/",
    kind: "social",
    kindLabel: "Instagram",
  },
  {
    date: "2026-06-11",
    dateLabel: "11. Juni 2026",
    outlet: "ESbloG",
    title: "AeroOne gewinnt den IW JUNIOR Landeswettbewerb NRW – Einblicke in unseren Weg zum Bundesfinale",
    url: "https://esblog.de/blog/2026/06/11/aeroone-gewinnt-den-iw-junior-landeswettbewerb-nrw-einblicke-in-unseren-weg-zum-bundesfinale/",
    kind: "online",
    kindLabel: "Schul-Blog",
    exact: true,
  },
  {
    date: "2026-06-09",
    dateLabel: "9. Juni 2026",
    outlet: "Neue Westfälische",
    title: "Junge Gütersloher sorgen mit ihrem Unternehmen für Aufsehen in ganz NRW",
    url: "https://www.nw.de/lokal/kreis_guetersloh/guetersloh/24349139_Junge-Guetersloher-sorgen-mit-ihrem-Unternehmen-fuer-Aufsehen-in-ganz-NRW.html",
    kind: "print",
    kindLabel: "Tageszeitung",
    exact: true,
  },
  {
    date: "2026-06-08",
    dateLabel: "8. Juni 2026",
    outlet: "Radio Gütersloh",
    title: "Schülerfirma aus Gütersloh zieht erste Kunden an Land",
    url: "https://www.radioguetersloh.de/nachrichten/kreis-guetersloh/schuelerfirma-aus-guetersloh-zieht-erste-kunden-an-land.html",
    kind: "radio",
    kindLabel: "Lokalradio",
    exact: true,
  },
  {
    date: "2026-06-02",
    dateLabel: "2. Juni 2026",
    outlet: "Die Glocke",
    title: "Gütersloher Schüler gründen eine eigene Firma",
    url: "https://www.die-glocke.de/kreis-guetersloh/guetersloh",
    kind: "print",
    kindLabel: "Tageszeitung",
  },
  {
    date: "2026-05-21",
    dateLabel: "21. Mai 2026",
    outlet: "Mynewsdesk · IW JUNIOR",
    title: "Die beste Schülerfirma aus Nordrhein-Westfalen kommt vom ESG Gütersloh",
    url: "https://www.mynewsdesk.com/de/iw-junior/pressreleases/die-beste-schuelerfirma-aus-nordrhein-westfalen-kommt-vom-evangelisch-stiftischen-gymnasium-aus-guetersloh-3449663",
    kind: "release",
    kindLabel: "Pressemitteilung",
    exact: true,
  },
];

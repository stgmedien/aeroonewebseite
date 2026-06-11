export type Plan = {
  id: string;
  name: string;
  price: string;
  period: string;
  type: "once" | "monthly";
  tagline: string;
  features: string[];
  badge?: string;
  highlighted?: boolean;
  cta: string;
};

/** Pakete aus der bestehenden Seite (Preise unverändert). */
export const plans: Plan[] = [
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
];

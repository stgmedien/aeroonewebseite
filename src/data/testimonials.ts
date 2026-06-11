export type Testimonial = {
  quote: string;
  name: string;
  role: string;
  initials: string;
  featured?: boolean;
};

/** Kundenstimmen aus der bestehenden Seite (wörtlich übernommen). */
export const testimonials: Testimonial[] = [
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
];

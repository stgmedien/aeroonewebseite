/**
 * Offizielle Pressemitteilungen von Aero One.
 * Werden auf /presse gelistet und unter /presse/[slug] als Detailseite gerendert.
 * Body = strukturierte Blöcke; **fett** wird inline gerendert.
 */

export type ReleaseBlock =
  | { t: "p"; text: string }
  | { t: "h2"; text: string }
  | { t: "quote"; text: string; cite: string }
  | { t: "list"; items: string[] };

export type PressRelease = {
  slug: string;
  date: string; // ISO (Sortierung)
  dateLabel: string;
  place: string;
  title: string;
  standfirst: string;
  summary: string;
  blocks: ReleaseBlock[];
  contact: { org: string; name: string; role: string; address: string; email: string };
};

export const pressReleases: PressRelease[] = [
  {
    slug: "beste-schuelerfirma-deutschlands-2026",
    date: "2026-06-18",
    dateLabel: "18. Juni 2026",
    place: "Gütersloh",
    title: "Aero One vom Evangelisch Stiftischen Gymnasium Gütersloh ist „Beste Schülerfirma Deutschlands 2026“",
    standfirst:
      "Beim Bundesfinale des IW-JUNIOR-Wettbewerbs in Köln holt das fünfköpfige Gütersloher Team mit professionellen Drohnenaufnahmen den nationalen Titel und vertritt Deutschland beim Europa-Finale „Gen-E 2026“ in Riga – und Geschäftsführer Jonathan Kreutzheide (16) erhält zusätzlich den Leadership Award von JA – Junior Alumni Germany.",
    summary:
      "Das fünfköpfige ESG-Team gewinnt das IW-JUNIOR-Bundesfinale in Köln, wird beste Schülerfirma Deutschlands 2026 und vertritt Deutschland beim Europa-Finale „Gen-E“ in Riga.",
    blocks: [
      {
        t: "p",
        text: "**Gütersloh / Köln.** Die Schülerfirma **Aero One** des Evangelisch Stiftischen Gymnasiums (ESG) Gütersloh ist die beste Schülerfirma Deutschlands. Beim Bundesfinale des IW-JUNIOR-Wettbewerbs am **16. Juni 2026** im Institut der deutschen Wirtschaft in Köln überzeugte das fünfköpfige Team die achtköpfige Jury und holte den Titel **„Beste Schülerfirma 2026“** nach Ostwestfalen-Lippe – im Finale gegen 13 weitere Siegerteams aus zwölf Bundesländern, bewertet nach Geschäftsidee, Pitch-Deck, Bühnenpräsentation und Jurygespräch.",
      },
      { t: "h2", text: "Professionelle Luftaufnahmen – schnell, digital, rechtssicher abgewickelt" },
      {
        t: "p",
        text: "Aero One liefert **professionelle Drohnenaufnahmen von Gebäuden – Fotos und Videos – für Immobilienmakler:innen, Architekturbüros und Bauprojekte**. Das Besondere am Konzept: Die fertigen Aufnahmen werden innerhalb von **48 Stunden** geliefert, und sämtliche Medien lassen sich zentral über eine digitale Plattform abrufen. Auch um die rechtlichen Rahmenbedingungen kümmert sich das Team selbst – von Fluggenehmigungen über die Drohnenversicherung bis zu erforderlichen Einverständniserklärungen, etwa beim Luftfahrt-Bundesamt.",
      },
      {
        t: "quote",
        text: "Viele wissen gar nicht, dass man eine Drohne an den meisten Orten nicht ohne Genehmigung fliegen lassen darf oder dass eine Drohnenversicherung nötig ist – etwa, falls sie einmal abstürzt.",
        cite: "Jonathan Kreutzheide, Geschäftsführer von Aero One",
      },
      { t: "h2", text: "Vom Schulprojekt zum Bundessieger – wie alles begann" },
      {
        t: "p",
        text: "Den Ursprung hat Aero One im Wahlpflichtfach „Wirtschaft-Medien-Kultur“ (WMK), das Schüler:innen am ESG ab Klasse 9 daran heranführt, ein eigenes Unternehmen aufzubauen. Im **Herbst 2025** kam Mitschüler **Linus Held** mit der Idee auf Jonathan Kreutzheide zu, „etwas mit Drohnen“ zu machen. Bei der Recherche stieß Jonathan auf eine durchschnittliche Antwortzeit von rund drei Wochen in der Branche – und beschloss, es deutlich schneller zu machen. So entstand das Markenversprechen der **48-Stunden-Lieferung**.",
      },
      {
        t: "p",
        text: "Im Dezember stellte das Team seine Idee bei der „Höhle der Stifter“ vor – einem Format am ESG nach dem Vorbild der TV-Show „Höhle der Löwen“, bei dem externe Unternehmer:innen und Berater:innen die Konzepte der Schüler:innen bewerten. Aus der Idee wurde ein Unternehmen mit echten Aufträgen: Bereits **fünf Projekte** hat Aero One realisiert, unter anderem für das Gütersloher Immobilienbüro **Kaup** und die **Concept GT**, die Gesellschaft für Wirtschaftsförderung, Immobilien und Stadtentwicklung der Stadt.",
      },
      {
        t: "p",
        text: "Wie schnell das Konzept ankam, überraschte das Team selbst: Schon nach der ersten Akquise kehrte Vertriebsleiterin **Freya Knight** mit zwei Kund:innen zurück. „Damit hätten wir nie gerechnet“, sagt Kreutzheide.",
      },
      { t: "h2", text: "Ein Geschäftsführer mit 16 – und einer eigenen Holding" },
      {
        t: "p",
        text: "Für Jonathan Kreutzheide ist Aero One nicht das erste Unternehmen: Mit gerade einmal 14 Jahren machte er sich mit einer Produktionsfirma für Werbefilme selbstständig. Heute, mit 16, steht er an der Spitze der Holding **STG Medien**, zu der neben Aero One zwei weitere Firmen gehören. Möglich ist das, weil er gerichtlich für **voll geschäftsfähig** erklärt wurde. „Wenn man durch den Staat nach einem Verfahren als ‚voll geschäftsfähig‘ gesprochen wird, kann man eine Firma führen wie jeder Volljährige auch“, sagt Kreutzheide – ein Weg, der Geduld erforderte: „Auf meinen Antrag beim Amtsgericht kam drei Monate keine Reaktion.“",
      },
      { t: "h2", text: "Das Team" },
      {
        t: "list",
        items: [
          "**Jonathan Kreutzheide** – Geschäftsführung & Co-Gründung",
          "**Linus Held** – Drohnenpilot & Co-Gründung",
          "**Freya Knight** – Vertriebsleitung",
          "**Amy Thomalla** – Vertrieb",
          "**Friedrich Grüninger** – Marketing & Drohnenpilot in Ausbildung",
        ],
      },
      {
        t: "p",
        text: "Begleitet wird das Team von den Betreuungslehrkräften Frau Milse und Johannes Leiskau.",
      },
      { t: "h2", text: "Was dieses Team ausmacht" },
      {
        t: "quote",
        text: "Das Team hat den Sieg verdient: Jonathan Kreutzheide, der zusätzlich den Leadership Award mit nach Hause bringt, Amy Thomalla, Linus Held, Friedrich Grüninger und Freya Knight. Was Johannes Leiskau und mich an diesem Team am meisten beeindruckt, lässt sich nicht in Noten messen: fünf ganz unterschiedliche Köpfe, die sich gegenseitig zuhören, widersprechen und sich immer weiter zusammen entwickeln. Sie sind eigene Wege gegangen, statt vorgegebene abzuarbeiten, haben Verantwortung übernommen, wo es auch mal wehtun kann, und sich eine Stimme erarbeitet, der andere zuhören. Genau das wünsche ich mir von Schule: ein Ort, an dem Lehrkräfte eher Impulsgebende und Begleitende sind, Ermöglichende statt Vorgebende – und an dem wir selbst, gemeinsam mit unseren Schüler:innen, immer wieder Lernende bleiben.",
        cite: "Frau Milse, Betreuungslehrerin",
      },
      { t: "h2", text: "Stimmen aus der Jury" },
      {
        t: "p",
        text: "Schon beim Landessieg fand die Jury klare Worte. „Die beste Schülerfirma in NRW kommt aus Gütersloh!“, verkündete Jurymitglied **Timm Helten-Hildwein** bei der Verleihung. **Tanja Nackmayr**, stellvertretende Hauptgeschäftsführerin von unternehmer nrw, betonte: „Das Projekt vereint unternehmerisches Denken, berufliche Orientierung und unterstützt die persönliche Entwicklung der Schülerinnen und Schüler.“ Moderator **Dr. Wasilios Rodoniklis** nannte die Präsentation der Drohnenaufnahmen für Immobilien, Bau und Architektur schlicht „Weltklasse“.",
      },
      { t: "h2", text: "Nächster Schritt: Europa-Finale „Gen-E 2026“ in Riga" },
      {
        t: "p",
        text: "Mit dem Bundessieg hat sich Aero One für eines der größten Entrepreneurship-Festivals Europas qualifiziert: Vom **7. bis 10. Juli 2026** vertritt das Team Deutschland beim **„Gen-E 2026“ in Riga (Lettland)** – einem Festival mit rund 1.200 Teilnehmenden aus ganz Europa. Dort bewirbt sich Aero One um den Titel „JA Europe Company of the Year 2026“.",
      },
      {
        t: "p",
        text: "Im Jahr der Fußball-Weltmeisterschaft bekommt der Wettstreit eine sportliche Note: Einen prominenten Auftrag gab IW-Direktor Michael Hüther dem Team mit auf den Weg zum Europa-Finale nach Riga.",
      },
      {
        t: "quote",
        text: "Aero One, holt den Cup für uns nach Deutschland!",
        cite: "Michael Hüther, Direktor des Instituts der deutschen Wirtschaft",
      },
      {
        t: "quote",
        text: "Dass wir uns gegen die besten Schülerfirmen Deutschlands durchsetzen konnten, fühlt sich noch immer unwirklich an – und wir können es kaum erwarten, in Riga für Deutschland anzutreten.",
        cite: "Amy Thomalla, Vertrieb bei Aero One",
      },
      {
        t: "p",
        text: "Der IW-JUNIOR-Wettbewerb wird von der IW JUNIOR gGmbH, einer Tochtergesellschaft des Instituts der deutschen Wirtschaft, ausgerichtet. Das Programm bringt Schüler:innen an echtes unternehmerisches Handeln heran – von der Gründung über Produktion und Vertrieb bis zum Jahresabschluss.",
      },
      { t: "h2", text: "Vorbild für die Region – ein Aufruf zum Mitmachen" },
      {
        t: "p",
        text: "Wenn ein Team aus Gütersloh Deutschland in Riga vertritt, zeigt das, was in Ostwestfalen-Lippe möglich ist. Die Betreuungslehrkräfte werben deshalb dafür, das von **Jörg Rodehutskors** und der **IMA Innovationsmanufaktur Gütersloh GmbH** ins Leben gerufene „Netzwerk Entrepreneurship und Bildung im Kreis GT“ weiter auszubauen. Unternehmen aus der Region können sich einbringen – indem sie Schüler:innen stundenweise Einblicke in ihre Fachabteilungen geben, als Mentor:innen für Pitch- und Gründungsprojekte zur Verfügung stehen oder Praxisaufgaben für Schülerfirmen wie Aero One bereitstellen. Dabei lernen sie vielleicht schon ihre zukünftigen Mitarbeiter:innen kennen. Wer Teil davon werden möchte, ist eingeladen, sich direkt an das Team zu wenden.",
      },
      { t: "h2", text: "Über Aero One" },
      {
        t: "p",
        text: "Aero One ist eine JUNIOR-Schülerfirma am Evangelisch Stiftischen Gymnasium Gütersloh und auf professionelle Luftbild- und Luftvideoaufnahmen per Drohne spezialisiert. Das Angebot richtet sich an Immobilien-, Bau- und Architekturkundschaft sowie an Unternehmen, die Projekte und Standorte wirkungsvoll präsentieren möchten. Aero One holte 2026 den Landessieg in NRW und den Bundessieg des IW-JUNIOR-Wettbewerbs; Geschäftsführer Jonathan Kreutzheide wurde zusätzlich mit dem Leadership Award von JA – Junior Alumni Germany ausgezeichnet.",
      },
    ],
    contact: {
      org: "Aero One",
      name: "Freya Knight",
      role: "Vertriebsleiterin",
      address: "Feldstraße 13, 33330 Gütersloh",
      email: "aeroonemail@gmail.com",
    },
  },
];

export function getRelease(slug: string): PressRelease | undefined {
  return pressReleases.find((r) => r.slug === slug);
}

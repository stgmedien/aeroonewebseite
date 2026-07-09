import { Marquee } from "@/components/ui/Marquee";
import { pressItems } from "@/data/press";

/**
 * Presse-Schlagzeilen-Marquee — schmales Laufband mit echten Headlines.
 *
 * Es werden nur verifizierte Deep-Links (exact === true) gezeigt,
 * sortiert nach Datum absteigend, maximal 6 Einträge.
 *
 * Hinweis: Die Schlagzeilen sind deutsche Original-Zitate der Medien und
 * bleiben bewusst in beiden Sprachen unverändert (Zitat-Charakter).
 */
export function PressMarquee({
  label,
  locale,
}: {
  label: string;
  locale: "de" | "en";
}) {
  // Nur bestätigte Artikel-Links, neueste zuerst, die ersten 6
  const items = pressItems
    .filter((item) => item.exact === true)
    .sort((a, b) => b.date.localeCompare(a.date))
    .slice(0, 6);

  return (
    <section className="relative border-y border-white/8 py-10">
      <div className="container-x text-center">
        <p className="text-xs uppercase tracking-[0.2em] text-fg-muted">
          {label}
        </p>
      </div>

      <div className="mt-6">
        {/* reverse: läuft entgegen dem LogoStrip — klar unterscheidbar */}
        <Marquee className="mask-fade-x" reverse>
          {items.map((item) => (
            <a
              key={item.url + item.date}
              href={item.url}
              target="_blank"
              rel="noopener noreferrer"
              // Zitate sind deutsch — im EN-Kontext explizit auszeichnen
              lang={locale === "en" ? "de" : undefined}
              className="whitespace-nowrap text-sm text-fg-muted transition-colors duration-300 hover:text-fg"
            >
              <span className="font-semibold text-ember">
                &bdquo;{item.outlet}&ldquo;
              </span>
              <span aria-hidden className="mx-2 text-fg-muted/50">
                &middot;
              </span>
              {item.title}
            </a>
          ))}
        </Marquee>
      </div>
    </section>
  );
}

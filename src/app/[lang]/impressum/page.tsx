import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { getDict, isLocale } from "@/i18n";

export const metadata: Metadata = {
  title: "Impressum",
  description: "Impressum der Aero One – Angaben gemäß § 5 DDG.",
  alternates: { languages: { de: "/impressum", en: "/en/impressum" } },
};

export default async function ImpressumPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = getDict(isLocale(lang) ? lang : "de");
  return (
    <LegalShell title="Impressum" updated="Stand: März 2026">
      {d.legal.germanBindingNote && (
        <p className="rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-fg-muted">
          {d.legal.germanBindingNote}
        </p>
      )}
      <h2>Angaben gemäß § 5 DDG</h2>
      <p>
        <strong>Aero One</strong>
        <br />
        Feldstraße 13
        <br />
        33330 Gütersloh
      </p>

      <h2>Vertreten durch</h2>
      <p>Jonathan Kreutzheide</p>

      <h2>Kontakt</h2>
      <p>
        E-Mail: <a href="mailto:aeroonemail@gmail.com">aeroonemail@gmail.com</a>
      </p>

      <h2>Verantwortlich für den Inhalt nach § 18 Abs. 2 MStV</h2>
      <p>
        Jonathan Kreutzheide
        <br />
        Feldstraße 13
        <br />
        33330 Gütersloh
      </p>

      <h2>Verbraucherstreitbeilegung / Universalschlichtungsstelle</h2>
      <p>
        Wir nehmen an einem Streitbeilegungsverfahren vor einer
        Verbraucherschlichtungsstelle teil. Zuständig ist die
        Universalschlichtungsstelle des Zentrums für Schlichtung e.&nbsp;V.,
        Straßburger Straße 8, 77694 Kehl am Rhein, Website:{" "}
        <a href="https://www.verbraucher-schlichter.de" target="_blank" rel="noopener noreferrer">
          www.verbraucher-schlichter.de
        </a>
        .
      </p>

      <h2>Haftungsausschluss</h2>

      <h3>Haftung für Links</h3>
      <p>
        Unser Angebot enthält Links zu externen Webseiten Dritter, auf deren
        Inhalte wir keinen Einfluss haben. Deshalb können wir für diese fremden
        Inhalte auch keine Gewähr übernehmen. Für die Inhalte der verlinkten
        Seiten ist stets der jeweilige Anbieter oder Betreiber der Seiten
        verantwortlich. Die verlinkten Seiten wurden zum Zeitpunkt der
        Verlinkung auf mögliche Rechtsverstöße überprüft. Rechtswidrige Inhalte
        waren zum Zeitpunkt der Verlinkung nicht erkennbar. Eine permanente
        inhaltliche Kontrolle der verlinkten Seiten ist jedoch ohne konkrete
        Anhaltspunkte einer Rechtsverletzung nicht zumutbar. Bei Bekanntwerden
        von Rechtsverletzungen werden wir derartige Links umgehend entfernen.
      </p>

      <h3>Urheberrecht</h3>
      <p>
        Die durch die Seitenbetreiber erstellten Inhalte und Werke auf diesen
        Seiten unterliegen dem deutschen Urheberrecht. Die Vervielfältigung,
        Bearbeitung, Verbreitung und jede Art der Verwertung außerhalb der
        Grenzen des Urheberrechtes bedürfen der schriftlichen Zustimmung des
        jeweiligen Autors bzw. Erstellers. Downloads und Kopien dieser Seite
        sind nur für den privaten, nicht kommerziellen Gebrauch gestattet.
        Soweit die Inhalte auf dieser Seite nicht vom Betreiber erstellt wurden,
        werden die Urheberrechte Dritter beachtet. Insbesondere werden Inhalte
        Dritter als solche gekennzeichnet. Sollten Sie trotzdem auf eine
        Urheberrechtsverletzung aufmerksam werden, bitten wir um einen
        entsprechenden Hinweis. Bei Bekanntwerden von Rechtsverletzungen werden
        wir derartige Inhalte umgehend entfernen.
      </p>
    </LegalShell>
  );
}

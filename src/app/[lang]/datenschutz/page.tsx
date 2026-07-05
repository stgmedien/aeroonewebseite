import type { Metadata } from "next";
import { LegalShell } from "@/components/layout/LegalShell";
import { getDict, isLocale } from "@/i18n";

export const metadata: Metadata = {
  title: "Datenschutz",
  description: "Datenschutzerklärung der Aero One gemäß DSGVO.",
  alternates: { languages: { de: "/datenschutz", en: "/en/datenschutz" } },
};

export default async function DatenschutzPage({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  const d = getDict(isLocale(lang) ? lang : "de");
  return (
    <LegalShell title="Datenschutzerklärung" updated="Stand: März 2026">
      {/* Interner Vermerk: DSE wurde an den neuen Stack angepasst (Hosting, Fonts,
          Kontaktformular) — finale rechtliche Prüfung durch Fachanwalt steht aus. */}
      {d.legal.germanBindingNote && (
        <p className="rounded-2xl border border-white/15 bg-white/5 p-4 text-sm text-fg-muted">
          {d.legal.germanBindingNote}
        </p>
      )}
      <h2>1. Verantwortlicher</h2>
      <p>
        Verantwortlich für die Datenverarbeitung auf dieser Website ist:
        <br />
        <strong>Aero One</strong> – Jonathan Kreutzheide, Linus Held, Freya
        Knight, Friedrich Grüninger
        <br />
        Feldstraße 13, 33330 Gütersloh, Deutschland
        <br />
        E-Mail: <a href="mailto:aeroonemail@gmail.com">aeroonemail@gmail.com</a>
      </p>
      <p>
        Zuständig für Datenschutzanfragen: Freya Knight (Kontaktdaten siehe
        Impressum).
      </p>

      <h2>2. Allgemeines zur Datenverarbeitung</h2>
      <p>
        Wir verarbeiten personenbezogene Daten nur, soweit dies zur
        Bereitstellung einer funktionsfähigen Website sowie unserer Inhalte und
        Leistungen erforderlich ist. Rechtsgrundlagen sind insbesondere Art. 6
        Abs. 1 lit. a (Einwilligung), lit. b (Vertrag/Anbahnung) und lit. f
        (berechtigtes Interesse) DSGVO.
      </p>

      <h2>3. Hosting</h2>
      <p>
        Diese Website wird bei der Vercel Inc. (440 N Barranca Ave #4133,
        Covina, CA 91723, USA) gehostet. Beim Aufruf der Seite werden technisch
        notwendige Daten (z.&nbsp;B. IP-Adresse, Zeitpunkt, abgerufene Ressource,
        Browser-Typ) in Server-Logfiles verarbeitet, um Auslieferung und
        Sicherheit zu gewährleisten (Art. 6 Abs. 1 lit. f DSGVO). Mit dem
        Anbieter besteht bzw. wird ein Auftragsverarbeitungsvertrag geschlossen;
        Datenübermittlungen in Drittländer werden über
        EU-Standardvertragsklauseln abgesichert.
      </p>

      <h2>4. SSL-/TLS-Verschlüsselung</h2>
      <p>
        Diese Seite nutzt aus Sicherheitsgründen eine SSL-/TLS-Verschlüsselung.
        Eine verschlüsselte Verbindung erkennen Sie an „https://“ und dem
        Schloss-Symbol in der Adresszeile Ihres Browsers.
      </p>

      <h2>5. Schriftarten</h2>
      <p>
        Schriftarten (Inter, Plus Jakarta Sans) werden lokal von unserem Server
        ausgeliefert (self-hosted). Es besteht <strong>keine</strong> Verbindung
        zu externen Font-CDNs wie Google Fonts; es werden hierfür keine Daten an
        Dritte übertragen.
      </p>

      <h2>6. Cookies</h2>
      <p>
        Unsere Website setzt standardmäßig keine Tracking- oder Marketing-Cookies
        ein. Technisch notwendige Cookies werden nur verwendet, soweit sie für
        den Betrieb erforderlich sind (Art. 6 Abs. 1 lit. f DSGVO). Sollten
        künftig einwilligungspflichtige Cookies eingesetzt werden, holen wir Ihre
        Einwilligung zuvor über einen Consent-Banner ein.
      </p>

      <h2>7. Kontaktformular &amp; Anfragen</h2>
      <p>
        Wenn Sie uns über das Kontaktformular eine Anfrage senden, verarbeiten
        wir die von Ihnen angegebenen Daten (Name, E-Mail-Adresse, Nachricht
        sowie die Angabe, ob Sie bereits Kunde sind) zur Bearbeitung Ihrer
        Anfrage und für etwaige Anschlussfragen (Art. 6 Abs. 1 lit. b und lit. f
        DSGVO). Zur Speicherung kann eine Datenbank (Neon, gehostet in der EU)
        eingesetzt werden. Die Daten werden gelöscht, sobald sie für die
        Zweckerreichung nicht mehr erforderlich sind, spätestens nach Ablauf
        gesetzlicher Aufbewahrungsfristen.
      </p>

      <h2>8. Buchung über immohero.org</h2>
      <p>
        Für Buchungen werden Sie zu unserem Partner immohero.org weitergeleitet.
        Für die dortige Verarbeitung Ihrer Daten gilt die Datenschutzerklärung
        des jeweiligen Anbieters.
      </p>

      <h2>9. Social-Media-Präsenzen</h2>
      <p>
        Wir sind auf Instagram, YouTube und X (Twitter) vertreten. Beim Besuch
        dieser Profile gelten die Datenschutzbestimmungen des jeweiligen
        Plattformbetreibers. Auf unserer Website sind lediglich Verlinkungen
        gesetzt; es werden keine Social-Media-Plugins eingebunden, die
        automatisch Daten an die Plattformen übertragen.
      </p>

      <h2>10. Ihre Rechte</h2>
      <p>Ihnen stehen gegenüber uns folgende Rechte hinsichtlich Ihrer Daten zu:</p>
      <ul>
        <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
        <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
        <li>Recht auf Löschung (Art. 17 DSGVO)</li>
        <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
        <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
        <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
        <li>Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</li>
      </ul>

      <h2>11. Beschwerderecht bei der Aufsichtsbehörde</h2>
      <p>
        Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu
        beschweren. Zuständig ist die Landesbeauftragte für Datenschutz und
        Informationsfreiheit Nordrhein-Westfalen (LDI NRW),{" "}
        <a href="https://www.ldi.nrw.de" target="_blank" rel="noopener noreferrer">
          www.ldi.nrw.de
        </a>
        .
      </p>

      <h2>12. Änderung dieser Datenschutzerklärung</h2>
      <p>
        Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie
        stets den aktuellen rechtlichen Anforderungen entspricht oder um
        Änderungen unserer Leistungen umzusetzen. Für Ihren erneuten Besuch gilt
        dann die neue Datenschutzerklärung.
      </p>
    </LegalShell>
  );
}

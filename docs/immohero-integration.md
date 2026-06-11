# ImmoHero-Integration — Umsetzungsplan

**Ausgangslage:** ImmoHero.org gehört zur selben Firma — wir haben Zugriff auf beide Seiten (Aero-One-Website **und** ImmoHero-Backend/Code). Es muss also nichts „angefragt" werden; wir richten ein und bauen direkt. Ziel: Die 3 Pakete (Basic 449 € · Retainer 339 €/Monat · Premium 559 €) über ImmoHero buchbar **und** bezahlbar machen. Unsere Seite ist vorbereitet: alle „Jetzt Buchen"-CTAs laufen zentral über `bookingUrl(plan)` in `src/lib/immohero.ts` — wir hängen die Integration nur an einer Stelle ein.

## Umsetzung in 3 Stufen (von schnell-live zu tief integriert)

### Stufe 1 — Deep-Link / gehosteter Checkout *(sofort launch-fähig)*
- In ImmoHero die 3 Pakete als buchbare Produkte anlegen (machen wir selbst) → je ein fester **Buchungs-/Checkout-Link** bzw. eine **Produkt-ID**.
- Website: `bookingUrl(plan)` auf die echten Links mappen, konfigurierbar per Env (`NEXT_PUBLIC_BOOKING_URL` + optional je Paket). Eine Config-Änderung, fertig.
- ImmoHero übernimmt Zahlung, Termin und Rechnung. → schnellster Weg zu „sofort buchbar", reicht fürs Go-Live.

### Stufe 2 — API-Anbindung *(nahtloser Start auf unserer Seite)*
- In ImmoHero einen **API-Key** + Endpoint „Buchung/Bestellung anlegen" bereitstellen (Sandbox + Produktion).
- Website: Next.js Route Handler `/api/booking` nimmt Paket + (optional) vorausgefüllte Kundendaten aus unserem Formular, ruft ImmoHero **serverseitig** auf, erhält eine Checkout-URL/Session zurück und leitet den Kunden dorthin. API-Key bleibt serverseitig (Vercel-Env `IMMOHERO_API_KEY`, `IMMOHERO_API_URL`).
- Vorteil: Buchung startet auf unserer Seite, Vorbefüllung, saubere Referenz-ID. **Kartendaten bleiben bei ImmoHero** (PCI-sicher).

### Stufe 3 — Webhooks + Sync *(Status zurück)*
- ImmoHero sendet bei „bezahlt / storniert / erstattet" einen Webhook an `/api/immohero/webhook`.
- Website: Signatur per Shared-Secret (HMAC) verifizieren → Buchung/Lead in **Neon** speichern, **Bestätigungsmail** auslösen, **Conversion** in Analytics zählen, Danke-Seite zeigen.

## Was wir dafür in ImmoHero einstellen / nachsehen (eigenes System)
- **API vorhanden?** Wenn ja: Basis-URL + API-Key. Wenn nein: Wir ergänzen im ImmoHero-Code einen schlanken Checkout-Link bzw. einen kleinen „Buchung anlegen"-Endpoint — geht problemlos, da es unser eigener Code ist.
- **Pro Paket:** Produkt-/Preis-ID bzw. fertiger Buchungs-Link (inkl. Monats-Abo für den Retainer).
- **Webhook:** Event-Format + Signatur-Secret.
- **Bestätigen:** Zahlung, MwSt-Ausweis/Rechnung und Terminbuchung laufen in ImmoHero.
- **Datenschutz:** AV-Vertrag entfällt (gleiche Firma); in unserer Datenschutzerklärung ImmoHero einfach als firmeneigenen Dienst für die Buchungsabwicklung nennen.

## Reihenfolge
1. **Jetzt:** Stufe 1 (Deep-Links) → Seite ist buchbar, launch-fähig.
2. **Danach:** Stufe 2 (API) → nahtloser Start + Vorbefüllung.
3. **Dann:** Stufe 3 (Webhooks) → Bestätigung, Tracking, Neon-Persistenz.

## Sofort-Start
Um Stufe 1 scharf zu schalten, brauche ich nur die **3 echten Buchungs-Links/Produkt-IDs** aus ImmoHero — oder die Bestätigung, dass ein Parameter wie `?paket=basic|retainer|premium` funktioniert. Dann ist die Seite mit einer Config-Änderung buchbar.

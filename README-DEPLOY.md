# Aero One — Deploy-Anleitung (Vercel)

Next.js 16 App. Repo-Root = App-Root. Kein Build-Setup nötig — Vercel erkennt alles automatisch.

## Einmalig: Repo importieren (≈ 1 Minute)

1. [vercel.com/new](https://vercel.com/new) öffnen → GitHub-Repo **stgmedien/aeroonewebseite** wählen („Import").
2. Alle Einstellungen so lassen (Framework: Next.js · Root Directory: `./` · keine Env-Variablen nötig) → **Deploy** klicken.
3. Fertig — die Seite läuft unter `https://<projekt>.vercel.app`. Jeder Push auf `main` deployt ab jetzt automatisch.

## Domain aeroone.eu aufschalten (der einzige offene Schritt)

1. Im Vercel-Projekt: **Settings → Domains → Add** → `aeroone.eu` eintragen (und danach `www.aeroone.eu`, Redirect auf Apex bestätigen).
2. Beim Domain-Anbieter (wo aeroone.eu liegt, aktuell Framer-DNS) diese Records setzen:

   | Typ | Name | Wert |
   |---|---|---|
   | A | `@` | `76.76.21.21` |
   | CNAME | `www` | `cname.vercel-dns.com` |

3. Alte Framer-Records für `@`/`www` entfernen. SSL stellt Vercel automatisch aus (wenige Minuten).

## Env-Variablen (erst für spätere Integrationen)

Siehe `.env.example` — aktuell alles optional:
- `DATABASE_URL` (Neon) · `NEXT_PUBLIC_BOOKING_URL` (immohero) · `CONTACT_TO`

## Lokal

```bash
npm install && npm run dev   # http://localhost:3000
```

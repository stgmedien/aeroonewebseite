import { NextResponse } from "next/server";
import { getSql } from "@/lib/db";

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ ok: false, error: "invalid json" }, { status: 400 });
  }

  const name = String(body.name ?? "").trim();
  const email = String(body.email ?? "").trim();
  const message = String(body.message ?? "").trim();
  const customer = String(body.customer ?? "");

  if (!name || !email || !message || !EMAIL_RE.test(email)) {
    return NextResponse.json({ ok: false, error: "missing or invalid fields" }, { status: 422 });
  }

  // Persistenz via Neon — aktiv, sobald DATABASE_URL + Tabelle `leads` existieren.
  const sql = getSql();
  if (sql) {
    try {
      await sql`
        insert into leads (name, email, message, is_customer)
        values (${name}, ${email}, ${message}, ${customer === "Ja"})
      `;
    } catch (err) {
      // Tabelle evtl. noch nicht migriert — Anfrage trotzdem annehmen.
      console.error("[contact] DB insert failed:", err);
    }
  } else {
    console.log("[contact] Neue Anfrage (keine DB konfiguriert):", { name, email, customer });
  }

  // TODO: Benachrichtigung an CONTACT_TO senden (E-Mail-Integration folgt).

  return NextResponse.json({ ok: true });
}

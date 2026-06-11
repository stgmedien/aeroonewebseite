/**
 * Neon (Postgres) — Scaffolding.
 *
 * Liefert einen lazy SQL-Client, sobald DATABASE_URL gesetzt ist (Vercel/Neon).
 * Ohne Verbindung gibt `getSql()` null zurück, damit lokale Builds & Previews
 * ohne DB funktionieren. Anbindung (z. B. Kontaktanfragen/Leads persistieren)
 * folgt mit den weiteren Integrationsinfos.
 *
 * Beispiel-Schema (später per Migration anlegen):
 *   create table leads (
 *     id          uuid primary key default gen_random_uuid(),
 *     name        text not null,
 *     email       text not null,
 *     message     text not null,
 *     is_customer boolean default false,
 *     created_at  timestamptz default now()
 *   );
 */
import { neon, type NeonQueryFunction } from "@neondatabase/serverless";

let _sql: NeonQueryFunction<false, false> | null | undefined;

export function getSql(): NeonQueryFunction<false, false> | null {
  if (_sql !== undefined) return _sql;
  const url = process.env.DATABASE_URL;
  _sql = url ? neon(url) : null;
  return _sql;
}

export function isDbConfigured(): boolean {
  return Boolean(process.env.DATABASE_URL);
}

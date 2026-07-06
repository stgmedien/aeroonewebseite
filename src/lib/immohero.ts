/**
 * immohero.org-Anbindung (Buchung / Checkout).
 *
 * Aktuell: zentrale Buchungs-URL — alle "Jetzt Buchen!"-CTAs laufen hierüber.
 * Später: pro Paket parametrisieren (z. B. ?plan=retainer) bzw. echten
 * Checkout-/Deep-Link aufbauen, sobald die immohero-Integrationsinfos vorliegen.
 */
import { BOOKING_URL, ONBOARDING_URL } from "@/data/nav";

export type PlanId = "basic" | "retainer" | "premium";

export function bookingUrl(plan?: PlanId): string {
  const base = process.env.NEXT_PUBLIC_BOOKING_URL || BOOKING_URL;
  if (!plan) return base;
  try {
    const url = new URL(base);
    url.searchParams.set("plan", plan);
    return url.toString();
  } catch {
    return base;
  }
}

/** Netzwerk-Beitritt (Pilot:innen/Videograf:innen/Fotograf:innen) — Platzhalter bis der finale Link vorliegt. */
export function onboardingUrl(): string {
  return process.env.NEXT_PUBLIC_ONBOARDING_URL || ONBOARDING_URL;
}

import type { MetadataRoute } from "next";
import { pressReleases } from "@/data/pressReleases";

const BASE = "https://www.aeroone.eu";

/** Alle Routen in beiden Sprachen inkl. hreflang-Alternates. */
export default function sitemap(): MetadataRoute.Sitemap {
  const paths = [
    "",
    "/ueber-uns",
    "/kontakt",
    "/faq",
    "/presse",
    ...pressReleases.map((r) => `/presse/${r.slug}`),
    "/impressum",
    "/datenschutz",
  ];

  return paths.map((p) => ({
    url: `${BASE}${p || "/"}`,
    lastModified: new Date(),
    changeFrequency: p.startsWith("/presse") ? ("weekly" as const) : ("monthly" as const),
    priority: p === "" ? 1 : p.startsWith("/presse") ? 0.8 : 0.5,
    alternates: {
      languages: {
        de: `${BASE}${p || "/"}`,
        en: `${BASE}/en${p}`,
      },
    },
  }));
}

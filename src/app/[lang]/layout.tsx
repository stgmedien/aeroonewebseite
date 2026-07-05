import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import "../globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";
import { getDict, isLocale, locales } from "@/i18n";

const inter = localFont({
  src: "../../fonts/inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const jakarta = localFont({
  src: "../../fonts/plus-jakarta-sans.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

/** Nur de/en werden gebaut; alles andere → 404. */
export const dynamicParams = false;

export function generateStaticParams() {
  return locales.map((lang) => ({ lang }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ lang: string }>;
}): Promise<Metadata> {
  const { lang } = await params;
  if (!isLocale(lang)) return {};
  const d = getDict(lang);
  return {
    metadataBase: new URL("https://www.aeroone.eu"),
    title: {
      default: d.meta.title,
      template: "%s · Aero One",
    },
    description: d.meta.description,
    keywords: [
      "Drohnenaufnahmen",
      "Luftbildaufnahmen",
      "Immobilien",
      "Drohnenvideo",
      "Gütersloh",
      "Aero One",
      "Schülerfirma",
      "IW JUNIOR",
      "Bundessieger 2026",
      "Gen-E",
      "drone footage",
      "aerial photography",
      "best student company Germany",
    ],
    openGraph: {
      title: d.meta.ogTitle,
      description: d.meta.ogDescription,
      type: "website",
      locale: lang === "en" ? "en_US" : "de_DE",
      siteName: "Aero One",
      images: [
        {
          url: "/og-image.jpg",
          width: 1200,
          height: 630,
          alt: d.meta.ogTitle,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
    },
  };
}

export const viewport: Viewport = {
  themeColor: "#1a1615",
  width: "device-width",
  initialScale: 1,
};

export default async function RootLayout({
  children,
  params,
}: Readonly<{ children: React.ReactNode; params: Promise<{ lang: string }> }>) {
  const { lang } = await params;
  if (!isLocale(lang)) notFound();
  const d = getDict(lang);

  return (
    <html lang={lang} className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-ink text-fg antialiased">
        <AnnouncementBar t={d.announcement} />
        <Navbar t={d.nav} locale={lang} />
        <main>{children}</main>
        <Footer t={d.footer} locale={lang} />
        <div className="grain-overlay" aria-hidden />
      </body>
    </html>
  );
}

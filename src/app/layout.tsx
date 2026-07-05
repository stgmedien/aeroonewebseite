import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { AnnouncementBar } from "@/components/layout/AnnouncementBar";

const inter = localFont({
  src: "../fonts/inter.woff2",
  variable: "--font-inter",
  weight: "100 900",
  display: "swap",
});

const jakarta = localFont({
  src: "../fonts/plus-jakarta-sans.woff2",
  variable: "--font-jakarta",
  weight: "200 800",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.aeroone.eu"),
  title: {
    default: "Aero One – Professionelle Luftbildaufnahmen",
    template: "%s · Aero One",
  },
  description:
    "Drohnenvideos in unter 48h – ausgezeichnet als beste Schülerfirma Deutschlands 2026 (IW JUNIOR). Germany's Best Student Company 2026: professional drone footage for real estate, delivered within 48 hours.",
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
    "best student company Germany",
  ],
  openGraph: {
    title: "Aero One – Beste Schülerfirma Deutschlands 2026",
    description:
      "Drohnenvideos in unter 48h für Immobilien, Events und Projekte. Germany's Best Student Company 2026 (IW JUNIOR) – representing Germany at Gen-E 2026 in Riga.",
    type: "website",
    locale: "de_DE",
    siteName: "Aero One",
  },
  twitter: {
    card: "summary_large_image",
  },
};

export const viewport: Viewport = {
  themeColor: "#1a1615",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="de" className={`${inter.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-ink text-fg antialiased">
        <AnnouncementBar />
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div className="grain-overlay" aria-hidden />
      </body>
    </html>
  );
}

import type { Metadata, Viewport } from "next";
import localFont from "next/font/local";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

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
  metadataBase: new URL("https://aeroone.eu"),
  title: {
    default: "Aero One – Professionelle Luftbildaufnahmen",
    template: "%s · Aero One",
  },
  description:
    "Drohnenvideos in unter 48h. Fertig bearbeitete, hochqualitative und professionelle Luftbildaufnahmen für Immobilien, Events und Projekte.",
  keywords: [
    "Drohnenaufnahmen",
    "Luftbildaufnahmen",
    "Immobilien",
    "Drohnenvideo",
    "Gütersloh",
    "Aero One",
  ],
  openGraph: {
    title: "Aero One – Professionelle Luftbildaufnahmen",
    description:
      "Drohnenvideos in unter 48h für Immobilien, Events und Projekte.",
    type: "website",
    locale: "de_DE",
    siteName: "Aero One",
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
        <Navbar />
        <main>{children}</main>
        <Footer />
        <div className="grain-overlay" aria-hidden />
      </body>
    </html>
  );
}

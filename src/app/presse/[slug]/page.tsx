import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, Mail, Quote } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { pressReleases, getRelease, type ReleaseBlock } from "@/data/pressReleases";

export function generateStaticParams() {
  return pressReleases.map((r) => ({ slug: r.slug }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const release = getRelease(slug);
  if (!release) return { title: "Pressemitteilung" };
  return {
    title: `${release.title} – Pressemitteilung`,
    description: release.summary,
  };
}

/** Rendert **fett** inline, sonst Klartext. */
function Rich({ text }: { text: string }) {
  const parts = text.split(/\*\*(.+?)\*\*/g);
  return (
    <>
      {parts.map((p, i) => (i % 2 === 1 ? <strong key={i} className="font-semibold text-fg">{p}</strong> : p))}
    </>
  );
}

function Block({ block }: { block: ReleaseBlock }) {
  switch (block.t) {
    case "h2":
      return (
        <h2 className="mt-12 font-display text-2xl font-extrabold tracking-tight text-fg sm:text-3xl">
          {block.text}
        </h2>
      );
    case "p":
      return (
        <p className="mt-5 text-lg leading-relaxed text-fg-muted">
          <Rich text={block.text} />
        </p>
      );
    case "list":
      return (
        <ul className="mt-5 space-y-2.5">
          {block.items.map((item, i) => (
            <li key={i} className="flex gap-3 text-lg text-fg-muted">
              <span className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-sunset" />
              <span><Rich text={item} /></span>
            </li>
          ))}
        </ul>
      );
    case "quote":
      return (
        <figure className="mt-8 rounded-2xl glass-strong p-6 sm:p-7">
          <Quote size={22} className="text-ember" />
          <blockquote className="mt-3 font-display text-xl font-semibold leading-snug text-fg sm:text-2xl">
            „{block.text}“
          </blockquote>
          <figcaption className="mt-4 text-sm font-medium text-fg-muted">— {block.cite}</figcaption>
        </figure>
      );
  }
}

export default async function PressReleasePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const release = getRelease(slug);
  if (!release) notFound();

  return (
    <section className="relative isolate overflow-hidden pt-32 pb-24 sm:pt-40">
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-80 w-[44rem] max-w-[92%] -translate-x-1/2 rounded-full bg-ember/20 blur-[120px]" />
      <div className="container-x">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <Link
              href="/presse"
              className="inline-flex items-center gap-1.5 text-sm font-medium text-fg-muted transition-colors hover:text-fg"
            >
              <ArrowLeft size={16} /> Zurück zur Presse
            </Link>
          </Reveal>

          <header className="mt-6">
            <Reveal>
              <div className="flex flex-wrap items-center gap-3">
                <SectionLabel>Pressemitteilung</SectionLabel>
                <span className="text-sm font-medium text-fg-muted">
                  {release.place}, {release.dateLabel}
                </span>
              </div>
            </Reveal>
            <Reveal delay={0.1}>
              <h1 className="mt-6 font-display text-3xl font-extrabold leading-[1.1] tracking-tight sm:text-4xl md:text-[2.75rem]">
                {release.title}
              </h1>
            </Reveal>
            <Reveal delay={0.15}>
              <p className="mt-6 border-l-2 border-ember/60 pl-5 text-lg font-medium leading-relaxed text-fg">
                {release.standfirst}
              </p>
            </Reveal>
          </header>

          <Reveal delay={0.1}>
            <div className="mt-4">
              {release.blocks.map((block, i) => (
                <Block key={i} block={block} />
              ))}
            </div>
          </Reveal>

          {/* Pressekontakt */}
          <Reveal delay={0.1}>
            <div className="mt-14 rounded-[1.5rem] glass-strong p-7">
              <h2 className="font-display text-xl font-extrabold tracking-tight">Pressekontakt</h2>
              <p className="mt-3 text-fg-muted">
                <span className="font-semibold text-fg">{release.contact.org}</span>
                <br />
                {release.contact.name} ({release.contact.role})
                <br />
                {release.contact.address}
              </p>
              <a
                href={`mailto:${release.contact.email}`}
                className="mt-5 inline-flex items-center gap-2.5 rounded-full bg-sunset px-6 py-3 font-semibold text-ink-deep shadow-glow transition-transform duration-300 hover:-translate-y-0.5"
              >
                <Mail size={18} />
                {release.contact.email}
              </a>
              <p className="mt-5 text-sm text-fg-muted">
                Bild- und Videomaterial sowie O-Töne stellen wir auf Anfrage gerne zur Verfügung.
              </p>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GalleryLightbox, type GalleryItem } from "@/components/ui/Lightbox";
import { galleryPhotos, video } from "@/data/assets";
import type { Dict } from "@/i18n";

/** Bento-Spans je Foto (Reihenfolge = galleryPhotos). */
const spans = [
  "lg:col-span-2 lg:row-span-2", // großes Auftaktbild
  "",
  "",
  "",
  "",
  "lg:col-span-2",
  "lg:col-span-2",
];

const photoItems: GalleryItem[] = galleryPhotos.map((p, i) => ({
  src: p.src,
  alt: p.alt,
  className: spans[i] ?? "",
}));

const toVideoItem = (v: { src: string; poster: string; title: string }, className: string): GalleryItem => ({
  type: "video",
  src: v.poster,
  videoSrc: v.src,
  poster: v.poster,
  alt: v.title,
  className,
});

// Hauptvideo prominent neben dem Auftaktbild, die beiden Inflight-Clips
// als breite Kacheln in den Folgereihen verteilt (Bento bleibt lückenlos).
const items: GalleryItem[] = [
  photoItems[0],
  toVideoItem(video.milse, "lg:col-span-2 lg:row-span-2"),
  photoItems[1],
  photoItems[2],
  toVideoItem(video.milseInflight1, "lg:col-span-2"),
  toVideoItem(video.milseInflight2, "lg:col-span-2"),
  photoItems[3],
  photoItems[4],
  photoItems[5],
  photoItems[6],
];

export function ShowcaseCarousel({ t }: { t: Dict["showcase"] }) {
  return (
    <section id="galerie" className="section scroll-mt-24">
      <div className="container-x">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel no="03">{t.eyebrow}</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {t.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-fg-muted">{t.text}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <GalleryLightbox items={items} />
        </Reveal>
      </div>
    </section>
  );
}

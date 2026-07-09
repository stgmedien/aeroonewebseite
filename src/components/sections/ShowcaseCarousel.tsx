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
  "lg:col-span-2",
  "lg:col-span-2",
  "",
];

const photoItems: GalleryItem[] = galleryPhotos.map((p, i) => ({
  src: p.src,
  alt: p.alt,
  className: spans[i] ?? "",
}));

const videoItem: GalleryItem = {
  type: "video",
  src: video.milse.poster,
  videoSrc: video.milse.src,
  poster: video.milse.poster,
  alt: video.milse.title,
  className: "lg:col-span-2 lg:row-span-2",
};

// Video prominent an zweiter Stelle (neben dem großen Auftaktbild).
const items: GalleryItem[] = [photoItems[0], videoItem, ...photoItems.slice(1)];

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

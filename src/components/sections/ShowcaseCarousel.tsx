import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GalleryLightbox, type GalleryItem } from "@/components/ui/Lightbox";
import { showcase } from "@/data/content";
import { galleryPhotos, video } from "@/data/assets";

const [g0, g1, g2, g3, g4, g5] = galleryPhotos;

const items: GalleryItem[] = [
  { src: g0.src, alt: g0.alt, className: "lg:col-span-2 lg:row-span-2" },
  { src: g1.src, alt: g1.alt },
  { src: g2.src, alt: g2.alt },
  {
    type: "video",
    videoSrc: video.referenz.src,
    poster: video.referenz.poster,
    src: video.referenz.poster,
    alt: "Referenzvideo ConceptGT",
    className: "lg:row-span-2",
  },
  { src: g3.src, alt: g3.alt },
  { src: g4.src, alt: g4.alt, className: "lg:col-span-2" },
  { src: g5.src, alt: g5.alt },
];

export function ShowcaseCarousel() {
  return (
    <section id="galerie" className="section scroll-mt-24">
      <div className="container-x">
        <div className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end">
          <div>
            <Reveal>
              <SectionLabel>{showcase.eyebrow}</SectionLabel>
            </Reveal>
            <Reveal delay={0.1}>
              <h2 className="mt-5 max-w-2xl font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
                {showcase.title}
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.15}>
            <p className="max-w-sm text-fg-muted">{showcase.text}</p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <GalleryLightbox items={items} />
        </Reveal>
      </div>
    </section>
  );
}

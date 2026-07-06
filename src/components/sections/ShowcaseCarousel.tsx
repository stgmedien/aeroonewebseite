import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { GalleryLightbox, type GalleryItem } from "@/components/ui/Lightbox";
import { galleryPhotos } from "@/data/assets";
import type { Dict } from "@/i18n";

const [g0, g1, g2] = galleryPhotos;

const items: GalleryItem[] = [
  { src: g0.src, alt: g0.alt, className: "lg:col-span-2 lg:row-span-2" },
  { src: g1.src, alt: g1.alt },
  { src: g2.src, alt: g2.alt },
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

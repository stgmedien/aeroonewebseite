import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PanoramaViewer } from "@/components/ui/PanoramaViewer";
import { sectionCopy } from "@/data/assets";

export function Panorama() {
  const copy = sectionCopy.panorama;

  return (
    <section id="panorama" className="section scroll-mt-24">
      <div className="container-x">
        {/* Header */}
        <div className="mb-10 flex max-w-2xl flex-col items-start md:mb-12">
          <Reveal>
            <SectionLabel>{copy.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              Erkunde Immobilien aus{" "}
              <span className="text-gradient">jeder Perspektive</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg text-fg-muted">{copy.text}</p>
          </Reveal>
        </div>

        {/* Viewer */}
        <Reveal delay={0.1}>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] ring-sunset shadow-card lg:aspect-[21/9]">
            <PanoramaViewer />
          </div>
        </Reveal>

        {/* Hinweis */}
        <Reveal delay={0.15}>
          <p className="mt-4 text-sm font-medium uppercase tracking-wider text-fg-muted">
            <span className="text-ember">●</span> {copy.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Panorama;

import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { PanoramaViewer } from "@/components/ui/PanoramaViewer";
import { panoramas } from "@/data/assets";
import type { Dict } from "@/i18n";

export function Panorama({ t }: { t: Dict["panorama"] }) {
  const scenes = panoramas.map((p, i) => ({
    src: p.src,
    label: t.sceneLabels[i] ?? p.label,
  }));

  return (
    <section id="panorama" className="section scroll-mt-24">
      <div className="container-x">
        {/* Header */}
        <div className="mb-10 flex max-w-2xl flex-col items-start md:mb-12">
          <Reveal>
            <SectionLabel>{t.eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-3xl font-extrabold leading-tight tracking-tight sm:text-4xl md:text-5xl">
              {t.titlePre}{" "}
              <span className="text-gradient">{t.titleHighlight}</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mt-5 text-lg text-fg-muted">{t.text}</p>
          </Reveal>
        </div>

        {/* Viewer */}
        <Reveal delay={0.1}>
          <div className="relative aspect-[16/9] w-full overflow-hidden rounded-[1.75rem] ring-sunset shadow-card lg:aspect-[21/9]">
            <PanoramaViewer
              scenes={scenes}
              labels={{ hint: t.hint, loading: t.loading, sceneAria: t.sceneAria }}
            />
          </div>
        </Reveal>

        {/* Hinweis */}
        <Reveal delay={0.15}>
          <p className="mt-4 text-sm font-medium uppercase tracking-wider text-fg-muted">
            <span className="text-ember">●</span> {t.note}
          </p>
        </Reveal>
      </div>
    </section>
  );
}

export default Panorama;

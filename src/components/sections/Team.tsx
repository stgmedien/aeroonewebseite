import Image from "next/image";
import { Reveal } from "@/components/ui/Reveal";
import { SectionLabel } from "@/components/ui/SectionLabel";
import { team, sectionCopy } from "@/data/assets";

export function Team() {
  const { eyebrow, title, text } = sectionCopy.team;

  return (
    <section className="section">
      <div className="container-x">
        {/* Header */}
        <div className="mx-auto max-w-2xl text-center">
          <Reveal>
            <SectionLabel>{eyebrow}</SectionLabel>
          </Reveal>
          <Reveal delay={0.1}>
            <h2 className="mt-5 font-display text-4xl font-extrabold leading-[1.05] tracking-tight sm:text-5xl">
              Die Köpfe hinter{" "}
              <span className="text-gradient">Aero One</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="mx-auto mt-5 max-w-xl text-lg text-fg-muted">{text}</p>
          </Reveal>
        </div>

        {/* Team-Grid */}
        <div className="mt-14 grid grid-cols-2 gap-5 sm:gap-6 lg:grid-cols-5">
          {team.map((member, i) => (
            <Reveal key={member.name} delay={i * 0.06}>
              <figure className="group flex flex-col">
                <div className="relative aspect-[3/4] w-full overflow-hidden rounded-2xl glass ring-sunset shadow-card">
                  <Image
                    src={member.src}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 45vw, (max-width: 1024px) 30vw, 18vw"
                    className="object-cover grayscale-[0.35] transition duration-500 ease-out group-hover:scale-[1.04] group-hover:grayscale-0"
                  />
                  {/* sanfter Sunset-Verlauf für Lesbarkeit */}
                  <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/40 via-transparent to-transparent" />
                </div>
                <figcaption className="mt-4">
                  <p className="font-display font-semibold text-fg">{member.name}</p>
                  <p className="mt-0.5 text-sm text-ember">{member.role}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

"use client";

// Ember-Partikelfeld für den Hero: schlanker R3F-Canvas mit drei-Sparkles.
// Reagiert träge auf die Mausposition und friert den Renderloop ein,
// sobald der Hero aus dem Viewport gescrollt ist (IntersectionObserver).

import { useEffect, useRef, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Sparkles } from "@react-three/drei";
import type { Group } from "three";

/** Gemeinsamer Ref-Typ für die normalisierte Mausposition (-1..1). */
type MouseRef = { current: { x: number; y: number } };

/** Innere Szene: Sparkles in einer Gruppe, die minimal & träge zur Maus rotiert. */
function EmberScene({ mouse }: { mouse: MouseRef }) {
  const group = useRef<Group>(null);

  useFrame((_, delta) => {
    const g = group.current;
    if (!g) return;
    // träges, frame-unabhängiges Lerp Richtung Zielrotation (bewusst minimal)
    const t = 1 - Math.exp(-delta * 2.2);
    g.rotation.y += (mouse.current.x * 0.12 - g.rotation.y) * t;
    g.rotation.x += (mouse.current.y * 0.08 - g.rotation.x) * t;
  });

  return (
    <group ref={group}>
      <Sparkles
        count={110}
        color="#f6bb1e"
        size={1.8}
        scale={[16, 9, 5]}
        opacity={0.4}
        speed={0.3}
        noise={0.8}
      />
    </group>
  );
}

/** Ember-Partikelfeld — Default-Export für next/dynamic (ssr: false). */
export default function EmberField() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const mouse = useRef({ x: 0, y: 0 });
  const [frameloop, setFrameloop] = useState<"always" | "never">("always");

  // Sichtbarkeits-Pause: offscreen → Renderloop komplett einfrieren
  useEffect(() => {
    const el = wrapperRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([entry]) => {
      setFrameloop(entry.isIntersecting ? "always" : "never");
    });
    io.observe(el);
    return () => io.disconnect();
  }, []);

  // normalisierte Mausposition (-1..1) für die träge Rotation
  useEffect(() => {
    function onMove(e: PointerEvent) {
      mouse.current.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.current.y = (e.clientY / window.innerHeight) * 2 - 1;
    }
    window.addEventListener("pointermove", onMove, { passive: true });
    return () => window.removeEventListener("pointermove", onMove);
  }, []);

  return (
    <div ref={wrapperRef} className="pointer-events-none absolute inset-0" aria-hidden>
      <Canvas
        frameloop={frameloop}
        dpr={[1, 1.5]}
        gl={{ antialias: false, powerPreference: "low-power" }}
        camera={{ position: [0, 0, 9], fov: 50 }}
      >
        <EmberScene mouse={mouse} />
      </Canvas>
    </div>
  );
}

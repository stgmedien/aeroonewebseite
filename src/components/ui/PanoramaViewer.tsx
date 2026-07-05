"use client";

import * as THREE from "three";
import { Canvas, useFrame, useThree, useLoader } from "@react-three/fiber";
import { Suspense, useEffect, useMemo, useRef, useState } from "react";
import Image from "next/image";

export type PanoScene = { src: string; label: string };
export type PanoLabels = { hint: string; loading: string; sceneAria: string };

/* ------------------------------------------------------------------ */
/*  3D-Bausteine                                                       */
/* ------------------------------------------------------------------ */

/**
 * Equirektangulares Bild auf die Innenseite einer Kugel projizieren.
 * scale x = -1 dreht die Geometrie nach innen, FrontSide bleibt damit
 * korrekt sichtbar. `onReady` feuert, sobald die Textur geladen ist
 * (innerhalb der Suspense-Grenze) — das blendet das Lade-Overlay aus.
 */
function PanoSphere({ src, onReady }: { src: string; onReady: () => void }) {
  const texture = useLoader(THREE.TextureLoader, src);

  // Kanonische three.js-Methode: GEOMETRIE auf x invertieren (nicht den Mesh),
  // damit die Innenseite sichtbar ist und das Bild nicht gespiegelt wird.
  const geometry = useMemo(() => {
    const g = new THREE.SphereGeometry(500, 64, 40);
    g.scale(-1, 1, 1);
    return g;
  }, []);
  useEffect(() => () => geometry.dispose(), [geometry]);

  useEffect(() => {
    texture.colorSpace = THREE.SRGBColorSpace;
    texture.anisotropy = 4;
    texture.needsUpdate = true;
    onReady();
  }, [texture, onReady]);

  return (
    <mesh geometry={geometry}>
      <meshBasicMaterial map={texture} side={THREE.DoubleSide} toneMapped={false} />
    </mesh>
  );
}

type Ctl = { lon: number; lat: number; fov: number };

/** Manuelle Kamera-Steuerung aus der Kugelmitte (keine OrbitControls). */
function Rig({ ctl }: { ctl: React.RefObject<Ctl> }) {
  const { camera } = useThree();
  useFrame(() => {
    const c = ctl.current;
    const phi = THREE.MathUtils.degToRad(90 - c.lat);
    const theta = THREE.MathUtils.degToRad(c.lon);
    camera.lookAt(
      500 * Math.sin(phi) * Math.cos(theta),
      500 * Math.cos(phi),
      500 * Math.sin(phi) * Math.sin(theta),
    );
    const cam = camera as THREE.PerspectiveCamera;
    if (cam.fov !== c.fov) {
      cam.fov = c.fov;
      cam.updateProjectionMatrix();
    }
  });
  return null;
}

/* ------------------------------------------------------------------ */
/*  Kleine UI-Bausteine                                                */
/* ------------------------------------------------------------------ */

function Spinner({ className = "" }: { className?: string }) {
  return (
    <span
      className={`block animate-spin rounded-full border-2 border-white/15 border-t-ember ${className}`}
      role="status"
      aria-label="Lädt"
    />
  );
}

// lon 180° = Blick startet zum Haus/Motiv (Bildmitte des Panoramas),
// nicht zur gegenüberliegenden Seite. Gilt für Start und Szenen-Reset.
const DEFAULT_CTL: Ctl = { lon: 180, lat: 0, fov: 75 };

/* ------------------------------------------------------------------ */
/*  Viewer                                                             */
/* ------------------------------------------------------------------ */

export function PanoramaViewer({ scenes, labels }: { scenes: PanoScene[]; labels: PanoLabels }) {
  const ctl = useRef<Ctl>({ ...DEFAULT_CTL });

  // Drag-Status (Refs, damit Re-Renders das Ziehen nicht stören)
  const dragging = useRef(false);
  const last = useRef({ x: 0, y: 0 });
  const pointerId = useRef<number | null>(null);

  const [activeIndex, setActiveIndex] = useState(0);
  const [grabbing, setGrabbing] = useState(false);
  const [loading, setLoading] = useState(true);
  const [mounted, setMounted] = useState(false);

  // SSR-sicher: WebGL/Canvas erst nach Mount im Client rendern.
  useEffect(() => setMounted(true), []);

  const active = scenes[activeIndex];

  /* --- Pointer-Steuerung (Ziehen zum Umsehen) --------------------- */
  function onPointerDown(e: React.PointerEvent<HTMLDivElement>) {
    dragging.current = true;
    pointerId.current = e.pointerId;
    last.current = { x: e.clientX, y: e.clientY };
    setGrabbing(true);
    e.currentTarget.setPointerCapture?.(e.pointerId);
  }

  function onPointerMove(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    const dx = e.clientX - last.current.x;
    const dy = e.clientY - last.current.y;
    last.current = { x: e.clientX, y: e.clientY };

    const c = ctl.current;
    c.lon -= dx * 0.15;
    c.lat += dy * 0.15;
    c.lat = THREE.MathUtils.clamp(c.lat, -85, 85);
  }

  function endDrag(e: React.PointerEvent<HTMLDivElement>) {
    if (!dragging.current) return;
    dragging.current = false;
    setGrabbing(false);
    if (pointerId.current != null) {
      e.currentTarget.releasePointerCapture?.(pointerId.current);
      pointerId.current = null;
    }
  }

  /* --- Mausrad (Zoom via FOV) ------------------------------------- */
  function onWheel(e: React.WheelEvent<HTMLDivElement>) {
    const c = ctl.current;
    c.fov += e.deltaY * 0.05;
    c.fov = THREE.MathUtils.clamp(c.fov, 35, 90);
  }

  /* --- Szenenwechsel ---------------------------------------------- */
  function selectScene(i: number) {
    if (i === activeIndex) return;
    setLoading(true);
    setActiveIndex(i);
    // Blickrichtung & Zoom zurücksetzen — neuer Standpunkt, frischer Blick.
    ctl.current = { ...DEFAULT_CTL };
  }

  return (
    <div
      className="absolute inset-0 select-none overflow-hidden bg-ink-deep"
      style={{ touchAction: "none" }}
    >
      {/* WebGL-Bühne */}
      {mounted ? (
        <div
          className="h-full w-full"
          style={{ cursor: grabbing ? "grabbing" : "grab" }}
          onPointerDown={onPointerDown}
          onPointerMove={onPointerMove}
          onPointerUp={endDrag}
          onPointerCancel={endDrag}
          onPointerLeave={endDrag}
          onWheel={onWheel}
        >
          <Canvas
            camera={{ position: [0, 0, 0.1], fov: 75, near: 0.1, far: 1100 }}
            dpr={[1, 2]}
            gl={{ antialias: true, preserveDrawingBuffer: true }}
          >
            <Suspense fallback={null}>
              {/* key erzwingt sauberen Remount beim Quellwechsel */}
              <PanoSphere key={active.src} src={active.src} onReady={() => setLoading(false)} />
            </Suspense>
            <Rig ctl={ctl} />
          </Canvas>
        </div>
      ) : (
        // Poster vor Mount (SSR/Hydration ohne WebGL)
        <Image
          src={active.src}
          alt={active.label}
          fill
          priority
          className="object-cover opacity-70"
          sizes="100vw"
        />
      )}

      {/* sanfte Vignette für Lesbarkeit der Overlays */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-ink-deep/70 via-transparent to-ink-deep/35" />

      {/* Lade-Overlay */}
      {(loading || !mounted) && (
        <div className="pointer-events-none absolute inset-0 z-20 flex flex-col items-center justify-center gap-4 bg-ink-deep/55 backdrop-blur-[3px] transition-opacity">
          <Spinner className="h-9 w-9" />
          <p className="text-sm font-medium tracking-wide text-fg-muted">{labels.loading}</p>
        </div>
      )}

      {/* Steuerungs-Hinweis (oben links) */}
      <div className="pointer-events-none absolute left-3 top-3 z-10 hidden rounded-full glass px-3.5 py-1.5 text-[11px] font-medium tracking-wide text-fg-muted sm:flex sm:items-center sm:gap-2">
        <DragIcon className="h-3.5 w-3.5 text-ember" />
        {labels.hint}
      </div>

      {/* aktuelles Label (oben rechts) */}
      <div className="pointer-events-none absolute right-3 top-3 z-10 flex items-center gap-2 rounded-full glass-strong px-3.5 py-1.5 text-xs font-semibold">
        <span className="h-1.5 w-1.5 rounded-full bg-sunset" />
        <span className="text-gradient">{active.label}</span>
      </div>

      {/* Szenen-Switcher (unten, mittig) */}
      <div className="absolute inset-x-0 bottom-0 z-10 flex justify-center p-3 sm:p-4">
        <div className="flex items-center gap-2 rounded-2xl glass-strong p-2 shadow-card">
          {scenes.map((p, i) => {
            const isActive = i === activeIndex;
            return (
              <button
                key={p.src}
                type="button"
                onClick={() => selectScene(i)}
                aria-label={labels.sceneAria.replace("{label}", p.label)}
                aria-pressed={isActive}
                className={`group relative h-12 w-16 shrink-0 overflow-hidden rounded-xl transition-all duration-300 sm:h-14 sm:w-20 ${
                  isActive
                    ? "ring-sunset scale-105 opacity-100"
                    : "opacity-55 ring-1 ring-white/10 hover:opacity-90"
                }`}
              >
                <Image
                  src={p.src}
                  alt={p.label}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-110"
                  sizes="80px"
                />
                {!isActive && (
                  <span className="absolute inset-0 bg-ink-deep/30 transition-colors group-hover:bg-ink-deep/10" />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

/* ------------------------------------------------------------------ */
/*  Icon (inline, damit keine zusätzliche Abhängigkeit nötig ist)      */
/* ------------------------------------------------------------------ */
function DragIcon({ className = "" }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M5 9 2 12l3 3M9 5l3-3 3 3M15 19l-3 3-3-3M19 9l3 3-3 3M2 12h20M12 2v20" />
    </svg>
  );
}

export default PanoramaViewer;

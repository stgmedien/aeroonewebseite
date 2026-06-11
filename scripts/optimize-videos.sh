#!/usr/bin/env bash
# Transkodiert die Originalvideos → web-fertige MP4s + Poster in public/media/video/
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/public/assets"
OUT="$ROOT/public/media/video"
mkdir -p "$OUT"

HERO="$SRC/Hauptwerbefilm Aero One (Hero).mp4"
REF="$SRC/Video Referenz ConceptGT.mp4"

echo "→ Hero-Video (1600px, CRF30, MIT Audio — Loop läuft stumm, Klick spielt mit Ton)"
ffmpeg -y -loglevel error -i "$HERO" \
  -vf "scale='min(1600,iw)':-2" -c:v libx264 -preset medium -crf 30 \
  -c:a aac -b:a 128k \
  -pix_fmt yuv420p -movflags +faststart "$OUT/hero.mp4"
ffmpeg -y -loglevel error -ss 3 -i "$HERO" -frames:v 1 -vf "scale=1600:-2" -q:v 3 "$OUT/hero-poster.jpg"
echo "  ✓ hero.mp4 + hero-poster.jpg"

echo "→ Referenzvideo ConceptGT (1920px, CRF25, mit Audio, Klick-Wiedergabe)"
ffmpeg -y -loglevel error -i "$REF" \
  -vf "scale='min(1920,iw)':-2" -c:v libx264 -preset medium -crf 25 \
  -c:a aac -b:a 128k -pix_fmt yuv420p -movflags +faststart "$OUT/referenz-conceptgt.mp4"
ffmpeg -y -loglevel error -ss 5 -i "$REF" -frames:v 1 -vf "scale=1600:-2" -q:v 3 "$OUT/referenz-conceptgt-poster.jpg"
echo "  ✓ referenz-conceptgt.mp4 + poster"

echo "FERTIG."
ls -lh "$OUT"

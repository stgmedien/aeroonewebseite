#!/usr/bin/env bash
# Optimiert Originale aus public/assets → web-fertige Dateien in public/media/
# Nutzt sips (macOS builtin). Erneut ausführbar, wenn neue Assets kommen.
set -euo pipefail

ROOT="$(cd "$(dirname "$0")/.." && pwd)"
SRC="$ROOT/public/assets"
OUT="$ROOT/public/media"

mkdir -p "$OUT/photos" "$OUT/team" "$OUT/logos" "$OUT/pano"

jpg() { # src maxdim quality dest
  sips -s format jpeg -s formatOptions "$3" -Z "$2" "$1" --out "$4" >/dev/null
  echo "  ✓ $(basename "$4")"
}
png() { # src maxdim dest  (behält Transparenz)
  sips -s format png -Z "$2" "$1" --out "$3" >/dev/null
  echo "  ✓ $(basename "$3")"
}

echo "→ Immobilien-/Drohnenfotos (max 2400px, q72)"
jpg "$SRC/DJI_0990.jpg"                       2400 72 "$OUT/photos/drohne-portrait.jpg"
jpg "$SRC/DJI_0989 2.jpg"                      2600 72 "$OUT/photos/drohne-wide.jpg"
jpg "$SRC/DJI_0990 2.jpg"                      2400 72 "$OUT/photos/drohne-aerial.jpg"
jpg "$SRC/Hermann-Vogelsang-Straße 3-1.jpg"   2400 72 "$OUT/photos/immobilie-hv-1.jpg"
jpg "$SRC/Hermann-Vogelsang-Straße 3-2.jpg"   2400 72 "$OUT/photos/immobilie-hv-2.jpg"
jpg "$SRC/Neunkirchenerstraße 18-1.jpg"       2400 72 "$OUT/photos/immobilie-nk-1.jpg"
jpg "$SRC/Neunkirchenerstraße 18-2.jpg"       2400 72 "$OUT/photos/immobilie-nk-2.jpg"

echo "→ Team-Portraits (max 900px, q80)"
jpg "$SRC/Personal Fotos/Portrait Jonathan.png"   900 80 "$OUT/team/jonathan.jpg"
jpg "$SRC/Personal Fotos/Freya Knight.PNG"        900 80 "$OUT/team/freya.jpg"
jpg "$SRC/Personal Fotos/Linus Held.jpeg"         900 80 "$OUT/team/linus.jpg"
jpg "$SRC/Personal Fotos/Fridrich Grüninger.jpeg" 900 80 "$OUT/team/friederich.jpg"
jpg "$SRC/Personal Fotos/Amy Thomalla.jpeg"       900 80 "$OUT/team/amy.jpg"

echo "→ Logos (PNG, Transparenz erhalten)"
png "$SRC/Logos/aeroonelogo 4K.png" 512  "$OUT/logos/aeroone-mark.png"
png "$SRC/Logos/Aeroone 4K.png"     1024 "$OUT/logos/aeroone-wordmark.png"

echo "→ Panoramen (equirektangular → 4096×2048, q82, WebGL-sicher)"
jpg "$SRC/3D Viewer Beispiel/dji_fly_20260319_075432_885_1773906564291_pano.jpg" 4096 82 "$OUT/pano/pano-1.jpg"
jpg "$SRC/3D Viewer Beispiel/dji_fly_20260319_075614_886_1773906561401_pano.jpg" 4096 82 "$OUT/pano/pano-2.jpg"
jpg "$SRC/3D Viewer Beispiel/dji_fly_20260319_075742_887_1773906558115_pano.jpg" 4096 82 "$OUT/pano/pano-3.jpg"

echo "FERTIG. Ausgabe in public/media/"

import {
  ShieldCheck,
  Camera,
  Repeat2,
  Clock,
  Tag,
  Eye,
  Layers,
  Sparkles,
} from "lucide-react";
import type { ReactNode } from "react";

const map: Record<string, ReactNode> = {
  Rechtssicher: <ShieldCheck size={16} />,
  Aufnahmen: <Camera size={16} />,
  Flexibilität: <Repeat2 size={16} />,
  "Lieferung in 48h": <Clock size={16} />,
  "48h Lieferzeit": <Clock size={16} />,
  "Individuelle Preise": <Tag size={16} />,
  "Mehr Sichtbarkeit": <Eye size={16} />,
  "All In One": <Layers size={16} />,
};

export function badgeIcon(label: string): ReactNode {
  return map[label] ?? <Sparkles size={16} />;
}

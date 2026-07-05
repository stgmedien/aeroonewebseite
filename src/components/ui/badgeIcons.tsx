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
import type { BadgeIconKey } from "@/i18n";

/** Sprachneutrale Icon-Keys (Labels kommen aus dem Dict). */
const map: Record<BadgeIconKey, ReactNode> = {
  shield: <ShieldCheck size={16} />,
  camera: <Camera size={16} />,
  flex: <Repeat2 size={16} />,
  clock: <Clock size={16} />,
  tag: <Tag size={16} />,
  eye: <Eye size={16} />,
  layers: <Layers size={16} />,
};

export function badgeIcon(key: BadgeIconKey): ReactNode {
  return map[key] ?? <Sparkles size={16} />;
}

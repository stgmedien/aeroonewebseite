import {
  ShieldCheck,
  Camera,
  Repeat2,
  Clock,
  Tag,
  Eye,
  Layers,
  Sparkles,
  Hourglass,
  Smartphone,
  Scale,
  HeartHandshake,
  GraduationCap,
  HandCoins,
  Sprout,
  MapPin,
  Video,
} from "lucide-react";
import type { ComponentType, ReactNode } from "react";
import type { BadgeIconKey } from "@/i18n";
import { DroneIcon } from "./Icons";

/** Sprachneutrale Icon-Keys (Labels kommen aus dem Dict). */
const map: Record<BadgeIconKey, ComponentType<{ size?: number }>> = {
  shield: ShieldCheck,
  camera: Camera,
  flex: Repeat2,
  clock: Clock,
  tag: Tag,
  eye: Eye,
  layers: Layers,
  hourglass: Hourglass,
  smartphone: Smartphone,
  scale: Scale,
  heartHandshake: HeartHandshake,
  graduation: GraduationCap,
  handCoins: HandCoins,
  sprout: Sprout,
  mapPin: MapPin,
  video: Video,
  drone: DroneIcon,
};

export function badgeIcon(key: BadgeIconKey, size = 16): ReactNode {
  const Icon = map[key] ?? Sparkles;
  return <Icon size={size} />;
}

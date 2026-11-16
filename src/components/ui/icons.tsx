import { Mail, Monitor, KeyRound, Sparkles, Layers, Briefcase, Clock, FolderOpen } from "lucide-react";
import type { IconName } from "@/config/services";

const map = { mail: Mail, monitor: Monitor, key: KeyRound, sparkle: Sparkles, layers: Layers, briefcase: Briefcase, clock: Clock, folder: FolderOpen };

export function ServiceIcon({ name, className = "size-5" }: { name: IconName; className?: string }) {
  const Icon = map[name];
  return <Icon className={className} strokeWidth={1.6} aria-hidden="true" />;
}

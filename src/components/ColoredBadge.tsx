import { cn } from "@/lib/utils";
import { Badge } from "./ui/badge";
import { BADGE_COLOR, type BadgeType } from "@/constants/badges";

export function ColoredBadge({
  badgeType,
  text,
  className,
}: {
  badgeType: BadgeType | string;
  text?: string;
  className?: string;
}) {
  const isKnownBridgeType = badgeType in BADGE_COLOR;
  if (isKnownBridgeType) {
    const { bg, txt } = BADGE_COLOR[badgeType as BadgeType];
    return <Badge className={cn(bg, txt, className)}>{text}</Badge>;
  }

  return <Badge className={cn(className)}>{text || badgeType}</Badge>;
}

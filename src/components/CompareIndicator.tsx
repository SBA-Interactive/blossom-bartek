import { Link } from "@tanstack/react-router";
import { useCompareStore } from "@/store/useCompareStore";
import { GitCompare } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

export function CompareIndicator() {
  const items = useCompareStore((state) => state.items);
  const count = items.length;

  if (count === 0) return null;

  return (
    <Link
      to="/compare"
      className="fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all group"
    >
      <div className="relative">
        <GitCompare className="w-5 h-5" />
        <Badge
          variant="secondary"
          className="absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-background text-foreground"
        >
          {count}
        </Badge>
      </div>
      <span className="font-medium text-sm">
        Compare ({count})
      </span>
    </Link>
  );
}

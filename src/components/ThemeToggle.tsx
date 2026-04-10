import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { useIsMobile } from "@/hooks/use-mobile";

export function ThemeToggle() {
  const isMobile = useIsMobile();
  
  return (
    <AnimatedThemeToggler className={`inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring hover:bg-accent hover:text-accent-foreground ${isMobile ? "h-12 w-12 [&_svg]:size-6" : "h-9 w-9 [&_svg]:size-4"}`} />
  );
}

import { HeaderDesktop } from "./HeaderDesktop";
import { HeaderMobile } from "./HeaderMobile";
import { Flower2 } from "lucide-react";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";

export function Header() {
  return (
    <div className="fixed w-full top-0 left-0 z-50 p-2">
      <header className="w-full md:w-[90%] lg:w-[80%] mx-auto backdrop-blur-xl bg-background/80 border border-border rounded-2xl flex items-center justify-between px-3 md:px-6 py-2 md:py-3 shadow-sm">
        <NavigationMenu className="shrink-0">
          <NavigationMenuList>
            <NavigationMenuItem>
                <div className="flex items-center gap-2">
                  <Flower2 className="w-8 h-8 md:w-7 md:h-7 text-primary" aria-hidden="true" />
                  <span className="text-lg font-heading font-bold text-foreground hidden sm:block">
                    Blossom
                  </span>
                </div>
            </NavigationMenuItem>
          </NavigationMenuList>
        </NavigationMenu>
        <HeaderDesktop />
        <HeaderMobile />
      </header>
    </div>
  );
}

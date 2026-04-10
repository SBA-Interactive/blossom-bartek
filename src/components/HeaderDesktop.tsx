import { Link } from "@tanstack/react-router";
import { Globe, ShoppingBag } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { LANGUAGES, NAVIGATION_LINKS } from "@/constants/header";
import { useCartStore } from "@/store/useCartStore";
import { ProfileDropdown } from "@/components/ProfileDropdown";

export function HeaderDesktop() {
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );

  return (
    <nav className="hidden min-[841px]:flex items-center justify-between px-8 py-2">
      <NavigationMenu>
        <NavigationMenuList className="tracking-tight font-sans gap-x-8">
          {NAVIGATION_LINKS.map((link) => (
            <NavigationMenuItem key={link.href}>
              <NavigationMenuLink asChild>
                <Link
                  to={link.href}
                  className="text-sm font-medium text-foreground/80 hover:text-primary transition-colors"
                  activeProps={{ className: "text-primary font-semibold" }}
                >
                  {link.label}
                </Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <div className="flex items-center gap-1 pl-8">
        <Tooltip>
          <TooltipTrigger asChild>
            <Button variant="ghost" size="icon" asChild className="relative">
              <Link to="/cart" aria-label={`Cart with ${totalItems} items`}>
                <ShoppingBag className="size-4" />
                {totalItems > 0 && (
                  <Badge
                    variant="secondary"
                    className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
                  >
                    {totalItems}
                  </Badge>
                )}
              </Link>
            </Button>
          </TooltipTrigger>
          <TooltipContent>Cart ({totalItems} items)</TooltipContent>
        </Tooltip>

        <Separator orientation="vertical" className="h-6 mx-1" />

        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="ghost" size="icon">
              <Globe className="size-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end" className="bg-card">
            {LANGUAGES.map((lang) => (
              <DropdownMenuItem key={lang.code} className="cursor-pointer">
                {lang.label}
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>

        <ProfileDropdown />
      </div>
    </nav>
  );
}

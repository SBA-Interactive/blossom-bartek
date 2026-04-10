import { Link } from "@tanstack/react-router";
import { Globe, Menu, ShoppingBag, Heart } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { Sheet, SheetContent, SheetTrigger, SheetHeader, SheetTitle } from "@/components/ui/sheet";
import { LANGUAGES, NAVIGATION_LINKS } from "@/constants/header";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { ProfileDropdown } from "@/components/ProfileDropdown";

export function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const totalItems = useCartStore((state) =>
    state.items.reduce((sum, item) => sum + item.quantity, 0),
  );
  const wishlistCount = useWishlistStore((state) => state.items.length);

  return (
    <div className="min-[841px]:hidden flex items-center gap-2">
      <Button variant="ghost" size="icon" className="h-12 w-12 relative" asChild>
        <Link to="/wishlist" aria-label={`Wishlist with ${wishlistCount} items`}>
          <Heart className="size-6" />
          {wishlistCount > 0 && (
            <Badge
              variant="secondary"
              className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              {wishlistCount}
            </Badge>
          )}
          <span className="sr-only">Wishlist</span>
        </Link>
      </Button>

      <Button variant="ghost" size="icon" className="h-12 w-12 relative" asChild>
        <Link to="/cart" aria-label={`Cart with ${totalItems} items`}>
          <ShoppingBag className="size-6" />
          {totalItems > 0 && (
            <Badge
              variant="secondary"
              className="absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs"
            >
              {totalItems}
            </Badge>
          )}
          <span className="sr-only">Cart</span>
        </Link>
      </Button>

      <Sheet open={open} onOpenChange={setOpen}>
        <SheetTrigger asChild>
          <Button variant="ghost" size="icon" className="h-12 w-12">
            <Menu className="size-6" />
            <span className="sr-only">Toggle menu</span>
          </Button>
        </SheetTrigger>
        <SheetContent side="right" className="w-full sm:w-80 bg-card flex flex-col">
          <SheetHeader>
            <SheetTitle className="text-xl font-heading font-semibold">Menu</SheetTitle>
          </SheetHeader>
          <nav className="mt-8 flex flex-col gap-6">
            {NAVIGATION_LINKS.map((link) => (
              <Link
                key={link.href}
                to={link.href}
                onClick={() => setOpen(false)}
                activeProps={{ className: "bg-primary/10 text-primary" }}
                className="text-[1.6rem] font-medium py-5 px-6 rounded-lg hover:bg-muted transition-colors text-center"
              >
                {link.label}
              </Link>
            ))}
          </nav>
          <div className="mt-auto pt-8 pb-6 flex justify-center gap-10 border-t">
            <DropdownMenu>
              <DropdownMenuTrigger asChild>
                <Button variant="ghost" size="icon" className="h-12 w-12 -mt-1">
                  <Globe className="size-6" />
                  <span className="sr-only">Language</span>
                </Button>
              </DropdownMenuTrigger>
              <DropdownMenuContent align="start" className="bg-card">
                {LANGUAGES.map((lang) => (
                  <DropdownMenuItem key={lang.code} className="cursor-pointer text-base py-3">
                    {lang.label}
                  </DropdownMenuItem>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
            <ProfileDropdown />
          </div>
        </SheetContent>
      </Sheet>
    </div>
  );
}

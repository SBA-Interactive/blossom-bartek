import { User, LogOut, Heart, Sparkles, CreditCard, Package } from "lucide-react";
import { useState, useEffect } from "react";
import { Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useAuthStore } from "@/store/useAuthStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useSubscriptionStore, SUBSCRIPTION_PLANS } from "@/store/useSubscriptionStore";
import { AuthModal } from "@/components/AuthModal";

export function ProfileDropdown() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const wishlistCount = useWishlistStore((state) => state.items.length);
  const { currentTier, getDiscount, hasFreeShipping } = useSubscriptionStore();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);

  const currentPlan = SUBSCRIPTION_PLANS.find((p) => p.id === currentTier);
  const hasSubscription = currentTier !== "free";

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("blossom-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored ? stored : prefersDark ? "dark" : "light";
    requestAnimationFrame(() => {
      document.documentElement.classList.toggle("dark", initialTheme === "dark");
    });
  }, []);

  if (!mounted) return null;

  return (
    <>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="ghost" size="icon" className="rounded-full min-[841px]:scale-100 scale-150">
            <User className="size-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="w-56">
          {isAuthenticated && user ? (
            <>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">{user.name}</p>
                  <p className="text-xs leading-none text-muted-foreground">{user.email}</p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              {hasSubscription && (
                <>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/pricing" className="flex items-center gap-2">
                      <Sparkles className="size-4" />
                      <span>{currentPlan?.name} Member</span>
                      <Badge variant="secondary" className="ml-auto text-xs">
                        {getDiscount()}% off
                      </Badge>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/pricing" className="flex items-center gap-2">
                      <CreditCard className="size-4" />
                      <span>Manage Subscription</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </>
              )}
              {!hasSubscription && (
                <>
                  <DropdownMenuItem asChild className="cursor-pointer">
                    <Link to="/pricing" className="flex items-center gap-2">
                      <Sparkles className="size-4" />
                      <span>Upgrade to Premium</span>
                    </Link>
                  </DropdownMenuItem>
                  <DropdownMenuSeparator />
                </>
              )}
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link to="/wishlist" className="flex items-center gap-2">
                  <Heart className="size-4" />
                  <span>Wishlist ({wishlistCount})</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer p-0">
                <AnimatedThemeToggler className="flex w-full items-center gap-2 px-2 py-1.5" />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={logout}
                className="cursor-pointer text-destructive focus:text-destructive"
              >
                <LogOut className="size-4 mr-2" />
                <span>Log out</span>
              </DropdownMenuItem>
            </>
          ) : (
            <>
              <DropdownMenuLabel className="font-normal">
                <div className="flex flex-col space-y-1">
                  <p className="text-sm font-medium leading-none">Welcome</p>
                  <p className="text-xs leading-none text-muted-foreground">
                    Sign in to save your wishlist
                  </p>
                </div>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem asChild className="cursor-pointer">
                <Link to="/wishlist" className="flex items-center gap-2">
                  <Heart className="size-4" />
                  <span>Wishlist ({wishlistCount})</span>
                </Link>
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="cursor-pointer p-0">
                <AnimatedThemeToggler className="flex w-full items-center gap-2 px-2 py-1.5" />
              </DropdownMenuItem>
              <DropdownMenuSeparator />
              <DropdownMenuItem
                onClick={() => setAuthModalOpen(true)}
                className="cursor-pointer"
              >
                Sign In
              </DropdownMenuItem>
              <DropdownMenuItem
                onClick={() => setAuthModalOpen(true)}
                className="cursor-pointer"
              >
                Sign Up
              </DropdownMenuItem>
            </>
          )}
        </DropdownMenuContent>
      </DropdownMenu>

      <AuthModal open={authModalOpen} onOpenChange={setAuthModalOpen} />
    </>
  );
}
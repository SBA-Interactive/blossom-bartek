import React from "react";
import { useMemo, useCallback } from "react";
import { SectionWrapper } from "@/components/section-wrapper";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
  EmptyContent,
} from "@/components/ui/empty";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { BlurFade } from "@/components/ui/blur-fade";
import { Link } from "@tanstack/react-router";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCartStore } from "@/store/useCartStore";
import {
  Trash2,
  Heart,
  ShoppingBag,
  ArrowRight,
  Package,
} from "lucide-react";

function SkipLink() {
  return (
    <a
      href="#wishlist-main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      Skip to main content
    </a>
  );
}

function WishlistItemCard({ item }: { item: ReturnType<typeof useWishlistStore.getState>["items"][0] }) {
  const removeItem = useWishlistStore((state) => state.removeItem);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = useCallback(() => {
    addItem(item.productId, 1);
  }, [addItem, item.productId]);

  const handleRemove = useCallback(() => {
    removeItem(item.productId);
  }, [removeItem, item.productId]);

  return (
    <Card className="overflow-hidden">
      <div className="flex gap-4 p-4">
        <Link to="/product/$productId" params={{ productId: item.productId }} className="shrink-0">
          <div className="w-20 h-20 rounded-lg overflow-hidden bg-muted">
            <img
              src={item.image}
              alt={item.name}
              className="w-full h-full object-cover"
            />
          </div>
        </Link>
        <div className="flex-1 min-w-0">
          <Link to="/product/$productId" params={{ productId: item.productId }}>
            <h3 className="font-heading font-semibold text-lg truncate hover:text-primary transition-colors">
              {item.name}
            </h3>
          </Link>
          <p className="text-primary font-bold text-xl mt-1">€{item.price}</p>
          <p className="text-xs text-muted-foreground mt-1">
            Added {new Date(item.addedAt).toLocaleDateString()}
          </p>
        </div>
        <div className="flex flex-col gap-2 shrink-0">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" size="icon" onClick={handleAddToCart}>
                <ShoppingBag className="w-4 h-4" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add to cart</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button
                variant="ghost"
                size="icon"
                onClick={handleRemove}
              >
                <Trash2 className="w-4 h-4 text-destructive" />
              </Button>
            </TooltipTrigger>
            <TooltipContent>Remove from wishlist</TooltipContent>
          </Tooltip>
        </div>
      </div>
    </Card>
  );
}

export default function WishlistPage() {
  const items = useWishlistStore((state) => state.items);

  return (
    <>
      <SkipLink />
      <main className="pt-24 min-h-screen" id="wishlist-main-content">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <SectionWrapper loading={false} error={null}>
            <BlurFade inView>
              <header className="flex items-center gap-3 mb-8">
                <Avatar className="w-12 h-12 bg-primary/10">
                  <AvatarFallback className="bg-primary/10">
                    <Heart className="w-6 h-6 text-primary" aria-hidden="true" />
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                  Wishlist
                </h1>
                {items.length > 0 && (
                  <Badge variant="secondary" className="ml-2">
                    {items.length} {items.length === 1 ? "item" : "items"}
                  </Badge>
                )}
              </header>

              {items.length === 0 ? (
                <Empty>
                  <EmptyHeader>
                    <EmptyMedia variant="icon">
                      <Heart className="w-10 h-10" />
                    </EmptyMedia>
                    <EmptyTitle>Your wishlist is empty</EmptyTitle>
                    <EmptyDescription>
                      Save your favorite fragrances to buy later.
                    </EmptyDescription>
                  </EmptyHeader>
                  <EmptyContent>
                    <Button asChild size="lg">
                      <Link to="/products">
                        <Package className="mr-2 w-4 h-4" />
                        Browse Products
                        <ArrowRight className="ml-2 w-4 h-4" />
                      </Link>
                    </Button>
                  </EmptyContent>
                </Empty>
              ) : (
                <div className="space-y-4">
                  {items.map((item) => (
                    <WishlistItemCard key={item.id} item={item} />
                  ))}
                </div>
              )}
            </BlurFade>
          </SectionWrapper>
        </div>
      </main>
    </>
  );
}

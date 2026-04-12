import React from "react";
import { useMemo, useCallback } from "react";
import { SectionWrapper } from "@/components/section-wrapper";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Progress } from "@/components/ui/progress";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
  EmptyContent,
} from "@/components/ui/empty";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { ButtonGroup } from "@/components/ui/button-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { BlurFade } from "@/components/ui/blur-fade";
import { BLUR_FADE_DELAY_LONG } from "@/constants/animation";
import { Link } from "@tanstack/react-router";
import { useCartStore } from "@/store/useCartStore";
import { useSubscriptionStore, SUBSCRIPTION_PLANS } from "@/store/useSubscriptionStore";
import { FREE_SHIPPING_THRESHOLD, STANDARD_SHIPPING_COST } from "@/constants/shipping";
import {
  Minus,
  Plus,
  Trash2,
  ShoppingBag,
  ArrowRight,
  ArrowLeft,
  Leaf,
  Package,
  Sparkles,
  Truck,
} from "lucide-react";
import { MAX_QUANTITY } from "@/constants/product";

function SkipLink() {
  return (
    <a
      href="#cart-main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      Skip to main content
    </a>
  );
}

export default function CartPage() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const { currentTier, getDiscount, hasFreeShipping, applyDiscount } = useSubscriptionStore();

  const currentPlan = useMemo(() => SUBSCRIPTION_PLANS.find((p) => p.id === currentTier), [currentTier]);
  const hasDiscount = useMemo(() => currentTier !== "free", [currentTier]);
  const subscriberFreeShipping = useMemo(() => hasFreeShipping(), [hasFreeShipping]);

  const subtotal = useMemo(() => items.reduce((sum, item) => sum + item.price * item.quantity, 0), [items]);
  const discountedSubtotal = useMemo(() => hasDiscount ? applyDiscount(subtotal) : subtotal, [hasDiscount, applyDiscount, subtotal]);
  const discountAmount = useMemo(() => subtotal - discountedSubtotal, [subtotal, discountedSubtotal]);
  const shipping = useMemo(() => subscriberFreeShipping || discountedSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_COST, [subscriberFreeShipping, discountedSubtotal]);
  const total = useMemo(() => discountedSubtotal + shipping, [discountedSubtotal, shipping]);
  const freeShippingThreshold = useMemo(() => subscriberFreeShipping ? 0 : FREE_SHIPPING_THRESHOLD, [subscriberFreeShipping]);
  const freeShippingProgress = useMemo(() => subscriberFreeShipping
    ? 100
    : Math.min((discountedSubtotal / freeShippingThreshold) * 100, 100), [subscriberFreeShipping, discountedSubtotal, freeShippingThreshold]);

  const handleUpdateQuantity = useCallback((productId: string, quantity: number) => {
    updateQuantity(productId, quantity);
  }, [updateQuantity]);

  const handleRemoveItem = useCallback((productId: string) => {
    removeItem(productId);
  }, [removeItem]);

  return (
    <>
      <SkipLink />
      <main className="pt-24 min-h-screen" id="cart-main-content">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <BlurFade inView>
            <header className="flex items-center gap-3 mb-8">
              <Avatar className="w-12 h-12 bg-primary/10">
                <AvatarFallback className="bg-primary/10">
                  <ShoppingBag className="w-6 h-6 text-primary" aria-hidden="true" />
                </AvatarFallback>
              </Avatar>
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Your Cart
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
                    <ShoppingBag className="w-16 h-16 opacity-50" aria-hidden="true" />
                  </EmptyMedia>
                  <EmptyTitle className="text-2xl">Your cart is empty</EmptyTitle>
                  <EmptyDescription>
                    Explore our collection of natural fragrances and find your signature scent.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button size="lg" className="group" asChild>
                    <Link to="/products">
                      Browse Products
                      <ArrowRight
                        className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                    </Link>
                  </Button>
                </EmptyContent>
              </Empty>
            ) : (
              <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
                <div className="lg:col-span-2 space-y-4">
                  {items.map((item, index) => (
                    <BlurFade key={item.id} delay={0.05 * index} inView>
                      <Card className="flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 border border-border shadow-sm overflow-visible">
                        <div className="w-full sm:w-24 h-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg overflow-hidden bg-secondary/30 shrink-0">
                          <img
                            src={item.image}
                            alt={item.name}
                            className="w-full h-full object-cover"
                          />
                        </div>
                        <CardContent className="flex-1 min-w-0 p-0">
                          <div className="flex justify-between items-start mb-1">
                            <CardTitle className="text-lg font-heading font-semibold truncate">
                              {item.name}
                            </CardTitle>
                            <Tooltip>
                              <TooltipTrigger asChild>
                                <Button
                                  variant="ghost"
                                  size="icon"
                                  onClick={() => handleRemoveItem(item.productId)}
                                  className="text-muted-foreground hover:text-destructive shrink-0 -mt-1 -mr-1"
                                  aria-label={`Remove ${item.name} from cart`}
                                >
                                  <Trash2 className="w-4 h-4" aria-hidden="true" />
                                </Button>
                              </TooltipTrigger>
                              <TooltipContent>Remove item</TooltipContent>
                            </Tooltip>
                          </div>
                          <div className="flex items-center gap-1.5 mb-3">
                            <Leaf
                              className="w-3.5 h-3.5 text-primary shrink-0"
                              aria-hidden="true"
                            />
                            <span className="text-xs text-muted-foreground truncate">
                              {item.size}
                            </span>
                          </div>
                          <div className="flex items-center justify-between gap-4">
                            <div className="flex items-center" role="group" aria-label="Quantity selector">
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handleUpdateQuantity(item.productId, Math.max(1, item.quantity - 1))}
                                disabled={item.quantity <= 1}
                                aria-label={`Decrease quantity of ${item.name}`}
                                className="w-10 h-10"
                              >
                                <Minus className="w-3.5 h-3.5" aria-hidden="true" />
                              </Button>
                              <input
                                type="text"
                                inputMode="numeric"
                                pattern="[1-9][0-9]*"
                                value={item.quantity}
                                onChange={(e) => {
                                  const val = parseInt(e.target.value);
                                  if (!isNaN(val) && val >= 1) {
                                    handleUpdateQuantity(item.productId, Math.min(val, MAX_QUANTITY));
                                  } else if (e.target.value === "") {
                                    handleUpdateQuantity(item.productId, 1);
                                  }
                                }}
                                className="w-16 h-10 flex items-center justify-center text-lg font-medium text-center border-y border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                                aria-label={`Quantity for ${item.name}`}
                              />
                              <Button
                                variant="outline"
                                size="icon"
                                onClick={() => handleUpdateQuantity(item.productId, item.quantity + 1)}
                                disabled={item.quantity >= MAX_QUANTITY}
                                aria-label={`Increase quantity of ${item.name}`}
                                className="w-10 h-10"
                              >
                                <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                              </Button>
                            </div>
                            <span className="text-lg font-heading font-bold text-primary whitespace-nowrap">
                              €{item.price * item.quantity}
                            </span>
                          </div>
                        </CardContent>
                      </Card>
                    </BlurFade>
                  ))}

                  <Button variant="ghost" className="group mt-4" asChild>
                    <Link to="/products">
                      <ArrowLeft
                        className="mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform"
                        aria-hidden="true"
                      />
                      Continue Shopping
                    </Link>
                  </Button>
                </div>

                <BlurFade delay={BLUR_FADE_DELAY_LONG} inView>
                  <Card className="sticky top-28 h-fit">
                    <CardHeader>
                      <CardTitle className="text-xl font-heading font-semibold">
                        Order Summary
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      {hasDiscount && (
                        <Alert className="bg-primary/10 border-primary/20">
                          <Sparkles className="h-4 w-4 text-primary" aria-hidden="true" />
                          <AlertDescription className="text-sm">
                            <Badge variant="secondary" className="mr-2">
                              {currentPlan?.name} - {getDiscount()}% off
                            </Badge>
                            Member discount applied
                          </AlertDescription>
                        </Alert>
                      )}
                      {subscriberFreeShipping || shipping === 0 ? (
                        <Alert className="bg-primary/10 border-primary/20">
                          <Truck className="h-4 w-4 text-primary" aria-hidden="true" />
                          <AlertDescription className="text-sm">
                            <Badge variant="secondary" className="mr-2">
                              Free shipping
                            </Badge>
                            {subscriberFreeShipping
                              ? "with your subscription"
                              : "on orders over €50"}
                          </AlertDescription>
                        </Alert>
                      ) : (
                        <div className="space-y-2">
                          <Progress
                            value={freeShippingProgress}
                            className="h-2"
                            aria-valuenow={freeShippingProgress}
                            aria-valuemin={0}
                            aria-valuemax={100}
                          />
                          <p className="text-xs text-muted-foreground text-center">
                            Add €{(freeShippingThreshold - discountedSubtotal).toFixed(2)} more for free shipping
                          </p>
                        </div>
                      )}
                      {hasDiscount && discountAmount > 0 && (
                        <div className="flex justify-between text-sm">
                          <span className="text-muted-foreground">Regular Price</span>
                          <span className="text-muted-foreground line-through">
                            €{subtotal.toFixed(2)}
                          </span>
                        </div>
                      )}
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">
                          Subtotal
                          {hasDiscount && (
                            <span className="text-xs text-primary ml-1">
                              (after {getDiscount()}% discount)
                            </span>
                          )}
                        </span>
                        <span className="text-foreground">€{discountedSubtotal.toFixed(2)}</span>
                      </div>
                      <div className="flex justify-between text-sm">
                        <span className="text-muted-foreground">Shipping</span>
                        <span className="text-foreground">
                          {shipping === 0 ? (
                            <Badge variant="secondary">Free</Badge>
                          ) : (
                            `€${shipping.toFixed(2)}`
                          )}
                        </span>
                      </div>
                      <Separator />
                      <div className="flex justify-between">
                        <span className="font-heading font-semibold text-foreground">Total</span>
                        <span className="text-xl font-heading font-bold text-primary">
                          €{total.toFixed(2)}
                        </span>
                      </div>
                    </CardContent>
                    <CardFooter className="flex-col gap-4">
                      <Button size="lg" className="w-full group" asChild>
                        <Link to="/checkout">
                          Proceed to Checkout
                          <ArrowRight
                            className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform"
                            aria-hidden="true"
                          />
                        </Link>
                      </Button>
                      <p className="text-xs text-muted-foreground text-center">
                        Secure checkout · Eco-friendly packaging included
                      </p>
                    </CardFooter>
                  </Card>
                </BlurFade>
              </div>
            )}
          </BlurFade>
        </div>
      </main>
    </>
  );
}

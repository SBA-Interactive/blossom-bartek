import React, { useState } from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardFooter } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Separator } from "@/components/ui/separator";
import { Badge } from "@/components/ui/badge";
import { BlurFade } from "@/components/ui/blur-fade";
import { Link } from "@tanstack/react-router";
import { useCartStore } from "@/store/useCartStore";
import { useSubscriptionStore, SUBSCRIPTION_PLANS } from "@/store/useSubscriptionStore";
import { FREE_SHIPPING_THRESHOLD, STANDARD_SHIPPING_COST } from "@/constants/shipping";
import { BLUR_FADE_DELAY_MEDIUM } from "@/constants/animation";
import {
  ArrowLeft,
  ArrowRight,
  CreditCard,
  Wallet,
  Leaf,
  Package,
  AlertTriangle,
  Sparkles,
  Truck,
} from "lucide-react";

export default function CheckoutPage() {
  const items = useCartStore((state) => state.items);
  const [paymentMethod, setPaymentMethod] = useState<"card" | "paypal">("card");
  const { currentTier, getDiscount, hasFreeShipping, applyDiscount } = useSubscriptionStore();

  const currentPlan = SUBSCRIPTION_PLANS.find((p) => p.id === currentTier);
  const hasDiscount = currentTier !== "free";
  const subscriberFreeShipping = hasFreeShipping();

  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedSubtotal = hasDiscount ? applyDiscount(subtotal) : subtotal;
  const discountAmount = subtotal - discountedSubtotal;
  const shipping = subscriberFreeShipping || discountedSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_COST;
  const total = discountedSubtotal + shipping;

  return (
    <main className="pt-24 min-h-screen">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
        <BlurFade inView>
          <div className="flex items-center gap-3 mb-8">
            <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
              Checkout
            </h1>
            <Badge variant="outline" className="text-orange-500 border-orange-500">
              <AlertTriangle className="w-3 h-3 mr-1" />
              Demo Mode
            </Badge>
          </div>

          {items.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-muted-foreground mb-4">Your cart is empty</p>
              <Button asChild>
                <Link to="/products">Browse Products</Link>
              </Button>
            </div>
          ) : (
            <div className="grid lg:grid-cols-3 gap-8 lg:gap-12">
              <div className="lg:col-span-2 space-y-6">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-xl font-heading font-semibold">
                      Payment Method
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-6">
                    <RadioGroup
                      value={paymentMethod}
                      onValueChange={(value) => setPaymentMethod(value as "card" | "paypal")}
                      className="flex flex-col sm:flex-row gap-4"
                    >
                      <div className="flex-1">
                        <RadioGroupItem
                          value="card"
                          id="card"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="card"
                          className="flex items-center gap-3 p-4 border-2 border-border rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-secondary/50 transition-colors"
                        >
                          <CreditCard className="w-5 h-5 text-primary" />
                          <div>
                            <span className="font-medium">Card / Bank Transfer</span>
                            <p className="text-xs text-muted-foreground">Visa, Mastercard, etc.</p>
                          </div>
                        </Label>
                      </div>
                      <div className="flex-1">
                        <RadioGroupItem
                          value="paypal"
                          id="paypal"
                          className="peer sr-only"
                        />
                        <Label
                          htmlFor="paypal"
                          className="flex items-center gap-3 p-4 border-2 border-border rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-secondary/50 transition-colors"
                        >
                          <Wallet className="w-5 h-5 text-primary" />
                          <div>
                            <span className="font-medium">PayPal</span>
                            <p className="text-xs text-muted-foreground">Pay with your PayPal account</p>
                          </div>
                        </Label>
                      </div>
                    </RadioGroup>

                    {paymentMethod === "card" && (
                      <div className="space-y-4 p-6 bg-secondary/30 rounded-lg">
                        <div className="grid sm:grid-cols-2 gap-4">
                          <div className="sm:col-span-2">
                            <Label htmlFor="cardName">Cardholder Name</Label>
                            <Input
                              id="cardName"
                              placeholder="John Doe"
                              className="mt-1.5"
                            />
                          </div>
                          <div className="sm:col-span-2">
                            <Label htmlFor="cardNumber">Card Number</Label>
                            <Input
                              id="cardNumber"
                              placeholder="1234 5678 9012 3456"
                              className="mt-1.5"
                            />
                          </div>
                          <div>
                            <Label htmlFor="expiry">Expiry Date</Label>
                            <Input
                              id="expiry"
                              placeholder="MM/YY"
                              className="mt-1.5"
                            />
                          </div>
                          <div>
                            <Label htmlFor="cvv">CVV/CVC</Label>
                            <Input
                              id="cvv"
                              placeholder="123"
                              className="mt-1.5"
                            />
                          </div>
                        </div>
                        <p className="text-xs text-muted-foreground">
                          This is a demo. Enter any fake data to test.
                        </p>
                      </div>
                    )}

                    {paymentMethod === "paypal" && (
                      <div className="space-y-4 p-6 bg-secondary/30 rounded-lg text-center">
                        <Wallet className="w-12 h-12 mx-auto text-primary" />
                        <div>
                          <p className="font-medium">Pay with PayPal</p>
                          <p className="text-sm text-muted-foreground">
                            You will be redirected to PayPal to complete your purchase.
                          </p>
                        </div>
                        <Button type="button" className="w-full sm:w-auto">
                          Continue with PayPal
                        </Button>
                        <p className="text-xs text-muted-foreground">
                          This is a demo. No actual PayPal payment will be processed.
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>

                <Button variant="ghost" asChild>
                  <Link to="/cart">
                    <ArrowLeft className="mr-2 w-4 h-4" />
                    Back to Cart
                  </Link>
                </Button>
              </div>

              <BlurFade delay={BLUR_FADE_DELAY_MEDIUM} inView>
                <Card className="sticky top-28 h-fit">
                  <CardHeader>
                    <CardTitle className="text-xl font-heading font-semibold">
                      Order Summary
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="space-y-3 max-h-48 overflow-y-auto">
                      {items.map((item) => (
                        <div key={item.id} className="flex justify-between text-sm">
                          <span className="text-muted-foreground">
                            {item.name} x{item.quantity}
                          </span>
                          <span>€{(item.price * item.quantity).toFixed(2)}</span>
                        </div>
                      ))}
                    </div>

                    {hasDiscount && (
                      <div className="flex items-center gap-2 text-sm">
                        <Sparkles className="w-4 h-4 text-primary" />
                        <Badge variant="secondary" className="text-xs">
                          {currentPlan?.name} - {getDiscount()}% off
                        </Badge>
                      </div>
                    )}
                    {subscriberFreeShipping || shipping === 0 ? (
                      <div className="flex items-center gap-2 text-sm">
                        <Truck className="w-4 h-4 text-primary" />
                        <Badge variant="secondary" className="text-xs">
                          Free shipping
                        </Badge>
                      </div>
                    ) : null}

                    <Separator />

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
                        {subscriberFreeShipping || shipping === 0 ? (
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

                    <div className="flex items-center gap-2 text-xs text-muted-foreground">
                      <Leaf className="w-3.5 h-3.5" />
                      Eco-friendly packaging included
                    </div>
                  </CardContent>
                  <CardFooter>
                    <Button
                      size="lg"
                      className="w-full group"
                      disabled={paymentMethod === "card"}
                    >
                      Complete Order
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1" />
                    </Button>

                  </CardFooter>
                </Card>
              </BlurFade>
            </div>
          )}
        </BlurFade>
      </div>
    </main>
  );
}
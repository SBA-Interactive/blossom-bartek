import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { i as useCartStore, q as useSubscriptionStore, r as SUBSCRIPTION_PLANS, B as BlurFade, A as Avatar, a as AvatarFallback, b as Badge, E as Empty, c as EmptyHeader, d as EmptyMedia, e as EmptyTitle, f as EmptyDescription, g as EmptyContent, h as Button, C as Card, l as CardContent, o as CardTitle, T as Tooltip, j as TooltipTrigger, k as TooltipContent, n as CardHeader, y as Alert, D as AlertDescription, P as Progress, m as Separator, w as CardFooter } from "./router-CtctPOdV.js";
import { Link } from "@tanstack/react-router";
import { ShoppingBag, ArrowRight, Trash2, Leaf, Minus, Plus, ArrowLeft, Sparkles, Truck } from "lucide-react";
import "class-variance-authority";
import "radix-ui";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
import "zustand";
import "react";
import "react-dom";
import "zustand/middleware";
import "@hugeicons/react";
import "@hugeicons/core-free-icons";
import "motion/react";
import "next-themes";
import "sonner";
function SkipLink() {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: "#cart-main-content",
      className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
      children: "Skip to main content"
    }
  );
}
function CartPage() {
  const items = useCartStore((state) => state.items);
  const updateQuantity = useCartStore((state) => state.updateQuantity);
  const removeItem = useCartStore((state) => state.removeItem);
  const { currentTier, getDiscount, hasFreeShipping, applyDiscount } = useSubscriptionStore();
  const currentPlan = SUBSCRIPTION_PLANS.find((p) => p.id === currentTier);
  const hasDiscount = currentTier !== "free";
  const subscriberFreeShipping = hasFreeShipping();
  const subtotal = items.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const discountedSubtotal = hasDiscount ? applyDiscount(subtotal) : subtotal;
  const discountAmount = subtotal - discountedSubtotal;
  const shipping = subscriberFreeShipping || discountedSubtotal >= 50 ? 0 : 4.99;
  const total = discountedSubtotal + shipping;
  const freeShippingThreshold = subscriberFreeShipping ? 0 : 50;
  const freeShippingProgress = subscriberFreeShipping ? 100 : Math.min(discountedSubtotal / freeShippingThreshold * 100, 100);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SkipLink, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-24 min-h-screen", id: "cart-main-content", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16", children: /* @__PURE__ */ jsxs(BlurFade, { inView: true, children: [
      /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx(Avatar, { className: "w-12 h-12 bg-primary/10", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(ShoppingBag, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }) }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground", children: "Your Cart" }),
        items.length > 0 && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "ml-2", children: [
          items.length,
          " ",
          items.length === 1 ? "item" : "items"
        ] })
      ] }),
      items.length === 0 ? /* @__PURE__ */ jsxs(Empty, { children: [
        /* @__PURE__ */ jsxs(EmptyHeader, { children: [
          /* @__PURE__ */ jsx(EmptyMedia, { variant: "icon", children: /* @__PURE__ */ jsx(ShoppingBag, { className: "w-16 h-16 opacity-50", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx(EmptyTitle, { className: "text-2xl", children: "Your cart is empty" }),
          /* @__PURE__ */ jsx(EmptyDescription, { children: "Explore our collection of natural fragrances and find your signature scent." })
        ] }),
        /* @__PURE__ */ jsx(EmptyContent, { children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "group", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/products", children: [
          "Browse Products",
          /* @__PURE__ */ jsx(
            ArrowRight,
            {
              className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform",
              "aria-hidden": "true"
            }
          )
        ] }) }) })
      ] }) : /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8 lg:gap-12", children: [
        /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
          items.map((item, index) => /* @__PURE__ */ jsx(BlurFade, { delay: 0.05 * index, inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 border border-border shadow-sm overflow-visible", children: [
            /* @__PURE__ */ jsx("div", { className: "w-full sm:w-24 h-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg overflow-hidden bg-secondary/30 shrink-0", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: item.image,
                alt: item.name,
                className: "w-full h-full object-cover"
              }
            ) }),
            /* @__PURE__ */ jsxs(CardContent, { className: "flex-1 min-w-0 p-0", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-1", children: [
                /* @__PURE__ */ jsx(CardTitle, { className: "text-lg font-heading font-semibold truncate", children: item.name }),
                /* @__PURE__ */ jsxs(Tooltip, { children: [
                  /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "ghost",
                      size: "icon",
                      onClick: () => removeItem(item.productId),
                      className: "text-muted-foreground hover:text-destructive shrink-0 -mt-1 -mr-1",
                      "aria-label": `Remove ${item.name} from cart`,
                      children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4", "aria-hidden": "true" })
                    }
                  ) }),
                  /* @__PURE__ */ jsx(TooltipContent, { children: "Remove item" })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 mb-3", children: [
                /* @__PURE__ */ jsx(
                  Leaf,
                  {
                    className: "w-3.5 h-3.5 text-primary shrink-0",
                    "aria-hidden": "true"
                  }
                ),
                /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground truncate", children: item.size })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex items-center", role: "group", "aria-label": "Quantity selector", children: [
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "icon",
                      onClick: () => updateQuantity(item.productId, Math.max(1, item.quantity - 1)),
                      disabled: item.quantity <= 1,
                      "aria-label": `Decrease quantity of ${item.name}`,
                      className: "w-10 h-10",
                      children: /* @__PURE__ */ jsx(Minus, { className: "w-3.5 h-3.5", "aria-hidden": "true" })
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    "input",
                    {
                      type: "number",
                      min: 1,
                      max: 10,
                      value: item.quantity,
                      onChange: (e) => {
                        const val = parseInt(e.target.value) || 1;
                        updateQuantity(item.productId, Math.min(Math.max(1, val), 10));
                      },
                      className: "w-16 h-10 flex items-center justify-center text-lg font-medium text-center border-y border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary",
                      "aria-label": `Quantity for ${item.name}`
                    }
                  ),
                  /* @__PURE__ */ jsx(
                    Button,
                    {
                      variant: "outline",
                      size: "icon",
                      onClick: () => updateQuantity(item.productId, item.quantity + 1),
                      disabled: item.quantity >= 10,
                      "aria-label": `Increase quantity of ${item.name}`,
                      className: "w-10 h-10",
                      children: /* @__PURE__ */ jsx(Plus, { className: "w-3.5 h-3.5", "aria-hidden": "true" })
                    }
                  )
                ] }),
                /* @__PURE__ */ jsxs("span", { className: "text-lg font-heading font-bold text-primary whitespace-nowrap", children: [
                  "€",
                  item.price * item.quantity
                ] })
              ] })
            ] })
          ] }) }, item.id)),
          /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "group mt-4", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/products", children: [
            /* @__PURE__ */ jsx(
              ArrowLeft,
              {
                className: "mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform",
                "aria-hidden": "true"
              }
            ),
            "Continue Shopping"
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(BlurFade, { delay: 0.3, inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "sticky top-28 h-fit", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-heading font-semibold", children: "Order Summary" }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
            hasDiscount && /* @__PURE__ */ jsxs(Alert, { className: "bg-primary/10 border-primary/20", children: [
              /* @__PURE__ */ jsx(Sparkles, { className: "h-4 w-4 text-primary", "aria-hidden": "true" }),
              /* @__PURE__ */ jsxs(AlertDescription, { className: "text-sm", children: [
                /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "mr-2", children: [
                  currentPlan?.name,
                  " - ",
                  getDiscount(),
                  "% off"
                ] }),
                "Member discount applied"
              ] })
            ] }),
            subscriberFreeShipping || shipping === 0 ? /* @__PURE__ */ jsxs(Alert, { className: "bg-primary/10 border-primary/20", children: [
              /* @__PURE__ */ jsx(Truck, { className: "h-4 w-4 text-primary", "aria-hidden": "true" }),
              /* @__PURE__ */ jsxs(AlertDescription, { className: "text-sm", children: [
                /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "mr-2", children: "Free shipping" }),
                subscriberFreeShipping ? "with your subscription" : "on orders over €50"
              ] })
            ] }) : /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(
                Progress,
                {
                  value: freeShippingProgress,
                  className: "h-2",
                  "aria-valuenow": freeShippingProgress,
                  "aria-valuemin": 0,
                  "aria-valuemax": 100
                }
              ),
              /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground text-center", children: [
                "Add €",
                (freeShippingThreshold - discountedSubtotal).toFixed(2),
                " more for free shipping"
              ] })
            ] }),
            hasDiscount && discountAmount > 0 && /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Regular Price" }),
              /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground line-through", children: [
                "€",
                subtotal.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
                "Subtotal",
                hasDiscount && /* @__PURE__ */ jsxs("span", { className: "text-xs text-primary ml-1", children: [
                  "(after ",
                  getDiscount(),
                  "% discount)"
                ] })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-foreground", children: [
                "€",
                discountedSubtotal.toFixed(2)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
              /* @__PURE__ */ jsx("span", { className: "text-muted-foreground", children: "Shipping" }),
              /* @__PURE__ */ jsx("span", { className: "text-foreground", children: shipping === 0 ? /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "Free" }) : `€${shipping.toFixed(2)}` })
            ] }),
            /* @__PURE__ */ jsx(Separator, {}),
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
              /* @__PURE__ */ jsx("span", { className: "font-heading font-semibold text-foreground", children: "Total" }),
              /* @__PURE__ */ jsxs("span", { className: "text-xl font-heading font-bold text-primary", children: [
                "€",
                total.toFixed(2)
              ] })
            ] })
          ] }),
          /* @__PURE__ */ jsxs(CardFooter, { className: "flex-col gap-4", children: [
            /* @__PURE__ */ jsx(Button, { size: "lg", className: "w-full group", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/checkout", children: [
              "Proceed to Checkout",
              /* @__PURE__ */ jsx(
                ArrowRight,
                {
                  className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform",
                  "aria-hidden": "true"
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Secure checkout · Eco-friendly packaging included" })
          ] })
        ] }) })
      ] })
    ] }) }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsx(CartPage, {});
export {
  SplitComponent as component
};

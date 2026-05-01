import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { i as useCartStore, q as useSubscriptionStore, F as SUBSCRIPTION_PLANS, B as Badge, E as Empty, a as EmptyHeader, b as EmptyMedia, c as EmptyTitle, d as EmptyDescription, e as EmptyContent, f as Button, h as BlurFade, C as Card, o as CardContent, n as CardTitle, k as Tooltip, T as TooltipTrigger, j as TooltipContent, M as MAX_QUANTITY, m as CardHeader, v as Alert, x as AlertDescription, H as Progress, l as Separator, G as CardFooter, A as Avatar, g as AvatarFallback } from "./router-B2FLevz_.js";
import { b as BLUR_FADE_DELAY_LONG } from "./animation-DXk-6j-p.js";
import { Link } from "@tanstack/react-router";
import { S as STANDARD_SHIPPING_COST, F as FREE_SHIPPING_THRESHOLD } from "./shipping-Brp8TykX.js";
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
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("a", { href: "#cart-main-content", className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary", children: "Skip to main content" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function CartPage() {
  const $ = c(37);
  const items = useCartStore(_temp);
  const updateQuantity = useCartStore(_temp2);
  const removeItem = useCartStore(_temp3);
  const {
    currentTier,
    getDiscount,
    hasFreeShipping,
    applyDiscount
  } = useSubscriptionStore();
  let t0;
  if ($[0] !== currentTier) {
    t0 = SUBSCRIPTION_PLANS.find((p) => p.id === currentTier);
    $[0] = currentTier;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const currentPlan = t0;
  const hasDiscount = currentTier !== "free";
  let t1;
  if ($[2] !== hasFreeShipping) {
    t1 = hasFreeShipping();
    $[2] = hasFreeShipping;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const subscriberFreeShipping = t1;
  const subtotal = items.reduce(_temp4, 0);
  let t2;
  if ($[4] !== applyDiscount || $[5] !== hasDiscount || $[6] !== subtotal) {
    t2 = hasDiscount ? applyDiscount(subtotal) : subtotal;
    $[4] = applyDiscount;
    $[5] = hasDiscount;
    $[6] = subtotal;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  const discountedSubtotal = t2;
  const discountAmount = subtotal - discountedSubtotal;
  const shipping = subscriberFreeShipping || discountedSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_COST;
  const total = discountedSubtotal + shipping;
  const freeShippingThreshold = subscriberFreeShipping ? 0 : FREE_SHIPPING_THRESHOLD;
  const freeShippingProgress = subscriberFreeShipping ? 100 : Math.min(discountedSubtotal / freeShippingThreshold * 100, 100);
  let t3;
  if ($[8] !== updateQuantity) {
    t3 = (productId, quantity) => {
      updateQuantity(productId, quantity);
    };
    $[8] = updateQuantity;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  const handleUpdateQuantity = t3;
  let t4;
  if ($[10] !== removeItem) {
    t4 = (productId_0) => {
      removeItem(productId_0);
    };
    $[10] = removeItem;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  const handleRemoveItem = t4;
  let t5;
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx(SkipLink, {});
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  let t6;
  let t7;
  if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx(Avatar, { className: "w-12 h-12 bg-primary/10", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(ShoppingBag, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }) }) });
    t7 = /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground", children: "Your Cart" });
    $[13] = t6;
    $[14] = t7;
  } else {
    t6 = $[13];
    t7 = $[14];
  }
  let t8;
  if ($[15] !== items.length) {
    t8 = items.length > 0 && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "ml-2", children: [
      items.length,
      " ",
      items.length === 1 ? "item" : "items"
    ] });
    $[15] = items.length;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  let t9;
  if ($[17] !== t8) {
    t9 = /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-3 mb-8", children: [
      t6,
      t7,
      t8
    ] });
    $[17] = t8;
    $[18] = t9;
  } else {
    t9 = $[18];
  }
  let t10;
  if ($[19] !== currentPlan?.name || $[20] !== discountAmount || $[21] !== discountedSubtotal || $[22] !== freeShippingProgress || $[23] !== freeShippingThreshold || $[24] !== getDiscount || $[25] !== handleRemoveItem || $[26] !== handleUpdateQuantity || $[27] !== hasDiscount || $[28] !== items || $[29] !== shipping || $[30] !== subscriberFreeShipping || $[31] !== subtotal || $[32] !== total) {
    t10 = items.length === 0 ? /* @__PURE__ */ jsxs(Empty, { children: [
      /* @__PURE__ */ jsxs(EmptyHeader, { children: [
        /* @__PURE__ */ jsx(EmptyMedia, { variant: "icon", children: /* @__PURE__ */ jsx(ShoppingBag, { className: "w-16 h-16 opacity-50", "aria-hidden": "true" }) }),
        /* @__PURE__ */ jsx(EmptyTitle, { className: "text-2xl", children: "Your cart is empty" }),
        /* @__PURE__ */ jsx(EmptyDescription, { children: "Explore our collection of natural fragrances and find your signature scent." })
      ] }),
      /* @__PURE__ */ jsx(EmptyContent, { children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "group", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/products", children: [
        "Browse Products",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform", "aria-hidden": "true" })
      ] }) }) })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-4", children: [
        items.map((item_0, index) => /* @__PURE__ */ jsx(BlurFade, { delay: 0.05 * index, inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "flex flex-col sm:flex-row gap-4 sm:gap-6 p-4 border border-border shadow-sm overflow-visible", children: [
          /* @__PURE__ */ jsx("div", { className: "w-full sm:w-24 h-24 sm:h-24 lg:w-32 lg:h-32 rounded-lg overflow-hidden bg-secondary/30 shrink-0", children: /* @__PURE__ */ jsx("img", { src: item_0.image, alt: item_0.name, className: "w-full h-full object-cover" }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "flex-1 min-w-0 p-0", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex justify-between items-start mb-1", children: [
              /* @__PURE__ */ jsx(CardTitle, { className: "text-lg font-heading font-semibold truncate", children: item_0.name }),
              /* @__PURE__ */ jsxs(Tooltip, { children: [
                /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: () => handleRemoveItem(item_0.productId), className: "text-muted-foreground hover:text-destructive shrink-0 -mt-1 -mr-1", "aria-label": `Remove ${item_0.name} from cart`, children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4", "aria-hidden": "true" }) }) }),
                /* @__PURE__ */ jsx(TooltipContent, { children: "Remove item" })
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1.5 mb-3", children: [
              /* @__PURE__ */ jsx(Leaf, { className: "w-3.5 h-3.5 text-primary shrink-0", "aria-hidden": "true" }),
              /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground truncate", children: item_0.size })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", role: "group", "aria-label": "Quantity selector", children: [
                /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", onClick: () => handleUpdateQuantity(item_0.productId, Math.max(1, item_0.quantity - 1)), disabled: item_0.quantity <= 1, "aria-label": `Decrease quantity of ${item_0.name}`, className: "w-10 h-10", children: /* @__PURE__ */ jsx(Minus, { className: "w-3.5 h-3.5", "aria-hidden": "true" }) }),
                /* @__PURE__ */ jsx("input", { type: "text", inputMode: "numeric", pattern: "[1-9][0-9]*", value: item_0.quantity, onChange: (e) => {
                  const val = parseInt(e.target.value);
                  if (!isNaN(val) && val >= 1) {
                    handleUpdateQuantity(item_0.productId, Math.min(val, MAX_QUANTITY));
                  } else {
                    if (e.target.value === "") {
                      handleUpdateQuantity(item_0.productId, 1);
                    }
                  }
                }, className: "w-16 h-10 flex items-center justify-center text-lg font-medium text-center border-y border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary", "aria-label": `Quantity for ${item_0.name}` }),
                /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", onClick: () => handleUpdateQuantity(item_0.productId, item_0.quantity + 1), disabled: item_0.quantity >= MAX_QUANTITY, "aria-label": `Increase quantity of ${item_0.name}`, className: "w-10 h-10", children: /* @__PURE__ */ jsx(Plus, { className: "w-3.5 h-3.5", "aria-hidden": "true" }) })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-lg font-heading font-bold text-primary whitespace-nowrap", children: [
                "€",
                item_0.price * item_0.quantity
              ] })
            ] })
          ] })
        ] }) }, item_0.id)),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", className: "group mt-4", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/products", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 w-4 h-4 group-hover:-translate-x-1 transition-transform", "aria-hidden": "true" }),
          "Continue Shopping"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_LONG, inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "sticky top-28 h-fit", children: [
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
            /* @__PURE__ */ jsx(Progress, { value: freeShippingProgress, className: "h-2", "aria-valuenow": freeShippingProgress, "aria-valuemin": 0, "aria-valuemax": 100 }),
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
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform", "aria-hidden": "true" })
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground text-center", children: "Secure checkout · Eco-friendly packaging included" })
        ] })
      ] }) })
    ] });
    $[19] = currentPlan?.name;
    $[20] = discountAmount;
    $[21] = discountedSubtotal;
    $[22] = freeShippingProgress;
    $[23] = freeShippingThreshold;
    $[24] = getDiscount;
    $[25] = handleRemoveItem;
    $[26] = handleUpdateQuantity;
    $[27] = hasDiscount;
    $[28] = items;
    $[29] = shipping;
    $[30] = subscriberFreeShipping;
    $[31] = subtotal;
    $[32] = total;
    $[33] = t10;
  } else {
    t10 = $[33];
  }
  let t11;
  if ($[34] !== t10 || $[35] !== t9) {
    t11 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t5,
      /* @__PURE__ */ jsx("main", { className: "pt-24 min-h-screen", id: "cart-main-content", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16", children: /* @__PURE__ */ jsxs(BlurFade, { inView: true, children: [
        t9,
        t10
      ] }) }) })
    ] });
    $[34] = t10;
    $[35] = t9;
    $[36] = t11;
  } else {
    t11 = $[36];
  }
  return t11;
}
function _temp4(sum, item) {
  return sum + item.price * item.quantity;
}
function _temp3(state_1) {
  return state_1.removeItem;
}
function _temp2(state_0) {
  return state_0.updateQuantity;
}
function _temp(state) {
  return state.items;
}
const SplitComponent = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(CartPage, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  SplitComponent as component
};

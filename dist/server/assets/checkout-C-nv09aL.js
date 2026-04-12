import { jsx, jsxs } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { useState } from "react";
import { y as cn, i as useCartStore, q as useSubscriptionStore, F as SUBSCRIPTION_PLANS, f as Button, C as Card, m as CardHeader, n as CardTitle, o as CardContent, L as Label, I as Input, h as BlurFade, B as Badge, l as Separator, G as CardFooter } from "./router-p6p1R6bc.js";
import { RadioGroup as RadioGroup$1 } from "radix-ui";
import { Link } from "@tanstack/react-router";
import { S as STANDARD_SHIPPING_COST, F as FREE_SHIPPING_THRESHOLD } from "./shipping-Brp8TykX.js";
import { B as BLUR_FADE_DELAY_MEDIUM } from "./animation-DXk-6j-p.js";
import { CreditCard, Wallet, ArrowLeft, Sparkles, Truck, Leaf, ArrowRight, AlertTriangle } from "lucide-react";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
import "zustand";
import "react-dom";
import "zustand/middleware";
import "@hugeicons/react";
import "@hugeicons/core-free-icons";
import "motion/react";
import "next-themes";
import "sonner";
function RadioGroup(t0) {
  const $ = c(8);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("grid w-full gap-3", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(RadioGroup$1.Root, { "data-slot": "radio-group", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function RadioGroupItem(t0) {
  const $ = c(9);
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
  } else {
    className = $[1];
    props = $[2];
  }
  let t1;
  if ($[3] !== className) {
    t1 = cn("group/radio-group-item peer relative flex aspect-square size-4 shrink-0 rounded-full border border-input outline-none after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(RadioGroup$1.Indicator, { "data-slot": "radio-group-indicator", className: "flex size-4 items-center justify-center", children: /* @__PURE__ */ jsx("span", { className: "absolute top-1/2 left-1/2 size-2 -translate-x-1/2 -translate-y-1/2 rounded-full bg-primary-foreground" }) });
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== props || $[7] !== t1) {
    t3 = /* @__PURE__ */ jsx(RadioGroup$1.Item, { "data-slot": "radio-group-item", className: t1, ...props, children: t2 });
    $[6] = props;
    $[7] = t1;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
function CheckoutPage() {
  const $ = c(30);
  const items = useCartStore(_temp);
  const [paymentMethod, setPaymentMethod] = useState("card");
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
  let T0;
  let t2;
  let t3;
  let t4;
  let t5;
  let t6;
  if ($[4] !== applyDiscount || $[5] !== currentPlan?.name || $[6] !== getDiscount || $[7] !== hasDiscount || $[8] !== items || $[9] !== paymentMethod || $[10] !== subscriberFreeShipping) {
    const subtotal = items.reduce(_temp2, 0);
    const discountedSubtotal = hasDiscount ? applyDiscount(subtotal) : subtotal;
    const discountAmount = subtotal - discountedSubtotal;
    const shipping = subscriberFreeShipping || discountedSubtotal >= FREE_SHIPPING_THRESHOLD ? 0 : STANDARD_SHIPPING_COST;
    const total = discountedSubtotal + shipping;
    t6 = "pt-24 min-h-screen";
    t5 = "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16";
    T0 = BlurFade;
    t2 = true;
    let t72;
    if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t72 = /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground", children: "Checkout" });
      $[17] = t72;
    } else {
      t72 = $[17];
    }
    if ($[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t3 = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-8", children: [
        t72,
        /* @__PURE__ */ jsxs(Badge, { variant: "outline", className: "text-orange-500 border-orange-500", children: [
          /* @__PURE__ */ jsx(AlertTriangle, { className: "w-3 h-3 mr-1" }),
          "Demo Mode"
        ] })
      ] });
      $[18] = t3;
    } else {
      t3 = $[18];
    }
    t4 = items.length === 0 ? /* @__PURE__ */ jsxs("div", { className: "text-center py-16", children: [
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-4", children: "Your cart is empty" }),
      /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/products", children: "Browse Products" }) })
    ] }) : /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-3 gap-8 lg:gap-12", children: [
      /* @__PURE__ */ jsxs("div", { className: "lg:col-span-2 space-y-6", children: [
        /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-heading font-semibold", children: "Payment Method" }) }),
          /* @__PURE__ */ jsxs(CardContent, { className: "space-y-6", children: [
            /* @__PURE__ */ jsxs(RadioGroup, { value: paymentMethod, onValueChange: (value) => setPaymentMethod(value), className: "flex flex-col sm:flex-row gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { value: "card", id: "card", className: "peer sr-only" }),
                /* @__PURE__ */ jsxs(Label, { htmlFor: "card", className: "flex items-center gap-3 p-4 border-2 border-border rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-secondary/50 transition-colors", children: [
                  /* @__PURE__ */ jsx(CreditCard, { className: "w-5 h-5 text-primary" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "Card / Bank Transfer" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Visa, Mastercard, etc." })
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
                /* @__PURE__ */ jsx(RadioGroupItem, { value: "paypal", id: "paypal", className: "peer sr-only" }),
                /* @__PURE__ */ jsxs(Label, { htmlFor: "paypal", className: "flex items-center gap-3 p-4 border-2 border-border rounded-lg cursor-pointer peer-data-[state=checked]:border-primary peer-data-[state=checked]:bg-primary/5 hover:bg-secondary/50 transition-colors", children: [
                  /* @__PURE__ */ jsx(Wallet, { className: "w-5 h-5 text-primary" }),
                  /* @__PURE__ */ jsxs("div", { children: [
                    /* @__PURE__ */ jsx("span", { className: "font-medium", children: "PayPal" }),
                    /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "Pay with your PayPal account" })
                  ] })
                ] })
              ] })
            ] }),
            paymentMethod === "card" && /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-6 bg-secondary/30 rounded-lg", children: [
              /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
                /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "cardName", children: "Cardholder Name" }),
                  /* @__PURE__ */ jsx(Input, { id: "cardName", placeholder: "John Doe", className: "mt-1.5" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "sm:col-span-2", children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "cardNumber", children: "Card Number" }),
                  /* @__PURE__ */ jsx(Input, { id: "cardNumber", placeholder: "1234 5678 9012 3456", className: "mt-1.5" })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "expiry", children: "Expiry Date" }),
                  /* @__PURE__ */ jsx(Input, { id: "expiry", placeholder: "MM/YY", className: "mt-1.5" })
                ] }),
                /* @__PURE__ */ jsxs("div", { children: [
                  /* @__PURE__ */ jsx(Label, { htmlFor: "cvv", children: "CVV/CVC" }),
                  /* @__PURE__ */ jsx(Input, { id: "cvv", placeholder: "123", className: "mt-1.5" })
                ] })
              ] }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "This is a demo. Enter any fake data to test." })
            ] }),
            paymentMethod === "paypal" && /* @__PURE__ */ jsxs("div", { className: "space-y-4 p-6 bg-secondary/30 rounded-lg text-center", children: [
              /* @__PURE__ */ jsx(Wallet, { className: "w-12 h-12 mx-auto text-primary" }),
              /* @__PURE__ */ jsxs("div", { children: [
                /* @__PURE__ */ jsx("p", { className: "font-medium", children: "Pay with PayPal" }),
                /* @__PURE__ */ jsx("p", { className: "text-sm text-muted-foreground", children: "You will be redirected to PayPal to complete your purchase." })
              ] }),
              /* @__PURE__ */ jsx(Button, { type: "button", className: "w-full sm:w-auto", children: "Continue with PayPal" }),
              /* @__PURE__ */ jsx("p", { className: "text-xs text-muted-foreground", children: "This is a demo. No actual PayPal payment will be processed." })
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/cart", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 w-4 h-4" }),
          "Back to Cart"
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_MEDIUM, inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "sticky top-28 h-fit", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-heading font-semibold", children: "Order Summary" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsx("div", { className: "space-y-3 max-h-48 overflow-y-auto", children: items.map(_temp3) }),
          hasDiscount && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
              currentPlan?.name,
              " - ",
              getDiscount(),
              "% off"
            ] })
          ] }),
          subscriberFreeShipping || shipping === 0 ? /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
            /* @__PURE__ */ jsx(Truck, { className: "w-4 h-4 text-primary" }),
            /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "text-xs", children: "Free shipping" })
          ] }) : null,
          /* @__PURE__ */ jsx(Separator, {}),
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
            /* @__PURE__ */ jsx("span", { className: "text-foreground", children: subscriberFreeShipping || shipping === 0 ? /* @__PURE__ */ jsx(Badge, { variant: "secondary", children: "Free" }) : `€${shipping.toFixed(2)}` })
          ] }),
          /* @__PURE__ */ jsx(Separator, {}),
          /* @__PURE__ */ jsxs("div", { className: "flex justify-between", children: [
            /* @__PURE__ */ jsx("span", { className: "font-heading font-semibold text-foreground", children: "Total" }),
            /* @__PURE__ */ jsxs("span", { className: "text-xl font-heading font-bold text-primary", children: [
              "€",
              total.toFixed(2)
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-xs text-muted-foreground", children: [
            /* @__PURE__ */ jsx(Leaf, { className: "w-3.5 h-3.5" }),
            "Eco-friendly packaging included"
          ] })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsxs(Button, { size: "lg", className: "w-full group", disabled: paymentMethod === "card", children: [
          "Complete Order",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1" })
        ] }) })
      ] }) })
    ] });
    $[4] = applyDiscount;
    $[5] = currentPlan?.name;
    $[6] = getDiscount;
    $[7] = hasDiscount;
    $[8] = items;
    $[9] = paymentMethod;
    $[10] = subscriberFreeShipping;
    $[11] = T0;
    $[12] = t2;
    $[13] = t3;
    $[14] = t4;
    $[15] = t5;
    $[16] = t6;
  } else {
    T0 = $[11];
    t2 = $[12];
    t3 = $[13];
    t4 = $[14];
    t5 = $[15];
    t6 = $[16];
  }
  let t7;
  if ($[19] !== T0 || $[20] !== t2 || $[21] !== t3 || $[22] !== t4) {
    t7 = /* @__PURE__ */ jsxs(T0, { inView: t2, children: [
      t3,
      t4
    ] });
    $[19] = T0;
    $[20] = t2;
    $[21] = t3;
    $[22] = t4;
    $[23] = t7;
  } else {
    t7 = $[23];
  }
  let t8;
  if ($[24] !== t5 || $[25] !== t7) {
    t8 = /* @__PURE__ */ jsx("div", { className: t5, children: t7 });
    $[24] = t5;
    $[25] = t7;
    $[26] = t8;
  } else {
    t8 = $[26];
  }
  let t9;
  if ($[27] !== t6 || $[28] !== t8) {
    t9 = /* @__PURE__ */ jsx("main", { className: t6, children: t8 });
    $[27] = t6;
    $[28] = t8;
    $[29] = t9;
  } else {
    t9 = $[29];
  }
  return t9;
}
function _temp3(item_0) {
  return /* @__PURE__ */ jsxs("div", { className: "flex justify-between text-sm", children: [
    /* @__PURE__ */ jsxs("span", { className: "text-muted-foreground", children: [
      item_0.name,
      " x",
      item_0.quantity
    ] }),
    /* @__PURE__ */ jsxs("span", { children: [
      "€",
      (item_0.price * item_0.quantity).toFixed(2)
    ] })
  ] }, item_0.id);
}
function _temp2(sum, item) {
  return sum + item.price * item.quantity;
}
function _temp(state) {
  return state.items;
}
const SplitComponent = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(CheckoutPage, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  SplitComponent as component
};

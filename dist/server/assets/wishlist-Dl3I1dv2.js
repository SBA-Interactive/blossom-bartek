import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { S as SectionWrapper } from "./section-wrapper-Dquk3Zgc.js";
import { u as useWishlistStore, B as Badge, E as Empty, a as EmptyHeader, b as EmptyMedia, c as EmptyTitle, d as EmptyDescription, e as EmptyContent, f as Button, A as Avatar, g as AvatarFallback, h as BlurFade, i as useCartStore, T as TooltipTrigger, j as TooltipContent, k as Tooltip, C as Card } from "./router-p6p1R6bc.js";
import { Link } from "@tanstack/react-router";
import { Heart, Package, ArrowRight, ShoppingBag, Trash2 } from "lucide-react";
import "react";
import "class-variance-authority";
import "radix-ui";
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
function SkipLink() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("a", { href: "#wishlist-main-content", className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary", children: "Skip to main content" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function WishlistItemCard(t0) {
  const $ = c(50);
  const {
    item
  } = t0;
  const removeItem = useWishlistStore(_temp);
  const addItem = useCartStore(_temp2);
  let t1;
  if ($[0] !== addItem || $[1] !== item.productId) {
    t1 = () => {
      addItem(item.productId, 1);
    };
    $[0] = addItem;
    $[1] = item.productId;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handleAddToCart = t1;
  let t2;
  if ($[3] !== item.productId || $[4] !== removeItem) {
    t2 = () => {
      removeItem(item.productId);
    };
    $[3] = item.productId;
    $[4] = removeItem;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  const handleRemove = t2;
  let t3;
  if ($[6] !== item.productId) {
    t3 = {
      productId: item.productId
    };
    $[6] = item.productId;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== item.image || $[9] !== item.name) {
    t4 = /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-lg overflow-hidden bg-muted", children: /* @__PURE__ */ jsx("img", { src: item.image, alt: item.name, className: "w-full h-full object-cover" }) });
    $[8] = item.image;
    $[9] = item.name;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  let t5;
  if ($[11] !== t3 || $[12] !== t4) {
    t5 = /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: t3, className: "shrink-0", children: t4 });
    $[11] = t3;
    $[12] = t4;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  let t6;
  if ($[14] !== item.productId) {
    t6 = {
      productId: item.productId
    };
    $[14] = item.productId;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  let t7;
  if ($[16] !== item.name) {
    t7 = /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-lg truncate hover:text-primary transition-colors", children: item.name });
    $[16] = item.name;
    $[17] = t7;
  } else {
    t7 = $[17];
  }
  let t8;
  if ($[18] !== t6 || $[19] !== t7) {
    t8 = /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: t6, children: t7 });
    $[18] = t6;
    $[19] = t7;
    $[20] = t8;
  } else {
    t8 = $[20];
  }
  let t9;
  if ($[21] !== item.price) {
    t9 = /* @__PURE__ */ jsxs("p", { className: "text-primary font-bold text-xl mt-1", children: [
      "€",
      item.price
    ] });
    $[21] = item.price;
    $[22] = t9;
  } else {
    t9 = $[22];
  }
  let t10;
  if ($[23] !== item.addedAt) {
    t10 = new Date(item.addedAt).toLocaleDateString();
    $[23] = item.addedAt;
    $[24] = t10;
  } else {
    t10 = $[24];
  }
  let t11;
  if ($[25] !== t10) {
    t11 = /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
      "Added ",
      t10
    ] });
    $[25] = t10;
    $[26] = t11;
  } else {
    t11 = $[26];
  }
  let t12;
  if ($[27] !== t11 || $[28] !== t8 || $[29] !== t9) {
    t12 = /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      t8,
      t9,
      t11
    ] });
    $[27] = t11;
    $[28] = t8;
    $[29] = t9;
    $[30] = t12;
  } else {
    t12 = $[30];
  }
  let t13;
  if ($[31] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ jsx(ShoppingBag, { className: "w-4 h-4" });
    $[31] = t13;
  } else {
    t13 = $[31];
  }
  let t14;
  if ($[32] !== handleAddToCart) {
    t14 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", onClick: handleAddToCart, children: t13 }) });
    $[32] = handleAddToCart;
    $[33] = t14;
  } else {
    t14 = $[33];
  }
  let t15;
  if ($[34] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsx(TooltipContent, { children: "Add to cart" });
    $[34] = t15;
  } else {
    t15 = $[34];
  }
  let t16;
  if ($[35] !== t14) {
    t16 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t14,
      t15
    ] });
    $[35] = t14;
    $[36] = t16;
  } else {
    t16 = $[36];
  }
  let t17;
  if ($[37] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t17 = /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 text-destructive" });
    $[37] = t17;
  } else {
    t17 = $[37];
  }
  let t18;
  if ($[38] !== handleRemove) {
    t18 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", onClick: handleRemove, children: [
      ">",
      t17
    ] }) });
    $[38] = handleRemove;
    $[39] = t18;
  } else {
    t18 = $[39];
  }
  let t19;
  if ($[40] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t19 = /* @__PURE__ */ jsx(TooltipContent, { children: "Remove from wishlist" });
    $[40] = t19;
  } else {
    t19 = $[40];
  }
  let t20;
  if ($[41] !== t18) {
    t20 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t18,
      t19
    ] });
    $[41] = t18;
    $[42] = t20;
  } else {
    t20 = $[42];
  }
  let t21;
  if ($[43] !== t16 || $[44] !== t20) {
    t21 = /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 shrink-0", children: [
      t16,
      t20
    ] });
    $[43] = t16;
    $[44] = t20;
    $[45] = t21;
  } else {
    t21 = $[45];
  }
  let t22;
  if ($[46] !== t12 || $[47] !== t21 || $[48] !== t5) {
    t22 = /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 p-4", children: [
      t5,
      t12,
      t21
    ] }) });
    $[46] = t12;
    $[47] = t21;
    $[48] = t5;
    $[49] = t22;
  } else {
    t22 = $[49];
  }
  return t22;
}
function _temp2(state_0) {
  return state_0.addItem;
}
function _temp(state) {
  return state.removeItem;
}
function WishlistPage() {
  const $ = c(12);
  const items = useWishlistStore(_temp3);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(SkipLink, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(Avatar, { className: "w-12 h-12 bg-primary/10", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(Heart, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }) }) });
    t2 = /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground", children: "Wishlist" });
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] !== items.length) {
    t3 = items.length > 0 && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "ml-2", children: [
      items.length,
      " ",
      items.length === 1 ? "item" : "items"
    ] });
    $[3] = items.length;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== t3) {
    t4 = /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-3 mb-8", children: [
      t1,
      t2,
      t3
    ] });
    $[5] = t3;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== items) {
    t5 = items.length === 0 ? /* @__PURE__ */ jsxs(Empty, { children: [
      /* @__PURE__ */ jsxs(EmptyHeader, { children: [
        /* @__PURE__ */ jsx(EmptyMedia, { variant: "icon", children: /* @__PURE__ */ jsx(Heart, { className: "w-10 h-10" }) }),
        /* @__PURE__ */ jsx(EmptyTitle, { children: "Your wishlist is empty" }),
        /* @__PURE__ */ jsx(EmptyDescription, { children: "Save your favorite fragrances to buy later." })
      ] }),
      /* @__PURE__ */ jsx(EmptyContent, { children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxs(Link, { to: "/products", children: [
        /* @__PURE__ */ jsx(Package, { className: "mr-2 w-4 h-4" }),
        "Browse Products",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
      ] }) }) })
    ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: items.map(_temp4) });
    $[7] = items;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t4 || $[10] !== t5) {
    t6 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t0,
      /* @__PURE__ */ jsx("main", { className: "pt-24 min-h-screen", id: "wishlist-main-content", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16", children: /* @__PURE__ */ jsx(SectionWrapper, { loading: false, error: null, children: /* @__PURE__ */ jsxs(BlurFade, { inView: true, children: [
        t4,
        t5
      ] }) }) }) })
    ] });
    $[9] = t4;
    $[10] = t5;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  return t6;
}
function _temp4(item) {
  return /* @__PURE__ */ jsx(WishlistItemCard, { item }, item.id);
}
function _temp3(state) {
  return state.items;
}
const SplitComponent = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(WishlistPage, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  SplitComponent as component
};

import { jsx, jsxs } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { y as cn, I as Input, U as MAX_PRICE_FILTER, z as products, B as Badge, s as BOTTLE_SIZES, V as MIN_PRICE_FILTER, E as Empty, a as EmptyHeader, b as EmptyMedia, c as EmptyTitle, d as EmptyDescription, e as EmptyContent, f as Button, h as BlurFade, W as SheetTrigger, X as SheetHeader, Y as SheetTitle, Z as SheetDescription, _ as SheetContent, $ as Sheet, i as useCartStore, u as useWishlistStore, D as useCompareStore, n as CardTitle, p as CardDescription, T as TooltipTrigger, j as TooltipContent, a0 as categories, L as Label, a1 as badges, k as Tooltip, K as CardAction, G as CardFooter, o as CardContent, C as Card, l as Separator } from "./router-DBR8M-aC.js";
import { cva } from "class-variance-authority";
import { Checkbox as Checkbox$1 } from "radix-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { B as BorderBeam } from "./border-beam-Dtxze2Ib.js";
import { useSearch, useNavigate, Link } from "@tanstack/react-router";
import { N as NOTIFICATION_DURATION } from "./timeouts-BDPnrphD.js";
import { u as useReviewStore } from "./useReviewStore-yMLlazlT.js";
import { X, Package, Leaf, Wand2, Search, SlidersHorizontal, LayoutGrid, List, Star, Heart, Scale, Check, ShoppingBag } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { S as SectionWrapper } from "./section-wrapper-D1EfZ7on.js";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
import "zustand";
import "react-dom";
import "zustand/middleware";
import "motion/react";
import "next-themes";
import "sonner";
function InputGroup(t0) {
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
    t1 = cn("group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-input shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "input-group", role: "group", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
const inputGroupAddonVariants = cva("flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4", {
  variants: {
    align: {
      "inline-start": "order-first pl-2 has-[>button]:-ml-1 has-[>kbd]:ml-[-0.15rem]",
      "inline-end": "order-last pr-2 has-[>button]:-mr-1 has-[>kbd]:mr-[-0.15rem]",
      "block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
      "block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
    }
  },
  defaultVariants: {
    align: "inline-start"
  }
});
function InputGroupAddon(t0) {
  const $ = c(11);
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      align: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
  }
  const align = t1 === void 0 ? "inline-start" : t1;
  let t2;
  if ($[4] !== align || $[5] !== className) {
    t2 = cn(inputGroupAddonVariants({
      align
    }), className);
    $[4] = align;
    $[5] = className;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] !== align || $[8] !== props || $[9] !== t2) {
    t3 = /* @__PURE__ */ jsx("div", { role: "group", "data-slot": "input-group-addon", "data-align": align, className: t2, onClick: _temp$1, ...props });
    $[7] = align;
    $[8] = props;
    $[9] = t2;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  return t3;
}
function _temp$1(e) {
  if (e.target.closest("button")) {
    return;
  }
  e.currentTarget.parentElement?.querySelector("input")?.focus();
}
cva("flex items-center gap-2 text-sm shadow-none", {
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
      sm: "",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0"
    }
  },
  defaultVariants: {
    size: "xs"
  }
});
function InputGroupInput(t0) {
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
    t1 = cn("flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(Input, { "data-slot": "input-group-control", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function Checkbox(t0) {
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
    t1 = cn("peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input shadow-xs transition-shadow outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(Checkbox$1.Indicator, { "data-slot": "checkbox-indicator", className: "grid place-content-center text-current transition-none [&>svg]:size-3.5", children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Tick02Icon, strokeWidth: 2 }) });
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== props || $[7] !== t1) {
    t3 = /* @__PURE__ */ jsx(Checkbox$1.Root, { "data-slot": "checkbox", className: t1, ...props, children: t2 });
    $[6] = props;
    $[7] = t1;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
const sortOptions = [{
  value: "newest",
  label: "Newest"
}, {
  value: "price-asc",
  label: "Price: Low to High"
}, {
  value: "price-desc",
  label: "Price: High to Low"
}, {
  value: "name-asc",
  label: "Name: A to Z"
}, {
  value: "name-desc",
  label: "Name: Z to A"
}];
const noteOptions = ["Orange", "Lemon", "Jasmine", "Mint", "Berry", "Grapefruit", "Rose", "Lavender"];
function ProductCard(t0) {
  const $ = c(124);
  const {
    product,
    featured: t1
  } = t0;
  const featured = t1 === void 0 ? false : t1;
  const addItem = useCartStore(_temp);
  const wishlistItems = useWishlistStore(_temp2);
  const addToWishlist = useWishlistStore(_temp3);
  const removeFromWishlist = useWishlistStore(_temp4);
  const compareItems = useCompareStore(_temp5);
  const addToCompare = useCompareStore(_temp6);
  const removeFromCompare = useCompareStore(_temp7);
  const getAverageRating = useReviewStore(_temp8);
  const getReviewCount = useReviewStore(_temp9);
  let t2;
  if ($[0] !== product.id || $[1] !== wishlistItems) {
    let t310;
    if ($[3] !== product.id) {
      t310 = (item) => item.productId === product.id;
      $[3] = product.id;
      $[4] = t310;
    } else {
      t310 = $[4];
    }
    t2 = wishlistItems.some(t310);
    $[0] = product.id;
    $[1] = wishlistItems;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const isInWishlist = t2;
  let t3;
  if ($[5] !== compareItems || $[6] !== product.id) {
    let t410;
    if ($[8] !== product.id) {
      t410 = (item_0) => item_0.productId === product.id;
      $[8] = product.id;
      $[9] = t410;
    } else {
      t410 = $[9];
    }
    t3 = compareItems.some(t410);
    $[5] = compareItems;
    $[6] = product.id;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const isInCompare = t3;
  const [added, setAdded] = useState(false);
  const cardRef = useRef(null);
  const rating = getAverageRating(product.id);
  let t4;
  if ($[10] !== getReviewCount || $[11] !== product.id) {
    t4 = getReviewCount(product.id);
    $[10] = getReviewCount;
    $[11] = product.id;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  const reviewCount = t4;
  let t5;
  if ($[13] !== addItem || $[14] !== product.id) {
    t5 = (e) => {
      e.preventDefault();
      e.stopPropagation();
      addItem(product.id, 1);
      setAdded(true);
      setTimeout(() => setAdded(false), NOTIFICATION_DURATION);
    };
    $[13] = addItem;
    $[14] = product.id;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  const handleAddToCart = t5;
  let t6;
  if ($[16] !== addToWishlist || $[17] !== isInWishlist || $[18] !== product.id || $[19] !== removeFromWishlist) {
    t6 = (e_0) => {
      e_0.preventDefault();
      e_0.stopPropagation();
      if (isInWishlist) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist(product.id);
      }
    };
    $[16] = addToWishlist;
    $[17] = isInWishlist;
    $[18] = product.id;
    $[19] = removeFromWishlist;
    $[20] = t6;
  } else {
    t6 = $[20];
  }
  const handleWishlistToggle = t6;
  let t7;
  if ($[21] !== addToCompare || $[22] !== isInCompare || $[23] !== product.id || $[24] !== removeFromCompare) {
    t7 = (e_1) => {
      e_1.preventDefault();
      e_1.stopPropagation();
      if (isInCompare) {
        removeFromCompare(product.id);
      } else {
        addToCompare(product.id);
      }
    };
    $[21] = addToCompare;
    $[22] = isInCompare;
    $[23] = product.id;
    $[24] = removeFromCompare;
    $[25] = t7;
  } else {
    t7 = $[25];
  }
  const handleCompareToggle = t7;
  const t8 = `group overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 relative ${featured ? "border-2 border-[#D4AF37]" : ""}`;
  let t9;
  if ($[26] !== product.size) {
    t9 = /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "px-4 py-2 text-base font-semibold bg-blue-500 text-white", children: product.size });
    $[26] = product.size;
    $[27] = t9;
  } else {
    t9 = $[27];
  }
  const t10 = product.badge === "New" ? "#3498db" : product.badge === "Bestseller" ? "#e74c3c" : "#2ecc71";
  let t11;
  if ($[28] !== t10) {
    t11 = {
      backgroundColor: t10,
      color: "white"
    };
    $[28] = t10;
    $[29] = t11;
  } else {
    t11 = $[29];
  }
  let t12;
  if ($[30] !== product.badge || $[31] !== t11) {
    t12 = /* @__PURE__ */ jsx(Badge, { className: "px-4 py-2 text-base", style: t11, children: product.badge });
    $[30] = product.badge;
    $[31] = t11;
    $[32] = t12;
  } else {
    t12 = $[32];
  }
  let t13;
  if ($[33] !== t12 || $[34] !== t9) {
    t13 = /* @__PURE__ */ jsxs("div", { className: "absolute top-4 left-4 z-10 flex items-center gap-2", children: [
      t9,
      t12
    ] });
    $[33] = t12;
    $[34] = t9;
    $[35] = t13;
  } else {
    t13 = $[35];
  }
  let t14;
  if ($[36] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ jsx(BorderBeam, { size: 200, duration: 6, colorFrom: "var(--brand-rose)", colorTo: "var(--primary)", className: "opacity-0 group-hover:opacity-100 transition-opacity" });
    $[36] = t14;
  } else {
    t14 = $[36];
  }
  let t15;
  if ($[37] !== product.id) {
    t15 = {
      productId: product.id
    };
    $[37] = product.id;
    $[38] = t15;
  } else {
    t15 = $[38];
  }
  const t16 = `${product.name} fragrance bottle`;
  let t17;
  if ($[39] !== product.image || $[40] !== t16) {
    t17 = /* @__PURE__ */ jsx("img", { src: product.image, alt: t16, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300" });
    $[39] = product.image;
    $[40] = t16;
    $[41] = t17;
  } else {
    t17 = $[41];
  }
  const t18 = isInWishlist ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`;
  const t19 = `shrink-0 bg-background/80 backdrop-blur-sm ${isInWishlist ? "text-red-500 border-red-500 hover:text-red-600 hover:border-red-600" : ""}`;
  const t20 = `w-4 h-4 ${isInWishlist ? "fill-current" : ""}`;
  let t21;
  if ($[42] !== t20) {
    t21 = /* @__PURE__ */ jsx(Heart, { className: t20 });
    $[42] = t20;
    $[43] = t21;
  } else {
    t21 = $[43];
  }
  let t22;
  if ($[44] !== handleWishlistToggle || $[45] !== t18 || $[46] !== t19 || $[47] !== t21) {
    t22 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "outline", onClick: handleWishlistToggle, "aria-label": t18, className: t19, children: t21 }) });
    $[44] = handleWishlistToggle;
    $[45] = t18;
    $[46] = t19;
    $[47] = t21;
    $[48] = t22;
  } else {
    t22 = $[48];
  }
  const t23 = isInWishlist ? "Remove from wishlist" : "Add to wishlist";
  let t24;
  if ($[49] !== t23) {
    t24 = /* @__PURE__ */ jsx(TooltipContent, { children: t23 });
    $[49] = t23;
    $[50] = t24;
  } else {
    t24 = $[50];
  }
  let t25;
  if ($[51] !== t22 || $[52] !== t24) {
    t25 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t22,
      t24
    ] });
    $[51] = t22;
    $[52] = t24;
    $[53] = t25;
  } else {
    t25 = $[53];
  }
  const t26 = isInCompare ? `Remove ${product.name} from compare` : `Add ${product.name} to compare`;
  const t27 = `shrink-0 bg-background/80 backdrop-blur-sm ${isInCompare ? "text-primary border-primary" : ""} md:opacity-0 md:group-hover:opacity-100 transition-opacity`;
  let t28;
  if ($[54] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t28 = /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4" });
    $[54] = t28;
  } else {
    t28 = $[54];
  }
  let t29;
  if ($[55] !== handleCompareToggle || $[56] !== t26 || $[57] !== t27) {
    t29 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "outline", onClick: handleCompareToggle, "aria-label": t26, className: t27, children: t28 }) });
    $[55] = handleCompareToggle;
    $[56] = t26;
    $[57] = t27;
    $[58] = t29;
  } else {
    t29 = $[58];
  }
  const t30 = isInCompare ? "Remove from compare" : "Add to compare";
  let t31;
  if ($[59] !== t30) {
    t31 = /* @__PURE__ */ jsx(TooltipContent, { children: t30 });
    $[59] = t30;
    $[60] = t31;
  } else {
    t31 = $[60];
  }
  let t32;
  if ($[61] !== t29 || $[62] !== t31) {
    t32 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t29,
      t31
    ] });
    $[61] = t29;
    $[62] = t31;
    $[63] = t32;
  } else {
    t32 = $[63];
  }
  let t33;
  if ($[64] !== t25 || $[65] !== t32) {
    t33 = /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 flex flex-col gap-2 z-20", children: [
      t25,
      t32
    ] });
    $[64] = t25;
    $[65] = t32;
    $[66] = t33;
  } else {
    t33 = $[66];
  }
  let t34;
  if ($[67] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t34 = /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300", "aria-hidden": "true" });
    $[67] = t34;
  } else {
    t34 = $[67];
  }
  let t35;
  if ($[68] !== product.name) {
    t35 = /* @__PURE__ */ jsx("figcaption", { className: "sr-only", children: product.name });
    $[68] = product.name;
    $[69] = t35;
  } else {
    t35 = $[69];
  }
  let t36;
  if ($[70] !== t17 || $[71] !== t33 || $[72] !== t35) {
    t36 = /* @__PURE__ */ jsxs("figure", { className: "relative aspect-video sm:aspect-[4/5] overflow-hidden bg-muted", children: [
      t17,
      t33,
      t34,
      t35
    ] });
    $[70] = t17;
    $[71] = t33;
    $[72] = t35;
    $[73] = t36;
  } else {
    t36 = $[73];
  }
  let t37;
  if ($[74] !== t15 || $[75] !== t36) {
    t37 = /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: t15, className: "block", children: t36 });
    $[74] = t15;
    $[75] = t36;
    $[76] = t37;
  } else {
    t37 = $[76];
  }
  let t38;
  if ($[77] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t38 = /* @__PURE__ */ jsx(Leaf, { className: "w-4 h-4 text-primary shrink-0", "aria-hidden": "true" });
    $[77] = t38;
  } else {
    t38 = $[77];
  }
  let t39;
  if ($[78] !== product.notes.top) {
    t39 = /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 mb-2 overflow-hidden", children: [
      t38,
      /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wider truncate", children: product.notes.top })
    ] });
    $[78] = product.notes.top;
    $[79] = t39;
  } else {
    t39 = $[79];
  }
  let t40;
  if ($[80] !== product.name) {
    t40 = /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-heading font-semibold mb-2 truncate", children: product.name });
    $[80] = product.name;
    $[81] = t40;
  } else {
    t40 = $[81];
  }
  let t41;
  if ($[82] !== product.description) {
    t41 = /* @__PURE__ */ jsx(CardDescription, { className: "text-sm mb-5 leading-relaxed line-clamp-2", children: product.description });
    $[82] = product.description;
    $[83] = t41;
  } else {
    t41 = $[83];
  }
  let t42;
  if ($[84] !== rating || $[85] !== reviewCount) {
    t42 = rating > 0 && /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 mb-3", children: [
      [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx(Star, { className: `w-3 h-3 ${star <= Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}` }, star)),
      /* @__PURE__ */ jsxs("span", { className: "text-xs text-muted-foreground ml-1", children: [
        rating.toFixed(1),
        " (",
        reviewCount,
        ")"
      ] })
    ] });
    $[84] = rating;
    $[85] = reviewCount;
    $[86] = t42;
  } else {
    t42 = $[86];
  }
  let t43;
  if ($[87] !== product.price) {
    t43 = /* @__PURE__ */ jsxs("data", { value: product.price, className: "text-2xl font-heading font-bold text-primary shrink-0", children: [
      "€",
      product.price
    ] });
    $[87] = product.price;
    $[88] = t43;
  } else {
    t43 = $[88];
  }
  const t44 = `Actions for ${product.name}`;
  let t45;
  if ($[89] !== product.id) {
    t45 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "default", variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: {
      productId: product.id
    }, children: "Details" }) }) });
    $[89] = product.id;
    $[90] = t45;
  } else {
    t45 = $[90];
  }
  let t46;
  if ($[91] !== product.name) {
    t46 = /* @__PURE__ */ jsxs(TooltipContent, { children: [
      "View ",
      product.name
    ] });
    $[91] = product.name;
    $[92] = t46;
  } else {
    t46 = $[92];
  }
  let t47;
  if ($[93] !== t45 || $[94] !== t46) {
    t47 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t45,
      t46
    ] });
    $[93] = t45;
    $[94] = t46;
    $[95] = t47;
  } else {
    t47 = $[95];
  }
  const t48 = `Add ${product.name} to cart`;
  let t49;
  if ($[96] !== added) {
    t49 = added ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 mr-1", "aria-hidden": "true" }) : /* @__PURE__ */ jsx(ShoppingBag, { className: "w-4 h-4 mr-1", "aria-hidden": "true" });
    $[96] = added;
    $[97] = t49;
  } else {
    t49 = $[97];
  }
  const t50 = added ? "Added" : "Buy";
  let t51;
  if ($[98] !== handleAddToCart || $[99] !== t48 || $[100] !== t49 || $[101] !== t50) {
    t51 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { size: "default", onClick: handleAddToCart, "aria-label": t48, children: [
      t49,
      t50
    ] }) });
    $[98] = handleAddToCart;
    $[99] = t48;
    $[100] = t49;
    $[101] = t50;
    $[102] = t51;
  } else {
    t51 = $[102];
  }
  let t52;
  if ($[103] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t52 = /* @__PURE__ */ jsx(TooltipContent, { children: "Add to cart" });
    $[103] = t52;
  } else {
    t52 = $[103];
  }
  let t53;
  if ($[104] !== t51) {
    t53 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t51,
      t52
    ] });
    $[104] = t51;
    $[105] = t53;
  } else {
    t53 = $[105];
  }
  let t54;
  if ($[106] !== t44 || $[107] !== t47 || $[108] !== t53) {
    t54 = /* @__PURE__ */ jsxs(CardAction, { className: "flex gap-2 shrink-0", role: "group", "aria-label": t44, children: [
      t47,
      t53
    ] });
    $[106] = t44;
    $[107] = t47;
    $[108] = t53;
    $[109] = t54;
  } else {
    t54 = $[109];
  }
  let t55;
  if ($[110] !== t43 || $[111] !== t54) {
    t55 = /* @__PURE__ */ jsxs(CardFooter, { className: "flex items-center justify-between p-0 gap-4", children: [
      t43,
      t54
    ] });
    $[110] = t43;
    $[111] = t54;
    $[112] = t55;
  } else {
    t55 = $[112];
  }
  let t56;
  if ($[113] !== t39 || $[114] !== t40 || $[115] !== t41 || $[116] !== t42 || $[117] !== t55) {
    t56 = /* @__PURE__ */ jsxs(CardContent, { className: "p-6 pt-12", children: [
      t39,
      t40,
      t41,
      t42,
      t55
    ] });
    $[113] = t39;
    $[114] = t40;
    $[115] = t41;
    $[116] = t42;
    $[117] = t55;
    $[118] = t56;
  } else {
    t56 = $[118];
  }
  let t57;
  if ($[119] !== t13 || $[120] !== t37 || $[121] !== t56 || $[122] !== t8) {
    t57 = /* @__PURE__ */ jsx("li", { ref: cardRef, className: "list-none", children: /* @__PURE__ */ jsxs(Card, { className: t8, children: [
      t13,
      t14,
      t37,
      t56
    ] }) });
    $[119] = t13;
    $[120] = t37;
    $[121] = t56;
    $[122] = t8;
    $[123] = t57;
  } else {
    t57 = $[123];
  }
  return t57;
}
function _temp9(state_7) {
  return state_7.getReviewCount;
}
function _temp8(state_6) {
  return state_6.getAverageRating;
}
function _temp7(state_5) {
  return state_5.removeItem;
}
function _temp6(state_4) {
  return state_4.addItem;
}
function _temp5(state_3) {
  return state_3.items;
}
function _temp4(state_2) {
  return state_2.removeItem;
}
function _temp3(state_1) {
  return state_1.addItem;
}
function _temp2(state_0) {
  return state_0.items;
}
function _temp(state) {
  return state.addItem;
}
function FilterPanel(t0) {
  const $ = c(139);
  const {
    selectedCategories,
    setSelectedCategories,
    selectedNotes,
    setSelectedNotes,
    priceRange,
    setPriceRange,
    onClear,
    onCategoryChange,
    onNotesChange,
    onPriceChange,
    selectedBadges,
    setSelectedBadges,
    selectedSizes,
    setSelectedSizes,
    inStock,
    setInStock,
    onBadgeChange,
    onSizeChange,
    onStockChange
  } = t0;
  let t1;
  if ($[0] !== onCategoryChange || $[1] !== selectedCategories || $[2] !== setSelectedCategories) {
    t1 = (cat) => {
      const newCats = selectedCategories.includes(cat) ? selectedCategories.filter((c2) => c2 !== cat) : [...selectedCategories, cat];
      setSelectedCategories(newCats);
      onCategoryChange(newCats);
    };
    $[0] = onCategoryChange;
    $[1] = selectedCategories;
    $[2] = setSelectedCategories;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  const toggleCategory = t1;
  let t2;
  if ($[4] !== onNotesChange || $[5] !== selectedNotes || $[6] !== setSelectedNotes) {
    t2 = (note) => {
      const newNotes = selectedNotes.includes(note) ? selectedNotes.filter((n) => n !== note) : [...selectedNotes, note];
      setSelectedNotes(newNotes);
      onNotesChange(newNotes);
    };
    $[4] = onNotesChange;
    $[5] = selectedNotes;
    $[6] = setSelectedNotes;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  const toggleNote = t2;
  let t3;
  if ($[8] !== onBadgeChange || $[9] !== selectedBadges || $[10] !== setSelectedBadges) {
    t3 = (badge) => {
      const newBadges = selectedBadges.includes(badge) ? selectedBadges.filter((b) => b !== badge) : [...selectedBadges, badge];
      setSelectedBadges(newBadges);
      onBadgeChange(newBadges);
    };
    $[8] = onBadgeChange;
    $[9] = selectedBadges;
    $[10] = setSelectedBadges;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  const toggleBadge = t3;
  let t4;
  if ($[12] !== onSizeChange || $[13] !== selectedSizes || $[14] !== setSelectedSizes) {
    t4 = (size) => {
      const newSizes = selectedSizes.includes(size) ? selectedSizes.filter((s) => s !== size) : [...selectedSizes, size];
      setSelectedSizes(newSizes);
      onSizeChange(newSizes);
    };
    $[12] = onSizeChange;
    $[13] = selectedSizes;
    $[14] = setSelectedSizes;
    $[15] = t4;
  } else {
    t4 = $[15];
  }
  const toggleSize = t4;
  let t5;
  if ($[16] !== onStockChange || $[17] !== setInStock) {
    t5 = (checked) => {
      setInStock(checked);
      onStockChange(checked);
    };
    $[16] = onStockChange;
    $[17] = setInStock;
    $[18] = t5;
  } else {
    t5 = $[18];
  }
  const handleStockChange = t5;
  const hasFilters = selectedCategories.length > 0 || selectedNotes.length > 0 || priceRange[0] > 0 || priceRange[1] < MAX_PRICE_FILTER || selectedBadges.length > 0 || selectedSizes.length > 0 || inStock;
  let t6;
  if ($[19] !== onPriceChange || $[20] !== priceRange[1] || $[21] !== setPriceRange) {
    t6 = (value) => {
      const newRange = [value, priceRange[1]];
      setPriceRange(newRange);
      onPriceChange(newRange);
    };
    $[19] = onPriceChange;
    $[20] = priceRange[1];
    $[21] = setPriceRange;
    $[22] = t6;
  } else {
    t6 = $[22];
  }
  const handlePriceMinChange = t6;
  let t7;
  if ($[23] !== onPriceChange || $[24] !== priceRange[0] || $[25] !== setPriceRange) {
    t7 = (value_0) => {
      const newRange_0 = [priceRange[0], value_0];
      setPriceRange(newRange_0);
      onPriceChange(newRange_0);
    };
    $[23] = onPriceChange;
    $[24] = priceRange[0];
    $[25] = setPriceRange;
    $[26] = t7;
  } else {
    t7 = $[26];
  }
  const handlePriceMaxChange = t7;
  let t8;
  if ($[27] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-lg", children: "Filters" });
    $[27] = t8;
  } else {
    t8 = $[27];
  }
  let t9;
  if ($[28] !== hasFilters || $[29] !== onClear) {
    t9 = hasFilters && /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "lg", onClick: onClear, className: "text-sm p-4 my-2 mr-4", children: [
      /* @__PURE__ */ jsx(X, { className: "w-4 h-4 mr-2" }),
      "Clear All"
    ] });
    $[28] = hasFilters;
    $[29] = onClear;
    $[30] = t9;
  } else {
    t9 = $[30];
  }
  let t10;
  if ($[31] !== t9) {
    t10 = /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      t8,
      t9
    ] });
    $[31] = t9;
    $[32] = t10;
  } else {
    t10 = $[32];
  }
  let t11;
  if ($[33] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Category" });
    $[33] = t11;
  } else {
    t11 = $[33];
  }
  let t12;
  if ($[34] !== selectedCategories.length) {
    t12 = selectedCategories.length > 0 && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: _temp0, className: "text-xs h-7", children: "Reset" });
    $[34] = selectedCategories.length;
    $[35] = t12;
  } else {
    t12 = $[35];
  }
  let t13;
  if ($[36] !== t12) {
    t13 = /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      t11,
      t12
    ] });
    $[36] = t12;
    $[37] = t13;
  } else {
    t13 = $[37];
  }
  let t14;
  if ($[38] !== selectedCategories || $[39] !== toggleCategory) {
    t14 = categories.map((cat_0) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Checkbox, { id: `cat-${cat_0}`, checked: selectedCategories.includes(cat_0), onCheckedChange: () => toggleCategory(cat_0) }),
      /* @__PURE__ */ jsx(Label, { htmlFor: `cat-${cat_0}`, className: "text-sm cursor-pointer", children: cat_0 })
    ] }, cat_0));
    $[38] = selectedCategories;
    $[39] = toggleCategory;
    $[40] = t14;
  } else {
    t14 = $[40];
  }
  let t15;
  if ($[41] !== t14) {
    t15 = /* @__PURE__ */ jsx("div", { className: "space-y-2", children: t14 });
    $[41] = t14;
    $[42] = t15;
  } else {
    t15 = $[42];
  }
  let t16;
  if ($[43] !== t13 || $[44] !== t15) {
    t16 = /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      t13,
      t15
    ] });
    $[43] = t13;
    $[44] = t15;
    $[45] = t16;
  } else {
    t16 = $[45];
  }
  let t17;
  if ($[46] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t17 = /* @__PURE__ */ jsx(Separator, {});
    $[46] = t17;
  } else {
    t17 = $[46];
  }
  let t18;
  if ($[47] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t18 = /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Price Range" });
    $[47] = t18;
  } else {
    t18 = $[47];
  }
  let t19;
  if ($[48] !== priceRange[0] || $[49] !== priceRange[1]) {
    t19 = (priceRange[0] > MIN_PRICE_FILTER || priceRange[1] < MAX_PRICE_FILTER) && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: _temp1, className: "text-xs h-7", children: "Reset" });
    $[48] = priceRange[0];
    $[49] = priceRange[1];
    $[50] = t19;
  } else {
    t19 = $[50];
  }
  let t20;
  if ($[51] !== t19) {
    t20 = /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      t18,
      t19
    ] });
    $[51] = t19;
    $[52] = t20;
  } else {
    t20 = $[52];
  }
  let t21;
  if ($[53] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t21 = /* @__PURE__ */ jsx(Label, { htmlFor: "min-price", className: "text-xs text-muted-foreground", children: "Min" });
    $[53] = t21;
  } else {
    t21 = $[53];
  }
  let t22;
  if ($[54] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t22 = /* @__PURE__ */ jsx(InputGroupAddon, { children: "€" });
    $[54] = t22;
  } else {
    t22 = $[54];
  }
  let t23;
  if ($[55] !== handlePriceMinChange) {
    t23 = (e) => handlePriceMinChange(Number(e.target.value));
    $[55] = handlePriceMinChange;
    $[56] = t23;
  } else {
    t23 = $[56];
  }
  let t24;
  if ($[57] !== priceRange[0] || $[58] !== t23) {
    t24 = /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      t21,
      /* @__PURE__ */ jsxs(InputGroup, { className: "mt-1", children: [
        t22,
        /* @__PURE__ */ jsx(InputGroupInput, { id: "min-price", type: "text", inputMode: "numeric", pattern: "[0-9]+", value: priceRange[0], onChange: t23 })
      ] })
    ] });
    $[57] = priceRange[0];
    $[58] = t23;
    $[59] = t24;
  } else {
    t24 = $[59];
  }
  let t25;
  if ($[60] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t25 = /* @__PURE__ */ jsx("span", { className: "mt-4", children: "-" });
    $[60] = t25;
  } else {
    t25 = $[60];
  }
  let t26;
  if ($[61] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t26 = /* @__PURE__ */ jsx(Label, { htmlFor: "max-price", className: "text-xs text-muted-foreground", children: "Max" });
    $[61] = t26;
  } else {
    t26 = $[61];
  }
  let t27;
  if ($[62] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t27 = /* @__PURE__ */ jsx(InputGroupAddon, { children: "€" });
    $[62] = t27;
  } else {
    t27 = $[62];
  }
  let t28;
  if ($[63] !== handlePriceMaxChange) {
    t28 = (e_0) => handlePriceMaxChange(Number(e_0.target.value));
    $[63] = handlePriceMaxChange;
    $[64] = t28;
  } else {
    t28 = $[64];
  }
  let t29;
  if ($[65] !== priceRange[1] || $[66] !== t28) {
    t29 = /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      t26,
      /* @__PURE__ */ jsxs(InputGroup, { className: "mt-1", children: [
        t27,
        /* @__PURE__ */ jsx(InputGroupInput, { id: "max-price", type: "text", inputMode: "numeric", pattern: "[0-9]+", value: priceRange[1], onChange: t28 })
      ] })
    ] });
    $[65] = priceRange[1];
    $[66] = t28;
    $[67] = t29;
  } else {
    t29 = $[67];
  }
  let t30;
  if ($[68] !== t24 || $[69] !== t29) {
    t30 = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      t24,
      t25,
      t29
    ] });
    $[68] = t24;
    $[69] = t29;
    $[70] = t30;
  } else {
    t30 = $[70];
  }
  let t31;
  if ($[71] !== t20 || $[72] !== t30) {
    t31 = /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      t20,
      t30
    ] });
    $[71] = t20;
    $[72] = t30;
    $[73] = t31;
  } else {
    t31 = $[73];
  }
  let t32;
  if ($[74] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t32 = /* @__PURE__ */ jsx(Separator, {});
    $[74] = t32;
  } else {
    t32 = $[74];
  }
  let t33;
  if ($[75] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t33 = /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Scent Notes" });
    $[75] = t33;
  } else {
    t33 = $[75];
  }
  let t34;
  if ($[76] !== selectedNotes.length) {
    t34 = selectedNotes.length > 0 && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: _temp10, className: "text-xs h-7", children: "Reset" });
    $[76] = selectedNotes.length;
    $[77] = t34;
  } else {
    t34 = $[77];
  }
  let t35;
  if ($[78] !== t34) {
    t35 = /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      t33,
      t34
    ] });
    $[78] = t34;
    $[79] = t35;
  } else {
    t35 = $[79];
  }
  let t36;
  if ($[80] !== selectedNotes || $[81] !== toggleNote) {
    t36 = noteOptions.map((note_0) => /* @__PURE__ */ jsx(Button, { variant: selectedNotes.includes(note_0) ? "default" : "outline", size: "sm", className: "text-xs h-7", onClick: () => toggleNote(note_0), children: note_0 }, note_0));
    $[80] = selectedNotes;
    $[81] = toggleNote;
    $[82] = t36;
  } else {
    t36 = $[82];
  }
  let t37;
  if ($[83] !== t36) {
    t37 = /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: t36 });
    $[83] = t36;
    $[84] = t37;
  } else {
    t37 = $[84];
  }
  let t38;
  if ($[85] !== t35 || $[86] !== t37) {
    t38 = /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      t35,
      t37
    ] });
    $[85] = t35;
    $[86] = t37;
    $[87] = t38;
  } else {
    t38 = $[87];
  }
  let t39;
  if ($[88] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t39 = /* @__PURE__ */ jsx(Separator, {});
    $[88] = t39;
  } else {
    t39 = $[88];
  }
  let t40;
  if ($[89] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t40 = /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Availability" });
    $[89] = t40;
  } else {
    t40 = $[89];
  }
  let t41;
  if ($[90] !== inStock) {
    t41 = inStock && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: _temp11, className: "text-xs h-7", children: "Reset" });
    $[90] = inStock;
    $[91] = t41;
  } else {
    t41 = $[91];
  }
  let t42;
  if ($[92] !== t41) {
    t42 = /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      t40,
      t41
    ] });
    $[92] = t41;
    $[93] = t42;
  } else {
    t42 = $[93];
  }
  let t43;
  if ($[94] !== handleStockChange || $[95] !== inStock) {
    t43 = /* @__PURE__ */ jsx(Checkbox, { id: "in-stock", checked: inStock, onCheckedChange: handleStockChange });
    $[94] = handleStockChange;
    $[95] = inStock;
    $[96] = t43;
  } else {
    t43 = $[96];
  }
  let t44;
  if ($[97] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t44 = /* @__PURE__ */ jsx(Label, { htmlFor: "in-stock", className: "text-sm cursor-pointer", children: "In Stock" });
    $[97] = t44;
  } else {
    t44 = $[97];
  }
  let t45;
  if ($[98] !== t43) {
    t45 = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      t43,
      t44
    ] });
    $[98] = t43;
    $[99] = t45;
  } else {
    t45 = $[99];
  }
  let t46;
  if ($[100] !== t42 || $[101] !== t45) {
    t46 = /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      t42,
      t45
    ] });
    $[100] = t42;
    $[101] = t45;
    $[102] = t46;
  } else {
    t46 = $[102];
  }
  let t47;
  if ($[103] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t47 = /* @__PURE__ */ jsx(Separator, {});
    $[103] = t47;
  } else {
    t47 = $[103];
  }
  let t48;
  if ($[104] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t48 = /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Badges" });
    $[104] = t48;
  } else {
    t48 = $[104];
  }
  let t49;
  if ($[105] !== selectedBadges.length) {
    t49 = selectedBadges.length > 0 && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: _temp12, className: "text-xs h-7", children: "Reset" });
    $[105] = selectedBadges.length;
    $[106] = t49;
  } else {
    t49 = $[106];
  }
  let t50;
  if ($[107] !== t49) {
    t50 = /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      t48,
      t49
    ] });
    $[107] = t49;
    $[108] = t50;
  } else {
    t50 = $[108];
  }
  let t51;
  if ($[109] !== selectedBadges || $[110] !== toggleBadge) {
    t51 = badges.map((badge_0) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Checkbox, { id: `badge-${badge_0}`, checked: selectedBadges.includes(badge_0), onCheckedChange: () => toggleBadge(badge_0) }),
      /* @__PURE__ */ jsx(Label, { htmlFor: `badge-${badge_0}`, className: "text-sm cursor-pointer", children: badge_0 })
    ] }, badge_0));
    $[109] = selectedBadges;
    $[110] = toggleBadge;
    $[111] = t51;
  } else {
    t51 = $[111];
  }
  let t52;
  if ($[112] !== t51) {
    t52 = /* @__PURE__ */ jsx("div", { className: "space-y-2", children: t51 });
    $[112] = t51;
    $[113] = t52;
  } else {
    t52 = $[113];
  }
  let t53;
  if ($[114] !== t50 || $[115] !== t52) {
    t53 = /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      t50,
      t52
    ] });
    $[114] = t50;
    $[115] = t52;
    $[116] = t53;
  } else {
    t53 = $[116];
  }
  let t54;
  if ($[117] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t54 = /* @__PURE__ */ jsx(Separator, {});
    $[117] = t54;
  } else {
    t54 = $[117];
  }
  let t55;
  if ($[118] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t55 = /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Bottle Size" });
    $[118] = t55;
  } else {
    t55 = $[118];
  }
  let t56;
  if ($[119] !== selectedSizes.length) {
    t56 = selectedSizes.length > 0 && /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: _temp13, className: "text-xs h-7", children: "Reset" });
    $[119] = selectedSizes.length;
    $[120] = t56;
  } else {
    t56 = $[120];
  }
  let t57;
  if ($[121] !== t56) {
    t57 = /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      t55,
      t56
    ] });
    $[121] = t56;
    $[122] = t57;
  } else {
    t57 = $[122];
  }
  let t58;
  if ($[123] !== selectedSizes || $[124] !== toggleSize) {
    t58 = BOTTLE_SIZES.map((size_0) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Checkbox, { id: `size-${size_0.id}`, checked: selectedSizes.includes(size_0.id), onCheckedChange: () => toggleSize(size_0.id) }),
      /* @__PURE__ */ jsxs(Label, { htmlFor: `size-${size_0.id}`, className: "text-sm cursor-pointer", children: [
        size_0.name,
        " (",
        size_0.volume,
        "ml)"
      ] })
    ] }, size_0.id));
    $[123] = selectedSizes;
    $[124] = toggleSize;
    $[125] = t58;
  } else {
    t58 = $[125];
  }
  let t59;
  if ($[126] !== t58) {
    t59 = /* @__PURE__ */ jsx("div", { className: "space-y-2", children: t58 });
    $[126] = t58;
    $[127] = t59;
  } else {
    t59 = $[127];
  }
  let t60;
  if ($[128] !== t57 || $[129] !== t59) {
    t60 = /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      t57,
      t59
    ] });
    $[128] = t57;
    $[129] = t59;
    $[130] = t60;
  } else {
    t60 = $[130];
  }
  let t61;
  if ($[131] !== t10 || $[132] !== t16 || $[133] !== t31 || $[134] !== t38 || $[135] !== t46 || $[136] !== t53 || $[137] !== t60) {
    t61 = /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
      t10,
      t16,
      t17,
      t31,
      t32,
      t38,
      t39,
      t46,
      t47,
      t53,
      t54,
      t60
    ] });
    $[131] = t10;
    $[132] = t16;
    $[133] = t31;
    $[134] = t38;
    $[135] = t46;
    $[136] = t53;
    $[137] = t60;
    $[138] = t61;
  } else {
    t61 = $[138];
  }
  return t61;
}
function _temp13() {
  return onReset("size");
}
function _temp12() {
  return onReset("badge");
}
function _temp11() {
  return onReset("stock");
}
function _temp10() {
  return onReset("notes");
}
function _temp1() {
  return onReset("price");
}
function _temp0() {
  return onReset("category");
}
function ProductsPage() {
  const $ = c(161);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      from: "/products/"
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const searchParams = useSearch(t0);
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      from: "/products/"
    };
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const navigate = useNavigate(t1);
  const [search, setSearch] = useState(searchParams.q || "");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [filterOpen, setFilterOpen] = useState(false);
  let t2;
  if ($[2] !== searchParams.category) {
    t2 = searchParams.category ? [searchParams.category] : [];
    $[2] = searchParams.category;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const [selectedCategories, setSelectedCategories] = useState(t2);
  let t3;
  if ($[4] !== searchParams.notes) {
    t3 = searchParams.notes ? searchParams.notes.split(",") : [];
    $[4] = searchParams.notes;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const [selectedNotes, setSelectedNotes] = useState(t3);
  let t4;
  if ($[6] !== searchParams.badges) {
    t4 = searchParams.badges ? searchParams.badges.split(",") : [];
    $[6] = searchParams.badges;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  const [selectedBadges, setSelectedBadges] = useState(t4);
  let t5;
  if ($[8] !== searchParams.sizes) {
    t5 = searchParams.sizes ? searchParams.sizes.split(",") : [];
    $[8] = searchParams.sizes;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  const [selectedSizes, setSelectedSizes] = useState(t5);
  const [inStock, setInStock] = useState(searchParams.inStock || false);
  const t6 = searchParams.priceMin || 0;
  const t7 = searchParams.priceMax || MAX_PRICE_FILTER;
  let t8;
  if ($[10] !== t6 || $[11] !== t7) {
    t8 = [t6, t7];
    $[10] = t6;
    $[11] = t7;
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  const [priceRange, setPriceRange] = useState(t8);
  const featuredRef = useRef(null);
  let t9;
  if ($[13] !== searchParams.badges || $[14] !== searchParams.category || $[15] !== searchParams.inStock || $[16] !== searchParams.notes || $[17] !== searchParams.priceMax || $[18] !== searchParams.priceMin || $[19] !== searchParams.q || $[20] !== searchParams.sizes) {
    t9 = () => {
      if (searchParams.q) {
        setSearch(searchParams.q);
      }
      if (searchParams.category) {
        setSelectedCategories([searchParams.category]);
      }
      if (searchParams.notes) {
        setSelectedNotes(searchParams.notes.split(","));
      }
      if (searchParams.badges) {
        setSelectedBadges(searchParams.badges.split(","));
      }
      if (searchParams.sizes) {
        setSelectedSizes(searchParams.sizes.split(","));
      }
      if (searchParams.inStock) {
        setInStock(searchParams.inStock);
      }
      if (searchParams.priceMin) {
        setPriceRange((prev) => [searchParams.priceMin, prev[1]]);
      }
      if (searchParams.priceMax) {
        setPriceRange((prev_0) => [prev_0[0], searchParams.priceMax]);
      }
    };
    $[13] = searchParams.badges;
    $[14] = searchParams.category;
    $[15] = searchParams.inStock;
    $[16] = searchParams.notes;
    $[17] = searchParams.priceMax;
    $[18] = searchParams.priceMin;
    $[19] = searchParams.q;
    $[20] = searchParams.sizes;
    $[21] = t9;
  } else {
    t9 = $[21];
  }
  let t10;
  if ($[22] !== searchParams) {
    t10 = [searchParams];
    $[22] = searchParams;
    $[23] = t10;
  } else {
    t10 = $[23];
  }
  useEffect(t9, t10);
  let t11;
  let t12;
  if ($[24] !== searchParams.featured) {
    t11 = () => {
      if (searchParams.featured && featuredRef.current) {
        featuredRef.current.scrollIntoView({
          behavior: "smooth",
          block: "start"
        });
      }
    };
    t12 = [searchParams.featured];
    $[24] = searchParams.featured;
    $[25] = t11;
    $[26] = t12;
  } else {
    t11 = $[25];
    t12 = $[26];
  }
  useEffect(t11, t12);
  let t13;
  if ($[27] !== searchParams.featured) {
    t13 = (productId) => {
      if (!searchParams.featured) {
        return false;
      }
      const featuredList = searchParams.featured.split(",");
      return featuredList.includes(productId);
    };
    $[27] = searchParams.featured;
    $[28] = t13;
  } else {
    t13 = $[28];
  }
  const isFeatured = t13;
  let t14;
  if ($[29] !== navigate) {
    t14 = () => {
      setSelectedCategories([]);
      setSelectedNotes([]);
      setPriceRange([MIN_PRICE_FILTER, MAX_PRICE_FILTER]);
      setSelectedBadges([]);
      setSelectedSizes([]);
      setInStock(false);
      setSearch("");
      navigate({
        search: {
          q: "",
          category: "",
          notes: "",
          priceMin: void 0,
          priceMax: void 0,
          featured: "",
          badges: "",
          sizes: "",
          inStock: void 0
        }
      });
    };
    $[29] = navigate;
    $[30] = t14;
  } else {
    t14 = $[30];
  }
  const clearFilters = t14;
  let t15;
  if ($[31] !== navigate) {
    t15 = (value) => {
      setSearch(value);
      navigate({
        search: (prev_1) => ({
          ...prev_1,
          q: value
        })
      });
    };
    $[31] = navigate;
    $[32] = t15;
  } else {
    t15 = $[32];
  }
  const handleSearchChange = t15;
  let t16;
  if ($[33] !== navigate) {
    t16 = (cats) => {
      setSelectedCategories(cats);
      navigate({
        search: (prev_2) => ({
          ...prev_2,
          category: cats.join(",")
        })
      });
    };
    $[33] = navigate;
    $[34] = t16;
  } else {
    t16 = $[34];
  }
  const handleCategoryChange = t16;
  let t17;
  if ($[35] !== navigate) {
    t17 = (notes) => {
      setSelectedNotes(notes);
      navigate({
        search: (prev_3) => ({
          ...prev_3,
          notes: notes.join(",")
        })
      });
    };
    $[35] = navigate;
    $[36] = t17;
  } else {
    t17 = $[36];
  }
  const handleNotesChange = t17;
  let t18;
  if ($[37] !== navigate) {
    t18 = (range) => {
      setPriceRange(range);
      navigate({
        search: (prev_4) => ({
          ...prev_4,
          priceMin: range[0],
          priceMax: range[1]
        })
      });
    };
    $[37] = navigate;
    $[38] = t18;
  } else {
    t18 = $[38];
  }
  const handlePriceChange = t18;
  let t19;
  if ($[39] !== navigate) {
    t19 = (badges2) => {
      setSelectedBadges(badges2);
      navigate({
        search: (prev_5) => ({
          ...prev_5,
          badges: badges2.join(",")
        })
      });
    };
    $[39] = navigate;
    $[40] = t19;
  } else {
    t19 = $[40];
  }
  const handleBadgeChange = t19;
  let t20;
  if ($[41] !== navigate) {
    t20 = (sizes) => {
      setSelectedSizes(sizes);
      navigate({
        search: (prev_6) => ({
          ...prev_6,
          sizes: sizes.join(",")
        })
      });
    };
    $[41] = navigate;
    $[42] = t20;
  } else {
    t20 = $[42];
  }
  const handleSizeChange = t20;
  let t21;
  if ($[43] !== navigate) {
    t21 = (stock) => {
      setInStock(stock);
      navigate({
        search: (prev_7) => ({
          ...prev_7,
          inStock: stock
        })
      });
    };
    $[43] = navigate;
    $[44] = t21;
  } else {
    t21 = $[44];
  }
  const handleStockChange = t21;
  let t22;
  if ($[45] !== handleBadgeChange || $[46] !== handleCategoryChange || $[47] !== handleNotesChange || $[48] !== handlePriceChange || $[49] !== handleSizeChange || $[50] !== handleStockChange) {
    t22 = (filter) => {
      bb89: switch (filter) {
        case "category": {
          handleCategoryChange([]);
          break bb89;
        }
        case "price": {
          handlePriceChange([MIN_PRICE_FILTER, MAX_PRICE_FILTER]);
          break bb89;
        }
        case "notes": {
          handleNotesChange([]);
          break bb89;
        }
        case "badge": {
          handleBadgeChange([]);
          break bb89;
        }
        case "size": {
          handleSizeChange([]);
          break bb89;
        }
        case "stock": {
          handleStockChange(false);
        }
      }
    };
    $[45] = handleBadgeChange;
    $[46] = handleCategoryChange;
    $[47] = handleNotesChange;
    $[48] = handlePriceChange;
    $[49] = handleSizeChange;
    $[50] = handleStockChange;
    $[51] = t22;
  } else {
    t22 = $[51];
  }
  const handleResetFilter = t22;
  let result;
  if ($[52] !== inStock || $[53] !== priceRange[0] || $[54] !== priceRange[1] || $[55] !== search || $[56] !== selectedBadges || $[57] !== selectedCategories || $[58] !== selectedNotes || $[59] !== selectedSizes || $[60] !== sortBy) {
    let t232;
    if ($[62] !== inStock || $[63] !== priceRange[0] || $[64] !== priceRange[1] || $[65] !== search || $[66] !== selectedBadges || $[67] !== selectedCategories || $[68] !== selectedNotes || $[69] !== selectedSizes) {
      t232 = (product) => {
        const matchesSearch = !search || product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase());
        const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
        const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
        const matchesNotes = selectedNotes.length === 0 || selectedNotes.some((note) => product.notes.top.includes(note) || product.notes.heart.includes(note) || product.notes.base.includes(note));
        const matchesBadge = selectedBadges.length === 0 || selectedBadges.includes(product.badge);
        const matchesSize = selectedSizes.length === 0 || selectedSizes.includes(product.sizeId);
        const matchesStock = !inStock || product.stock > 0;
        return matchesSearch && matchesCategory && matchesPrice && matchesNotes && matchesBadge && matchesSize && matchesStock;
      };
      $[62] = inStock;
      $[63] = priceRange[0];
      $[64] = priceRange[1];
      $[65] = search;
      $[66] = selectedBadges;
      $[67] = selectedCategories;
      $[68] = selectedNotes;
      $[69] = selectedSizes;
      $[70] = t232;
    } else {
      t232 = $[70];
    }
    result = products.filter(t232);
    let t242;
    if ($[71] !== sortBy) {
      t242 = (a, b) => {
        switch (sortBy) {
          case "price-asc": {
            return a.price - b.price;
          }
          case "price-desc": {
            return b.price - a.price;
          }
          case "name-asc": {
            return a.name.localeCompare(b.name);
          }
          case "name-desc": {
            return b.name.localeCompare(a.name);
          }
          case "newest":
          default: {
            return 0;
          }
        }
      };
      $[71] = sortBy;
      $[72] = t242;
    } else {
      t242 = $[72];
    }
    result.sort(t242);
    $[52] = inStock;
    $[53] = priceRange[0];
    $[54] = priceRange[1];
    $[55] = search;
    $[56] = selectedBadges;
    $[57] = selectedCategories;
    $[58] = selectedNotes;
    $[59] = selectedSizes;
    $[60] = sortBy;
    $[61] = result;
  } else {
    result = $[61];
  }
  const filteredAndSortedProducts = result;
  const activeFilterCount = selectedCategories.length + selectedNotes.length + (priceRange[0] > 0 || priceRange[1] < MAX_PRICE_FILTER ? 1 : 0) + selectedBadges.length + selectedSizes.length + (inStock ? 1 : 0);
  let t23;
  let t24;
  let t25;
  if ($[73] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t23 = /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "inline-flex items-center gap-2 px-4 py-2 mb-6", children: [
      /* @__PURE__ */ jsx(Leaf, { className: "w-4 h-4", "aria-hidden": "true" }),
      "Our Collection"
    ] });
    t24 = /* @__PURE__ */ jsx("h1", { id: "products-heading", className: "text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4", children: "Explore Our Fragrances" });
    t25 = /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Discover unique scents crafted from nature's finest fruit peels. Each fragrance tells a story of freshness and sustainability." });
    $[73] = t23;
    $[74] = t24;
    $[75] = t25;
  } else {
    t23 = $[73];
    t24 = $[74];
    t25 = $[75];
  }
  let t26;
  if ($[76] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t26 = /* @__PURE__ */ jsx("section", { "aria-labelledby": "products-heading", className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("header", { className: "max-w-3xl mx-auto text-center", children: [
      t23,
      t24,
      t25,
      /* @__PURE__ */ jsx("div", { className: "mt-6 flex justify-center", children: /* @__PURE__ */ jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/configurator", children: [
        /* @__PURE__ */ jsx(Wand2, { className: "w-5 h-5 mr-2" }),
        "Configure Your Own!"
      ] }) }) })
    ] }) }) }) });
    $[76] = t26;
  } else {
    t26 = $[76];
  }
  let t27;
  if ($[77] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t27 = /* @__PURE__ */ jsx(InputGroupAddon, { children: /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-muted-foreground", "aria-hidden": "true" }) });
    $[77] = t27;
  } else {
    t27 = $[77];
  }
  let t28;
  if ($[78] !== handleSearchChange) {
    t28 = (e) => handleSearchChange(e.target.value);
    $[78] = handleSearchChange;
    $[79] = t28;
  } else {
    t28 = $[79];
  }
  let t29;
  if ($[80] !== search || $[81] !== t28) {
    t29 = /* @__PURE__ */ jsx("div", { className: "w-full md:w-80", children: /* @__PURE__ */ jsxs(InputGroup, { children: [
      t27,
      /* @__PURE__ */ jsx(InputGroupInput, { type: "search", placeholder: "Search fragrances...", value: search, onChange: t28, "aria-label": "Search fragrances" })
    ] }) });
    $[80] = search;
    $[81] = t28;
    $[82] = t29;
  } else {
    t29 = $[82];
  }
  let t30;
  if ($[83] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t30 = /* @__PURE__ */ jsx(SlidersHorizontal, { className: "w-4 h-4" });
    $[83] = t30;
  } else {
    t30 = $[83];
  }
  let t31;
  if ($[84] !== activeFilterCount) {
    t31 = activeFilterCount > 0 && /* @__PURE__ */ jsx(Badge, { variant: "default", className: "h-5 px-1.5 text-xs", children: activeFilterCount });
    $[84] = activeFilterCount;
    $[85] = t31;
  } else {
    t31 = $[85];
  }
  let t32;
  if ($[86] !== t31) {
    t32 = /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "gap-2", children: [
      t30,
      "Filters",
      t31
    ] }) });
    $[86] = t31;
    $[87] = t32;
  } else {
    t32 = $[87];
  }
  let t33;
  if ($[88] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t33 = /* @__PURE__ */ jsxs(SheetHeader, { children: [
      /* @__PURE__ */ jsx(SheetTitle, { children: "Filter Products" }),
      /* @__PURE__ */ jsx(SheetDescription, { children: "Refine your search to find the perfect fragrance." })
    ] });
    $[88] = t33;
  } else {
    t33 = $[88];
  }
  let t34;
  if ($[89] !== clearFilters || $[90] !== handleBadgeChange || $[91] !== handleCategoryChange || $[92] !== handleNotesChange || $[93] !== handlePriceChange || $[94] !== handleResetFilter || $[95] !== handleSizeChange || $[96] !== handleStockChange || $[97] !== inStock || $[98] !== priceRange || $[99] !== selectedBadges || $[100] !== selectedCategories || $[101] !== selectedNotes || $[102] !== selectedSizes) {
    t34 = /* @__PURE__ */ jsxs(SheetContent, { side: "left", className: "w-full sm:w-80", children: [
      t33,
      /* @__PURE__ */ jsx("div", { className: "py-4 ml-8 2xl:ml-2", children: /* @__PURE__ */ jsx(FilterPanel, { selectedCategories, setSelectedCategories, selectedNotes, setSelectedNotes, priceRange, setPriceRange, selectedBadges, setSelectedBadges, selectedSizes, setSelectedSizes, inStock, setInStock, onClear: clearFilters, onCategoryChange: handleCategoryChange, onNotesChange: handleNotesChange, onPriceChange: handlePriceChange, onBadgeChange: handleBadgeChange, onSizeChange: handleSizeChange, onStockChange: handleStockChange, onReset: handleResetFilter }) })
    ] });
    $[89] = clearFilters;
    $[90] = handleBadgeChange;
    $[91] = handleCategoryChange;
    $[92] = handleNotesChange;
    $[93] = handlePriceChange;
    $[94] = handleResetFilter;
    $[95] = handleSizeChange;
    $[96] = handleStockChange;
    $[97] = inStock;
    $[98] = priceRange;
    $[99] = selectedBadges;
    $[100] = selectedCategories;
    $[101] = selectedNotes;
    $[102] = selectedSizes;
    $[103] = t34;
  } else {
    t34 = $[103];
  }
  let t35;
  if ($[104] !== filterOpen || $[105] !== t32 || $[106] !== t34) {
    t35 = /* @__PURE__ */ jsxs(Sheet, { open: filterOpen, onOpenChange: setFilterOpen, children: [
      t32,
      t34
    ] });
    $[104] = filterOpen;
    $[105] = t32;
    $[106] = t34;
    $[107] = t35;
  } else {
    t35 = $[107];
  }
  let t36;
  if ($[108] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t36 = (e_0) => setSortBy(e_0.target.value);
    $[108] = t36;
  } else {
    t36 = $[108];
  }
  let t37;
  if ($[109] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t37 = sortOptions.map(_temp14);
    $[109] = t37;
  } else {
    t37 = $[109];
  }
  let t38;
  if ($[110] !== sortBy) {
    t38 = /* @__PURE__ */ jsx("div", { className: "flex-1 md:flex-none", children: /* @__PURE__ */ jsx("select", { value: sortBy, onChange: t36, className: "w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary", "aria-label": "Sort products", children: t37 }) });
    $[110] = sortBy;
    $[111] = t38;
  } else {
    t38 = $[111];
  }
  const t39 = viewMode === "grid" ? "default" : "ghost";
  let t40;
  if ($[112] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t40 = () => setViewMode("grid");
    $[112] = t40;
  } else {
    t40 = $[112];
  }
  let t41;
  if ($[113] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t41 = /* @__PURE__ */ jsx(LayoutGrid, { className: "w-4 h-4" });
    $[113] = t41;
  } else {
    t41 = $[113];
  }
  let t42;
  if ($[114] !== t39) {
    t42 = /* @__PURE__ */ jsx(Button, { variant: t39, size: "icon", className: "h-8 w-8", onClick: t40, "aria-label": "Grid view", children: t41 });
    $[114] = t39;
    $[115] = t42;
  } else {
    t42 = $[115];
  }
  const t43 = viewMode === "list" ? "default" : "ghost";
  let t44;
  if ($[116] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t44 = () => setViewMode("list");
    $[116] = t44;
  } else {
    t44 = $[116];
  }
  let t45;
  if ($[117] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t45 = /* @__PURE__ */ jsx(List, { className: "w-4 h-4" });
    $[117] = t45;
  } else {
    t45 = $[117];
  }
  let t46;
  if ($[118] !== t43) {
    t46 = /* @__PURE__ */ jsx(Button, { variant: t43, size: "icon", className: "h-8 w-8", onClick: t44, "aria-label": "List view", children: t45 });
    $[118] = t43;
    $[119] = t46;
  } else {
    t46 = $[119];
  }
  let t47;
  if ($[120] !== t42 || $[121] !== t46) {
    t47 = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 border rounded-md p-1", children: [
      t42,
      t46
    ] });
    $[120] = t42;
    $[121] = t46;
    $[122] = t47;
  } else {
    t47 = $[122];
  }
  let t48;
  if ($[123] !== t35 || $[124] !== t38 || $[125] !== t47) {
    t48 = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 w-full md:w-auto", children: [
      t35,
      t38,
      t47
    ] });
    $[123] = t35;
    $[124] = t38;
    $[125] = t47;
    $[126] = t48;
  } else {
    t48 = $[126];
  }
  let t49;
  if ($[127] !== t29 || $[128] !== t48) {
    t49 = /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center justify-between", children: [
      t29,
      t48
    ] });
    $[127] = t29;
    $[128] = t48;
    $[129] = t49;
  } else {
    t49 = $[129];
  }
  let t50;
  if ($[130] !== handleBadgeChange || $[131] !== handleCategoryChange || $[132] !== handleNotesChange || $[133] !== handlePriceChange || $[134] !== handleSizeChange || $[135] !== handleStockChange || $[136] !== inStock || $[137] !== priceRange[0] || $[138] !== priceRange[1] || $[139] !== selectedBadges || $[140] !== selectedCategories || $[141] !== selectedNotes || $[142] !== selectedSizes) {
    t50 = (selectedCategories.length > 0 || selectedNotes.length > 0 || priceRange[0] > 0 || priceRange[1] < MAX_PRICE_FILTER || selectedBadges.length > 0 || selectedSizes.length > 0 || inStock) && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mt-4", children: [
      inStock && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
        "In Stock",
        /* @__PURE__ */ jsx("button", { onClick: () => handleStockChange(false), className: "ml-1 hover:text-destructive", children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" }) })
      ] }),
      selectedCategories.map((cat) => /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
        cat,
        /* @__PURE__ */ jsx("button", { onClick: () => handleCategoryChange(selectedCategories.filter((c2) => c2 !== cat)), className: "ml-1 hover:text-destructive", children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" }) })
      ] }, cat)),
      selectedNotes.map((note_0) => /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
        note_0,
        /* @__PURE__ */ jsx("button", { onClick: () => handleNotesChange(selectedNotes.filter((n) => n !== note_0)), className: "ml-1 hover:text-destructive", children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" }) })
      ] }, note_0)),
      selectedBadges.map((badge) => /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
        badge,
        /* @__PURE__ */ jsx("button", { onClick: () => handleBadgeChange(selectedBadges.filter((b_0) => b_0 !== badge)), className: "ml-1 hover:text-destructive", children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" }) })
      ] }, badge)),
      selectedSizes.map((size) => /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
        BOTTLE_SIZES.find((s) => s.id === size)?.name,
        /* @__PURE__ */ jsx("button", { onClick: () => handleSizeChange(selectedSizes.filter((s_0) => s_0 !== size)), className: "ml-1 hover:text-destructive", children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" }) })
      ] }, size)),
      (priceRange[0] > 0 || priceRange[1] < MAX_PRICE_FILTER) && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
        "€",
        priceRange[0],
        " - €",
        priceRange[1],
        /* @__PURE__ */ jsx("button", { onClick: () => handlePriceChange([MIN_PRICE_FILTER, MAX_PRICE_FILTER]), className: "ml-1 hover:text-destructive", children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" }) })
      ] })
    ] });
    $[130] = handleBadgeChange;
    $[131] = handleCategoryChange;
    $[132] = handleNotesChange;
    $[133] = handlePriceChange;
    $[134] = handleSizeChange;
    $[135] = handleStockChange;
    $[136] = inStock;
    $[137] = priceRange[0];
    $[138] = priceRange[1];
    $[139] = selectedBadges;
    $[140] = selectedCategories;
    $[141] = selectedNotes;
    $[142] = selectedSizes;
    $[143] = t50;
  } else {
    t50 = $[143];
  }
  let t51;
  if ($[144] !== t49 || $[145] !== t50) {
    t51 = /* @__PURE__ */ jsx("nav", { "aria-label": "Product filters", className: "py-8 border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      t49,
      t50
    ] }) });
    $[144] = t49;
    $[145] = t50;
    $[146] = t51;
  } else {
    t51 = $[146];
  }
  let t52;
  if ($[147] !== filteredAndSortedProducts.length) {
    t52 = /* @__PURE__ */ jsxs("div", { className: "mb-4 text-sm text-muted-foreground", children: [
      "Showing ",
      filteredAndSortedProducts.length,
      " of ",
      products.length,
      " fragrances"
    ] });
    $[147] = filteredAndSortedProducts.length;
    $[148] = t52;
  } else {
    t52 = $[148];
  }
  let t53;
  if ($[149] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t53 = /* @__PURE__ */ jsx("h2", { id: "products-grid-heading", className: "sr-only", children: "Product listing" });
    $[149] = t53;
  } else {
    t53 = $[149];
  }
  let t54;
  if ($[150] !== clearFilters || $[151] !== filteredAndSortedProducts || $[152] !== isFeatured || $[153] !== viewMode) {
    t54 = filteredAndSortedProducts.length === 0 ? /* @__PURE__ */ jsxs(Empty, { children: [
      /* @__PURE__ */ jsxs(EmptyHeader, { children: [
        /* @__PURE__ */ jsx(EmptyMedia, { variant: "icon", children: /* @__PURE__ */ jsx(Package, { className: "w-10 h-10" }) }),
        /* @__PURE__ */ jsx(EmptyTitle, { children: "No fragrances found" }),
        /* @__PURE__ */ jsx(EmptyDescription, { children: "No fragrances found matching your criteria. Try adjusting your filters." })
      ] }),
      /* @__PURE__ */ jsx(EmptyContent, { children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "lg", onClick: clearFilters, children: "Clear Filters" }) })
    ] }) : viewMode === "list" ? /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4 list-none p-0 m-0 overflow-x-hidden", role: "list", "aria-label": "Products", children: filteredAndSortedProducts.map((product_0) => /* @__PURE__ */ jsx(ListProduct, { product: product_0, featured: isFeatured(product_0.id) }, product_0.id)) }) : /* @__PURE__ */ jsx("ul", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0", role: "list", "aria-label": "Products", children: filteredAndSortedProducts.map((product_1) => /* @__PURE__ */ jsx(ProductCard, { product: product_1, featured: isFeatured(product_1.id) }, product_1.id)) });
    $[150] = clearFilters;
    $[151] = filteredAndSortedProducts;
    $[152] = isFeatured;
    $[153] = viewMode;
    $[154] = t54;
  } else {
    t54 = $[154];
  }
  let t55;
  if ($[155] !== t52 || $[156] !== t54) {
    t55 = /* @__PURE__ */ jsx("section", { ref: featuredRef, "aria-labelledby": "products-grid-heading", className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(SectionWrapper, { loading: false, error: null, loadingType: "grid", loadingCount: 6, children: [
      t52,
      t53,
      t54
    ] }) }) });
    $[155] = t52;
    $[156] = t54;
    $[157] = t55;
  } else {
    t55 = $[157];
  }
  let t56;
  if ($[158] !== t51 || $[159] !== t55) {
    t56 = /* @__PURE__ */ jsxs("main", { className: "pt-24", children: [
      t26,
      t51,
      t55
    ] });
    $[158] = t51;
    $[159] = t55;
    $[160] = t56;
  } else {
    t56 = $[160];
  }
  return t56;
}
function _temp14(option) {
  return /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value);
}
function ListProduct(t0) {
  const $ = c(101);
  const {
    product,
    featured: t1
  } = t0;
  const featured = t1 === void 0 ? false : t1;
  const addItem = useCartStore(_temp15);
  const wishlistItems = useWishlistStore(_temp16);
  const addToWishlist = useWishlistStore(_temp17);
  const removeFromWishlist = useWishlistStore(_temp18);
  const compareItems = useCompareStore(_temp19);
  const addToCompare = useCompareStore(_temp20);
  const removeFromCompare = useCompareStore(_temp21);
  let t2;
  if ($[0] !== product.id || $[1] !== wishlistItems) {
    let t310;
    if ($[3] !== product.id) {
      t310 = (item) => item.productId === product.id;
      $[3] = product.id;
      $[4] = t310;
    } else {
      t310 = $[4];
    }
    t2 = wishlistItems.some(t310);
    $[0] = product.id;
    $[1] = wishlistItems;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const isInWishlist = t2;
  let t3;
  if ($[5] !== compareItems || $[6] !== product.id) {
    let t47;
    if ($[8] !== product.id) {
      t47 = (item_0) => item_0.productId === product.id;
      $[8] = product.id;
      $[9] = t47;
    } else {
      t47 = $[9];
    }
    t3 = compareItems.some(t47);
    $[5] = compareItems;
    $[6] = product.id;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  const isInCompare = t3;
  const [added, setAdded] = useState(false);
  let t4;
  if ($[10] !== addItem || $[11] !== product.id) {
    t4 = (e) => {
      e.preventDefault();
      e.stopPropagation();
      addItem(product.id, 1);
      setAdded(true);
      setTimeout(() => setAdded(false), NOTIFICATION_DURATION);
    };
    $[10] = addItem;
    $[11] = product.id;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  const handleAddToCart = t4;
  let t5;
  if ($[13] !== addToWishlist || $[14] !== isInWishlist || $[15] !== product.id || $[16] !== removeFromWishlist) {
    t5 = (e_0) => {
      e_0.preventDefault();
      e_0.stopPropagation();
      if (isInWishlist) {
        removeFromWishlist(product.id);
      } else {
        addToWishlist(product.id);
      }
    };
    $[13] = addToWishlist;
    $[14] = isInWishlist;
    $[15] = product.id;
    $[16] = removeFromWishlist;
    $[17] = t5;
  } else {
    t5 = $[17];
  }
  const handleWishlistToggle = t5;
  let t6;
  if ($[18] !== addToCompare || $[19] !== isInCompare || $[20] !== product.id || $[21] !== removeFromCompare) {
    t6 = (e_1) => {
      e_1.preventDefault();
      e_1.stopPropagation();
      if (isInCompare) {
        removeFromCompare(product.id);
      } else {
        addToCompare(product.id);
      }
    };
    $[18] = addToCompare;
    $[19] = isInCompare;
    $[20] = product.id;
    $[21] = removeFromCompare;
    $[22] = t6;
  } else {
    t6 = $[22];
  }
  const handleCompareToggle = t6;
  const t7 = `flex flex-row overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 sm:p-6 ${featured ? "border-2 border-[#D4AF37]" : ""}`;
  let t8;
  if ($[23] !== product.id) {
    t8 = {
      productId: product.id
    };
    $[23] = product.id;
    $[24] = t8;
  } else {
    t8 = $[24];
  }
  const t9 = `${product.name} fragrance bottle`;
  let t10;
  if ($[25] !== product.image || $[26] !== t9) {
    t10 = /* @__PURE__ */ jsx("figure", { className: "relative aspect-square overflow-hidden bg-muted h-24 sm:h-full p-2 sm:p-4", children: /* @__PURE__ */ jsx("img", { src: product.image, alt: t9, className: "w-full h-full object-contain" }) });
    $[25] = product.image;
    $[26] = t9;
    $[27] = t10;
  } else {
    t10 = $[27];
  }
  let t11;
  if ($[28] !== t10 || $[29] !== t8) {
    t11 = /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: t8, className: "block w-24 sm:w-48 md:w-56 shrink-0 overflow-hidden", children: t10 });
    $[28] = t10;
    $[29] = t8;
    $[30] = t11;
  } else {
    t11 = $[30];
  }
  let t12;
  if ($[31] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsx(Leaf, { className: "w-3 h-3 sm:w-4 sm:h-4 text-primary shrink-0", "aria-hidden": "true" });
    $[31] = t12;
  } else {
    t12 = $[31];
  }
  let t13;
  if ($[32] !== product.notes.top) {
    t13 = /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 mb-1 sm:mb-2", children: [
      t12,
      /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: product.notes.top })
    ] });
    $[32] = product.notes.top;
    $[33] = t13;
  } else {
    t13 = $[33];
  }
  let t14;
  if ($[34] !== product.name) {
    t14 = /* @__PURE__ */ jsx(CardTitle, { className: "text-lg sm:text-2xl font-heading font-semibold", children: product.name });
    $[34] = product.name;
    $[35] = t14;
  } else {
    t14 = $[35];
  }
  let t15;
  if ($[36] !== t13 || $[37] !== t14) {
    t15 = /* @__PURE__ */ jsxs("div", { children: [
      t13,
      t14
    ] });
    $[36] = t13;
    $[37] = t14;
    $[38] = t15;
  } else {
    t15 = $[38];
  }
  let t16;
  if ($[39] !== product.price) {
    t16 = /* @__PURE__ */ jsxs("data", { value: product.price, className: "text-2xl sm:text-5xl font-heading font-bold text-primary shrink-0", children: [
      "€",
      product.price
    ] });
    $[39] = product.price;
    $[40] = t16;
  } else {
    t16 = $[40];
  }
  let t17;
  if ($[41] !== t15 || $[42] !== t16) {
    t17 = /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-2 sm:gap-4 mb-2", children: [
      t15,
      t16
    ] });
    $[41] = t15;
    $[42] = t16;
    $[43] = t17;
  } else {
    t17 = $[43];
  }
  let t18;
  if ($[44] !== product.description) {
    t18 = /* @__PURE__ */ jsx(CardDescription, { className: "text-sm mb-3 sm:mb-5 leading-relaxed flex-1 line-clamp-2", children: product.description });
    $[44] = product.description;
    $[45] = t18;
  } else {
    t18 = $[45];
  }
  const t19 = isInWishlist ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`;
  const t20 = `h-8 w-8 sm:h-10 sm:w-10 ${isInWishlist ? "text-red-500 border-red-500 hover:text-red-600 hover:border-red-600" : ""}`;
  const t21 = `w-4 h-4 ${isInWishlist ? "fill-current" : ""}`;
  let t22;
  if ($[46] !== t21) {
    t22 = /* @__PURE__ */ jsx(Heart, { className: t21 });
    $[46] = t21;
    $[47] = t22;
  } else {
    t22 = $[47];
  }
  let t23;
  if ($[48] !== handleWishlistToggle || $[49] !== t19 || $[50] !== t20 || $[51] !== t22) {
    t23 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "outline", onClick: handleWishlistToggle, "aria-label": t19, className: t20, children: t22 }) });
    $[48] = handleWishlistToggle;
    $[49] = t19;
    $[50] = t20;
    $[51] = t22;
    $[52] = t23;
  } else {
    t23 = $[52];
  }
  const t24 = isInWishlist ? "Remove from wishlist" : "Add to wishlist";
  let t25;
  if ($[53] !== t24) {
    t25 = /* @__PURE__ */ jsx(TooltipContent, { children: t24 });
    $[53] = t24;
    $[54] = t25;
  } else {
    t25 = $[54];
  }
  let t26;
  if ($[55] !== t23 || $[56] !== t25) {
    t26 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t23,
      t25
    ] });
    $[55] = t23;
    $[56] = t25;
    $[57] = t26;
  } else {
    t26 = $[57];
  }
  const t27 = isInCompare ? `Remove ${product.name} from compare` : `Add ${product.name} to compare`;
  const t28 = `h-8 w-8 sm:h-10 sm:w-10 ${isInCompare ? "text-primary border-primary" : ""}`;
  let t29;
  if ($[58] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t29 = /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4" });
    $[58] = t29;
  } else {
    t29 = $[58];
  }
  let t30;
  if ($[59] !== handleCompareToggle || $[60] !== t27 || $[61] !== t28) {
    t30 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "outline", onClick: handleCompareToggle, "aria-label": t27, className: t28, children: t29 }) });
    $[59] = handleCompareToggle;
    $[60] = t27;
    $[61] = t28;
    $[62] = t30;
  } else {
    t30 = $[62];
  }
  const t31 = isInCompare ? "Remove from compare" : "Add to compare";
  let t32;
  if ($[63] !== t31) {
    t32 = /* @__PURE__ */ jsx(TooltipContent, { children: t31 });
    $[63] = t31;
    $[64] = t32;
  } else {
    t32 = $[64];
  }
  let t33;
  if ($[65] !== t30 || $[66] !== t32) {
    t33 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t30,
      t32
    ] });
    $[65] = t30;
    $[66] = t32;
    $[67] = t33;
  } else {
    t33 = $[67];
  }
  let t34;
  if ($[68] !== t26 || $[69] !== t33) {
    t34 = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 sm:gap-2", children: [
      t26,
      t33
    ] });
    $[68] = t26;
    $[69] = t33;
    $[70] = t34;
  } else {
    t34 = $[70];
  }
  let t35;
  if ($[71] !== product.id) {
    t35 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "sm", variant: "outline", className: "text-xs sm:text-base px-2 sm:px-4", children: /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: {
      productId: product.id
    }, children: "Details" }) }) });
    $[71] = product.id;
    $[72] = t35;
  } else {
    t35 = $[72];
  }
  let t36;
  if ($[73] !== product.name) {
    t36 = /* @__PURE__ */ jsxs(TooltipContent, { children: [
      "View ",
      product.name
    ] });
    $[73] = product.name;
    $[74] = t36;
  } else {
    t36 = $[74];
  }
  let t37;
  if ($[75] !== t35 || $[76] !== t36) {
    t37 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t35,
      t36
    ] });
    $[75] = t35;
    $[76] = t36;
    $[77] = t37;
  } else {
    t37 = $[77];
  }
  let t38;
  if ($[78] !== added) {
    t38 = added ? /* @__PURE__ */ jsx(Check, { size: 16, className: "mr-1 sm:mr-2", "aria-hidden": "true" }) : /* @__PURE__ */ jsx(ShoppingBag, { size: 16, className: "mr-1 sm:mr-2", "aria-hidden": "true" });
    $[78] = added;
    $[79] = t38;
  } else {
    t38 = $[79];
  }
  const t39 = added ? "Added" : "Buy";
  let t40;
  if ($[80] !== handleAddToCart || $[81] !== t38 || $[82] !== t39) {
    t40 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { size: "sm", onClick: handleAddToCart, className: "text-xs sm:text-base px-2 sm:px-4", children: [
      t38,
      t39
    ] }) });
    $[80] = handleAddToCart;
    $[81] = t38;
    $[82] = t39;
    $[83] = t40;
  } else {
    t40 = $[83];
  }
  let t41;
  if ($[84] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t41 = /* @__PURE__ */ jsx(TooltipContent, { children: "Add to cart" });
    $[84] = t41;
  } else {
    t41 = $[84];
  }
  let t42;
  if ($[85] !== t40) {
    t42 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t40,
      t41
    ] });
    $[85] = t40;
    $[86] = t42;
  } else {
    t42 = $[86];
  }
  let t43;
  if ($[87] !== t37 || $[88] !== t42) {
    t43 = /* @__PURE__ */ jsxs("div", { className: "flex gap-1 sm:gap-2", children: [
      t37,
      t42
    ] });
    $[87] = t37;
    $[88] = t42;
    $[89] = t43;
  } else {
    t43 = $[89];
  }
  let t44;
  if ($[90] !== t34 || $[91] !== t43) {
    t44 = /* @__PURE__ */ jsxs(CardFooter, { className: "flex flex-wrap items-center justify-between p-0 gap-2 sm:gap-4 mt-auto", children: [
      t34,
      t43
    ] });
    $[90] = t34;
    $[91] = t43;
    $[92] = t44;
  } else {
    t44 = $[92];
  }
  let t45;
  if ($[93] !== t17 || $[94] !== t18 || $[95] !== t44) {
    t45 = /* @__PURE__ */ jsxs("div", { className: "flex-1 p-3 sm:p-6 flex flex-col min-w-0 overflow-hidden", children: [
      t17,
      t18,
      t44
    ] });
    $[93] = t17;
    $[94] = t18;
    $[95] = t44;
    $[96] = t45;
  } else {
    t45 = $[96];
  }
  let t46;
  if ($[97] !== t11 || $[98] !== t45 || $[99] !== t7) {
    t46 = /* @__PURE__ */ jsx("li", { className: "list-none", children: /* @__PURE__ */ jsxs(Card, { className: t7, children: [
      t11,
      t45
    ] }) });
    $[97] = t11;
    $[98] = t45;
    $[99] = t7;
    $[100] = t46;
  } else {
    t46 = $[100];
  }
  return t46;
}
function _temp21(state_5) {
  return state_5.removeItem;
}
function _temp20(state_4) {
  return state_4.addItem;
}
function _temp19(state_3) {
  return state_3.items;
}
function _temp18(state_2) {
  return state_2.removeItem;
}
function _temp17(state_1) {
  return state_1.addItem;
}
function _temp16(state_0) {
  return state_0.items;
}
function _temp15(state) {
  return state.addItem;
}
const SplitComponent = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(ProductsPage, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  SplitComponent as component
};

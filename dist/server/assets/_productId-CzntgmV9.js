import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { y as cn, f as Button, a2 as useAuthStore, C as Card, o as CardContent, i as useCartStore, u as useWishlistStore, D as useCompareStore, q as useSubscriptionStore, a3 as getProductById, a4 as getSimilarProducts, a5 as getRelatedSizes, a6 as getAllBaseProducts, m as CardHeader, n as CardTitle, h as BlurFade, B as Badge, M as MAX_QUANTITY, k as Tooltip, T as TooltipTrigger, j as TooltipContent, l as Separator, a7 as MAX_COMPARE_ITEMS } from "./router-p6p1R6bc.js";
import * as React from "react";
import { useState, useMemo, useEffect, useRef } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Slot } from "radix-ui";
import { useParams, useNavigate, Link } from "@tanstack/react-router";
import { A as ANIMATION_PAUSE_DELAY } from "./timeouts-BDPnrphD.js";
import { B as BLUR_FADE_DELAY_MEDIUM, b as BLUR_FADE_DELAY_LONG, e as BLUR_FADE_DELAY_EXTRA_LONG, g as BLUR_FADE_DELAY_EXTRA_LONG_2, f as BLUR_FADE_DELAY_MAX } from "./animation-DXk-6j-p.js";
import { u as useReviewStore } from "./useReviewStore-yMLlazlT.js";
import { Star, ArrowLeft, Home, Leaf, MessageCircle, ShoppingBag, Heart, GitCompare, Share2, Package, Award, Shield, HeartHandshake, LeafIcon, Recycle, Droplets, Clock } from "lucide-react";
import { S as SectionWrapper } from "./section-wrapper-Dquk3Zgc.js";
import { u as useAsyncDataWithRetry } from "./use-async-data-CEBcoOhM.js";
import { toast } from "sonner";
import ReactMarkdown from "react-markdown";
import { F as FAQ } from "./FAQ-D-FokA9W.js";
import { T as Textarea } from "./textarea-DJFy-xEo.js";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
import "zustand";
import "react-dom";
import "zustand/middleware";
import "motion/react";
import "next-themes";
import "./accordion-CBkDO8jU.js";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel(t0) {
  const $ = c(45);
  let children;
  let className;
  let opts;
  let plugins;
  let props;
  let setApi;
  let t1;
  if ($[0] !== t0) {
    ({
      orientation: t1,
      opts,
      setApi,
      plugins,
      className,
      children,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = opts;
    $[4] = plugins;
    $[5] = props;
    $[6] = setApi;
    $[7] = t1;
  } else {
    children = $[1];
    className = $[2];
    opts = $[3];
    plugins = $[4];
    props = $[5];
    setApi = $[6];
    t1 = $[7];
  }
  const orientation = t1 === void 0 ? "horizontal" : t1;
  const t2 = orientation === "horizontal" ? "x" : "y";
  let t3;
  if ($[8] !== opts || $[9] !== t2) {
    t3 = {
      ...opts,
      axis: t2
    };
    $[8] = opts;
    $[9] = t2;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  const [carouselRef, api] = useEmblaCarousel(t3, plugins);
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  let t4;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = (api_0) => {
      if (!api_0) {
        return;
      }
      setCanScrollPrev(api_0.canScrollPrev());
      setCanScrollNext(api_0.canScrollNext());
    };
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  const onSelect = t4;
  let t5;
  if ($[12] !== api) {
    t5 = () => {
      api?.scrollPrev();
    };
    $[12] = api;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  const scrollPrev = t5;
  let t6;
  if ($[14] !== api) {
    t6 = () => {
      api?.scrollNext();
    };
    $[14] = api;
    $[15] = t6;
  } else {
    t6 = $[15];
  }
  const scrollNext = t6;
  let t7;
  if ($[16] !== scrollNext || $[17] !== scrollPrev) {
    t7 = (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else {
        if (event.key === "ArrowRight") {
          event.preventDefault();
          scrollNext();
        }
      }
    };
    $[16] = scrollNext;
    $[17] = scrollPrev;
    $[18] = t7;
  } else {
    t7 = $[18];
  }
  const handleKeyDown = t7;
  let t8;
  let t9;
  if ($[19] !== api || $[20] !== setApi) {
    t8 = () => {
      if (!api || !setApi) {
        return;
      }
      setApi(api);
    };
    t9 = [api, setApi];
    $[19] = api;
    $[20] = setApi;
    $[21] = t8;
    $[22] = t9;
  } else {
    t8 = $[21];
    t9 = $[22];
  }
  React.useEffect(t8, t9);
  let t10;
  let t11;
  if ($[23] !== api) {
    t10 = () => {
      if (!api) {
        return;
      }
      onSelect(api);
      api.on("reInit", onSelect);
      api.on("select", onSelect);
      return () => {
        api?.off("select", onSelect);
      };
    };
    t11 = [api, onSelect];
    $[23] = api;
    $[24] = t10;
    $[25] = t11;
  } else {
    t10 = $[24];
    t11 = $[25];
  }
  React.useEffect(t10, t11);
  const t12 = orientation || (opts?.axis === "y" ? "vertical" : "horizontal");
  let t13;
  if ($[26] !== api || $[27] !== canScrollNext || $[28] !== canScrollPrev || $[29] !== carouselRef || $[30] !== opts || $[31] !== scrollNext || $[32] !== scrollPrev || $[33] !== t12) {
    t13 = {
      carouselRef,
      api,
      opts,
      orientation: t12,
      scrollPrev,
      scrollNext,
      canScrollPrev,
      canScrollNext
    };
    $[26] = api;
    $[27] = canScrollNext;
    $[28] = canScrollPrev;
    $[29] = carouselRef;
    $[30] = opts;
    $[31] = scrollNext;
    $[32] = scrollPrev;
    $[33] = t12;
    $[34] = t13;
  } else {
    t13 = $[34];
  }
  let t14;
  if ($[35] !== className) {
    t14 = cn("relative", className);
    $[35] = className;
    $[36] = t14;
  } else {
    t14 = $[36];
  }
  let t15;
  if ($[37] !== children || $[38] !== handleKeyDown || $[39] !== props || $[40] !== t14) {
    t15 = /* @__PURE__ */ jsx("div", { onKeyDownCapture: handleKeyDown, className: t14, role: "region", "aria-roledescription": "carousel", "data-slot": "carousel", ...props, children });
    $[37] = children;
    $[38] = handleKeyDown;
    $[39] = props;
    $[40] = t14;
    $[41] = t15;
  } else {
    t15 = $[41];
  }
  let t16;
  if ($[42] !== t13 || $[43] !== t15) {
    t16 = /* @__PURE__ */ jsx(CarouselContext.Provider, { value: t13, children: t15 });
    $[42] = t13;
    $[43] = t15;
    $[44] = t16;
  } else {
    t16 = $[44];
  }
  return t16;
}
function CarouselContent(t0) {
  const $ = c(12);
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
  const {
    carouselRef,
    orientation
  } = useCarousel();
  const t1 = orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col";
  let t2;
  if ($[3] !== className || $[4] !== t1) {
    t2 = cn("flex", t1, className);
    $[3] = className;
    $[4] = t1;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== props || $[7] !== t2) {
    t3 = /* @__PURE__ */ jsx("div", { className: t2, ...props });
    $[6] = props;
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  let t4;
  if ($[9] !== carouselRef || $[10] !== t3) {
    t4 = /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", "data-slot": "carousel-content", children: t3 });
    $[9] = carouselRef;
    $[10] = t3;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  return t4;
}
function CarouselItem(t0) {
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
  const {
    orientation
  } = useCarousel();
  const t1 = orientation === "horizontal" ? "pl-4" : "pt-4";
  let t2;
  if ($[3] !== className || $[4] !== t1) {
    t2 = cn("min-w-0 shrink-0 grow-0 basis-full", t1, className);
    $[3] = className;
    $[4] = t1;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== props || $[7] !== t2) {
    t3 = /* @__PURE__ */ jsx("div", { role: "group", "aria-roledescription": "slide", "data-slot": "carousel-item", className: t2, ...props });
    $[6] = props;
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
function CarouselPrevious(t0) {
  const $ = c(17);
  let className;
  let props;
  let t1;
  let t2;
  if ($[0] !== t0) {
    ({
      className,
      variant: t1,
      size: t2,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
  }
  const variant = t1 === void 0 ? "outline" : t1;
  const size = t2 === void 0 ? "icon-sm" : t2;
  const {
    orientation,
    scrollPrev,
    canScrollPrev
  } = useCarousel();
  const t3 = orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90";
  let t4;
  if ($[5] !== className || $[6] !== t3) {
    t4 = cn("absolute touch-manipulation rounded-full", t3, className);
    $[5] = className;
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  const t5 = !canScrollPrev;
  let t6;
  let t7;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx(HugeiconsIcon, { icon: ArrowLeft01Icon, strokeWidth: 2 });
    t7 = /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" });
    $[8] = t6;
    $[9] = t7;
  } else {
    t6 = $[8];
    t7 = $[9];
  }
  let t8;
  if ($[10] !== props || $[11] !== scrollPrev || $[12] !== size || $[13] !== t4 || $[14] !== t5 || $[15] !== variant) {
    t8 = /* @__PURE__ */ jsxs(Button, { "data-slot": "carousel-previous", variant, size, className: t4, disabled: t5, onClick: scrollPrev, ...props, children: [
      t6,
      t7
    ] });
    $[10] = props;
    $[11] = scrollPrev;
    $[12] = size;
    $[13] = t4;
    $[14] = t5;
    $[15] = variant;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  return t8;
}
function CarouselNext(t0) {
  const $ = c(17);
  let className;
  let props;
  let t1;
  let t2;
  if ($[0] !== t0) {
    ({
      className,
      variant: t1,
      size: t2,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
  }
  const variant = t1 === void 0 ? "outline" : t1;
  const size = t2 === void 0 ? "icon-sm" : t2;
  const {
    orientation,
    scrollNext,
    canScrollNext
  } = useCarousel();
  const t3 = orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90";
  let t4;
  if ($[5] !== className || $[6] !== t3) {
    t4 = cn("absolute touch-manipulation rounded-full", t3, className);
    $[5] = className;
    $[6] = t3;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  const t5 = !canScrollNext;
  let t6;
  let t7;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx(HugeiconsIcon, { icon: ArrowRight01Icon, strokeWidth: 2 });
    t7 = /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" });
    $[8] = t6;
    $[9] = t7;
  } else {
    t6 = $[8];
    t7 = $[9];
  }
  let t8;
  if ($[10] !== props || $[11] !== scrollNext || $[12] !== size || $[13] !== t4 || $[14] !== t5 || $[15] !== variant) {
    t8 = /* @__PURE__ */ jsxs(Button, { "data-slot": "carousel-next", variant, size, className: t4, disabled: t5, onClick: scrollNext, ...props, children: [
      t6,
      t7
    ] });
    $[10] = props;
    $[11] = scrollNext;
    $[12] = size;
    $[13] = t4;
    $[14] = t5;
    $[15] = variant;
    $[16] = t8;
  } else {
    t8 = $[16];
  }
  return t8;
}
function Breadcrumb(t0) {
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
    t1 = cn(className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function BreadcrumbList(t0) {
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
    t1 = cn("flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground sm:gap-2.5", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("ol", { "data-slot": "breadcrumb-list", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function BreadcrumbItem(t0) {
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
    t1 = cn("inline-flex items-center gap-1.5", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("li", { "data-slot": "breadcrumb-item", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function BreadcrumbLink(t0) {
  const $ = c(10);
  let asChild;
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      asChild,
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = asChild;
    $[2] = className;
    $[3] = props;
  } else {
    asChild = $[1];
    className = $[2];
    props = $[3];
  }
  const Comp = asChild ? Slot.Root : "a";
  let t1;
  if ($[4] !== className) {
    t1 = cn("transition-colors hover:text-foreground", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  let t2;
  if ($[6] !== Comp || $[7] !== props || $[8] !== t1) {
    t2 = /* @__PURE__ */ jsx(Comp, { "data-slot": "breadcrumb-link", className: t1, ...props });
    $[6] = Comp;
    $[7] = props;
    $[8] = t1;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  return t2;
}
function BreadcrumbPage(t0) {
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
    t1 = cn("font-normal text-foreground", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("span", { "data-slot": "breadcrumb-page", role: "link", "aria-disabled": "true", "aria-current": "page", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function BreadcrumbSeparator(t0) {
  const $ = c(12);
  let children;
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      children,
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
  }
  let t1;
  if ($[4] !== className) {
    t1 = cn("[&>svg]:size-3.5", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  let t2;
  if ($[6] !== children) {
    t2 = children ?? /* @__PURE__ */ jsx(HugeiconsIcon, { icon: ArrowRight01Icon, strokeWidth: 2 });
    $[6] = children;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  let t3;
  if ($[8] !== props || $[9] !== t1 || $[10] !== t2) {
    t3 = /* @__PURE__ */ jsx("li", { "data-slot": "breadcrumb-separator", role: "presentation", "aria-hidden": "true", className: t1, ...props, children: t2 });
    $[8] = props;
    $[9] = t1;
    $[10] = t2;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
}
const RATING_LABELS = {
  1: "Poor",
  2: "Fair",
  3: "Good",
  4: "Very Good",
  5: "Excellent"
};
function StarRatingInput(t0) {
  const $ = c(14);
  const {
    rating,
    onChange
  } = t0;
  const [hoverRating, setHoverRating] = useState(0);
  let t1;
  if ($[0] !== onChange || $[1] !== rating) {
    t1 = (star) => {
      if (rating === star) {
        onChange(star - 0.5);
      } else {
        onChange(star);
      }
    };
    $[0] = onChange;
    $[1] = rating;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const handleClick = t1;
  let t2;
  if ($[3] !== handleClick || $[4] !== hoverRating || $[5] !== rating) {
    t2 = (star_0) => {
      const current = hoverRating || rating;
      const isFull = star_0 <= current;
      const isHalf = !isFull && star_0 - 0.5 <= current;
      return /* @__PURE__ */ jsx("button", { type: "button", className: "focus:outline-none p-0.5", onClick: () => handleClick(star_0), onMouseEnter: () => setHoverRating(star_0), onMouseLeave: () => setHoverRating(0), children: isFull ? /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 fill-yellow-400 text-yellow-400" }) : isHalf ? /* @__PURE__ */ jsxs("div", { className: "relative w-6 h-6", children: [
        /* @__PURE__ */ jsx(Star, { className: "absolute inset-0 w-6 h-6 text-muted-foreground" }),
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 w-3 overflow-hidden", children: /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 fill-yellow-400 text-yellow-400" }) })
      ] }) : /* @__PURE__ */ jsx(Star, { className: "w-6 h-6 text-muted-foreground" }) }, star_0);
    };
    $[3] = handleClick;
    $[4] = hoverRating;
    $[5] = rating;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  const renderStar = t2;
  let t3;
  if ($[7] !== renderStar) {
    t3 = [1, 2, 3, 4, 5].map(renderStar);
    $[7] = renderStar;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  let t4;
  if ($[9] !== rating) {
    t4 = rating > 0 && /* @__PURE__ */ jsx("span", { className: "ml-2 text-sm text-muted-foreground", children: RATING_LABELS[Math.round(rating)] });
    $[9] = rating;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  let t5;
  if ($[11] !== t3 || $[12] !== t4) {
    t5 = /* @__PURE__ */ jsxs("div", { className: "flex gap-0.5", children: [
      t3,
      t4
    ] });
    $[11] = t3;
    $[12] = t4;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  return t5;
}
function StarDisplay(t0) {
  const $ = c(13);
  const {
    rating,
    count
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [1, 2, 3, 4, 5];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== rating) {
    t2 = t1.map((star) => /* @__PURE__ */ jsx(Star, { className: `w-4 h-4 ${star <= Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}` }, star));
    $[1] = rating;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] !== rating) {
    t3 = rating.toFixed(1);
    $[3] = rating;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== t3) {
    t4 = /* @__PURE__ */ jsx("span", { className: "ml-1 text-sm font-medium", children: t3 });
    $[5] = t3;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== count) {
    t5 = /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
      "(",
      count,
      ")"
    ] });
    $[7] = count;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t2 || $[10] !== t4 || $[11] !== t5) {
    t6 = /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1", children: [
      t2,
      t4,
      t5
    ] });
    $[9] = t2;
    $[10] = t4;
    $[11] = t5;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  return t6;
}
function RatingHistogram(t0) {
  const $ = c(4);
  const {
    distribution,
    total
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [5, 4, 3, 2, 1];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== distribution || $[2] !== total) {
    t2 = /* @__PURE__ */ jsx("div", { className: "space-y-1", children: t1.map((star) => {
      const count = distribution[star] || 0;
      const percentage = total > 0 ? count / total * 100 : 0;
      return /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 text-sm", children: [
        /* @__PURE__ */ jsx("span", { className: "w-3", children: star }),
        /* @__PURE__ */ jsx(Star, { className: "w-3 h-3 fill-yellow-400 text-yellow-400" }),
        /* @__PURE__ */ jsx("div", { className: "flex-1 h-2 bg-muted rounded-full overflow-hidden", children: /* @__PURE__ */ jsx("div", { className: "h-full bg-yellow-400 rounded-full", style: {
          width: `${percentage}%`
        } }) }),
        /* @__PURE__ */ jsx("span", { className: "w-6 text-right text-muted-foreground", children: count })
      ] }, star);
    }) });
    $[1] = distribution;
    $[2] = total;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  return t2;
}
function ReviewSection(t0) {
  const $ = c(53);
  const {
    productId
  } = t0;
  const {
    user,
    isAuthenticated
  } = useAuthStore();
  const {
    getReviews,
    getAverageRating,
    getReviewCount,
    getRatingDistribution,
    addReview
  } = useReviewStore();
  const [rating, setRating] = useState(0);
  const [comment, setComment] = useState("");
  const [image, setImage] = useState(null);
  const [isSubmitting, setIsSubmitting] = useState(false);
  let t1;
  if ($[0] !== getReviews || $[1] !== productId) {
    t1 = getReviews(productId);
    $[0] = getReviews;
    $[1] = productId;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const reviews = t1;
  let t2;
  if ($[3] !== getAverageRating || $[4] !== productId) {
    t2 = getAverageRating(productId);
    $[3] = getAverageRating;
    $[4] = productId;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  const averageRating = t2;
  let t3;
  if ($[6] !== getReviewCount || $[7] !== productId) {
    t3 = getReviewCount(productId);
    $[6] = getReviewCount;
    $[7] = productId;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  const reviewCount = t3;
  let t4;
  if ($[9] !== getRatingDistribution || $[10] !== productId) {
    t4 = getRatingDistribution(productId);
    $[9] = getRatingDistribution;
    $[10] = productId;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  const distribution = t4;
  let t5;
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = (e) => {
      const file = e.target.files?.[0];
      if (!file) {
        return;
      }
      const validTypes = ["image/jpeg", "image/webp"];
      if (!validTypes.includes(file.type)) {
        alert("Only JPG and WebP images are allowed.");
        return;
      }
      if (file.size > 4194304) {
        alert("Image must be under 4MB.");
        return;
      }
      const reader = new FileReader();
      reader.onload = () => {
        setImage(reader.result);
      };
      reader.readAsDataURL(file);
    };
    $[12] = t5;
  } else {
    t5 = $[12];
  }
  const handleImageUpload = t5;
  let t6;
  if ($[13] !== addReview || $[14] !== comment || $[15] !== image || $[16] !== productId || $[17] !== rating || $[18] !== user) {
    t6 = () => {
      if (!user || rating === 0 || !comment.trim()) {
        return;
      }
      setIsSubmitting(true);
      addReview(productId, {
        userId: user.id,
        userName: user.name,
        rating,
        comment: comment.trim(),
        image: image || void 0
      });
      setRating(0);
      setComment("");
      setImage(null);
      setIsSubmitting(false);
    };
    $[13] = addReview;
    $[14] = comment;
    $[15] = image;
    $[16] = productId;
    $[17] = rating;
    $[18] = user;
    $[19] = t6;
  } else {
    t6 = $[19];
  }
  const handleSubmit = t6;
  let t7;
  if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx("h2", { id: "reviews-heading", className: "text-2xl font-heading font-bold mb-6 flex items-center gap-3", children: "Reviews" });
    $[20] = t7;
  } else {
    t7 = $[20];
  }
  let t8;
  if ($[21] !== averageRating) {
    t8 = averageRating.toFixed(1);
    $[21] = averageRating;
    $[22] = t8;
  } else {
    t8 = $[22];
  }
  let t9;
  if ($[23] !== t8) {
    t9 = /* @__PURE__ */ jsx("div", { className: "text-4xl font-bold text-primary", children: t8 });
    $[23] = t8;
    $[24] = t9;
  } else {
    t9 = $[24];
  }
  let t10;
  if ($[25] !== averageRating || $[26] !== reviewCount) {
    t10 = /* @__PURE__ */ jsx(StarDisplay, { rating: averageRating, count: reviewCount });
    $[25] = averageRating;
    $[26] = reviewCount;
    $[27] = t10;
  } else {
    t10 = $[27];
  }
  let t11;
  if ($[28] !== distribution || $[29] !== reviewCount) {
    t11 = /* @__PURE__ */ jsx("div", { className: "mt-4", children: /* @__PURE__ */ jsx(RatingHistogram, { distribution, total: reviewCount }) });
    $[28] = distribution;
    $[29] = reviewCount;
    $[30] = t11;
  } else {
    t11 = $[30];
  }
  let t12;
  if ($[31] !== t10 || $[32] !== t11 || $[33] !== t9) {
    t12 = /* @__PURE__ */ jsxs("div", { children: [
      t9,
      t10,
      t11
    ] });
    $[31] = t10;
    $[32] = t11;
    $[33] = t9;
    $[34] = t12;
  } else {
    t12 = $[34];
  }
  let t13;
  if ($[35] !== comment || $[36] !== handleSubmit || $[37] !== image || $[38] !== isAuthenticated || $[39] !== isSubmitting || $[40] !== rating || $[41] !== user) {
    t13 = isAuthenticated && user ? /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-4", children: /* @__PURE__ */ jsxs("div", { className: "space-y-4", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Your Rating" }),
        /* @__PURE__ */ jsx(StarRatingInput, { rating, onChange: setRating })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Your Review" }),
        /* @__PURE__ */ jsx(Textarea, { placeholder: "Share your experience with this product...", value: comment, onChange: (e_0) => setComment(e_0.target.value), rows: 4 })
      ] }),
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("label", { className: "text-sm font-medium mb-2 block", children: "Add Photo (optional)" }),
        /* @__PURE__ */ jsx("input", { type: "file", accept: "image/jpeg,image/webp", onChange: handleImageUpload, className: "block w-full text-sm text-muted-foreground file:mr-4 file:py-2 file:px-4 file:rounded-md file:border-0 file:text-sm file:font-semibold file:bg-primary file:text-primary-foreground hover:file:bg-primary/90" }),
        image && /* @__PURE__ */ jsxs("div", { className: "mt-2 relative inline-block", children: [
          /* @__PURE__ */ jsx("img", { src: image, alt: "Preview", className: "w-20 h-20 object-cover rounded" }),
          /* @__PURE__ */ jsx("button", { type: "button", onClick: () => setImage(null), className: "absolute -top-2 -right-2 bg-destructive text-destructive-foreground rounded-full w-5 h-5 flex items-center justify-center text-xs", children: "×" })
        ] })
      ] }),
      /* @__PURE__ */ jsx(Button, { onClick: handleSubmit, disabled: rating === 0 || !comment.trim() || isSubmitting, children: "Submit Review" })
    ] }) }) }) : /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4 text-center text-muted-foreground", children: [
      "Please",
      " ",
      /* @__PURE__ */ jsx("a", { href: "/login", className: "text-primary hover:underline", children: "sign in" }),
      " ",
      "to leave a review."
    ] }) });
    $[35] = comment;
    $[36] = handleSubmit;
    $[37] = image;
    $[38] = isAuthenticated;
    $[39] = isSubmitting;
    $[40] = rating;
    $[41] = user;
    $[42] = t13;
  } else {
    t13 = $[42];
  }
  let t14;
  if ($[43] !== t12 || $[44] !== t13) {
    t14 = /* @__PURE__ */ jsxs("div", { className: "grid md:grid-cols-[200px_1fr] gap-8 mb-8", children: [
      t12,
      t13
    ] });
    $[43] = t12;
    $[44] = t13;
    $[45] = t14;
  } else {
    t14 = $[45];
  }
  let t15;
  if ($[46] !== reviews) {
    t15 = reviews.length === 0 ? /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-center py-8", children: "No reviews yet. Be the first to review this product!" }) : reviews.sort(_temp$1).map(_temp2$1);
    $[46] = reviews;
    $[47] = t15;
  } else {
    t15 = $[47];
  }
  let t16;
  if ($[48] !== t15) {
    t16 = /* @__PURE__ */ jsx("div", { className: "space-y-4", children: t15 });
    $[48] = t15;
    $[49] = t16;
  } else {
    t16 = $[49];
  }
  let t17;
  if ($[50] !== t14 || $[51] !== t16) {
    t17 = /* @__PURE__ */ jsxs("section", { "aria-labelledby": "reviews-heading", className: "mt-16", children: [
      t7,
      t14,
      t16
    ] });
    $[50] = t14;
    $[51] = t16;
    $[52] = t17;
  } else {
    t17 = $[52];
  }
  return t17;
}
function _temp2$1(review) {
  return /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsxs(CardContent, { className: "p-4", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between mb-2", children: [
      /* @__PURE__ */ jsxs("div", { children: [
        /* @__PURE__ */ jsx("span", { className: "font-medium", children: review.userName }),
        /* @__PURE__ */ jsx(StarDisplay, { rating: review.rating, count: 0 })
      ] }),
      /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: new Date(review.date).toLocaleDateString() })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: review.comment }),
    review.image && /* @__PURE__ */ jsx("img", { src: review.image, alt: "Review", className: "mt-3 w-24 h-24 object-cover rounded" })
  ] }) }, review.id);
}
function _temp$1(a, b) {
  return new Date(b.date).getTime() - new Date(a.date).getTime();
}
const certificateIcons = {
  "Eco Certified": Recycle,
  "Natural Origin": LeafIcon,
  Vegan: HeartHandshake,
  "Cruelty-Free": Shield,
  "ISO Certified": Award
};
function SkipLink() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("a", { href: "#product-main-content", className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary", children: "Skip to main content" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function SimilarProductCard(t0) {
  const $ = c(18);
  const {
    product
  } = t0;
  if (!product) {
    return null;
  }
  let t1;
  if ($[0] !== product.id) {
    t1 = {
      productId: product.id
    };
    $[0] = product.id;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const t2 = `${product.name} fragrance`;
  let t3;
  if ($[2] !== product.image || $[3] !== t2) {
    t3 = /* @__PURE__ */ jsx("div", { className: "aspect-square overflow-hidden bg-muted", children: /* @__PURE__ */ jsx("img", { src: product.image, alt: t2, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" }) });
    $[2] = product.image;
    $[3] = t2;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== product.name) {
    t4 = /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-sm mb-1", children: product.name });
    $[5] = product.name;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== product.price) {
    t5 = /* @__PURE__ */ jsxs("p", { className: "text-primary font-bold text-lg", children: [
      "€",
      product.price
    ] });
    $[7] = product.price;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t4 || $[10] !== t5) {
    t6 = /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      t4,
      t5
    ] });
    $[9] = t4;
    $[10] = t5;
    $[11] = t6;
  } else {
    t6 = $[11];
  }
  let t7;
  if ($[12] !== t3 || $[13] !== t6) {
    t7 = /* @__PURE__ */ jsxs("article", { className: "border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2", children: [
      t3,
      t6
    ] });
    $[12] = t3;
    $[13] = t6;
    $[14] = t7;
  } else {
    t7 = $[14];
  }
  let t8;
  if ($[15] !== t1 || $[16] !== t7) {
    t8 = /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: t1, className: "group block", children: t7 });
    $[15] = t1;
    $[16] = t7;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  return t8;
}
function LiveRegion(t0) {
  const $ = c(5);
  const {
    message
  } = t0;
  const [announce, setAnnounce] = useState("");
  let t1;
  let t2;
  if ($[0] !== message) {
    t1 = () => {
      if (message) {
        setAnnounce(message);
        const timer = setTimeout(() => setAnnounce(""), ANIMATION_PAUSE_DELAY);
        return () => clearTimeout(timer);
      }
    };
    t2 = [message];
    $[0] = message;
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  useEffect(t1, t2);
  let t3;
  if ($[3] !== announce) {
    t3 = /* @__PURE__ */ jsx("div", { role: "status", "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: announce });
    $[3] = announce;
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  return t3;
}
function LongDescription(t0) {
  const $ = c(3);
  const {
    text
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = {
      h2: _temp,
      p: _temp2,
      strong: _temp3
    };
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== text) {
    t2 = /* @__PURE__ */ jsx("div", { className: "text-muted-foreground leading-relaxed", children: /* @__PURE__ */ jsx(ReactMarkdown, { components: t1, children: text }) });
    $[1] = text;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}
function _temp3(t0) {
  const {
    children: children_1
  } = t0;
  return /* @__PURE__ */ jsx("strong", { className: "font-semibold", children: children_1 });
}
function _temp2(t0) {
  const {
    children: children_0
  } = t0;
  return /* @__PURE__ */ jsx("p", { className: "mb-3", children: children_0 });
}
function _temp(t0) {
  const {
    children
  } = t0;
  return /* @__PURE__ */ jsx("h2", { className: "text-lg font-heading font-semibold mt-6 mb-3", children });
}
function ProductDetailPage() {
  const {
    productId
  } = useParams({
    from: "/product/$productId"
  });
  const [quantity, setQuantity] = useState(1);
  const [selectedSizeId, setSelectedSizeId] = useState("");
  const [selectedScentId, setSelectedScentId] = useState("");
  const [notification, setNotification] = useState("");
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInCompare, setIsInCompare] = useState(false);
  const addItemToCart = useCartStore((state) => state.addItem);
  const addToWishlist = useWishlistStore((state_0) => state_0.addItem);
  const removeFromWishlist = useWishlistStore((state_1) => state_1.removeItem);
  const isInWishlistStore = useWishlistStore((state_2) => state_2.isInWishlist);
  const addToCompare = useCompareStore((state_3) => state_3.addItem);
  const removeFromCompare = useCompareStore((state_4) => state_4.removeItem);
  const isInCompareStore = useCompareStore((state_5) => state_5.isInCompare);
  const items = useCompareStore((state_6) => state_6.items);
  const {
    currentTier,
    applyDiscount,
    getDiscount
  } = useSubscriptionStore();
  const getAverageRating = useReviewStore((state_7) => state_7.getAverageRating);
  const getReviewCount = useReviewStore((state_8) => state_8.getReviewCount);
  const {
    data: product,
    loading: loadingProduct,
    error: errorProduct,
    refetch: refetchProduct
  } = useAsyncDataWithRetry({
    fetchFn: () => getProductById(productId),
    deps: [productId]
  });
  const {
    data: similarProducts,
    loading: loadingSimilar,
    error: errorSimilar,
    refetch: refetchSimilar
  } = useAsyncDataWithRetry({
    fetchFn: () => getSimilarProducts(productId, 4),
    deps: [productId]
  });
  const relatedSizes = useMemo(() => getRelatedSizes(productId), [productId]);
  const allScents = useMemo(() => getAllBaseProducts(), []);
  useEffect(() => {
    if (product && !selectedSizeId) {
      setSelectedSizeId(product.sizeId);
    }
  }, [product, selectedSizeId]);
  useEffect(() => {
    if (product && !selectedScentId) {
      setSelectedScentId(product.baseProductId || product.id);
    }
  }, [product, selectedScentId]);
  const currentProduct = useMemo(() => {
    if (!product) return null;
    if (selectedScentId && selectedSizeId) {
      return allScents.find((p) => (p.baseProductId === selectedScentId || p.id === selectedScentId) && p.sizeId === selectedSizeId) || product;
    }
    return product;
  }, [product, allScents, selectedScentId, selectedSizeId]);
  const navigate = useNavigate();
  const currentBaseProductId = product?.baseProductId || product?.id;
  useEffect(() => {
    if (selectedScentId && currentBaseProductId && selectedScentId !== currentBaseProductId) {
      const firstSize = relatedSizes[0]?.sizeId;
      if (firstSize) {
        const matchingProduct = allScents.find((p_0) => (p_0.baseProductId === selectedScentId || p_0.id === selectedScentId) && p_0.sizeId === firstSize);
        if (matchingProduct && matchingProduct.id !== productId) {
          navigate({
            to: "/product/$productId",
            params: {
              productId: matchingProduct.id
            }
          });
        }
      }
    }
  }, [selectedScentId, currentBaseProductId, allScents, relatedSizes, productId, navigate]);
  const rating = product ? getAverageRating(productId) : 0;
  const reviewCount = product ? getReviewCount(productId) : 0;
  const hasDiscount = currentTier !== "free";
  const discountedPrice = applyDiscount(product?.price || 0);
  const discountPercentage = getDiscount();
  useEffect(() => {
    if (product) {
      setIsInWishlist(isInWishlistStore(productId));
      setIsInCompare(isInCompareStore(productId));
    }
  }, [productId, isInWishlistStore, isInCompareStore]);
  const handleAddToCart = () => {
    if (currentProduct) {
      addItemToCart(currentProduct.id, quantity);
      toast.success(`${currentProduct.name} added to cart. ${quantity} item(s) - €${currentProduct.price * quantity}`);
    }
  };
  const handleBuyNow = () => {
    if (currentProduct) {
      addItemToCart(currentProduct.id, quantity);
      window.location.href = "/cart";
    }
  };
  const handleQuantityChange = (newQty) => {
    const maxAllowed = Math.min(MAX_QUANTITY, currentProduct?.stock || 0);
    if (newQty >= 1 && newQty <= maxAllowed) {
      setQuantity(newQty);
    }
  };
  useRef(null);
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: currentProduct?.name,
          text: `Check out ${currentProduct?.name} - ${currentProduct?.description}`,
          url
        });
      } catch {
      }
    } else {
      await navigator.clipboard.writeText(url);
      toast.success("Link copied to clipboard");
    }
  };
  const handleWishlistToggle = () => {
    if (product) {
      const newState = !isInWishlist;
      setIsInWishlist(newState);
      if (newState) {
        addToWishlist(productId);
        toast.success(`${product.name} added to wishlist`);
      } else {
        removeFromWishlist(productId);
        toast.success(`${product.name} removed from wishlist`);
      }
    }
  };
  const handleCompareToggle = () => {
    if (product) {
      const newState_0 = !isInCompare;
      setIsInCompare(newState_0);
      if (newState_0) {
        if (items.length >= MAX_COMPARE_ITEMS) {
          toast.error(`Maximum ${MAX_COMPARE_ITEMS} products can be compared. Remove one first.`);
        } else {
          addToCompare(productId);
          toast.success(`${product.name} added to compare`);
        }
      } else {
        removeFromCompare(productId);
        toast.success(`${product.name} removed from compare`);
      }
    }
  };
  useEffect(() => {
    if (product) {
      setIsInWishlist(isInWishlistStore(productId));
      setIsInCompare(isInCompareStore(productId));
    }
  }, [productId, isInWishlistStore, isInCompareStore, items]);
  if (loadingProduct || loadingSimilar) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(SkipLink, {}),
      /* @__PURE__ */ jsx("main", { className: "pt-24 min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16", children: /* @__PURE__ */ jsx(SectionWrapper, { loading: true, loadingType: "card", children: /* @__PURE__ */ jsx("div", {}) }) }) })
    ] });
  }
  if (errorProduct) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(SkipLink, {}),
      /* @__PURE__ */ jsx("main", { className: "pt-24 min-h-screen flex items-center justify-center", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16", children: /* @__PURE__ */ jsx(SectionWrapper, { loading: false, error: errorProduct, onRetry: refetchProduct, loadingType: "card", children: /* @__PURE__ */ jsx("div", {}) }) }) })
    ] });
  }
  if (!product) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(SkipLink, {}),
      /* @__PURE__ */ jsx("main", { className: "pt-24 min-h-screen flex items-center justify-center", id: "product-main-content", children: /* @__PURE__ */ jsxs(Card, { className: "max-w-md mx-auto text-center p-6", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "Product Not Found" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/products", children: [
          /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 w-4 h-4", "aria-hidden": "true" }),
          "Back to Products"
        ] }) }) })
      ] }) }),
      /* @__PURE__ */ jsx(LiveRegion, { message: notification })
    ] });
  }
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SkipLink, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-24", id: "product-main-content", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16", children: [
      /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsx("nav", { "aria-label": "Breadcrumb navigation", className: "mb-6 lg:mb-8", children: /* @__PURE__ */ jsx(Breadcrumb, { children: /* @__PURE__ */ jsxs(BreadcrumbList, { children: [
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Home, { className: "w-4 h-4", "aria-hidden": "true" }),
          /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Home" })
        ] }) }) }),
        /* @__PURE__ */ jsx(BreadcrumbSeparator, { "aria-hidden": "true" }),
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/products", children: "Products" }) }) }),
        /* @__PURE__ */ jsx(BreadcrumbSeparator, { "aria-hidden": "true" }),
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { className: "font-medium", children: currentProduct?.name }) })
      ] }) }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12", children: [
        /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("section", { "aria-labelledby": "product-image-heading", className: "relative", children: [
          /* @__PURE__ */ jsxs("h2", { id: "product-image-heading", className: "sr-only", children: [
            currentProduct?.name,
            " image gallery"
          ] }),
          /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl", "aria-hidden": "true" }),
          /* @__PURE__ */ jsxs(Carousel, { className: "relative", opts: {
            loop: true
          }, children: [
            /* @__PURE__ */ jsxs(CarouselContent, { children: [
              /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-square rounded-2xl overflow-hidden bg-secondary/30", children: [
                /* @__PURE__ */ jsx("img", { src: currentProduct?.image, alt: `${currentProduct?.name} - Front view`, className: "w-full h-full object-cover" }),
                /* @__PURE__ */ jsx(Badge, { className: "absolute top-4 left-4", variant: "default", children: currentProduct?.badge })
              ] }) }),
              currentBaseProductId === "tropical-sun" && /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx("div", { className: "relative aspect-square rounded-2xl overflow-hidden bg-secondary/30", children: /* @__PURE__ */ jsx("img", { src: "/product_poster_tropical_sun_small.png", alt: `${currentProduct?.name} - Poster`, className: "w-full h-full object-contain" }) }) }),
              currentBaseProductId === "rose-petal" && /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx("div", { className: "relative aspect-square rounded-2xl overflow-hidden bg-secondary/30", children: /* @__PURE__ */ jsx("img", { src: "/product_poster_rose_petal.png", alt: `${currentProduct?.name} - Poster`, className: "w-full h-full object-contain" }) }) })
            ] }),
            /* @__PURE__ */ jsx(CarouselPrevious, { className: "left-4" }),
            /* @__PURE__ */ jsx(CarouselNext, { className: "right-4" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_MEDIUM, inView: true, children: /* @__PURE__ */ jsxs("section", { "aria-labelledby": "product-info-heading", children: [
          /* @__PURE__ */ jsx("h2", { id: "product-info-heading", className: "sr-only", children: "Product information" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx(Leaf, { className: "w-4 h-4 text-primary", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground uppercase tracking-wider", children: [
              currentProduct?.category,
              " · ",
              currentProduct?.size || product.size
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4", children: currentProduct?.name }),
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: hasDiscount ? /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-2xl sm:text-3xl font-heading font-bold text-primary", children: [
              "€",
              discountedPrice.toFixed(2)
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-lg text-muted-foreground line-through", children: [
              "€",
              currentProduct?.price
            ] }),
            /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
              discountPercentage,
              "% off"
            ] })
          ] }) : /* @__PURE__ */ jsxs("span", { className: "text-2xl sm:text-3xl font-heading font-bold text-primary", children: [
            "€",
            currentProduct?.price || product.price
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: currentProduct?.description || product.description }),
          allScents.length > 1 && /* @__PURE__ */ jsxs("div", { className: "mb-4", children: [
            /* @__PURE__ */ jsx("label", { htmlFor: "scent-select", className: "text-sm text-muted-foreground mb-2 block", children: "Scent:" }),
            /* @__PURE__ */ jsx("select", { id: "scent-select", value: selectedScentId || "", onChange: (e) => setSelectedScentId(e.target.value), className: "w-full p-2 rounded-lg border border-input bg-background", children: allScents.filter((p_1, i, arr) => arr.findIndex((x) => x.baseProductId === p_1.baseProductId || x.id === p_1.baseProductId) === i).map((scent) => /* @__PURE__ */ jsx("option", { value: scent.baseProductId || scent.id, children: scent.name }, scent.baseProductId || scent.id)) })
          ] }),
          relatedSizes.length > 1 && /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground mb-2 block", children: "Bottle Size:" }),
            /* @__PURE__ */ jsx("div", { className: "flex gap-2", role: "group", "aria-label": "Bottle size selector", children: relatedSizes.map((size) => /* @__PURE__ */ jsxs(Button, { variant: selectedSizeId === size.sizeId ? "default" : "outline", size: "sm", onClick: () => setSelectedSizeId(size.sizeId), className: "flex-1", children: [
              size.size,
              /* @__PURE__ */ jsxs("span", { className: "block text-xs opacity-70", children: [
                "€",
                size.price
              ] })
            ] }, size.sizeId)) })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Quantity:" }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
                "limit: ",
                Math.min(MAX_QUANTITY, currentProduct?.stock || product?.stock)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", role: "group", "aria-label": "Quantity selector", children: [
                /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", onClick: () => handleQuantityChange(quantity - 1), disabled: quantity <= 1, "aria-label": "Decrease quantity", className: "w-10 h-10", children: "−" }),
                /* @__PURE__ */ jsx("input", { type: "text", inputMode: "numeric", pattern: "[1-9][0-9]*", value: quantity, onChange: (e_0) => {
                  const val = parseInt(e_0.target.value);
                  if (!isNaN(val) && val >= 1) {
                    handleQuantityChange(Math.min(val, MAX_QUANTITY));
                  } else if (e_0.target.value === "") {
                    handleQuantityChange(1);
                  }
                }, className: "w-16 h-10 flex items-center justify-center text-lg font-medium text-center border-y border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary" }),
                /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", onClick: () => handleQuantityChange(quantity + 1), disabled: quantity >= Math.min(MAX_QUANTITY, currentProduct?.stock || product?.stock), "aria-label": "Increase quantity", className: "w-10 h-10", children: "+" })
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
                "(",
                currentProduct?.stock || product?.stock,
                " available in stock)"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 mb-4", children: [
              /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1", children: [1, 2, 3, 4, 5].map((star) => /* @__PURE__ */ jsx(Star, { className: `w-4 h-4 ${star <= Math.round(rating) ? "fill-yellow-400 text-yellow-400" : "text-muted-foreground"}` }, star)) }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: rating > 0 ? rating.toFixed(1) : "No" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: rating > 0 ? `(${reviewCount} reviews)` : "reviews yet" }),
              /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "gap-2", onClick: () => document.getElementById("reviews-heading")?.scrollIntoView({
                behavior: "smooth"
              }), children: [
                /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
                reviewCount > 0 ? "Read Reviews" : "Write a Review"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "mb-3", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-2xl font-heading font-bold text-primary", children: [
                "€",
                ((currentProduct?.price || product?.price) * quantity).toFixed(2)
              ] }),
              quantity > 1 && /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground ml-2", children: [
                "(€",
                (currentProduct?.price || product?.price).toFixed(2),
                " each)"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-row gap-2", children: [
              /* @__PURE__ */ jsxs(Button, { size: "lg", className: "flex-1 sm:h-10 h-12 group", onClick: handleAddToCart, children: [
                /* @__PURE__ */ jsx(ShoppingBag, { className: "mr-2 w-5 h-5", "aria-hidden": "true" }),
                "Add to Cart"
              ] }),
              /* @__PURE__ */ jsx(Button, { size: "lg", variant: "secondary", className: "flex-1 sm:h-10 h-12 group", onClick: handleBuyNow, children: "Buy Now" })
            ] })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mb-6", role: "group", "aria-label": "Product actions", children: [
            /* @__PURE__ */ jsxs(Tooltip, { children: [
              /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: isInWishlist ? "default" : "outline", size: "sm", className: `gap-2 transition-all ${isInWishlist ? "font-bold border-primary bg-primary text-primary-foreground" : ""}`, onClick: handleWishlistToggle, "aria-pressed": isInWishlist, children: [
                /* @__PURE__ */ jsx(Heart, { className: `w-4 h-4 ${isInWishlist ? "fill-primary-foreground" : "text-destructive"}`, "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { className: "hidden sm:inline font-semibold", children: isInWishlist ? "Saved" : "Save" })
              ] }) }),
              /* @__PURE__ */ jsx(TooltipContent, { children: isInWishlist ? "Remove from wishlist" : "Save to wishlist" })
            ] }),
            /* @__PURE__ */ jsxs(Tooltip, { children: [
              /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: isInCompare ? "default" : "outline", size: "sm", className: `gap-2 transition-all ${isInCompare ? "font-bold border-primary bg-primary text-primary-foreground" : ""}`, onClick: handleCompareToggle, "aria-pressed": isInCompare, children: [
                /* @__PURE__ */ jsx(GitCompare, { className: `w-4 h-4 ${isInCompare ? "fill-primary-foreground" : "text-primary"}`, "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { className: "hidden sm:inline font-semibold", children: isInCompare ? "In Comparison" : "Compare" })
              ] }) }),
              /* @__PURE__ */ jsx(TooltipContent, { children: isInCompare ? "Remove from compare" : "Add to compare" })
            ] }),
            /* @__PURE__ */ jsxs(Tooltip, { children: [
              /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "gap-2", onClick: handleShare, children: [
                /* @__PURE__ */ jsx(Share2, { className: "w-4 h-4", "aria-hidden": "true" }),
                /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Share" })
              ] }) }),
              /* @__PURE__ */ jsx(TooltipContent, { children: "Share this product" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(Separator, { className: "my-6" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-sm", children: [
            /* @__PURE__ */ jsxs("a", { href: "#product-details", className: "text-primary hover:underline flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Package, { className: "w-4 h-4" }),
              "Product Details"
            ] }),
            /* @__PURE__ */ jsxs("a", { href: "#certificates", className: "text-primary hover:underline flex items-center gap-1", children: [
              /* @__PURE__ */ jsx(Award, { className: "w-4 h-4" }),
              "Certifications"
            ] })
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_LONG, inView: true, children: /* @__PURE__ */ jsxs("section", { id: "certificates", "aria-labelledby": "certificates-heading", className: "mt-16", children: [
        /* @__PURE__ */ jsxs("h2", { id: "certificates-heading", className: "text-2xl font-heading font-bold mb-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }),
          "Certificates & Certifications"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4", children: currentProduct?.certificates.map((cert) => {
          const IconComponent = certificateIcons[cert] || Award;
          return /* @__PURE__ */ jsx(Card, { className: "text-center p-4 bg-muted/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: cert })
          ] }) }, cert);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_EXTRA_LONG, inView: true, children: /* @__PURE__ */ jsxs("section", { "aria-labelledby": "about-heading", className: "mt-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-sm mb-4", children: [
          /* @__PURE__ */ jsxs("a", { href: "#product-details", className: "text-primary hover:underline flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Package, { className: "w-4 h-4" }),
            "Product Details"
          ] }),
          /* @__PURE__ */ jsxs("a", { href: "#certificates", className: "text-primary hover:underline flex items-center gap-1", children: [
            /* @__PURE__ */ jsx(Award, { className: "w-4 h-4" }),
            "Certifications"
          ] })
        ] }),
        /* @__PURE__ */ jsx("h2", { id: "about-heading", className: "text-2xl font-heading font-bold mb-6", children: "About This Fragrance" }),
        /* @__PURE__ */ jsx(LongDescription, { text: currentProduct?.longDescription })
      ] }) }),
      /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_EXTRA_LONG_2, inView: true, children: /* @__PURE__ */ jsxs("section", { id: "product-details", "aria-labelledby": "details-heading", className: "mt-16", children: [
        /* @__PURE__ */ jsx("h2", { id: "details-heading", className: "text-2xl font-heading font-bold mb-6", children: "Product Details" }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-6", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Scent Profile" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-xs text-muted-foreground uppercase mb-2", children: "Top Notes" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: currentProduct?.notes.top })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-xs text-muted-foreground uppercase mb-2", children: "Heart Notes" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: currentProduct?.notes.heart })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-xs text-muted-foreground uppercase mb-2", children: "Base Notes" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: currentProduct?.notes.base })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsx("table", { className: "w-full", children: /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 w-48 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Package, { className: "w-4 h-4 text-primary" }),
              "Bottle Size"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground", children: currentProduct?.size })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Droplets, { className: "w-4 h-4 text-primary" }),
              "Net Quantity"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground", children: currentProduct?.size })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(LeafIcon, { className: "w-4 h-4 text-primary" }),
              "Country of Origin"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground", children: "Greece" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Award, { className: "w-4 h-4 text-primary" }),
              "Producer"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground", children: "Blossom, Athens, Greece" })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-primary" }),
              "Batch Number"
            ] }),
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 text-muted-foreground font-mono text-sm", children: [
              "BATCH-",
              currentProduct?.id.toUpperCase()
            ] })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-primary" }),
              "Last 30 Days Price"
            ] }),
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 text-muted-foreground", children: [
              "€",
              currentProduct?.price,
              " (Current)"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Droplets, { className: "w-4 h-4 text-primary" }),
              "How to Use"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground", children: currentProduct?.howToUse })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Package, { className: "w-4 h-4 text-primary" }),
              "Ingredients"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground font-mono text-sm", children: currentProduct?.ingredients })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-primary" }),
              "Storage"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground", children: currentProduct?.storage })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-primary" }),
              "Lifespan"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground", children: currentProduct?.lifespan })
          ] }),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-primary" }),
              "Precautions"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground text-sm", children: "For external use only. Avoid contact with eyes. Store in a cool, dry place away from direct sunlight. Keep out of reach of children." })
          ] })
        ] }) }) }) })
      ] }) }),
      /* @__PURE__ */ jsx(FAQ, {}),
      /* @__PURE__ */ jsx(SectionWrapper, { loading: loadingSimilar, error: errorSimilar, onRetry: refetchSimilar, children: similarProducts && similarProducts.length > 0 && /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_MAX, inView: true, children: /* @__PURE__ */ jsxs("section", { "aria-labelledby": "similar-heading", className: "mt-16", children: [
        /* @__PURE__ */ jsxs("h2", { id: "similar-heading", className: "text-2xl font-heading font-bold mb-6 flex items-center gap-3", children: [
          /* @__PURE__ */ jsx(Package, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }),
          "Similar Products"
        ] }),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6", children: similarProducts.map((p_2) => /* @__PURE__ */ jsx(SimilarProductCard, { product: p_2 }, p_2.id)) })
      ] }) }) }),
      /* @__PURE__ */ jsx(ReviewSection, { productId })
    ] }) }),
    /* @__PURE__ */ jsx(LiveRegion, { message: notification })
  ] });
}
const SplitComponent = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(ProductDetailPage, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  SplitComponent as component
};

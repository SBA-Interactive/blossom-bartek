import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { y as cn, h as BlurFade, J as AnimatedGradientText, f as Button, l as Separator, C as Card, m as CardHeader, n as CardTitle, o as CardContent, p as CardDescription, u as useWishlistStore, D as useCompareStore, B as Badge, j as TooltipContent, T as TooltipTrigger, k as Tooltip, K as CardAction, G as CardFooter, z as products$1 } from "./router-B2FLevz_.js";
import { useRef, useEffect } from "react";
import { N as NumberTicker, A as AboutPage } from "./About-BphEfQ43.js";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Leaf, Recycle, Sparkles, Heart, Scale, ShoppingBag, Flower2 } from "lucide-react";
import { b as BLUR_FADE_DELAY_LONG, B as BLUR_FADE_DELAY_MEDIUM, e as BLUR_FADE_DELAY_EXTRA_LONG, f as BLUR_FADE_DELAY_MAX, d as ANIMATED_LIST_STAGGER, a as BLUR_FADE_DELAY_SHORT, A as ANIMATED_LIST_DELAY, g as BLUR_FADE_DELAY_EXTRA_LONG_2 } from "./animation-DXk-6j-p.js";
import { A as AnimatedList } from "./animated-list-CA55RPGY.js";
import { B as BorderBeam } from "./border-beam-CfEkWg5V.js";
import { S as SectionWrapper } from "./section-wrapper-DwWpGa6g.js";
import { u as useAsyncDataWithRetry } from "./use-async-data-CEBcoOhM.js";
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
import "./Pricing-B4jeHnd9.js";
const morphTime = 1.5;
const cooldownTime = 0.5;
const useMorphingText = (texts) => {
  const $ = c(10);
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ new Date();
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const timeRef = useRef(t0);
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  let t1;
  if ($[1] !== texts) {
    t1 = (fraction) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2) {
        return;
      }
      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(8 / invertedFraction - 8, 100)}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;
      current1.textContent = texts[textIndexRef.current % texts.length];
      current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
    };
    $[1] = texts;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const setStyles = t1;
  let t2;
  if ($[3] !== setStyles) {
    t2 = () => {
      morphRef.current = morphRef.current - cooldownRef.current;
      cooldownRef.current = 0;
      let fraction_0 = morphRef.current / morphTime;
      if (fraction_0 > 1) {
        cooldownRef.current = cooldownTime;
        fraction_0 = 1;
      }
      setStyles(fraction_0);
      if (fraction_0 === 1) {
        textIndexRef.current = textIndexRef.current + 1;
      }
    };
    $[3] = setStyles;
    $[4] = t2;
  } else {
    t2 = $[4];
  }
  const doMorph = t2;
  let t3;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => {
      morphRef.current = 0;
      const [current1_0, current2_0] = [text1Ref.current, text2Ref.current];
      if (current1_0 && current2_0) {
        current2_0.style.filter = "none";
        current2_0.style.opacity = "100%";
        current1_0.style.filter = "none";
        current1_0.style.opacity = "0%";
      }
    };
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  const doCooldown = t3;
  let t4;
  let t5;
  if ($[6] !== doMorph) {
    t4 = () => {
      let animationFrameId;
      const animate = () => {
        animationFrameId = requestAnimationFrame(animate);
        const newTime = /* @__PURE__ */ new Date();
        const dt = (newTime.getTime() - timeRef.current.getTime()) / 1e3;
        timeRef.current = newTime;
        cooldownRef.current = cooldownRef.current - dt;
        if (cooldownRef.current <= 0) {
          doMorph();
        } else {
          doCooldown();
        }
      };
      animate();
      return () => {
        cancelAnimationFrame(animationFrameId);
      };
    };
    t5 = [doMorph, doCooldown];
    $[6] = doMorph;
    $[7] = t4;
    $[8] = t5;
  } else {
    t4 = $[7];
    t5 = $[8];
  }
  useEffect(t4, t5);
  let t6;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = {
      text1Ref,
      text2Ref
    };
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  return t6;
};
const Texts = (t0) => {
  const $ = c(7);
  const {
    texts
  } = t0;
  const {
    text1Ref,
    text2Ref
  } = useMorphingText(texts);
  let t1;
  if ($[0] !== text1Ref) {
    t1 = /* @__PURE__ */ jsx("span", { className: "absolute inset-x-0 top-0 m-auto inline-block w-full", ref: text1Ref });
    $[0] = text1Ref;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== text2Ref) {
    t2 = /* @__PURE__ */ jsx("span", { className: "absolute inset-x-0 top-0 m-auto inline-block w-full", ref: text2Ref });
    $[2] = text2Ref;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t1 || $[5] !== t2) {
    t3 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t1,
      t2
    ] });
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  return t3;
};
const SvgFilters = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("svg", { id: "filters", className: "fixed h-0 w-0", preserveAspectRatio: "xMidYMid slice", children: /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("filter", { id: "threshold", children: /* @__PURE__ */ jsx("feColorMatrix", { in: "SourceGraphic", type: "matrix", values: "1 0 0 0 0\n                  0 1 0 0 0\n                  0 0 1 0 0\n                  0 0 0 255 -140" }) }) }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
const MorphingText = (t0) => {
  const $ = c(8);
  const {
    texts,
    className
  } = t0;
  let t1;
  if ($[0] !== className) {
    t1 = cn("relative mx-auto h-16 w-full max-w-3xl text-center font-sans text-[40pt] leading-none font-bold filter-[url(#threshold)_blur(0.6px)] md:h-24 lg:text-[6rem]", className);
    $[0] = className;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== texts) {
    t2 = /* @__PURE__ */ jsx(Texts, { texts });
    $[2] = texts;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(SvgFilters, {});
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== t1 || $[6] !== t2) {
    t4 = /* @__PURE__ */ jsxs("div", { className: t1, children: [
      t2,
      t3
    ] });
    $[5] = t1;
    $[6] = t2;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  return t4;
};
function Hero() {
  const $ = c(12);
  let t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("video", { "aria-hidden": true, muted: true, loop: true, playsInline: true, autoPlay: true, preload: "none", poster: "/poster.png", className: "z-10 absolute inset-0 w-full h-full object-cover grayscale sepia-125", children: /* @__PURE__ */ jsx("source", { src: "/hero.webm", type: "video/mp4" }) });
    t1 = /* @__PURE__ */ jsx("div", { "aria-hidden": true, className: "absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10" });
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_LONG, children: /* @__PURE__ */ jsxs("figure", { className: "relative flex justify-center lg:justify-end mt-0 order-first lg:order-last", children: [
      /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-md lg:max-w-lg aspect-[3/4] mt-0", children: /* @__PURE__ */ jsx("img", { src: "/main_page_perfume.png", alt: "Blossom natural perfume bottle with fruit peel ingredients", loading: "eager", fetchPriority: "high", className: "relative z-10 w-full h-full object-contain rounded-2xl border-0 scale-50" }) }),
      /* @__PURE__ */ jsx("figcaption", { className: "sr-only", children: "Blossom eco-friendly perfume made from natural fruit peels" })
    ] }) });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_MEDIUM, children: /* @__PURE__ */ jsxs("h1", { className: "text-hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight", children: [
      /* @__PURE__ */ jsxs("span", { className: "text-shadow text-shadow-zinc-950 text-shadow-2xl", children: [
        "Fresh Scents from",
        " "
      ] }),
      /* @__PURE__ */ jsx(AnimatedGradientText, { colorFrom: "#fbbf24", colorTo: "#f97316", children: "Nature's Gift" })
    ] }) });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_LONG, children: /* @__PURE__ */ jsx("p", { className: "text-hero-text/70 text-base sm:text-lg max-w-lg leading-relaxed", children: "Discover our collection of natural, eco-friendly perfumes crafted from upcycled fruit peels. Fresh, modern scents that are safe for everyday use." }) });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx(Button, { size: "lg", className: "group bg-brand-rose text-white hover:bg-brand-rose/80 active:bg-brand-rose/70 text-base px-8 py-6 h-auto font-semibold transition-all duration-200", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/products", children: [
      "Shop Now",
      /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform", "aria-hidden": "true" })
    ] }) });
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_EXTRA_LONG, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap gap-4", children: [
      t5,
      /* @__PURE__ */ jsx(Button, { size: "lg", variant: "ghost", className: "border border-white/40 hover:bg-white/20 active:bg-white/25 text-base px-8 py-6 h-auto text-white transition-all duration-200", asChild: true, children: /* @__PURE__ */ jsx(Link, { to: "/about", children: "Learn More" }) })
    ] }) });
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  let t7;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center sm:items-start text-center sm:text-left", children: [
      /* @__PURE__ */ jsxs("dt", { className: "text-3xl sm:text-4xl font-heading font-black", children: [
        /* @__PURE__ */ jsx("span", { className: "text-white", children: /* @__PURE__ */ jsx(NumberTicker, { value: 10 }) }),
        /* @__PURE__ */ jsx("span", { className: "ml-px bg-linear-to-b from-lime-200 to-lime-500 bg-clip-text text-transparent", children: "+" })
      ] }),
      /* @__PURE__ */ jsx("dd", { className: "text-sm sm:text-sm text-white/70 mt-1", children: "Safe Age" })
    ] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center sm:items-start text-center sm:text-left", children: [
      /* @__PURE__ */ jsxs("dt", { className: "text-3xl sm:text-4xl font-heading font-black", children: [
        /* @__PURE__ */ jsx("span", { className: "text-white", children: /* @__PURE__ */ jsx(NumberTicker, { value: 100 }) }),
        /* @__PURE__ */ jsx("span", { className: "ml-px bg-linear-to-b from-lime-200 to-lime-500 bg-clip-text text-transparent", children: "%" })
      ] }),
      /* @__PURE__ */ jsx("dd", { className: "text-sm sm:text-sm text-white/70 mt-1", children: "Natural" })
    ] });
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  let t10;
  let t9;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsxs("dl", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full", children: [
      t7,
      t8,
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center sm:items-start text-center sm:text-left", children: [
        /* @__PURE__ */ jsx("dt", { className: "text-3xl sm:text-4xl font-heading font-black bg-linear-to-b from-lime-200 to-lime-500 bg-clip-text text-transparent", children: "Eco" }),
        /* @__PURE__ */ jsx("dd", { className: "text-sm sm:text-sm text-white/70 mt-1", children: "Friendly" })
      ] })
    ] });
    t10 = /* @__PURE__ */ jsx(Separator, { orientation: "horizontal", className: "mb-0 w-20 h-px bg-white/20" });
    $[9] = t10;
    $[10] = t9;
  } else {
    t10 = $[9];
    t9 = $[10];
  }
  let t11;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsxs("section", { "aria-label": "Welcome to Blossom", className: "relative min-h-[90vh] flex items-center overflow-hidden bg-hero-bg text-hero-text pb-12", children: [
      t0,
      t1,
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-2 lg:pt-24", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-0 lg:gap-16 items-center -mt-8 lg:mt-0", children: [
        t2,
        /* @__PURE__ */ jsxs("div", { className: "space-y-2 -mt-18 order-last lg:order-first", children: [
          t3,
          t4,
          t6,
          /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_MAX, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start justify-center w-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full bg-black/25 rounded-2xl p-4 sm:p-6 pb-0! flex flex-col items-center sm:items-start gap-4", children: [
            t9,
            t10,
            /* @__PURE__ */ jsx(MorphingText, { className: "text-emerald-500 relative [&>span]:font-semibold text-center text-lg [&>span]:text-4xl", texts: ["Cruelty-free", "Vegan", "Premium"] })
          ] }) }) })
        ] })
      ] }) })
    ] });
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  return t11;
}
const features = [{
  icon: Leaf,
  title: "100% Natural",
  description: "Made from real fruit peels, our fragrances contain only natural ingredients safe for your skin and the environment."
}, {
  icon: Recycle,
  title: "Eco-Friendly",
  description: "We upcycle fruit peels that would otherwise go to waste, creating beautiful scents while reducing environmental impact."
}, {
  icon: Sparkles,
  title: "Fresh & Modern",
  description: "Contemporary fragrances that feel fresh, vibrant, and perfect for everyday wear. Suitable for ages 10+."
}, {
  icon: Heart,
  title: "Premium Quality",
  description: "Each fragrance is carefully crafted to deliver a luxurious experience with long-lasting, natural scent profiles."
}];
function Features() {
  const $ = c(3);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsx("h2", { id: "features-heading", className: "text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4", children: "Why Choose Blossom?" }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxs("header", { className: "text-center mb-10 sm:mb-16", children: [
      t0,
      /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_SHORT, inView: true, children: /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto", children: "We transform simple fruit peels into extraordinary fragrances, combining sustainability with premium quality." }) })
    ] });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx("section", { "aria-labelledby": "features-heading", className: "py-16 sm:py-24 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      t1,
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8", children: features.map(_temp$2) }),
      /* @__PURE__ */ jsx(Separator, { className: "mt-10 sm:mt-16" })
    ] }) });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}
function _temp$2(feature, index) {
  return /* @__PURE__ */ jsx(BlurFade, { delay: ANIMATED_LIST_STAGGER * index, inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "h-full border border-border shadow-sm hover:shadow-md transition-shadow", children: [
    /* @__PURE__ */ jsxs(CardHeader, { className: "pb-2 sm:pb-4", children: [
      /* @__PURE__ */ jsx("span", { className: "w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6", "aria-hidden": "true", children: /* @__PURE__ */ jsx(feature.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 text-primary" }) }),
      /* @__PURE__ */ jsx(CardTitle, { className: "text-lg sm:text-xl font-heading font-semibold", children: feature.title })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsx(CardDescription, { className: "text-sm sm:text-base text-muted-foreground leading-relaxed", children: feature.description }) })
  ] }) }, index);
}
const products = [{
  id: "citrus-bloom",
  name: "Citrus Bloom",
  description: "Fresh orange and lemon peel essence with a hint of jasmine",
  price: "€45",
  image: "/perfume.png",
  badge: "Bestseller",
  notes: "Citrus, Floral"
}, {
  id: "berry-mist",
  name: "Berry Mist",
  description: "Delicate berry undertones with a refreshing mist finish",
  price: "€42",
  image: "/perfume.png",
  badge: "New",
  notes: "Berry, Fresh"
}, {
  id: "garden-peel",
  name: "Garden Peel",
  description: "Herbal blend with grapefruit and botanical extracts",
  price: "€48",
  image: "/perfume.png",
  badge: "Popular",
  notes: "Herbal, Citrus"
}];
function ProductCard(t0) {
  const $ = c(109);
  const {
    product
  } = t0;
  const navigate = useNavigate();
  const wishlistItems = useWishlistStore(_temp$1);
  const addToWishlist = useWishlistStore(_temp2);
  const removeFromWishlist = useWishlistStore(_temp3);
  const compareItems = useCompareStore(_temp4);
  const addToCompare = useCompareStore(_temp5);
  const removeFromCompare = useCompareStore(_temp6);
  let t1;
  if ($[0] !== product.id || $[1] !== wishlistItems) {
    let t210;
    if ($[3] !== product.id) {
      t210 = (item) => item.productId === product.id;
      $[3] = product.id;
      $[4] = t210;
    } else {
      t210 = $[4];
    }
    t1 = wishlistItems.some(t210);
    $[0] = product.id;
    $[1] = wishlistItems;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  const isInWishlist = t1;
  let t2;
  if ($[5] !== compareItems || $[6] !== product.id) {
    let t310;
    if ($[8] !== product.id) {
      t310 = (item_0) => item_0.productId === product.id;
      $[8] = product.id;
      $[9] = t310;
    } else {
      t310 = $[9];
    }
    t2 = compareItems.some(t310);
    $[5] = compareItems;
    $[6] = product.id;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  const isInCompare = t2;
  let t3;
  if ($[10] !== navigate || $[11] !== product.id) {
    t3 = () => {
      navigate({
        to: "/product/$productId",
        params: {
          productId: product.id
        }
      });
    };
    $[10] = navigate;
    $[11] = product.id;
    $[12] = t3;
  } else {
    t3 = $[12];
  }
  const goToDetail = t3;
  let t4;
  if ($[13] !== addToWishlist || $[14] !== isInWishlist || $[15] !== product.id || $[16] !== removeFromWishlist) {
    t4 = (e) => {
      e.preventDefault();
      e.stopPropagation();
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
    $[17] = t4;
  } else {
    t4 = $[17];
  }
  const handleWishlistToggle = t4;
  let t5;
  if ($[18] !== addToCompare || $[19] !== isInCompare || $[20] !== product.id || $[21] !== removeFromCompare) {
    t5 = (e_0) => {
      e_0.preventDefault();
      e_0.stopPropagation();
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
    $[22] = t5;
  } else {
    t5 = $[22];
  }
  const handleCompareToggle = t5;
  let t6;
  if ($[23] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx(BorderBeam, { size: 250, duration: 8, colorFrom: "var(--brand-rose)", colorTo: "var(--primary)", className: "opacity-0 group-hover:opacity-100 transition-opacity" });
    $[23] = t6;
  } else {
    t6 = $[23];
  }
  let t7;
  if ($[24] !== goToDetail) {
    t7 = (e_1) => {
      if (e_1.key === "Enter" || e_1.key === " ") {
        e_1.preventDefault();
        goToDetail();
      }
    };
    $[24] = goToDetail;
    $[25] = t7;
  } else {
    t7 = $[25];
  }
  const t8 = `View details for ${product.name}`;
  const t9 = `${product.name} fragrance bottle`;
  let t10;
  if ($[26] !== product.image || $[27] !== t9) {
    t10 = /* @__PURE__ */ jsx("img", { src: product.image, alt: t9, className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" });
    $[26] = product.image;
    $[27] = t9;
    $[28] = t10;
  } else {
    t10 = $[28];
  }
  let t11;
  if ($[29] !== product.badge) {
    t11 = /* @__PURE__ */ jsx(Badge, { className: "absolute top-4 left-4 z-10", children: product.badge });
    $[29] = product.badge;
    $[30] = t11;
  } else {
    t11 = $[30];
  }
  const t12 = isInWishlist ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`;
  const t13 = `shrink-0 bg-background/80 backdrop-blur-sm ${isInWishlist ? "text-red-500 border-red-500 hover:text-red-600 hover:border-red-600" : ""}`;
  const t14 = `w-4 h-4 ${isInWishlist ? "fill-current" : ""}`;
  let t15;
  if ($[31] !== t14) {
    t15 = /* @__PURE__ */ jsx(Heart, { className: t14 });
    $[31] = t14;
    $[32] = t15;
  } else {
    t15 = $[32];
  }
  let t16;
  if ($[33] !== handleWishlistToggle || $[34] !== t12 || $[35] !== t13 || $[36] !== t15) {
    t16 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "outline", onClick: handleWishlistToggle, "aria-label": t12, className: t13, children: t15 }) });
    $[33] = handleWishlistToggle;
    $[34] = t12;
    $[35] = t13;
    $[36] = t15;
    $[37] = t16;
  } else {
    t16 = $[37];
  }
  const t17 = isInWishlist ? "Remove from wishlist" : "Add to wishlist";
  let t18;
  if ($[38] !== t17) {
    t18 = /* @__PURE__ */ jsx(TooltipContent, { children: t17 });
    $[38] = t17;
    $[39] = t18;
  } else {
    t18 = $[39];
  }
  let t19;
  if ($[40] !== t16 || $[41] !== t18) {
    t19 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t16,
      t18
    ] });
    $[40] = t16;
    $[41] = t18;
    $[42] = t19;
  } else {
    t19 = $[42];
  }
  const t20 = isInCompare ? `Remove ${product.name} from compare` : `Add ${product.name} to compare`;
  const t21 = `shrink-0 bg-background/80 backdrop-blur-sm ${isInCompare ? "text-primary border-primary" : ""}`;
  let t22;
  if ($[43] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t22 = /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4" });
    $[43] = t22;
  } else {
    t22 = $[43];
  }
  let t23;
  if ($[44] !== handleCompareToggle || $[45] !== t20 || $[46] !== t21) {
    t23 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "outline", onClick: handleCompareToggle, "aria-label": t20, className: t21, children: t22 }) });
    $[44] = handleCompareToggle;
    $[45] = t20;
    $[46] = t21;
    $[47] = t23;
  } else {
    t23 = $[47];
  }
  const t24 = isInCompare ? "Remove from compare" : "Add to compare";
  let t25;
  if ($[48] !== t24) {
    t25 = /* @__PURE__ */ jsx(TooltipContent, { children: t24 });
    $[48] = t24;
    $[49] = t25;
  } else {
    t25 = $[49];
  }
  let t26;
  if ($[50] !== t23 || $[51] !== t25) {
    t26 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t23,
      t25
    ] });
    $[50] = t23;
    $[51] = t25;
    $[52] = t26;
  } else {
    t26 = $[52];
  }
  let t27;
  if ($[53] !== t19 || $[54] !== t26) {
    t27 = /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 flex flex-col gap-2 z-20", children: [
      t19,
      t26
    ] });
    $[53] = t19;
    $[54] = t26;
    $[55] = t27;
  } else {
    t27 = $[55];
  }
  let t28;
  if ($[56] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t28 = /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300", "aria-hidden": "true" });
    $[56] = t28;
  } else {
    t28 = $[56];
  }
  let t29;
  if ($[57] !== product.name || $[58] !== product.notes) {
    t29 = /* @__PURE__ */ jsxs("figcaption", { className: "sr-only", children: [
      product.name,
      " - ",
      product.notes
    ] });
    $[57] = product.name;
    $[58] = product.notes;
    $[59] = t29;
  } else {
    t29 = $[59];
  }
  let t30;
  if ($[60] !== goToDetail || $[61] !== t10 || $[62] !== t11 || $[63] !== t27 || $[64] !== t29 || $[65] !== t7 || $[66] !== t8) {
    t30 = /* @__PURE__ */ jsxs("figure", { className: "relative aspect-[4/5] overflow-hidden bg-muted cursor-pointer", onClick: goToDetail, onKeyDown: t7, tabIndex: 0, role: "link", "aria-label": t8, children: [
      t10,
      t11,
      t27,
      t28,
      t29
    ] });
    $[60] = goToDetail;
    $[61] = t10;
    $[62] = t11;
    $[63] = t27;
    $[64] = t29;
    $[65] = t7;
    $[66] = t8;
    $[67] = t30;
  } else {
    t30 = $[67];
  }
  let t31;
  if ($[68] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t31 = /* @__PURE__ */ jsx(Leaf, { className: "w-4 h-4 text-primary", "aria-hidden": "true" });
    $[68] = t31;
  } else {
    t31 = $[68];
  }
  let t32;
  if ($[69] !== product.notes) {
    t32 = /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 mb-2", children: [
      t31,
      /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: product.notes })
    ] });
    $[69] = product.notes;
    $[70] = t32;
  } else {
    t32 = $[70];
  }
  let t33;
  if ($[71] !== product.name) {
    t33 = /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-heading font-semibold mb-2", children: product.name });
    $[71] = product.name;
    $[72] = t33;
  } else {
    t33 = $[72];
  }
  let t34;
  if ($[73] !== product.description) {
    t34 = /* @__PURE__ */ jsx(CardDescription, { className: "text-sm mb-5 leading-relaxed", children: product.description });
    $[73] = product.description;
    $[74] = t34;
  } else {
    t34 = $[74];
  }
  let t35;
  if ($[75] !== product.price) {
    t35 = product.price.replace("€", "");
    $[75] = product.price;
    $[76] = t35;
  } else {
    t35 = $[76];
  }
  let t36;
  if ($[77] !== product.price || $[78] !== t35) {
    t36 = /* @__PURE__ */ jsx("data", { value: t35, className: "text-2xl font-heading font-bold text-primary", children: product.price });
    $[77] = product.price;
    $[78] = t35;
    $[79] = t36;
  } else {
    t36 = $[79];
  }
  const t37 = `Actions for ${product.name}`;
  const t38 = `View details for ${product.name}`;
  let t39;
  if ($[80] !== goToDetail || $[81] !== t38) {
    t39 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "default", variant: "outline", onClick: goToDetail, "aria-label": t38, children: "Details" }) });
    $[80] = goToDetail;
    $[81] = t38;
    $[82] = t39;
  } else {
    t39 = $[82];
  }
  let t40;
  if ($[83] !== product.name) {
    t40 = /* @__PURE__ */ jsxs(TooltipContent, { children: [
      "View ",
      product.name
    ] });
    $[83] = product.name;
    $[84] = t40;
  } else {
    t40 = $[84];
  }
  let t41;
  if ($[85] !== t39 || $[86] !== t40) {
    t41 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t39,
      t40
    ] });
    $[85] = t39;
    $[86] = t40;
    $[87] = t41;
  } else {
    t41 = $[87];
  }
  const t42 = `Add ${product.name} to cart`;
  let t43;
  if ($[88] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t43 = /* @__PURE__ */ jsx(ShoppingBag, { className: "w-4 h-4 mr-1", "aria-hidden": "true" });
    $[88] = t43;
  } else {
    t43 = $[88];
  }
  let t44;
  if ($[89] !== t42) {
    t44 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { size: "default", "aria-label": t42, children: [
      t43,
      "Buy"
    ] }) });
    $[89] = t42;
    $[90] = t44;
  } else {
    t44 = $[90];
  }
  let t45;
  if ($[91] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t45 = /* @__PURE__ */ jsx(TooltipContent, { children: "Add to cart" });
    $[91] = t45;
  } else {
    t45 = $[91];
  }
  let t46;
  if ($[92] !== t44) {
    t46 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t44,
      t45
    ] });
    $[92] = t44;
    $[93] = t46;
  } else {
    t46 = $[93];
  }
  let t47;
  if ($[94] !== t37 || $[95] !== t41 || $[96] !== t46) {
    t47 = /* @__PURE__ */ jsxs(CardAction, { className: "flex gap-2", role: "group", "aria-label": t37, children: [
      t41,
      t46
    ] });
    $[94] = t37;
    $[95] = t41;
    $[96] = t46;
    $[97] = t47;
  } else {
    t47 = $[97];
  }
  let t48;
  if ($[98] !== t36 || $[99] !== t47) {
    t48 = /* @__PURE__ */ jsxs(CardFooter, { className: "flex items-center justify-between p-0", children: [
      t36,
      t47
    ] });
    $[98] = t36;
    $[99] = t47;
    $[100] = t48;
  } else {
    t48 = $[100];
  }
  let t49;
  if ($[101] !== t32 || $[102] !== t33 || $[103] !== t34 || $[104] !== t48) {
    t49 = /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
      t32,
      t33,
      t34,
      t48
    ] });
    $[101] = t32;
    $[102] = t33;
    $[103] = t34;
    $[104] = t48;
    $[105] = t49;
  } else {
    t49 = $[105];
  }
  let t50;
  if ($[106] !== t30 || $[107] !== t49) {
    t50 = /* @__PURE__ */ jsx("li", { className: "list-none", children: /* @__PURE__ */ jsxs(Card, { className: "group overflow-hidden border-2 border-[#D4AF37] shadow-sm hover:shadow-md transition-shadow duration-300 relative", children: [
      t6,
      t30,
      t49
    ] }) });
    $[106] = t30;
    $[107] = t49;
    $[108] = t50;
  } else {
    t50 = $[108];
  }
  return t50;
}
function _temp6(state_4) {
  return state_4.removeItem;
}
function _temp5(state_3) {
  return state_3.addItem;
}
function _temp4(state_2) {
  return state_2.items;
}
function _temp3(state_1) {
  return state_1.removeItem;
}
function _temp2(state_0) {
  return state_0.addItem;
}
function _temp$1(state) {
  return state.items;
}
function ProductShowcase() {
  const $ = c(7);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "inline-flex items-center gap-2 px-4 py-2 mb-4", children: [
      /* @__PURE__ */ jsx(Flower2, { className: "w-4 h-4", "aria-hidden": "true" }),
      "Featured"
    ] }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_SHORT, inView: true, children: /* @__PURE__ */ jsx("h2", { id: "showcase-heading", className: "text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4", children: "Our Signature Collection" }) });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxs("header", { className: "text-center mb-16", children: [
      t0,
      t1,
      /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_MEDIUM, inView: true, children: /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Each fragrance is crafted from carefully selected fruit peels, delivering unique scents that are both natural and luxurious." }) })
    ] });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(AnimatedList, { delay: ANIMATED_LIST_DELAY, children: /* @__PURE__ */ jsx("ul", { className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0", role: "list", "aria-label": "Products", children: products.map(_temp7) }) });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(Separator, { className: "mb-8" });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      featured: "citrus-bloom,berry-mist,garden-peel"
    };
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx("section", { "aria-labelledby": "showcase-heading", className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      t2,
      t3,
      /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_EXTRA_LONG_2, inView: true, children: /* @__PURE__ */ jsxs("div", { className: "text-center mt-12", children: [
        t4,
        /* @__PURE__ */ jsx(Button, { size: "lg", variant: "outline", className: "group border-primary/20 hover:bg-primary/5 text-base px-8 py-6 h-auto", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/products", search: t5, children: [
          "View All Products",
          /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform", "aria-hidden": "true" })
        ] }) })
      ] }) })
    ] }) });
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  return t6;
}
function _temp7(product) {
  return /* @__PURE__ */ jsx(ProductCard, { product }, product.id);
}
const Home = () => {
  const $ = c(11);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      fetchFn: _temp,
      deps: []
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const {
    loading: loadingFeatured,
    error: errorFeatured,
    refetch: refetchFeatured
  } = useAsyncDataWithRetry(t0);
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(SectionWrapper, { loading: false, error: null, children: /* @__PURE__ */ jsx(Hero, {}) });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(SectionWrapper, { loading: false, error: null, children: /* @__PURE__ */ jsx(Features, {}) });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(ProductShowcase, {});
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== errorFeatured || $[5] !== loadingFeatured || $[6] !== refetchFeatured) {
    t4 = /* @__PURE__ */ jsx(SectionWrapper, { loading: loadingFeatured, error: errorFeatured, onRetry: refetchFeatured, loadingType: "grid", loadingCount: 4, children: t3 });
    $[4] = errorFeatured;
    $[5] = loadingFeatured;
    $[6] = refetchFeatured;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx(AboutPage, { showHero: false });
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t4) {
    t6 = /* @__PURE__ */ jsxs("main", { children: [
      t1,
      t2,
      t4,
      t5
    ] });
    $[9] = t4;
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  return t6;
};
function _temp() {
  return products$1.slice(0, 4);
}
const SplitComponent = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(Home, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  SplitComponent as component
};

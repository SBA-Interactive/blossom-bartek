import { jsx, jsxs } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { y as cn, N as Tabs, O as TabsList, h as BlurFade, B as Badge, m as CardHeader, n as CardTitle, C as Card, o as CardContent, p as CardDescription, l as Separator, A as Avatar, g as AvatarFallback, Q as TabsTrigger, R as TabsContent } from "./router-B2FLevz_.js";
import { useRef, useEffect, useId, useState } from "react";
import { useMotionValue, useSpring, useInView, motion } from "motion/react";
import { A as AnimatedList } from "./animated-list-CA55RPGY.js";
import { Leaf, Recycle, Heart, Quote } from "lucide-react";
import { P as PricingPage } from "./Pricing-B4jeHnd9.js";
import { A as ANIMATED_LIST_DELAY, B as BLUR_FADE_DELAY_MEDIUM } from "./animation-DXk-6j-p.js";
function NumberTicker(t0) {
  const $ = c(28);
  let className;
  let props;
  let t1;
  let t2;
  let t3;
  let t4;
  let value;
  if ($[0] !== t0) {
    ({
      value,
      startValue: t1,
      direction: t2,
      delay: t3,
      className,
      decimalPlaces: t4,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
    $[6] = t4;
    $[7] = value;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
    t3 = $[5];
    t4 = $[6];
    value = $[7];
  }
  const startValue = t1 === void 0 ? 0 : t1;
  const direction = t2 === void 0 ? "up" : t2;
  const delay = t3 === void 0 ? 0 : t3;
  const decimalPlaces = t4 === void 0 ? 0 : t4;
  const ref = useRef(null);
  const motionValue = useMotionValue(direction === "down" ? value : startValue);
  let t5;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      damping: 60,
      stiffness: 100
    };
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  const springValue = useSpring(motionValue, t5);
  let t6;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = {
      once: true,
      margin: "0px"
    };
    $[9] = t6;
  } else {
    t6 = $[9];
  }
  const isInView = useInView(ref, t6);
  let t7;
  let t8;
  if ($[10] !== delay || $[11] !== direction || $[12] !== isInView || $[13] !== motionValue || $[14] !== startValue || $[15] !== value) {
    t7 = () => {
      let timer = null;
      if (isInView) {
        timer = setTimeout(() => {
          motionValue.set(direction === "down" ? startValue : value);
        }, delay * 1e3);
      }
      return () => {
        if (timer !== null) {
          clearTimeout(timer);
        }
      };
    };
    t8 = [motionValue, isInView, delay, value, direction, startValue];
    $[10] = delay;
    $[11] = direction;
    $[12] = isInView;
    $[13] = motionValue;
    $[14] = startValue;
    $[15] = value;
    $[16] = t7;
    $[17] = t8;
  } else {
    t7 = $[16];
    t8 = $[17];
  }
  useEffect(t7, t8);
  let t10;
  let t9;
  if ($[18] !== decimalPlaces || $[19] !== springValue) {
    t9 = () => springValue.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = Intl.NumberFormat("en-US", {
          minimumFractionDigits: decimalPlaces,
          maximumFractionDigits: decimalPlaces
        }).format(Number(latest.toFixed(decimalPlaces)));
      }
    });
    t10 = [springValue, decimalPlaces];
    $[18] = decimalPlaces;
    $[19] = springValue;
    $[20] = t10;
    $[21] = t9;
  } else {
    t10 = $[20];
    t9 = $[21];
  }
  useEffect(t9, t10);
  let t11;
  if ($[22] !== className) {
    t11 = cn("inline-block tracking-wider tabular-nums", className);
    $[22] = className;
    $[23] = t11;
  } else {
    t11 = $[23];
  }
  let t12;
  if ($[24] !== props || $[25] !== startValue || $[26] !== t11) {
    t12 = /* @__PURE__ */ jsx("span", { ref, className: t11, ...props, children: startValue });
    $[24] = props;
    $[25] = startValue;
    $[26] = t11;
    $[27] = t12;
  } else {
    t12 = $[27];
  }
  return t12;
}
function DotPattern(t0) {
  const $ = c(47);
  let className;
  let props;
  let t1;
  let t2;
  let t3;
  let t4;
  let t5;
  let t6;
  let t7;
  let t8;
  if ($[0] !== t0) {
    ({
      width: t1,
      height: t2,
      x: t3,
      y: t4,
      cx: t5,
      cy: t6,
      cr: t7,
      className,
      glow: t8,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
    $[6] = t4;
    $[7] = t5;
    $[8] = t6;
    $[9] = t7;
    $[10] = t8;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
    t3 = $[5];
    t4 = $[6];
    t5 = $[7];
    t6 = $[8];
    t7 = $[9];
    t8 = $[10];
  }
  const width = t1 === void 0 ? 16 : t1;
  const height = t2 === void 0 ? 16 : t2;
  const x = t3 === void 0 ? 0 : t3;
  const y = t4 === void 0 ? 0 : t4;
  const cx = t5 === void 0 ? 1 : t5;
  const cy = t6 === void 0 ? 1 : t6;
  const cr = t7 === void 0 ? 1 : t7;
  const glow = t8 === void 0 ? false : t8;
  const id = useId();
  const containerRef = useRef(null);
  let t9;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = {
      width: 0,
      height: 0
    };
    $[11] = t9;
  } else {
    t9 = $[11];
  }
  const [dimensions, setDimensions] = useState(t9);
  let t10;
  let t11;
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = () => {
      const updateDimensions = () => {
        if (containerRef.current) {
          const {
            width: width_0,
            height: height_0
          } = containerRef.current.getBoundingClientRect();
          setDimensions({
            width: width_0,
            height: height_0
          });
        }
      };
      updateDimensions();
      window.addEventListener("resize", updateDimensions);
      return () => window.removeEventListener("resize", updateDimensions);
    };
    t11 = [];
    $[12] = t10;
    $[13] = t11;
  } else {
    t10 = $[12];
    t11 = $[13];
  }
  useEffect(t10, t11);
  let t12;
  if ($[14] !== cx || $[15] !== cy || $[16] !== dimensions.height || $[17] !== dimensions.width || $[18] !== height || $[19] !== width || $[20] !== x || $[21] !== y) {
    let t132;
    if ($[23] !== cx || $[24] !== cy || $[25] !== dimensions.width || $[26] !== height || $[27] !== width || $[28] !== x || $[29] !== y) {
      t132 = (_, i) => {
        const col = i % Math.ceil(dimensions.width / width);
        const row = Math.floor(i / Math.ceil(dimensions.width / width));
        return {
          x: col * width + cx + x,
          y: row * height + cy + y,
          delay: Math.random() * 5,
          duration: Math.random() * 3 + 2
        };
      };
      $[23] = cx;
      $[24] = cy;
      $[25] = dimensions.width;
      $[26] = height;
      $[27] = width;
      $[28] = x;
      $[29] = y;
      $[30] = t132;
    } else {
      t132 = $[30];
    }
    t12 = Array.from({
      length: Math.ceil(dimensions.width / width) * Math.ceil(dimensions.height / height)
    }, t132);
    $[14] = cx;
    $[15] = cy;
    $[16] = dimensions.height;
    $[17] = dimensions.width;
    $[18] = height;
    $[19] = width;
    $[20] = x;
    $[21] = y;
    $[22] = t12;
  } else {
    t12 = $[22];
  }
  const dots = t12;
  let t13;
  if ($[31] !== className) {
    t13 = cn("pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80", className);
    $[31] = className;
    $[32] = t13;
  } else {
    t13 = $[32];
  }
  const t14 = `${id}-gradient`;
  let t15;
  let t16;
  if ($[33] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "1" });
    t16 = /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0" });
    $[33] = t15;
    $[34] = t16;
  } else {
    t15 = $[33];
    t16 = $[34];
  }
  let t17;
  if ($[35] !== t14) {
    t17 = /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("radialGradient", { id: t14, children: [
      t15,
      t16
    ] }) });
    $[35] = t14;
    $[36] = t17;
  } else {
    t17 = $[36];
  }
  let t18;
  if ($[37] !== cr || $[38] !== dots || $[39] !== glow || $[40] !== id) {
    t18 = dots.map((dot) => /* @__PURE__ */ jsx(motion.circle, { cx: dot.x, cy: dot.y, r: cr, fill: glow ? `url(#${id}-gradient)` : "currentColor", initial: glow ? {
      opacity: 0.4,
      scale: 1
    } : {}, animate: glow ? {
      opacity: [0.4, 1, 0.4],
      scale: [1, 1.5, 1]
    } : {}, transition: glow ? {
      duration: dot.duration,
      repeat: Infinity,
      repeatType: "reverse",
      delay: dot.delay,
      ease: "easeInOut"
    } : {} }, `${dot.x}-${dot.y}`));
    $[37] = cr;
    $[38] = dots;
    $[39] = glow;
    $[40] = id;
    $[41] = t18;
  } else {
    t18 = $[41];
  }
  let t19;
  if ($[42] !== props || $[43] !== t13 || $[44] !== t17 || $[45] !== t18) {
    t19 = /* @__PURE__ */ jsxs("svg", { ref: containerRef, "aria-hidden": "true", className: t13, ...props, children: [
      t17,
      t18
    ] });
    $[42] = props;
    $[43] = t13;
    $[44] = t17;
    $[45] = t18;
    $[46] = t19;
  } else {
    t19 = $[46];
  }
  return t19;
}
const BentoGrid = (t0) => {
  const $ = c(10);
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
    t1 = cn("grid w-full auto-rows-[16rem] sm:auto-rows-[18rem] md:grid-cols-2 lg:grid-cols-4 gap-6", "sm:gap-6", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  let t2;
  if ($[6] !== children || $[7] !== props || $[8] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { className: t1, ...props, children });
    $[6] = children;
    $[7] = props;
    $[8] = t1;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  return t2;
};
const values = [{
  icon: Leaf,
  title: "Natural Ingredients",
  description: "We use only natural fruit peels and botanical extracts, ensuring every fragrance is safe and gentle on skin."
}, {
  icon: Recycle,
  title: "Sustainability First",
  description: "By upcycling fruit peels, we reduce waste and create something beautiful from what would otherwise be discarded."
}, {
  icon: Heart,
  title: "Made with Love",
  description: "Each bottle is crafted with care and attention to detail, delivering a premium experience every time."
}];
const stats = [{
  number: 100,
  suffix: "%",
  label: "Natural Ingredients"
}, {
  number: 10,
  suffix: "+",
  label: "Safe for Age"
}, {
  number: 0,
  suffix: "",
  label: "Harmful Chemicals"
}, {
  number: 100,
  suffix: "%",
  label: "Eco Packaging"
}];
const milestones = [{
  year: "2024",
  title: "The Beginning",
  description: "Blossom was founded with a vision to create sustainable fragrances from upcycled fruit peels."
}, {
  year: "2025",
  title: "First Collection",
  description: "Launched our debut collection of 6 natural fragrances, all made from citrus and berry peels."
}, {
  year: "2026",
  title: "Growing Community",
  description: "Expanded to serve customers across Greece with plans for international shipping."
}];
function AboutPage(t0) {
  const $ = c(16);
  const {
    showHero: t1
  } = t0;
  const showHero = t1 === void 0 ? true : t1;
  const t2 = showHero ? "pt-24" : "";
  let t3;
  if ($[0] !== showHero) {
    t3 = showHero && /* @__PURE__ */ jsxs("section", { className: "py-24 bg-linear-to-br from-primary/5 via-background to-secondary/20 relative overflow-hidden", children: [
      /* @__PURE__ */ jsx(DotPattern, { className: "opacity-10 text-primary/20" }),
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "inline-flex items-center gap-2 px-4 py-2 mb-6", children: [
          /* @__PURE__ */ jsx(Leaf, { className: "w-4 h-4" }),
          "Our Story"
        ] }),
        /* @__PURE__ */ jsxs("h1", { className: "text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight", children: [
          "From Fruit Peels to ",
          /* @__PURE__ */ jsx("span", { className: "text-primary", children: "Fresh Scents" })
        ] }),
        /* @__PURE__ */ jsx("p", { className: "text-xl text-muted-foreground leading-relaxed", children: "Blossom was born from a simple idea: transform nature's overlooked treasures into something beautiful. We create premium fragrances from upcycled fruit peels, proving that sustainability and luxury can go hand in hand." })
      ] }) }) })
    ] });
    $[0] = showHero;
    $[1] = t3;
  } else {
    t3 = $[1];
  }
  let t4;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx("section", { className: "py-16 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(AnimatedList, { delay: ANIMATED_LIST_DELAY, children: /* @__PURE__ */ jsx(BentoGrid, { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map(_temp) }) }) }) });
    $[2] = t4;
  } else {
    t4 = $[2];
  }
  let t5;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-3xl sm:text-4xl font-heading font-bold", children: "Our Mission" }) });
    $[3] = t5;
  } else {
    t5 = $[3];
  }
  let t6;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "border-0 shadow-none", children: [
      t5,
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsx(CardDescription, { className: "text-lg leading-relaxed", children: "At Blossom, we believe that nature provides everything we need to create beautiful, effective fragrances. Our mission is to prove that you don't need harmful chemicals to smell wonderful." }),
        /* @__PURE__ */ jsx(CardDescription, { className: "text-lg leading-relaxed", children: "Every year, millions of tons of fruit peels go to waste. We saw an opportunity to transform this overlooked resource into premium perfumes that are safe for you and gentle on the planet." }),
        /* @__PURE__ */ jsx(CardDescription, { className: "text-lg leading-relaxed", children: "Our fragrances are suitable for ages 10+, making them perfect for everyone who wants to smell fresh and feel good about their choices." })
      ] })
    ] }) });
    $[4] = t6;
  } else {
    t6 = $[4];
  }
  let t7;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      t6,
      /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_MEDIUM, inView: true, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-br from-primary/20 to-brand-citrus/20 rounded-3xl blur-2xl" }),
        /* @__PURE__ */ jsx("img", { src: "/perfume.png", alt: "Blossom Natural Perfume", className: "relative z-10 w-full rounded-2xl shadow-xl" })
      ] }) })
    ] }) }) });
    $[5] = t7;
  } else {
    t7 = $[5];
  }
  let t8;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("header", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4", children: "Our Values" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Everything we do is guided by our commitment to nature, quality, and sustainability." })
    ] }) });
    $[6] = t8;
  } else {
    t8 = $[6];
  }
  let t9;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsx("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      t8,
      /* @__PURE__ */ jsx(AnimatedList, { delay: ANIMATED_LIST_DELAY, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: values.map(_temp2) }) })
    ] }) });
    $[7] = t9;
  } else {
    t9 = $[7];
  }
  let t10;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsx("header", { className: "max-w-3xl mx-auto text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6", children: "How It All Started" }) }) });
    $[8] = t10;
  } else {
    t10 = $[8];
  }
  let t11;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      t10,
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "2024", className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsx(TabsList, { className: "grid w-full grid-cols-3", children: milestones.map(_temp3) }),
        milestones.map(_temp4)
      ] })
    ] }) });
    $[9] = t11;
  } else {
    t11 = $[9];
  }
  let t12;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsx("h2", { className: "text-2xl font-heading font-bold text-center mb-10", children: "What Our Customers Say" });
    $[10] = t12;
  } else {
    t12 = $[10];
  }
  let t13;
  let t14;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(BlurFade, { inView: true, children: [
      t12,
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto", children: [{
        name: "Maria K.",
        text: "The scents are absolutely divine! I've been using Citrus Bloom for months and still look forward to putting it on every morning. Finally found a fragrance that matches my values.",
        rating: 5
      }, {
        name: "Alexandros P.",
        text: "Blossom has completely changed how I think about perfume. Knowing it's made from upcycled fruit peels makes it even more special. The quality is incredible.",
        rating: 5
      }, {
        name: "Sofia M.",
        text: "I gifted the Rose Petal set to my mother and she absolutely loved it. The packaging is beautiful and the scents are so unique. Will definitely be ordering more!",
        rating: 5
      }].map(_temp6) })
    ] }) }) });
    t14 = /* @__PURE__ */ jsx(PricingPage, { showHeader: false });
    $[11] = t13;
    $[12] = t14;
  } else {
    t13 = $[11];
    t14 = $[12];
  }
  let t15;
  if ($[13] !== t2 || $[14] !== t3) {
    t15 = /* @__PURE__ */ jsxs("main", { className: t2, children: [
      t3,
      t4,
      t7,
      t9,
      t11,
      t13,
      t14
    ] });
    $[13] = t2;
    $[14] = t3;
    $[15] = t15;
  } else {
    t15 = $[15];
  }
  return t15;
}
function _temp6(testimonial, index_1) {
  return /* @__PURE__ */ jsx(BlurFade, { delay: index_1 * 0.1, inView: true, children: /* @__PURE__ */ jsx(Card, { className: "h-full", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
    /* @__PURE__ */ jsx(Quote, { className: "w-8 h-8 text-primary/30 mb-4" }),
    /* @__PURE__ */ jsxs("p", { className: "text-muted-foreground mb-4 italic", children: [
      '"',
      testimonial.text,
      '"'
    ] }),
    /* @__PURE__ */ jsx("div", { className: "flex items-center gap-1 mb-2", children: [...Array(testimonial.rating)].map(_temp5) }),
    /* @__PURE__ */ jsx("p", { className: "font-semibold", children: testimonial.name })
  ] }) }) }, index_1);
}
function _temp5(_, i) {
  return /* @__PURE__ */ jsx("svg", { className: "w-4 h-4 fill-yellow-400 text-yellow-400", viewBox: "0 0 24 24", children: /* @__PURE__ */ jsx("path", { d: "M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" }) }, i);
}
function _temp4(m_0) {
  return /* @__PURE__ */ jsx(TabsContent, { value: m_0.year, children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx(Badge, { variant: "outline", children: m_0.year }),
      m_0.title
    ] }) }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "text-lg leading-relaxed", children: m_0.description }) })
  ] }) }, m_0.year);
}
function _temp3(m) {
  return /* @__PURE__ */ jsx(TabsTrigger, { value: m.year, children: m.year }, m.year);
}
function _temp2(value, index_0) {
  return /* @__PURE__ */ jsx(BlurFade, { delay: 0.1 * index_0, inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-md transition-all border-border/50", children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(Avatar, { className: "w-14 h-14 bg-primary/10 mb-6", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(value.icon, { className: "w-7 h-7 text-primary" }) }) }),
      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-heading font-semibold", children: value.title })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed", children: value.description }) })
  ] }) }, index_0);
}
function _temp(stat, index) {
  return /* @__PURE__ */ jsx(BlurFade, { delay: 0.1 * index, inView: true, children: /* @__PURE__ */ jsx(Card, { className: "bg-transparent border-0 shadow-none text-center", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "text-3xl sm:text-4xl font-heading font-bold mb-2 text-primary-foreground", children: [
      /* @__PURE__ */ jsx(NumberTicker, { value: stat.number }),
      stat.suffix
    ] }),
    /* @__PURE__ */ jsx(Separator, { className: "my-2 bg-primary-foreground/20" }),
    /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80 text-primary-foreground", children: stat.label })
  ] }) }) }, index);
}
export {
  AboutPage as A,
  NumberTicker as N
};

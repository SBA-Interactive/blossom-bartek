import { jsxs, jsx } from "react/jsx-runtime";
import { x as cn, B as BlurFade, b as Badge, C as Card, l as CardContent, m as Separator, n as CardHeader, o as CardTitle, p as CardDescription, A as Avatar, a as AvatarFallback, s as Tabs, t as TabsList, v as TabsTrigger, G as TabsContent } from "./router-CtctPOdV.js";
import { N as NumberTicker } from "./number-ticker-BMmSQEWq.js";
import { useId, useRef, useState, useEffect } from "react";
import { motion } from "motion/react";
import { A as AnimatedList } from "./animated-list-BMLPWeED.js";
import { Leaf, Recycle, Heart } from "lucide-react";
import "@tanstack/react-router";
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
import "next-themes";
import "sonner";
function DotPattern({
  width = 16,
  height = 16,
  x = 0,
  y = 0,
  cx = 1,
  cy = 1,
  cr = 1,
  className,
  glow = false,
  ...props
}) {
  const id = useId();
  const containerRef = useRef(null);
  const [dimensions, setDimensions] = useState({ width: 0, height: 0 });
  useEffect(() => {
    const updateDimensions = () => {
      if (containerRef.current) {
        const { width: width2, height: height2 } = containerRef.current.getBoundingClientRect();
        setDimensions({ width: width2, height: height2 });
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);
  const dots = Array.from(
    {
      length: Math.ceil(dimensions.width / width) * Math.ceil(dimensions.height / height)
    },
    (_, i) => {
      const col = i % Math.ceil(dimensions.width / width);
      const row = Math.floor(i / Math.ceil(dimensions.width / width));
      return {
        x: col * width + cx + x,
        y: row * height + cy + y,
        delay: Math.random() * 5,
        duration: Math.random() * 3 + 2
      };
    }
  );
  return /* @__PURE__ */ jsxs(
    "svg",
    {
      ref: containerRef,
      "aria-hidden": "true",
      className: cn(
        "pointer-events-none absolute inset-0 h-full w-full text-neutral-400/80",
        className
      ),
      ...props,
      children: [
        /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsxs("radialGradient", { id: `${id}-gradient`, children: [
          /* @__PURE__ */ jsx("stop", { offset: "0%", stopColor: "currentColor", stopOpacity: "1" }),
          /* @__PURE__ */ jsx("stop", { offset: "100%", stopColor: "currentColor", stopOpacity: "0" })
        ] }) }),
        dots.map((dot) => /* @__PURE__ */ jsx(
          motion.circle,
          {
            cx: dot.x,
            cy: dot.y,
            r: cr,
            fill: glow ? `url(#${id}-gradient)` : "currentColor",
            initial: glow ? { opacity: 0.4, scale: 1 } : {},
            animate: glow ? {
              opacity: [0.4, 1, 0.4],
              scale: [1, 1.5, 1]
            } : {},
            transition: glow ? {
              duration: dot.duration,
              repeat: Infinity,
              repeatType: "reverse",
              delay: dot.delay,
              ease: "easeInOut"
            } : {}
          },
          `${dot.x}-${dot.y}`
        ))
      ]
    }
  );
}
const BentoGrid = ({ children, className, ...props }) => {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "grid w-full auto-rows-[16rem] sm:auto-rows-[18rem] md:grid-cols-2 lg:grid-cols-4 gap-6",
        "sm:gap-6",
        className
      ),
      ...props,
      children
    }
  );
};
const values = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description: "We use only natural fruit peels and botanical extracts, ensuring every fragrance is safe and gentle on skin."
  },
  {
    icon: Recycle,
    title: "Sustainability First",
    description: "By upcycling fruit peels, we reduce waste and create something beautiful from what would otherwise be discarded."
  },
  {
    icon: Heart,
    title: "Made with Love",
    description: "Each bottle is crafted with care and attention to detail, delivering a premium experience every time."
  }
];
const stats = [
  { number: 100, suffix: "%", label: "Natural Ingredients" },
  { number: 10, suffix: "+", label: "Safe for Age" },
  { number: 0, suffix: "", label: "Harmful Chemicals" },
  { number: 100, suffix: "%", label: "Eco Packaging" }
];
const milestones = [
  {
    year: "2024",
    title: "The Beginning",
    description: "Blossom was founded with a vision to create sustainable fragrances from upcycled fruit peels."
  },
  {
    year: "2025",
    title: "First Collection",
    description: "Launched our debut collection of 6 natural fragrances, all made from citrus and berry peels."
  },
  {
    year: "2026",
    title: "Growing Community",
    description: "Expanded to serve customers across Greece with plans for international shipping."
  }
];
function AboutPage() {
  return /* @__PURE__ */ jsxs("main", { className: "pt-24", children: [
    /* @__PURE__ */ jsxs("section", { className: "py-24 bg-linear-to-br from-primary/5 via-background to-secondary/20 relative overflow-hidden", children: [
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
    ] }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-primary text-primary-foreground", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(AnimatedList, { delay: 0.15, children: /* @__PURE__ */ jsx(BentoGrid, { className: "grid grid-cols-2 md:grid-cols-4 gap-8", children: stats.map((stat, index) => /* @__PURE__ */ jsx(BlurFade, { delay: 0.1 * index, inView: true, children: /* @__PURE__ */ jsx(Card, { className: "bg-transparent border-0 shadow-none text-center", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
      /* @__PURE__ */ jsxs("div", { className: "text-3xl sm:text-4xl font-heading font-bold mb-2 text-primary-foreground", children: [
        /* @__PURE__ */ jsx(NumberTicker, { value: stat.number }),
        stat.suffix
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "my-2 bg-primary-foreground/20" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm opacity-80 text-primary-foreground", children: stat.label })
    ] }) }) }, index)) }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
      /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "border-0 shadow-none", children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-3xl sm:text-4xl font-heading font-bold", children: "Our Mission" }) }),
        /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
          /* @__PURE__ */ jsx(CardDescription, { className: "text-lg leading-relaxed", children: "At Blossom, we believe that nature provides everything we need to create beautiful, effective fragrances. Our mission is to prove that you don't need harmful chemicals to smell wonderful." }),
          /* @__PURE__ */ jsx(CardDescription, { className: "text-lg leading-relaxed", children: "Every year, millions of tons of fruit peels go to waste. We saw an opportunity to transform this overlooked resource into premium perfumes that are safe for you and gentle on the planet." }),
          /* @__PURE__ */ jsx(CardDescription, { className: "text-lg leading-relaxed", children: "Our fragrances are suitable for ages 10+, making them perfect for everyone who wants to smell fresh and feel good about their choices." })
        ] })
      ] }) }),
      /* @__PURE__ */ jsx(BlurFade, { delay: 0.2, inView: true, children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        /* @__PURE__ */ jsx("div", { className: "absolute inset-0 bg-linear-to-br from-primary/20 to-brand-citrus/20 rounded-3xl blur-2xl" }),
        /* @__PURE__ */ jsx(
          "img",
          {
            src: "/perfume.png",
            alt: "Blossom Natural Perfume",
            className: "relative z-10 w-full rounded-2xl shadow-xl"
          }
        )
      ] }) })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("header", { className: "text-center mb-16", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4", children: "Our Values" }),
        /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Everything we do is guided by our commitment to nature, quality, and sustainability." })
      ] }) }),
      /* @__PURE__ */ jsx(AnimatedList, { delay: 0.15, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-8", children: values.map((value, index) => /* @__PURE__ */ jsx(BlurFade, { delay: 0.1 * index, inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "h-full hover:shadow-md transition-all border-border/50", children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(Avatar, { className: "w-14 h-14 bg-primary/10 mb-6", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(value.icon, { className: "w-7 h-7 text-primary" }) }) }),
          /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-heading font-semibold", children: value.title })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed", children: value.description }) })
      ] }) }, index)) }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsx("header", { className: "max-w-3xl mx-auto text-center mb-16", children: /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6", children: "How It All Started" }) }) }),
      /* @__PURE__ */ jsxs(Tabs, { defaultValue: "2024", className: "max-w-3xl mx-auto", children: [
        /* @__PURE__ */ jsx(TabsList, { className: "grid w-full grid-cols-3", children: milestones.map((m) => /* @__PURE__ */ jsx(TabsTrigger, { value: m.year, children: m.year }, m.year)) }),
        milestones.map((m) => /* @__PURE__ */ jsx(TabsContent, { value: m.year, children: /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
            /* @__PURE__ */ jsx(Badge, { variant: "outline", children: m.year }),
            m.title
          ] }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "text-lg leading-relaxed", children: m.description }) })
        ] }) }, m.year))
      ] })
    ] }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsx(AboutPage, {});
export {
  SplitComponent as component
};

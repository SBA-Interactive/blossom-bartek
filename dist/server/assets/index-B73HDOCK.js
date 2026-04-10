import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { x as cn, B as BlurFade, H as AnimatedGradientText, h as Button, m as Separator, C as Card, n as CardHeader, o as CardTitle, l as CardContent, p as CardDescription, b as Badge, u as useWishlistStore, F as useCompareStore, T as Tooltip, j as TooltipTrigger, k as TooltipContent, w as CardFooter, J as CardAction } from "./router-CtctPOdV.js";
import { useRef, useCallback, useEffect } from "react";
import { N as NumberTicker } from "./number-ticker-BMmSQEWq.js";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Leaf, Recycle, Sparkles, Heart, Flower2, Scale, ShoppingBag } from "lucide-react";
import { A as AnimatedList } from "./animated-list-BMLPWeED.js";
import { B as BorderBeam } from "./border-beam-DHXDrmLy.js";
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
const morphTime = 1.5;
const cooldownTime = 0.5;
const useMorphingText = (texts) => {
  const textIndexRef = useRef(0);
  const morphRef = useRef(0);
  const cooldownRef = useRef(0);
  const timeRef = useRef(/* @__PURE__ */ new Date());
  const text1Ref = useRef(null);
  const text2Ref = useRef(null);
  const setStyles = useCallback(
    (fraction) => {
      const [current1, current2] = [text1Ref.current, text2Ref.current];
      if (!current1 || !current2) return;
      current2.style.filter = `blur(${Math.min(8 / fraction - 8, 100)}px)`;
      current2.style.opacity = `${Math.pow(fraction, 0.4) * 100}%`;
      const invertedFraction = 1 - fraction;
      current1.style.filter = `blur(${Math.min(
        8 / invertedFraction - 8,
        100
      )}px)`;
      current1.style.opacity = `${Math.pow(invertedFraction, 0.4) * 100}%`;
      current1.textContent = texts[textIndexRef.current % texts.length];
      current2.textContent = texts[(textIndexRef.current + 1) % texts.length];
    },
    [texts]
  );
  const doMorph = useCallback(() => {
    morphRef.current -= cooldownRef.current;
    cooldownRef.current = 0;
    let fraction = morphRef.current / morphTime;
    if (fraction > 1) {
      cooldownRef.current = cooldownTime;
      fraction = 1;
    }
    setStyles(fraction);
    if (fraction === 1) {
      textIndexRef.current++;
    }
  }, [setStyles]);
  const doCooldown = useCallback(() => {
    morphRef.current = 0;
    const [current1, current2] = [text1Ref.current, text2Ref.current];
    if (current1 && current2) {
      current2.style.filter = "none";
      current2.style.opacity = "100%";
      current1.style.filter = "none";
      current1.style.opacity = "0%";
    }
  }, []);
  useEffect(() => {
    let animationFrameId;
    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const newTime = /* @__PURE__ */ new Date();
      const dt = (newTime.getTime() - timeRef.current.getTime()) / 1e3;
      timeRef.current = newTime;
      cooldownRef.current -= dt;
      if (cooldownRef.current <= 0) doMorph();
      else doCooldown();
    };
    animate();
    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, [doMorph, doCooldown]);
  return { text1Ref, text2Ref };
};
const Texts = ({ texts }) => {
  const { text1Ref, text2Ref } = useMorphingText(texts);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "absolute inset-x-0 top-0 m-auto inline-block w-full",
        ref: text1Ref
      }
    ),
    /* @__PURE__ */ jsx(
      "span",
      {
        className: "absolute inset-x-0 top-0 m-auto inline-block w-full",
        ref: text2Ref
      }
    )
  ] });
};
const SvgFilters = () => /* @__PURE__ */ jsx(
  "svg",
  {
    id: "filters",
    className: "fixed h-0 w-0",
    preserveAspectRatio: "xMidYMid slice",
    children: /* @__PURE__ */ jsx("defs", { children: /* @__PURE__ */ jsx("filter", { id: "threshold", children: /* @__PURE__ */ jsx(
      "feColorMatrix",
      {
        in: "SourceGraphic",
        type: "matrix",
        values: "1 0 0 0 0\n                  0 1 0 0 0\n                  0 0 1 0 0\n                  0 0 0 255 -140"
      }
    ) }) })
  }
);
const MorphingText = ({
  texts,
  className
}) => /* @__PURE__ */ jsxs(
  "div",
  {
    className: cn(
      "relative mx-auto h-16 w-full max-w-3xl text-center font-sans text-[40pt] leading-none font-bold filter-[url(#threshold)_blur(0.6px)] md:h-24 lg:text-[6rem]",
      className
    ),
    children: [
      /* @__PURE__ */ jsx(Texts, { texts }),
      /* @__PURE__ */ jsx(SvgFilters, {})
    ]
  }
);
function Hero() {
  return /* @__PURE__ */ jsxs(
    "section",
    {
      "aria-label": "Welcome to Blossom",
      className: "relative min-h-[90vh] flex items-center overflow-hidden bg-hero-bg text-hero-text pb-12",
      children: [
        /* @__PURE__ */ jsx(
          "video",
          {
            "aria-hidden": true,
            muted: true,
            loop: true,
            playsInline: true,
            autoPlay: true,
            poster: "/perfume.png",
            className: "z-10 absolute inset-0 w-full h-full object-cover grayscale sepia-125",
            children: /* @__PURE__ */ jsx("source", { src: "/hero.webm", type: "video/mp4" })
          }
        ),
        /* @__PURE__ */ jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10"
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 items-center", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-8", children: [
            /* @__PURE__ */ jsx(BlurFade, { delay: 0.2, inView: true, children: /* @__PURE__ */ jsxs("h1", { className: "text-hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight", children: [
              /* @__PURE__ */ jsxs("span", { className: "text-shadow text-shadow-zinc-950 text-shadow-2xl", children: [
                "Fresh Scents from",
                " "
              ] }),
              /* @__PURE__ */ jsx(AnimatedGradientText, { colorFrom: "#fbbf24", colorTo: "#f97316", children: "Nature's Gift" })
            ] }) }),
            /* @__PURE__ */ jsx(BlurFade, { delay: 0.3, inView: true, children: /* @__PURE__ */ jsx("p", { className: "text-hero-text/70 text-base sm:text-lg max-w-lg leading-relaxed", children: "Discover our collection of natural, eco-friendly perfumes crafted from upcycled fruit peels. Fresh, modern scents that are safe for everyday use." }) }),
            /* @__PURE__ */ jsx(BlurFade, { delay: 0.4, inView: true, children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col sm:flex-row flex-wrap gap-4", children: [
              /* @__PURE__ */ jsx(
                Button,
                {
                  size: "lg",
                  className: "group bg-brand-rose text-white hover:bg-brand-rose/80 active:bg-brand-rose/70 text-base px-8 py-6 h-auto font-semibold transition-all duration-200",
                  asChild: true,
                  children: /* @__PURE__ */ jsxs(Link, { to: "/products", children: [
                    "Shop Now",
                    /* @__PURE__ */ jsx(
                      ArrowRight,
                      {
                        className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform",
                        "aria-hidden": "true"
                      }
                    )
                  ] })
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  size: "lg",
                  variant: "ghost",
                  className: "border border-white/40 hover:bg-white/20 active:bg-white/25 text-base px-8 py-6 h-auto text-white transition-all duration-200",
                  asChild: true,
                  children: /* @__PURE__ */ jsx(Link, { to: "/about", children: "Learn More" })
                }
              )
            ] }) }),
            /* @__PURE__ */ jsx(BlurFade, { delay: 0.5, inView: true, children: /* @__PURE__ */ jsx("div", { className: "flex flex-col items-start justify-center w-full", children: /* @__PURE__ */ jsxs("div", { className: "w-full bg-black/25 rounded-2xl p-4 sm:p-6 pb-0! flex flex-col items-center sm:items-start gap-4", children: [
              /* @__PURE__ */ jsxs("dl", { className: "grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full", children: [
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center sm:items-start text-center sm:text-left", children: [
                  /* @__PURE__ */ jsxs("dt", { className: "text-3xl sm:text-4xl font-heading font-black", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: /* @__PURE__ */ jsx(NumberTicker, { value: 10 }) }),
                    /* @__PURE__ */ jsx("span", { className: "ml-px bg-linear-to-b from-lime-200 to-lime-500 bg-clip-text text-transparent", children: "+" })
                  ] }),
                  /* @__PURE__ */ jsx("dd", { className: "text-sm sm:text-sm text-white/70 mt-1", children: "Safe Age" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center sm:items-start text-center sm:text-left", children: [
                  /* @__PURE__ */ jsxs("dt", { className: "text-3xl sm:text-4xl font-heading font-black", children: [
                    /* @__PURE__ */ jsx("span", { className: "text-white", children: /* @__PURE__ */ jsx(NumberTicker, { value: 100 }) }),
                    /* @__PURE__ */ jsx("span", { className: "ml-px bg-linear-to-b from-lime-200 to-lime-500 bg-clip-text text-transparent", children: "%" })
                  ] }),
                  /* @__PURE__ */ jsx("dd", { className: "text-sm sm:text-sm text-white/70 mt-1", children: "Natural" })
                ] }),
                /* @__PURE__ */ jsxs("div", { className: "flex flex-col items-center sm:items-start text-center sm:text-left", children: [
                  /* @__PURE__ */ jsx("dt", { className: "text-3xl sm:text-4xl font-heading font-black bg-linear-to-b from-lime-200 to-lime-500 bg-clip-text text-transparent", children: "Eco" }),
                  /* @__PURE__ */ jsx("dd", { className: "text-sm sm:text-sm text-white/70 mt-1", children: "Friendly" })
                ] })
              ] }),
              /* @__PURE__ */ jsx(Separator, { orientation: "horizontal", className: "mb-0 w-20 h-px bg-white/20" }),
              /* @__PURE__ */ jsx(
                MorphingText,
                {
                  className: "text-emerald-500 relative [&>span]:font-semibold text-center text-lg [&>span]:text-4xl",
                  texts: ["Cruelty-free", "Vegan", "Premium"]
                }
              )
            ] }) }) })
          ] }),
          /* @__PURE__ */ jsx(BlurFade, { delay: 0.3, inView: true, children: /* @__PURE__ */ jsxs("figure", { className: "relative flex justify-center lg:justify-end", children: [
            /* @__PURE__ */ jsx("div", { className: "relative w-full max-w-md lg:max-w-lg", children: /* @__PURE__ */ jsx(
              "img",
              {
                src: "/perfume.png",
                alt: "Blossom natural perfume bottle with fruit peel ingredients",
                className: "relative z-10 w-full h-auto rounded-2xl shadow-2xl border-0"
              }
            ) }),
            /* @__PURE__ */ jsx("figcaption", { className: "sr-only", children: "Blossom eco-friendly perfume made from natural fruit peels" })
          ] }) })
        ] }) })
      ]
    }
  );
}
const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description: "Made from real fruit peels, our fragrances contain only natural ingredients safe for your skin and the environment."
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description: "We upcycle fruit peels that would otherwise go to waste, creating beautiful scents while reducing environmental impact."
  },
  {
    icon: Sparkles,
    title: "Fresh & Modern",
    description: "Contemporary fragrances that feel fresh, vibrant, and perfect for everyday wear. Suitable for ages 10+."
  },
  {
    icon: Heart,
    title: "Premium Quality",
    description: "Each fragrance is carefully crafted to deliver a luxurious experience with long-lasting, natural scent profiles."
  }
];
function Features() {
  return /* @__PURE__ */ jsx("section", { "aria-labelledby": "features-heading", className: "py-16 sm:py-24 bg-secondary", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("header", { className: "text-center mb-10 sm:mb-16", children: [
      /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsx(
        "h2",
        {
          id: "features-heading",
          className: "text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4",
          children: "Why Choose Blossom?"
        }
      ) }),
      /* @__PURE__ */ jsx(BlurFade, { delay: 0.1, inView: true, children: /* @__PURE__ */ jsx("p", { className: "text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto", children: "We transform simple fruit peels into extraordinary fragrances, combining sustainability with premium quality." }) })
    ] }),
    /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8", children: features.map((feature, index) => /* @__PURE__ */ jsx(BlurFade, { delay: 0.1 * index, inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "h-full border border-border shadow-sm hover:shadow-md transition-shadow", children: [
      /* @__PURE__ */ jsxs(CardHeader, { className: "pb-2 sm:pb-4", children: [
        /* @__PURE__ */ jsx(
          "span",
          {
            className: "w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6",
            "aria-hidden": "true",
            children: /* @__PURE__ */ jsx(feature.icon, { className: "w-6 h-6 sm:w-7 sm:h-7 text-primary" })
          }
        ),
        /* @__PURE__ */ jsx(CardTitle, { className: "text-lg sm:text-xl font-heading font-semibold", children: feature.title })
      ] }),
      /* @__PURE__ */ jsx(CardContent, { className: "pt-0", children: /* @__PURE__ */ jsx(CardDescription, { className: "text-sm sm:text-base text-muted-foreground leading-relaxed", children: feature.description }) })
    ] }) }, index)) }),
    /* @__PURE__ */ jsx(Separator, { className: "mt-10 sm:mt-16" })
  ] }) });
}
const products = [
  {
    id: "citrus-bloom",
    name: "Citrus Bloom",
    description: "Fresh orange and lemon peel essence with a hint of jasmine",
    price: "€45",
    image: "/perfume.png",
    badge: "Bestseller",
    notes: "Citrus, Floral"
  },
  {
    id: "berry-mist",
    name: "Berry Mist",
    description: "Delicate berry undertones with a refreshing mist finish",
    price: "€42",
    image: "/perfume.png",
    badge: "New",
    notes: "Berry, Fresh"
  },
  {
    id: "garden-peel",
    name: "Garden Peel",
    description: "Herbal blend with grapefruit and botanical extracts",
    price: "€48",
    image: "/perfume.png",
    badge: "Popular",
    notes: "Herbal, Citrus"
  }
];
function ProductCard({ product }) {
  const navigate = useNavigate();
  const wishlistItems = useWishlistStore((state) => state.items);
  const addToWishlist = useWishlistStore((state) => state.addItem);
  const removeFromWishlist = useWishlistStore((state) => state.removeItem);
  const compareItems = useCompareStore((state) => state.items);
  const addToCompare = useCompareStore((state) => state.addItem);
  const removeFromCompare = useCompareStore((state) => state.removeItem);
  const isInWishlist = wishlistItems.some((item) => item.productId === product.id);
  const isInCompare = compareItems.some((item) => item.productId === product.id);
  const goToDetail = () => {
    navigate({ to: "/product/$productId", params: { productId: product.id } });
  };
  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };
  const handleCompareToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInCompare) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product.id);
    }
  };
  return /* @__PURE__ */ jsx("li", { className: "list-none", children: /* @__PURE__ */ jsxs(Card, { className: "group overflow-hidden border-2 border-[#D4AF37] shadow-sm hover:shadow-md transition-shadow duration-300 relative", children: [
    /* @__PURE__ */ jsx(
      BorderBeam,
      {
        size: 250,
        duration: 8,
        colorFrom: "var(--brand-rose)",
        colorTo: "var(--primary)",
        className: "opacity-0 group-hover:opacity-100 transition-opacity"
      }
    ),
    /* @__PURE__ */ jsxs(
      "figure",
      {
        className: "relative aspect-[4/5] overflow-hidden bg-muted cursor-pointer",
        onClick: goToDetail,
        onKeyDown: (e) => {
          if (e.key === "Enter" || e.key === " ") {
            e.preventDefault();
            goToDetail();
          }
        },
        tabIndex: 0,
        role: "link",
        "aria-label": `View details for ${product.name}`,
        children: [
          /* @__PURE__ */ jsx(
            "img",
            {
              src: product.image,
              alt: `${product.name} fragrance bottle`,
              className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
            }
          ),
          /* @__PURE__ */ jsx(Badge, { className: "absolute top-4 left-4 z-10", children: product.badge }),
          /* @__PURE__ */ jsxs("div", { className: "absolute top-4 right-4 flex flex-col gap-2 z-20", children: [
            /* @__PURE__ */ jsxs(Tooltip, { children: [
              /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
                Button,
                {
                  size: "icon",
                  variant: "outline",
                  onClick: handleWishlistToggle,
                  "aria-label": isInWishlist ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`,
                  className: `shrink-0 bg-background/80 backdrop-blur-sm ${isInWishlist ? "text-red-500 border-red-500 hover:text-red-600 hover:border-red-600" : ""}`,
                  children: /* @__PURE__ */ jsx(Heart, { className: `w-4 h-4 ${isInWishlist ? "fill-current" : ""}` })
                }
              ) }),
              /* @__PURE__ */ jsx(TooltipContent, { children: isInWishlist ? "Remove from wishlist" : "Add to wishlist" })
            ] }),
            /* @__PURE__ */ jsxs(Tooltip, { children: [
              /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
                Button,
                {
                  size: "icon",
                  variant: "outline",
                  onClick: handleCompareToggle,
                  "aria-label": isInCompare ? `Remove ${product.name} from compare` : `Add ${product.name} to compare`,
                  className: `shrink-0 bg-background/80 backdrop-blur-sm ${isInCompare ? "text-primary border-primary" : ""}`,
                  children: /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4" })
                }
              ) }),
              /* @__PURE__ */ jsx(TooltipContent, { children: isInCompare ? "Remove from compare" : "Add to compare" })
            ] })
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxs("figcaption", { className: "sr-only", children: [
            product.name,
            " - ",
            product.notes
          ] })
        ]
      }
    ),
    /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 mb-2", children: [
        /* @__PURE__ */ jsx(Leaf, { className: "w-4 h-4 text-primary", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: product.notes })
      ] }),
      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-heading font-semibold mb-2", children: product.name }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-sm mb-5 leading-relaxed", children: product.description }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "flex items-center justify-between p-0", children: [
        /* @__PURE__ */ jsx(
          "data",
          {
            value: product.price.replace("€", ""),
            className: "text-2xl font-heading font-bold text-primary",
            children: product.price
          }
        ),
        /* @__PURE__ */ jsxs(
          CardAction,
          {
            className: "flex gap-2",
            role: "group",
            "aria-label": `Actions for ${product.name}`,
            children: [
              /* @__PURE__ */ jsxs(Tooltip, { children: [
                /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
                  Button,
                  {
                    size: "default",
                    variant: "outline",
                    onClick: goToDetail,
                    "aria-label": `View details for ${product.name}`,
                    children: "Details"
                  }
                ) }),
                /* @__PURE__ */ jsxs(TooltipContent, { children: [
                  "View ",
                  product.name
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Tooltip, { children: [
                /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { size: "default", "aria-label": `Add ${product.name} to cart`, children: [
                  /* @__PURE__ */ jsx(ShoppingBag, { className: "w-4 h-4 mr-1", "aria-hidden": "true" }),
                  "Buy"
                ] }) }),
                /* @__PURE__ */ jsx(TooltipContent, { children: "Add to cart" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function ProductShowcase() {
  return /* @__PURE__ */ jsx("section", { "aria-labelledby": "showcase-heading", className: "py-24", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
    /* @__PURE__ */ jsxs("header", { className: "text-center mb-16", children: [
      /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "inline-flex items-center gap-2 px-4 py-2 mb-4", children: [
        /* @__PURE__ */ jsx(Flower2, { className: "w-4 h-4", "aria-hidden": "true" }),
        "Featured"
      ] }) }),
      /* @__PURE__ */ jsx(BlurFade, { delay: 0.1, inView: true, children: /* @__PURE__ */ jsx(
        "h2",
        {
          id: "showcase-heading",
          className: "text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4",
          children: "Our Signature Collection"
        }
      ) }),
      /* @__PURE__ */ jsx(BlurFade, { delay: 0.2, inView: true, children: /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground max-w-2xl mx-auto", children: "Each fragrance is crafted from carefully selected fruit peels, delivering unique scents that are both natural and luxurious." }) })
    ] }),
    /* @__PURE__ */ jsx(AnimatedList, { delay: 0.2, children: /* @__PURE__ */ jsx(
      "ul",
      {
        className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0",
        role: "list",
        "aria-label": "Products",
        children: products.map((product) => /* @__PURE__ */ jsx(ProductCard, { product }, product.id))
      }
    ) }),
    /* @__PURE__ */ jsx(BlurFade, { delay: 0.4, inView: true, children: /* @__PURE__ */ jsxs("div", { className: "text-center mt-12", children: [
      /* @__PURE__ */ jsx(Separator, { className: "mb-8" }),
      /* @__PURE__ */ jsx(
        Button,
        {
          size: "lg",
          variant: "outline",
          className: "group border-primary/20 hover:bg-primary/5 text-base px-8 py-6 h-auto",
          asChild: true,
          children: /* @__PURE__ */ jsxs(Link, { to: "/products", search: { featured: "citrus-bloom,berry-mist,garden-peel" }, children: [
            "View All Products",
            /* @__PURE__ */ jsx(
              ArrowRight,
              {
                className: "ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform",
                "aria-hidden": "true"
              }
            )
          ] })
        }
      )
    ] }) })
  ] }) });
}
const Home = () => {
  return /* @__PURE__ */ jsxs("main", { children: [
    /* @__PURE__ */ jsx(Hero, {}),
    /* @__PURE__ */ jsx(Features, {}),
    /* @__PURE__ */ jsx(ProductShowcase, {})
  ] });
};
const SplitComponent = () => /* @__PURE__ */ jsx(Home, {});
export {
  SplitComponent as component
};

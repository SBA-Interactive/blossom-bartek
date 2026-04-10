import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { x as cn, h as Button, i as useCartStore, u as useWishlistStore, F as useCompareStore, q as useSubscriptionStore, W as getProductById, X as getSimilarProducts, C as Card, n as CardHeader, o as CardTitle, l as CardContent, B as BlurFade, b as Badge, T as Tooltip, j as TooltipTrigger, k as TooltipContent, m as Separator } from "./router-CtctPOdV.js";
import * as React from "react";
import { useState, useEffect } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { ArrowLeft01Icon, ArrowRight01Icon } from "@hugeicons/core-free-icons";
import { Slot } from "radix-ui";
import { useParams, Link } from "@tanstack/react-router";
import { ArrowLeft, Home, Leaf, ShoppingBag, Heart, GitCompare, Share2, Package, Award, Shield, HeartHandshake, LeafIcon, Recycle, Droplets, Clock } from "lucide-react";
import ReactMarkdown from "react-markdown";
import { F as FAQ } from "./FAQ-ee-iIzRz.js";
import "class-variance-authority";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
import "zustand";
import "react-dom";
import "zustand/middleware";
import "motion/react";
import "next-themes";
import "sonner";
import "./accordion-6YEcb7e6.js";
const CarouselContext = React.createContext(null);
function useCarousel() {
  const context = React.useContext(CarouselContext);
  if (!context) {
    throw new Error("useCarousel must be used within a <Carousel />");
  }
  return context;
}
function Carousel({
  orientation = "horizontal",
  opts,
  setApi,
  plugins,
  className,
  children,
  ...props
}) {
  const [carouselRef, api] = useEmblaCarousel(
    {
      ...opts,
      axis: orientation === "horizontal" ? "x" : "y"
    },
    plugins
  );
  const [canScrollPrev, setCanScrollPrev] = React.useState(false);
  const [canScrollNext, setCanScrollNext] = React.useState(false);
  const onSelect = React.useCallback((api2) => {
    if (!api2) return;
    setCanScrollPrev(api2.canScrollPrev());
    setCanScrollNext(api2.canScrollNext());
  }, []);
  const scrollPrev = React.useCallback(() => {
    api?.scrollPrev();
  }, [api]);
  const scrollNext = React.useCallback(() => {
    api?.scrollNext();
  }, [api]);
  const handleKeyDown = React.useCallback(
    (event) => {
      if (event.key === "ArrowLeft") {
        event.preventDefault();
        scrollPrev();
      } else if (event.key === "ArrowRight") {
        event.preventDefault();
        scrollNext();
      }
    },
    [scrollPrev, scrollNext]
  );
  React.useEffect(() => {
    if (!api || !setApi) return;
    setApi(api);
  }, [api, setApi]);
  React.useEffect(() => {
    if (!api) return;
    onSelect(api);
    api.on("reInit", onSelect);
    api.on("select", onSelect);
    return () => {
      api?.off("select", onSelect);
    };
  }, [api, onSelect]);
  return /* @__PURE__ */ jsx(
    CarouselContext.Provider,
    {
      value: {
        carouselRef,
        api,
        opts,
        orientation: orientation || (opts?.axis === "y" ? "vertical" : "horizontal"),
        scrollPrev,
        scrollNext,
        canScrollPrev,
        canScrollNext
      },
      children: /* @__PURE__ */ jsx(
        "div",
        {
          onKeyDownCapture: handleKeyDown,
          className: cn("relative", className),
          role: "region",
          "aria-roledescription": "carousel",
          "data-slot": "carousel",
          ...props,
          children
        }
      )
    }
  );
}
function CarouselContent({ className, ...props }) {
  const { carouselRef, orientation } = useCarousel();
  return /* @__PURE__ */ jsx("div", { ref: carouselRef, className: "overflow-hidden", "data-slot": "carousel-content", children: /* @__PURE__ */ jsx(
    "div",
    {
      className: cn("flex", orientation === "horizontal" ? "-ml-4" : "-mt-4 flex-col", className),
      ...props
    }
  ) });
}
function CarouselItem({ className, ...props }) {
  const { orientation } = useCarousel();
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "aria-roledescription": "slide",
      "data-slot": "carousel-item",
      className: cn(
        "min-w-0 shrink-0 grow-0 basis-full",
        orientation === "horizontal" ? "pl-4" : "pt-4",
        className
      ),
      ...props
    }
  );
}
function CarouselPrevious({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}) {
  const { orientation, scrollPrev, canScrollPrev } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      "data-slot": "carousel-previous",
      variant,
      size,
      className: cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal" ? "top-1/2 -left-12 -translate-y-1/2" : "-top-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollPrev,
      onClick: scrollPrev,
      ...props,
      children: [
        /* @__PURE__ */ jsx(HugeiconsIcon, { icon: ArrowLeft01Icon, strokeWidth: 2 }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Previous slide" })
      ]
    }
  );
}
function CarouselNext({
  className,
  variant = "outline",
  size = "icon-sm",
  ...props
}) {
  const { orientation, scrollNext, canScrollNext } = useCarousel();
  return /* @__PURE__ */ jsxs(
    Button,
    {
      "data-slot": "carousel-next",
      variant,
      size,
      className: cn(
        "absolute touch-manipulation rounded-full",
        orientation === "horizontal" ? "top-1/2 -right-12 -translate-y-1/2" : "-bottom-12 left-1/2 -translate-x-1/2 rotate-90",
        className
      ),
      disabled: !canScrollNext,
      onClick: scrollNext,
      ...props,
      children: [
        /* @__PURE__ */ jsx(HugeiconsIcon, { icon: ArrowRight01Icon, strokeWidth: 2 }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Next slide" })
      ]
    }
  );
}
function Breadcrumb({ className, ...props }) {
  return /* @__PURE__ */ jsx("nav", { "aria-label": "breadcrumb", "data-slot": "breadcrumb", className: cn(className), ...props });
}
function BreadcrumbList({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "ol",
    {
      "data-slot": "breadcrumb-list",
      className: cn(
        "flex flex-wrap items-center gap-1.5 text-sm wrap-break-word text-muted-foreground sm:gap-2.5",
        className
      ),
      ...props
    }
  );
}
function BreadcrumbItem({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-slot": "breadcrumb-item",
      className: cn("inline-flex items-center gap-1.5", className),
      ...props
    }
  );
}
function BreadcrumbLink({
  asChild,
  className,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "a";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "breadcrumb-link",
      className: cn("transition-colors hover:text-foreground", className),
      ...props
    }
  );
}
function BreadcrumbPage({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      "data-slot": "breadcrumb-page",
      role: "link",
      "aria-disabled": "true",
      "aria-current": "page",
      className: cn("font-normal text-foreground", className),
      ...props
    }
  );
}
function BreadcrumbSeparator({ children, className, ...props }) {
  return /* @__PURE__ */ jsx(
    "li",
    {
      "data-slot": "breadcrumb-separator",
      role: "presentation",
      "aria-hidden": "true",
      className: cn("[&>svg]:size-3.5", className),
      ...props,
      children: children ?? /* @__PURE__ */ jsx(HugeiconsIcon, { icon: ArrowRight01Icon, strokeWidth: 2 })
    }
  );
}
const MAX_QUANTITY = 50;
const certificateIcons = {
  "Eco Certified": Recycle,
  "Natural Origin": LeafIcon,
  Vegan: HeartHandshake,
  "Cruelty-Free": Shield,
  "ISO Certified": Award
};
function SkipLink() {
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: "#product-main-content",
      className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
      children: "Skip to main content"
    }
  );
}
function SimilarProductCard({ product }) {
  if (!product) return null;
  return /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: { productId: product.id }, className: "group block", children: /* @__PURE__ */ jsxs("article", { className: "border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2", children: [
    /* @__PURE__ */ jsx("div", { className: "aspect-square overflow-hidden bg-muted", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: product.image,
        alt: `${product.name} fragrance`,
        className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
      }
    ) }),
    /* @__PURE__ */ jsxs("div", { className: "p-4", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-sm mb-1", children: product.name }),
      /* @__PURE__ */ jsxs("p", { className: "text-primary font-bold text-lg", children: [
        "€",
        product.price
      ] })
    ] })
  ] }) });
}
function LiveRegion({ message }) {
  const [announce, setAnnounce] = useState("");
  useEffect(() => {
    if (message) {
      setAnnounce(message);
      const timer = setTimeout(() => setAnnounce(""), 1e3);
      return () => clearTimeout(timer);
    }
  }, [message]);
  return /* @__PURE__ */ jsx("div", { role: "status", "aria-live": "polite", "aria-atomic": "true", className: "sr-only", children: announce });
}
function LongDescription({ text }) {
  return /* @__PURE__ */ jsx("div", { className: "text-muted-foreground leading-relaxed", children: /* @__PURE__ */ jsx(
    ReactMarkdown,
    {
      components: {
        h2: ({ children }) => /* @__PURE__ */ jsx("h2", { className: "text-lg font-heading font-semibold mt-6 mb-3", children }),
        p: ({ children }) => /* @__PURE__ */ jsx("p", { className: "mb-3", children }),
        strong: ({ children }) => /* @__PURE__ */ jsx("strong", { className: "font-semibold", children })
      },
      children: text
    }
  ) });
}
function ProductDetailPage() {
  const { productId } = useParams({ from: "/product/$productId" });
  const [quantity, setQuantity] = useState(1);
  const [notification, setNotification] = useState("");
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [isInCompare, setIsInCompare] = useState(false);
  const addItemToCart = useCartStore((state) => state.addItem);
  const addToWishlist = useWishlistStore((state) => state.addItem);
  const removeFromWishlist = useWishlistStore((state) => state.removeItem);
  const isInWishlistStore = useWishlistStore((state) => state.isInWishlist);
  const addToCompare = useCompareStore((state) => state.addItem);
  const removeFromCompare = useCompareStore((state) => state.removeItem);
  const isInCompareStore = useCompareStore((state) => state.isInCompare);
  const items = useCompareStore((state) => state.items);
  const { currentTier, applyDiscount, getDiscount } = useSubscriptionStore();
  const product = getProductById(productId);
  const similarProducts = getSimilarProducts(productId, 4);
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
    if (product) {
      addItemToCart(productId, quantity);
      setNotification(
        `${product.name} added to cart. ${quantity} item(s) - €${product.price * quantity}`
      );
      setTimeout(() => {
        setNotification("");
      }, 3e3);
    }
  };
  const handleBuyNow = () => {
    if (product) {
      addItemToCart(productId, quantity);
      window.location.href = "/cart";
    }
  };
  const handleQuantityChange = (newQty) => {
    const maxAllowed = Math.min(MAX_QUANTITY, product.stock);
    if (newQty >= 1 && newQty <= maxAllowed) {
      setQuantity(newQty);
    }
  };
  const handleShare = async () => {
    const url = window.location.href;
    if (navigator.share) {
      try {
        await navigator.share({
          title: product?.name,
          text: `Check out ${product?.name} - ${product?.description}`,
          url
        });
      } catch {
      }
    } else {
      await navigator.clipboard.writeText(url);
      setNotification("Link copied to clipboard");
      setTimeout(() => setNotification(""), 2e3);
    }
  };
  const handleWishlistToggle = () => {
    if (product) {
      const newState = !isInWishlist;
      setIsInWishlist(newState);
      if (newState) {
        addToWishlist(productId);
        setNotification(`${product.name} added to wishlist`);
      } else {
        removeFromWishlist(productId);
        setNotification(`${product.name} removed from wishlist`);
      }
      setTimeout(() => setNotification(""), 2e3);
    }
  };
  const handleCompareToggle = () => {
    if (product) {
      const newState = !isInCompare;
      setIsInCompare(newState);
      if (newState) {
        if (items.length >= 4) {
          setNotification(`Maximum 4 products can be compared. Remove one first.`);
        } else {
          addToCompare(productId);
          setNotification(`${product.name} added to compare`);
        }
      } else {
        removeFromCompare(productId);
        setNotification(`${product.name} removed from compare`);
      }
      setTimeout(() => setNotification(""), 2e3);
    }
  };
  useEffect(() => {
    if (product) {
      setIsInWishlist(isInWishlistStore(productId));
      setIsInCompare(isInCompareStore(productId));
    }
  }, [productId, isInWishlistStore, isInCompareStore, items]);
  if (!product) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(SkipLink, {}),
      /* @__PURE__ */ jsx(
        "main",
        {
          className: "pt-24 min-h-screen flex items-center justify-center",
          id: "product-main-content",
          children: /* @__PURE__ */ jsxs(Card, { className: "max-w-md mx-auto text-center p-6", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "Product Not Found" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Button, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/products", children: [
              /* @__PURE__ */ jsx(ArrowLeft, { className: "mr-2 w-4 h-4", "aria-hidden": "true" }),
              "Back to Products"
            ] }) }) })
          ] })
        }
      ),
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
        /* @__PURE__ */ jsx(BreadcrumbItem, { children: /* @__PURE__ */ jsx(BreadcrumbPage, { className: "font-medium", children: product.name }) })
      ] }) }) }) }),
      /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-8 lg:gap-12", children: [
        /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("section", { "aria-labelledby": "product-image-heading", className: "relative", children: [
          /* @__PURE__ */ jsxs("h2", { id: "product-image-heading", className: "sr-only", children: [
            product.name,
            " image gallery"
          ] }),
          /* @__PURE__ */ jsx(
            "div",
            {
              className: "absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl",
              "aria-hidden": "true"
            }
          ),
          /* @__PURE__ */ jsxs(Carousel, { className: "relative", opts: { loop: true }, children: [
            /* @__PURE__ */ jsxs(CarouselContent, { children: [
              /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsxs("div", { className: "relative aspect-square rounded-2xl overflow-hidden bg-secondary/30", children: [
                /* @__PURE__ */ jsx(
                  "img",
                  {
                    src: product.image,
                    alt: `${product.name} - Front view`,
                    className: "w-full h-full object-cover"
                  }
                ),
                /* @__PURE__ */ jsx(Badge, { className: "absolute top-4 left-4", variant: "default", children: product.badge })
              ] }) }),
              /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx("div", { className: "relative aspect-square rounded-2xl overflow-hidden bg-secondary/30", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: product.image,
                  alt: `${product.name} - Side view`,
                  className: "w-full h-full object-cover"
                }
              ) }) }),
              /* @__PURE__ */ jsx(CarouselItem, { children: /* @__PURE__ */ jsx("div", { className: "relative aspect-square rounded-2xl overflow-hidden bg-secondary/30", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: product.image,
                  alt: `${product.name} - Back view`,
                  className: "w-full h-full object-cover"
                }
              ) }) })
            ] }),
            /* @__PURE__ */ jsx(CarouselPrevious, { className: "left-4" }),
            /* @__PURE__ */ jsx(CarouselNext, { className: "right-4" })
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(BlurFade, { delay: 0.2, inView: true, children: /* @__PURE__ */ jsxs("section", { "aria-labelledby": "product-info-heading", children: [
          /* @__PURE__ */ jsx("h2", { id: "product-info-heading", className: "sr-only", children: "Product information" }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx(Leaf, { className: "w-4 h-4 text-primary", "aria-hidden": "true" }),
            /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground uppercase tracking-wider", children: [
              product.category,
              " · ",
              product.size
            ] })
          ] }),
          /* @__PURE__ */ jsx("h1", { className: "text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4", children: product.name }),
          /* @__PURE__ */ jsx("div", { className: "mb-4", children: hasDiscount ? /* @__PURE__ */ jsxs("div", { className: "flex items-baseline gap-2", children: [
            /* @__PURE__ */ jsxs("span", { className: "text-2xl sm:text-3xl font-heading font-bold text-primary", children: [
              "€",
              discountedPrice.toFixed(2)
            ] }),
            /* @__PURE__ */ jsxs("span", { className: "text-lg text-muted-foreground line-through", children: [
              "€",
              product.price
            ] }),
            /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "text-xs", children: [
              discountPercentage,
              "% off"
            ] })
          ] }) : /* @__PURE__ */ jsxs("span", { className: "text-2xl sm:text-3xl font-heading font-bold text-primary", children: [
            "€",
            product.price
          ] }) }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed mb-6", children: product.description }),
          /* @__PURE__ */ jsxs("div", { className: "mb-6", children: [
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
              /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: "Quantity:" }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
                "limit: ",
                Math.min(MAX_QUANTITY, product.stock)
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2 mb-3", children: [
              /* @__PURE__ */ jsxs("div", { className: "flex items-center", role: "group", "aria-label": "Quantity selector", children: [
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "icon",
                    onClick: () => handleQuantityChange(quantity - 1),
                    disabled: quantity <= 1,
                    "aria-label": "Decrease quantity",
                    className: "w-10 h-10",
                    children: "−"
                  }
                ),
                /* @__PURE__ */ jsx(
                  "input",
                  {
                    type: "number",
                    min: 1,
                    max: MAX_QUANTITY,
                    value: quantity,
                    onChange: (e) => handleQuantityChange(parseInt(e.target.value) || 1),
                    className: "w-16 h-10 flex items-center justify-center text-lg font-medium text-center border-y border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                  }
                ),
                /* @__PURE__ */ jsx(
                  Button,
                  {
                    variant: "outline",
                    size: "icon",
                    onClick: () => handleQuantityChange(quantity + 1),
                    disabled: quantity >= Math.min(MAX_QUANTITY, product.stock),
                    "aria-label": "Increase quantity",
                    className: "w-10 h-10",
                    children: "+"
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("span", { className: "text-sm text-muted-foreground", children: [
                "(",
                product.stock,
                " available in stock)"
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "flex sm:flex-row gap-2", children: [
              /* @__PURE__ */ jsxs(
                Button,
                {
                  size: "lg",
                  className: "flex-1 sm:h-10 h-12 group",
                  onClick: handleAddToCart,
                  children: [
                    /* @__PURE__ */ jsx(ShoppingBag, { className: "mr-2 w-5 h-5", "aria-hidden": "true" }),
                    "Add to Cart"
                  ]
                }
              ),
              /* @__PURE__ */ jsx(
                Button,
                {
                  size: "lg",
                  variant: "secondary",
                  className: "flex-1 sm:h-10 h-12 group",
                  onClick: handleBuyNow,
                  children: "Buy Now"
                }
              )
            ] })
          ] }),
          /* @__PURE__ */ jsxs(
            "div",
            {
              className: "flex flex-wrap gap-2 mb-6",
              role: "group",
              "aria-label": "Product actions",
              children: [
                /* @__PURE__ */ jsxs(Tooltip, { children: [
                  /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      variant: isInWishlist ? "default" : "outline",
                      size: "sm",
                      className: `gap-2 transition-all ${isInWishlist ? "font-bold border-primary bg-primary text-primary-foreground" : ""}`,
                      onClick: handleWishlistToggle,
                      "aria-pressed": isInWishlist,
                      children: [
                        /* @__PURE__ */ jsx(
                          Heart,
                          {
                            className: `w-4 h-4 ${isInWishlist ? "fill-primary-foreground" : "text-destructive"}`,
                            "aria-hidden": "true"
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline font-semibold", children: isInWishlist ? "Saved" : "Save" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(TooltipContent, { children: isInWishlist ? "Remove from wishlist" : "Save to wishlist" })
                ] }),
                /* @__PURE__ */ jsxs(Tooltip, { children: [
                  /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                    Button,
                    {
                      variant: isInCompare ? "default" : "outline",
                      size: "sm",
                      className: `gap-2 transition-all ${isInCompare ? "font-bold border-primary bg-primary text-primary-foreground" : ""}`,
                      onClick: handleCompareToggle,
                      "aria-pressed": isInCompare,
                      children: [
                        /* @__PURE__ */ jsx(
                          GitCompare,
                          {
                            className: `w-4 h-4 ${isInCompare ? "fill-primary-foreground" : "text-primary"}`,
                            "aria-hidden": "true"
                          }
                        ),
                        /* @__PURE__ */ jsx("span", { className: "hidden sm:inline font-semibold", children: isInCompare ? "In Comparison" : "Compare" })
                      ]
                    }
                  ) }),
                  /* @__PURE__ */ jsx(TooltipContent, { children: isInCompare ? "Remove from compare" : "Add to compare" })
                ] }),
                /* @__PURE__ */ jsxs(Tooltip, { children: [
                  /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", size: "sm", className: "gap-2", onClick: handleShare, children: [
                    /* @__PURE__ */ jsx(Share2, { className: "w-4 h-4", "aria-hidden": "true" }),
                    /* @__PURE__ */ jsx("span", { className: "hidden sm:inline", children: "Share" })
                  ] }) }),
                  /* @__PURE__ */ jsx(TooltipContent, { children: "Share this product" })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsx(Separator, { className: "my-6" }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-sm", children: [
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#product-details",
                className: "text-primary hover:underline flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx(Package, { className: "w-4 h-4" }),
                  "Product Details"
                ]
              }
            ),
            /* @__PURE__ */ jsxs(
              "a",
              {
                href: "#certificates",
                className: "text-primary hover:underline flex items-center gap-1",
                children: [
                  /* @__PURE__ */ jsx(Award, { className: "w-4 h-4" }),
                  "Certifications"
                ]
              }
            )
          ] })
        ] }) })
      ] }),
      /* @__PURE__ */ jsx(BlurFade, { delay: 0.3, inView: true, children: /* @__PURE__ */ jsxs("section", { id: "certificates", "aria-labelledby": "certificates-heading", className: "mt-16", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            id: "certificates-heading",
            className: "text-2xl font-heading font-bold mb-6 flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsx(Award, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }),
              "Certificates & Certifications"
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4", children: product.certificates.map((cert) => {
          const IconComponent = certificateIcons[cert] || Award;
          return /* @__PURE__ */ jsx(Card, { className: "text-center p-4 bg-muted/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "p-0", children: [
            /* @__PURE__ */ jsx("div", { className: "w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3", children: /* @__PURE__ */ jsx(IconComponent, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }) }),
            /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: cert })
          ] }) }, cert);
        }) })
      ] }) }),
      /* @__PURE__ */ jsx(BlurFade, { delay: 0.35, inView: true, children: /* @__PURE__ */ jsxs("section", { "aria-labelledby": "about-heading", className: "mt-16", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex gap-4 text-sm mb-4", children: [
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#product-details",
              className: "text-primary hover:underline flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsx(Package, { className: "w-4 h-4" }),
                "Product Details"
              ]
            }
          ),
          /* @__PURE__ */ jsxs(
            "a",
            {
              href: "#certificates",
              className: "text-primary hover:underline flex items-center gap-1",
              children: [
                /* @__PURE__ */ jsx(Award, { className: "w-4 h-4" }),
                "Certifications"
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsx("h2", { id: "about-heading", className: "text-2xl font-heading font-bold mb-6", children: "About This Fragrance" }),
        /* @__PURE__ */ jsx(LongDescription, { text: product.longDescription })
      ] }) }),
      /* @__PURE__ */ jsx(BlurFade, { delay: 0.4, inView: true, children: /* @__PURE__ */ jsxs("section", { id: "product-details", "aria-labelledby": "details-heading", className: "mt-16", children: [
        /* @__PURE__ */ jsx("h2", { id: "details-heading", className: "text-2xl font-heading font-bold mb-6", children: "Product Details" }),
        /* @__PURE__ */ jsxs(Card, { className: "mb-6", children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-lg", children: "Scent Profile" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-3 gap-4", children: [
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-xs text-muted-foreground uppercase mb-2", children: "Top Notes" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: product.notes.top })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-xs text-muted-foreground uppercase mb-2", children: "Heart Notes" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: product.notes.heart })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "p-4 bg-muted rounded-lg", children: [
              /* @__PURE__ */ jsx("span", { className: "block text-xs text-muted-foreground uppercase mb-2", children: "Base Notes" }),
              /* @__PURE__ */ jsx("span", { className: "text-sm font-medium", children: product.notes.base })
            ] })
          ] }) })
        ] }),
        /* @__PURE__ */ jsx(Card, { children: /* @__PURE__ */ jsx(CardContent, { className: "p-0", children: /* @__PURE__ */ jsx("table", { className: "w-full", children: /* @__PURE__ */ jsxs("tbody", { children: [
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 w-48 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Package, { className: "w-4 h-4 text-primary" }),
              "Bottle Size"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground", children: product.size })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Droplets, { className: "w-4 h-4 text-primary" }),
              "Net Quantity"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground", children: product.size })
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
              product.id.toUpperCase()
            ] })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-primary" }),
              "Last 30 Days Price"
            ] }),
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 text-muted-foreground", children: [
              "€",
              product.price,
              " (Current)"
            ] })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Droplets, { className: "w-4 h-4 text-primary" }),
              "How to Use"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground", children: product.howToUse })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Package, { className: "w-4 h-4 text-primary" }),
              "Ingredients"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground font-mono text-sm", children: product.ingredients })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Shield, { className: "w-4 h-4 text-primary" }),
              "Storage"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground", children: product.storage })
          ] }),
          /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsxs("td", { className: "py-4 px-6 font-medium flex items-center gap-2", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-4 h-4 text-primary" }),
              "Lifespan"
            ] }),
            /* @__PURE__ */ jsx("td", { className: "py-4 px-6 text-muted-foreground", children: product.lifespan })
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
      similarProducts.length > 0 && /* @__PURE__ */ jsx(BlurFade, { delay: 0.5, inView: true, children: /* @__PURE__ */ jsxs("section", { "aria-labelledby": "similar-heading", className: "mt-16", children: [
        /* @__PURE__ */ jsxs(
          "h2",
          {
            id: "similar-heading",
            className: "text-2xl font-heading font-bold mb-6 flex items-center gap-3",
            children: [
              /* @__PURE__ */ jsx(Package, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }),
              "Similar Products"
            ]
          }
        ),
        /* @__PURE__ */ jsx("div", { className: "grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6", children: similarProducts.map((p) => /* @__PURE__ */ jsx(SimilarProductCard, { product: p }, p.id)) })
      ] }) })
    ] }) }),
    /* @__PURE__ */ jsx(LiveRegion, { message: notification })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsx(ProductDetailPage, {});
export {
  SplitComponent as component
};

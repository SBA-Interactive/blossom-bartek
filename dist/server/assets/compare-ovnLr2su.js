import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { F as useCompareStore, i as useCartStore, B as BlurFade, A as Avatar, a as AvatarFallback, E as Empty, c as EmptyHeader, d as EmptyMedia, e as EmptyTitle, f as EmptyDescription, g as EmptyContent, h as Button, b as Badge } from "./router-CtctPOdV.js";
import { Link } from "@tanstack/react-router";
import { GitCompare, Package, ArrowRight, X, ShoppingBag } from "lucide-react";
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
  return /* @__PURE__ */ jsx(
    "a",
    {
      href: "#compare-main-content",
      className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
      children: "Skip to main content"
    }
  );
}
function ComparePage() {
  const items = useCompareStore((state) => state.items);
  const removeItem = useCompareStore((state) => state.removeItem);
  const clearCompare = useCompareStore((state) => state.clearCompare);
  const addItem = useCartStore((state) => state.addItem);
  const handleAddToCart = (productId) => {
    addItem(productId, 1);
  };
  if (items.length === 0) {
    return /* @__PURE__ */ jsxs(Fragment, { children: [
      /* @__PURE__ */ jsx(SkipLink, {}),
      /* @__PURE__ */ jsx("main", { className: "pt-24 min-h-screen", id: "compare-main-content", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16", children: /* @__PURE__ */ jsxs(BlurFade, { inView: true, children: [
        /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-3 mb-8", children: [
          /* @__PURE__ */ jsx(Avatar, { className: "w-12 h-12 bg-primary/10", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(GitCompare, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }) }) }),
          /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground", children: "Compare Products" })
        ] }),
        /* @__PURE__ */ jsxs(Empty, { children: [
          /* @__PURE__ */ jsxs(EmptyHeader, { children: [
            /* @__PURE__ */ jsx(EmptyMedia, { variant: "icon", children: /* @__PURE__ */ jsx(GitCompare, { className: "w-10 h-10" }) }),
            /* @__PURE__ */ jsx(EmptyTitle, { children: "No products to compare" }),
            /* @__PURE__ */ jsx(EmptyDescription, { children: "Add products to compare their features and prices." })
          ] }),
          /* @__PURE__ */ jsx(EmptyContent, { children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "lg", children: /* @__PURE__ */ jsxs(Link, { to: "/products", children: [
            /* @__PURE__ */ jsx(Package, { className: "mr-2 w-4 h-4" }),
            "Browse Products",
            /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
          ] }) }) })
        ] })
      ] }) }) })
    ] });
  }
  const specs = [
    { label: "Category", key: "category" },
    { label: "Size", key: "size" },
    { label: "Price", key: "price", format: (v) => `€${v}` },
    { label: "Top Notes", key: "notes.top", get: (p) => p.notes.top },
    { label: "Heart Notes", key: "notes.heart", get: (p) => p.notes.heart },
    { label: "Base Notes", key: "notes.base", get: (p) => p.notes.base }
  ];
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SkipLink, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-24 min-h-screen", id: "compare-main-content", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16", children: /* @__PURE__ */ jsxs(BlurFade, { inView: true, children: [
      /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx(Avatar, { className: "w-12 h-12 bg-primary/10", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(GitCompare, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }) }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground", children: "Compare Products" }),
        /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "ml-2", children: [
          items.length,
          " products"
        ] }),
        /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "sm", onClick: clearCompare, className: "ml-auto", children: "Clear All" })
      ] }),
      /* @__PURE__ */ jsx("div", { className: "overflow-x-auto", children: /* @__PURE__ */ jsxs("table", { className: "w-full border-collapse", children: [
        /* @__PURE__ */ jsx("thead", { children: /* @__PURE__ */ jsxs("tr", { children: [
          /* @__PURE__ */ jsx("th", { className: "p-4 text-left border-b w-40 bg-muted/50" }),
          items.map((item) => /* @__PURE__ */ jsx("th", { className: "p-4 border-b w-64", children: /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "icon",
                className: "absolute -top-2 -right-2 h-6 w-6",
                onClick: () => removeItem(item.productId),
                children: /* @__PURE__ */ jsx(X, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsxs(Link, { to: "/product/$productId", params: { productId: item.productId }, children: [
              /* @__PURE__ */ jsx("div", { className: "aspect-square rounded-lg overflow-hidden bg-muted mb-3", children: /* @__PURE__ */ jsx(
                "img",
                {
                  src: item.product.image,
                  alt: item.product.name,
                  className: "w-full h-full object-cover"
                }
              ) }),
              /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-lg", children: item.product.name })
            ] }),
            /* @__PURE__ */ jsxs("p", { className: "text-primary font-bold text-xl mt-1", children: [
              "€",
              item.product.price
            ] }),
            /* @__PURE__ */ jsxs(
              Button,
              {
                size: "sm",
                className: "w-full mt-2",
                onClick: () => handleAddToCart(item.productId),
                children: [
                  /* @__PURE__ */ jsx(ShoppingBag, { className: "w-4 h-4 mr-2" }),
                  "Add to Cart"
                ]
              }
            )
          ] }) }, item.id))
        ] }) }),
        /* @__PURE__ */ jsxs("tbody", { children: [
          specs.map((spec) => /* @__PURE__ */ jsxs("tr", { className: "border-b", children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 font-medium text-muted-foreground bg-muted/30", children: spec.label }),
            items.map((item) => {
              let value;
              if (spec.get) {
                value = spec.get(item.product);
              } else {
                value = item.product[spec.key];
              }
              return /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: spec.format ? spec.format(value) : value }, item.id);
            })
          ] }, spec.key)),
          /* @__PURE__ */ jsxs("tr", { children: [
            /* @__PURE__ */ jsx("td", { className: "p-4 font-medium text-muted-foreground bg-muted/30", children: "Certifications" }),
            items.map((item) => /* @__PURE__ */ jsx("td", { className: "p-4 text-center", children: /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-1 justify-center", children: item.product.certificates.map((cert) => /* @__PURE__ */ jsx(Badge, { variant: "outline", className: "text-xs", children: cert }, cert)) }) }, item.id))
          ] })
        ] })
      ] }) })
    ] }) }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsx(ComparePage, {});
export {
  SplitComponent as component
};

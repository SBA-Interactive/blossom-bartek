import { jsxs, Fragment, jsx } from "react/jsx-runtime";
import { u as useWishlistStore, B as BlurFade, A as Avatar, a as AvatarFallback, b as Badge, E as Empty, c as EmptyHeader, d as EmptyMedia, e as EmptyTitle, f as EmptyDescription, g as EmptyContent, h as Button, i as useCartStore, C as Card, T as Tooltip, j as TooltipTrigger, k as TooltipContent } from "./router-CtctPOdV.js";
import { Link } from "@tanstack/react-router";
import { Heart, Package, ArrowRight, ShoppingBag, Trash2 } from "lucide-react";
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
      href: "#wishlist-main-content",
      className: "sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary",
      children: "Skip to main content"
    }
  );
}
function WishlistItemCard({ item }) {
  const removeItem = useWishlistStore((state) => state.removeItem);
  const addItem = useCartStore((state) => state.addItem);
  const handleAddToCart = () => {
    addItem(item.productId, 1);
  };
  return /* @__PURE__ */ jsx(Card, { className: "overflow-hidden", children: /* @__PURE__ */ jsxs("div", { className: "flex gap-4 p-4", children: [
    /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: { productId: item.productId }, className: "shrink-0", children: /* @__PURE__ */ jsx("div", { className: "w-20 h-20 rounded-lg overflow-hidden bg-muted", children: /* @__PURE__ */ jsx(
      "img",
      {
        src: item.image,
        alt: item.name,
        className: "w-full h-full object-cover"
      }
    ) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 min-w-0", children: [
      /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: { productId: item.productId }, children: /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-lg truncate hover:text-primary transition-colors", children: item.name }) }),
      /* @__PURE__ */ jsxs("p", { className: "text-primary font-bold text-xl mt-1", children: [
        "€",
        item.price
      ] }),
      /* @__PURE__ */ jsxs("p", { className: "text-xs text-muted-foreground mt-1", children: [
        "Added ",
        new Date(item.addedAt).toLocaleDateString()
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2 shrink-0", children: [
      /* @__PURE__ */ jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "icon", onClick: handleAddToCart, children: /* @__PURE__ */ jsx(ShoppingBag, { className: "w-4 h-4" }) }) }),
        /* @__PURE__ */ jsx(TooltipContent, { children: "Add to cart" })
      ] }),
      /* @__PURE__ */ jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            onClick: () => removeItem(item.productId),
            children: /* @__PURE__ */ jsx(Trash2, { className: "w-4 h-4 text-destructive" })
          }
        ) }),
        /* @__PURE__ */ jsx(TooltipContent, { children: "Remove from wishlist" })
      ] })
    ] })
  ] }) });
}
function WishlistPage() {
  const items = useWishlistStore((state) => state.items);
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(SkipLink, {}),
    /* @__PURE__ */ jsx("main", { className: "pt-24 min-h-screen", id: "wishlist-main-content", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16", children: /* @__PURE__ */ jsxs(BlurFade, { inView: true, children: [
      /* @__PURE__ */ jsxs("header", { className: "flex items-center gap-3 mb-8", children: [
        /* @__PURE__ */ jsx(Avatar, { className: "w-12 h-12 bg-primary/10", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(Heart, { className: "w-6 h-6 text-primary", "aria-hidden": "true" }) }) }),
        /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl font-heading font-bold text-foreground", children: "Wishlist" }),
        items.length > 0 && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "ml-2", children: [
          items.length,
          " ",
          items.length === 1 ? "item" : "items"
        ] })
      ] }),
      items.length === 0 ? /* @__PURE__ */ jsxs(Empty, { children: [
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
      ] }) : /* @__PURE__ */ jsx("div", { className: "space-y-4", children: items.map((item) => /* @__PURE__ */ jsx(WishlistItemCard, { item }, item.id)) })
    ] }) }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsx(WishlistPage, {});
export {
  SplitComponent as component
};

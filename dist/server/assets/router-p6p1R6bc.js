import { Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { SunMedium, Moon, Mail, Lock, EyeOff, Eye, User, Sparkles, CreditCard, Heart, LogOut, ShoppingBag, Globe, Menu, Flower2, Leaf, CheckCircle, ArrowRight, Cookie, X, GitCompare, Home, AlertTriangle } from "lucide-react";
import { cva } from "class-variance-authority";
import { Slot, NavigationMenu as NavigationMenu$1, DropdownMenu as DropdownMenu$1, Separator as Separator$1, Label as Label$1, Dialog as Dialog$1, Tabs as Tabs$1, ScrollArea as ScrollArea$1, Avatar as Avatar$1, Progress as Progress$1 } from "radix-ui";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { create } from "zustand";
import React__default, { useState, useRef, useEffect } from "react";
import { flushSync } from "react-dom";
import { persist } from "zustand/middleware";
import { HugeiconsIcon } from "@hugeicons/react";
import { Cancel01Icon, Loading03Icon, InstagramFreeIcons, NewTwitterFreeIcons, Facebook02FreeIcons, MultiplicationSignCircleIcon, Alert02Icon, InformationCircleIcon, CheckmarkCircle02Icon } from "@hugeicons/core-free-icons";
import { useInView, AnimatePresence, motion } from "motion/react";
import { useTheme, ThemeProvider } from "next-themes";
import { Toaster as Toaster$1 } from "sonner";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva("group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground hover:bg-primary/80",
      outline: "border-border bg-background shadow-xs hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:border-input dark:bg-input/30 dark:hover:bg-input/50",
      secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 aria-expanded:bg-secondary aria-expanded:text-secondary-foreground",
      ghost: "hover:bg-muted hover:text-foreground aria-expanded:bg-muted aria-expanded:text-foreground dark:hover:bg-muted/50",
      destructive: "bg-destructive/10 text-destructive hover:bg-destructive/20 focus-visible:border-destructive/40 focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:hover:bg-destructive/30 dark:focus-visible:ring-destructive/40",
      link: "text-primary underline-offset-4 hover:underline"
    },
    size: {
      default: "h-9 gap-1.5 px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-2 has-data-[icon=inline-start]:pl-2",
      xs: "h-6 gap-1 rounded-[min(var(--radius-md),8px)] px-2 text-xs in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 [&_svg:not([class*='size-'])]:size-3",
      sm: "h-8 gap-1 rounded-[min(var(--radius-md),10px)] px-2.5 in-data-[slot=button-group]:rounded-md has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5",
      lg: "h-10 gap-1.5 px-2.5 has-data-[icon=inline-end]:pr-3 has-data-[icon=inline-start]:pl-3",
      icon: "size-9",
      "icon-xs": "size-6 rounded-[min(var(--radius-md),8px)] in-data-[slot=button-group]:rounded-md [&_svg:not([class*='size-'])]:size-3",
      "icon-sm": "size-8 rounded-[min(var(--radius-md),10px)] in-data-[slot=button-group]:rounded-md",
      "icon-lg": "size-10"
    }
  },
  defaultVariants: {
    variant: "default",
    size: "default"
  }
});
function Button(t0) {
  const $ = c(16);
  let className;
  let props;
  let t1;
  let t2;
  let t3;
  if ($[0] !== t0) {
    ({
      className,
      variant: t1,
      size: t2,
      asChild: t3,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
    t3 = $[5];
  }
  const variant = t1 === void 0 ? "default" : t1;
  const size = t2 === void 0 ? "default" : t2;
  const asChild = t3 === void 0 ? false : t3;
  const Comp = asChild ? Slot.Root : "button";
  let t4;
  if ($[6] !== className || $[7] !== size || $[8] !== variant) {
    t4 = cn(buttonVariants({
      variant,
      size,
      className
    }));
    $[6] = className;
    $[7] = size;
    $[8] = variant;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== Comp || $[11] !== props || $[12] !== size || $[13] !== t4 || $[14] !== variant) {
    t5 = /* @__PURE__ */ jsx(Comp, { "data-slot": "button", "data-variant": variant, "data-size": size, className: t4, ...props });
    $[10] = Comp;
    $[11] = props;
    $[12] = size;
    $[13] = t4;
    $[14] = variant;
    $[15] = t5;
  } else {
    t5 = $[15];
  }
  return t5;
}
const badgeVariants = cva("group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!", {
  variants: {
    variant: {
      default: "bg-primary text-primary-foreground [a]:hover:bg-primary/80",
      secondary: "bg-secondary text-secondary-foreground [a]:hover:bg-secondary/80",
      destructive: "bg-destructive/10 text-destructive focus-visible:ring-destructive/20 dark:bg-destructive/20 dark:focus-visible:ring-destructive/40 [a]:hover:bg-destructive/20",
      outline: "border-border text-foreground [a]:hover:bg-muted [a]:hover:text-muted-foreground",
      ghost: "hover:bg-muted hover:text-muted-foreground dark:hover:bg-muted/50",
      link: "text-primary underline-offset-4 hover:underline"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Badge(t0) {
  const $ = c(13);
  let className;
  let props;
  let t1;
  let t2;
  if ($[0] !== t0) {
    ({
      className,
      variant: t1,
      asChild: t2,
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
  const variant = t1 === void 0 ? "default" : t1;
  const asChild = t2 === void 0 ? false : t2;
  const Comp = asChild ? Slot.Root : "span";
  let t3;
  if ($[5] !== className || $[6] !== variant) {
    t3 = cn(badgeVariants({
      variant
    }), className);
    $[5] = className;
    $[6] = variant;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== Comp || $[9] !== props || $[10] !== t3 || $[11] !== variant) {
    t4 = /* @__PURE__ */ jsx(Comp, { "data-slot": "badge", "data-variant": variant, className: t3, ...props });
    $[8] = Comp;
    $[9] = props;
    $[10] = t3;
    $[11] = variant;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  return t4;
}
function NavigationMenu(t0) {
  const $ = c(15);
  let children;
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      children,
      viewport: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
  }
  const viewport = t1 === void 0 ? true : t1;
  let t2;
  if ($[5] !== className) {
    t2 = cn("group/navigation-menu relative flex max-w-max flex-1 items-center justify-center", className);
    $[5] = className;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] !== viewport) {
    t3 = viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {});
    $[7] = viewport;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  let t4;
  if ($[9] !== children || $[10] !== props || $[11] !== t2 || $[12] !== t3 || $[13] !== viewport) {
    t4 = /* @__PURE__ */ jsxs(NavigationMenu$1.Root, { "data-slot": "navigation-menu", "data-viewport": viewport, className: t2, ...props, children: [
      children,
      t3
    ] });
    $[9] = children;
    $[10] = props;
    $[11] = t2;
    $[12] = t3;
    $[13] = viewport;
    $[14] = t4;
  } else {
    t4 = $[14];
  }
  return t4;
}
function NavigationMenuList(t0) {
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
    t1 = cn("group flex flex-1 list-none items-center justify-center gap-0", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(NavigationMenu$1.List, { "data-slot": "navigation-menu-list", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function NavigationMenuItem(t0) {
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
    t1 = cn("relative", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(NavigationMenu$1.Item, { "data-slot": "navigation-menu-item", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
cva("group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted");
function NavigationMenuViewport(t0) {
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
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = cn("absolute top-full left-0 isolate z-50 flex justify-center");
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  let t2;
  if ($[4] !== className) {
    t2 = cn("origin-top-center relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 duration-100 md:w-(--radix-navigation-menu-viewport-width) data-open:animate-in data-open:zoom-in-90 data-closed:animate-out data-closed:zoom-out-90", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== props || $[7] !== t2) {
    t3 = /* @__PURE__ */ jsx("div", { className: t1, children: /* @__PURE__ */ jsx(NavigationMenu$1.Viewport, { "data-slot": "navigation-menu-viewport", className: t2, ...props }) });
    $[6] = props;
    $[7] = t2;
    $[8] = t3;
  } else {
    t3 = $[8];
  }
  return t3;
}
function NavigationMenuLink(t0) {
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
    t1 = cn("flex items-center gap-1.5 rounded-md p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-sm data-[active=true]:bg-muted/50 data-[active=true]:hover:bg-muted data-[active=true]:focus:bg-muted [&_svg:not([class*='size-'])]:size-4", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(NavigationMenu$1.Link, { "data-slot": "navigation-menu-link", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function DropdownMenu(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(DropdownMenu$1.Root, { "data-slot": "dropdown-menu", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DropdownMenuTrigger(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(DropdownMenu$1.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DropdownMenuContent(t0) {
  const $ = c(12);
  let className;
  let props;
  let t1;
  let t2;
  if ($[0] !== t0) {
    ({
      className,
      align: t1,
      sideOffset: t2,
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
  const align = t1 === void 0 ? "start" : t1;
  const sideOffset = t2 === void 0 ? 4 : t2;
  let t3;
  if ($[5] !== className) {
    t3 = cn("dark z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!", className);
    $[5] = className;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== align || $[8] !== props || $[9] !== sideOffset || $[10] !== t3) {
    t4 = /* @__PURE__ */ jsx(DropdownMenu$1.Portal, { children: /* @__PURE__ */ jsx(DropdownMenu$1.Content, { "data-slot": "dropdown-menu-content", sideOffset, align, className: t3, ...props }) });
    $[7] = align;
    $[8] = props;
    $[9] = sideOffset;
    $[10] = t3;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  return t4;
}
function DropdownMenuItem(t0) {
  const $ = c(12);
  let className;
  let inset;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      inset,
      variant: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = inset;
    $[3] = props;
    $[4] = t1;
  } else {
    className = $[1];
    inset = $[2];
    props = $[3];
    t1 = $[4];
  }
  const variant = t1 === void 0 ? "default" : t1;
  let t2;
  if ($[5] !== className) {
    t2 = cn("group/dropdown-menu-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive", className);
    $[5] = className;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] !== inset || $[8] !== props || $[9] !== t2 || $[10] !== variant) {
    t3 = /* @__PURE__ */ jsx(DropdownMenu$1.Item, { "data-slot": "dropdown-menu-item", "data-inset": inset, "data-variant": variant, className: t2, ...props });
    $[7] = inset;
    $[8] = props;
    $[9] = t2;
    $[10] = variant;
    $[11] = t3;
  } else {
    t3 = $[11];
  }
  return t3;
}
function DropdownMenuLabel(t0) {
  const $ = c(10);
  let className;
  let inset;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      inset,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = inset;
    $[3] = props;
  } else {
    className = $[1];
    inset = $[2];
    props = $[3];
  }
  let t1;
  if ($[4] !== className) {
    t1 = cn("px-2 py-1.5 text-xs font-medium text-muted-foreground data-inset:pl-8", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  let t2;
  if ($[6] !== inset || $[7] !== props || $[8] !== t1) {
    t2 = /* @__PURE__ */ jsx(DropdownMenu$1.Label, { "data-slot": "dropdown-menu-label", "data-inset": inset, className: t1, ...props });
    $[6] = inset;
    $[7] = props;
    $[8] = t1;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  return t2;
}
function DropdownMenuSeparator(t0) {
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
    t1 = cn("-mx-1 my-1 h-px bg-border", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(DropdownMenu$1.Separator, { "data-slot": "dropdown-menu-separator", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function TooltipProvider(t0) {
  const $ = c(8);
  let props;
  let t1;
  let t2;
  if ($[0] !== t0) {
    ({
      delayDuration: t1,
      skipOffset: t2,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
    $[2] = t1;
    $[3] = t2;
  } else {
    props = $[1];
    t1 = $[2];
    t2 = $[3];
  }
  const delayDuration = t1 === void 0 ? 300 : t1;
  const skipOffset = t2 === void 0 ? 0 : t2;
  let t3;
  if ($[4] !== delayDuration || $[5] !== props || $[6] !== skipOffset) {
    t3 = /* @__PURE__ */ jsx(TooltipPrimitive.Provider, { "data-slot": "tooltip-provider", delayDuration, skipOffset, ...props });
    $[4] = delayDuration;
    $[5] = props;
    $[6] = skipOffset;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  return t3;
}
function Tooltip(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function TooltipTrigger(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function TooltipContent(t0) {
  const $ = c(13);
  let children;
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      sideOffset: t1,
      children,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
  }
  const sideOffset = t1 === void 0 ? 0 : t1;
  let t2;
  if ($[5] !== className) {
    t2 = cn("z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className);
    $[5] = className;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" });
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== children || $[9] !== props || $[10] !== sideOffset || $[11] !== t2) {
    t4 = /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(TooltipPrimitive.Content, { "data-slot": "tooltip-content", sideOffset, className: t2, ...props, children: [
      children,
      t3
    ] }) });
    $[8] = children;
    $[9] = props;
    $[10] = sideOffset;
    $[11] = t2;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  return t4;
}
function Separator(t0) {
  const $ = c(12);
  let className;
  let props;
  let t1;
  let t2;
  if ($[0] !== t0) {
    ({
      className,
      orientation: t1,
      decorative: t2,
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
  const orientation = t1 === void 0 ? "horizontal" : t1;
  const decorative = t2 === void 0 ? true : t2;
  let t3;
  if ($[5] !== className) {
    t3 = cn("shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch", className);
    $[5] = className;
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== decorative || $[8] !== orientation || $[9] !== props || $[10] !== t3) {
    t4 = /* @__PURE__ */ jsx(Separator$1.Root, { "data-slot": "separator", decorative, orientation, className: t3, ...props });
    $[7] = decorative;
    $[8] = orientation;
    $[9] = props;
    $[10] = t3;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  return t4;
}
const NAVIGATION_LINKS = [{
  href: "/",
  label: "Home"
}, {
  href: "/about",
  label: "About"
}, {
  href: "/products",
  label: "Products"
}, {
  href: "/pricing",
  label: "Pricing"
}, {
  href: "/contact",
  label: "Contact"
}];
const LANGUAGES = [{
  code: "en",
  label: "English"
}, {
  code: "gr",
  label: "Ελληνικά"
}];
const MAX_QUANTITY = 50;
const BOTTLE_SIZES = [{
  id: "30ml",
  label: "30ml",
  ml: 30,
  multiplier: 1
}, {
  id: "60ml",
  label: "60ml",
  ml: 60,
  multiplier: 2
}, {
  id: "100ml",
  label: "100ml",
  ml: 100,
  multiplier: 3
}];
const SCENT_NOTES = [{
  id: "orange",
  name: "Orange",
  category: "top",
  description: "Fresh citrus burst"
}, {
  id: "lemon",
  name: "Lemon",
  category: "top",
  description: "Zesty and bright"
}, {
  id: "grapefruit",
  name: "Grapefruit",
  category: "top",
  description: "Tangy and invigorating"
}, {
  id: "lime",
  name: "Lime",
  category: "top",
  description: "Fresh green citrus"
}, {
  id: "bergamot",
  name: "Bergamot",
  category: "top",
  description: "Sweet citrus notes"
}, {
  id: "raspberry",
  name: "Raspberry",
  category: "top",
  description: "Sweet berry aroma"
}, {
  id: "blackberry",
  name: "Blackberry",
  category: "top",
  description: "Deep berry sweetness"
}, {
  id: "pineapple",
  name: "Pineapple",
  category: "top",
  description: "Tropical sweet start"
}, {
  id: "mint",
  name: "Mint",
  category: "heart",
  description: "Cool and refreshing"
}, {
  id: "eucalyptus",
  name: "Eucalyptus",
  category: "heart",
  description: "Fresh and clearing"
}, {
  id: "jasmine",
  name: "Jasmine",
  category: "heart",
  description: "Floral romantic"
}, {
  id: "neroli",
  name: "Neroli",
  category: "heart",
  description: "Orange blossom"
}, {
  id: "rose",
  name: "Rose",
  category: "heart",
  description: "Classic floral"
}, {
  id: "peony",
  name: "Peony",
  category: "heart",
  description: "Fresh floral"
}, {
  id: "coconut",
  name: "Coconut",
  category: "heart",
  description: "Creamy tropical"
}, {
  id: "frangipani",
  name: "Frangipani",
  category: "heart",
  description: "Exotic floral"
}, {
  id: "basil",
  name: "Basil",
  category: "heart",
  description: "Herbal and green"
}, {
  id: "thyme",
  name: "Thyme",
  category: "heart",
  description: "Earthy herb"
}, {
  id: "green-tea",
  name: "Green Tea",
  category: "heart",
  description: "Fresh and clean"
}, {
  id: "white-musks",
  name: "White Musks",
  category: "base",
  description: "Soft clean base"
}, {
  id: "cedar",
  name: "Cedar",
  category: "base",
  description: "Warm woody"
}, {
  id: "vetiver",
  name: "Vetiver",
  category: "base",
  description: "Earthy grounding"
}, {
  id: "oakmoss",
  name: "Oakmoss",
  category: "base",
  description: "Forest floor"
}, {
  id: "vanilla",
  name: "Vanilla",
  category: "base",
  description: "Warm sweet"
}, {
  id: "sandalwood",
  name: "Sandalwood",
  category: "base",
  description: "Creamy wood"
}, {
  id: "amber",
  name: "Amber",
  category: "base",
  description: "Warm resin"
}, {
  id: "white-woods",
  name: "White Woods",
  category: "base",
  description: "Clean modern"
}];
function getScentNotesByCategory(category) {
  return SCENT_NOTES.filter((s) => s.category === category);
}
const PRICE_DISCOUNT_MULTIPLIER = 0.8;
const PRICE_PARTIAL_DISCOUNT_MULTIPLIER = 0.9;
const STOCK_REDUCTION_MULTIPLIER = 0.6;
function getProductById(id) {
  return products.find((p) => p.id === id);
}
function getRelatedSizes(productId) {
  const product = getProductById(productId);
  if (!product) return [];
  return products.filter((p) => p.baseProductId === product.baseProductId);
}
function getAllBaseProducts() {
  const seen = /* @__PURE__ */ new Set();
  return products.filter((p) => {
    const baseId = p.baseProductId || p.id;
    if (seen.has(baseId)) {
      return false;
    }
    seen.add(baseId);
    return true;
  });
}
function createSizeVariants(baseProducts2) {
  const variants = [];
  for (const base of baseProducts2) {
    for (const size of BOTTLE_SIZES) {
      variants.push({
        ...base,
        size: size.label,
        sizeId: size.id,
        baseProductId: base.id,
        price: Math.round(base.price * size.multiplier * 100) / 100,
        id: size.multiplier === 1 ? base.id : `${base.id}-${size.id}`,
        stock: size.multiplier === 1 ? base.stock : Math.round(base.stock * STOCK_REDUCTION_MULTIPLIER)
      });
    }
  }
  return variants;
}
const baseProducts = [{
  id: "citrus-bloom",
  name: "Citrus Bloom",
  description: "Fresh orange and lemon peel essence with a hint of jasmine. Perfect for daily wear.",
  longDescription: "Citrus Bloom captures the vibrant energy of sun-ripened oranges and lemons, blended with the delicate sweetness of jasmine petals.\n\n## The Story\nThis uplifting fragrance starts with bright citrus top notes that gradually soften into a warm, floral heart. Perfect for those who love fresh, energizing scents that last throughout the day.\n\n**Best for:** Daily wear, office, casual outings\n\n## Craftsmanship\nEach bottle represents our commitment to sustainability - crafted from upcycled fruit peels that would otherwise go to waste. The result is a fragrance that not only smells divine but also helps protect our planet.",
  price: 45,
  image: "/perfume_citrus_bloom_medium.png",
  category: "Citrus",
  notes: {
    top: "Orange, Lemon",
    heart: "Jasmine, Neroli",
    base: "White Musk, Cedar"
  },
  badge: "Bestseller",
  size: "30ml",
  certificates: ["Eco Certified", "Natural Origin", "Vegan"],
  howToUse: "Apply 2-3 sprays on pulse points (wrists, neck, behind ears). For best longevity, apply to moisturized skin.",
  ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Citrus Limon (Lemon) Peel Extract, Citrus Aurantium Dulcis (Orange) Peel Extract, Jasminum Officinale (Jasmine) Flower Extract, Limonene, Linalool, Citral.",
  storage: "Store in a cool, dry place away from direct sunlight. Keep bottle tightly closed when not in use.",
  lifespan: "24 months from opening. Best used within 12 months of opening for optimal scent quality.",
  stock: 50,
  sizeId: "30ml"
}, {
  id: "berry-mist",
  name: "Berry Mist",
  description: "Delicate berry undertones with a refreshing mist finish. Light and airy.",
  longDescription: "Berry Mist is a playful, youthful fragrance that combines the sweetness of wild berries with refreshing mint and green tea.\n\n## The Story\nThis light, airy scent evokes a morning walk through a berry garden, with dewdrops still clinging to the leaves. Ideal for those who prefer subtle, fresh fragrances.\n\n**Best for:** Everyday wear, gym, fresh mornings\n\n## Key Features\nThe combination of raspberry and blackberry creates a naturally sweet opening, while green tea adds a refreshing twist that keeps the fragrance feeling clean and energizing.",
  price: 42,
  image: "/perfume_berry_mist_big.png",
  category: "Berry",
  notes: {
    top: "Raspberry, Blackberry",
    heart: "Mint, Green Tea",
    base: "White Woods, Musk"
  },
  badge: "New",
  size: "30ml",
  certificates: ["Natural Origin", "Cruelty-Free", "Vegan"],
  howToUse: "Hold bottle 15cm from skin and spray lightly. Focus on clothing or pulse points for a subtle, lasting effect.",
  ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Rubus Idaeus (Raspberry) Fruit Extract, Mentha Piperita (Peppermint) Leaf Extract, Camellia Sinensis Leaf Extract, Glycerin, Limonene.",
  storage: "Keep in a dark, cool environment. Avoid extreme temperature changes that can alter the scent.",
  lifespan: "18 months sealed, 12 months after opening. Store upright to prevent leakage.",
  stock: 30,
  sizeId: "30ml"
}, {
  id: "garden-peel",
  name: "Garden Peel",
  description: "Herbal blend with grapefruit and botanical extracts. Earthy and grounding.",
  longDescription: "Garden Peel brings the outdoors in with its herbaceous blend of grapefruit, fresh basil, and aromatic thyme.\n\n## The Story\nThis grounding fragrance connects you to nature, evoking a sun-warmed herb garden. The earthy base notes provide depth and longevity, making it perfect for those who appreciate sophisticated, botanical scents.\n\n**Best for:** Nature lovers, outdoor activities, grounding rituals\n\n## Sustainable Sourcing\nWe partner with local herb farms to source our basil and thyme, ensuring each bottle supports local agriculture while delivering an authentic botanical experience.",
  price: 48,
  image: "/perfume_garden_peel.png",
  category: "Herbal",
  notes: {
    top: "Grapefruit, Bergamot",
    heart: "Basil, Thyme",
    base: "Vetiver, Oakmoss"
  },
  badge: "Popular",
  size: "30ml",
  certificates: ["Eco Certified", "ISO Certified", "Natural Origin"],
  howToUse: "Spray on clean skin after showering. The warmth of your body helps activate the botanical notes.",
  ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Citrus Grandis (Grapefruit) Peel Oil, Ocimum Basilicum (Basil) Leaf Oil, Thymus Vulgaris (Thyme) Oil, Vetiveria Zizanoides Root Oil, Limonene, Linalool.",
  storage: "Best stored at room temperature. Avoid bathroom storage due to humidity.",
  lifespan: "36 months unopened, 18 months after first use. Natural ingredients may settle - shake gently before use.",
  stock: 25,
  sizeId: "30ml"
}, {
  id: "tropical-sun",
  name: "Tropical Sun",
  description: "Warm coconut and pineapple notes with a citrus twist. Summer in a bottle.",
  longDescription: "Tropical Sun transports you to a beachside paradise with its warm coconut and sweet pineapple notes, brightened by a zesty lime twist.\n\n## The Story\nThis vacation-in-a-bottle fragrance captures the essence of endless summer days. The creamy base notes add warmth and sensuality, perfect for those who dream of tropical escapes.\n\n**Best for:** Beach days, vacation, special occasions\n\n## Island Inspiration\nInspired by Greek island getaways, this fragrance uses exotic fruits and warm spices to create an intoxicating blend that feels like sunshine bottled.",
  price: 50,
  image: "/perfume_tropical_sun_medium.png",
  category: "Tropical",
  notes: {
    top: "Pineapple, Lime",
    heart: "Coconut, Frangipani",
    base: "Vanilla, Sandalwood"
  },
  badge: "Limited",
  size: "30ml",
  certificates: ["Vegan", "Cruelty-Free"],
  howToUse: "Perfect for special occasions. Apply to wrists, neck, and clothes for all-day tropical vibes.",
  ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Ananas Sativus (Pineapple) Fruit Extract, Cocos Nucifera (Coconut) Fruit Extract, Citrus Aurantifolia (Lime) Oil, Vanilla Planifolia Fruit Extract, Limonene, Coumarin.",
  storage: "Keep away from heat sources. The tropical oils are sensitive to temperature changes.",
  lifespan: "24 months sealed. Best used within 6 months of opening to experience full tropical notes.",
  stock: 15,
  sizeId: "30ml"
}, {
  id: "forest-dew",
  name: "Forest Dew",
  description: "Fresh oakmoss and cedarwood with a hint of mint. Nature awakened.",
  longDescription: "Forest Dew captures the serene beauty of a misty morning in a Greek forest. The combination of oakmoss and cedar creates an earthy, grounding base while mint adds a refreshing crispness.\n\n## The Story\nInspired by the forests of northern Greece, this fragrance brings the tranquility of nature to your everyday routine. Perfect for those who seek a connection to the earth.\n\n**Best for:** Meditation, outdoor work, daily grounding\n\n## Forest notes\nOakmoss provides depth and antiquity, while cedar adds warmth and structure. The mint top note lifts the composition, creating a dynamic fragrance that evolves throughout the day.",
  price: 52,
  image: "/perfume_forest_dew_big.png",
  category: "Fresh",
  notes: {
    top: "Eucalyptus, Mint",
    heart: "Pine, Fir Needle",
    base: "Cedarwood, Amber"
  },
  badge: "Eco",
  size: "30ml",
  certificates: ["Eco Certified", "Natural Origin", "Vegan", "Cruelty-Free"],
  howToUse: "Ideal for morning routine. Spray on after exercise or shower for an energizing boost.",
  ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Eucalyptus Globulus Leaf Oil, Mentha Piperita (Peppermint) Oil, Pinus Sylvestris (Pine) Needle Oil, Cedrus Atlantica (Cedarwood) Bark Oil, Limonene.",
  storage: "Store upright in a cool place. The natural oils may cloud slightly - this is normal.",
  lifespan: "30 months sealed, 12 months after opening. Natural scent may fade over time.",
  stock: 40,
  sizeId: "30ml"
}, {
  id: "rose-petal",
  name: "Rose Petal",
  description: "Luxurious rose petals with soft white musk. Timeless elegance.",
  longDescription: "Rose Petal is a tribute to the timeless beauty of Greek roses. This luxurious fragrance combines the romantic notes of rose petals with the soft sensuality of white musk.\n\n## The Story\nInspired by the rose gardens of Athens, this fragrance captures the essence of Greek romance and elegance. Each note is carefully balanced to create a sophisticated, long-lasting scent.\n\n**Best for:** Special occasions, evening wear, romantic dates\n\n## Rose Harvest\nOur roses are sourced from select Greek growers who use sustainable methods. The petals are harvested at dawn when their scent is most potent, ensuring the highest quality fragrance.",
  price: 55,
  image: "/perfume_rose_petal_small.png",
  category: "Floral",
  notes: {
    top: "Rose Water, Peach",
    heart: "Damask Rose, Peony",
    base: "Vanilla, Musk"
  },
  badge: "Premium",
  size: "30ml",
  certificates: ["ISO Certified", "Natural Origin"],
  howToUse: "Apply to pulse points. Layer with matching body products for enhanced longevity.",
  ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Rosa Damascena (Rose) Flower Water, Prunus Persica (Peach) Fruit Extract, Rosa Damascena (Rose) Flower Oil, Benzyl Alcohol, Citronellol, Geraniol.",
  storage: "Premium formula requires careful storage. Keep away from direct sunlight and heat sources.",
  lifespan: "48 months sealed, 24 months after opening. Store in original packaging for best preservation.",
  stock: 10,
  sizeId: "30ml"
}];
const products = createSizeVariants(baseProducts);
const categories = ["Citrus", "Berry", "Herbal", "Tropical", "Fresh", "Floral"];
const badges = [...new Set(products.map((p) => p.badge))];
function getSimilarProducts(productId, limit = 4) {
  const product = getProductById(productId);
  if (!product) return [];
  return products.filter((p) => p.id !== productId && p.category === product.category).slice(0, limit);
}
const MAX_PRICE_FILTER = 200;
const MIN_PRICE_FILTER = 0;
const MAX_QUANTITY_CART = 10;
const MAX_COMPARE_ITEMS = 4;
const useCartStore = create((set, get) => ({
  items: [],
  isOpen: false,
  addItem: (productId, quantity = 1) => {
    const product = getProductById(productId);
    if (!product) return;
    set((state) => {
      const existingItem = state.items.find((item) => item.productId === productId);
      if (existingItem) {
        return {
          items: state.items.map((item) => item.productId === productId ? {
            ...item,
            quantity: Math.min(item.quantity + quantity, MAX_QUANTITY_CART)
          } : item)
        };
      }
      return {
        items: [...state.items, {
          id: crypto.randomUUID(),
          productId: product.id,
          name: product.name,
          price: product.price,
          quantity,
          image: product.image,
          size: product.size
        }],
        isOpen: true
      };
    });
  },
  addCustomItem: (name, price, size, customBlend) => {
    const productId = `custom-${Date.now()}`;
    set((state) => ({
      items: [...state.items, {
        id: crypto.randomUUID(),
        productId,
        name,
        price,
        quantity: 1,
        image: "/perfume.png",
        size,
        customBlend
      }],
      isOpen: true
    }));
  },
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId)
    }));
  },
  updateQuantity: (productId, quantity) => {
    if (quantity < 1 || quantity > MAX_QUANTITY_CART) return;
    set((state) => ({
      items: state.items.map((item) => item.productId === productId ? {
        ...item,
        quantity
      } : item)
    }));
  },
  clearCart: () => {
    set({
      items: []
    });
  },
  getTotalItems: () => {
    return get().items.reduce((total, item) => total + item.quantity, 0);
  },
  getTotalPrice: () => {
    return get().items.reduce((total, item) => total + item.price * item.quantity, 0);
  },
  toggleCart: (isOpen) => {
    set((state) => ({
      isOpen: isOpen ?? !state.isOpen
    }));
  }
}));
const AnimatedThemeToggler = (t0) => {
  const $ = c(21);
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      duration: t1,
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
  const duration = t1 === void 0 ? 300 : t1;
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef(null);
  let t2;
  let t3;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
      if (mediaQuery.matches) {
        setIsDark(document.documentElement.classList.contains("dark"));
        return;
      }
      const updateTheme = () => {
        setIsDark(document.documentElement.classList.contains("dark"));
      };
      updateTheme();
      const observer = new MutationObserver(updateTheme);
      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"]
      });
      return () => observer.disconnect();
    };
    t3 = [];
    $[4] = t2;
    $[5] = t3;
  } else {
    t2 = $[4];
    t3 = $[5];
  }
  useEffect(t2, t3);
  let t4;
  if ($[6] !== duration || $[7] !== isDark) {
    t4 = () => {
      const button = buttonRef.current;
      if (!button) {
        return;
      }
      const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      if (prefersReducedMotion) {
        const newTheme = !isDark;
        setIsDark(newTheme);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("blossom-theme", newTheme ? "dark" : "light");
        return;
      }
      const {
        top,
        left,
        width,
        height
      } = button.getBoundingClientRect();
      const x = left + width / 2;
      const y = top + height / 2;
      const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
      const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
      const maxRadius = Math.hypot(Math.max(x, viewportWidth - x), Math.max(y, viewportHeight - y));
      const applyTheme = () => {
        const newTheme_0 = !isDark;
        setIsDark(newTheme_0);
        document.documentElement.classList.toggle("dark");
        localStorage.setItem("blossom-theme", newTheme_0 ? "dark" : "light");
      };
      if (typeof document.startViewTransition !== "function") {
        applyTheme();
        return;
      }
      const transition = document.startViewTransition(() => {
        flushSync(applyTheme);
      });
      const ready = transition?.ready;
      if (ready && typeof ready.then === "function") {
        ready.then(() => {
          document.documentElement.animate({
            clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`]
          }, {
            duration,
            easing: "cubic-bezier(0.6, 0.0, 1.0, 1.0)",
            pseudoElement: "::view-transition-new(root)"
          });
        });
      }
    };
    $[6] = duration;
    $[7] = isDark;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  const toggleTheme = t4;
  let t5;
  if ($[9] !== className) {
    t5 = cn("flex items-center gap-2", className);
    $[9] = className;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== isDark) {
    t6 = isDark ? /* @__PURE__ */ jsx(SunMedium, { className: "size-4" }) : /* @__PURE__ */ jsx(Moon, { className: "size-4" });
    $[11] = isDark;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  const t7 = isDark ? "Light Mode" : "Dark Mode";
  let t8;
  if ($[13] !== t7) {
    t8 = /* @__PURE__ */ jsx("span", { children: t7 });
    $[13] = t7;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  let t9;
  if ($[15] !== props || $[16] !== t5 || $[17] !== t6 || $[18] !== t8 || $[19] !== toggleTheme) {
    t9 = /* @__PURE__ */ jsxs("button", { type: "button", ref: buttonRef, onClick: toggleTheme, className: t5, ...props, children: [
      t6,
      t8
    ] });
    $[15] = props;
    $[16] = t5;
    $[17] = t6;
    $[18] = t8;
    $[19] = toggleTheme;
    $[20] = t9;
  } else {
    t9 = $[20];
  }
  return t9;
};
const STORAGE_KEY = "blossom-auth-users";
function getStoredUsers() {
  if (typeof window === "undefined") return {};
  const stored = localStorage.getItem(STORAGE_KEY);
  return stored ? JSON.parse(stored) : {};
}
function saveUser(email, password, name) {
  const users = getStoredUsers();
  const id = crypto.randomUUID();
  users[email] = {
    password,
    name
  };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  return {
    id,
    email,
    name,
    wishlistProductIds: []
  };
}
function validatePassword(email, password) {
  const users = getStoredUsers();
  const userData = users[email];
  if (!userData || userData.password !== password) return null;
  const storedUser = localStorage.getItem(`blossom-user-${email}`);
  if (storedUser) {
    return JSON.parse(storedUser);
  }
  return {
    id: crypto.randomUUID(),
    email,
    name: userData.name,
    wishlistProductIds: []
  };
}
const useAuthStore = create()(persist((set, get) => ({
  user: null,
  isAuthenticated: false,
  login: (email, password) => {
    const user = validatePassword(email, password);
    if (!user) return false;
    set({
      user,
      isAuthenticated: true
    });
    localStorage.setItem(`blossom-user-${email}`, JSON.stringify(user));
    return true;
  },
  signup: (email, password, name) => {
    const users = getStoredUsers();
    if (users[email]) return false;
    const user = saveUser(email, password, name);
    set({
      user,
      isAuthenticated: true
    });
    localStorage.setItem(`blossom-user-${email}`, JSON.stringify(user));
    return true;
  },
  logout: () => {
    set({
      user: null,
      isAuthenticated: false
    });
  },
  mergeWishlist: (productIds) => {
    const {
      user
    } = get();
    if (!user) return;
    const updatedUser = {
      ...user,
      wishlistProductIds: [.../* @__PURE__ */ new Set([...user.wishlistProductIds, ...productIds])]
    };
    set({
      user: updatedUser
    });
    localStorage.setItem(`blossom-user-${user.email}`, JSON.stringify(updatedUser));
  }
}), {
  name: "blossom-auth",
  partialize: (state) => ({
    user: state.user,
    isAuthenticated: state.isAuthenticated
  })
}));
const useWishlistStore = create()(persist((set, get) => ({
  items: [],
  addItem: (productId) => {
    const product = getProductById(productId);
    if (!product || get().isInWishlist(productId)) return;
    set((state) => ({
      items: [...state.items, {
        id: crypto.randomUUID(),
        productId: product.id,
        name: product.name,
        price: product.price,
        image: product.image,
        addedAt: /* @__PURE__ */ new Date()
      }]
    }));
  },
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId)
    }));
  },
  isInWishlist: (productId) => {
    return get().items.some((item) => item.productId === productId);
  },
  clearWishlist: () => {
    set({
      items: []
    });
  }
})), {
  name: "blossom-wishlist"
});
const SUBSCRIPTION_PLANS = [{
  id: "free",
  name: "Free",
  monthlyPrice: 0,
  yearlyPrice: 0,
  discount: 0,
  freeShipping: false,
  description: "Browse and shop with no commitments",
  features: ["Access to all products", "Wishlist", "Compare products"]
}, {
  id: "starter",
  name: "Starter",
  monthlyPrice: 9.99,
  yearlyPrice: 99,
  discount: 5,
  freeShipping: false,
  description: "Perfect for casual shoppers",
  features: ["5% discount on all orders", "All Free benefits", "Early access to new products"]
}, {
  id: "premium",
  name: "Premium",
  monthlyPrice: 19.99,
  yearlyPrice: 199,
  discount: 10,
  freeShipping: true,
  description: "Best for regular shoppers",
  features: ["10% discount on all orders", "Free shipping on all orders", "All Starter benefits", "Exclusive member deals"]
}, {
  id: "vip",
  name: "VIP",
  monthlyPrice: 39.99,
  yearlyPrice: 399,
  discount: 20,
  freeShipping: true,
  description: "For the most dedicated fans",
  features: ["20% discount on all orders", "Priority customer support", "All Premium benefits", "VIP-only products", "Free birthday gift"]
}];
const useSubscriptionStore = create((set, get) => ({
  currentTier: "free",
  billingCycle: "monthly",
  setTier: (tier) => {
    set({
      currentTier: tier
    });
  },
  setBillingCycle: (cycle) => {
    set({
      billingCycle: cycle
    });
  },
  getCurrentPlan: () => {
    const {
      currentTier
    } = get();
    return SUBSCRIPTION_PLANS.find((p) => p.id === currentTier) || SUBSCRIPTION_PLANS[0];
  },
  getDiscount: () => {
    return get().getCurrentPlan().discount;
  },
  hasFreeShipping: () => {
    return get().getCurrentPlan().freeShipping;
  },
  applyDiscount: (price) => {
    const discount = get().getDiscount();
    return price - price * (discount / 100);
  },
  cancelSubscription: () => {
    set({
      currentTier: "free"
    });
  }
}));
function Input(t0) {
  const $ = c(10);
  let className;
  let props;
  let type;
  if ($[0] !== t0) {
    ({
      className,
      type,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = type;
  } else {
    className = $[1];
    props = $[2];
    type = $[3];
  }
  let t1;
  if ($[4] !== className) {
    t1 = cn("h-10 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  let t2;
  if ($[6] !== props || $[7] !== t1 || $[8] !== type) {
    t2 = /* @__PURE__ */ jsx("input", { type, "data-slot": "input", className: t1, ...props });
    $[6] = props;
    $[7] = t1;
    $[8] = type;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  return t2;
}
function Label(t0) {
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
    t1 = cn("flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(Label$1.Root, { "data-slot": "label", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function Dialog(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(Dialog$1.Root, { "data-slot": "dialog", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DialogPortal(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(Dialog$1.Portal, { "data-slot": "dialog-portal", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function DialogOverlay(t0) {
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
    t1 = cn("fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(Dialog$1.Overlay, { "data-slot": "dialog-overlay", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function DialogContent(t0) {
  const $ = c(15);
  let children;
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      children,
      showCloseButton: t1,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
  }
  const showCloseButton = t1 === void 0 ? true : t1;
  let t2;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(DialogOverlay, {});
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== className) {
    t3 = cn("fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-xl bg-popover p-6 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-md data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95", className);
    $[6] = className;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== showCloseButton) {
    t4 = showCloseButton && /* @__PURE__ */ jsx(Dialog$1.Close, { "data-slot": "dialog-close", asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "absolute top-4 right-4", size: "icon-sm", children: [
      /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Cancel01Icon, strokeWidth: 2 }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
    ] }) });
    $[8] = showCloseButton;
    $[9] = t4;
  } else {
    t4 = $[9];
  }
  let t5;
  if ($[10] !== children || $[11] !== props || $[12] !== t3 || $[13] !== t4) {
    t5 = /* @__PURE__ */ jsxs(DialogPortal, { children: [
      t2,
      /* @__PURE__ */ jsxs(Dialog$1.Content, { "data-slot": "dialog-content", className: t3, ...props, children: [
        children,
        t4
      ] })
    ] });
    $[10] = children;
    $[11] = props;
    $[12] = t3;
    $[13] = t4;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  return t5;
}
function DialogHeader(t0) {
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
    t1 = cn("flex flex-col gap-2", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "dialog-header", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function DialogTitle(t0) {
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
    t1 = cn("leading-none font-medium", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(Dialog$1.Title, { "data-slot": "dialog-title", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function DialogDescription(t0) {
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
    t1 = cn("text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(Dialog$1.Description, { "data-slot": "dialog-description", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function Tabs(t0) {
  const $ = c(10);
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      orientation: t1,
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
  const orientation = t1 === void 0 ? "horizontal" : t1;
  let t2;
  if ($[4] !== className) {
    t2 = cn("group/tabs flex gap-2 data-horizontal:flex-col", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== orientation || $[7] !== props || $[8] !== t2) {
    t3 = /* @__PURE__ */ jsx(Tabs$1.Root, { "data-slot": "tabs", "data-orientation": orientation, className: t2, ...props });
    $[6] = orientation;
    $[7] = props;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  return t3;
}
const tabsListVariants = cva("group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-9 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none", {
  variants: {
    variant: {
      default: "bg-muted",
      line: "gap-1 bg-transparent"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function TabsList(t0) {
  const $ = c(11);
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      variant: t1,
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
  const variant = t1 === void 0 ? "default" : t1;
  let t2;
  if ($[4] !== className || $[5] !== variant) {
    t2 = cn(tabsListVariants({
      variant
    }), className);
    $[4] = className;
    $[5] = variant;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] !== props || $[8] !== t2 || $[9] !== variant) {
    t3 = /* @__PURE__ */ jsx(Tabs$1.List, { "data-slot": "tabs-list", "data-variant": variant, className: t2, ...props });
    $[7] = props;
    $[8] = t2;
    $[9] = variant;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  return t3;
}
function TabsTrigger(t0) {
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
    t1 = cn("relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4", "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent", "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground", "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(Tabs$1.Trigger, { "data-slot": "tabs-trigger", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function TabsContent(t0) {
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
    t1 = cn("flex-1 text-sm outline-none", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(Tabs$1.Content, { "data-slot": "tabs-content", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function AuthModal(t0) {
  const $ = c(127);
  const {
    open,
    onOpenChange
  } = t0;
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showMergePrompt, setShowMergePrompt] = useState(false);
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = [];
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  const [pendingProductIds, setPendingProductIds] = useState(t1);
  const {
    login,
    signup,
    mergeWishlist
  } = useAuthStore();
  const wishlistItems = useWishlistStore(_temp$5);
  const addItem = useWishlistStore(_temp2$3);
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      setEmail("");
      setPassword("");
      setName("");
      setError("");
      setShowPassword(false);
    };
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const resetForm = t2;
  let t3;
  if ($[2] !== onOpenChange) {
    t3 = (isOpen) => {
      if (!isOpen) {
        resetForm();
        setShowMergePrompt(false);
      }
      onOpenChange(isOpen);
    };
    $[2] = onOpenChange;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const handleOpenChange = t3;
  let t4;
  if ($[4] !== wishlistItems) {
    t4 = () => {
      const currentUser = useAuthStore.getState().user;
      if (!currentUser) {
        return wishlistItems.map(_temp3$3);
      }
      return wishlistItems.filter((item_0) => !currentUser.wishlistProductIds.includes(item_0.productId)).map(_temp4$2);
    };
    $[4] = wishlistItems;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  const getNewItems = t4;
  let t5;
  if ($[6] !== email || $[7] !== getNewItems || $[8] !== login || $[9] !== mode || $[10] !== name || $[11] !== onOpenChange || $[12] !== password || $[13] !== signup) {
    t5 = (e) => {
      e.preventDefault();
      setError("");
      let success;
      if (mode === "signin") {
        success = login(email, password);
      } else {
        success = signup(email, password, name);
      }
      if (!success) {
        setError(mode === "signin" ? "Invalid email or password" : "An account with this email already exists");
        return;
      }
      const newItems = getNewItems();
      if (newItems.length > 0) {
        setPendingProductIds(newItems);
        setShowMergePrompt(true);
      } else {
        onOpenChange(false);
        resetForm();
      }
    };
    $[6] = email;
    $[7] = getNewItems;
    $[8] = login;
    $[9] = mode;
    $[10] = name;
    $[11] = onOpenChange;
    $[12] = password;
    $[13] = signup;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  const handleSubmit = t5;
  let t6;
  if ($[15] !== addItem || $[16] !== mergeWishlist || $[17] !== onOpenChange || $[18] !== pendingProductIds) {
    t6 = (shouldMerge) => {
      if (shouldMerge && pendingProductIds.length > 0) {
        mergeWishlist(pendingProductIds);
        pendingProductIds.forEach((productId) => addItem(productId));
      }
      setShowMergePrompt(false);
      setPendingProductIds([]);
      onOpenChange(false);
      resetForm();
    };
    $[15] = addItem;
    $[16] = mergeWishlist;
    $[17] = onOpenChange;
    $[18] = pendingProductIds;
    $[19] = t6;
  } else {
    t6 = $[19];
  }
  const handleMergeWishlist = t6;
  if (showMergePrompt) {
    let t72;
    if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
      t72 = /* @__PURE__ */ jsx(DialogTitle, { children: "Save your wishlist?" });
      $[20] = t72;
    } else {
      t72 = $[20];
    }
    const t82 = pendingProductIds.length === 1 ? "" : "s";
    const t92 = pendingProductIds.length === 1 ? "it" : "them";
    let t102;
    if ($[21] !== pendingProductIds.length || $[22] !== t82 || $[23] !== t92) {
      t102 = /* @__PURE__ */ jsxs(DialogHeader, { children: [
        t72,
        /* @__PURE__ */ jsxs(DialogDescription, { children: [
          "You have ",
          pendingProductIds.length,
          " product",
          t82,
          " in your wishlist from before signing in. Would you like to add",
          " ",
          t92,
          " to your account?"
        ] })
      ] });
      $[21] = pendingProductIds.length;
      $[22] = t82;
      $[23] = t92;
      $[24] = t102;
    } else {
      t102 = $[24];
    }
    let t112;
    if ($[25] !== pendingProductIds) {
      t112 = pendingProductIds.slice(0, 3).map(_temp5);
      $[25] = pendingProductIds;
      $[26] = t112;
    } else {
      t112 = $[26];
    }
    let t122;
    if ($[27] !== pendingProductIds.length) {
      t122 = pendingProductIds.length > 3 && /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
        "+ ",
        pendingProductIds.length - 3,
        " more"
      ] });
      $[27] = pendingProductIds.length;
      $[28] = t122;
    } else {
      t122 = $[28];
    }
    let t132;
    if ($[29] !== t112 || $[30] !== t122) {
      t132 = /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
        t112,
        t122
      ] });
      $[29] = t112;
      $[30] = t122;
      $[31] = t132;
    } else {
      t132 = $[31];
    }
    let t142;
    if ($[32] !== handleMergeWishlist) {
      t142 = /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => handleMergeWishlist(false), className: "flex-1", children: "No, keep only new" });
      $[32] = handleMergeWishlist;
      $[33] = t142;
    } else {
      t142 = $[33];
    }
    let t152;
    if ($[34] !== handleMergeWishlist) {
      t152 = /* @__PURE__ */ jsx(Button, { onClick: () => handleMergeWishlist(true), className: "flex-1", children: "Yes, add to account" });
      $[34] = handleMergeWishlist;
      $[35] = t152;
    } else {
      t152 = $[35];
    }
    let t162;
    if ($[36] !== t142 || $[37] !== t152) {
      t162 = /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
        t142,
        t152
      ] });
      $[36] = t142;
      $[37] = t152;
      $[38] = t162;
    } else {
      t162 = $[38];
    }
    let t172;
    if ($[39] !== t132 || $[40] !== t162) {
      t172 = /* @__PURE__ */ jsxs("div", { className: "grid gap-4 py-4", children: [
        t132,
        t162
      ] });
      $[39] = t132;
      $[40] = t162;
      $[41] = t172;
    } else {
      t172 = $[41];
    }
    let t182;
    if ($[42] !== t102 || $[43] !== t172) {
      t182 = /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [
        t102,
        t172
      ] });
      $[42] = t102;
      $[43] = t172;
      $[44] = t182;
    } else {
      t182 = $[44];
    }
    let t192;
    if ($[45] !== handleOpenChange || $[46] !== open || $[47] !== t182) {
      t192 = /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: handleOpenChange, children: t182 });
      $[45] = handleOpenChange;
      $[46] = open;
      $[47] = t182;
      $[48] = t192;
    } else {
      t192 = $[48];
    }
    return t192;
  }
  let t7;
  if ($[49] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: "Welcome to Blossom" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "Sign in to sync your wishlist across devices, or continue as guest." })
    ] });
    $[49] = t7;
  } else {
    t7 = $[49];
  }
  let t8;
  if ($[50] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = (v) => setMode(v);
    $[50] = t8;
  } else {
    t8 = $[50];
  }
  let t9;
  if ($[51] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
      /* @__PURE__ */ jsx(TabsTrigger, { value: "signin", children: "Sign In" }),
      /* @__PURE__ */ jsx(TabsTrigger, { value: "signup", children: "Sign Up" })
    ] });
    $[51] = t9;
  } else {
    t9 = $[51];
  }
  let t10;
  if ($[52] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ jsx(Label, { htmlFor: "signin-email", children: "Email" });
    $[52] = t10;
  } else {
    t10 = $[52];
  }
  let t11;
  if ($[53] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" });
    $[53] = t11;
  } else {
    t11 = $[53];
  }
  let t12;
  if ($[54] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = (e_0) => setEmail(e_0.target.value);
    $[54] = t12;
  } else {
    t12 = $[54];
  }
  let t13;
  if ($[55] !== email) {
    t13 = /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
      t10,
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        t11,
        /* @__PURE__ */ jsx(Input, { id: "signin-email", type: "email", placeholder: "you@example.com", value: email, onChange: t12, className: "pl-9", required: true })
      ] })
    ] });
    $[55] = email;
    $[56] = t13;
  } else {
    t13 = $[56];
  }
  let t14;
  if ($[57] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ jsx(Label, { htmlFor: "signin-password", children: "Password" });
    $[57] = t14;
  } else {
    t14 = $[57];
  }
  let t15;
  if ($[58] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" });
    $[58] = t15;
  } else {
    t15 = $[58];
  }
  const t16 = showPassword ? "text" : "password";
  let t17;
  if ($[59] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t17 = (e_1) => setPassword(e_1.target.value);
    $[59] = t17;
  } else {
    t17 = $[59];
  }
  let t18;
  if ($[60] !== password || $[61] !== t16) {
    t18 = /* @__PURE__ */ jsx(Input, { id: "signin-password", type: t16, placeholder: "••••••••", value: password, onChange: t17, className: "pl-9 pr-9", required: true });
    $[60] = password;
    $[61] = t16;
    $[62] = t18;
  } else {
    t18 = $[62];
  }
  let t19;
  if ($[63] !== showPassword) {
    t19 = () => setShowPassword(!showPassword);
    $[63] = showPassword;
    $[64] = t19;
  } else {
    t19 = $[64];
  }
  let t20;
  if ($[65] !== showPassword) {
    t20 = showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsx(Eye, { className: "size-4" });
    $[65] = showPassword;
    $[66] = t20;
  } else {
    t20 = $[66];
  }
  let t21;
  if ($[67] !== t19 || $[68] !== t20) {
    t21 = /* @__PURE__ */ jsx("button", { type: "button", onClick: t19, className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: t20 });
    $[67] = t19;
    $[68] = t20;
    $[69] = t21;
  } else {
    t21 = $[69];
  }
  let t22;
  if ($[70] !== t18 || $[71] !== t21) {
    t22 = /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
      t14,
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        t15,
        t18,
        t21
      ] })
    ] });
    $[70] = t18;
    $[71] = t21;
    $[72] = t22;
  } else {
    t22 = $[72];
  }
  let t23;
  if ($[73] !== error) {
    t23 = error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: error });
    $[73] = error;
    $[74] = t23;
  } else {
    t23 = $[74];
  }
  let t24;
  if ($[75] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t24 = /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", children: "Sign In" });
    $[75] = t24;
  } else {
    t24 = $[75];
  }
  let t25;
  if ($[76] !== handleSubmit || $[77] !== t13 || $[78] !== t22 || $[79] !== t23) {
    t25 = /* @__PURE__ */ jsx(TabsContent, { value: "signin", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "grid gap-4 py-4", children: [
      t13,
      t22,
      t23,
      t24
    ] }) });
    $[76] = handleSubmit;
    $[77] = t13;
    $[78] = t22;
    $[79] = t23;
    $[80] = t25;
  } else {
    t25 = $[80];
  }
  let t26;
  if ($[81] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t26 = /* @__PURE__ */ jsx(Label, { htmlFor: "signup-name", children: "Name" });
    $[81] = t26;
  } else {
    t26 = $[81];
  }
  let t27;
  if ($[82] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t27 = /* @__PURE__ */ jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" });
    $[82] = t27;
  } else {
    t27 = $[82];
  }
  let t28;
  if ($[83] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t28 = (e_2) => setName(e_2.target.value);
    $[83] = t28;
  } else {
    t28 = $[83];
  }
  let t29;
  if ($[84] !== name) {
    t29 = /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
      t26,
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        t27,
        /* @__PURE__ */ jsx(Input, { id: "signup-name", type: "text", placeholder: "Your name", value: name, onChange: t28, className: "pl-9", required: true })
      ] })
    ] });
    $[84] = name;
    $[85] = t29;
  } else {
    t29 = $[85];
  }
  let t30;
  if ($[86] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t30 = /* @__PURE__ */ jsx(Label, { htmlFor: "signup-email", children: "Email" });
    $[86] = t30;
  } else {
    t30 = $[86];
  }
  let t31;
  if ($[87] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t31 = /* @__PURE__ */ jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" });
    $[87] = t31;
  } else {
    t31 = $[87];
  }
  let t32;
  if ($[88] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t32 = (e_3) => setEmail(e_3.target.value);
    $[88] = t32;
  } else {
    t32 = $[88];
  }
  let t33;
  if ($[89] !== email) {
    t33 = /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
      t30,
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        t31,
        /* @__PURE__ */ jsx(Input, { id: "signup-email", type: "email", placeholder: "you@example.com", value: email, onChange: t32, className: "pl-9", required: true })
      ] })
    ] });
    $[89] = email;
    $[90] = t33;
  } else {
    t33 = $[90];
  }
  let t34;
  if ($[91] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t34 = /* @__PURE__ */ jsx(Label, { htmlFor: "signup-password", children: "Password" });
    $[91] = t34;
  } else {
    t34 = $[91];
  }
  let t35;
  if ($[92] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t35 = /* @__PURE__ */ jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" });
    $[92] = t35;
  } else {
    t35 = $[92];
  }
  const t36 = showPassword ? "text" : "password";
  let t37;
  if ($[93] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t37 = (e_4) => setPassword(e_4.target.value);
    $[93] = t37;
  } else {
    t37 = $[93];
  }
  let t38;
  if ($[94] !== password || $[95] !== t36) {
    t38 = /* @__PURE__ */ jsx(Input, { id: "signup-password", type: t36, placeholder: "••••••••", value: password, onChange: t37, className: "pl-9 pr-9", required: true });
    $[94] = password;
    $[95] = t36;
    $[96] = t38;
  } else {
    t38 = $[96];
  }
  let t39;
  if ($[97] !== showPassword) {
    t39 = () => setShowPassword(!showPassword);
    $[97] = showPassword;
    $[98] = t39;
  } else {
    t39 = $[98];
  }
  let t40;
  if ($[99] !== showPassword) {
    t40 = showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsx(Eye, { className: "size-4" });
    $[99] = showPassword;
    $[100] = t40;
  } else {
    t40 = $[100];
  }
  let t41;
  if ($[101] !== t39 || $[102] !== t40) {
    t41 = /* @__PURE__ */ jsx("button", { type: "button", onClick: t39, className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground", children: t40 });
    $[101] = t39;
    $[102] = t40;
    $[103] = t41;
  } else {
    t41 = $[103];
  }
  let t42;
  if ($[104] !== t38 || $[105] !== t41) {
    t42 = /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
      t34,
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        t35,
        t38,
        t41
      ] })
    ] });
    $[104] = t38;
    $[105] = t41;
    $[106] = t42;
  } else {
    t42 = $[106];
  }
  let t43;
  if ($[107] !== error) {
    t43 = error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: error });
    $[107] = error;
    $[108] = t43;
  } else {
    t43 = $[108];
  }
  let t44;
  if ($[109] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t44 = /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", children: "Create Account" });
    $[109] = t44;
  } else {
    t44 = $[109];
  }
  let t45;
  if ($[110] !== handleSubmit || $[111] !== t29 || $[112] !== t33 || $[113] !== t42 || $[114] !== t43) {
    t45 = /* @__PURE__ */ jsx(TabsContent, { value: "signup", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "grid gap-4 py-4", children: [
      t29,
      t33,
      t42,
      t43,
      t44
    ] }) });
    $[110] = handleSubmit;
    $[111] = t29;
    $[112] = t33;
    $[113] = t42;
    $[114] = t43;
    $[115] = t45;
  } else {
    t45 = $[115];
  }
  let t46;
  if ($[116] !== mode || $[117] !== t25 || $[118] !== t45) {
    t46 = /* @__PURE__ */ jsxs(Tabs, { value: mode, onValueChange: t8, children: [
      t9,
      t25,
      t45
    ] });
    $[116] = mode;
    $[117] = t25;
    $[118] = t45;
    $[119] = t46;
  } else {
    t46 = $[119];
  }
  let t47;
  if ($[120] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t47 = /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-muted-foreground", children: "By continuing, you agree to our Terms of Service and Privacy Policy." });
    $[120] = t47;
  } else {
    t47 = $[120];
  }
  let t48;
  if ($[121] !== t46) {
    t48 = /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [
      t7,
      t46,
      t47
    ] });
    $[121] = t46;
    $[122] = t48;
  } else {
    t48 = $[122];
  }
  let t49;
  if ($[123] !== handleOpenChange || $[124] !== open || $[125] !== t48) {
    t49 = /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: handleOpenChange, children: t48 });
    $[123] = handleOpenChange;
    $[124] = open;
    $[125] = t48;
    $[126] = t49;
  } else {
    t49 = $[126];
  }
  return t49;
}
function _temp5(_, i) {
  return /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
    "• Product ",
    i + 1
  ] }, i);
}
function _temp4$2(item_1) {
  return item_1.productId;
}
function _temp3$3(item) {
  return item.productId;
}
function _temp2$3(state_0) {
  return state_0.addItem;
}
function _temp$5(state) {
  return state.items;
}
function ProfileDropdown() {
  const $ = c(18);
  const {
    user,
    isAuthenticated,
    logout
  } = useAuthStore();
  const wishlistCount = useWishlistStore(_temp$4);
  const {
    currentTier,
    getDiscount
  } = useSubscriptionStore();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  let t0;
  if ($[0] !== currentTier) {
    t0 = SUBSCRIPTION_PLANS.find((p) => p.id === currentTier);
    $[0] = currentTier;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const currentPlan = t0;
  const hasSubscription = currentTier !== "free";
  let t1;
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = () => {
      setMounted(true);
      const stored = localStorage.getItem("blossom-theme");
      const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
      const initialTheme = stored ? stored : prefersDark ? "dark" : "light";
      requestAnimationFrame(() => {
        document.documentElement.classList.toggle("dark", initialTheme === "dark");
      });
    };
    t2 = [];
    $[2] = t1;
    $[3] = t2;
  } else {
    t1 = $[2];
    t2 = $[3];
  }
  useEffect(t1, t2);
  if (!mounted) {
    return null;
  }
  let t3;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "rounded-full min-[841px]:scale-100 scale-150", children: /* @__PURE__ */ jsx(User, { className: "size-4" }) }) });
    $[4] = t3;
  } else {
    t3 = $[4];
  }
  let t4;
  if ($[5] !== currentPlan?.name || $[6] !== getDiscount || $[7] !== hasSubscription || $[8] !== isAuthenticated || $[9] !== logout || $[10] !== user || $[11] !== wishlistCount) {
    t4 = /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      t3,
      /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "w-56", children: isAuthenticated && user ? /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-none", children: user.name }),
          /* @__PURE__ */ jsx("p", { className: "text-xs leading-none text-muted-foreground", children: user.email })
        ] }) }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        hasSubscription && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, className: "cursor-pointer", children: /* @__PURE__ */ jsxs(Link, { to: "/pricing", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "size-4" }),
            /* @__PURE__ */ jsxs("span", { children: [
              currentPlan?.name,
              " Member"
            ] }),
            /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "ml-auto text-xs", children: [
              getDiscount(),
              "% off"
            ] })
          ] }) }),
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, className: "cursor-pointer", children: /* @__PURE__ */ jsxs(Link, { to: "/pricing", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(CreditCard, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { children: "Manage Subscription" })
          ] }) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {})
        ] }),
        !hasSubscription && /* @__PURE__ */ jsxs(Fragment, { children: [
          /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, className: "cursor-pointer", children: /* @__PURE__ */ jsxs(Link, { to: "/pricing", className: "flex items-center gap-2", children: [
            /* @__PURE__ */ jsx(Sparkles, { className: "size-4" }),
            /* @__PURE__ */ jsx("span", { children: "Upgrade to Premium" })
          ] }) }),
          /* @__PURE__ */ jsx(DropdownMenuSeparator, {})
        ] }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, className: "cursor-pointer", children: /* @__PURE__ */ jsxs(Link, { to: "/wishlist", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Heart, { className: "size-4" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Wishlist (",
            wishlistCount,
            ")"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsx(DropdownMenuItem, { className: "cursor-pointer p-0", children: /* @__PURE__ */ jsx(AnimatedThemeToggler, { className: "flex w-full items-center gap-2 px-2 py-1.5" }) }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsxs(DropdownMenuItem, { onClick: logout, className: "cursor-pointer text-destructive focus:text-destructive", children: [
          /* @__PURE__ */ jsx(LogOut, { className: "size-4 mr-2" }),
          /* @__PURE__ */ jsx("span", { children: "Log out" })
        ] })
      ] }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        /* @__PURE__ */ jsx(DropdownMenuLabel, { className: "font-normal", children: /* @__PURE__ */ jsxs("div", { className: "flex flex-col space-y-1", children: [
          /* @__PURE__ */ jsx("p", { className: "text-sm font-medium leading-none", children: "Welcome" }),
          /* @__PURE__ */ jsx("p", { className: "text-xs leading-none text-muted-foreground", children: "Sign in to save your wishlist" })
        ] }) }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsx(DropdownMenuItem, { asChild: true, className: "cursor-pointer", children: /* @__PURE__ */ jsxs(Link, { to: "/wishlist", className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsx(Heart, { className: "size-4" }),
          /* @__PURE__ */ jsxs("span", { children: [
            "Wishlist (",
            wishlistCount,
            ")"
          ] })
        ] }) }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsx(DropdownMenuItem, { className: "cursor-pointer p-0", children: /* @__PURE__ */ jsx(AnimatedThemeToggler, { className: "flex w-full items-center gap-2 px-2 py-1.5" }) }),
        /* @__PURE__ */ jsx(DropdownMenuSeparator, {}),
        /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setAuthModalOpen(true), className: "cursor-pointer", children: "Sign In" }),
        /* @__PURE__ */ jsx(DropdownMenuItem, { onClick: () => setAuthModalOpen(true), className: "cursor-pointer", children: "Sign Up" })
      ] }) })
    ] });
    $[5] = currentPlan?.name;
    $[6] = getDiscount;
    $[7] = hasSubscription;
    $[8] = isAuthenticated;
    $[9] = logout;
    $[10] = user;
    $[11] = wishlistCount;
    $[12] = t4;
  } else {
    t4 = $[12];
  }
  let t5;
  if ($[13] !== authModalOpen) {
    t5 = /* @__PURE__ */ jsx(AuthModal, { open: authModalOpen, onOpenChange: setAuthModalOpen });
    $[13] = authModalOpen;
    $[14] = t5;
  } else {
    t5 = $[14];
  }
  let t6;
  if ($[15] !== t4 || $[16] !== t5) {
    t6 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t4,
      t5
    ] });
    $[15] = t4;
    $[16] = t5;
    $[17] = t6;
  } else {
    t6 = $[17];
  }
  return t6;
}
function _temp$4(state) {
  return state.items.length;
}
function HeaderDesktop() {
  const $ = c(18);
  const totalItems = useCartStore(_temp2$2);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(NavigationMenu, { children: /* @__PURE__ */ jsx(NavigationMenuList, { className: "tracking-tight font-sans gap-x-8", children: NAVIGATION_LINKS.map(_temp3$2) }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const t1 = `Cart with ${totalItems} items`;
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(ShoppingBag, { className: "size-4" });
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  let t3;
  if ($[2] !== totalItems) {
    t3 = totalItems > 0 && /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs", children: totalItems });
    $[2] = totalItems;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== t1 || $[5] !== t3) {
    t4 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", asChild: true, className: "relative", children: /* @__PURE__ */ jsxs(Link, { to: "/cart", "aria-label": t1, children: [
      t2,
      t3
    ] }) }) });
    $[4] = t1;
    $[5] = t3;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== totalItems) {
    t5 = /* @__PURE__ */ jsxs(TooltipContent, { children: [
      "Cart (",
      totalItems,
      " items)"
    ] });
    $[7] = totalItems;
    $[8] = t5;
  } else {
    t5 = $[8];
  }
  let t6;
  if ($[9] !== t4 || $[10] !== t5) {
    t6 = /* @__PURE__ */ jsxs(Tooltip, { children: [
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
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "h-6 mx-1" });
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  let t8;
  if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(Globe, { className: "size-4" }) }) });
    $[13] = t8;
  } else {
    t8 = $[13];
  }
  let t10;
  let t9;
  if ($[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      t8,
      /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "bg-card", children: LANGUAGES.map(_temp4$1) })
    ] });
    t10 = /* @__PURE__ */ jsx(ProfileDropdown, {});
    $[14] = t10;
    $[15] = t9;
  } else {
    t10 = $[14];
    t9 = $[15];
  }
  let t11;
  if ($[16] !== t6) {
    t11 = /* @__PURE__ */ jsxs("nav", { className: "hidden min-[841px]:flex items-center justify-between px-8 py-2", children: [
      t0,
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 pl-8", children: [
        t6,
        t7,
        t9,
        t10
      ] })
    ] });
    $[16] = t6;
    $[17] = t11;
  } else {
    t11 = $[17];
  }
  return t11;
}
function _temp4$1(lang) {
  return /* @__PURE__ */ jsx(DropdownMenuItem, { className: "cursor-pointer", children: lang.label }, lang.code);
}
function _temp3$2(link) {
  return /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: link.href, className: "text-sm font-medium text-foreground/80 hover:text-primary transition-colors", activeProps: {
    className: "text-primary font-semibold"
  }, children: link.label }) }) }, link.href);
}
function _temp2$2(state) {
  return state.items.reduce(_temp$3, 0);
}
function _temp$3(sum, item) {
  return sum + item.quantity;
}
function Sheet(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(Dialog$1.Root, { "data-slot": "sheet", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function SheetTrigger(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(Dialog$1.Trigger, { "data-slot": "sheet-trigger", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function SheetPortal(t0) {
  const $ = c(4);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  let t1;
  if ($[2] !== props) {
    t1 = /* @__PURE__ */ jsx(Dialog$1.Portal, { "data-slot": "sheet-portal", ...props });
    $[2] = props;
    $[3] = t1;
  } else {
    t1 = $[3];
  }
  return t1;
}
function SheetOverlay(t0) {
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
    t1 = cn("fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(Dialog$1.Overlay, { "data-slot": "sheet-overlay", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SheetContent(t0) {
  const $ = c(17);
  let children;
  let className;
  let props;
  let t1;
  let t2;
  if ($[0] !== t0) {
    ({
      className,
      children,
      side: t1,
      showCloseButton: t2,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
    $[5] = t2;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
    t2 = $[5];
  }
  const side = t1 === void 0 ? "right" : t1;
  const showCloseButton = t2 === void 0 ? true : t2;
  let t3;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(SheetOverlay, {});
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== className) {
    t4 = cn("fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10", className);
    $[7] = className;
    $[8] = t4;
  } else {
    t4 = $[8];
  }
  let t5;
  if ($[9] !== showCloseButton) {
    t5 = showCloseButton && /* @__PURE__ */ jsx(Dialog$1.Close, { "data-slot": "sheet-close", asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "absolute top-4 right-4", size: "icon-sm", children: [
      /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Cancel01Icon, strokeWidth: 2 }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
    ] }) });
    $[9] = showCloseButton;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  if ($[11] !== children || $[12] !== props || $[13] !== side || $[14] !== t4 || $[15] !== t5) {
    t6 = /* @__PURE__ */ jsxs(SheetPortal, { children: [
      t3,
      /* @__PURE__ */ jsxs(Dialog$1.Content, { "data-slot": "sheet-content", "data-side": side, className: t4, ...props, children: [
        children,
        t5
      ] })
    ] });
    $[11] = children;
    $[12] = props;
    $[13] = side;
    $[14] = t4;
    $[15] = t5;
    $[16] = t6;
  } else {
    t6 = $[16];
  }
  return t6;
}
function SheetHeader(t0) {
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
    t1 = cn("flex flex-col gap-1.5 p-4", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "sheet-header", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SheetTitle(t0) {
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
    t1 = cn("font-medium text-foreground", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(Dialog$1.Title, { "data-slot": "sheet-title", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function SheetDescription(t0) {
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
    t1 = cn("text-sm text-muted-foreground", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(Dialog$1.Description, { "data-slot": "sheet-description", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function HeaderMobile() {
  const $ = c(25);
  const [open, setOpen] = useState(false);
  const totalItems = useCartStore(_temp2$1);
  const wishlistCount = useWishlistStore(_temp3$1);
  const t0 = `Wishlist with ${wishlistCount} items`;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(Heart, { className: "size-6" });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== wishlistCount) {
    t2 = wishlistCount > 0 && /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs", children: wishlistCount });
    $[1] = wishlistCount;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Wishlist" });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== t0 || $[5] !== t2) {
    t4 = /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-12 w-12 relative", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/wishlist", "aria-label": t0, children: [
      t1,
      t2,
      t3
    ] }) });
    $[4] = t0;
    $[5] = t2;
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  const t5 = `Cart with ${totalItems} items`;
  let t6;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx(ShoppingBag, { className: "size-6" });
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  let t7;
  if ($[8] !== totalItems) {
    t7 = totalItems > 0 && /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs", children: totalItems });
    $[8] = totalItems;
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  let t8;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Cart" });
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  let t9;
  if ($[11] !== t5 || $[12] !== t7) {
    t9 = /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-12 w-12 relative", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/cart", "aria-label": t5, children: [
      t6,
      t7,
      t8
    ] }) });
    $[11] = t5;
    $[12] = t7;
    $[13] = t9;
  } else {
    t9 = $[13];
  }
  let t10;
  if ($[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", className: "h-12 w-12", children: [
      /* @__PURE__ */ jsx(Menu, { className: "size-6" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle menu" })
    ] }) });
    $[14] = t10;
  } else {
    t10 = $[14];
  }
  let t11;
  if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsx(SheetHeader, { children: /* @__PURE__ */ jsx(SheetTitle, { className: "text-xl font-heading font-semibold", children: "Menu" }) });
    $[15] = t11;
  } else {
    t11 = $[15];
  }
  let t12;
  if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsx("nav", { className: "mt-8 flex flex-col gap-6", children: NAVIGATION_LINKS.map((link) => /* @__PURE__ */ jsx(Link, { to: link.href, onClick: () => setOpen(false), activeProps: {
      className: "bg-primary/10 text-primary"
    }, className: "text-[1.6rem] font-medium py-5 px-6 rounded-lg hover:bg-muted transition-colors text-center", children: link.label }, link.href)) });
    $[16] = t12;
  } else {
    t12 = $[16];
  }
  let t13;
  if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", className: "h-12 w-12 -mt-1", children: [
      /* @__PURE__ */ jsx(Globe, { className: "size-6" }),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Language" })
    ] }) });
    $[17] = t13;
  } else {
    t13 = $[17];
  }
  let t14;
  if ($[18] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ jsxs(SheetContent, { side: "right", className: "w-full sm:w-80 bg-card flex flex-col", children: [
      t11,
      t12,
      /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-8 pb-6 flex justify-center gap-10 border-t", children: [
        /* @__PURE__ */ jsxs(DropdownMenu, { children: [
          t13,
          /* @__PURE__ */ jsx(DropdownMenuContent, { align: "start", className: "bg-card", children: LANGUAGES.map(_temp4) })
        ] }),
        /* @__PURE__ */ jsx(ProfileDropdown, {})
      ] })
    ] });
    $[18] = t14;
  } else {
    t14 = $[18];
  }
  let t15;
  if ($[19] !== open) {
    t15 = /* @__PURE__ */ jsxs(Sheet, { open, onOpenChange: setOpen, children: [
      t10,
      t14
    ] });
    $[19] = open;
    $[20] = t15;
  } else {
    t15 = $[20];
  }
  let t16;
  if ($[21] !== t15 || $[22] !== t4 || $[23] !== t9) {
    t16 = /* @__PURE__ */ jsxs("div", { className: "min-[841px]:hidden flex items-center gap-2", children: [
      t4,
      t9,
      t15
    ] });
    $[21] = t15;
    $[22] = t4;
    $[23] = t9;
    $[24] = t16;
  } else {
    t16 = $[24];
  }
  return t16;
}
function _temp4(lang) {
  return /* @__PURE__ */ jsx(DropdownMenuItem, { className: "cursor-pointer text-base py-3", children: lang.label }, lang.code);
}
function _temp3$1(state_0) {
  return state_0.items.length;
}
function _temp2$1(state) {
  return state.items.reduce(_temp$2, 0);
}
function _temp$2(sum, item) {
  return sum + item.quantity;
}
function Header() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("div", { className: "fixed w-full top-0 left-0 z-50 p-2", children: /* @__PURE__ */ jsxs("header", { className: "w-full md:w-[90%] lg:w-[80%] mx-auto backdrop-blur-xl bg-background/80 border border-border rounded-2xl flex items-center justify-between px-3 md:px-6 py-2 md:py-3 shadow-sm", children: [
      /* @__PURE__ */ jsx(NavigationMenu, { className: "shrink-0", children: /* @__PURE__ */ jsx(NavigationMenuList, { children: /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(Flower2, { className: "w-8 h-8 md:w-7 md:h-7 text-primary", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { className: "text-lg font-heading font-bold text-foreground hidden sm:block", children: "Blossom" })
      ] }) }) }) }),
      /* @__PURE__ */ jsx(HeaderDesktop, {}),
      /* @__PURE__ */ jsx(HeaderMobile, {})
    ] }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function ScrollArea(t0) {
  const $ = c(14);
  let children;
  let className;
  let props;
  if ($[0] !== t0) {
    ({
      className,
      children,
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
    t1 = cn("relative", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  let t2;
  if ($[6] !== children) {
    t2 = /* @__PURE__ */ jsx(ScrollArea$1.Viewport, { "data-slot": "scroll-area-viewport", className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1", children });
    $[6] = children;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  let t3;
  let t4;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(ScrollBar, {});
    t4 = /* @__PURE__ */ jsx(ScrollArea$1.Corner, {});
    $[8] = t3;
    $[9] = t4;
  } else {
    t3 = $[8];
    t4 = $[9];
  }
  let t5;
  if ($[10] !== props || $[11] !== t1 || $[12] !== t2) {
    t5 = /* @__PURE__ */ jsxs(ScrollArea$1.Root, { "data-slot": "scroll-area", className: t1, ...props, children: [
      t2,
      t3,
      t4
    ] });
    $[10] = props;
    $[11] = t1;
    $[12] = t2;
    $[13] = t5;
  } else {
    t5 = $[13];
  }
  return t5;
}
function ScrollBar(t0) {
  const $ = c(11);
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      orientation: t1,
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
  const orientation = t1 === void 0 ? "vertical" : t1;
  let t2;
  if ($[4] !== className) {
    t2 = cn("flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(ScrollArea$1.ScrollAreaThumb, { "data-slot": "scroll-area-thumb", className: "relative flex-1 rounded-full bg-border" });
    $[6] = t3;
  } else {
    t3 = $[6];
  }
  let t4;
  if ($[7] !== orientation || $[8] !== props || $[9] !== t2) {
    t4 = /* @__PURE__ */ jsx(ScrollArea$1.ScrollAreaScrollbar, { "data-slot": "scroll-area-scrollbar", "data-orientation": orientation, orientation, className: t2, ...props, children: t3 });
    $[7] = orientation;
    $[8] = props;
    $[9] = t2;
    $[10] = t4;
  } else {
    t4 = $[10];
  }
  return t4;
}
const alertVariants = cva("group/alert relative grid w-full gap-0.5 rounded-lg border px-4 py-3 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2.5 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4", {
  variants: {
    variant: {
      default: "bg-card text-card-foreground",
      destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function Alert(t0) {
  const $ = c(10);
  let className;
  let props;
  let variant;
  if ($[0] !== t0) {
    ({
      className,
      variant,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = variant;
  } else {
    className = $[1];
    props = $[2];
    variant = $[3];
  }
  let t1;
  if ($[4] !== className || $[5] !== variant) {
    t1 = cn(alertVariants({
      variant
    }), className);
    $[4] = className;
    $[5] = variant;
    $[6] = t1;
  } else {
    t1 = $[6];
  }
  let t2;
  if ($[7] !== props || $[8] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "alert", role: "alert", className: t1, ...props });
    $[7] = props;
    $[8] = t1;
    $[9] = t2;
  } else {
    t2 = $[9];
  }
  return t2;
}
function AlertTitle(t0) {
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
    t1 = cn("font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "alert-title", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function AlertDescription(t0) {
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
    t1 = cn("text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "alert-description", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function Spinner(t0) {
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
    t1 = cn("size-4 animate-spin", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Loading03Icon, strokeWidth: 2, role: "status", "aria-label": "Loading", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
const getFilter = (v) => typeof v === "function" ? void 0 : v.filter;
function BlurFade({
  children,
  className,
  variant,
  duration = 0.4,
  delay = 0,
  offset = 6,
  direction = "down",
  inView = false,
  inViewMargin = "-50px",
  blur = "6px",
  ...props
}) {
  const ref = useRef(null);
  const inViewResult = useInView(ref, {
    once: true,
    margin: inViewMargin
  });
  const isInView = !inView || inViewResult;
  const defaultVariants = {
    hidden: {
      [direction === "left" || direction === "right" ? "x" : "y"]: direction === "right" || direction === "down" ? -offset : offset,
      opacity: 0,
      filter: `blur(${blur})`
    },
    visible: {
      [direction === "left" || direction === "right" ? "x" : "y"]: 0,
      opacity: 1,
      filter: `blur(0px)`
    }
  };
  const combinedVariants = variant ?? defaultVariants;
  const hiddenFilter = getFilter(combinedVariants.hidden);
  const visibleFilter = getFilter(combinedVariants.visible);
  const shouldTransitionFilter = hiddenFilter != null && visibleFilter != null && hiddenFilter !== visibleFilter;
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(motion.div, { ref, initial: "hidden", animate: isInView ? "visible" : "hidden", exit: "hidden", variants: combinedVariants, transition: {
    delay: 0.04 + delay,
    duration,
    ease: "easeOut",
    ...shouldTransitionFilter ? {
      filter: {
        duration
      }
    } : {}
  }, className, ...props, children }) });
}
const Ripple = React__default.memo(function Ripple2(t0) {
  const $ = c(19);
  let className;
  let props;
  let t1;
  let t2;
  let t3;
  if ($[0] !== t0) {
    ({
      mainCircleSize: t1,
      mainCircleOpacity: t2,
      numCircles: t3,
      className,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = t1;
    $[4] = t2;
    $[5] = t3;
  } else {
    className = $[1];
    props = $[2];
    t1 = $[3];
    t2 = $[4];
    t3 = $[5];
  }
  const mainCircleSize = t1 === void 0 ? 210 : t1;
  const mainCircleOpacity = t2 === void 0 ? 0.24 : t2;
  const numCircles = t3 === void 0 ? 8 : t3;
  let t4;
  if ($[6] !== className) {
    t4 = cn("pointer-events-none absolute inset-0 mask-[linear-gradient(to_bottom,white,transparent)] select-none", className);
    $[6] = className;
    $[7] = t4;
  } else {
    t4 = $[7];
  }
  let t5;
  if ($[8] !== mainCircleOpacity || $[9] !== mainCircleSize || $[10] !== numCircles) {
    let t62;
    if ($[12] !== mainCircleOpacity || $[13] !== mainCircleSize) {
      t62 = (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        return /* @__PURE__ */ jsx("div", { className: "animate-ripple bg-foreground/25 absolute rounded-full border shadow-xl", style: {
          "--i": i,
          width: `${size}px`,
          height: `${size}px`,
          opacity,
          animationDelay,
          borderStyle: "solid",
          borderWidth: "1px",
          borderColor: "var(--foreground)",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%) scale(1)"
        } }, i);
      };
      $[12] = mainCircleOpacity;
      $[13] = mainCircleSize;
      $[14] = t62;
    } else {
      t62 = $[14];
    }
    t5 = Array.from({
      length: numCircles
    }, t62);
    $[8] = mainCircleOpacity;
    $[9] = mainCircleSize;
    $[10] = numCircles;
    $[11] = t5;
  } else {
    t5 = $[11];
  }
  let t6;
  if ($[15] !== props || $[16] !== t4 || $[17] !== t5) {
    t6 = /* @__PURE__ */ jsx("div", { className: t4, ...props, children: t5 });
    $[15] = props;
    $[16] = t4;
    $[17] = t5;
    $[18] = t6;
  } else {
    t6 = $[18];
  }
  return t6;
});
Ripple.displayName = "Ripple";
function Newsletter() {
  const $ = c(15);
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  let t0;
  if ($[0] !== email) {
    t0 = (e) => {
      e.preventDefault();
      if (email) {
        setLoading(true);
        setTimeout(() => {
          setSubmitted(true);
          setLoading(false);
          setEmail("");
        }, 800);
      }
    };
    $[0] = email;
    $[1] = t0;
  } else {
    t0 = $[1];
  }
  const handleSubmit = t0;
  let t1;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(Ripple, { className: "opacity-20", color: "#4a7c59" });
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  let t2;
  let t3;
  let t4;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(Leaf, { className: "w-12 h-12 mx-auto mb-6 opacity-80" });
    t3 = /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-heading font-bold mb-4", children: "Stay in the Loop" });
    t4 = /* @__PURE__ */ jsx("p", { className: "text-lg opacity-90 mb-8", children: "Subscribe to our newsletter for new scents, exclusive offers, and sustainability tips. Join the Blossom community." });
    $[3] = t2;
    $[4] = t3;
    $[5] = t4;
  } else {
    t2 = $[3];
    t3 = $[4];
    t4 = $[5];
  }
  let t5;
  if ($[6] !== email || $[7] !== handleSubmit || $[8] !== loading || $[9] !== submitted) {
    t5 = submitted ? /* @__PURE__ */ jsxs(Alert, { className: "bg-white/10 backdrop-blur-sm border-white/20", children: [
      /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-white" }),
      /* @__PURE__ */ jsx(AlertTitle, { className: "text-lg font-medium text-white", children: "Thank you for subscribing!" }),
      /* @__PURE__ */ jsx(AlertDescription, { className: "opacity-80 mt-2 text-gray-200", children: "We'll keep you updated with the latest from Blossom." })
    ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "flex flex-col sm:flex-row gap-4 max-w-md mx-auto", children: [
      /* @__PURE__ */ jsx(Input, { type: "email", placeholder: "Enter your email", value: email, onChange: (e_0) => setEmail(e_0.target.value), className: "flex-1 h-12 bg-white border text-gray-950 dark:text-gray-100 placeholder:text-gray-900 dark:placeholder:text-gray-300 focus-visible:ring-[#d4af37] focus-visible:ring-2 border-2 dark:bg-black/50", required: true }),
      /* @__PURE__ */ jsx(Button, { type: "submit", variant: "secondary", className: "group h-12 px-8 bg-[#d4af37] text-black font-bold hover:bg-[#c9a227] shadow-lg", disabled: loading, children: loading ? /* @__PURE__ */ jsx(Spinner, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
        "Subscribe",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })
      ] }) })
    ] });
    $[6] = email;
    $[7] = handleSubmit;
    $[8] = loading;
    $[9] = submitted;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  let t6;
  let t7;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx(Separator, { className: "my-6 bg-white/20" });
    t7 = /* @__PURE__ */ jsx("p", { className: "text-sm opacity-70 text-gray-200", children: "We respect your privacy. Unsubscribe at any time." });
    $[11] = t6;
    $[12] = t7;
  } else {
    t6 = $[11];
    t7 = $[12];
  }
  let t8;
  if ($[13] !== t5) {
    t8 = /* @__PURE__ */ jsxs("section", { className: "py-24 bg-[#2d3b2d] text-white relative overflow-hidden", children: [
      t1,
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
        t2,
        t3,
        t4,
        t5,
        t6,
        t7
      ] }) }) })
    ] });
    $[13] = t5;
    $[14] = t8;
  } else {
    t8 = $[14];
  }
  return t8;
}
const footerLinks = {
  shop: [{
    label: "All Products",
    href: "/products"
  }, {
    label: "My Cart",
    href: "/cart"
  }],
  company: [{
    label: "About Us",
    href: "/about"
  }, {
    label: "Contact",
    href: "/contact"
  }],
  support: [{
    label: "FAQ",
    href: "/contact#faq"
  }, {
    label: "Shipping Info",
    href: "/contact#shipping"
  }, {
    label: "Returns",
    href: "/contact#returns"
  }],
  legal: [{
    label: "Privacy Policy",
    href: "/privacy"
  }, {
    label: "Terms of Service",
    href: "/terms"
  }, {
    label: "Cookie Policy",
    href: "/cookies"
  }]
};
const socialLinks = [{
  icon: InstagramFreeIcons,
  href: "#",
  label: "Follow us on Instagram",
  color: "#E4405F"
}, {
  icon: NewTwitterFreeIcons,
  href: "#",
  label: "Follow us on Twitter",
  color: "black"
}, {
  icon: Facebook02FreeIcons,
  href: "#",
  label: "Follow us on Facebook",
  color: "#1877F2"
}];
const linkSections = [{
  title: "Shop",
  links: footerLinks.shop
}, {
  title: "Company",
  links: footerLinks.company
}, {
  title: "Support",
  links: footerLinks.support
}, {
  title: "Legal",
  links: footerLinks.legal
}];
function Footer() {
  const $ = c(7);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(Newsletter, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(NavigationMenu, { orientation: "vertical", className: "max-w-full", children: /* @__PURE__ */ jsx(NavigationMenuList, { className: "flex-col items-start gap-0", children: /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { id: "link-footer", to: "/#link-footer", className: "flex items-center gap-2 mb-4 hover:bg-white/50 active:bg-white/40 focus-visible:bg-white/5 dark:hover:bg-black/5 dark:active:bg-black/20 dark:focus-visible:bg-black/5", children: [
      /* @__PURE__ */ jsx(Flower2, { className: "w-8 h-8" }),
      /* @__PURE__ */ jsx("span", { className: "text-xl font-heading font-bold", children: "Blossom" })
    ] }) }) }) }) });
    t2 = /* @__PURE__ */ jsx("p", { className: "text-sm opacity-70 mb-6 leading-relaxed", children: "Natural fragrances crafted from upcycled fruit peels. Fresh, sustainable, and made with love." });
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  let t4;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "col-span-2 md:col-span-1", children: [
        t1,
        t2,
        /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: socialLinks.map(_temp$1) })
      ] }),
      linkSections.map(_temp3)
    ] });
    t4 = /* @__PURE__ */ jsx(Separator, { className: "mt-12 bg-background/10" });
    $[3] = t3;
    $[4] = t4;
  } else {
    t3 = $[3];
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsxs("p", { className: "text-sm opacity-70", children: [
      "© ",
      (/* @__PURE__ */ new Date()).getFullYear(),
      " Blossom. All rights reserved."
    ] });
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxs(Fragment, { children: [
      t0,
      /* @__PURE__ */ jsx("footer", { className: "bg-foreground text-background", children: /* @__PURE__ */ jsx(ScrollArea, { className: "h-auto", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
        t3,
        t4,
        /* @__PURE__ */ jsxs("div", { className: "pt-8 flex flex-col md:flex-row justify-between items-center gap-4", children: [
          t5,
          /* @__PURE__ */ jsxs(Tooltip, { children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx("span", { className: "text-sm opacity-70 cursor-default", children: "Made with 🌸 for a greener world" }) }),
            /* @__PURE__ */ jsx(TooltipContent, { children: "Sustainable & Eco-Friendly" })
          ] })
        ] })
      ] }) }) })
    ] });
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  return t6;
}
function _temp3(section) {
  return /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(NavigationMenu, { orientation: "vertical", className: "max-w-full", children: /* @__PURE__ */ jsxs(NavigationMenuList, { className: "flex-col items-start gap-3", children: [
    /* @__PURE__ */ jsx(NavigationMenuItem, { className: "font-heading font-semibold mb-1", children: section.title }),
    section.links.map(_temp2)
  ] }) }) }, section.title);
}
function _temp2(link) {
  return /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(Link, { to: link.href, className: "text-sm text-muted hover:text-white dark:hover:text-foreground hover:bg-muted/50 px-2 py-1 rounded-md -mx-2 transition-colors", children: link.label }) }) }, link.label);
}
function _temp$1(social, index) {
  return /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "rounded-full dark:hover:bg-white hover:bg-white/80 bg-white/10 border border-white/20 footer-social-btn", "data-social": ["instagram", "twitter", "facebook"][index], asChild: true, children: /* @__PURE__ */ jsx("a", { href: social.href, "aria-label": social.label, className: "flex items-center justify-center", children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: social.icon, className: "w-6 h-6", color: social.color }) }) }) }),
    /* @__PURE__ */ jsx(TooltipContent, { children: social.label })
  ] }, social.label);
}
function CookieBanner() {
  const $ = c(9);
  const [visible, setVisible] = useState(false);
  let t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = () => {
      const consent = localStorage.getItem("cookie-consent");
      if (!consent) {
        setVisible(true);
      }
    };
    t1 = [];
    $[0] = t0;
    $[1] = t1;
  } else {
    t0 = $[0];
    t1 = $[1];
  }
  useEffect(t0, t1);
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = () => {
      localStorage.setItem("cookie-consent", "accepted");
      setVisible(false);
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const accept = t2;
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = () => {
      localStorage.setItem("cookie-consent", "declined");
      setVisible(false);
    };
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const decline = t3;
  if (!visible) {
    return null;
  }
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx(Cookie, { className: "w-6 h-6 text-primary shrink-0 mt-0.5" });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx(AlertTitle, { className: "text-base font-heading font-semibold text-card-foreground mb-1", children: "We use cookies" });
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxs(AlertDescription, { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: [
      "We use essential cookies to make our site work. These cookies are necessary for the website to function and cannot be switched off.",
      " ",
      /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "text-primary underline underline-offset-2", children: "Learn more" })
    ] });
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  let t7;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
      t5,
      t6,
      /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
        /* @__PURE__ */ jsx(Button, { size: "default", onClick: accept, children: "Accept" }),
        /* @__PURE__ */ jsx(Button, { size: "default", variant: "outline", onClick: decline, children: "Decline" })
      ] })
    ] });
    $[7] = t7;
  } else {
    t7 = $[7];
  }
  let t8;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx("div", { className: "fixed bottom-0 left-0 right-0 z-50 p-4", role: "dialog", "aria-label": "Cookie consent", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsx(Alert, { className: "max-w-3xl mx-auto bg-card border border-border rounded-xl shadow-lg p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
      t4,
      t7,
      /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", onClick: decline, "aria-label": "Close cookie banner", className: "text-muted-foreground hover:text-foreground", children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" }) })
    ] }) }) }) });
    $[8] = t8;
  } else {
    t8 = $[8];
  }
  return t8;
}
const useCompareStore = create((set, get) => ({
  items: [],
  addItem: (productId) => {
    const product = getProductById(productId);
    if (!product || get().isInCompare(productId) || get().items.length >= 4) return;
    set((state) => ({
      items: [...state.items, {
        id: crypto.randomUUID(),
        productId: product.id,
        product,
        addedAt: /* @__PURE__ */ new Date()
      }]
    }));
  },
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId)
    }));
  },
  isInCompare: (productId) => {
    return get().items.some((item) => item.productId === productId);
  },
  clearCompare: () => {
    set({
      items: []
    });
  }
}));
function CompareIndicator() {
  const $ = c(3);
  const items = useCompareStore(_temp);
  const count = items.length;
  if (count === 0) {
    return null;
  }
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(GitCompare, { className: "w-5 h-5" });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] !== count) {
    t1 = /* @__PURE__ */ jsxs(Link, { to: "/compare", className: "fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all group", children: [
      /* @__PURE__ */ jsxs("div", { className: "relative", children: [
        t0,
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-background text-foreground", children: count })
      ] }),
      /* @__PURE__ */ jsxs("span", { className: "font-medium text-sm", children: [
        "Compare (",
        count,
        ")"
      ] })
    ] });
    $[1] = count;
    $[2] = t1;
  } else {
    t1 = $[2];
  }
  return t1;
}
function _temp(state) {
  return state.items;
}
const Toaster = (t0) => {
  const $ = c(8);
  let props;
  if ($[0] !== t0) {
    ({
      ...props
    } = t0);
    $[0] = t0;
    $[1] = props;
  } else {
    props = $[1];
  }
  const {
    theme: t1
  } = useTheme();
  const theme = t1 === void 0 ? "system" : t1;
  const t2 = theme;
  let t3;
  let t4;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = {
      success: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: CheckmarkCircle02Icon, strokeWidth: 2, className: "size-4" }),
      info: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: InformationCircleIcon, strokeWidth: 2, className: "size-4" }),
      warning: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Alert02Icon, strokeWidth: 2, className: "size-4" }),
      error: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: MultiplicationSignCircleIcon, strokeWidth: 2, className: "size-4" }),
      loading: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Loading03Icon, strokeWidth: 2, className: "size-4 animate-spin" })
    };
    t4 = {
      "--normal-bg": "var(--popover)",
      "--normal-text": "var(--popover-foreground)",
      "--normal-border": "var(--border)",
      "--border-radius": "var(--radius)"
    };
    $[2] = t3;
    $[3] = t4;
  } else {
    t3 = $[2];
    t4 = $[3];
  }
  let t5;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = {
      classNames: {
        toast: "cn-toast"
      }
    };
    $[4] = t5;
  } else {
    t5 = $[4];
  }
  let t6;
  if ($[5] !== props || $[6] !== t2) {
    t6 = /* @__PURE__ */ jsx(Toaster$1, { theme: t2, className: "toaster group", icons: t3, style: t4, toastOptions: t5, ...props });
    $[5] = props;
    $[6] = t2;
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  return t6;
};
function ErrorHome(t0) {
  const $ = c(6);
  const {
    className
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== className) {
    t2 = /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { className, asChild: true, variant: "default", children: t1 }) });
    $[1] = className;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(TooltipContent, { children: "Return to homepage" });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== t2) {
    t4 = /* @__PURE__ */ jsxs(Tooltip, { children: [
      t2,
      t3
    ] });
    $[4] = t2;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  return t4;
}
function Empty(t0) {
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
    t1 = cn("flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-lg border-dashed p-12 text-center text-balance", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "empty", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function EmptyHeader(t0) {
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
    t1 = cn("flex max-w-sm flex-col items-center gap-2", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "empty-header", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
const emptyMediaVariants = cva("mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0", {
  variants: {
    variant: {
      default: "bg-transparent",
      icon: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"
    }
  },
  defaultVariants: {
    variant: "default"
  }
});
function EmptyMedia(t0) {
  const $ = c(11);
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      variant: t1,
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
  const variant = t1 === void 0 ? "default" : t1;
  let t2;
  if ($[4] !== className || $[5] !== variant) {
    t2 = cn(emptyMediaVariants({
      variant,
      className
    }));
    $[4] = className;
    $[5] = variant;
    $[6] = t2;
  } else {
    t2 = $[6];
  }
  let t3;
  if ($[7] !== props || $[8] !== t2 || $[9] !== variant) {
    t3 = /* @__PURE__ */ jsx("div", { "data-slot": "empty-icon", "data-variant": variant, className: t2, ...props });
    $[7] = props;
    $[8] = t2;
    $[9] = variant;
    $[10] = t3;
  } else {
    t3 = $[10];
  }
  return t3;
}
function EmptyTitle(t0) {
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
    t1 = cn("text-lg font-medium tracking-tight", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "empty-title", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function EmptyDescription(t0) {
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
    t1 = cn("text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "empty-description", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function EmptyContent(t0) {
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
    t1 = cn("flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "empty-content", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function Avatar(t0) {
  const $ = c(10);
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      size: t1,
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
  const size = t1 === void 0 ? "default" : t1;
  let t2;
  if ($[4] !== className) {
    t2 = cn("group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== props || $[7] !== size || $[8] !== t2) {
    t3 = /* @__PURE__ */ jsx(Avatar$1.Root, { "data-slot": "avatar", "data-size": size, className: t2, ...props });
    $[6] = props;
    $[7] = size;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  return t3;
}
function AvatarFallback(t0) {
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
    t1 = cn("flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx(Avatar$1.Fallback, { "data-slot": "avatar-fallback", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function AnimatedGradientText(t0) {
  const $ = c(18);
  let children;
  let className;
  let props;
  let t1;
  let t2;
  let t3;
  if ($[0] !== t0) {
    ({
      children,
      className,
      speed: t1,
      colorFrom: t2,
      colorTo: t3,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = children;
    $[2] = className;
    $[3] = props;
    $[4] = t1;
    $[5] = t2;
    $[6] = t3;
  } else {
    children = $[1];
    className = $[2];
    props = $[3];
    t1 = $[4];
    t2 = $[5];
    t3 = $[6];
  }
  const speed = t1 === void 0 ? 1 : t1;
  const colorFrom = t2 === void 0 ? "#ffaa40" : t2;
  const colorTo = t3 === void 0 ? "#9c40ff" : t3;
  const t4 = `${speed * 300}%`;
  let t5;
  if ($[7] !== colorFrom || $[8] !== colorTo || $[9] !== t4) {
    t5 = {
      "--bg-size": t4,
      "--color-from": colorFrom,
      "--color-to": colorTo
    };
    $[7] = colorFrom;
    $[8] = colorTo;
    $[9] = t4;
    $[10] = t5;
  } else {
    t5 = $[10];
  }
  const t6 = t5;
  let t7;
  if ($[11] !== className) {
    t7 = cn("animate-gradient inline bg-linear-to-r from-(--color-from) via-(--color-to) to-(--color-from) bg-size-[var(--bg-size)_100%] bg-clip-text text-transparent", className);
    $[11] = className;
    $[12] = t7;
  } else {
    t7 = $[12];
  }
  let t8;
  if ($[13] !== children || $[14] !== props || $[15] !== t6 || $[16] !== t7) {
    t8 = /* @__PURE__ */ jsx("span", { style: t6, className: t7, ...props, children });
    $[13] = children;
    $[14] = props;
    $[15] = t6;
    $[16] = t7;
    $[17] = t8;
  } else {
    t8 = $[17];
  }
  return t8;
}
function Skeleton(t0) {
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
    t1 = cn("animate-pulse rounded-md bg-muted", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "skeleton", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function Card(t0) {
  const $ = c(10);
  let className;
  let props;
  let t1;
  if ($[0] !== t0) {
    ({
      className,
      size: t1,
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
  const size = t1 === void 0 ? "default" : t1;
  let t2;
  if ($[4] !== className) {
    t2 = cn("group/card flex flex-col gap-6 overflow-hidden rounded-xl bg-card py-6 text-sm text-card-foreground shadow-xs ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl", className);
    $[4] = className;
    $[5] = t2;
  } else {
    t2 = $[5];
  }
  let t3;
  if ($[6] !== props || $[7] !== size || $[8] !== t2) {
    t3 = /* @__PURE__ */ jsx("div", { "data-slot": "card", "data-size": size, className: t2, ...props });
    $[6] = props;
    $[7] = size;
    $[8] = t2;
    $[9] = t3;
  } else {
    t3 = $[9];
  }
  return t3;
}
function CardHeader(t0) {
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
    t1 = cn("group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-6 group-data-[size=sm]/card:px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "card-header", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function CardTitle(t0) {
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
    t1 = cn("text-base leading-normal font-medium group-data-[size=sm]/card:text-sm", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "card-title", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function CardDescription(t0) {
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
    t1 = cn("text-sm text-muted-foreground", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "card-description", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function CardAction(t0) {
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
    t1 = cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "card-action", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function CardContent(t0) {
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
    t1 = cn("px-6 group-data-[size=sm]/card:px-4", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "card-content", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function CardFooter(t0) {
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
    t1 = cn("flex items-center rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4", className);
    $[3] = className;
    $[4] = t1;
  } else {
    t1 = $[4];
  }
  let t2;
  if ($[5] !== props || $[6] !== t1) {
    t2 = /* @__PURE__ */ jsx("div", { "data-slot": "card-footer", className: t1, ...props });
    $[5] = props;
    $[6] = t1;
    $[7] = t2;
  } else {
    t2 = $[7];
  }
  return t2;
}
function Progress(t0) {
  const $ = c(12);
  let className;
  let props;
  let value;
  if ($[0] !== t0) {
    ({
      className,
      value,
      ...props
    } = t0);
    $[0] = t0;
    $[1] = className;
    $[2] = props;
    $[3] = value;
  } else {
    className = $[1];
    props = $[2];
    value = $[3];
  }
  let t1;
  if ($[4] !== className) {
    t1 = cn("relative flex h-1.5 w-full items-center overflow-x-hidden rounded-full bg-muted", className);
    $[4] = className;
    $[5] = t1;
  } else {
    t1 = $[5];
  }
  const t2 = `translateX(-${100 - (value || 0)}%)`;
  let t3;
  if ($[6] !== t2) {
    t3 = /* @__PURE__ */ jsx(Progress$1.Indicator, { "data-slot": "progress-indicator", className: "size-full flex-1 bg-primary transition-all", style: {
      transform: t2
    } });
    $[6] = t2;
    $[7] = t3;
  } else {
    t3 = $[7];
  }
  let t4;
  if ($[8] !== props || $[9] !== t1 || $[10] !== t3) {
    t4 = /* @__PURE__ */ jsx(Progress$1.Root, { "data-slot": "progress", className: t1, ...props, children: t3 });
    $[8] = props;
    $[9] = t1;
    $[10] = t3;
    $[11] = t4;
  } else {
    t4 = $[11];
  }
  return t4;
}
const Route$f = createRootRoute({
  head: () => ({
    meta: [{
      charSet: "utf-8"
    }, {
      name: "viewport",
      content: "width=device-width, initial-scale=1"
    }, {
      name: "theme-color",
      content: "#3d5a3d"
    }],
    links: [{
      rel: "icon",
      type: "image/svg+xml",
      href: "/logo.svg"
    }, {
      rel: "canonical",
      href: "https://blossom.com"
    }]
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorOccurred,
  pendingComponent: PageLoading
});
function RootComponent() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsxs(RootDocument, { children: [
      /* @__PURE__ */ jsx(Header, {}),
      /* @__PURE__ */ jsx(Outlet, {}),
      /* @__PURE__ */ jsx(Footer, {}),
      /* @__PURE__ */ jsx(CookieBanner, {}),
      /* @__PURE__ */ jsx(CompareIndicator, {}),
      /* @__PURE__ */ jsx(Toaster, {})
    ] });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function NotFound() {
  const $ = c(3);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(EmptyMedia, { variant: "default", children: /* @__PURE__ */ jsx(Avatar, { className: "w-24 h-24 bg-primary/10", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(Flower2, { className: "w-12 h-12 text-primary" }) }) }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxs(EmptyHeader, { children: [
      t0,
      /* @__PURE__ */ jsx(EmptyTitle, { className: "text-6xl font-heading font-bold", children: /* @__PURE__ */ jsx(AnimatedGradientText, { children: "404" }) }),
      /* @__PURE__ */ jsx(EmptyDescription, { className: "text-2xl font-heading font-semibold text-foreground", children: "Page Not Found" }),
      /* @__PURE__ */ jsx(EmptyDescription, { children: "Oops! It seems this page has wilted away. Let's get you back to fresh scents." })
    ] });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Empty, { className: "max-w-md mx-auto text-center", children: [
      t1,
      /* @__PURE__ */ jsx(EmptyContent, { children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "group", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/", children: [
        /* @__PURE__ */ jsx(Home, { className: "mr-2 w-4 h-4" }),
        "Back to Home"
      ] }) }) })
    ] }) }) }) }) });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  return t2;
}
function PageLoading() {
  const $ = c(4);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(Spinner, { className: "size-14 mx-auto" }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx("h1", { className: "text-sm select-none text-muted-foreground", children: "Loading..." });
    t2 = /* @__PURE__ */ jsx(Progress, { value: 33, className: "h-1" });
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "max-w-sm mx-auto text-center", children: [
      t0,
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        t1,
        t2,
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4 mx-auto" }),
          /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/2 mx-auto" })
        ] })
      ] })
    ] }) }) }) }) });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  return t3;
}
function ErrorOccurred() {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Alert, { variant: "destructive", className: "max-w-md mx-auto text-center", children: [
      /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 mx-auto" }),
      /* @__PURE__ */ jsx(AlertTitle, { className: "text-2xl font-heading font-bold", children: "Unexpected Error" }),
      /* @__PURE__ */ jsx(AlertDescription, { className: "mt-2", children: "Something went wrong. Please try again." }),
      /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
      /* @__PURE__ */ jsx(ErrorHome, { className: "text-xl w-50" })
    ] }) }) }) }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
}
function RootDocument(t0) {
  const $ = c(6);
  const {
    children
  } = t0;
  let t1;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) });
    $[0] = t1;
  } else {
    t1 = $[0];
  }
  let t2;
  if ($[1] !== children) {
    t2 = /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(ThemeProvider, { attribute: "class", defaultTheme: "light", enableSystem: true, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 300, children }) }) });
    $[1] = children;
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(Scripts, {});
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] !== t2) {
    t4 = /* @__PURE__ */ jsxs("html", { lang: "en", children: [
      t1,
      /* @__PURE__ */ jsxs("body", { children: [
        t2,
        t3
      ] })
    ] });
    $[4] = t2;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  return t4;
}
const $$splitComponentImporter$e = () => import("./wishlist-Dl3I1dv2.js");
const Route$e = createFileRoute("/wishlist")({
  component: lazyRouteComponent($$splitComponentImporter$e, "component")
});
const $$splitComponentImporter$d = () => import("./terms-CNoo2fxf.js");
const Route$d = createFileRoute("/terms")({
  component: lazyRouteComponent($$splitComponentImporter$d, "component")
});
const $$splitComponentImporter$c = () => import("./privacy-B47EYer5.js");
const Route$c = createFileRoute("/privacy")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./pricing-CFQ2-IlC.js");
const Route$b = createFileRoute("/pricing")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./custom-DQFBHM8_.js");
const Route$a = createFileRoute("/custom")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./cookies-DAP4vkjk.js");
const Route$9 = createFileRoute("/cookies")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./contact-N6ESCTeN.js");
const Route$8 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./configurator-C4wmpUEM.js");
const Route$7 = createFileRoute("/configurator")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./compare-nDJ_jGou.js");
const Route$6 = createFileRoute("/compare")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./checkout-C-nv09aL.js");
const Route$5 = createFileRoute("/checkout")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./cart-Bczo7kcY.js");
const Route$4 = createFileRoute("/cart")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-BrNr7Lcm.js");
const Route$3 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-DvDmN5Kd.js");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-DIjS19xo.js");
const Route$1 = createFileRoute("/products/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  validateSearch: (search) => {
    return {
      q: search.q || "",
      category: search.category || "",
      notes: search.notes || "",
      priceMin: Number(search.priceMin) || MIN_PRICE_FILTER,
      priceMax: Number(search.priceMax) || MAX_PRICE_FILTER,
      featured: search.featured || "",
      badges: search.badges || "",
      sizes: search.sizes || "",
      inStock: search.inStock === "true"
    };
  }
});
const $$splitComponentImporter = () => import("./_productId-CzntgmV9.js");
const Route = createFileRoute("/product/$productId")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WishlistRoute = Route$e.update({
  id: "/wishlist",
  path: "/wishlist",
  getParentRoute: () => Route$f
});
const TermsRoute = Route$d.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$f
});
const PrivacyRoute = Route$c.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$f
});
const PricingRoute = Route$b.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$f
});
const CustomRoute = Route$a.update({
  id: "/custom",
  path: "/custom",
  getParentRoute: () => Route$f
});
const CookiesRoute = Route$9.update({
  id: "/cookies",
  path: "/cookies",
  getParentRoute: () => Route$f
});
const ContactRoute = Route$8.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$f
});
const ConfiguratorRoute = Route$7.update({
  id: "/configurator",
  path: "/configurator",
  getParentRoute: () => Route$f
});
const CompareRoute = Route$6.update({
  id: "/compare",
  path: "/compare",
  getParentRoute: () => Route$f
});
const CheckoutRoute = Route$5.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$f
});
const CartRoute = Route$4.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$f
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$f
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$f
});
const ProductsIndexRoute = Route$1.update({
  id: "/products/",
  path: "/products/",
  getParentRoute: () => Route$f
});
const ProductProductIdRoute = Route.update({
  id: "/product/$productId",
  path: "/product/$productId",
  getParentRoute: () => Route$f
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CartRoute,
  CheckoutRoute,
  CompareRoute,
  ConfiguratorRoute,
  ContactRoute,
  CookiesRoute,
  CustomRoute,
  PricingRoute,
  PrivacyRoute,
  TermsRoute,
  WishlistRoute,
  ProductProductIdRoute,
  ProductsIndexRoute
};
const routeTree = Route$f._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: false
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Sheet as $,
  Avatar as A,
  Badge as B,
  Card as C,
  useCompareStore as D,
  Empty as E,
  SUBSCRIPTION_PLANS as F,
  CardFooter as G,
  Progress as H,
  Input as I,
  AnimatedGradientText as J,
  CardAction as K,
  Label as L,
  MAX_QUANTITY as M,
  Tabs as N,
  TabsList as O,
  PRICE_DISCOUNT_MULTIPLIER as P,
  TabsTrigger as Q,
  TabsContent as R,
  ScrollArea as S,
  TooltipTrigger as T,
  MAX_PRICE_FILTER as U,
  MIN_PRICE_FILTER as V,
  SheetTrigger as W,
  SheetHeader as X,
  SheetTitle as Y,
  SheetDescription as Z,
  SheetContent as _,
  EmptyHeader as a,
  categories as a0,
  badges as a1,
  useAuthStore as a2,
  getProductById as a3,
  getSimilarProducts as a4,
  getRelatedSizes as a5,
  getAllBaseProducts as a6,
  MAX_COMPARE_ITEMS as a7,
  Skeleton as a8,
  router as a9,
  EmptyMedia as b,
  EmptyTitle as c,
  EmptyDescription as d,
  EmptyContent as e,
  Button as f,
  AvatarFallback as g,
  BlurFade as h,
  useCartStore as i,
  TooltipContent as j,
  Tooltip as k,
  Separator as l,
  CardHeader as m,
  CardTitle as n,
  CardContent as o,
  CardDescription as p,
  useSubscriptionStore as q,
  getScentNotesByCategory as r,
  BOTTLE_SIZES as s,
  PRICE_PARTIAL_DISCOUNT_MULTIPLIER as t,
  useWishlistStore as u,
  Alert as v,
  AlertTitle as w,
  AlertDescription as x,
  cn as y,
  products as z
};

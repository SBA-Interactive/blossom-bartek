import { Link, createRootRoute, Outlet, HeadContent, Scripts, createFileRoute, lazyRouteComponent, createRouter } from "@tanstack/react-router";
import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { SunMedium, Moon, Mail, Lock, EyeOff, Eye, User, Sparkles, CreditCard, Heart, LogOut, ShoppingBag, Globe, Menu, Flower2, Leaf, CheckCircle, ArrowRight, Cookie, X, GitCompare, AlertTriangle, Home } from "lucide-react";
import { cva } from "class-variance-authority";
import { Slot, NavigationMenu as NavigationMenu$1, DropdownMenu as DropdownMenu$1, Separator as Separator$1, Label as Label$1, Dialog as Dialog$1, Tabs as Tabs$1, ScrollArea as ScrollArea$1, Avatar as Avatar$1, Progress as Progress$1 } from "radix-ui";
import { clsx } from "clsx";
import { twMerge } from "tailwind-merge";
import * as TooltipPrimitive from "@radix-ui/react-tooltip";
import { create } from "zustand";
import React__default, { useState, useRef, useEffect, useCallback } from "react";
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
const buttonVariants = cva(
  "group/button inline-flex shrink-0 items-center justify-center rounded-md border border-transparent bg-clip-padding text-sm font-medium whitespace-nowrap transition-all outline-none select-none focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 active:not-aria-[haspopup]:translate-y-px disabled:pointer-events-none disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
  {
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
  }
);
function Button({
  className,
  variant = "default",
  size = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "button";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "button",
      "data-variant": variant,
      "data-size": size,
      className: cn(buttonVariants({ variant, size, className })),
      ...props
    }
  );
}
const badgeVariants = cva(
  "group/badge inline-flex h-5 w-fit shrink-0 items-center justify-center gap-1 overflow-hidden rounded-4xl border border-transparent px-2 py-0.5 text-xs font-medium whitespace-nowrap transition-all focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 has-data-[icon=inline-end]:pr-1.5 has-data-[icon=inline-start]:pl-1.5 aria-invalid:border-destructive aria-invalid:ring-destructive/20 dark:aria-invalid:ring-destructive/40 [&>svg]:pointer-events-none [&>svg]:size-3!",
  {
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
  }
);
function Badge({
  className,
  variant = "default",
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot.Root : "span";
  return /* @__PURE__ */ jsx(
    Comp,
    {
      "data-slot": "badge",
      "data-variant": variant,
      className: cn(badgeVariants({ variant }), className),
      ...props
    }
  );
}
function NavigationMenu({
  className,
  children,
  viewport = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    NavigationMenu$1.Root,
    {
      "data-slot": "navigation-menu",
      "data-viewport": viewport,
      className: cn(
        "group/navigation-menu relative flex max-w-max flex-1 items-center justify-center",
        className
      ),
      ...props,
      children: [
        children,
        viewport && /* @__PURE__ */ jsx(NavigationMenuViewport, {})
      ]
    }
  );
}
function NavigationMenuList({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$1.List,
    {
      "data-slot": "navigation-menu-list",
      className: cn("group flex flex-1 list-none items-center justify-center gap-0", className),
      ...props
    }
  );
}
function NavigationMenuItem({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$1.Item,
    {
      "data-slot": "navigation-menu-item",
      className: cn("relative", className),
      ...props
    }
  );
}
cva(
  "group/navigation-menu-trigger inline-flex h-9 w-max items-center justify-center rounded-md px-4 py-2 text-sm font-medium transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 disabled:pointer-events-none disabled:opacity-50 data-popup-open:bg-muted/50 data-popup-open:hover:bg-muted data-open:bg-muted/50 data-open:hover:bg-muted data-open:focus:bg-muted"
);
function NavigationMenuViewport({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx("div", { className: cn("absolute top-full left-0 isolate z-50 flex justify-center"), children: /* @__PURE__ */ jsx(
    NavigationMenu$1.Viewport,
    {
      "data-slot": "navigation-menu-viewport",
      className: cn(
        "origin-top-center relative mt-1.5 h-(--radix-navigation-menu-viewport-height) w-full overflow-hidden rounded-lg bg-popover text-popover-foreground shadow ring-1 ring-foreground/10 duration-100 md:w-(--radix-navigation-menu-viewport-width) data-open:animate-in data-open:zoom-in-90 data-closed:animate-out data-closed:zoom-out-90",
        className
      ),
      ...props
    }
  ) });
}
function NavigationMenuLink({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    NavigationMenu$1.Link,
    {
      "data-slot": "navigation-menu-link",
      className: cn(
        "flex items-center gap-1.5 rounded-md p-2 text-sm transition-all outline-none hover:bg-muted focus:bg-muted focus-visible:ring-3 focus-visible:ring-ring/50 focus-visible:outline-1 in-data-[slot=navigation-menu-content]:rounded-sm data-[active=true]:bg-muted/50 data-[active=true]:hover:bg-muted data-[active=true]:focus:bg-muted [&_svg:not([class*='size-'])]:size-4",
        className
      ),
      ...props
    }
  );
}
function DropdownMenu({ ...props }) {
  return /* @__PURE__ */ jsx(DropdownMenu$1.Root, { "data-slot": "dropdown-menu", ...props });
}
function DropdownMenuTrigger({
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenu$1.Trigger, { "data-slot": "dropdown-menu-trigger", ...props });
}
function DropdownMenuContent({
  className,
  align = "start",
  sideOffset = 4,
  ...props
}) {
  return /* @__PURE__ */ jsx(DropdownMenu$1.Portal, { children: /* @__PURE__ */ jsx(
    DropdownMenu$1.Content,
    {
      "data-slot": "dropdown-menu-content",
      sideOffset,
      align,
      className: cn(
        "dark z-50 max-h-(--radix-dropdown-menu-content-available-height) w-(--radix-dropdown-menu-trigger-width) min-w-32 origin-(--radix-dropdown-menu-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-md p-1 text-popover-foreground shadow-md ring-1 ring-foreground/10 duration-100 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 data-[state=closed]:overflow-hidden data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95 animate-none! relative bg-popover/70 before:pointer-events-none before:absolute before:inset-0 before:-z-1 before:rounded-[inherit] before:backdrop-blur-2xl before:backdrop-saturate-150 **:data-[slot$=-item]:focus:bg-foreground/10 **:data-[slot$=-item]:data-highlighted:bg-foreground/10 **:data-[slot$=-separator]:bg-foreground/5 **:data-[slot$=-trigger]:focus:bg-foreground/10 **:data-[slot$=-trigger]:aria-expanded:bg-foreground/10! **:data-[variant=destructive]:focus:bg-foreground/10! **:data-[variant=destructive]:text-accent-foreground! **:data-[variant=destructive]:**:text-accent-foreground!",
        className
      ),
      ...props
    }
  ) });
}
function DropdownMenuItem({
  className,
  inset,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenu$1.Item,
    {
      "data-slot": "dropdown-menu-item",
      "data-inset": inset,
      "data-variant": variant,
      className: cn(
        "group/dropdown-menu-item relative flex cursor-default items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-hidden select-none focus:bg-accent focus:text-accent-foreground not-data-[variant=destructive]:focus:**:text-accent-foreground data-inset:pl-8 data-[variant=destructive]:text-destructive data-[variant=destructive]:focus:bg-destructive/10 data-[variant=destructive]:focus:text-destructive dark:data-[variant=destructive]:focus:bg-destructive/20 data-disabled:pointer-events-none data-disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4 data-[variant=destructive]:*:[svg]:text-destructive",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuLabel({
  className,
  inset,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenu$1.Label,
    {
      "data-slot": "dropdown-menu-label",
      "data-inset": inset,
      className: cn(
        "px-2 py-1.5 text-xs font-medium text-muted-foreground data-inset:pl-8",
        className
      ),
      ...props
    }
  );
}
function DropdownMenuSeparator({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    DropdownMenu$1.Separator,
    {
      "data-slot": "dropdown-menu-separator",
      className: cn("-mx-1 my-1 h-px bg-border", className),
      ...props
    }
  );
}
function TooltipProvider({
  delayDuration = 300,
  skipOffset = 0,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    TooltipPrimitive.Provider,
    {
      "data-slot": "tooltip-provider",
      delayDuration,
      skipOffset,
      ...props
    }
  );
}
function Tooltip({ ...props }) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Root, { "data-slot": "tooltip", ...props });
}
function TooltipTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Trigger, { "data-slot": "tooltip-trigger", ...props });
}
function TooltipContent({
  className,
  sideOffset = 0,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsx(TooltipPrimitive.Portal, { children: /* @__PURE__ */ jsxs(
    TooltipPrimitive.Content,
    {
      "data-slot": "tooltip-content",
      sideOffset,
      className: cn(
        "z-50 inline-flex w-fit max-w-xs origin-(--radix-tooltip-content-transform-origin) items-center gap-1.5 rounded-md bg-foreground px-3 py-1.5 text-xs text-background has-data-[slot=kbd]:pr-1.5 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 **:data-[slot=kbd]:relative **:data-[slot=kbd]:isolate **:data-[slot=kbd]:z-50 **:data-[slot=kbd]:rounded-sm data-[state=delayed-open]:animate-in data-[state=delayed-open]:fade-in-0 data-[state=delayed-open]:zoom-in-95 data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
        className
      ),
      ...props,
      children: [
        children,
        /* @__PURE__ */ jsx(TooltipPrimitive.Arrow, { className: "z-50 size-2.5 translate-y-[calc(-50%_-_2px)] rotate-45 rounded-[2px] bg-foreground fill-foreground" })
      ]
    }
  ) });
}
function Separator({
  className,
  orientation = "horizontal",
  decorative = true,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Separator$1.Root,
    {
      "data-slot": "separator",
      decorative,
      orientation,
      className: cn(
        "shrink-0 bg-border data-horizontal:h-px data-horizontal:w-full data-vertical:w-px data-vertical:self-stretch",
        className
      ),
      ...props
    }
  );
}
const NAVIGATION_LINKS = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/products", label: "Products" },
  { href: "/pricing", label: "Pricing" },
  { href: "/contact", label: "Contact" }
];
const LANGUAGES = [
  { code: "en", label: "English" },
  { code: "gr", label: "Ελληνικά" }
];
const products = [
  {
    id: "citrus-bloom",
    name: "Citrus Bloom",
    description: "Fresh orange and lemon peel essence with a hint of jasmine. Perfect for daily wear.",
    longDescription: "Citrus Bloom captures the vibrant energy of sun-ripened oranges and lemons, blended with the delicate sweetness of jasmine petals.\n\n## The Story\nThis uplifting fragrance starts with bright citrus top notes that gradually soften into a warm, floral heart. Perfect for those who love fresh, energizing scents that last throughout the day.\n\n**Best for:** Daily wear, office, casual outings\n\n## Craftsmanship\nEach bottle represents our commitment to sustainability - crafted from upcycled fruit peels that would otherwise go to waste. The result is a fragrance that not only smells divine but also helps protect our planet.",
    price: 45,
    image: "/perfume.png",
    category: "Citrus",
    notes: { top: "Orange, Lemon", heart: "Jasmine, Neroli", base: "White Musk, Cedar" },
    badge: "Bestseller",
    size: "30ml",
    certificates: ["Eco Certified", "Natural Origin", "Vegan"],
    howToUse: "Apply 2-3 sprays on pulse points (wrists, neck, behind ears). For best longevity, apply to moisturized skin.",
    ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Citrus Limon (Lemon) Peel Extract, Citrus Aurantium Dulcis (Orange) Peel Extract, Jasminum Officinale (Jasmine) Flower Extract, Limonene, Linalool, Citral.",
    storage: "Store in a cool, dry place away from direct sunlight. Keep bottle tightly closed when not in use.",
    lifespan: "24 months from opening. Best used within 12 months of opening for optimal scent quality.",
    stock: 50
  },
  {
    id: "berry-mist",
    name: "Berry Mist",
    description: "Delicate berry undertones with a refreshing mist finish. Light and airy.",
    longDescription: "Berry Mist is a playful, youthful fragrance that combines the sweetness of wild berries with refreshing mint and green tea.\n\n## The Story\nThis light, airy scent evokes a morning walk through a berry garden, with dewdrops still clinging to the leaves. Ideal for those who prefer subtle, fresh fragrances.\n\n**Best for:** Everyday wear, gym, fresh mornings\n\n## Key Features\nThe combination of raspberry and blackberry creates a naturally sweet opening, while green tea adds a refreshing twist that keeps the fragrance feeling clean and energizing.",
    price: 42,
    image: "/perfume.png",
    category: "Berry",
    notes: { top: "Raspberry, Blackberry", heart: "Mint, Green Tea", base: "White Woods, Musk" },
    badge: "New",
    size: "30ml",
    certificates: ["Natural Origin", "Cruelty-Free", "Vegan"],
    howToUse: "Hold bottle 15cm from skin and spray lightly. Focus on clothing or pulse points for a subtle, lasting effect.",
    ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Rubus Idaeus (Raspberry) Fruit Extract, Mentha Piperita (Peppermint) Leaf Extract, Camellia Sinensis Leaf Extract, Glycerin, Limonene.",
    storage: "Keep in a dark, cool environment. Avoid extreme temperature changes that can alter the scent.",
    lifespan: "18 months sealed, 12 months after opening. Store upright to prevent leakage.",
    stock: 30
  },
  {
    id: "garden-peel",
    name: "Garden Peel",
    description: "Herbal blend with grapefruit and botanical extracts. Earthy and grounding.",
    longDescription: "Garden Peel brings the outdoors in with its herbaceous blend of grapefruit, fresh basil, and aromatic thyme.\n\n## The Story\nThis grounding fragrance connects you to nature, evoking a sun-warmed herb garden. The earthy base notes provide depth and longevity, making it perfect for those who appreciate sophisticated, botanical scents.\n\n**Best for:** Nature lovers, outdoor activities, grounding rituals\n\n## Sustainable Sourcing\nWe partner with local herb farms to source our basil and thyme, ensuring each bottle supports local agriculture while delivering an authentic botanical experience.",
    price: 48,
    image: "/perfume.png",
    category: "Herbal",
    notes: { top: "Grapefruit, Bergamot", heart: "Basil, Thyme", base: "Vetiver, Oakmoss" },
    badge: "Popular",
    size: "30ml",
    certificates: ["Eco Certified", "ISO Certified", "Natural Origin"],
    howToUse: "Spray on clean skin after showering. The warmth of your body helps activate the botanical notes.",
    ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Citrus Grandis (Grapefruit) Peel Oil, Ocimum Basilicum (Basil) Leaf Oil, Thymus Vulgaris (Thyme) Oil, Vetiveria Zizanoides Root Oil, Limonene, Linalool.",
    storage: "Best stored at room temperature. Avoid bathroom storage due to humidity.",
    lifespan: "36 months unopened, 18 months after first use. Natural ingredients may settle - shake gently before use.",
    stock: 25
  },
  {
    id: "tropical-sun",
    name: "Tropical Sun",
    description: "Warm coconut and pineapple notes with a citrus twist. Summer in a bottle.",
    longDescription: "Tropical Sun transports you to a beachside paradise with its warm coconut and sweet pineapple notes, brightened by a zesty lime twist.\n\n## The Story\nThis vacation-in-a-bottle fragrance captures the essence of endless summer days. The creamy base notes add warmth and sensuality, perfect for those who dream of tropical escapes.\n\n**Best for:** Beach days, vacation, special occasions\n\n## Island Inspiration\nInspired by Greek island getaways, this fragrance uses exotic fruits and warm spices to create an intoxicating blend that feels like sunshine bottled.",
    price: 50,
    image: "/perfume.png",
    category: "Tropical",
    notes: { top: "Pineapple, Lime", heart: "Coconut, Frangipani", base: "Vanilla, Sandalwood" },
    badge: "Limited",
    size: "30ml",
    certificates: ["Vegan", "Cruelty-Free"],
    howToUse: "Perfect for special occasions. Apply to wrists, neck, and clothes for all-day tropical vibes.",
    ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Ananas Sativus (Pineapple) Fruit Extract, Cocos Nucifera (Coconut) Fruit Extract, Citrus Aurantifolia (Lime) Oil, Vanilla Planifolia Fruit Extract, Limonene, Coumarin.",
    storage: "Keep away from heat sources. The tropical oils are sensitive to temperature changes.",
    lifespan: "24 months sealed. Best used within 6 months of opening to experience full tropical notes.",
    stock: 15
  },
  {
    id: "forest-dew",
    name: "Forest Dew",
    description: "Fresh forest-inspired scent with pine and eucalyptus. Invigorating and clean.",
    longDescription: "Forest Dew captures the crisp, invigorating air of a pine forest after rain. With refreshing eucalyptus and cool mint top notes, this fragrance awakens the senses and clears the mind.\n\n## The Story\nThe woody base of pine and cedar provides a grounding, calming effect. Perfect for nature lovers and those who enjoy clean, green scents.\n\n**Best for:** Morning routine, post-workout, mindfulness\n\n## Forest Fresh\nOur most eco-conscious fragrance, Forest Dew uses essential oils from sustainably managed forests to create a truly nature-inspired experience.",
    price: 46,
    image: "/perfume.png",
    category: "Fresh",
    notes: { top: "Eucalyptus, Mint", heart: "Pine, Fir Needle", base: "Cedarwood, Amber" },
    badge: "Eco",
    size: "30ml",
    certificates: ["Eco Certified", "Natural Origin", "Vegan", "Cruelty-Free"],
    howToUse: "Ideal for morning routine. Spray on after exercise or shower for an energizing boost.",
    ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Eucalyptus Globulus Leaf Oil, Mentha Piperita (Peppermint) Oil, Pinus Sylvestris (Pine) Needle Oil, Cedrus Atlantica (Cedarwood) Bark Oil, Limonene.",
    storage: "Store upright in a cool place. The natural oils may cloud slightly - this is normal.",
    lifespan: "30 months sealed, 12 months after opening. Natural scent may fade over time.",
    stock: 40
  },
  {
    id: "rose-petal",
    name: "Rose Petal",
    description: "Romantic rose water with subtle fruit undertones. Elegant and timeless.",
    longDescription: "Rose Petal is an ode to timeless elegance, featuring delicate rose water blended with soft peach and warm vanilla.\n\n## The Story\nThis romantic fragrance captures the essence of a rose garden at dawn, with dewy petals releasing their intoxicating scent. Sophisticated and feminine, it's perfect for special occasions or everyday luxury.\n\n**Best for:** Date nights, special occasions, elegant evenings\n\n## Premium Ingredients\nWe use real damask roses in our formula, harvested at dawn when their scent is most potent, creating a truly luxurious fragrance experience.",
    price: 52,
    image: "/perfume.png",
    category: "Floral",
    notes: { top: "Rose Water, Peach", heart: "Damask Rose, Peony", base: "Vanilla, Musk" },
    badge: "Premium",
    size: "30ml",
    certificates: ["ISO Certified", "Natural Origin"],
    howToUse: "Apply to pulse points. Layer with matching body products for enhanced longevity.",
    ingredients: "Alcohol Denat., Parfum (Fragrance), Aqua (Water), Rosa Damascena (Rose) Flower Water, Prunus Persica (Peach) Fruit Extract, Rosa Damascena (Rose) Flower Oil, Benzyl Alcohol, Citronellol, Geraniol.",
    storage: "Premium formula requires careful storage. Keep away from direct sunlight and heat sources.",
    lifespan: "48 months sealed, 24 months after opening. Store in original packaging for best preservation.",
    stock: 10
  }
];
const categories = ["All", "Citrus", "Berry", "Herbal", "Tropical", "Fresh", "Floral"];
function getProductById(id) {
  return products.find((p) => p.id === id);
}
function getSimilarProducts(productId, limit = 4) {
  const product = getProductById(productId);
  if (!product) return [];
  return products.filter((p) => p.id !== productId && p.category === product.category).slice(0, limit);
}
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
          items: state.items.map(
            (item) => item.productId === productId ? { ...item, quantity: Math.min(item.quantity + quantity, 10) } : item
          )
        };
      }
      return {
        items: [
          ...state.items,
          {
            id: crypto.randomUUID(),
            productId: product.id,
            name: product.name,
            price: product.price,
            quantity,
            image: product.image,
            size: product.size
          }
        ],
        isOpen: true
      };
    });
  },
  removeItem: (productId) => {
    set((state) => ({
      items: state.items.filter((item) => item.productId !== productId)
    }));
  },
  updateQuantity: (productId, quantity) => {
    if (quantity < 1 || quantity > 10) return;
    set((state) => ({
      items: state.items.map(
        (item) => item.productId === productId ? { ...item, quantity } : item
      )
    }));
  },
  clearCart: () => {
    set({ items: [] });
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
const AnimatedThemeToggler = ({
  className,
  duration = 300,
  ...props
}) => {
  const [isDark, setIsDark] = useState(false);
  const buttonRef = useRef(null);
  useEffect(() => {
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
  }, []);
  const toggleTheme = useCallback(() => {
    const button = buttonRef.current;
    if (!button) return;
    const prefersReducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReducedMotion) {
      const newTheme = !isDark;
      setIsDark(newTheme);
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("blossom-theme", newTheme ? "dark" : "light");
      return;
    }
    const { top, left, width, height } = button.getBoundingClientRect();
    const x = left + width / 2;
    const y = top + height / 2;
    const viewportWidth = window.visualViewport?.width ?? window.innerWidth;
    const viewportHeight = window.visualViewport?.height ?? window.innerHeight;
    const maxRadius = Math.hypot(Math.max(x, viewportWidth - x), Math.max(y, viewportHeight - y));
    const applyTheme = () => {
      const newTheme = !isDark;
      setIsDark(newTheme);
      document.documentElement.classList.toggle("dark");
      localStorage.setItem("blossom-theme", newTheme ? "dark" : "light");
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
        document.documentElement.animate(
          {
            clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${maxRadius}px at ${x}px ${y}px)`]
          },
          {
            duration,
            easing: "cubic-bezier(0.6, 0.0, 1.0, 1.0)",
            pseudoElement: "::view-transition-new(root)"
          }
        );
      });
    }
  }, [isDark, duration]);
  return /* @__PURE__ */ jsxs(
    "button",
    {
      type: "button",
      ref: buttonRef,
      onClick: toggleTheme,
      className: cn("flex items-center gap-2", className),
      ...props,
      children: [
        isDark ? /* @__PURE__ */ jsx(SunMedium, { className: "size-4" }) : /* @__PURE__ */ jsx(Moon, { className: "size-4" }),
        /* @__PURE__ */ jsx("span", { children: isDark ? "Light Mode" : "Dark Mode" })
      ]
    }
  );
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
  users[email] = { password, name };
  localStorage.setItem(STORAGE_KEY, JSON.stringify(users));
  return { id, email, name, wishlistProductIds: [] };
}
function validatePassword(email, password) {
  const users = getStoredUsers();
  const userData = users[email];
  if (!userData || userData.password !== password) return null;
  const storedUser = localStorage.getItem(`blossom-user-${email}`);
  if (storedUser) {
    return JSON.parse(storedUser);
  }
  return { id: crypto.randomUUID(), email, name: userData.name, wishlistProductIds: [] };
}
const useAuthStore = create()(
  persist(
    (set, get) => ({
      user: null,
      isAuthenticated: false,
      login: (email, password) => {
        const user = validatePassword(email, password);
        if (!user) return false;
        set({ user, isAuthenticated: true });
        localStorage.setItem(`blossom-user-${email}`, JSON.stringify(user));
        return true;
      },
      signup: (email, password, name) => {
        const users = getStoredUsers();
        if (users[email]) return false;
        const user = saveUser(email, password, name);
        set({ user, isAuthenticated: true });
        localStorage.setItem(`blossom-user-${email}`, JSON.stringify(user));
        return true;
      },
      logout: () => {
        set({ user: null, isAuthenticated: false });
      },
      mergeWishlist: (productIds) => {
        const { user } = get();
        if (!user) return;
        const updatedUser = {
          ...user,
          wishlistProductIds: [.../* @__PURE__ */ new Set([...user.wishlistProductIds, ...productIds])]
        };
        set({ user: updatedUser });
        localStorage.setItem(`blossom-user-${user.email}`, JSON.stringify(updatedUser));
      }
    }),
    {
      name: "blossom-auth",
      partialize: (state) => ({ user: state.user, isAuthenticated: state.isAuthenticated })
    }
  )
);
const useWishlistStore = create()(
  persist((set, get) => ({
    items: [],
    addItem: (productId) => {
      const product = getProductById(productId);
      if (!product || get().isInWishlist(productId)) return;
      set((state) => ({
        items: [
          ...state.items,
          {
            id: crypto.randomUUID(),
            productId: product.id,
            name: product.name,
            price: product.price,
            image: product.image,
            addedAt: /* @__PURE__ */ new Date()
          }
        ]
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
      set({ items: [] });
    }
  })),
  {
    name: "blossom-wishlist"
  }
);
const SUBSCRIPTION_PLANS = [
  {
    id: "free",
    name: "Free",
    monthlyPrice: 0,
    yearlyPrice: 0,
    discount: 0,
    freeShipping: false,
    description: "Browse and shop with no commitments",
    features: [
      "Standard pricing",
      "Access to all products",
      "Wishlist",
      "Compare products"
    ]
  },
  {
    id: "starter",
    name: "Starter",
    monthlyPrice: 9.99,
    yearlyPrice: 99,
    discount: 5,
    freeShipping: false,
    description: "Perfect for casual shoppers",
    features: [
      "5% discount on all orders",
      "Access to all products",
      "Wishlist",
      "Compare products",
      "Early access to new products"
    ]
  },
  {
    id: "premium",
    name: "Premium",
    monthlyPrice: 19.99,
    yearlyPrice: 199,
    discount: 10,
    freeShipping: true,
    description: "Best for regular shoppers",
    features: [
      "10% discount on all orders",
      "Free shipping on all orders",
      "Access to all products",
      "Wishlist",
      "Compare products",
      "Early access to new products",
      "Exclusive member deals"
    ]
  },
  {
    id: "vip",
    name: "VIP",
    monthlyPrice: 39.99,
    yearlyPrice: 399,
    discount: 20,
    freeShipping: true,
    description: "For the most dedicated fans",
    features: [
      "20% discount on all orders",
      "Free shipping on all orders",
      "Priority customer support",
      "Access to all products",
      "Wishlist",
      "Compare products",
      "Early access to new products",
      "Exclusive member deals",
      "VIP-only products",
      "Free birthday gift"
    ]
  }
];
const useSubscriptionStore = create((set, get) => ({
  currentTier: "free",
  billingCycle: "monthly",
  setTier: (tier) => {
    set({ currentTier: tier });
  },
  setBillingCycle: (cycle) => {
    set({ billingCycle: cycle });
  },
  getCurrentPlan: () => {
    const { currentTier } = get();
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
    set({ currentTier: "free" });
  }
}));
function Input({ className, type, ...props }) {
  return /* @__PURE__ */ jsx(
    "input",
    {
      type,
      "data-slot": "input",
      className: cn(
        "h-10 w-full min-w-0 rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-xs transition-[color,box-shadow] outline-none file:inline-flex file:h-7 file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
function Label({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Label$1.Root,
    {
      "data-slot": "label",
      className: cn(
        "flex items-center gap-2 text-sm leading-none font-medium select-none group-data-[disabled=true]:pointer-events-none group-data-[disabled=true]:opacity-50 peer-disabled:cursor-not-allowed peer-disabled:opacity-50",
        className
      ),
      ...props
    }
  );
}
function Dialog({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$1.Root, { "data-slot": "dialog", ...props });
}
function DialogPortal({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$1.Portal, { "data-slot": "dialog-portal", ...props });
}
function DialogOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog$1.Overlay,
    {
      "data-slot": "dialog-overlay",
      className: cn(
        "fixed inset-0 isolate z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function DialogContent({
  className,
  children,
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(DialogPortal, { children: [
    /* @__PURE__ */ jsx(DialogOverlay, {}),
    /* @__PURE__ */ jsxs(
      Dialog$1.Content,
      {
        "data-slot": "dialog-content",
        className: cn(
          "fixed top-1/2 left-1/2 z-50 grid w-full max-w-[calc(100%-2rem)] -translate-x-1/2 -translate-y-1/2 gap-6 rounded-xl bg-popover p-6 text-sm text-popover-foreground ring-1 ring-foreground/10 duration-100 outline-none sm:max-w-md data-open:animate-in data-open:fade-in-0 data-open:zoom-in-95 data-closed:animate-out data-closed:fade-out-0 data-closed:zoom-out-95",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsx(Dialog$1.Close, { "data-slot": "dialog-close", asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "absolute top-4 right-4", size: "icon-sm", children: [
            /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Cancel01Icon, strokeWidth: 2 }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] }) })
        ]
      }
    )
  ] });
}
function DialogHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx("div", { "data-slot": "dialog-header", className: cn("flex flex-col gap-2", className), ...props });
}
function DialogTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Dialog$1.Title,
    {
      "data-slot": "dialog-title",
      className: cn("leading-none font-medium", className),
      ...props
    }
  );
}
function DialogDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog$1.Description,
    {
      "data-slot": "dialog-description",
      className: cn(
        "text-sm text-muted-foreground *:[a]:underline *:[a]:underline-offset-3 *:[a]:hover:text-foreground",
        className
      ),
      ...props
    }
  );
}
function Tabs({
  className,
  orientation = "horizontal",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Tabs$1.Root,
    {
      "data-slot": "tabs",
      "data-orientation": orientation,
      className: cn("group/tabs flex gap-2 data-horizontal:flex-col", className),
      ...props
    }
  );
}
const tabsListVariants = cva(
  "group/tabs-list inline-flex w-fit items-center justify-center rounded-lg p-[3px] text-muted-foreground group-data-horizontal/tabs:h-9 group-data-vertical/tabs:h-fit group-data-vertical/tabs:flex-col data-[variant=line]:rounded-none",
  {
    variants: {
      variant: {
        default: "bg-muted",
        line: "gap-1 bg-transparent"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function TabsList({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Tabs$1.List,
    {
      "data-slot": "tabs-list",
      "data-variant": variant,
      className: cn(tabsListVariants({ variant }), className),
      ...props
    }
  );
}
function TabsTrigger({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Tabs$1.Trigger,
    {
      "data-slot": "tabs-trigger",
      className: cn(
        "relative inline-flex h-[calc(100%-1px)] flex-1 items-center justify-center gap-1.5 rounded-md border border-transparent px-2 py-1 text-sm font-medium whitespace-nowrap text-foreground/60 transition-all group-data-vertical/tabs:w-full group-data-vertical/tabs:justify-start hover:text-foreground focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1 focus-visible:outline-ring disabled:pointer-events-none disabled:opacity-50 dark:text-muted-foreground dark:hover:text-foreground group-data-[variant=default]/tabs-list:data-active:shadow-sm group-data-[variant=line]/tabs-list:data-active:shadow-none [&_svg]:pointer-events-none [&_svg]:shrink-0 [&_svg:not([class*='size-'])]:size-4",
        "group-data-[variant=line]/tabs-list:bg-transparent group-data-[variant=line]/tabs-list:data-active:bg-transparent dark:group-data-[variant=line]/tabs-list:data-active:border-transparent dark:group-data-[variant=line]/tabs-list:data-active:bg-transparent",
        "data-active:bg-background data-active:text-foreground dark:data-active:border-input dark:data-active:bg-input/30 dark:data-active:text-foreground",
        "after:absolute after:bg-foreground after:opacity-0 after:transition-opacity group-data-horizontal/tabs:after:inset-x-0 group-data-horizontal/tabs:after:bottom-[-5px] group-data-horizontal/tabs:after:h-0.5 group-data-vertical/tabs:after:inset-y-0 group-data-vertical/tabs:after:-right-1 group-data-vertical/tabs:after:w-0.5 group-data-[variant=line]/tabs-list:data-active:after:opacity-100",
        className
      ),
      ...props
    }
  );
}
function TabsContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Tabs$1.Content,
    {
      "data-slot": "tabs-content",
      className: cn("flex-1 text-sm outline-none", className),
      ...props
    }
  );
}
function AuthModal({ open, onOpenChange }) {
  const [mode, setMode] = useState("signin");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [showPassword, setShowPassword] = useState(false);
  const [error, setError] = useState("");
  const [showMergePrompt, setShowMergePrompt] = useState(false);
  const [pendingProductIds, setPendingProductIds] = useState([]);
  const { login, signup, mergeWishlist, user } = useAuthStore();
  const wishlistItems = useWishlistStore((state) => state.items);
  const addItem = useWishlistStore((state) => state.addItem);
  const resetForm = () => {
    setEmail("");
    setPassword("");
    setName("");
    setError("");
    setShowPassword(false);
  };
  const handleOpenChange = (isOpen) => {
    if (!isOpen) {
      resetForm();
      setShowMergePrompt(false);
    }
    onOpenChange(isOpen);
  };
  const getNewItems = () => {
    const currentUser = useAuthStore.getState().user;
    if (!currentUser) return wishlistItems.map((item) => item.productId);
    return wishlistItems.filter((item) => !currentUser.wishlistProductIds.includes(item.productId)).map((item) => item.productId);
  };
  const handleSubmit = (e) => {
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
  const handleMergeWishlist = (shouldMerge) => {
    if (shouldMerge && pendingProductIds.length > 0) {
      mergeWishlist(pendingProductIds);
      pendingProductIds.forEach((productId) => addItem(productId));
    }
    setShowMergePrompt(false);
    setPendingProductIds([]);
    onOpenChange(false);
    resetForm();
  };
  if (showMergePrompt) {
    return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [
      /* @__PURE__ */ jsxs(DialogHeader, { children: [
        /* @__PURE__ */ jsx(DialogTitle, { children: "Save your wishlist?" }),
        /* @__PURE__ */ jsxs(DialogDescription, { children: [
          "You have ",
          pendingProductIds.length,
          " product",
          pendingProductIds.length === 1 ? "" : "s",
          " in your wishlist from before signing in. Would you like to add",
          " ",
          pendingProductIds.length === 1 ? "it" : "them",
          " to your account?"
        ] })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "grid gap-4 py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex flex-col gap-2", children: [
          pendingProductIds.slice(0, 3).map((_, i) => /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
            "• Product ",
            i + 1
          ] }, i)),
          pendingProductIds.length > 3 && /* @__PURE__ */ jsxs("div", { className: "text-sm text-muted-foreground", children: [
            "+ ",
            pendingProductIds.length - 3,
            " more"
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsx(Button, { variant: "outline", onClick: () => handleMergeWishlist(false), className: "flex-1", children: "No, keep only new" }),
          /* @__PURE__ */ jsx(Button, { onClick: () => handleMergeWishlist(true), className: "flex-1", children: "Yes, add to account" })
        ] })
      ] })
    ] }) });
  }
  return /* @__PURE__ */ jsx(Dialog, { open, onOpenChange: handleOpenChange, children: /* @__PURE__ */ jsxs(DialogContent, { className: "sm:max-w-[425px]", children: [
    /* @__PURE__ */ jsxs(DialogHeader, { children: [
      /* @__PURE__ */ jsx(DialogTitle, { children: "Welcome to Blossom" }),
      /* @__PURE__ */ jsx(DialogDescription, { children: "Sign in to sync your wishlist across devices, or continue as guest." })
    ] }),
    /* @__PURE__ */ jsxs(Tabs, { value: mode, onValueChange: (v) => setMode(v), children: [
      /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
        /* @__PURE__ */ jsx(TabsTrigger, { value: "signin", children: "Sign In" }),
        /* @__PURE__ */ jsx(TabsTrigger, { value: "signup", children: "Sign Up" })
      ] }),
      /* @__PURE__ */ jsx(TabsContent, { value: "signin", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "grid gap-4 py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "signin-email", children: "Email" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "signin-email",
                type: "email",
                placeholder: "you@example.com",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                className: "pl-9",
                required: true
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "signin-password", children: "Password" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "signin-password",
                type: showPassword ? "text" : "password",
                placeholder: "••••••••",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                className: "pl-9 pr-9",
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowPassword(!showPassword),
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsx(Eye, { className: "size-4" })
              }
            )
          ] })
        ] }),
        error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: error }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", children: "Sign In" })
      ] }) }),
      /* @__PURE__ */ jsx(TabsContent, { value: "signup", children: /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "grid gap-4 py-4", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "signup-name", children: "Name" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(User, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "signup-name",
                type: "text",
                placeholder: "Your name",
                value: name,
                onChange: (e) => setName(e.target.value),
                className: "pl-9",
                required: true
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "signup-email", children: "Email" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(Mail, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "signup-email",
                type: "email",
                placeholder: "you@example.com",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                className: "pl-9",
                required: true
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "grid gap-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "signup-password", children: "Password" }),
          /* @__PURE__ */ jsxs("div", { className: "relative", children: [
            /* @__PURE__ */ jsx(Lock, { className: "absolute left-3 top-1/2 -translate-y-1/2 size-4 text-muted-foreground" }),
            /* @__PURE__ */ jsx(
              Input,
              {
                id: "signup-password",
                type: showPassword ? "text" : "password",
                placeholder: "••••••••",
                value: password,
                onChange: (e) => setPassword(e.target.value),
                className: "pl-9 pr-9",
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              "button",
              {
                type: "button",
                onClick: () => setShowPassword(!showPassword),
                className: "absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground",
                children: showPassword ? /* @__PURE__ */ jsx(EyeOff, { className: "size-4" }) : /* @__PURE__ */ jsx(Eye, { className: "size-4" })
              }
            )
          ] })
        ] }),
        error && /* @__PURE__ */ jsx("p", { className: "text-sm text-destructive", children: error }),
        /* @__PURE__ */ jsx(Button, { type: "submit", className: "w-full", children: "Create Account" })
      ] }) })
    ] }),
    /* @__PURE__ */ jsx("p", { className: "text-xs text-center text-muted-foreground", children: "By continuing, you agree to our Terms of Service and Privacy Policy." })
  ] }) });
}
function ProfileDropdown() {
  const { user, isAuthenticated, logout } = useAuthStore();
  const wishlistCount = useWishlistStore((state) => state.items.length);
  const { currentTier, getDiscount, hasFreeShipping } = useSubscriptionStore();
  const [authModalOpen, setAuthModalOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const currentPlan = SUBSCRIPTION_PLANS.find((p) => p.id === currentTier);
  const hasSubscription = currentTier !== "free";
  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("blossom-theme");
    const prefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;
    const initialTheme = stored ? stored : prefersDark ? "dark" : "light";
    requestAnimationFrame(() => {
      document.documentElement.classList.toggle("dark", initialTheme === "dark");
    });
  }, []);
  if (!mounted) return null;
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsxs(DropdownMenu, { children: [
      /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "rounded-full min-[841px]:scale-100 scale-150", children: /* @__PURE__ */ jsx(User, { className: "size-4" }) }) }),
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
        /* @__PURE__ */ jsxs(
          DropdownMenuItem,
          {
            onClick: logout,
            className: "cursor-pointer text-destructive focus:text-destructive",
            children: [
              /* @__PURE__ */ jsx(LogOut, { className: "size-4 mr-2" }),
              /* @__PURE__ */ jsx("span", { children: "Log out" })
            ]
          }
        )
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
        /* @__PURE__ */ jsx(
          DropdownMenuItem,
          {
            onClick: () => setAuthModalOpen(true),
            className: "cursor-pointer",
            children: "Sign In"
          }
        ),
        /* @__PURE__ */ jsx(
          DropdownMenuItem,
          {
            onClick: () => setAuthModalOpen(true),
            className: "cursor-pointer",
            children: "Sign Up"
          }
        )
      ] }) })
    ] }),
    /* @__PURE__ */ jsx(AuthModal, { open: authModalOpen, onOpenChange: setAuthModalOpen })
  ] });
}
function HeaderDesktop() {
  const totalItems = useCartStore(
    (state) => state.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  return /* @__PURE__ */ jsxs("nav", { className: "hidden min-[841px]:flex items-center justify-between px-8 py-2", children: [
    /* @__PURE__ */ jsx(NavigationMenu, { children: /* @__PURE__ */ jsx(NavigationMenuList, { className: "tracking-tight font-sans gap-x-8", children: NAVIGATION_LINKS.map((link) => /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(
      Link,
      {
        to: link.href,
        className: "text-sm font-medium text-foreground/80 hover:text-primary transition-colors",
        activeProps: { className: "text-primary font-semibold" },
        children: link.label
      }
    ) }) }, link.href)) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 pl-8", children: [
      /* @__PURE__ */ jsxs(Tooltip, { children: [
        /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", asChild: true, className: "relative", children: /* @__PURE__ */ jsxs(Link, { to: "/cart", "aria-label": `Cart with ${totalItems} items`, children: [
          /* @__PURE__ */ jsx(ShoppingBag, { className: "size-4" }),
          totalItems > 0 && /* @__PURE__ */ jsx(
            Badge,
            {
              variant: "secondary",
              className: "absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs",
              children: totalItems
            }
          )
        ] }) }) }),
        /* @__PURE__ */ jsxs(TooltipContent, { children: [
          "Cart (",
          totalItems,
          " items)"
        ] })
      ] }),
      /* @__PURE__ */ jsx(Separator, { orientation: "vertical", className: "h-6 mx-1" }),
      /* @__PURE__ */ jsxs(DropdownMenu, { children: [
        /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", children: /* @__PURE__ */ jsx(Globe, { className: "size-4" }) }) }),
        /* @__PURE__ */ jsx(DropdownMenuContent, { align: "end", className: "bg-card", children: LANGUAGES.map((lang) => /* @__PURE__ */ jsx(DropdownMenuItem, { className: "cursor-pointer", children: lang.label }, lang.code)) })
      ] }),
      /* @__PURE__ */ jsx(ProfileDropdown, {})
    ] })
  ] });
}
function Sheet({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$1.Root, { "data-slot": "sheet", ...props });
}
function SheetTrigger({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$1.Trigger, { "data-slot": "sheet-trigger", ...props });
}
function SheetPortal({ ...props }) {
  return /* @__PURE__ */ jsx(Dialog$1.Portal, { "data-slot": "sheet-portal", ...props });
}
function SheetOverlay({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog$1.Overlay,
    {
      "data-slot": "sheet-overlay",
      className: cn(
        "fixed inset-0 z-50 bg-black/10 duration-100 supports-backdrop-filter:backdrop-blur-xs data-open:animate-in data-open:fade-in-0 data-closed:animate-out data-closed:fade-out-0",
        className
      ),
      ...props
    }
  );
}
function SheetContent({
  className,
  children,
  side = "right",
  showCloseButton = true,
  ...props
}) {
  return /* @__PURE__ */ jsxs(SheetPortal, { children: [
    /* @__PURE__ */ jsx(SheetOverlay, {}),
    /* @__PURE__ */ jsxs(
      Dialog$1.Content,
      {
        "data-slot": "sheet-content",
        "data-side": side,
        className: cn(
          "fixed z-50 flex flex-col gap-4 bg-popover bg-clip-padding text-sm text-popover-foreground shadow-lg transition duration-200 ease-in-out data-[side=bottom]:inset-x-0 data-[side=bottom]:bottom-0 data-[side=bottom]:h-auto data-[side=bottom]:border-t data-[side=left]:inset-y-0 data-[side=left]:left-0 data-[side=left]:h-full data-[side=left]:w-3/4 data-[side=left]:border-r data-[side=right]:inset-y-0 data-[side=right]:right-0 data-[side=right]:h-full data-[side=right]:w-3/4 data-[side=right]:border-l data-[side=top]:inset-x-0 data-[side=top]:top-0 data-[side=top]:h-auto data-[side=top]:border-b data-[side=left]:sm:max-w-sm data-[side=right]:sm:max-w-sm data-open:animate-in data-open:fade-in-0 data-[side=bottom]:data-open:slide-in-from-bottom-10 data-[side=left]:data-open:slide-in-from-left-10 data-[side=right]:data-open:slide-in-from-right-10 data-[side=top]:data-open:slide-in-from-top-10 data-closed:animate-out data-closed:fade-out-0 data-[side=bottom]:data-closed:slide-out-to-bottom-10 data-[side=left]:data-closed:slide-out-to-left-10 data-[side=right]:data-closed:slide-out-to-right-10 data-[side=top]:data-closed:slide-out-to-top-10",
          className
        ),
        ...props,
        children: [
          children,
          showCloseButton && /* @__PURE__ */ jsx(Dialog$1.Close, { "data-slot": "sheet-close", asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", className: "absolute top-4 right-4", size: "icon-sm", children: [
            /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Cancel01Icon, strokeWidth: 2 }),
            /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Close" })
          ] }) })
        ]
      }
    )
  ] });
}
function SheetHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "sheet-header",
      className: cn("flex flex-col gap-1.5 p-4", className),
      ...props
    }
  );
}
function SheetTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Dialog$1.Title,
    {
      "data-slot": "sheet-title",
      className: cn("font-medium text-foreground", className),
      ...props
    }
  );
}
function SheetDescription({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Dialog$1.Description,
    {
      "data-slot": "sheet-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function HeaderMobile() {
  const [open, setOpen] = useState(false);
  const totalItems = useCartStore(
    (state) => state.items.reduce((sum, item) => sum + item.quantity, 0)
  );
  const wishlistCount = useWishlistStore((state) => state.items.length);
  return /* @__PURE__ */ jsxs("div", { className: "min-[841px]:hidden flex items-center gap-2", children: [
    /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-12 w-12 relative", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/wishlist", "aria-label": `Wishlist with ${wishlistCount} items`, children: [
      /* @__PURE__ */ jsx(Heart, { className: "size-6" }),
      wishlistCount > 0 && /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "secondary",
          className: "absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs",
          children: wishlistCount
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Wishlist" })
    ] }) }),
    /* @__PURE__ */ jsx(Button, { variant: "ghost", size: "icon", className: "h-12 w-12 relative", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/cart", "aria-label": `Cart with ${totalItems} items`, children: [
      /* @__PURE__ */ jsx(ShoppingBag, { className: "size-6" }),
      totalItems > 0 && /* @__PURE__ */ jsx(
        Badge,
        {
          variant: "secondary",
          className: "absolute -top-1 -right-1 h-5 w-5 p-0 flex items-center justify-center text-xs",
          children: totalItems
        }
      ),
      /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Cart" })
    ] }) }),
    /* @__PURE__ */ jsxs(Sheet, { open, onOpenChange: setOpen, children: [
      /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", className: "h-12 w-12", children: [
        /* @__PURE__ */ jsx(Menu, { className: "size-6" }),
        /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Toggle menu" })
      ] }) }),
      /* @__PURE__ */ jsxs(SheetContent, { side: "right", className: "w-full sm:w-80 bg-card flex flex-col", children: [
        /* @__PURE__ */ jsx(SheetHeader, { children: /* @__PURE__ */ jsx(SheetTitle, { className: "text-xl font-heading font-semibold", children: "Menu" }) }),
        /* @__PURE__ */ jsx("nav", { className: "mt-8 flex flex-col gap-6", children: NAVIGATION_LINKS.map((link) => /* @__PURE__ */ jsx(
          Link,
          {
            to: link.href,
            onClick: () => setOpen(false),
            activeProps: { className: "bg-primary/10 text-primary" },
            className: "text-[1.6rem] font-medium py-5 px-6 rounded-lg hover:bg-muted transition-colors text-center",
            children: link.label
          },
          link.href
        )) }),
        /* @__PURE__ */ jsxs("div", { className: "mt-auto pt-8 pb-6 flex justify-center gap-10 border-t", children: [
          /* @__PURE__ */ jsxs(DropdownMenu, { children: [
            /* @__PURE__ */ jsx(DropdownMenuTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "icon", className: "h-12 w-12 -mt-1", children: [
              /* @__PURE__ */ jsx(Globe, { className: "size-6" }),
              /* @__PURE__ */ jsx("span", { className: "sr-only", children: "Language" })
            ] }) }),
            /* @__PURE__ */ jsx(DropdownMenuContent, { align: "start", className: "bg-card", children: LANGUAGES.map((lang) => /* @__PURE__ */ jsx(DropdownMenuItem, { className: "cursor-pointer text-base py-3", children: lang.label }, lang.code)) })
          ] }),
          /* @__PURE__ */ jsx(ProfileDropdown, {})
        ] })
      ] })
    ] })
  ] });
}
function Header() {
  return /* @__PURE__ */ jsx("div", { className: "fixed w-full top-0 left-0 z-50 p-2", children: /* @__PURE__ */ jsxs("header", { className: "w-full md:w-[90%] lg:w-[80%] mx-auto backdrop-blur-xl bg-background/80 border border-border rounded-2xl flex items-center justify-between px-3 md:px-6 py-2 md:py-3 shadow-sm", children: [
    /* @__PURE__ */ jsx(NavigationMenu, { className: "shrink-0", children: /* @__PURE__ */ jsx(NavigationMenuList, { children: /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
      /* @__PURE__ */ jsx(Flower2, { className: "w-8 h-8 md:w-7 md:h-7 text-primary", "aria-hidden": "true" }),
      /* @__PURE__ */ jsx("span", { className: "text-lg font-heading font-bold text-foreground hidden sm:block", children: "Blossom" })
    ] }) }) }) }),
    /* @__PURE__ */ jsx(HeaderDesktop, {}),
    /* @__PURE__ */ jsx(HeaderMobile, {})
  ] }) });
}
function ScrollArea({
  className,
  children,
  ...props
}) {
  return /* @__PURE__ */ jsxs(
    ScrollArea$1.Root,
    {
      "data-slot": "scroll-area",
      className: cn("relative", className),
      ...props,
      children: [
        /* @__PURE__ */ jsx(
          ScrollArea$1.Viewport,
          {
            "data-slot": "scroll-area-viewport",
            className: "size-full rounded-[inherit] transition-[color,box-shadow] outline-none focus-visible:ring-[3px] focus-visible:ring-ring/50 focus-visible:outline-1",
            children
          }
        ),
        /* @__PURE__ */ jsx(ScrollBar, {}),
        /* @__PURE__ */ jsx(ScrollArea$1.Corner, {})
      ]
    }
  );
}
function ScrollBar({
  className,
  orientation = "vertical",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    ScrollArea$1.ScrollAreaScrollbar,
    {
      "data-slot": "scroll-area-scrollbar",
      "data-orientation": orientation,
      orientation,
      className: cn(
        "flex touch-none p-px transition-colors select-none data-horizontal:h-2.5 data-horizontal:flex-col data-horizontal:border-t data-horizontal:border-t-transparent data-vertical:h-full data-vertical:w-2.5 data-vertical:border-l data-vertical:border-l-transparent",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        ScrollArea$1.ScrollAreaThumb,
        {
          "data-slot": "scroll-area-thumb",
          className: "relative flex-1 rounded-full bg-border"
        }
      )
    }
  );
}
const alertVariants = cva(
  "group/alert relative grid w-full gap-0.5 rounded-lg border px-4 py-3 text-left text-sm has-data-[slot=alert-action]:relative has-data-[slot=alert-action]:pr-18 has-[>svg]:grid-cols-[auto_1fr] has-[>svg]:gap-x-2.5 *:[svg]:row-span-2 *:[svg]:translate-y-0.5 *:[svg]:text-current *:[svg:not([class*='size-'])]:size-4",
  {
    variants: {
      variant: {
        default: "bg-card text-card-foreground",
        destructive: "bg-card text-destructive *:data-[slot=alert-description]:text-destructive/90 *:[svg]:text-current"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function Alert({
  className,
  variant,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert",
      role: "alert",
      className: cn(alertVariants({ variant }), className),
      ...props
    }
  );
}
function AlertTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-title",
      className: cn(
        "font-medium group-has-[>svg]/alert:col-start-2 [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground",
        className
      ),
      ...props
    }
  );
}
function AlertDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "alert-description",
      className: cn(
        "text-sm text-balance text-muted-foreground md:text-pretty [&_a]:underline [&_a]:underline-offset-3 [&_a]:hover:text-foreground [&_p:not(:last-child)]:mb-4",
        className
      ),
      ...props
    }
  );
}
function Spinner({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    HugeiconsIcon,
    {
      icon: Loading03Icon,
      strokeWidth: 2,
      role: "status",
      "aria-label": "Loading",
      className: cn("size-4 animate-spin", className),
      ...props
    }
  );
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
  const inViewResult = useInView(ref, { once: true, margin: inViewMargin });
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
  return /* @__PURE__ */ jsx(AnimatePresence, { children: /* @__PURE__ */ jsx(
    motion.div,
    {
      ref,
      initial: "hidden",
      animate: isInView ? "visible" : "hidden",
      exit: "hidden",
      variants: combinedVariants,
      transition: {
        delay: 0.04 + delay,
        duration,
        ease: "easeOut",
        ...shouldTransitionFilter ? { filter: { duration } } : {}
      },
      className,
      ...props,
      children
    }
  ) });
}
const Ripple = React__default.memo(function Ripple2({
  mainCircleSize = 210,
  mainCircleOpacity = 0.24,
  numCircles = 8,
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: cn(
        "pointer-events-none absolute inset-0 mask-[linear-gradient(to_bottom,white,transparent)] select-none",
        className
      ),
      ...props,
      children: Array.from({ length: numCircles }, (_, i) => {
        const size = mainCircleSize + i * 70;
        const opacity = mainCircleOpacity - i * 0.03;
        const animationDelay = `${i * 0.06}s`;
        const borderStyle = "solid";
        return /* @__PURE__ */ jsx(
          "div",
          {
            className: `animate-ripple bg-foreground/25 absolute rounded-full border shadow-xl`,
            style: {
              "--i": i,
              width: `${size}px`,
              height: `${size}px`,
              opacity,
              animationDelay,
              borderStyle,
              borderWidth: "1px",
              borderColor: `var(--foreground)`,
              top: "50%",
              left: "50%",
              transform: "translate(-50%, -50%) scale(1)"
            }
          },
          i
        );
      })
    }
  );
});
Ripple.displayName = "Ripple";
function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);
  const handleSubmit = (e) => {
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
  return /* @__PURE__ */ jsxs("section", { className: "py-24 bg-[#2d3b2d] text-white relative overflow-hidden", children: [
    /* @__PURE__ */ jsx(Ripple, { className: "opacity-20", color: "#4a7c59" }),
    /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 relative z-10", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Leaf, { className: "w-12 h-12 mx-auto mb-6 opacity-80" }),
      /* @__PURE__ */ jsx("h2", { className: "text-3xl sm:text-4xl font-heading font-bold mb-4", children: "Stay in the Loop" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg opacity-90 mb-8", children: "Subscribe to our newsletter for new scents, exclusive offers, and sustainability tips. Join the Blossom community." }),
      submitted ? /* @__PURE__ */ jsxs(Alert, { className: "bg-white/10 backdrop-blur-sm border-white/20", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-white" }),
        /* @__PURE__ */ jsx(AlertTitle, { className: "text-lg font-medium text-white", children: "Thank you for subscribing!" }),
        /* @__PURE__ */ jsx(AlertDescription, { className: "opacity-80 mt-2 text-gray-200", children: "We'll keep you updated with the latest from Blossom." })
      ] }) : /* @__PURE__ */ jsxs(
        "form",
        {
          onSubmit: handleSubmit,
          className: "flex flex-col sm:flex-row gap-4 max-w-md mx-auto",
          children: [
            /* @__PURE__ */ jsx(
              Input,
              {
                type: "email",
                placeholder: "Enter your email",
                value: email,
                onChange: (e) => setEmail(e.target.value),
                className: "flex-1 h-12 bg-white border text-gray-950 dark:text-gray-100 placeholder:text-gray-900 dark:placeholder:text-gray-300 focus-visible:ring-[#d4af37] focus-visible:ring-2 border-2 dark:bg-black/50",
                required: true
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                type: "submit",
                variant: "secondary",
                className: "group h-12 px-8 bg-[#d4af37] text-black font-bold hover:bg-[#c9a227] shadow-lg",
                disabled: loading,
                children: loading ? /* @__PURE__ */ jsx(Spinner, { className: "w-4 h-4" }) : /* @__PURE__ */ jsxs(Fragment, { children: [
                  "Subscribe",
                  /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })
                ] })
              }
            )
          ]
        }
      ),
      /* @__PURE__ */ jsx(Separator, { className: "my-6 bg-white/20" }),
      /* @__PURE__ */ jsx("p", { className: "text-sm opacity-70 text-gray-200", children: "We respect your privacy. Unsubscribe at any time." })
    ] }) }) })
  ] });
}
const footerLinks = {
  shop: [
    { label: "All Products", href: "/products" },
    { label: "My Cart", href: "/cart" }
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" }
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping Info", href: "/faq" },
    { label: "Returns", href: "/faq" }
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" }
  ]
};
const socialLinks = [
  { icon: InstagramFreeIcons, href: "#", label: "Follow us on Instagram", color: "#E4405F" },
  { icon: NewTwitterFreeIcons, href: "#", label: "Follow us on Twitter", color: "black" },
  { icon: Facebook02FreeIcons, href: "#", label: "Follow us on Facebook", color: "#1877F2" }
];
const linkSections = [
  { title: "Shop", links: footerLinks.shop },
  { title: "Company", links: footerLinks.company },
  { title: "Support", links: footerLinks.support },
  { title: "Legal", links: footerLinks.legal }
];
function Footer() {
  return /* @__PURE__ */ jsxs(Fragment, { children: [
    /* @__PURE__ */ jsx(Newsletter, {}),
    /* @__PURE__ */ jsx("footer", { className: "bg-foreground text-background", children: /* @__PURE__ */ jsx(ScrollArea, { className: "h-auto", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8 py-16", children: [
      /* @__PURE__ */ jsxs("div", { className: "grid grid-cols-2 md:grid-cols-5 gap-8", children: [
        /* @__PURE__ */ jsxs("div", { className: "col-span-2 md:col-span-1", children: [
          /* @__PURE__ */ jsx(NavigationMenu, { orientation: "vertical", className: "max-w-full", children: /* @__PURE__ */ jsx(NavigationMenuList, { className: "flex-col items-start gap-0", children: /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsxs(Link, { id: "link-footer", to: "/#link-footer", className: "flex items-center gap-2 mb-4 hover:bg-white/50 active:bg-white/40 focus-visible:bg-white/5 dark:hover:bg-black/5 dark:active:bg-black/20 dark:focus-visible:bg-black/5", children: [
            /* @__PURE__ */ jsx(Flower2, { className: "w-8 h-8" }),
            /* @__PURE__ */ jsx("span", { className: "text-xl font-heading font-bold", children: "Blossom" })
          ] }) }) }) }) }),
          /* @__PURE__ */ jsx("p", { className: "text-sm opacity-70 mb-6 leading-relaxed", children: "Natural fragrances crafted from upcycled fruit peels. Fresh, sustainable, and made with love." }),
          /* @__PURE__ */ jsx("div", { className: "flex gap-4", children: socialLinks.map((social, index) => /* @__PURE__ */ jsxs(Tooltip, { children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(
              Button,
              {
                variant: "ghost",
                size: "icon",
                className: "rounded-full dark:hover:bg-white hover:bg-white/80 bg-white/10 border border-white/20 footer-social-btn",
                "data-social": ["instagram", "twitter", "facebook"][index],
                asChild: true,
                children: /* @__PURE__ */ jsx(
                  "a",
                  {
                    href: social.href,
                    "aria-label": social.label,
                    className: "flex items-center justify-center",
                    children: /* @__PURE__ */ jsx(
                      HugeiconsIcon,
                      {
                        icon: social.icon,
                        className: "w-6 h-6",
                        color: social.color
                      }
                    )
                  }
                )
              }
            ) }),
            /* @__PURE__ */ jsx(TooltipContent, { children: social.label })
          ] }, social.label)) })
        ] }),
        linkSections.map((section) => /* @__PURE__ */ jsx("div", { children: /* @__PURE__ */ jsx(NavigationMenu, { orientation: "vertical", className: "max-w-full", children: /* @__PURE__ */ jsxs(NavigationMenuList, { className: "flex-col items-start gap-3", children: [
          /* @__PURE__ */ jsx(NavigationMenuItem, { className: "font-heading font-semibold mb-1", children: section.title }),
          section.links.map((link) => /* @__PURE__ */ jsx(NavigationMenuItem, { children: /* @__PURE__ */ jsx(NavigationMenuLink, { asChild: true, children: /* @__PURE__ */ jsx(
            Link,
            {
              to: link.href,
              className: "text-sm text-muted hover:text-white dark:hover:text-foreground hover:bg-muted/50 px-2 py-1 rounded-md -mx-2 transition-colors",
              children: link.label
            }
          ) }) }, link.label))
        ] }) }) }, section.title))
      ] }),
      /* @__PURE__ */ jsx(Separator, { className: "mt-12 bg-background/10" }),
      /* @__PURE__ */ jsxs("div", { className: "pt-8 flex flex-col md:flex-row justify-between items-center gap-4", children: [
        /* @__PURE__ */ jsxs("p", { className: "text-sm opacity-70", children: [
          "© ",
          (/* @__PURE__ */ new Date()).getFullYear(),
          " Blossom. All rights reserved."
        ] }),
        /* @__PURE__ */ jsxs(Tooltip, { children: [
          /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx("span", { className: "text-sm opacity-70 cursor-default", children: "Made with 🌸 for a greener world" }) }),
          /* @__PURE__ */ jsx(TooltipContent, { children: "Sustainable & Eco-Friendly" })
        ] })
      ] })
    ] }) }) })
  ] });
}
function CookieBanner() {
  const [visible, setVisible] = useState(false);
  useEffect(() => {
    const consent = localStorage.getItem("cookie-consent");
    if (!consent) {
      setVisible(true);
    }
  }, []);
  const accept = () => {
    localStorage.setItem("cookie-consent", "accepted");
    setVisible(false);
  };
  const decline = () => {
    localStorage.setItem("cookie-consent", "declined");
    setVisible(false);
  };
  if (!visible) return null;
  return /* @__PURE__ */ jsx(
    "div",
    {
      className: "fixed bottom-0 left-0 right-0 z-50 p-4",
      role: "dialog",
      "aria-label": "Cookie consent",
      children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsx(Alert, { className: "max-w-3xl mx-auto bg-card border border-border rounded-xl shadow-lg p-6", children: /* @__PURE__ */ jsxs("div", { className: "flex items-start gap-4", children: [
        /* @__PURE__ */ jsx(Cookie, { className: "w-6 h-6 text-primary shrink-0 mt-0.5" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx(AlertTitle, { className: "text-base font-heading font-semibold text-card-foreground mb-1", children: "We use cookies" }),
          /* @__PURE__ */ jsxs(AlertDescription, { className: "text-sm text-muted-foreground leading-relaxed mb-4", children: [
            "We use essential cookies to make our site work. These cookies are necessary for the website to function and cannot be switched off.",
            " ",
            /* @__PURE__ */ jsx(Link, { to: "/privacy", className: "text-primary underline underline-offset-2", children: "Learn more" })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "flex gap-3", children: [
            /* @__PURE__ */ jsx(Button, { size: "default", onClick: accept, children: "Accept" }),
            /* @__PURE__ */ jsx(Button, { size: "default", variant: "outline", onClick: decline, children: "Decline" })
          ] })
        ] }),
        /* @__PURE__ */ jsx(
          Button,
          {
            variant: "ghost",
            size: "icon",
            onClick: decline,
            "aria-label": "Close cookie banner",
            className: "text-muted-foreground hover:text-foreground",
            children: /* @__PURE__ */ jsx(X, { className: "w-5 h-5" })
          }
        )
      ] }) }) })
    }
  );
}
const useCompareStore = create((set, get) => ({
  items: [],
  addItem: (productId) => {
    const product = getProductById(productId);
    if (!product || get().isInCompare(productId) || get().items.length >= 4) return;
    set((state) => ({
      items: [
        ...state.items,
        {
          id: crypto.randomUUID(),
          productId: product.id,
          product,
          addedAt: /* @__PURE__ */ new Date()
        }
      ]
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
    set({ items: [] });
  }
}));
function CompareIndicator() {
  const items = useCompareStore((state) => state.items);
  const count = items.length;
  if (count === 0) return null;
  return /* @__PURE__ */ jsxs(
    Link,
    {
      to: "/compare",
      className: "fixed bottom-6 right-6 z-40 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg hover:bg-primary/90 transition-all group",
      children: [
        /* @__PURE__ */ jsxs("div", { className: "relative", children: [
          /* @__PURE__ */ jsx(GitCompare, { className: "w-5 h-5" }),
          /* @__PURE__ */ jsx(
            Badge,
            {
              variant: "secondary",
              className: "absolute -top-2 -right-2 h-5 w-5 p-0 flex items-center justify-center text-xs bg-background text-foreground",
              children: count
            }
          )
        ] }),
        /* @__PURE__ */ jsxs("span", { className: "font-medium text-sm", children: [
          "Compare (",
          count,
          ")"
        ] })
      ]
    }
  );
}
const Toaster = ({ ...props }) => {
  const { theme = "system" } = useTheme();
  return /* @__PURE__ */ jsx(
    Toaster$1,
    {
      theme,
      className: "toaster group",
      icons: {
        success: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: CheckmarkCircle02Icon, strokeWidth: 2, className: "size-4" }),
        info: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: InformationCircleIcon, strokeWidth: 2, className: "size-4" }),
        warning: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Alert02Icon, strokeWidth: 2, className: "size-4" }),
        error: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: MultiplicationSignCircleIcon, strokeWidth: 2, className: "size-4" }),
        loading: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Loading03Icon, strokeWidth: 2, className: "size-4 animate-spin" })
      },
      style: {
        "--normal-bg": "var(--popover)",
        "--normal-text": "var(--popover-foreground)",
        "--normal-border": "var(--border)",
        "--border-radius": "var(--radius)"
      },
      toastOptions: {
        classNames: {
          toast: "cn-toast"
        }
      },
      ...props
    }
  );
};
function ErrorHome({ className }) {
  return /* @__PURE__ */ jsxs(Tooltip, { children: [
    /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { className, asChild: true, variant: "default", children: /* @__PURE__ */ jsx(Link, { to: "/", children: "Home" }) }) }),
    /* @__PURE__ */ jsx(TooltipContent, { children: "Return to homepage" })
  ] });
}
function Empty({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "empty",
      className: cn(
        "flex w-full min-w-0 flex-1 flex-col items-center justify-center gap-4 rounded-lg border-dashed p-12 text-center text-balance",
        className
      ),
      ...props
    }
  );
}
function EmptyHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "empty-header",
      className: cn("flex max-w-sm flex-col items-center gap-2", className),
      ...props
    }
  );
}
const emptyMediaVariants = cva(
  "mb-2 flex shrink-0 items-center justify-center [&_svg]:pointer-events-none [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-transparent",
        icon: "flex size-10 shrink-0 items-center justify-center rounded-lg bg-muted text-foreground [&_svg:not([class*='size-'])]:size-6"
      }
    },
    defaultVariants: {
      variant: "default"
    }
  }
);
function EmptyMedia({
  className,
  variant = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "empty-icon",
      "data-variant": variant,
      className: cn(emptyMediaVariants({ variant, className })),
      ...props
    }
  );
}
function EmptyTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "empty-title",
      className: cn("text-lg font-medium tracking-tight", className),
      ...props
    }
  );
}
function EmptyDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "empty-description",
      className: cn(
        "text-sm/relaxed text-muted-foreground [&>a]:underline [&>a]:underline-offset-4 [&>a:hover]:text-primary",
        className
      ),
      ...props
    }
  );
}
function EmptyContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "empty-content",
      className: cn(
        "flex w-full max-w-sm min-w-0 flex-col items-center gap-4 text-sm text-balance",
        className
      ),
      ...props
    }
  );
}
function Avatar({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Avatar$1.Root,
    {
      "data-slot": "avatar",
      "data-size": size,
      className: cn(
        "group/avatar relative flex size-8 shrink-0 rounded-full select-none after:absolute after:inset-0 after:rounded-full after:border after:border-border after:mix-blend-darken data-[size=lg]:size-10 data-[size=sm]:size-6 dark:after:mix-blend-lighten",
        className
      ),
      ...props
    }
  );
}
function AvatarFallback({
  className,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Avatar$1.Fallback,
    {
      "data-slot": "avatar-fallback",
      className: cn(
        "flex size-full items-center justify-center rounded-full bg-muted text-sm text-muted-foreground group-data-[size=sm]/avatar:text-xs",
        className
      ),
      ...props
    }
  );
}
function AnimatedGradientText({
  children,
  className,
  speed = 1,
  colorFrom = "#ffaa40",
  colorTo = "#9c40ff",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "span",
    {
      style: {
        "--bg-size": `${speed * 300}%`,
        "--color-from": colorFrom,
        "--color-to": colorTo
      },
      className: cn(
        `animate-gradient inline bg-linear-to-r from-(--color-from) via-(--color-to) to-(--color-from) bg-size-[var(--bg-size)_100%] bg-clip-text text-transparent`,
        className
      ),
      ...props,
      children
    }
  );
}
function Skeleton({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "skeleton",
      className: cn("animate-pulse rounded-md bg-muted", className),
      ...props
    }
  );
}
function Card({
  className,
  size = "default",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card",
      "data-size": size,
      className: cn(
        "group/card flex flex-col gap-6 overflow-hidden rounded-xl bg-card py-6 text-sm text-card-foreground shadow-xs ring-1 ring-foreground/10 has-[>img:first-child]:pt-0 data-[size=sm]:gap-4 data-[size=sm]:py-4 *:[img:first-child]:rounded-t-xl *:[img:last-child]:rounded-b-xl",
        className
      ),
      ...props
    }
  );
}
function CardHeader({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-header",
      className: cn(
        "group/card-header @container/card-header grid auto-rows-min items-start gap-1 rounded-t-xl px-6 group-data-[size=sm]/card:px-4 has-data-[slot=card-action]:grid-cols-[1fr_auto] has-data-[slot=card-description]:grid-rows-[auto_auto] [.border-b]:pb-6 group-data-[size=sm]/card:[.border-b]:pb-4",
        className
      ),
      ...props
    }
  );
}
function CardTitle({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-title",
      className: cn(
        "text-base leading-normal font-medium group-data-[size=sm]/card:text-sm",
        className
      ),
      ...props
    }
  );
}
function CardDescription({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-description",
      className: cn("text-sm text-muted-foreground", className),
      ...props
    }
  );
}
function CardAction({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-action",
      className: cn("col-start-2 row-span-2 row-start-1 self-start justify-self-end", className),
      ...props
    }
  );
}
function CardContent({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-content",
      className: cn("px-6 group-data-[size=sm]/card:px-4", className),
      ...props
    }
  );
}
function CardFooter({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "card-footer",
      className: cn(
        "flex items-center rounded-b-xl px-6 group-data-[size=sm]/card:px-4 [.border-t]:pt-6 group-data-[size=sm]/card:[.border-t]:pt-4",
        className
      ),
      ...props
    }
  );
}
function Progress({
  className,
  value,
  ...props
}) {
  return /* @__PURE__ */ jsx(
    Progress$1.Root,
    {
      "data-slot": "progress",
      className: cn(
        "relative flex h-1.5 w-full items-center overflow-x-hidden rounded-full bg-muted",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        Progress$1.Indicator,
        {
          "data-slot": "progress-indicator",
          className: "size-full flex-1 bg-primary transition-all",
          style: { transform: `translateX(-${100 - (value || 0)}%)` }
        }
      )
    }
  );
}
const Route$d = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#3d5a3d" }
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
      { rel: "canonical", href: "https://blossom.com" }
    ]
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorOccurred,
  pendingComponent: PageLoading
});
function RootComponent() {
  return /* @__PURE__ */ jsxs(RootDocument, { children: [
    /* @__PURE__ */ jsx(Header, {}),
    /* @__PURE__ */ jsx(Outlet, {}),
    /* @__PURE__ */ jsx(Footer, {}),
    /* @__PURE__ */ jsx(CookieBanner, {}),
    /* @__PURE__ */ jsx(CompareIndicator, {}),
    /* @__PURE__ */ jsx(Toaster, {})
  ] });
}
function NotFound() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Empty, { className: "max-w-md mx-auto text-center", children: [
    /* @__PURE__ */ jsxs(EmptyHeader, { children: [
      /* @__PURE__ */ jsx(EmptyMedia, { variant: "default", children: /* @__PURE__ */ jsx(Avatar, { className: "w-24 h-24 bg-primary/10", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(Flower2, { className: "w-12 h-12 text-primary" }) }) }) }),
      /* @__PURE__ */ jsx(EmptyTitle, { className: "text-6xl font-heading font-bold", children: /* @__PURE__ */ jsx(AnimatedGradientText, { children: "404" }) }),
      /* @__PURE__ */ jsx(EmptyDescription, { className: "text-2xl font-heading font-semibold text-foreground", children: "Page Not Found" }),
      /* @__PURE__ */ jsx(EmptyDescription, { children: "Oops! It seems this page has wilted away. Let's get you back to fresh scents." })
    ] }),
    /* @__PURE__ */ jsx(EmptyContent, { children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "group", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/", children: [
      /* @__PURE__ */ jsx(Home, { className: "mr-2 w-4 h-4" }),
      "Back to Home"
    ] }) }) })
  ] }) }) }) }) });
}
function PageLoading() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "max-w-sm mx-auto text-center", children: [
    /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(Spinner, { className: "size-14 mx-auto" }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
      /* @__PURE__ */ jsx("h1", { className: "text-sm select-none text-muted-foreground", children: "Loading..." }),
      /* @__PURE__ */ jsx(Progress, { value: 33, className: "h-1" }),
      /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-3/4 mx-auto" }),
        /* @__PURE__ */ jsx(Skeleton, { className: "h-4 w-1/2 mx-auto" })
      ] })
    ] })
  ] }) }) }) }) });
}
function ErrorOccurred() {
  return /* @__PURE__ */ jsx(RootDocument, { children: /* @__PURE__ */ jsx("div", { className: "min-h-screen flex items-center justify-center bg-background", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Alert, { variant: "destructive", className: "max-w-md mx-auto text-center", children: [
    /* @__PURE__ */ jsx(AlertTriangle, { className: "h-6 w-6 mx-auto" }),
    /* @__PURE__ */ jsx(AlertTitle, { className: "text-2xl font-heading font-bold", children: "Unexpected Error" }),
    /* @__PURE__ */ jsx(AlertDescription, { className: "mt-2", children: "Something went wrong. Please try again." }),
    /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
    /* @__PURE__ */ jsx(ErrorHome, { className: "text-xl w-50" })
  ] }) }) }) }) });
}
function RootDocument({ children }) {
  return /* @__PURE__ */ jsxs("html", { lang: "en", children: [
    /* @__PURE__ */ jsx("head", { children: /* @__PURE__ */ jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxs("body", { children: [
      /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx(ThemeProvider, { attribute: "class", defaultTheme: "light", enableSystem: true, children: /* @__PURE__ */ jsx(TooltipProvider, { delayDuration: 300, children }) }) }),
      /* @__PURE__ */ jsx(Scripts, {})
    ] })
  ] });
}
const $$splitComponentImporter$c = () => import("./wishlist-BDW-rqFW.js");
const Route$c = createFileRoute("/wishlist")({
  component: lazyRouteComponent($$splitComponentImporter$c, "component")
});
const $$splitComponentImporter$b = () => import("./terms-BtN8C72D.js");
const Route$b = createFileRoute("/terms")({
  component: lazyRouteComponent($$splitComponentImporter$b, "component")
});
const $$splitComponentImporter$a = () => import("./privacy-DHPzC-u0.js");
const Route$a = createFileRoute("/privacy")({
  component: lazyRouteComponent($$splitComponentImporter$a, "component")
});
const $$splitComponentImporter$9 = () => import("./pricing-xVlBhDZe.js");
const Route$9 = createFileRoute("/pricing")({
  component: lazyRouteComponent($$splitComponentImporter$9, "component")
});
const $$splitComponentImporter$8 = () => import("./cookies-C_rNLgzL.js");
const Route$8 = createFileRoute("/cookies")({
  component: lazyRouteComponent($$splitComponentImporter$8, "component")
});
const $$splitComponentImporter$7 = () => import("./contact-dDsL_E1E.js");
const Route$7 = createFileRoute("/contact")({
  component: lazyRouteComponent($$splitComponentImporter$7, "component")
});
const $$splitComponentImporter$6 = () => import("./compare-ovnLr2su.js");
const Route$6 = createFileRoute("/compare")({
  component: lazyRouteComponent($$splitComponentImporter$6, "component")
});
const $$splitComponentImporter$5 = () => import("./checkout--lQBSqky.js");
const Route$5 = createFileRoute("/checkout")({
  component: lazyRouteComponent($$splitComponentImporter$5, "component")
});
const $$splitComponentImporter$4 = () => import("./cart-C7hN2vJg.js");
const Route$4 = createFileRoute("/cart")({
  component: lazyRouteComponent($$splitComponentImporter$4, "component")
});
const $$splitComponentImporter$3 = () => import("./about-ZADQyh3h.js");
const Route$3 = createFileRoute("/about")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./index-B73HDOCK.js");
const Route$2 = createFileRoute("/")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./index-BjAGk5O2.js");
const Route$1 = createFileRoute("/products/")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component"),
  validateSearch: (search) => {
    return {
      q: search.q || "",
      category: search.category || "",
      notes: search.notes || "",
      priceMin: Number(search.priceMin) || 0,
      priceMax: Number(search.priceMax) || 100,
      featured: search.featured || ""
    };
  }
});
const $$splitComponentImporter = () => import("./_productId-3l3CsI7L.js");
const Route = createFileRoute("/product/$productId")({
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const WishlistRoute = Route$c.update({
  id: "/wishlist",
  path: "/wishlist",
  getParentRoute: () => Route$d
});
const TermsRoute = Route$b.update({
  id: "/terms",
  path: "/terms",
  getParentRoute: () => Route$d
});
const PrivacyRoute = Route$a.update({
  id: "/privacy",
  path: "/privacy",
  getParentRoute: () => Route$d
});
const PricingRoute = Route$9.update({
  id: "/pricing",
  path: "/pricing",
  getParentRoute: () => Route$d
});
const CookiesRoute = Route$8.update({
  id: "/cookies",
  path: "/cookies",
  getParentRoute: () => Route$d
});
const ContactRoute = Route$7.update({
  id: "/contact",
  path: "/contact",
  getParentRoute: () => Route$d
});
const CompareRoute = Route$6.update({
  id: "/compare",
  path: "/compare",
  getParentRoute: () => Route$d
});
const CheckoutRoute = Route$5.update({
  id: "/checkout",
  path: "/checkout",
  getParentRoute: () => Route$d
});
const CartRoute = Route$4.update({
  id: "/cart",
  path: "/cart",
  getParentRoute: () => Route$d
});
const AboutRoute = Route$3.update({
  id: "/about",
  path: "/about",
  getParentRoute: () => Route$d
});
const IndexRoute = Route$2.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$d
});
const ProductsIndexRoute = Route$1.update({
  id: "/products/",
  path: "/products/",
  getParentRoute: () => Route$d
});
const ProductProductIdRoute = Route.update({
  id: "/product/$productId",
  path: "/product/$productId",
  getParentRoute: () => Route$d
});
const rootRouteChildren = {
  IndexRoute,
  AboutRoute,
  CartRoute,
  CheckoutRoute,
  CompareRoute,
  ContactRoute,
  CookiesRoute,
  PricingRoute,
  PrivacyRoute,
  TermsRoute,
  WishlistRoute,
  ProductProductIdRoute,
  ProductsIndexRoute
};
const routeTree = Route$d._addFileChildren(rootRouteChildren)._addFileTypes();
function getRouter() {
  const router2 = createRouter({
    routeTree,
    scrollRestoration: true
  });
  return router2;
}
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  Avatar as A,
  BlurFade as B,
  Card as C,
  AlertDescription as D,
  Empty as E,
  useCompareStore as F,
  TabsContent as G,
  AnimatedGradientText as H,
  Input as I,
  CardAction as J,
  products as K,
  Label as L,
  Sheet as M,
  SheetTrigger as N,
  SheetContent as O,
  Progress as P,
  SheetHeader as Q,
  SheetTitle as R,
  ScrollArea as S,
  Tooltip as T,
  SheetDescription as U,
  categories as V,
  getProductById as W,
  getSimilarProducts as X,
  router as Y,
  AvatarFallback as a,
  Badge as b,
  EmptyHeader as c,
  EmptyMedia as d,
  EmptyTitle as e,
  EmptyDescription as f,
  EmptyContent as g,
  Button as h,
  useCartStore as i,
  TooltipTrigger as j,
  TooltipContent as k,
  CardContent as l,
  Separator as m,
  CardHeader as n,
  CardTitle as o,
  CardDescription as p,
  useSubscriptionStore as q,
  SUBSCRIPTION_PLANS as r,
  Tabs as s,
  TabsList as t,
  useWishlistStore as u,
  TabsTrigger as v,
  CardFooter as w,
  cn as x,
  Alert as y,
  AlertTitle as z
};

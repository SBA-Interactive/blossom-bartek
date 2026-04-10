import { jsx, jsxs } from "react/jsx-runtime";
import { x as cn, I as Input, K as products, B as BlurFade, b as Badge, M as Sheet, N as SheetTrigger, h as Button, O as SheetContent, Q as SheetHeader, R as SheetTitle, U as SheetDescription, E as Empty, c as EmptyHeader, d as EmptyMedia, e as EmptyTitle, f as EmptyDescription, g as EmptyContent, V as categories, L as Label, m as Separator, i as useCartStore, u as useWishlistStore, F as useCompareStore, C as Card, o as CardTitle, p as CardDescription, w as CardFooter, T as Tooltip, j as TooltipTrigger, k as TooltipContent, l as CardContent, J as CardAction } from "./router-CtctPOdV.js";
import { cva } from "class-variance-authority";
import { Checkbox as Checkbox$1 } from "radix-ui";
import { HugeiconsIcon } from "@hugeicons/react";
import { Tick02Icon } from "@hugeicons/core-free-icons";
import { B as BorderBeam } from "./border-beam-DHXDrmLy.js";
import { useSearch, useNavigate, Link } from "@tanstack/react-router";
import { Leaf, Search, SlidersHorizontal, LayoutGrid, List, X, Package, Heart, Scale, Check, ShoppingBag } from "lucide-react";
import { useState, useRef, useEffect, useMemo } from "react";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
import "zustand";
import "react-dom";
import "zustand/middleware";
import "motion/react";
import "next-themes";
import "sonner";
function InputGroup({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      "data-slot": "input-group",
      role: "group",
      className: cn(
        "group/input-group relative flex h-9 w-full min-w-0 items-center rounded-md border border-input shadow-xs transition-[color,box-shadow] outline-none in-data-[slot=combobox-content]:focus-within:border-inherit in-data-[slot=combobox-content]:focus-within:ring-0 has-[[data-slot=input-group-control]:focus-visible]:border-ring has-[[data-slot=input-group-control]:focus-visible]:ring-3 has-[[data-slot=input-group-control]:focus-visible]:ring-ring/50 has-[[data-slot][aria-invalid=true]]:border-destructive has-[[data-slot][aria-invalid=true]]:ring-3 has-[[data-slot][aria-invalid=true]]:ring-destructive/20 has-[>[data-align=block-end]]:h-auto has-[>[data-align=block-end]]:flex-col has-[>[data-align=block-start]]:h-auto has-[>[data-align=block-start]]:flex-col has-[>textarea]:h-auto dark:bg-input/30 dark:has-[[data-slot][aria-invalid=true]]:ring-destructive/40 has-[>[data-align=block-end]]:[&>input]:pt-3 has-[>[data-align=block-start]]:[&>input]:pb-3 has-[>[data-align=inline-end]]:[&>input]:pr-1.5 has-[>[data-align=inline-start]]:[&>input]:pl-1.5",
        className
      ),
      ...props
    }
  );
}
const inputGroupAddonVariants = cva(
  "flex h-auto cursor-text items-center justify-center gap-2 py-1.5 text-sm font-medium text-muted-foreground select-none group-data-[disabled=true]/input-group:opacity-50 [&>kbd]:rounded-[calc(var(--radius)-5px)] [&>svg:not([class*='size-'])]:size-4",
  {
    variants: {
      align: {
        "inline-start": "order-first pl-2 has-[>button]:-ml-1 has-[>kbd]:ml-[-0.15rem]",
        "inline-end": "order-last pr-2 has-[>button]:-mr-1 has-[>kbd]:mr-[-0.15rem]",
        "block-start": "order-first w-full justify-start px-2.5 pt-2 group-has-[>input]/input-group:pt-2 [.border-b]:pb-2",
        "block-end": "order-last w-full justify-start px-2.5 pb-2 group-has-[>input]/input-group:pb-2 [.border-t]:pt-2"
      }
    },
    defaultVariants: {
      align: "inline-start"
    }
  }
);
function InputGroupAddon({
  className,
  align = "inline-start",
  ...props
}) {
  return /* @__PURE__ */ jsx(
    "div",
    {
      role: "group",
      "data-slot": "input-group-addon",
      "data-align": align,
      className: cn(inputGroupAddonVariants({ align }), className),
      onClick: (e) => {
        if (e.target.closest("button")) {
          return;
        }
        e.currentTarget.parentElement?.querySelector("input")?.focus();
      },
      ...props
    }
  );
}
cva("flex items-center gap-2 text-sm shadow-none", {
  variants: {
    size: {
      xs: "h-6 gap-1 rounded-[calc(var(--radius)-5px)] px-1.5 [&>svg:not([class*='size-'])]:size-3.5",
      sm: "",
      "icon-xs": "size-6 rounded-[calc(var(--radius)-5px)] p-0 has-[>svg]:p-0",
      "icon-sm": "size-8 p-0 has-[>svg]:p-0"
    }
  },
  defaultVariants: {
    size: "xs"
  }
});
function InputGroupInput({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Input,
    {
      "data-slot": "input-group-control",
      className: cn(
        "flex-1 rounded-none border-0 bg-transparent shadow-none ring-0 focus-visible:ring-0 aria-invalid:ring-0 dark:bg-transparent",
        className
      ),
      ...props
    }
  );
}
function Checkbox({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    Checkbox$1.Root,
    {
      "data-slot": "checkbox",
      className: cn(
        "peer relative flex size-4 shrink-0 items-center justify-center rounded-[4px] border border-input shadow-xs transition-shadow outline-none group-has-disabled/field:opacity-50 after:absolute after:-inset-x-3 after:-inset-y-2 focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 aria-invalid:aria-checked:border-primary dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40 data-checked:border-primary data-checked:bg-primary data-checked:text-primary-foreground dark:data-checked:bg-primary",
        className
      ),
      ...props,
      children: /* @__PURE__ */ jsx(
        Checkbox$1.Indicator,
        {
          "data-slot": "checkbox-indicator",
          className: "grid place-content-center text-current transition-none [&>svg]:size-3.5",
          children: /* @__PURE__ */ jsx(HugeiconsIcon, { icon: Tick02Icon, strokeWidth: 2 })
        }
      )
    }
  );
}
const sortOptions = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" }
];
const noteOptions = ["Orange", "Lemon", "Jasmine", "Mint", "Berry", "Grapefruit", "Rose", "Lavender"];
function ProductCard({ product, featured = false }) {
  const addItem = useCartStore((state) => state.addItem);
  const wishlistItems = useWishlistStore((state) => state.items);
  const addToWishlist = useWishlistStore((state) => state.addItem);
  const removeFromWishlist = useWishlistStore((state) => state.removeItem);
  const compareItems = useCompareStore((state) => state.items);
  const addToCompare = useCompareStore((state) => state.addItem);
  const removeFromCompare = useCompareStore((state) => state.removeItem);
  const isInWishlist = wishlistItems.some((item) => item.productId === product.id);
  const isInCompare = compareItems.some((item) => item.productId === product.id);
  const [added, setAdded] = useState(false);
  const cardRef = useRef(null);
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2e3);
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
  return /* @__PURE__ */ jsx("li", { ref: cardRef, className: "list-none", children: /* @__PURE__ */ jsxs(Card, { className: `group overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 relative ${featured ? "border-2 border-[#D4AF37]" : ""}`, children: [
    /* @__PURE__ */ jsx(
      BorderBeam,
      {
        size: 200,
        duration: 6,
        colorFrom: "var(--brand-rose)",
        colorTo: "var(--primary)",
        className: "opacity-0 group-hover:opacity-100 transition-opacity"
      }
    ),
    /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: { productId: product.id }, className: "block", children: /* @__PURE__ */ jsxs("figure", { className: "relative aspect-[4/5] overflow-hidden bg-muted", children: [
      /* @__PURE__ */ jsx(
        "img",
        {
          src: product.image,
          alt: `${product.name} fragrance bottle`,
          className: "w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
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
              className: `shrink-0 bg-background/80 backdrop-blur-sm ${isInCompare ? "text-primary border-primary" : ""} md:opacity-0 md:group-hover:opacity-100 transition-opacity`,
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
      /* @__PURE__ */ jsx("figcaption", { className: "sr-only", children: product.name })
    ] }) }),
    /* @__PURE__ */ jsxs(CardContent, { className: "p-6", children: [
      /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 mb-2 overflow-hidden", children: [
        /* @__PURE__ */ jsx(Leaf, { className: "w-4 h-4 text-primary shrink-0", "aria-hidden": "true" }),
        /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wider truncate", children: product.notes.top })
      ] }),
      /* @__PURE__ */ jsx(CardTitle, { className: "text-xl font-heading font-semibold mb-2 truncate", children: product.name }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-sm mb-5 leading-relaxed line-clamp-2", children: product.description }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "flex items-center justify-between p-0 gap-4", children: [
        /* @__PURE__ */ jsxs(
          "data",
          {
            value: product.price,
            className: "text-2xl font-heading font-bold text-primary shrink-0",
            children: [
              "€",
              product.price
            ]
          }
        ),
        /* @__PURE__ */ jsxs(
          CardAction,
          {
            className: "flex gap-2 shrink-0",
            role: "group",
            "aria-label": `Actions for ${product.name}`,
            children: [
              /* @__PURE__ */ jsxs(Tooltip, { children: [
                /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "default", variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: { productId: product.id }, children: "Details" }) }) }),
                /* @__PURE__ */ jsxs(TooltipContent, { children: [
                  "View ",
                  product.name
                ] })
              ] }),
              /* @__PURE__ */ jsxs(Tooltip, { children: [
                /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(
                  Button,
                  {
                    size: "default",
                    onClick: handleAddToCart,
                    "aria-label": `Add ${product.name} to cart`,
                    children: [
                      added ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 mr-1", "aria-hidden": "true" }) : /* @__PURE__ */ jsx(ShoppingBag, { className: "w-4 h-4 mr-1", "aria-hidden": "true" }),
                      added ? "Added" : "Buy"
                    ]
                  }
                ) }),
                /* @__PURE__ */ jsx(TooltipContent, { children: "Add to cart" })
              ] })
            ]
          }
        )
      ] })
    ] })
  ] }) });
}
function FilterPanel({
  selectedCategories,
  setSelectedCategories,
  selectedNotes,
  setSelectedNotes,
  priceRange,
  setPriceRange,
  onClear,
  onCategoryChange,
  onNotesChange,
  onPriceChange
}) {
  const toggleCategory = (cat) => {
    const newCats = selectedCategories.includes(cat) ? selectedCategories.filter((c) => c !== cat) : [...selectedCategories, cat];
    setSelectedCategories(newCats);
    onCategoryChange(newCats);
  };
  const toggleNote = (note) => {
    const newNotes = selectedNotes.includes(note) ? selectedNotes.filter((n) => n !== note) : [...selectedNotes, note];
    setSelectedNotes(newNotes);
    onNotesChange(newNotes);
  };
  const hasFilters = selectedCategories.length > 0 || selectedNotes.length > 0 || priceRange[0] > 0 || priceRange[1] < 100;
  const handlePriceMinChange = (value) => {
    const newRange = [value, priceRange[1]];
    setPriceRange(newRange);
    onPriceChange(newRange);
  };
  const handlePriceMaxChange = (value) => {
    const newRange = [priceRange[0], value];
    setPriceRange(newRange);
    onPriceChange(newRange);
  };
  return /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
    /* @__PURE__ */ jsxs("div", { className: "flex items-center justify-between", children: [
      /* @__PURE__ */ jsx("h3", { className: "font-heading font-semibold text-lg", children: "Filters" }),
      hasFilters && /* @__PURE__ */ jsxs(Button, { variant: "ghost", size: "sm", onClick: onClear, className: "text-xs h-7", children: [
        /* @__PURE__ */ jsx(X, { className: "w-3 h-3 mr-1" }),
        "Clear"
      ] })
    ] }),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Category" }),
      /* @__PURE__ */ jsx("div", { className: "space-y-2", children: categories.map((cat) => /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsx(
          Checkbox,
          {
            id: `cat-${cat}`,
            checked: selectedCategories.includes(cat),
            onCheckedChange: () => toggleCategory(cat)
          }
        ),
        /* @__PURE__ */ jsx(Label, { htmlFor: `cat-${cat}`, className: "text-sm cursor-pointer", children: cat })
      ] }, cat)) })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Price Range" }),
      /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "min-price", className: "text-xs text-muted-foreground", children: "Min" }),
          /* @__PURE__ */ jsxs(InputGroup, { className: "mt-1", children: [
            /* @__PURE__ */ jsx(InputGroupAddon, { children: "€" }),
            /* @__PURE__ */ jsx(
              InputGroupInput,
              {
                id: "min-price",
                type: "number",
                min: 0,
                value: priceRange[0],
                onChange: (e) => handlePriceMinChange(Number(e.target.value))
              }
            )
          ] })
        ] }),
        /* @__PURE__ */ jsx("span", { className: "mt-4", children: "-" }),
        /* @__PURE__ */ jsxs("div", { className: "flex-1", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "max-price", className: "text-xs text-muted-foreground", children: "Max" }),
          /* @__PURE__ */ jsxs(InputGroup, { className: "mt-1", children: [
            /* @__PURE__ */ jsx(InputGroupAddon, { children: "€" }),
            /* @__PURE__ */ jsx(
              InputGroupInput,
              {
                id: "max-price",
                type: "number",
                min: 0,
                value: priceRange[1],
                onChange: (e) => handlePriceMaxChange(Number(e.target.value))
              }
            )
          ] })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsx(Separator, {}),
    /* @__PURE__ */ jsxs("div", { className: "space-y-3", children: [
      /* @__PURE__ */ jsx("h4", { className: "text-sm font-medium", children: "Scent Notes" }),
      /* @__PURE__ */ jsx("div", { className: "flex flex-wrap gap-2", children: noteOptions.map((note) => /* @__PURE__ */ jsx(
        Button,
        {
          variant: selectedNotes.includes(note) ? "default" : "outline",
          size: "sm",
          className: "text-xs h-7",
          onClick: () => toggleNote(note),
          children: note
        },
        note
      )) })
    ] })
  ] });
}
function ProductsPage() {
  const searchParams = useSearch({ from: "/products/" });
  const navigate = useNavigate({ from: "/products/" });
  const [search, setSearch] = useState(searchParams.q || "");
  const [sortBy, setSortBy] = useState("newest");
  const [viewMode, setViewMode] = useState("grid");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState(
    searchParams.category ? [searchParams.category] : []
  );
  const [selectedNotes, setSelectedNotes] = useState(
    searchParams.notes ? [searchParams.notes] : []
  );
  const [priceRange, setPriceRange] = useState([
    searchParams.priceMin || 0,
    searchParams.priceMax || 100
  ]);
  const featuredRef = useRef(null);
  useEffect(() => {
    if (searchParams.q) setSearch(searchParams.q);
    if (searchParams.category) setSelectedCategories([searchParams.category]);
    if (searchParams.notes) setSelectedNotes([searchParams.notes]);
    if (searchParams.priceMin) setPriceRange((prev) => [searchParams.priceMin, prev[1]]);
    if (searchParams.priceMax) setPriceRange((prev) => [prev[0], searchParams.priceMax]);
  }, [searchParams]);
  useEffect(() => {
    if (searchParams.featured && featuredRef.current) {
      featuredRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  }, [searchParams.featured]);
  const isFeatured = (productId) => {
    if (!searchParams.featured) return false;
    const featuredList = searchParams.featured.split(",");
    return featuredList.includes(productId);
  };
  const clearFilters = () => {
    setSelectedCategories([]);
    setSelectedNotes([]);
    setPriceRange([0, 100]);
    setSearch("");
    navigate({
      search: {
        q: "",
        category: "",
        notes: "",
        priceMin: 0,
        priceMax: 100,
        featured: ""
      }
    });
  };
  const handleSearchChange = (value) => {
    setSearch(value);
    navigate({
      search: {
        q: value,
        category: selectedCategories[0] || "",
        notes: selectedNotes[0] || "",
        priceMin: priceRange[0],
        priceMax: priceRange[1],
        featured: ""
      }
    });
  };
  const handleCategoryChange = (cats) => {
    setSelectedCategories(cats);
    navigate({
      search: {
        q: search,
        category: cats[0] || "",
        notes: selectedNotes[0] || "",
        priceMin: priceRange[0],
        priceMax: priceRange[1],
        featured: ""
      }
    });
  };
  const handleNotesChange = (notes) => {
    setSelectedNotes(notes);
    navigate({
      search: {
        q: search,
        category: selectedCategories[0] || "",
        notes: notes[0] || "",
        priceMin: priceRange[0],
        priceMax: priceRange[1],
        featured: ""
      }
    });
  };
  const handlePriceChange = (range) => {
    setPriceRange(range);
    navigate({
      search: {
        q: search,
        category: selectedCategories[0] || "",
        notes: selectedNotes[0] || "",
        priceMin: range[0],
        priceMax: range[1],
        featured: ""
      }
    });
  };
  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch = !search || product.name.toLowerCase().includes(search.toLowerCase()) || product.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesNotes = selectedNotes.length === 0 || selectedNotes.some(
        (note) => product.notes.top.includes(note) || product.notes.heart.includes(note) || product.notes.base.includes(note)
      );
      return matchesSearch && matchesCategory && matchesPrice && matchesNotes;
    });
    result.sort((a, b) => {
      switch (sortBy) {
        case "price-asc":
          return a.price - b.price;
        case "price-desc":
          return b.price - a.price;
        case "name-asc":
          return a.name.localeCompare(b.name);
        case "name-desc":
          return b.name.localeCompare(a.name);
        case "newest":
        default:
          return 0;
      }
    });
    return result;
  }, [search, sortBy, selectedCategories, selectedNotes, priceRange]);
  const activeFilterCount = selectedCategories.length + selectedNotes.length + (priceRange[0] > 0 || priceRange[1] < 100 ? 1 : 0);
  return /* @__PURE__ */ jsxs("main", { className: "pt-24", children: [
    /* @__PURE__ */ jsx("section", { "aria-labelledby": "products-heading", className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("header", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "inline-flex items-center gap-2 px-4 py-2 mb-6", children: [
        /* @__PURE__ */ jsx(Leaf, { className: "w-4 h-4", "aria-hidden": "true" }),
        "Our Collection"
      ] }),
      /* @__PURE__ */ jsx(
        "h1",
        {
          id: "products-heading",
          className: "text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4",
          children: "Explore Our Fragrances"
        }
      ),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Discover unique scents crafted from nature's finest fruit peels. Each fragrance tells a story of freshness and sustainability." })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("nav", { "aria-label": "Product filters", className: "py-8 border-b border-border", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex flex-col md:flex-row gap-4 items-center justify-between", children: [
        /* @__PURE__ */ jsx("div", { className: "w-full md:w-80", children: /* @__PURE__ */ jsxs(InputGroup, { children: [
          /* @__PURE__ */ jsx(InputGroupAddon, { children: /* @__PURE__ */ jsx(Search, { className: "w-4 h-4 text-muted-foreground", "aria-hidden": "true" }) }),
          /* @__PURE__ */ jsx(
            InputGroupInput,
            {
              type: "search",
              placeholder: "Search fragrances...",
              value: search,
              onChange: (e) => handleSearchChange(e.target.value),
              "aria-label": "Search fragrances"
            }
          )
        ] }) }),
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3 w-full md:w-auto", children: [
          /* @__PURE__ */ jsxs(Sheet, { open: filterOpen, onOpenChange: setFilterOpen, children: [
            /* @__PURE__ */ jsx(SheetTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { variant: "outline", className: "gap-2", children: [
              /* @__PURE__ */ jsx(SlidersHorizontal, { className: "w-4 h-4" }),
              "Filters",
              activeFilterCount > 0 && /* @__PURE__ */ jsx(Badge, { variant: "default", className: "h-5 px-1.5 text-xs", children: activeFilterCount })
            ] }) }),
            /* @__PURE__ */ jsxs(SheetContent, { side: "left", className: "w-full sm:w-80", children: [
              /* @__PURE__ */ jsxs(SheetHeader, { children: [
                /* @__PURE__ */ jsx(SheetTitle, { children: "Filter Products" }),
                /* @__PURE__ */ jsx(SheetDescription, { children: "Refine your search to find the perfect fragrance." })
              ] }),
              /* @__PURE__ */ jsx("div", { className: "py-4 ml-8 2xl:ml-2", children: /* @__PURE__ */ jsx(
                FilterPanel,
                {
                  selectedCategories,
                  setSelectedCategories,
                  selectedNotes,
                  setSelectedNotes,
                  priceRange,
                  setPriceRange,
                  onClear: clearFilters,
                  onCategoryChange: handleCategoryChange,
                  onNotesChange: handleNotesChange,
                  onPriceChange: handlePriceChange
                }
              ) })
            ] })
          ] }),
          /* @__PURE__ */ jsx("div", { className: "flex-1 md:flex-none", children: /* @__PURE__ */ jsx(
            "select",
            {
              value: sortBy,
              onChange: (e) => setSortBy(e.target.value),
              className: "w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary",
              "aria-label": "Sort products",
              children: sortOptions.map((option) => /* @__PURE__ */ jsx("option", { value: option.value, children: option.label }, option.value))
            }
          ) }),
          /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-1 border rounded-md p-1", children: [
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: viewMode === "grid" ? "default" : "ghost",
                size: "icon",
                className: "h-8 w-8",
                onClick: () => setViewMode("grid"),
                "aria-label": "Grid view",
                children: /* @__PURE__ */ jsx(LayoutGrid, { className: "w-4 h-4" })
              }
            ),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: viewMode === "list" ? "default" : "ghost",
                size: "icon",
                className: "h-8 w-8",
                onClick: () => setViewMode("list"),
                "aria-label": "List view",
                children: /* @__PURE__ */ jsx(List, { className: "w-4 h-4" })
              }
            )
          ] })
        ] })
      ] }),
      (selectedCategories.length > 0 || selectedNotes.length > 0 || priceRange[0] > 0 || priceRange[1] < 100) && /* @__PURE__ */ jsxs("div", { className: "flex flex-wrap gap-2 mt-4", children: [
        selectedCategories.map((cat) => /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
          cat,
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSelectedCategories((prev) => prev.filter((c) => c !== cat)),
              className: "ml-1 hover:text-destructive",
              children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
            }
          )
        ] }, cat)),
        selectedNotes.map((note) => /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
          note,
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setSelectedNotes((prev) => prev.filter((n) => n !== note)),
              className: "ml-1 hover:text-destructive",
              children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
            }
          )
        ] }, note)),
        (priceRange[0] > 0 || priceRange[1] < 100) && /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "gap-1", children: [
          "€",
          priceRange[0],
          " - €",
          priceRange[1],
          /* @__PURE__ */ jsx(
            "button",
            {
              onClick: () => setPriceRange([0, 100]),
              className: "ml-1 hover:text-destructive",
              children: /* @__PURE__ */ jsx(X, { className: "w-3 h-3" })
            }
          )
        ] })
      ] })
    ] }) }),
    /* @__PURE__ */ jsx("section", { ref: featuredRef, "aria-labelledby": "products-grid-heading", className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsxs("div", { className: "mb-4 text-sm text-muted-foreground", children: [
        "Showing ",
        filteredAndSortedProducts.length,
        " of ",
        products.length,
        " fragrances"
      ] }),
      /* @__PURE__ */ jsx("h2", { id: "products-grid-heading", className: "sr-only", children: "Product listing" }),
      filteredAndSortedProducts.length === 0 ? /* @__PURE__ */ jsxs(Empty, { children: [
        /* @__PURE__ */ jsxs(EmptyHeader, { children: [
          /* @__PURE__ */ jsx(EmptyMedia, { variant: "icon", children: /* @__PURE__ */ jsx(Package, { className: "w-10 h-10" }) }),
          /* @__PURE__ */ jsx(EmptyTitle, { children: "No fragrances found" }),
          /* @__PURE__ */ jsx(EmptyDescription, { children: "No fragrances found matching your criteria. Try adjusting your filters." })
        ] }),
        /* @__PURE__ */ jsx(EmptyContent, { children: /* @__PURE__ */ jsx(Button, { variant: "outline", size: "lg", onClick: clearFilters, children: "Clear Filters" }) })
      ] }) : viewMode === "list" ? /* @__PURE__ */ jsx("ul", { className: "flex flex-col gap-4 list-none p-0 m-0", role: "list", "aria-label": "Products", children: filteredAndSortedProducts.map((product) => /* @__PURE__ */ jsx(ListProduct, { product, featured: isFeatured(product.id) }, product.id)) }) : /* @__PURE__ */ jsx(
        "ul",
        {
          className: "grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0",
          role: "list",
          "aria-label": "Products",
          children: filteredAndSortedProducts.map((product) => /* @__PURE__ */ jsx(ProductCard, { product, featured: isFeatured(product.id) }, product.id))
        }
      )
    ] }) })
  ] });
}
function ListProduct({ product, featured = false }) {
  const addItem = useCartStore((state) => state.addItem);
  const wishlistItems = useWishlistStore((state) => state.items);
  const addToWishlist = useWishlistStore((state) => state.addItem);
  const removeFromWishlist = useWishlistStore((state) => state.removeItem);
  const compareItems = useCompareStore((state) => state.items);
  const addToCompare = useCompareStore((state) => state.addItem);
  const removeFromCompare = useCompareStore((state) => state.removeItem);
  const isInWishlist = wishlistItems.some((item) => item.productId === product.id);
  const isInCompare = compareItems.some((item) => item.productId === product.id);
  const [added, setAdded] = useState(false);
  const handleAddToCart = (e) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2e3);
  };
  const handleWishlistToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist) removeFromWishlist(product.id);
    else addToWishlist(product.id);
  };
  const handleCompareToggle = (e) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInCompare) removeFromCompare(product.id);
    else addToCompare(product.id);
  };
  return /* @__PURE__ */ jsx("li", { className: "list-none", children: /* @__PURE__ */ jsxs(Card, { className: `flex flex-col sm:flex-row overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 ${featured ? "border-2 border-[#D4AF37]" : ""}`, children: [
    /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: { productId: product.id }, className: "block sm:w-72 md:w-96 shrink-0", children: /* @__PURE__ */ jsx("figure", { className: "relative aspect-[4/5] sm:aspect-square overflow-hidden bg-muted h-full p-4", children: /* @__PURE__ */ jsx("img", { src: product.image, alt: `${product.name} fragrance bottle`, className: "w-full h-full object-contain" }) }) }),
    /* @__PURE__ */ jsxs("div", { className: "flex-1 p-6 flex flex-col", children: [
      /* @__PURE__ */ jsxs("div", { className: "flex items-start justify-between gap-4 mb-2", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsxs("p", { className: "flex items-center gap-2 mb-2", children: [
            /* @__PURE__ */ jsx(Leaf, { className: "w-4 h-4 text-primary shrink-0", "aria-hidden": "true" }),
            /* @__PURE__ */ jsx("span", { className: "text-xs text-muted-foreground uppercase tracking-wider", children: product.notes.top })
          ] }),
          /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-semibold", children: product.name })
        ] }),
        /* @__PURE__ */ jsxs("data", { value: product.price, className: "text-2xl font-heading font-bold text-primary shrink-0", children: [
          "€",
          product.price
        ] })
      ] }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-sm mb-5 leading-relaxed flex-1", children: product.description }),
      /* @__PURE__ */ jsxs(CardFooter, { className: "flex items-center justify-between p-0 gap-4 mt-auto", children: [
        /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-2", children: [
          /* @__PURE__ */ jsxs(Tooltip, { children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "outline", onClick: handleWishlistToggle, "aria-label": isInWishlist ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`, className: isInWishlist ? "text-red-500 border-red-500 hover:text-red-600 hover:border-red-600" : "", children: /* @__PURE__ */ jsx(Heart, { className: `w-4 h-4 ${isInWishlist ? "fill-current" : ""}` }) }) }),
            /* @__PURE__ */ jsx(TooltipContent, { children: isInWishlist ? "Remove from wishlist" : "Add to wishlist" })
          ] }),
          /* @__PURE__ */ jsxs(Tooltip, { children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { size: "icon", variant: "outline", onClick: handleCompareToggle, "aria-label": isInCompare ? `Remove ${product.name} from compare` : `Add ${product.name} to compare`, className: isInCompare ? "text-primary border-primary" : "", children: /* @__PURE__ */ jsx(Scale, { className: "w-4 h-4" }) }) }),
            /* @__PURE__ */ jsx(TooltipContent, { children: isInCompare ? "Remove from compare" : "Add to compare" })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "flex gap-2", children: [
          /* @__PURE__ */ jsxs(Tooltip, { children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsx(Button, { asChild: true, size: "default", variant: "outline", children: /* @__PURE__ */ jsx(Link, { to: "/product/$productId", params: { productId: product.id }, children: "Details" }) }) }),
            /* @__PURE__ */ jsxs(TooltipContent, { children: [
              "View ",
              product.name
            ] })
          ] }),
          /* @__PURE__ */ jsxs(Tooltip, { children: [
            /* @__PURE__ */ jsx(TooltipTrigger, { asChild: true, children: /* @__PURE__ */ jsxs(Button, { size: "default", onClick: handleAddToCart, children: [
              added ? /* @__PURE__ */ jsx(Check, { className: "w-4 h-4 mr-1", "aria-hidden": "true" }) : /* @__PURE__ */ jsx(ShoppingBag, { className: "w-4 h-4 mr-1", "aria-hidden": "true" }),
              added ? "Added" : "Buy"
            ] }) }),
            /* @__PURE__ */ jsx(TooltipContent, { children: "Add to cart" })
          ] })
        ] })
      ] })
    ] })
  ] }) });
}
const SplitComponent = () => /* @__PURE__ */ jsx(ProductsPage, {});
export {
  SplitComponent as component
};

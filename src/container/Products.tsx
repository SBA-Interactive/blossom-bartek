import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { InputGroup, InputGroupInput, InputGroupAddon } from "@/components/ui/input-group";
import { Badge } from "@/components/ui/badge";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
  EmptyContent,
} from "@/components/ui/empty";
import { Separator } from "@/components/ui/separator";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedList } from "@/components/ui/animated-list";
import { BorderBeam } from "@/components/ui/border-beam";
// Removed BentoGrid/BentoCard/Marquee (failed UX) - using grid/list views instead
import { Link, useSearch, useNavigate } from "@tanstack/react-router";
import { products, categories, type Product } from "@/constants/products";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCompareStore } from "@/store/useCompareStore";
import { Search, Leaf, ShoppingBag, Package, Check, SlidersHorizontal, X, Heart, Scale, LayoutGrid, List, Sparkles, Icon } from "lucide-react";
import { useState, useMemo, useEffect, useRef } from "react";

type SortOption = "newest" | "price-asc" | "price-desc" | "name-asc" | "name-desc";
type ViewMode = "grid" | "list";

const sortOptions: { value: SortOption; label: string }[] = [
  { value: "newest", label: "Newest" },
  { value: "price-asc", label: "Price: Low to High" },
  { value: "price-desc", label: "Price: High to Low" },
  { value: "name-asc", label: "Name: A to Z" },
  { value: "name-desc", label: "Name: Z to A" },
];

const noteOptions = ["Orange", "Lemon", "Jasmine", "Mint", "Berry", "Grapefruit", "Rose", "Lavender"];

function ProductCard({ product, featured = false }: { product: Product; featured?: boolean }) {
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
  const cardRef = useRef<HTMLLIElement>(null);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist) {
      removeFromWishlist(product.id);
    } else {
      addToWishlist(product.id);
    }
  };

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInCompare) {
      removeFromCompare(product.id);
    } else {
      addToCompare(product.id);
    }
  };

  return (
    <li ref={cardRef} className="list-none">
      <Card className={`group overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 relative ${featured ? "border-2 border-[#D4AF37]" : ""}`}>
        <BorderBeam
          size={200}
          duration={6}
          colorFrom="var(--brand-rose)"
          colorTo="var(--primary)"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <Link to="/product/$productId" params={{ productId: product.id }} className="block">
          <figure className="relative aspect-[4/5] overflow-hidden bg-muted">
            <img
              src={product.image}
              alt={`${product.name} fragrance bottle`}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
            />
            <Badge className="absolute top-4 left-4 z-10">{product.badge}</Badge>
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={handleWishlistToggle}
                    aria-label={isInWishlist ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
                    className={`shrink-0 bg-background/80 backdrop-blur-sm ${isInWishlist ? "text-red-500 border-red-500 hover:text-red-600 hover:border-red-600" : ""}`}
                  >
                    <Heart className={`w-4 h-4 ${isInWishlist ? "fill-current" : ""}`} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{isInWishlist ? "Remove from wishlist" : "Add to wishlist"}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={handleCompareToggle}
                    aria-label={isInCompare ? `Remove ${product.name} from compare` : `Add ${product.name} to compare`}
                    className={`shrink-0 bg-background/80 backdrop-blur-sm ${isInCompare ? "text-primary border-primary" : ""} md:opacity-0 md:group-hover:opacity-100 transition-opacity`}
                  >
                    <Scale className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{isInCompare ? "Remove from compare" : "Add to compare"}</TooltipContent>
              </Tooltip>
            </div>
            <div
              className="absolute inset-0 bg-linear-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              aria-hidden="true"
            />
            <figcaption className="sr-only">{product.name}</figcaption>
          </figure>
        </Link>

        <CardContent className="p-6">
          <p className="flex items-center gap-2 mb-2 overflow-hidden">
            <Leaf className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider truncate">
              {product.notes.top}
            </span>
          </p>
          <CardTitle className="text-xl font-heading font-semibold mb-2 truncate">
            {product.name}
          </CardTitle>
          <CardDescription className="text-sm mb-5 leading-relaxed line-clamp-2">
            {product.description}
          </CardDescription>
          <CardFooter className="flex items-center justify-between p-0 gap-4">
            <data
              value={product.price}
              className="text-2xl font-heading font-bold text-primary shrink-0"
            >
              €{product.price}
            </data>
            <CardAction
              className="flex gap-2 shrink-0"
              role="group"
              aria-label={`Actions for ${product.name}`}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild size="default" variant="outline">
                    <Link to="/product/$productId" params={{ productId: product.id }}>
                      Details
                    </Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>View {product.name}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="default"
                    onClick={handleAddToCart}
                    aria-label={`Add ${product.name} to cart`}
                  >
                    {added ? (
                      <Check className="w-4 h-4 mr-1" aria-hidden="true" />
                    ) : (
                      <ShoppingBag className="w-4 h-4 mr-1" aria-hidden="true" />
                    )}
                    {added ? "Added" : "Buy"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Add to cart</TooltipContent>
              </Tooltip>
            </CardAction>
          </CardFooter>
        </CardContent>
      </Card>
    </li>
  );
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
  onPriceChange,
}: {
  selectedCategories: string[];
  setSelectedCategories: React.Dispatch<React.SetStateAction<string[]>>;
  selectedNotes: string[];
  setSelectedNotes: React.Dispatch<React.SetStateAction<string[]>>;
  priceRange: [number, number];
  setPriceRange: React.Dispatch<React.SetStateAction<[number, number]>>;
  onClear: () => void;
  onCategoryChange: (cats: string[]) => void;
  onNotesChange: (notes: string[]) => void;
  onPriceChange: (range: [number, number]) => void;
}) {
  const toggleCategory = (cat: string) => {
    const newCats = selectedCategories.includes(cat)
      ? selectedCategories.filter((c) => c !== cat)
      : [...selectedCategories, cat];
    setSelectedCategories(newCats);
    onCategoryChange(newCats);
  };

  const toggleNote = (note: string) => {
    const newNotes = selectedNotes.includes(note)
      ? selectedNotes.filter((n) => n !== note)
      : [...selectedNotes, note];
    setSelectedNotes(newNotes);
    onNotesChange(newNotes);
  };

  const hasFilters = selectedCategories.length > 0 || selectedNotes.length > 0 || priceRange[0] > 0 || priceRange[1] < 100;

  const handlePriceMinChange = (value: number) => {
    const newRange: [number, number] = [value, priceRange[1]];
    setPriceRange(newRange);
    onPriceChange(newRange);
  };

  const handlePriceMaxChange = (value: number) => {
    const newRange: [number, number] = [priceRange[0], value];
    setPriceRange(newRange);
    onPriceChange(newRange);
  };

  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h3 className="font-heading font-semibold text-lg">Filters</h3>
        {hasFilters && (
          <Button variant="ghost" size="sm" onClick={onClear} className="text-xs h-7">
            <X className="w-3 h-3 mr-1" />
            Clear
          </Button>
        )}
      </div>

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Category</h4>
        <div className="space-y-2">
          {categories.map((cat) => (
            <div key={cat} className="flex items-center gap-2">
              <Checkbox
                id={`cat-${cat}`}
                checked={selectedCategories.includes(cat)}
                onCheckedChange={() => toggleCategory(cat)}
              />
              <Label htmlFor={`cat-${cat}`} className="text-sm cursor-pointer">
                {cat}
              </Label>
            </div>
          ))}
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Price Range</h4>
        <div className="flex items-center gap-2">
          <div className="flex-1">
            <Label htmlFor="min-price" className="text-xs text-muted-foreground">Min</Label>
            <InputGroup className="mt-1">
              <InputGroupAddon>€</InputGroupAddon>
              <InputGroupInput
                id="min-price"
                type="number"
                min={0}
                value={priceRange[0]}
                onChange={(e) => handlePriceMinChange(Number(e.target.value))}
              />
            </InputGroup>
          </div>
          <span className="mt-4">-</span>
          <div className="flex-1">
            <Label htmlFor="max-price" className="text-xs text-muted-foreground">Max</Label>
            <InputGroup className="mt-1">
              <InputGroupAddon>€</InputGroupAddon>
              <InputGroupInput
                id="max-price"
                type="number"
                min={0}
                value={priceRange[1]}
                onChange={(e) => handlePriceMaxChange(Number(e.target.value))}
              />
            </InputGroup>
          </div>
        </div>
      </div>

      <Separator />

      <div className="space-y-3">
        <h4 className="text-sm font-medium">Scent Notes</h4>
        <div className="flex flex-wrap gap-2">
          {noteOptions.map((note) => (
            <Button
              key={note}
              variant={selectedNotes.includes(note) ? "default" : "outline"}
              size="sm"
              className="text-xs h-7"
              onClick={() => toggleNote(note)}
            >
              {note}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default function ProductsPage() {
  const searchParams = useSearch({ from: "/products/" });
  const navigate = useNavigate({ from: "/products/" });
  const [search, setSearch] = useState(searchParams.q || "");
  const [sortBy, setSortBy] = useState<SortOption>("newest");
  const [viewMode, setViewMode] = useState<ViewMode>("grid");
  const [filterOpen, setFilterOpen] = useState(false);
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    searchParams.category ? [searchParams.category] : []
  );
  const [selectedNotes, setSelectedNotes] = useState<string[]>(
    searchParams.notes ? [searchParams.notes] : []
  );
  const [priceRange, setPriceRange] = useState<[number, number]>([
    searchParams.priceMin || 0,
    searchParams.priceMax || 100,
  ]);
  const featuredRef = useRef<HTMLDivElement>(null);

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

  const isFeatured = (productId: string) => {
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
        featured: "",
      },
    });
  };

  const handleSearchChange = (value: string) => {
    setSearch(value);
    navigate({
      search: {
        q: value,
        category: selectedCategories[0] || "",
        notes: selectedNotes[0] || "",
        priceMin: priceRange[0],
        priceMax: priceRange[1],
        featured: "",
      },
    });
  };

  const handleCategoryChange = (cats: string[]) => {
    setSelectedCategories(cats);
    navigate({
      search: {
        q: search,
        category: cats[0] || "",
        notes: selectedNotes[0] || "",
        priceMin: priceRange[0],
        priceMax: priceRange[1],
        featured: "",
      },
    });
  };

  const handleNotesChange = (notes: string[]) => {
    setSelectedNotes(notes);
    navigate({
      search: {
        q: search,
        category: selectedCategories[0] || "",
        notes: notes[0] || "",
        priceMin: priceRange[0],
        priceMax: priceRange[1],
        featured: "",
      },
    });
  };

  const handlePriceChange = (range: [number, number]) => {
    setPriceRange(range);
    navigate({
      search: {
        q: search,
        category: selectedCategories[0] || "",
        notes: selectedNotes[0] || "",
        priceMin: range[0],
        priceMax: range[1],
        featured: "",
      },
    });
  };

  const filteredAndSortedProducts = useMemo(() => {
    let result = products.filter((product) => {
      const matchesSearch =
        !search ||
        product.name.toLowerCase().includes(search.toLowerCase()) ||
        product.description.toLowerCase().includes(search.toLowerCase());
      const matchesCategory =
        selectedCategories.length === 0 || selectedCategories.includes(product.category);
      const matchesPrice = product.price >= priceRange[0] && product.price <= priceRange[1];
      const matchesNotes =
        selectedNotes.length === 0 ||
        selectedNotes.some(
          (note) =>
            product.notes.top.includes(note) ||
            product.notes.heart.includes(note) ||
            product.notes.base.includes(note)
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

  const activeFilterCount =
    selectedCategories.length + selectedNotes.length + (priceRange[0] > 0 || priceRange[1] < 100 ? 1 : 0);

  return (
    <main className="pt-24">
      <section aria-labelledby="products-heading" className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <header className="max-w-3xl mx-auto text-center">
              <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 mb-6">
                <Leaf className="w-4 h-4" aria-hidden="true" />
                Our Collection
              </Badge>
              <h1
                id="products-heading"
                className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4"
              >
                Explore Our Fragrances
              </h1>
              <p className="text-lg text-muted-foreground">
                Discover unique scents crafted from nature&apos;s finest fruit peels. Each fragrance
                tells a story of freshness and sustainability.
              </p>
            </header>
          </BlurFade>
        </div>
      </section>

      <nav aria-label="Product filters" className="py-8 border-b border-border">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            <div className="w-full md:w-80">
              <InputGroup>
                <InputGroupAddon>
                  <Search className="w-4 h-4 text-muted-foreground" aria-hidden="true" />
                </InputGroupAddon>
                <InputGroupInput
                  type="search"
                  placeholder="Search fragrances..."
                  value={search}
                  onChange={(e) => handleSearchChange(e.target.value)}
                  aria-label="Search fragrances"
                />
              </InputGroup>
            </div>

            <div className="flex items-center gap-3 w-full md:w-auto">
              <Sheet open={filterOpen} onOpenChange={setFilterOpen}>
                <SheetTrigger asChild>
                  <Button variant="outline" className="gap-2">
                    <SlidersHorizontal className="w-4 h-4" />
                    Filters
                    {activeFilterCount > 0 && (
                      <Badge variant="default" className="h-5 px-1.5 text-xs">
                        {activeFilterCount}
                      </Badge>
                    )}
                  </Button>
                </SheetTrigger>
                <SheetContent side="left" className="w-full sm:w-80">
                  <SheetHeader>
                    <SheetTitle>Filter Products</SheetTitle>
                    <SheetDescription>
                      Refine your search to find the perfect fragrance.
                    </SheetDescription>
                  </SheetHeader>
                  <div className="py-4 ml-8 2xl:ml-2">
                    <FilterPanel
                      selectedCategories={selectedCategories}
                      setSelectedCategories={setSelectedCategories}
                      selectedNotes={selectedNotes}
                      setSelectedNotes={setSelectedNotes}
                      priceRange={priceRange}
                      setPriceRange={setPriceRange}
                      onClear={clearFilters}
                      onCategoryChange={handleCategoryChange}
                      onNotesChange={handleNotesChange}
                      onPriceChange={handlePriceChange}
                    />
                  </div>
                </SheetContent>
              </Sheet>

              <div className="flex-1 md:flex-none">
                <select
                  value={sortBy}
                  onChange={(e) => setSortBy(e.target.value as SortOption)}
                  className="w-full h-10 px-3 rounded-md border border-input bg-background text-sm focus:outline-none focus:ring-2 focus:ring-primary"
                  aria-label="Sort products"
                >
                  {sortOptions.map((option) => (
                    <option key={option.value} value={option.value}>
                      {option.label}
                    </option>
                  ))}
                </select>
              </div>

              <div className="flex items-center gap-1 border rounded-md p-1">
                {/* Bento view removed */}
                <Button
                  variant={viewMode === "grid" ? "default" : "ghost"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setViewMode("grid")}
                  aria-label="Grid view"
                >
                  <LayoutGrid className="w-4 h-4" />
                </Button>
                <Button
                  variant={viewMode === "list" ? "default" : "ghost"}
                  size="icon"
                  className="h-8 w-8"
                  onClick={() => setViewMode("list")}
                  aria-label="List view"
                >
                  <List className="w-4 h-4" />
                </Button>
              </div>
            </div>
          </div>

          {(selectedCategories.length > 0 || selectedNotes.length > 0 || priceRange[0] > 0 || priceRange[1] < 100) && (
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedCategories.map((cat) => (
                <Badge key={cat} variant="secondary" className="gap-1">
                  {cat}
                  <button
                    onClick={() => setSelectedCategories((prev) => prev.filter((c) => c !== cat))}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
              {selectedNotes.map((note) => (
                <Badge key={note} variant="secondary" className="gap-1">
                  {note}
                  <button
                    onClick={() => setSelectedNotes((prev) => prev.filter((n) => n !== note))}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              ))}
              {(priceRange[0] > 0 || priceRange[1] < 100) && (
                <Badge variant="secondary" className="gap-1">
                  €{priceRange[0]} - €{priceRange[1]}
                  <button
                    onClick={() => setPriceRange([0, 100])}
                    className="ml-1 hover:text-destructive"
                  >
                    <X className="w-3 h-3" />
                  </button>
                </Badge>
              )}
            </div>
          )}
        </div>
      </nav>

      <section ref={featuredRef} aria-labelledby="products-grid-heading" className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-4 text-sm text-muted-foreground">
            Showing {filteredAndSortedProducts.length} of {products.length} fragrances
          </div>
          <h2 id="products-grid-heading" className="sr-only">
            Product listing
          </h2>
          {filteredAndSortedProducts.length === 0 ? (
            <Empty>
              <EmptyHeader>
                <EmptyMedia variant="icon">
                  <Package className="w-10 h-10" />
                </EmptyMedia>
                <EmptyTitle>No fragrances found</EmptyTitle>
                <EmptyDescription>
                  No fragrances found matching your criteria. Try adjusting your filters.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button variant="outline" size="lg" onClick={clearFilters}>
                  Clear Filters
                </Button>
              </EmptyContent>
            </Empty>
          ) : viewMode === "list" ? (
            <ul className="flex flex-col gap-4 list-none p-0 m-0" role="list" aria-label="Products">
              {filteredAndSortedProducts.map((product) => (
                <ListProduct key={product.id} product={product} featured={isFeatured(product.id)} />
              ))}
            </ul>
          ) : (
            <ul
              className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0"
              role="list"
              aria-label="Products"
            >
              {filteredAndSortedProducts.map((product) => (
                <ProductCard key={product.id} product={product} featured={isFeatured(product.id)} />
              ))}
            </ul>
          )}
        </div>
      </section>
    </main>
  );
}

function ListProduct({ product, featured = false }: { product: Product; featured?: boolean }) {
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

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const handleWishlistToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInWishlist) removeFromWishlist(product.id);
    else addToWishlist(product.id);
  };

  const handleCompareToggle = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    if (isInCompare) removeFromCompare(product.id);
    else addToCompare(product.id);
  };

  return (
    <li className="list-none">
      <Card className={`flex flex-col sm:flex-row overflow-hidden border border-border shadow-sm hover:shadow-md transition-all duration-300 ${featured ? "border-2 border-[#D4AF37]" : ""}`}>
        <Link to="/product/$productId" params={{ productId: product.id }} className="block sm:w-72 md:w-96 shrink-0">
          <figure className="relative aspect-[4/5] sm:aspect-square overflow-hidden bg-muted h-full p-4">
            <img src={product.image} alt={`${product.name} fragrance bottle`} className="w-full h-full object-contain" />
          </figure>
        </Link>
        <div className="flex-1 p-6 flex flex-col">
          <div className="flex items-start justify-between gap-4 mb-2">
            <div>
              <p className="flex items-center gap-2 mb-2">
                <Leaf className="w-4 h-4 text-primary shrink-0" aria-hidden="true" />
                <span className="text-xs text-muted-foreground uppercase tracking-wider">{product.notes.top}</span>
              </p>
              <CardTitle className="text-2xl font-heading font-semibold">{product.name}</CardTitle>
            </div>
            <data value={product.price} className="text-2xl font-heading font-bold text-primary shrink-0">€{product.price}</data>
          </div>

          <CardDescription className="text-sm mb-5 leading-relaxed flex-1">{product.description}</CardDescription>

          <CardFooter className="flex items-center justify-between p-0 gap-4 mt-auto">
            <div className="flex items-center gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="outline" onClick={handleWishlistToggle} aria-label={isInWishlist ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`} className={isInWishlist ? "text-red-500 border-red-500 hover:text-red-600 hover:border-red-600" : ""}>
                    <Heart className={`w-4 h-4 ${isInWishlist ? "fill-current" : ""}`} />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{isInWishlist ? "Remove from wishlist" : "Add to wishlist"}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="icon" variant="outline" onClick={handleCompareToggle} aria-label={isInCompare ? `Remove ${product.name} from compare` : `Add ${product.name} to compare`} className={isInCompare ? "text-primary border-primary" : ""}>
                    <Scale className="w-4 h-4" />
                  </Button>
                </TooltipTrigger>
                <TooltipContent>{isInCompare ? "Remove from compare" : "Add to compare"}</TooltipContent>
              </Tooltip>
            </div>

            <div className="flex gap-2">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button asChild size="default" variant="outline">
                    <Link to="/product/$productId" params={{ productId: product.id }}>Details</Link>
                  </Button>
                </TooltipTrigger>
                <TooltipContent>View {product.name}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="default" onClick={handleAddToCart}>
                    {added ? <Check className="w-4 h-4 mr-1" aria-hidden="true" /> : <ShoppingBag className="w-4 h-4 mr-1" aria-hidden="true" />}
                    {added ? "Added" : "Buy"}
                  </Button>
                </TooltipTrigger>
                <TooltipContent>Add to cart</TooltipContent>
              </Tooltip>
            </div>
          </CardFooter>
        </div>
      </Card>
    </li>
  );
}

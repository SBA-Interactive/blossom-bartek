import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedList } from "@/components/ui/animated-list";
import { BorderBeam } from "@/components/ui/border-beam";
import { Link, useNavigate } from "@tanstack/react-router";
import { ArrowRight, Leaf, Flower2, ShoppingBag, Heart, Scale } from "lucide-react";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCompareStore } from "@/store/useCompareStore";

const products = [
  {
    id: "citrus-bloom",
    name: "Citrus Bloom",
    description: "Fresh orange and lemon peel essence with a hint of jasmine",
    price: "€45",
    image: "/perfume.png",
    badge: "Bestseller",
    notes: "Citrus, Floral",
  },
  {
    id: "berry-mist",
    name: "Berry Mist",
    description: "Delicate berry undertones with a refreshing mist finish",
    price: "€42",
    image: "/perfume.png",
    badge: "New",
    notes: "Berry, Fresh",
  },
  {
    id: "garden-peel",
    name: "Garden Peel",
    description: "Herbal blend with grapefruit and botanical extracts",
    price: "€48",
    image: "/perfume.png",
    badge: "Popular",
    notes: "Herbal, Citrus",
  },
];

function ProductCard({ product }: { product: (typeof products)[0] }) {
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
    <li className="list-none">
      <Card className="group overflow-hidden border-2 border-[#D4AF37] shadow-sm hover:shadow-md transition-shadow duration-300 relative">
        <BorderBeam
          size={250}
          duration={8}
          colorFrom="var(--brand-rose)"
          colorTo="var(--primary)"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <figure
          className="relative aspect-[4/5] overflow-hidden bg-muted cursor-pointer"
          onClick={goToDetail}
          onKeyDown={(e) => {
            if (e.key === "Enter" || e.key === " ") {
              e.preventDefault();
              goToDetail();
            }
          }}
          tabIndex={0}
          role="link"
          aria-label={`View details for ${product.name}`}
        >
          <img
            src={product.image}
            alt={`${product.name} fragrance bottle`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
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
                  className={`shrink-0 bg-background/80 backdrop-blur-sm ${isInCompare ? "text-primary border-primary" : ""}`}
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
          <figcaption className="sr-only">
            {product.name} - {product.notes}
          </figcaption>
        </figure>

        <CardContent className="p-6">
          <p className="flex items-center gap-2 mb-2">
            <Leaf className="w-4 h-4 text-primary" aria-hidden="true" />
            <span className="text-xs text-muted-foreground uppercase tracking-wider">
              {product.notes}
            </span>
          </p>
          <CardTitle className="text-xl font-heading font-semibold mb-2">{product.name}</CardTitle>
          <CardDescription className="text-sm mb-5 leading-relaxed">
            {product.description}
          </CardDescription>
          <CardFooter className="flex items-center justify-between p-0">
            <data
              value={product.price.replace("€", "")}
              className="text-2xl font-heading font-bold text-primary"
            >
              {product.price}
            </data>
            <CardAction
              className="flex gap-2"
              role="group"
              aria-label={`Actions for ${product.name}`}
            >
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="default"
                    variant="outline"
                    onClick={goToDetail}
                    aria-label={`View details for ${product.name}`}
                  >
                    Details
                  </Button>
                </TooltipTrigger>
                <TooltipContent>View {product.name}</TooltipContent>
              </Tooltip>
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button size="default" aria-label={`Add ${product.name} to cart`}>
                    <ShoppingBag className="w-4 h-4 mr-1" aria-hidden="true" />
                    Buy
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

export function ProductShowcase() {
  return (
    <section aria-labelledby="showcase-heading" className="py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-16">
          <BlurFade inView>
            <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 mb-4">
              <Flower2 className="w-4 h-4" aria-hidden="true" />
              Featured
            </Badge>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <h2
              id="showcase-heading"
              className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Our Signature Collection
            </h2>
          </BlurFade>
          <BlurFade delay={0.2} inView>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each fragrance is crafted from carefully selected fruit peels, delivering unique
              scents that are both natural and luxurious.
            </p>
          </BlurFade>
        </header>

        <AnimatedList delay={0.2}>
          <ul
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0"
            role="list"
            aria-label="Products"
          >
            {products.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </ul>
        </AnimatedList>

        <BlurFade delay={0.4} inView>
          <div className="text-center mt-12">
            <Separator className="mb-8" />
            <Button
              size="lg"
              variant="outline"
              className="group border-primary/20 hover:bg-primary/5 text-base px-8 py-6 h-auto"
              asChild
            >
              <Link to="/products" search={{ featured: "citrus-bloom,berry-mist,garden-peel" }}>
                View All Products
                <ArrowRight
                  className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                  aria-hidden="true"
                />
              </Link>
            </Button>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

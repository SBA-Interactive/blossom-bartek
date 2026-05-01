import { useState, useMemo, useRef } from "react";
import {
  Card,
  CardContent,
  CardTitle,
  CardDescription,
  CardFooter,
  CardAction,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { BorderBeam } from "@/components/ui/border-beam";
import { Lens } from "@/components/ui/lens";
import { Link } from "@tanstack/react-router";
import { Leaf, Heart, Scale, ShoppingBag, Star, Check } from "lucide-react";
import { products, type Product } from "@/constants/products";
import { NOTIFICATION_DURATION } from "@/constants/timeouts";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCompareStore } from "@/store/useCompareStore";
import { useReviewStore } from "@/store/useReviewStore";

export function ProductCardGrid({
  product,
  featured = false,
}: {
  product: Product;
  featured?: boolean;
}) {
  const addItem = useCartStore((state) => state.addItem);
  const wishlistItems = useWishlistStore((state) => state.items);
  const addToWishlist = useWishlistStore((state) => state.addItem);
  const removeFromWishlist = useWishlistStore((state) => state.removeItem);
  const compareItems = useCompareStore((state) => state.items);
  const addToCompare = useCompareStore((state) => state.addItem);
  const removeFromCompare = useCompareStore((state) => state.removeItem);
  const getAverageRating = useReviewStore((state) => state.getAverageRating);
  const getReviewCount = useReviewStore((state) => state.getReviewCount);

  const isInWishlist = wishlistItems.some((item) => item.productId === product.id);
  const isInCompare = compareItems.some((item) => item.productId === product.id);
  const [added, setAdded] = useState(false);
  const cardRef = useRef<HTMLLIElement>(null);

  const rating = useMemo(() => getAverageRating(product.id), [product.id, getAverageRating]);
  const reviewCount = useMemo(() => getReviewCount(product.id), [product.id, getReviewCount]);

  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    addItem(product.id, 1);
    setAdded(true);
    setTimeout(() => setAdded(false), NOTIFICATION_DURATION);
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
        <div className="absolute top-4 left-4 z-10 flex items-center gap-2">
          <Badge variant="secondary" className="px-4 py-2 text-base font-semibold bg-blue-500 text-white">{product.size}</Badge>
          <Badge className="px-4 py-2 text-base" style={{ 
            backgroundColor: product.badge === 'New' ? '#3498db' : product.badge === 'Bestseller' ? '#e74c3c' : '#2ecc71',
            color: 'white'
          }}>{product.badge}</Badge>
        </div>
        <BorderBeam
          size={200}
          duration={6}
          colorFrom="var(--brand-rose)"
          colorTo="var(--primary)"
          className="opacity-0 group-hover:opacity-100 transition-opacity"
        />
        <Link to="/product/$productId" params={{ productId: product.id }} className="block">
          <figure className="relative aspect-square overflow-hidden bg-muted">
            <Lens zoomFactor={1.5} lensSize={150}>
              <img
                src={product.image}
                alt={`${product.name} fragrance bottle`}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              />
            </Lens>
            
            <div className="absolute top-4 right-4 flex flex-col gap-2 z-20">
              <Tooltip>
                <TooltipTrigger asChild>
                  <Button
                    size="icon"
                    variant="outline"
                    onClick={handleWishlistToggle}
                    aria-label={isInWishlist ? `Remove ${product.name} from wishlist` : `Add ${product.name} to wishlist`}
                    className={`shrink-0 bg-background/80 backdrop-blur-sm pointer-events-auto ${isInWishlist ? "text-red-500 border-red-500 hover:text-red-600 hover:border-red-600" : ""}`}
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
                    className={`shrink-0 bg-background/80 backdrop-blur-sm pointer-events-auto ${isInCompare ? "text-primary border-primary" : ""} md:opacity-0 md:group-hover:opacity-100 transition-opacity`}
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
        <CardContent className="p-4 pt-6">
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
          {rating > 0 && (
            <div className="flex items-center gap-1 mb-3">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star
                  key={star}
                  className={`w-3 h-3 ${
                    star <= Math.round(rating)
                      ? "fill-yellow-400 text-yellow-400"
                      : "text-muted-foreground"
                  }`}
                />
              ))}
              <span className="text-xs text-muted-foreground ml-1">
                {rating.toFixed(1)} ({reviewCount})
              </span>
            </div>
          )}
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
                      <ShoppingBag className="w-4 h-4 mr-1" aria-hidden="true" />
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

export { products };
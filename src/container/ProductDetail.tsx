import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { Link, useParams } from "@tanstack/react-router";
import { getProductById, getSimilarProducts } from "@/constants/products";
import { MAX_QUANTITY } from "@/constants/product";
import { useCartStore } from "@/store/useCartStore";
import { useWishlistStore } from "@/store/useWishlistStore";
import { useCompareStore } from "@/store/useCompareStore";
import { useSubscriptionStore, SUBSCRIPTION_PLANS } from "@/store/useSubscriptionStore";
import {
  ArrowLeft,
  Leaf,
  ShoppingBag,
  Heart,
  Share2,
  Home,
  Package,
  Award,
  Shield,
  LeafIcon,
  Droplets,
  Clock,
  Recycle,
  HeartHandshake,
  GitCompare,
} from "lucide-react";
import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import FAQ from "@/components/FAQ";

const certificateIcons: Record<string, React.ComponentType<{ className?: string }>> = {
  "Eco Certified": Recycle,
  "Natural Origin": LeafIcon,
  Vegan: HeartHandshake,
  "Cruelty-Free": Shield,
  "ISO Certified": Award,
};

function SkipLink() {
  return (
    <a
      href="#product-main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      Skip to main content
    </a>
  );
}

function SimilarProductCard({ product }: { product: ReturnType<typeof getProductById> }) {
  if (!product) return null;

  return (
    <Link to="/product/$productId" params={{ productId: product.id }} className="group block">
      <article className="border border-border rounded-xl overflow-hidden bg-card hover:shadow-lg transition-all duration-300 focus-within:ring-2 focus-within:ring-primary focus-within:ring-offset-2">
        <div className="aspect-square overflow-hidden bg-muted">
          <img
            src={product.image}
            alt={`${product.name} fragrance`}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
        <div className="p-4">
          <h3 className="font-heading font-semibold text-sm mb-1">{product.name}</h3>
          <p className="text-primary font-bold text-lg">€{product.price}</p>
        </div>
      </article>
    </Link>
  );
}

function LiveRegion({ message }: { message: string }) {
  const [announce, setAnnounce] = useState("");

  useEffect(() => {
    if (message) {
      setAnnounce(message);
      const timer = setTimeout(() => setAnnounce(""), 1000);
      return () => clearTimeout(timer);
    }
  }, [message]);

  return (
    <div role="status" aria-live="polite" aria-atomic="true" className="sr-only">
      {announce}
    </div>
  );
}

function LongDescription({ text }: { text: string }) {
  return (
    <div className="text-muted-foreground leading-relaxed">
      <ReactMarkdown
        components={{
          h2: ({ children }) => <h2 className="text-lg font-heading font-semibold mt-6 mb-3">{children}</h2>,
          p: ({ children }) => <p className="mb-3">{children}</p>,
          strong: ({ children }) => <strong className="font-semibold">{children}</strong>,
        }}
      >
        {text}
      </ReactMarkdown>
    </div>
  );
}

export default function ProductDetailPage() {
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
        `${product.name} added to cart. ${quantity} item(s) - €${product.price * quantity}`,
      );
      setTimeout(() => {
        setNotification("");
      }, 3000);
    }
  };

  const handleBuyNow = () => {
    if (product) {
      addItemToCart(productId, quantity);
      window.location.href = "/cart";
    }
  };

  const handleQuantityChange = (newQty: number) => {
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
          url,
        });
      } catch {
      }
    } else {
      await navigator.clipboard.writeText(url);
      setNotification("Link copied to clipboard");
      setTimeout(() => setNotification(""), 2000);
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
      setTimeout(() => setNotification(""), 2000);
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
      setTimeout(() => setNotification(""), 2000);
    }
  };

  useEffect(() => {
    if (product) {
      setIsInWishlist(isInWishlistStore(productId));
      setIsInCompare(isInCompareStore(productId));
    }
  }, [productId, isInWishlistStore, isInCompareStore, items]);

  if (!product) {
    return (
      <>
        <SkipLink />
        <main
          className="pt-24 min-h-screen flex items-center justify-center"
          id="product-main-content"
        >
          <Card className="max-w-md mx-auto text-center p-6">
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold">Product Not Found</CardTitle>
            </CardHeader>
            <CardContent>
              <Button asChild>
                <Link to="/products">
                  <ArrowLeft className="mr-2 w-4 h-4" aria-hidden="true" />
                  Back to Products
                </Link>
              </Button>
            </CardContent>
          </Card>
        </main>
        <LiveRegion message={notification} />
      </>
    );
  }

  return (
    <>
      <SkipLink />
      <main className="pt-24" id="product-main-content">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <BlurFade inView>
            <nav aria-label="Breadcrumb navigation" className="mb-6 lg:mb-8">
              <Breadcrumb>
                <BreadcrumbList>
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/" className="flex items-center gap-2">
                        <Home className="w-4 h-4" aria-hidden="true" />
                        <span className="sr-only">Home</span>
                      </Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator aria-hidden="true" />
                  <BreadcrumbItem>
                    <BreadcrumbLink asChild>
                      <Link to="/products">Products</Link>
                    </BreadcrumbLink>
                  </BreadcrumbItem>
                  <BreadcrumbSeparator aria-hidden="true" />
                  <BreadcrumbItem>
                    <BreadcrumbPage className="font-medium">{product.name}</BreadcrumbPage>
                  </BreadcrumbItem>
                </BreadcrumbList>
              </Breadcrumb>
            </nav>
          </BlurFade>

          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            <BlurFade inView>
              <section aria-labelledby="product-image-heading" className="relative">
                <h2 id="product-image-heading" className="sr-only">
                  {product.name} image gallery
                </h2>
                <div
                  className="absolute inset-0 bg-linear-to-br from-primary/10 to-secondary/10 rounded-3xl blur-3xl"
                  aria-hidden="true"
                />
                <Carousel className="relative" opts={{ loop: true }}>
                  <CarouselContent>
                    <CarouselItem>
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/30">
                        <img
                          src={product.image}
                          alt={`${product.name} - Front view`}
                          className="w-full h-full object-cover"
                        />
                        <Badge className="absolute top-4 left-4" variant="default">
                          {product.badge}
                        </Badge>
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/30">
                        <img
                          src={product.image}
                          alt={`${product.name} - Side view`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                    <CarouselItem>
                      <div className="relative aspect-square rounded-2xl overflow-hidden bg-secondary/30">
                        <img
                          src={product.image}
                          alt={`${product.name} - Back view`}
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </CarouselItem>
                  </CarouselContent>
                  <CarouselPrevious className="left-4" />
                  <CarouselNext className="right-4" />
                </Carousel>
              </section>
            </BlurFade>

            <BlurFade delay={0.2} inView>
              <section aria-labelledby="product-info-heading">
                <h2 id="product-info-heading" className="sr-only">
                  Product information
                </h2>
                <div className="flex items-center gap-2 mb-2">
                  <Leaf className="w-4 h-4 text-primary" aria-hidden="true" />
                  <span className="text-sm text-muted-foreground uppercase tracking-wider">
                    {product.category} · {product.size}
                  </span>
                </div>

                <h1 className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-4">
                  {product.name}
                </h1>

                <div className="mb-4">
                  {hasDiscount ? (
                    <div className="flex items-baseline gap-2">
                      <span className="text-2xl sm:text-3xl font-heading font-bold text-primary">
                        €{discountedPrice.toFixed(2)}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        €{product.price}
                      </span>
                      <Badge variant="secondary" className="text-xs">
                        {discountPercentage}% off
                      </Badge>
                    </div>
                  ) : (
                    <span className="text-2xl sm:text-3xl font-heading font-bold text-primary">
                      €{product.price}
                    </span>
                  )}
                </div>

                <p className="text-muted-foreground leading-relaxed mb-6">
                  {product.description}
                </p>

                <div className="mb-6">
                  <div className="flex items-center gap-2 mb-2">
                    <span className="text-sm text-muted-foreground">Quantity:</span>
                    <span className="text-sm text-muted-foreground">limit: {Math.min(MAX_QUANTITY, product.stock)}</span>
                  </div>
                  <div className="flex items-center gap-2 mb-3">
                    <div className="flex items-center" role="group" aria-label="Quantity selector">
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(quantity - 1)}
                        disabled={quantity <= 1}
                        aria-label="Decrease quantity"
                        className="w-10 h-10"
                      >
                        −
                      </Button>
                      <input
                        type="number"
                        min={1}
                        max={MAX_QUANTITY}
                        value={quantity}
                        onChange={(e) => handleQuantityChange(parseInt(e.target.value) || 1)}
                        className="w-16 h-10 flex items-center justify-center text-lg font-medium text-center border-y border-input bg-background focus:outline-none focus:ring-2 focus:ring-primary"
                      />
                      <Button
                        variant="outline"
                        size="icon"
                        onClick={() => handleQuantityChange(quantity + 1)}
                        disabled={quantity >= Math.min(MAX_QUANTITY, product.stock)}
                        aria-label="Increase quantity"
                        className="w-10 h-10"
                      >
                        +
                      </Button>
                    </div>
                    <span className="text-sm text-muted-foreground">
                      ({product.stock} available in stock)
                    </span>
                  </div>
                  <div className="flex sm:flex-row gap-2">
                    <Button
                      size="lg"
                      className="flex-1 sm:h-10 h-12 group"
                      onClick={handleAddToCart}
                    >
                      <ShoppingBag className="mr-2 w-5 h-5" aria-hidden="true" />
                      Add to Cart
                    </Button>
                    <Button
                      size="lg"
                      variant="secondary"
                      className="flex-1 sm:h-10 h-12 group"
                      onClick={handleBuyNow}
                    >
                      Buy Now
                    </Button>
                  </div>
                </div>

                <div
                  className="flex flex-wrap gap-2 mb-6"
                  role="group"
                  aria-label="Product actions"
                >
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={isInWishlist ? "default" : "outline"}
                        size="sm"
                        className={`gap-2 transition-all ${isInWishlist ? "font-bold border-primary bg-primary text-primary-foreground" : ""}`}
                        onClick={handleWishlistToggle}
                        aria-pressed={isInWishlist}
                      >
                        <Heart
                          className={`w-4 h-4 ${isInWishlist ? "fill-primary-foreground" : "text-destructive"}`}
                          aria-hidden="true"
                        />
                        <span className="hidden sm:inline font-semibold">
                          {isInWishlist ? "Saved" : "Save"}
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {isInWishlist ? "Remove from wishlist" : "Save to wishlist"}
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button
                        variant={isInCompare ? "default" : "outline"}
                        size="sm"
                        className={`gap-2 transition-all ${isInCompare ? "font-bold border-primary bg-primary text-primary-foreground" : ""}`}
                        onClick={handleCompareToggle}
                        aria-pressed={isInCompare}
                      >
                        <GitCompare
                          className={`w-4 h-4 ${isInCompare ? "fill-primary-foreground" : "text-primary"}`}
                          aria-hidden="true"
                        />
                        <span className="hidden sm:inline font-semibold">
                          {isInCompare ? "In Comparison" : "Compare"}
                        </span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>
                      {isInCompare ? "Remove from compare" : "Add to compare"}
                    </TooltipContent>
                  </Tooltip>
                  <Tooltip>
                    <TooltipTrigger asChild>
                      <Button variant="outline" size="sm" className="gap-2" onClick={handleShare}>
                        <Share2 className="w-4 h-4" aria-hidden="true" />
                        <span className="hidden sm:inline">Share</span>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>Share this product</TooltipContent>
                  </Tooltip>
                </div>

                <Separator className="my-6" />

                <div className="flex gap-4 text-sm">
                  <a
                    href="#product-details"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <Package className="w-4 h-4" />
                    Product Details
                  </a>
                  <a
                    href="#certificates"
                    className="text-primary hover:underline flex items-center gap-1"
                  >
                    <Award className="w-4 h-4" />
                    Certifications
                  </a>
                </div>
              </section>
            </BlurFade>
          </div>

          <BlurFade delay={0.3} inView>
            <section id="certificates" aria-labelledby="certificates-heading" className="mt-16">
              <h2
                id="certificates-heading"
                className="text-2xl font-heading font-bold mb-6 flex items-center gap-3"
              >
                <Award className="w-6 h-6 text-primary" aria-hidden="true" />
                Certificates & Certifications
              </h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                {product.certificates.map((cert) => {
                  const IconComponent = certificateIcons[cert] || Award;
                  return (
                    <Card key={cert} className="text-center p-4 bg-muted/50">
                      <CardContent className="p-0">
                        <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-3">
                          <IconComponent className="w-6 h-6 text-primary" aria-hidden="true" />
                        </div>
                        <span className="text-sm font-medium">{cert}</span>
                      </CardContent>
                    </Card>
                  );
                })}
              </div>
            </section>
          </BlurFade>

          <BlurFade delay={0.35} inView>
            <section aria-labelledby="about-heading" className="mt-16">
              <div className="flex gap-4 text-sm mb-4">
                <a
                  href="#product-details"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <Package className="w-4 h-4" />
                  Product Details
                </a>
                <a
                  href="#certificates"
                  className="text-primary hover:underline flex items-center gap-1"
                >
                  <Award className="w-4 h-4" />
                  Certifications
                </a>
              </div>
              <h2 id="about-heading" className="text-2xl font-heading font-bold mb-6">
                About This Fragrance
              </h2>
              <LongDescription text={product.longDescription} />
            </section>
          </BlurFade>

          <BlurFade delay={0.4} inView>
            <section id="product-details" aria-labelledby="details-heading" className="mt-16">
              <h2 id="details-heading" className="text-2xl font-heading font-bold mb-6">
                Product Details
              </h2>
              
              <Card className="mb-6">
                <CardHeader>
                  <CardTitle className="text-lg">Scent Profile</CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="grid grid-cols-3 gap-4">
                    <div className="p-4 bg-muted rounded-lg">
                      <span className="block text-xs text-muted-foreground uppercase mb-2">Top Notes</span>
                      <span className="text-sm font-medium">{product.notes.top}</span>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <span className="block text-xs text-muted-foreground uppercase mb-2">Heart Notes</span>
                      <span className="text-sm font-medium">{product.notes.heart}</span>
                    </div>
                    <div className="p-4 bg-muted rounded-lg">
                      <span className="block text-xs text-muted-foreground uppercase mb-2">Base Notes</span>
                      <span className="text-sm font-medium">{product.notes.base}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-0">
                  <table className="w-full">
                    <tbody>
                      <tr className="border-b">
                        <td className="py-4 px-6 w-48 font-medium flex items-center gap-2">
                          <Package className="w-4 h-4 text-primary" />
                          Bottle Size
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">{product.size}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium flex items-center gap-2">
                          <Droplets className="w-4 h-4 text-primary" />
                          Net Quantity
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">{product.size}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium flex items-center gap-2">
                          <LeafIcon className="w-4 h-4 text-primary" />
                          Country of Origin
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">Greece</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium flex items-center gap-2">
                          <Award className="w-4 h-4 text-primary" />
                          Producer
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">Blossom, Athens, Greece</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          Batch Number
                        </td>
                        <td className="py-4 px-6 text-muted-foreground font-mono text-sm">BATCH-{product.id.toUpperCase()}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          Last 30 Days Price
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">€{product.price} (Current)</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium flex items-center gap-2">
                          <Droplets className="w-4 h-4 text-primary" />
                          How to Use
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">{product.howToUse}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium flex items-center gap-2">
                          <Package className="w-4 h-4 text-primary" />
                          Ingredients
                        </td>
                        <td className="py-4 px-6 text-muted-foreground font-mono text-sm">{product.ingredients}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          Storage
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">{product.storage}</td>
                      </tr>
                      <tr className="border-b">
                        <td className="py-4 px-6 font-medium flex items-center gap-2">
                          <Clock className="w-4 h-4 text-primary" />
                          Lifespan
                        </td>
                        <td className="py-4 px-6 text-muted-foreground">{product.lifespan}</td>
                      </tr>
                      <tr>
                        <td className="py-4 px-6 font-medium flex items-center gap-2">
                          <Shield className="w-4 h-4 text-primary" />
                          Precautions
                        </td>
                        <td className="py-4 px-6 text-muted-foreground text-sm">For external use only. Avoid contact with eyes. Store in a cool, dry place away from direct sunlight. Keep out of reach of children.</td>
                      </tr>
                    </tbody>
                  </table>
                </CardContent>
              </Card>
            </section>
          </BlurFade>

          <FAQ />

          {similarProducts.length > 0 && (
            <BlurFade delay={0.5} inView>
              <section aria-labelledby="similar-heading" className="mt-16">
                <h2
                  id="similar-heading"
                  className="text-2xl font-heading font-bold mb-6 flex items-center gap-3"
                >
                  <Package className="w-6 h-6 text-primary" aria-hidden="true" />
                  Similar Products
                </h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-4 sm:gap-6">
                  {similarProducts.map((p) => (
                    <SimilarProductCard key={p.id} product={p} />
                  ))}
                </div>
              </section>
            </BlurFade>
          )}
        </div>
      </main>
      <LiveRegion message={notification} />
    </>
  );
}

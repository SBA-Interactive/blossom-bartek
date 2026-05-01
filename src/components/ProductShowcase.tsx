import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedList } from "@/components/ui/animated-list";
import { ProductCardGrid, products } from "@/components/ProductCardGrid";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Flower2 } from "lucide-react";
import {
  BLUR_FADE_DELAY_SHORT,
  BLUR_FADE_DELAY_MEDIUM,
  BLUR_FADE_DELAY_EXTRA_LONG_2,
  ANIMATED_LIST_DELAY,
} from "@/constants/animation";

const showcaseProducts = products.slice(0, 3);

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
          <BlurFade delay={BLUR_FADE_DELAY_SHORT} inView>
            <h2
              id="showcase-heading"
              className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4"
            >
              Our Signature Collection
            </h2>
          </BlurFade>
          <BlurFade delay={BLUR_FADE_DELAY_MEDIUM} inView>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Each fragrance is crafted from carefully selected fruit peels, delivering unique
              scents that are both natural and luxurious.
            </p>
          </BlurFade>
        </header>

        <AnimatedList delay={ANIMATED_LIST_DELAY}>
          <ul
            className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8 list-none p-0 m-0"
            role="list"
            aria-label="Products"
          >
            {showcaseProducts.map((product) => (
              <ProductCardGrid key={product.id} product={product} />
            ))}
          </ul>
        </AnimatedList>

        <BlurFade delay={BLUR_FADE_DELAY_EXTRA_LONG_2} inView>
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
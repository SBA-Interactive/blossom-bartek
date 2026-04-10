import React from "react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
  EmptyContent,
} from "@/components/ui/empty";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { BlurFade } from "@/components/ui/blur-fade";
import { Link } from "@tanstack/react-router";
import { useCompareStore } from "@/store/useCompareStore";
import { useCartStore } from "@/store/useCartStore";
import {
  GitCompare,
  ShoppingBag,
  X,
  ArrowRight,
  Package,
} from "lucide-react";

function SkipLink() {
  return (
    <a
      href="#compare-main-content"
      className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-primary focus:text-primary-foreground focus:rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary"
    >
      Skip to main content
    </a>
  );
}

export default function ComparePage() {
  const items = useCompareStore((state) => state.items);
  const removeItem = useCompareStore((state) => state.removeItem);
  const clearCompare = useCompareStore((state) => state.clearCompare);
  const addItem = useCartStore((state) => state.addItem);

  const handleAddToCart = (productId: string) => {
    addItem(productId, 1);
  };

  if (items.length === 0) {
    return (
      <>
        <SkipLink />
        <main className="pt-24 min-h-screen" id="compare-main-content">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
            <BlurFade inView>
              <header className="flex items-center gap-3 mb-8">
                <Avatar className="w-12 h-12 bg-primary/10">
                  <AvatarFallback className="bg-primary/10">
                    <GitCompare className="w-6 h-6 text-primary" aria-hidden="true" />
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                  Compare Products
                </h1>
              </header>

              <Empty>
                <EmptyHeader>
                  <EmptyMedia variant="icon">
                    <GitCompare className="w-10 h-10" />
                  </EmptyMedia>
                  <EmptyTitle>No products to compare</EmptyTitle>
                  <EmptyDescription>
                    Add products to compare their features and prices.
                  </EmptyDescription>
                </EmptyHeader>
                <EmptyContent>
                  <Button asChild size="lg">
                    <Link to="/products">
                      <Package className="mr-2 w-4 h-4" />
                      Browse Products
                      <ArrowRight className="ml-2 w-4 h-4" />
                    </Link>
                  </Button>
                </EmptyContent>
              </Empty>
            </BlurFade>
          </div>
        </main>
      </>
    );
  }

  const specs = [
    { label: "Category", key: "category" },
    { label: "Size", key: "size" },
    { label: "Price", key: "price", format: (v: number) => `€${v}` },
    { label: "Top Notes", key: "notes.top", get: (p: any) => p.notes.top },
    { label: "Heart Notes", key: "notes.heart", get: (p: any) => p.notes.heart },
    { label: "Base Notes", key: "notes.base", get: (p: any) => p.notes.base },
  ];

  return (
    <>
      <SkipLink />
      <main className="pt-24 min-h-screen" id="compare-main-content">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-16">
          <BlurFade inView>
            <header className="flex items-center gap-3 mb-8">
              <Avatar className="w-12 h-12 bg-primary/10">
                <AvatarFallback className="bg-primary/10">
                  <GitCompare className="w-6 h-6 text-primary" aria-hidden="true" />
                </AvatarFallback>
              </Avatar>
              <h1 className="text-3xl sm:text-4xl font-heading font-bold text-foreground">
                Compare Products
              </h1>
              <Badge variant="secondary" className="ml-2">
                {items.length} products
              </Badge>
              <Button variant="ghost" size="sm" onClick={clearCompare} className="ml-auto">
                Clear All
              </Button>
            </header>

            <div className="overflow-x-auto">
              <table className="w-full border-collapse">
                <thead>
                  <tr>
                    <th className="p-4 text-left border-b w-40 bg-muted/50"></th>
                    {items.map((item) => (
                      <th key={item.id} className="p-4 border-b w-64">
                        <div className="relative">
                          <Button
                            variant="ghost"
                            size="icon"
                            className="absolute -top-2 -right-2 h-6 w-6"
                            onClick={() => removeItem(item.productId)}
                          >
                            <X className="w-4 h-4" />
                          </Button>
                          <Link to="/product/$productId" params={{ productId: item.productId }}>
                            <div className="aspect-square rounded-lg overflow-hidden bg-muted mb-3">
                              <img
                                src={item.product.image}
                                alt={item.product.name}
                                className="w-full h-full object-cover"
                              />
                            </div>
                            <h3 className="font-heading font-semibold text-lg">
                              {item.product.name}
                            </h3>
                          </Link>
                          <p className="text-primary font-bold text-xl mt-1">
                            €{item.product.price}
                          </p>
                          <Button
                            size="sm"
                            className="w-full mt-2"
                            onClick={() => handleAddToCart(item.productId)}
                          >
                            <ShoppingBag className="w-4 h-4 mr-2" />
                            Add to Cart
                          </Button>
                        </div>
                      </th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {specs.map((spec) => (
                    <tr key={spec.key} className="border-b">
                      <td className="p-4 font-medium text-muted-foreground bg-muted/30">
                        {spec.label}
                      </td>
                      {items.map((item) => {
                        let value: any;
                        if (spec.get) {
                          value = spec.get(item.product);
                        } else {
                          value = item.product[spec.key as keyof typeof item.product];
                        }
                        return (
                          <td key={item.id} className="p-4 text-center">
                            {spec.format ? spec.format(value) : value}
                          </td>
                        );
                      })}
                    </tr>
                  ))}
                  <tr>
                    <td className="p-4 font-medium text-muted-foreground bg-muted/30">
                      Certifications
                    </td>
                    {items.map((item) => (
                      <td key={item.id} className="p-4 text-center">
                        <div className="flex flex-wrap gap-1 justify-center">
                          {item.product.certificates.map((cert) => (
                            <Badge key={cert} variant="outline" className="text-xs">
                              {cert}
                            </Badge>
                          ))}
                        </div>
                      </td>
                    ))}
                  </tr>
                </tbody>
              </table>
            </div>
          </BlurFade>
        </div>
      </main>
    </>
  );
}

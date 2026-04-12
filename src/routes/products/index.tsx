import Products from "@/container/Products";
import { createFileRoute } from "@tanstack/react-router";
import { MAX_PRICE_FILTER, MIN_PRICE_FILTER } from "@/constants/filters";

export const Route = createFileRoute("/products/")({
  component: () => <Products />,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      q: (search.q as string) || "",
      category: (search.category as string) || "",
      notes: (search.notes as string) || "",
      priceMin: Number(search.priceMin) || MIN_PRICE_FILTER,
      priceMax: Number(search.priceMax) || MAX_PRICE_FILTER,
      featured: (search.featured as string) || "",
      badges: (search.badges as string) || "",
      sizes: (search.sizes as string) || "",
      inStock: search.inStock === "true",
    };
  },
});

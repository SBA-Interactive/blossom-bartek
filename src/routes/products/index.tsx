import Products from "@/container/Products";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/products/")({
  component: () => <Products />,
  validateSearch: (search: Record<string, unknown>) => {
    return {
      q: (search.q as string) || "",
      category: (search.category as string) || "",
      notes: (search.notes as string) || "",
      priceMin: Number(search.priceMin) || 0,
      priceMax: Number(search.priceMax) || 100,
      featured: (search.featured as string) || "",
    };
  },
});

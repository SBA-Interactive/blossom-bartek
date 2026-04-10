import ProductDetail from "@/container/ProductDetail";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/product/$productId")({
  component: () => <ProductDetail />,
});

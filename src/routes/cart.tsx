import Cart from "@/container/Cart";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cart")({
  component: () => <Cart />,
});

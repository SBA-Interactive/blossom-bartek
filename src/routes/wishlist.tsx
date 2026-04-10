import Wishlist from "@/container/Wishlist";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/wishlist")({
  component: () => <Wishlist />,
});

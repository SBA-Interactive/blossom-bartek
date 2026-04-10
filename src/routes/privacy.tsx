import Privacy from "@/container/Privacy";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/privacy")({
  component: () => <Privacy />,
});

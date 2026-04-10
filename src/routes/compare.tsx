import Compare from "@/container/Compare";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/compare")({
  component: () => <Compare />,
});

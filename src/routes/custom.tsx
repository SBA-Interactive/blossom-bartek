import Custom from "@/container/Custom";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/custom")({
  component: () => <Custom />,
});
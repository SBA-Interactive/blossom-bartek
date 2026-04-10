import Terms from "@/container/Terms";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/terms")({
  component: () => <Terms />,
});

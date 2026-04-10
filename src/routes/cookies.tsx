import Cookies from "@/container/Cookies";
import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/cookies")({
  component: () => <Cookies />,
});

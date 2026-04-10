import { Link } from "@tanstack/react-router";
import { Button } from "./ui/button";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";

export function ErrorHome({ className }: { className?: string }) {
  return (
    <Tooltip>
      <TooltipTrigger asChild>
        <Button className={className} asChild variant="default">
          <Link to="/">Home</Link>
        </Button>
      </TooltipTrigger>
      <TooltipContent>Return to homepage</TooltipContent>
    </Tooltip>
  );
}

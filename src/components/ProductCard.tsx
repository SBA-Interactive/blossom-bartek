import { cn } from "@/lib/utils";
import {
  Card,
  CardAction,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
  CardContent,
} from "./ui/card";
import { Badge } from "./ui/badge";
import { Button } from "./ui/button";
import { ButtonGroup } from "./ui/button-group";
import { Tooltip, TooltipContent, TooltipTrigger } from "./ui/tooltip";
import { BorderBeam } from "./ui/border-beam";
export interface Action {
  name: string;
  icon?: string;
  click?: () => any | Promise<any>;
}

export interface Product {
  title: string;
  desc: string;
  url: string;
  badge?: React.ReactNode | React.ReactNode[];
}

export enum CardSize {
  "Standard",
  "Big",
  "Small",
}

export function ProductCard({
  product,
  actions,
  size,
}: {
  product: Product;
  actions?: Map<string, Action>;
  size: CardSize;
}) {
  if (size === CardSize.Standard)
    return <StandardProductCard product={product} actions={actions} />;
  else if (size === CardSize.Big) return <BigProductCard product={product} actions={actions} />;
  else if (size === CardSize.Small) return <SmallProductCard product={product} actions={actions} />;

  return <>INVALID CARD SIZE</>;
}

export function StandardProductCard({
  product,
  actions,
}: {
  product: Product;
  actions?: Map<string, Action>;
}) {
  return (
    <Card className={cn("relative mx-auto w-full max-w-sm pt-0 group overflow-hidden")}>
      <BorderBeam
        size={200}
        duration={6}
        colorFrom="var(--brand-rose)"
        colorTo="var(--primary)"
        className="opacity-0 group-hover:opacity-100 transition-opacity"
      />
      <div
        className={cn(
          "absolute inset-0 z-30 aspect-video bg-black/10 group-hover:bg-black/5 transition-background-color duration-200",
        )}
      />
      <img
        src="/perfume.png"
        alt="Logo"
        className={cn("relative z-20 aspect-video w-full object-cover")}
      />
      <CardHeader>
        <CardAction>
          {Array.isArray(product?.badge) ? (
            <div className="flex flex-row gap-x-1.5">
              {product?.badge.map((be, i) => (
                <span key={i}>{be}</span>
              ))}
            </div>
          ) : (
            <Badge>{product?.badge}</Badge>
          )}
        </CardAction>
        <CardTitle>{product?.title}</CardTitle>
        <CardDescription>{product?.desc}</CardDescription>
      </CardHeader>
      <CardContent>
        <ButtonGroup className="w-full">
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="outline" className="w-1/2" onClick={actions?.get("view")?.click}>
                View
              </Button>
            </TooltipTrigger>
            <TooltipContent>View details</TooltipContent>
          </Tooltip>
          <Tooltip>
            <TooltipTrigger asChild>
              <Button variant="default" className="w-1/2" onClick={actions?.get("buy")?.click}>
                Buy
              </Button>
            </TooltipTrigger>
            <TooltipContent>Add to cart</TooltipContent>
          </Tooltip>
        </ButtonGroup>
      </CardContent>
    </Card>
  );
}

export function BigProductCard({
  product,
  actions,
}: {
  product: Product;
  actions?: Map<string, Action>;
}) {
  return (
    <Card className="group overflow-hidden relative">
      <BorderBeam size={300} duration={8} />
      <CardHeader>
        <CardTitle>{product?.title}</CardTitle>
        <CardDescription>{product?.desc}</CardDescription>
      </CardHeader>
      <CardFooter>
        <ButtonGroup>
          <Button variant="outline" onClick={actions?.get("view")?.click}>
            View
          </Button>
          <Button variant="default" onClick={actions?.get("buy")?.click}>
            Buy
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

export function SmallProductCard({
  product,
  actions,
}: {
  product: Product;
  actions?: Map<string, Action>;
}) {
  return (
    <Card className="group overflow-hidden relative">
      <CardHeader className="pb-2">
        <CardTitle className="text-sm">{product?.title}</CardTitle>
      </CardHeader>
      <CardContent className="pt-0">
        <CardDescription className="text-xs">{product?.desc}</CardDescription>
      </CardContent>
      <CardFooter>
        <ButtonGroup>
          <Button variant="outline" size="sm" onClick={actions?.get("view")?.click}>
            View
          </Button>
          <Button variant="default" size="sm" onClick={actions?.get("buy")?.click}>
            Buy
          </Button>
        </ButtonGroup>
      </CardFooter>
    </Card>
  );
}

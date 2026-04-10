import { ColoredBadge } from "./ColoredBadge";
import { CardSize, ProductCard, type Product } from "./ProductCard";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "./ui/card";
import { BentoGrid } from "./ui/bento-grid";

export function SmallProductGrid() {
  return (
    <BentoGrid className="grid grid-cols-2 gap-4 gap-y-12 mt-8">
      {[1, 2, 3, 4].map((i) => (
        <Card key={i} className="flex flex-col gap-y-4 items-center justify-center p-6">
          <CardHeader>
            <CardTitle className="text-2xl">Small Product Grid</CardTitle>
          </CardHeader>
          <CardContent>
            <CardDescription className="text-xl">This is a small product grid.</CardDescription>
          </CardContent>
        </Card>
      ))}
      <ProductCard
        product={
          {
            title: "Perfume",
            desc: "Very fragrant perfume",
            url: "/",
            badge: [
              <ColoredBadge badgeType={"NEW"} text="New" />,
              <ColoredBadge badgeType={"HOT"} text="Hot" />,
              <ColoredBadge badgeType={"ECO"} text="Eco" />,
            ],
          } satisfies Product
        }
        size={CardSize.Standard}
      />
    </BentoGrid>
  );
}

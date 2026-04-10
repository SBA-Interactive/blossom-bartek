import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { BlurFade } from "@/components/ui/blur-fade";
import { Separator } from "@/components/ui/separator";
import { Leaf, Recycle, Sparkles, Heart } from "lucide-react";

const features = [
  {
    icon: Leaf,
    title: "100% Natural",
    description:
      "Made from real fruit peels, our fragrances contain only natural ingredients safe for your skin and the environment.",
  },
  {
    icon: Recycle,
    title: "Eco-Friendly",
    description:
      "We upcycle fruit peels that would otherwise go to waste, creating beautiful scents while reducing environmental impact.",
  },
  {
    icon: Sparkles,
    title: "Fresh & Modern",
    description:
      "Contemporary fragrances that feel fresh, vibrant, and perfect for everyday wear. Suitable for ages 10+.",
  },
  {
    icon: Heart,
    title: "Premium Quality",
    description:
      "Each fragrance is carefully crafted to deliver a luxurious experience with long-lasting, natural scent profiles.",
  },
];

export function Features() {
  return (
    <section aria-labelledby="features-heading" className="py-16 sm:py-24 bg-secondary">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="text-center mb-10 sm:mb-16">
          <BlurFade inView>
            <h2
              id="features-heading"
              className="text-2xl sm:text-3xl lg:text-4xl font-heading font-bold text-foreground mb-3 sm:mb-4"
            >
              Why Choose Blossom?
            </h2>
          </BlurFade>
          <BlurFade delay={0.1} inView>
            <p className="text-base sm:text-lg text-muted-foreground max-w-2xl mx-auto">
              We transform simple fruit peels into extraordinary fragrances, combining
              sustainability with premium quality.
            </p>
          </BlurFade>
        </header>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8">
          {features.map((feature, index) => (
            <BlurFade key={index} delay={0.1 * index} inView>
              <Card className="h-full border border-border shadow-sm hover:shadow-md transition-shadow">
                <CardHeader className="pb-2 sm:pb-4">
                  <span
                    className="w-12 h-12 sm:w-14 sm:h-14 bg-primary/10 rounded-xl flex items-center justify-center mb-4 sm:mb-6"
                    aria-hidden="true"
                  >
                    <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-primary" />
                  </span>
                  <CardTitle className="text-lg sm:text-xl font-heading font-semibold">
                    {feature.title}
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-0">
                  <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                    {feature.description}
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>
          ))}
        </div>

        <Separator className="mt-10 sm:mt-16" />
      </div>
    </section>
  );
}

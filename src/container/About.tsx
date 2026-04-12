import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { NumberTicker } from "@/components/ui/number-ticker";
import { DotPattern } from "@/components/ui/dot-pattern";
import { AnimatedList } from "@/components/ui/animated-list";
import { Leaf, Recycle, Heart, Quote } from "lucide-react";
import { BentoGrid } from "@/components/ui/bento-grid";
import PricingPage from "./Pricing";
import { SectionWrapper } from "@/components/section-wrapper";
import {
  BLUR_FADE_DELAY_SHORT,
  BLUR_FADE_DELAY_MEDIUM,
  ANIMATED_LIST_DELAY,
  ANIMATED_LIST_STAGGER,
} from "@/constants/animation";

const values = [
  {
    icon: Leaf,
    title: "Natural Ingredients",
    description:
      "We use only natural fruit peels and botanical extracts, ensuring every fragrance is safe and gentle on skin.",
  },
  {
    icon: Recycle,
    title: "Sustainability First",
    description:
      "By upcycling fruit peels, we reduce waste and create something beautiful from what would otherwise be discarded.",
  },
  {
    icon: Heart,
    title: "Made with Love",
    description:
      "Each bottle is crafted with care and attention to detail, delivering a premium experience every time.",
  },
];

const stats = [
  { number: 100, suffix: "%", label: "Natural Ingredients" },
  { number: 10, suffix: "+", label: "Safe for Age" },
  { number: 0, suffix: "", label: "Harmful Chemicals" },
  { number: 100, suffix: "%", label: "Eco Packaging" },
];

const milestones = [
  {
    year: "2024",
    title: "The Beginning",
    description:
      "Blossom was founded with a vision to create sustainable fragrances from upcycled fruit peels.",
  },
  {
    year: "2025",
    title: "First Collection",
    description:
      "Launched our debut collection of 6 natural fragrances, all made from citrus and berry peels.",
  },
  {
    year: "2026",
    title: "Growing Community",
    description: "Expanded to serve customers across Greece with plans for international shipping.",
  },
];

export default function AboutPage({ showHero = true }: { showHero?: boolean }) {
  return (
    <main className={showHero ? "pt-24" : ""}>
      {showHero && (
        <section className="py-24 bg-linear-to-br from-primary/5 via-background to-secondary/20 relative overflow-hidden">
          <DotPattern className="opacity-10 text-primary/20" />
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <BlurFade inView>
              <div className="max-w-3xl mx-auto text-center">
                <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 mb-6">
                  <Leaf className="w-4 h-4" />
                  Our Story
                </Badge>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-heading font-bold text-foreground mb-6 leading-tight">
                  From Fruit Peels to <span className="text-primary">Fresh Scents</span>
                </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Blossom was born from a simple idea: transform nature&apos;s overlooked treasures
                into something beautiful. We create premium fragrances from upcycled fruit peels,
                proving that sustainability and luxury can go hand in hand.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>
      )}

      <section className="py-16 bg-primary text-primary-foreground">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <AnimatedList delay={ANIMATED_LIST_DELAY}>
            <BentoGrid className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {stats.map((stat, index) => (
                <BlurFade key={index} delay={0.1 * index} inView>
                  <Card className="bg-transparent border-0 shadow-none text-center">
                    <CardContent className="pt-6">
                      <div className="text-3xl sm:text-4xl font-heading font-bold mb-2 text-primary-foreground">
                        <NumberTicker value={stat.number} />
                        {stat.suffix}
                      </div>
                      <Separator className="my-2 bg-primary-foreground/20" />
                      <p className="text-sm opacity-80 text-primary-foreground">{stat.label}</p>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </BentoGrid>
          </AnimatedList>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <BlurFade inView>
              <Card className="border-0 shadow-none">
                <CardHeader>
                  <CardTitle className="text-3xl sm:text-4xl font-heading font-bold">
                    Our Mission
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <CardDescription className="text-lg leading-relaxed">
                    At Blossom, we believe that nature provides everything we need to create
                    beautiful, effective fragrances. Our mission is to prove that you don&apos;t
                    need harmful chemicals to smell wonderful.
                  </CardDescription>
                  <CardDescription className="text-lg leading-relaxed">
                    Every year, millions of tons of fruit peels go to waste. We saw an opportunity
                    to transform this overlooked resource into premium perfumes that are safe for
                    you and gentle on the planet.
                  </CardDescription>
                  <CardDescription className="text-lg leading-relaxed">
                    Our fragrances are suitable for ages 10+, making them perfect for everyone who
                    wants to smell fresh and feel good about their choices.
                  </CardDescription>
                </CardContent>
              </Card>
            </BlurFade>
            <BlurFade delay={BLUR_FADE_DELAY_MEDIUM} inView>
              <div className="relative">
                <div className="absolute inset-0 bg-linear-to-br from-primary/20 to-brand-citrus/20 rounded-3xl blur-2xl" />
                <img
                  src="/perfume.png"
                  alt="Blossom Natural Perfume"
                  className="relative z-10 w-full rounded-2xl shadow-xl"
                />
              </div>
            </BlurFade>
          </div>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <header className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-4">
                Our Values
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Everything we do is guided by our commitment to nature, quality, and sustainability.
              </p>
            </header>
          </BlurFade>

          <AnimatedList delay={ANIMATED_LIST_DELAY}>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {values.map((value, index) => (
                <BlurFade key={index} delay={0.1 * index} inView>
                  <Card className="h-full hover:shadow-md transition-all border-border/50">
                    <CardHeader>
                      <Avatar className="w-14 h-14 bg-primary/10 mb-6">
                        <AvatarFallback className="bg-primary/10">
                          <value.icon className="w-7 h-7 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle className="text-xl font-heading font-semibold">
                        {value.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="leading-relaxed">
                        {value.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      <section className="py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <header className="max-w-3xl mx-auto text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-heading font-bold text-foreground mb-6">
                How It All Started
              </h2>
            </header>
          </BlurFade>

          <Tabs defaultValue="2024" className="max-w-3xl mx-auto">
            <TabsList className="grid w-full grid-cols-3">
              {milestones.map((m) => (
                <TabsTrigger key={m.year} value={m.year}>
                  {m.year}
                </TabsTrigger>
              ))}
            </TabsList>
            {milestones.map((m) => (
              <TabsContent key={m.year} value={m.year}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Badge variant="outline">{m.year}</Badge>
                      {m.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-lg leading-relaxed">
                      {m.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <h2 className="text-2xl font-heading font-bold text-center mb-10">
              What Our Customers Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
              {[
                {
                  name: "Maria K.",
                  text: "The scents are absolutely divine! I've been using Citrus Bloom for months and still look forward to putting it on every morning. Finally found a fragrance that matches my values.",
                  rating: 5,
                },
                {
                  name: "Alexandros P.",
                  text: "Blossom has completely changed how I think about perfume. Knowing it's made from upcycled fruit peels makes it even more special. The quality is incredible.",
                  rating: 5,
                },
                {
                  name: "Sofia M.",
                  text: "I gifted the Rose Petal set to my mother and she absolutely loved it. The packaging is beautiful and the scents are so unique. Will definitely be ordering more!",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <BlurFade key={index} delay={index * 0.1} inView>
                  <Card className="h-full">
                    <CardContent className="p-6">
                      <Quote className="w-8 h-8 text-primary/30 mb-4" />
                      <p className="text-muted-foreground mb-4 italic">"{testimonial.text}"</p>
                      <div className="flex items-center gap-1 mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <svg key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" viewBox="0 0 24 24">
                            <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                          </svg>
                        ))}
                      </div>
                      <p className="font-semibold">{testimonial.name}</p>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </BlurFade>
        </div>
      </section>

      <PricingPage showHeader={false} />
    </main>
  );
}

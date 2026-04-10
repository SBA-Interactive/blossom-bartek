import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { Link } from "@tanstack/react-router";
import { HelpCircle, ArrowRight, Package, Truck, RefreshCw, Leaf } from "lucide-react";
import { useState } from "react";

const faqCategories = [
  {
    title: "Products",
    icon: Leaf,
    items: [
      {
        q: "Are your fragrances safe for sensitive skin?",
        a: "Yes! All Blossom fragrances are made from natural fruit peels and botanical extracts. They're free from harsh chemicals and suitable for sensitive skin. We recommend a patch test for those with very sensitive skin.",
      },
      {
        q: "What age are your products suitable for?",
        a: "Our fragrances are suitable for ages 10 and up. The natural ingredients make them gentle enough for younger users while still being sophisticated for adults.",
      },
      {
        q: "How long do the fragrances last?",
        a: "Our natural fragrances typically last 4-6 hours, depending on your skin type and activity level. The scent profile evolves throughout the day, starting fresh and settling into softer notes.",
      },
      {
        q: "What ingredients do you use?",
        a: "We use upcycled fruit peels (orange, lemon, grapefruit, etc.), natural botanical extracts, and plant-based carrier oils. All ingredients are listed on each product page and on the packaging.",
      },
    ],
  },
  {
    title: "Orders & Shipping",
    icon: Truck,
    items: [
      {
        q: "How long does shipping take?",
        a: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days. Local delivery within Athens is free for orders over €50.",
      },
      {
        q: "Do you ship internationally?",
        a: "Currently we ship within Greece. International shipping is coming soon! Sign up for our newsletter to be the first to know.",
      },
      {
        q: "How do I track my order?",
        a: "You'll receive a tracking link via email once your order ships. You can also check your order status by contacting our support team.",
      },
      {
        q: "Can I change my order after placing it?",
        a: "Contact us within 2 hours of placing your order and we'll do our best to accommodate changes. After that, orders enter processing and may not be modifiable.",
      },
    ],
  },
  {
    title: "Returns & Refunds",
    icon: RefreshCw,
    items: [
      {
        q: "Do you offer returns?",
        a: "Yes, we offer a 14-day return policy for unopened products in their original packaging. If you're not satisfied with your purchase, please contact our support team.",
      },
      {
        q: "What if my product arrives damaged?",
        a: "We're sorry if that happens! Please contact us within 48 hours of delivery with photos of the damage, and we'll send a replacement right away.",
      },
      {
        q: "How long do refunds take?",
        a: "Refunds are processed within 5-7 business days after we receive your return. The amount will be credited to your original payment method.",
      },
    ],
  },
  {
    title: "Sustainability",
    icon: Package,
    items: [
      {
        q: "How are your products eco-friendly?",
        a: "We upcycle fruit peels that would otherwise go to waste, use recyclable packaging, and avoid harmful chemicals in all our formulations. Our production process is designed to minimize environmental impact.",
      },
      {
        q: "Is your packaging recyclable?",
        a: "Yes! All our packaging is made from recycled materials and is fully recyclable. We also use soy-based inks for printing.",
      },
      {
        q: "Where do your fruit peels come from?",
        a: "We partner with local fruit producers and juice bars to source fruit peels that would otherwise be discarded. This helps reduce food waste while creating beautiful fragrances.",
      },
    ],
  },
];

export default function FAQ() {
  const [activeTab, setActiveTab] = useState("Products");

  return (
    <main className="pt-24">
      <section className="py-12 sm:py-24 bg-linear-to-br from-primary/5 via-background to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <div className="max-w-3xl mx-auto text-center">
              <Badge
                variant="secondary"
                className="inline-flex items-center gap-2 px-4 py-2 mb-4 sm:mb-6"
              >
                <HelpCircle className="w-4 h-4" />
                Help Center
              </Badge>
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6">
                Frequently Asked Questions
              </h1>
              <p className="text-base sm:text-xl text-muted-foreground leading-relaxed">
                Everything you need to know about Blossom fragrances. Can&apos;t find what
                you&apos;re looking for? Feel free to contact us.
              </p>
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="py-12 sm:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs value={activeTab} onValueChange={setActiveTab} className="max-w-3xl mx-auto">
            <div className="hidden md:block mb-8">
              <TabsList className="grid grid-cols-4 h-auto bg-transparent p-0 gap-2 w-full">
                {faqCategories.map((cat) => (
                  <TabsTrigger
                    key={cat.title}
                    value={cat.title}
                    className="gap-2 py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold"
                  >
                    <cat.icon className="w-4 h-4" />
                    {cat.title}
                  </TabsTrigger>
                ))}
              </TabsList>
            </div>
            <div className="md:hidden grid grid-cols-2 gap-3 mb-8">
              {faqCategories.map((cat) => (
                <Button
                  key={cat.title}
                  variant={activeTab === cat.title ? "default" : "outline"}
                  className="flex flex-col gap-2 py-6 h-auto"
                  onClick={() => setActiveTab(cat.title)}
                >
                  <cat.icon className="w-8 h-8" />
                  <span className="text-sm font-bold">{cat.title}</span>
                </Button>
              ))}
            </div>
            {faqCategories.map((category) => (
              <TabsContent key={category.title} value={category.title}>
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3">
                      <Avatar className="w-10 h-10 bg-primary/10">
                        <AvatarFallback className="bg-primary/10">
                          <category.icon className="w-5 h-5 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                      {category.title}
                    </CardTitle>
                    <CardDescription>
                      Browse common questions about {category.title.toLowerCase()}.
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      {category.items.map((item, itemIndex) => (
                        <AccordionItem key={itemIndex} value={`item-${itemIndex}`}>
                          <AccordionTrigger className="font-heading font-medium text-left">
                            <span className="text-2xl font-light">{item.q}</span>
                          </AccordionTrigger>
                          <AccordionContent>
                            <CardDescription className="leading-relaxed font-medium text-lg mb-2">{item.a}</CardDescription>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      <section className="py-24 bg-secondary/30">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <Card className="max-w-2xl mx-auto text-center">
              <CardHeader>
                <CardTitle className="text-3xl sm:text-4xl font-heading font-bold">
                  Still Have Questions?
                </CardTitle>
                <CardDescription className="text-lg">
                  We&apos;re here to help. Reach out to our team and we&apos;ll get back to you
                  within 24 hours.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Button size="lg" className="group" asChild>
                  <Link to="/contact" params={{ id: "message-us" }}>
                    Contact Us
                    <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </Link>
                </Button>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Check, Sparkles, Star, Crown, ArrowRight } from "lucide-react";
import { BlurFade } from "@/components/ui/blur-fade";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import {
  SUBSCRIPTION_PLANS,
  useSubscriptionStore,
  type SubscriptionTier,
  type BillingCycle,
} from "@/store/useSubscriptionStore";

const tierIcons = {
  free: "Free",
  starter: "Star",
  premium: "Sparkles",
  vip: "Crown",
};

const tierColors = {
  free: "bg-muted",
  starter: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  premium: "bg-primary/10 text-primary border-primary/20",
  vip: "bg-gradient-to-r from-amber-500/20 to-purple-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30",
};

const tierBgColors = {
  free: "",
  starter: "hover:border-yellow-500/40",
  premium: "hover:border-primary/40",
  vip: "hover:border-amber-500/50",
};

export default function PricingPage() {
  const [billingCycle, setBillingCycle] = useState<BillingCycle>("monthly");
  const { currentTier, setTier } = useSubscriptionStore();

  const currentPlan = SUBSCRIPTION_PLANS.find((p) => p.id === currentTier);

  const handleSelectPlan = (tier: SubscriptionTier) => {
    if (tier === "free") {
      setTier("free");
    } else {
      setTier(tier);
    }
  };

  const getIconComponent = (iconName: string) => {
    switch (iconName) {
      case "Star":
        return <Star className="w-6 h-6" />;
      case "Sparkles":
        return <Sparkles className="w-6 h-6" />;
      case "Crown":
        return <Crown className="w-6 h-6" />;
      default:
        return null;
    }
  };

  return (
    <main className="pt-24">
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <header className="max-w-3xl mx-auto text-center">
              <Avatar className="w-16 h-16 bg-primary/10 mx-auto mb-4">
                <AvatarFallback className="bg-primary/10">
                  <Sparkles className="w-8 h-8 text-primary" />
                </AvatarFallback>
              </Avatar>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
                Subscription Plans
              </h1>
              <p className="text-muted-foreground text-lg">
                Choose the plan that works for you. Save more with yearly billing.
              </p>
            </header>
          </BlurFade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <Tabs
            value={billingCycle}
            onValueChange={(v) => setBillingCycle(v as BillingCycle)}
            className="max-w-md mx-auto mb-12"
          >
            <TabsList className="grid w-full grid-cols-2">
              <TabsTrigger value="monthly">Monthly</TabsTrigger>
              <TabsTrigger value="yearly">
                Yearly
                <Badge variant="secondary" className="ml-2 text-xs">
                  Save up to 17%
                </Badge>
              </TabsTrigger>
            </TabsList>
          </Tabs>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto">
            {SUBSCRIPTION_PLANS.map((plan, index) => {
              const isCurrentPlan = currentPlan?.id === plan.id;
              const price =
                billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
              const priceDisplay = plan.monthlyPrice === 0 ? "Free" : `€${price}`;
              const period =
                billingCycle === "monthly" ? "/month" : "/year";
              const monthlyEquivalent =
                billingCycle === "yearly"
                  ? `€${(plan.yearlyPrice / 12).toFixed(2)}/mo`
                  : null;

              return (
                <BlurFade key={plan.id} inView delay={index * 0.1}>
                  <Card
                    className={`relative flex flex-col h-full transition-all duration-300 ${
                      isCurrentPlan
                        ? "border-primary ring-2 ring-primary/20"
                        : tierBgColors[plan.id]
                    }`}
                  >
                    {plan.id === "vip" && (
                      <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                        <Badge className="bg-gradient-to-r from-amber-500 to-purple-500 text-white">
                          Most Popular
                        </Badge>
                      </div>
                    )}

                    <CardHeader className="text-center">
                      <div
                        className={`w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center border ${
                          tierColors[plan.id]
                        }`}
                      >
                        {getIconComponent(tierIcons[plan.id])}
                      </div>
                      <CardTitle className="text-2xl font-heading">
                        {plan.name}
                      </CardTitle>
                      <CardDescription>{plan.description}</CardDescription>
                    </CardHeader>

                    <CardContent className="flex-1">
                      <div className="text-center mb-6">
                        <div className="text-4xl font-heading font-bold">
                          {priceDisplay}
                        </div>
                        {plan.monthlyPrice > 0 && (
                          <>
                            <div className="text-sm text-muted-foreground">
                              {period}
                            </div>
                            {monthlyEquivalent && (
                              <div className="text-xs text-muted-foreground mt-1">
                                ({monthlyEquivalent})
                              </div>
                            )}
                          </>
                        )}
                      </div>

                      <Separator className="my-4" />

                      <ul className="space-y-3">
                        {plan.features.map((feature, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <Check className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                            <span className="text-sm text-muted-foreground">
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>

                    <CardFooter>
                      <Button
                        className="w-full"
                        variant={isCurrentPlan ? "default" : "outline"}
                        onClick={() => handleSelectPlan(plan.id)}
                        asChild={isCurrentPlan}
                      >
                        {isCurrentPlan ? (
                          <span className="flex items-center gap-2">
                            Current Plan
                            <ArrowRight className="w-4 h-4" />
                          </span>
                        ) : (
                          <Link to="/checkout">
                            {plan.monthlyPrice === 0
                              ? "Get Started"
                              : "Subscribe"}
                          </Link>
                        )}
                      </Button>
                    </CardFooter>
                  </Card>
                </BlurFade>
              );
            })}
          </div>
        </div>
      </section>

      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-muted-foreground mb-8">
                Everything you need to know about our subscription plans.
              </p>
            </div>

            <div className="max-w-2xl mx-auto space-y-4">
              <FaqItem
                question="Can I cancel my subscription anytime?"
                answer="Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your current billing period."
              />
              <FaqItem
                question="How do discounts apply to my orders?"
                answer="Your discount is automatically applied at checkout. You'll see the reduced price reflected in your cart before payment."
              />
              <FaqItem
                question="What's included in free shipping?"
                answer="Free shipping applies to all standard orders within Greece. Premium and VIP members also get express shipping options."
              />
              <FaqItem
                question="Can I upgrade or downgrade my plan?"
                answer="Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle."
              />
            </div>
          </BlurFade>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-heading font-bold text-foreground mb-4">
                Ready to start saving?
              </h2>
              <p className="text-muted-foreground mb-8">
                Join thousands of members who enjoy exclusive discounts and benefits.
              </p>
              <Button size="lg" asChild>
                <Link to="/checkout">
                  Get Started
                  <ArrowRight className="ml-2 w-4 h-4" />
                </Link>
              </Button>
            </div>
          </BlurFade>
        </div>
      </section>
    </main>
  );
}

function FaqItem({
  question,
  answer,
}: {
  question: string;
  answer: string;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Card className="border-2 border-transparent hover:border-primary/20 transition-colors">
      <button
        className="w-full px-6 py-4 text-left flex items-center justify-between"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="font-heading font-semibold text-lg">{question}</span>
        <ArrowRight
          className={`w-5 h-5 transition-transform ${
            isOpen ? "rotate-90" : ""
          }`}
        />
      </button>
      {isOpen && (
        <CardContent className="pt-0 pb-4 px-6">
          <p className="text-muted-foreground">{answer}</p>
        </CardContent>
      )}
    </Card>
  );
}
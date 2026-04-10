import { jsxs, jsx, Fragment } from "react/jsx-runtime";
import { useState } from "react";
import { Link } from "@tanstack/react-router";
import { Sparkles, Check, ArrowRight, Crown, Star } from "lucide-react";
import { q as useSubscriptionStore, r as SUBSCRIPTION_PLANS, B as BlurFade, A as Avatar, a as AvatarFallback, s as Tabs, t as TabsList, v as TabsTrigger, b as Badge, C as Card, n as CardHeader, o as CardTitle, p as CardDescription, l as CardContent, m as Separator, w as CardFooter, h as Button } from "./router-CtctPOdV.js";
import "class-variance-authority";
import "radix-ui";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
import "zustand";
import "react-dom";
import "zustand/middleware";
import "@hugeicons/react";
import "@hugeicons/core-free-icons";
import "motion/react";
import "next-themes";
import "sonner";
const tierIcons = {
  free: "Free",
  starter: "Star",
  premium: "Sparkles",
  vip: "Crown"
};
const tierColors = {
  free: "bg-muted",
  starter: "bg-yellow-500/10 text-yellow-600 dark:text-yellow-400 border-yellow-500/20",
  premium: "bg-primary/10 text-primary border-primary/20",
  vip: "bg-gradient-to-r from-amber-500/20 to-purple-500/20 text-amber-600 dark:text-amber-400 border-amber-500/30"
};
const tierBgColors = {
  free: "",
  starter: "hover:border-yellow-500/40",
  premium: "hover:border-primary/40",
  vip: "hover:border-amber-500/50"
};
function PricingPage() {
  const [billingCycle, setBillingCycle] = useState("monthly");
  const { currentTier, setTier } = useSubscriptionStore();
  const currentPlan = SUBSCRIPTION_PLANS.find((p) => p.id === currentTier);
  const handleSelectPlan = (tier) => {
    if (tier === "free") {
      setTier("free");
    } else {
      setTier(tier);
    }
  };
  const getIconComponent = (iconName) => {
    switch (iconName) {
      case "Star":
        return /* @__PURE__ */ jsx(Star, { className: "w-6 h-6" });
      case "Sparkles":
        return /* @__PURE__ */ jsx(Sparkles, { className: "w-6 h-6" });
      case "Crown":
        return /* @__PURE__ */ jsx(Crown, { className: "w-6 h-6" });
      default:
        return null;
    }
  };
  return /* @__PURE__ */ jsxs("main", { className: "pt-24", children: [
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("header", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Avatar, { className: "w-16 h-16 bg-primary/10 mx-auto mb-4", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-8 h-8 text-primary" }) }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4", children: "Subscription Plans" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "Choose the plan that works for you. Save more with yearly billing." })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      /* @__PURE__ */ jsx(
        Tabs,
        {
          value: billingCycle,
          onValueChange: (v) => setBillingCycle(v),
          className: "max-w-md mx-auto mb-12",
          children: /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
            /* @__PURE__ */ jsx(TabsTrigger, { value: "monthly", children: "Monthly" }),
            /* @__PURE__ */ jsxs(TabsTrigger, { value: "yearly", children: [
              "Yearly",
              /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "ml-2 text-xs", children: "Save up to 17%" })
            ] })
          ] })
        }
      ),
      /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto", children: SUBSCRIPTION_PLANS.map((plan, index) => {
        const isCurrentPlan = currentPlan?.id === plan.id;
        const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
        const priceDisplay = plan.monthlyPrice === 0 ? "Free" : `€${price}`;
        const period = billingCycle === "monthly" ? "/month" : "/year";
        const monthlyEquivalent = billingCycle === "yearly" ? `€${(plan.yearlyPrice / 12).toFixed(2)}/mo` : null;
        return /* @__PURE__ */ jsx(BlurFade, { inView: true, delay: index * 0.1, children: /* @__PURE__ */ jsxs(
          Card,
          {
            className: `relative flex flex-col h-full transition-all duration-300 ${isCurrentPlan ? "border-primary ring-2 ring-primary/20" : tierBgColors[plan.id]}`,
            children: [
              plan.id === "vip" && /* @__PURE__ */ jsx("div", { className: "absolute -top-3 left-1/2 -translate-x-1/2", children: /* @__PURE__ */ jsx(Badge, { className: "bg-gradient-to-r from-amber-500 to-purple-500 text-white", children: "Most Popular" }) }),
              /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", children: [
                /* @__PURE__ */ jsx(
                  "div",
                  {
                    className: `w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center border ${tierColors[plan.id]}`,
                    children: getIconComponent(tierIcons[plan.id])
                  }
                ),
                /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading", children: plan.name }),
                /* @__PURE__ */ jsx(CardDescription, { children: plan.description })
              ] }),
              /* @__PURE__ */ jsxs(CardContent, { className: "flex-1", children: [
                /* @__PURE__ */ jsxs("div", { className: "text-center mb-6", children: [
                  /* @__PURE__ */ jsx("div", { className: "text-4xl font-heading font-bold", children: priceDisplay }),
                  plan.monthlyPrice > 0 && /* @__PURE__ */ jsxs(Fragment, { children: [
                    /* @__PURE__ */ jsx("div", { className: "text-sm text-muted-foreground", children: period }),
                    monthlyEquivalent && /* @__PURE__ */ jsxs("div", { className: "text-xs text-muted-foreground mt-1", children: [
                      "(",
                      monthlyEquivalent,
                      ")"
                    ] })
                  ] })
                ] }),
                /* @__PURE__ */ jsx(Separator, { className: "my-4" }),
                /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: plan.features.map((feature, i) => /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
                  /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
                  /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: feature })
                ] }, i)) })
              ] }),
              /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(
                Button,
                {
                  className: "w-full",
                  variant: isCurrentPlan ? "default" : "outline",
                  onClick: () => handleSelectPlan(plan.id),
                  asChild: isCurrentPlan,
                  children: isCurrentPlan ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
                    "Current Plan",
                    /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
                  ] }) : /* @__PURE__ */ jsx(Link, { to: "/checkout", children: plan.monthlyPrice === 0 ? "Get Started" : "Subscribe" })
                }
              ) })
            ]
          }
        ) }, plan.id);
      }) })
    ] }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(BlurFade, { inView: true, children: [
      /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
        /* @__PURE__ */ jsx("h2", { className: "text-3xl font-heading font-bold text-foreground mb-4", children: "Frequently Asked Questions" }),
        /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Everything you need to know about our subscription plans." })
      ] }),
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto space-y-4", children: [
        /* @__PURE__ */ jsx(
          FaqItem,
          {
            question: "Can I cancel my subscription anytime?",
            answer: "Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your current billing period."
          }
        ),
        /* @__PURE__ */ jsx(
          FaqItem,
          {
            question: "How do discounts apply to my orders?",
            answer: "Your discount is automatically applied at checkout. You'll see the reduced price reflected in your cart before payment."
          }
        ),
        /* @__PURE__ */ jsx(
          FaqItem,
          {
            question: "What's included in free shipping?",
            answer: "Free shipping applies to all standard orders within Greece. Premium and VIP members also get express shipping options."
          }
        ),
        /* @__PURE__ */ jsx(
          FaqItem,
          {
            question: "Can I upgrade or downgrade my plan?",
            answer: "Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle."
          }
        )
      ] })
    ] }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-heading font-bold text-foreground mb-4", children: "Ready to start saving?" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Join thousands of members who enjoy exclusive discounts and benefits." }),
      /* @__PURE__ */ jsx(Button, { size: "lg", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/checkout", children: [
        "Get Started",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
      ] }) })
    ] }) }) }) })
  ] });
}
function FaqItem({
  question,
  answer
}) {
  const [isOpen, setIsOpen] = useState(false);
  return /* @__PURE__ */ jsxs(Card, { className: "border-2 border-transparent hover:border-primary/20 transition-colors", children: [
    /* @__PURE__ */ jsxs(
      "button",
      {
        className: "w-full px-6 py-4 text-left flex items-center justify-between",
        onClick: () => setIsOpen(!isOpen),
        children: [
          /* @__PURE__ */ jsx("span", { className: "font-heading font-semibold text-lg", children: question }),
          /* @__PURE__ */ jsx(
            ArrowRight,
            {
              className: `w-5 h-5 transition-transform ${isOpen ? "rotate-90" : ""}`
            }
          )
        ]
      }
    ),
    isOpen && /* @__PURE__ */ jsx(CardContent, { className: "pt-0 pb-4 px-6", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: answer }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsx(PricingPage, {});
export {
  SplitComponent as component
};

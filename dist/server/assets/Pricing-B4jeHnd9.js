import { jsx, jsxs, Fragment } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { useState } from "react";
import { ArrowRight, Sparkles, Check, Crown, Star } from "lucide-react";
import { q as useSubscriptionStore, F as SUBSCRIPTION_PLANS, h as BlurFade, C as Card, B as Badge, m as CardHeader, n as CardTitle, p as CardDescription, o as CardContent, l as Separator, G as CardFooter, f as Button, A as Avatar, g as AvatarFallback, Q as TabsTrigger, O as TabsList, N as Tabs } from "./router-B2FLevz_.js";
import { S as SectionWrapper } from "./section-wrapper-DwWpGa6g.js";
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
function PricingPage(t0) {
  const $ = c(28);
  const {
    showHeader: t1
  } = t0;
  const showHeader = t1 === void 0 ? true : t1;
  const [billingCycle, setBillingCycle] = useState("monthly");
  const {
    currentTier,
    setTier
  } = useSubscriptionStore();
  let t2;
  if ($[0] !== currentTier) {
    t2 = SUBSCRIPTION_PLANS.find((p) => p.id === currentTier);
    $[0] = currentTier;
    $[1] = t2;
  } else {
    t2 = $[1];
  }
  const currentPlan = t2;
  let t3;
  if ($[2] !== setTier) {
    t3 = (tier) => {
      if (tier === "free") {
        setTier("free");
      } else {
        setTier(tier);
      }
    };
    $[2] = setTier;
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  const handleSelectPlan = t3;
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = (v) => {
      setBillingCycle(v);
    };
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  const handleBillingCycleChange = t4;
  const getIconComponent = _temp;
  let t5;
  if ($[5] !== showHeader) {
    t5 = showHeader && /* @__PURE__ */ jsx(Fragment, { children: /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("header", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Avatar, { className: "w-16 h-16 bg-primary/10 mx-auto mb-4", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(Sparkles, { className: "w-8 h-8 text-primary" }) }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4", children: "Subscription Plans" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground text-lg", children: "Choose the plan that works for you. Save more with yearly billing." })
    ] }) }) }) }) });
    $[5] = showHeader;
    $[6] = t5;
  } else {
    t5 = $[6];
  }
  let t6;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx(TabsTrigger, { value: "monthly", children: "Monthly" });
    $[7] = t6;
  } else {
    t6 = $[7];
  }
  let t7;
  if ($[8] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxs(TabsList, { className: "grid w-full grid-cols-2", children: [
      t6,
      /* @__PURE__ */ jsxs(TabsTrigger, { value: "yearly", children: [
        "Yearly",
        /* @__PURE__ */ jsx(Badge, { variant: "secondary", className: "ml-2 text-xs", children: "Save up to 17%" })
      ] })
    ] });
    $[8] = t7;
  } else {
    t7 = $[8];
  }
  let t8;
  if ($[9] !== billingCycle) {
    t8 = /* @__PURE__ */ jsx(Tabs, { value: billingCycle, onValueChange: handleBillingCycleChange, className: "max-w-md mx-auto mb-12", children: t7 });
    $[9] = billingCycle;
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  let t9;
  if ($[11] !== billingCycle || $[12] !== currentPlan?.id || $[13] !== handleSelectPlan) {
    t9 = SUBSCRIPTION_PLANS.map((plan, index) => {
      const isCurrentPlan = currentPlan?.id === plan.id;
      const price = billingCycle === "monthly" ? plan.monthlyPrice : plan.yearlyPrice;
      const priceDisplay = plan.monthlyPrice === 0 ? "Free" : `€${price}`;
      const period = billingCycle === "monthly" ? "/month" : "/year";
      const monthlyEquivalent = billingCycle === "yearly" ? `€${(plan.yearlyPrice / 12).toFixed(2)}/mo` : null;
      return /* @__PURE__ */ jsx(BlurFade, { inView: true, delay: index * 0.1, children: /* @__PURE__ */ jsxs(Card, { className: `relative flex flex-col h-full transition-all duration-300 pt-12 pb-8 mt-8 overflow-visible ${isCurrentPlan ? "border-primary ring-2 ring-primary/20" : tierBgColors[plan.id]}`, children: [
        plan.id === "vip" && /* @__PURE__ */ jsx("div", { className: "absolute -top-2 left-1/2 -translate-x-1/2 z-50 animate-bounce", children: /* @__PURE__ */ jsx(Badge, { className: "bg-gradient-to-r from-amber-500 to-purple-500 text-white whitespace-nowrap", children: "Most Popular" }) }),
        /* @__PURE__ */ jsxs(CardHeader, { className: "text-center", children: [
          /* @__PURE__ */ jsx("div", { className: `w-12 h-12 rounded-full mx-auto mb-4 flex items-center justify-center border ${tierColors[plan.id]}`, children: getIconComponent(tierIcons[plan.id]) }),
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
          /* @__PURE__ */ jsx("ul", { className: "space-y-3", children: plan.features.map(_temp2) })
        ] }),
        /* @__PURE__ */ jsx(CardFooter, { children: /* @__PURE__ */ jsx(Button, { className: "w-full", variant: isCurrentPlan ? "default" : "outline", onClick: () => handleSelectPlan(plan.id), children: isCurrentPlan ? /* @__PURE__ */ jsxs("span", { className: "flex items-center gap-2", children: [
          "Current Plan",
          /* @__PURE__ */ jsx(ArrowRight, { className: "w-4 h-4" })
        ] }) : plan.monthlyPrice === 0 ? "Select Plan" : "Subscribe" }) })
      ] }) }, plan.id);
    });
    $[11] = billingCycle;
    $[12] = currentPlan?.id;
    $[13] = handleSelectPlan;
    $[14] = t9;
  } else {
    t9 = $[14];
  }
  let t10;
  if ($[15] !== t9) {
    t10 = /* @__PURE__ */ jsx(SectionWrapper, { loading: false, error: null, loadingType: "pricing", loadingCount: 4, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl mx-auto", children: t9 }) });
    $[15] = t9;
    $[16] = t10;
  } else {
    t10 = $[16];
  }
  let t11;
  if ($[17] !== t10 || $[18] !== t8) {
    t11 = /* @__PURE__ */ jsx("section", { className: "py-16", id: "pricing-plans", children: /* @__PURE__ */ jsxs("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: [
      t8,
      t10
    ] }) });
    $[17] = t10;
    $[18] = t8;
    $[19] = t11;
  } else {
    t11 = $[19];
  }
  let t12;
  if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx("h2", { className: "text-3xl font-heading font-bold text-foreground mb-4", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Everything you need to know about our subscription plans." })
    ] });
    $[20] = t12;
  } else {
    t12 = $[20];
  }
  let t13;
  if ($[21] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(BlurFade, { inView: true, children: [
      t12,
      /* @__PURE__ */ jsxs("div", { className: "max-w-2xl mx-auto space-y-4", children: [
        /* @__PURE__ */ jsx(FaqItem, { question: "Can I cancel my subscription anytime?", answer: "Yes, you can cancel your subscription at any time. Your benefits will continue until the end of your current billing period." }),
        /* @__PURE__ */ jsx(FaqItem, { question: "How do discounts apply to my orders?", answer: "Your discount is automatically applied at checkout. You'll see the reduced price reflected in your cart before payment." }),
        /* @__PURE__ */ jsx(FaqItem, { question: "What's included in free shipping?", answer: "Free shipping applies to all standard orders within Greece. Premium and VIP members also get express shipping options." }),
        /* @__PURE__ */ jsx(FaqItem, { question: "Can I upgrade or downgrade my plan?", answer: "Absolutely! You can change your plan at any time. Upgrades take effect immediately, and downgrades apply at the start of your next billing cycle." })
      ] })
    ] }) }) });
    $[21] = t13;
  } else {
    t13 = $[21];
  }
  let t14;
  let t15;
  if ($[22] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ jsx("h2", { className: "text-3xl font-heading font-bold text-foreground mb-4", children: "Ready to start saving?" });
    t15 = /* @__PURE__ */ jsx("p", { className: "text-muted-foreground mb-8", children: "Join thousands of members who enjoy exclusive discounts and benefits." });
    $[22] = t14;
    $[23] = t15;
  } else {
    t14 = $[22];
    t15 = $[23];
  }
  let t16;
  if ($[24] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t16 = /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      t14,
      t15,
      /* @__PURE__ */ jsxs(Button, { size: "lg", onClick: _temp3, children: [
        "View Plans",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4" })
      ] })
    ] }) }) }) });
    $[24] = t16;
  } else {
    t16 = $[24];
  }
  let t17;
  if ($[25] !== t11 || $[26] !== t5) {
    t17 = /* @__PURE__ */ jsxs("div", { children: [
      t5,
      t11,
      t13,
      t16
    ] });
    $[25] = t11;
    $[26] = t5;
    $[27] = t17;
  } else {
    t17 = $[27];
  }
  return t17;
}
function _temp3() {
  return document.getElementById("pricing-plans")?.scrollIntoView({
    behavior: "smooth"
  });
}
function _temp2(feature, i) {
  return /* @__PURE__ */ jsxs("li", { className: "flex items-start gap-2", children: [
    /* @__PURE__ */ jsx(Check, { className: "w-5 h-5 text-primary shrink-0 mt-0.5" }),
    /* @__PURE__ */ jsx("span", { className: "text-sm text-muted-foreground", children: feature })
  ] }, i);
}
function _temp(iconName) {
  switch (iconName) {
    case "Star": {
      return /* @__PURE__ */ jsx(Star, { className: "w-6 h-6" });
    }
    case "Sparkles": {
      return /* @__PURE__ */ jsx(Sparkles, { className: "w-6 h-6" });
    }
    case "Crown": {
      return /* @__PURE__ */ jsx(Crown, { className: "w-6 h-6" });
    }
    default: {
      return null;
    }
  }
}
function FaqItem(t0) {
  const $ = c(16);
  const {
    question,
    answer
  } = t0;
  const [isOpen, setIsOpen] = useState(false);
  let t1;
  if ($[0] !== isOpen) {
    t1 = () => setIsOpen(!isOpen);
    $[0] = isOpen;
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== question) {
    t2 = /* @__PURE__ */ jsx("span", { className: "font-heading font-semibold text-lg", children: question });
    $[2] = question;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  const t3 = `w-5 h-5 transition-transform ${isOpen ? "rotate-90" : ""}`;
  let t4;
  if ($[4] !== t3) {
    t4 = /* @__PURE__ */ jsx(ArrowRight, { className: t3 });
    $[4] = t3;
    $[5] = t4;
  } else {
    t4 = $[5];
  }
  let t5;
  if ($[6] !== t1 || $[7] !== t2 || $[8] !== t4) {
    t5 = /* @__PURE__ */ jsxs("button", { className: "w-full px-6 py-4 text-left flex items-center justify-between", onClick: t1, children: [
      t2,
      t4
    ] });
    $[6] = t1;
    $[7] = t2;
    $[8] = t4;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  let t6;
  if ($[10] !== answer || $[11] !== isOpen) {
    t6 = isOpen && /* @__PURE__ */ jsx(CardContent, { className: "pt-0 pb-4 px-6", children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: answer }) });
    $[10] = answer;
    $[11] = isOpen;
    $[12] = t6;
  } else {
    t6 = $[12];
  }
  let t7;
  if ($[13] !== t5 || $[14] !== t6) {
    t7 = /* @__PURE__ */ jsxs(Card, { className: "border-2 border-transparent hover:border-primary/20 transition-colors", children: [
      t5,
      t6
    ] });
    $[13] = t5;
    $[14] = t6;
    $[15] = t7;
  } else {
    t7 = $[15];
  }
  return t7;
}
export {
  PricingPage as P
};

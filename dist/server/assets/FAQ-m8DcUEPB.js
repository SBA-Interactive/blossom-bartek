import { jsx, jsxs } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { O as TabsList, f as Button, h as BlurFade, B as Badge, N as Tabs, m as CardHeader, n as CardTitle, p as CardDescription, C as Card, o as CardContent, Q as TabsTrigger, R as TabsContent, A as Avatar, g as AvatarFallback } from "./router-B2FLevz_.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-DGwH1LTo.js";
import { Link } from "@tanstack/react-router";
import { Leaf, Truck, RefreshCw, Package, HelpCircle, ArrowRight } from "lucide-react";
import { useState } from "react";
const faqCategories = [{
  title: "Products",
  icon: Leaf,
  items: [{
    q: "Are your fragrances safe for sensitive skin?",
    a: "Yes! All Blossom fragrances are made from natural fruit peels and botanical extracts. They're free from harsh chemicals and suitable for sensitive skin. We recommend a patch test for those with very sensitive skin."
  }, {
    q: "What age are your products suitable for?",
    a: "Our fragrances are suitable for ages 10 and up. The natural ingredients make them gentle enough for younger users while still being sophisticated for adults."
  }, {
    q: "How long do the fragrances last?",
    a: "Our natural fragrances typically last 4-6 hours, depending on your skin type and activity level. The scent profile evolves throughout the day, starting fresh and settling into softer notes."
  }, {
    q: "What ingredients do you use?",
    a: "We use upcycled fruit peels (orange, lemon, grapefruit, etc.), natural botanical extracts, and plant-based carrier oils. All ingredients are listed on each product page and on the packaging."
  }]
}, {
  title: "Orders & Shipping",
  icon: Truck,
  items: [{
    q: "How long does shipping take?",
    a: "Standard shipping takes 3-5 business days. Express shipping is available for 1-2 business days. Local delivery within Athens is free for orders over €50."
  }, {
    q: "Do you ship internationally?",
    a: "Currently we ship within Greece. International shipping is coming soon! Sign up for our newsletter to be the first to know."
  }, {
    q: "How do I track my order?",
    a: "You'll receive a tracking link via email once your order ships. You can also check your order status by contacting our support team."
  }, {
    q: "Can I change my order after placing it?",
    a: "Contact us within 2 hours of placing your order and we'll do our best to accommodate changes. After that, orders enter processing and may not be modifiable."
  }]
}, {
  title: "Returns & Refunds",
  icon: RefreshCw,
  items: [{
    q: "Do you offer returns?",
    a: "Yes, we offer a 14-day return policy for unopened products in their original packaging. If you're not satisfied with your purchase, please contact our support team."
  }, {
    q: "What if my product arrives damaged?",
    a: "We're sorry if that happens! Please contact us within 48 hours of delivery with photos of the damage, and we'll send a replacement right away."
  }, {
    q: "How long do refunds take?",
    a: "Refunds are processed within 5-7 business days after we receive your return. The amount will be credited to your original payment method."
  }]
}, {
  title: "Sustainability",
  icon: Package,
  items: [{
    q: "How are your products eco-friendly?",
    a: "We upcycle fruit peels that would otherwise go to waste, use recyclable packaging, and avoid harmful chemicals in all our formulations. Our production process is designed to minimize environmental impact."
  }, {
    q: "Is your packaging recyclable?",
    a: "Yes! All our packaging is made from recycled materials and is fully recyclable. We also use soy-based inks for printing."
  }, {
    q: "Where do your fruit peels come from?",
    a: "We partner with local fruit producers and juice bars to source fruit peels that would otherwise be discarded. This helps reduce food waste while creating beautiful fragrances."
  }]
}];
function FAQ() {
  const $ = c(15);
  const [activeTab, setActiveTab] = useState("Products");
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-24 bg-linear-to-br from-primary/5 via-background to-secondary/10", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "inline-flex items-center gap-2 px-4 py-2 mb-4 sm:mb-6", children: [
        /* @__PURE__ */ jsx(HelpCircle, { className: "w-4 h-4" }),
        "Help Center"
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-foreground mb-4 sm:mb-6", children: "Frequently Asked Questions" }),
      /* @__PURE__ */ jsx("p", { className: "text-base sm:text-xl text-muted-foreground leading-relaxed", children: "Everything you need to know about Blossom fragrances. Can't find what you're looking for? Feel free to contact us." })
    ] }) }) }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx("div", { className: "hidden md:block mb-8", children: /* @__PURE__ */ jsx(TabsList, { className: "grid grid-cols-4 h-auto bg-transparent p-0 gap-2 w-full", children: faqCategories.map(_temp) }) });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] !== activeTab) {
    t2 = faqCategories.map((cat_0) => /* @__PURE__ */ jsxs(Button, { variant: activeTab === cat_0.title ? "default" : "outline", className: "flex flex-col gap-2 py-6 h-auto", onClick: () => setActiveTab(cat_0.title), children: [
      /* @__PURE__ */ jsx(cat_0.icon, { className: "w-8 h-8" }),
      /* @__PURE__ */ jsx("span", { className: "text-sm font-bold", children: cat_0.title })
    ] }, cat_0.title));
    $[2] = activeTab;
    $[3] = t2;
  } else {
    t2 = $[3];
  }
  let t3;
  if ($[4] !== t2) {
    t3 = /* @__PURE__ */ jsx("div", { className: "md:hidden grid grid-cols-2 gap-3 mb-8", children: t2 });
    $[4] = t2;
    $[5] = t3;
  } else {
    t3 = $[5];
  }
  let t4;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = faqCategories.map(_temp3);
    $[6] = t4;
  } else {
    t4 = $[6];
  }
  let t5;
  if ($[7] !== activeTab || $[8] !== t3) {
    t5 = /* @__PURE__ */ jsx("section", { className: "py-12 sm:py-24", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs(Tabs, { value: activeTab, onValueChange: setActiveTab, className: "max-w-3xl mx-auto", children: [
      t1,
      t3,
      t4
    ] }) }) });
    $[7] = activeTab;
    $[8] = t3;
    $[9] = t5;
  } else {
    t5 = $[9];
  }
  let t6;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-3xl sm:text-4xl font-heading font-bold", children: "Still Have Questions?" }),
      /* @__PURE__ */ jsx(CardDescription, { className: "text-lg", children: "We're here to help. Reach out to our team and we'll get back to you within 24 hours." })
    ] });
    $[10] = t6;
  } else {
    t6 = $[10];
  }
  let t7;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = {
      id: "message-us"
    };
    $[11] = t7;
  } else {
    t7 = $[11];
  }
  let t8;
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsx("section", { className: "py-24 bg-secondary/30", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "max-w-2xl mx-auto text-center", children: [
      t6,
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Button, { size: "lg", className: "group", asChild: true, children: /* @__PURE__ */ jsxs(Link, { to: "/contact", params: t7, children: [
        "Contact Us",
        /* @__PURE__ */ jsx(ArrowRight, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })
      ] }) }) })
    ] }) }) }) });
    $[12] = t8;
  } else {
    t8 = $[12];
  }
  let t9;
  if ($[13] !== t5) {
    t9 = /* @__PURE__ */ jsxs("main", { className: "pt-24", children: [
      t0,
      t5,
      t8
    ] });
    $[13] = t5;
    $[14] = t9;
  } else {
    t9 = $[14];
  }
  return t9;
}
function _temp3(category) {
  return /* @__PURE__ */ jsx(TabsContent, { value: category.title, children: /* @__PURE__ */ jsxs(Card, { children: [
    /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3", children: [
        /* @__PURE__ */ jsx(Avatar, { className: "w-10 h-10 bg-primary/10", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(category.icon, { className: "w-5 h-5 text-primary" }) }) }),
        category.title
      ] }),
      /* @__PURE__ */ jsxs(CardDescription, { children: [
        "Browse common questions about ",
        category.title.toLowerCase(),
        "."
      ] })
    ] }),
    /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, children: category.items.map(_temp2) }) })
  ] }) }, category.title);
}
function _temp2(item, itemIndex) {
  return /* @__PURE__ */ jsxs(AccordionItem, { value: `item-${itemIndex}`, children: [
    /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-heading font-medium text-left", children: /* @__PURE__ */ jsx("span", { className: "text-2xl font-light", children: item.q }) }),
    /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed font-medium text-lg mb-2", children: item.a }) })
  ] }, itemIndex);
}
function _temp(cat) {
  return /* @__PURE__ */ jsxs(TabsTrigger, { value: cat.title, className: "gap-2 py-3 px-4 data-[state=active]:bg-primary data-[state=active]:text-primary-foreground font-semibold", children: [
    /* @__PURE__ */ jsx(cat.icon, { className: "w-4 h-4" }),
    cat.title
  ] }, cat.title);
}
export {
  FAQ as F
};

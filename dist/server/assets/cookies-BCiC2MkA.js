import { jsx, jsxs } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { h as BlurFade, A as Avatar, g as AvatarFallback, m as CardHeader, n as CardTitle, C as Card, o as CardContent, p as CardDescription, l as Separator, B as Badge } from "./router-DBR8M-aC.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-Bu6cHi6v.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion--8wPrElP.js";
import { Cookie } from "lucide-react";
import { S as SectionWrapper } from "./section-wrapper-D1EfZ7on.js";
import "@tanstack/react-router";
import "class-variance-authority";
import "radix-ui";
import "clsx";
import "tailwind-merge";
import "@radix-ui/react-tooltip";
import "zustand";
import "react";
import "react-dom";
import "zustand/middleware";
import "@hugeicons/react";
import "@hugeicons/core-free-icons";
import "motion/react";
import "next-themes";
import "sonner";
const cookieTypes = [{
  name: "Essential Cookies",
  required: true,
  description: "These cookies are necessary for the website to function. They enable basic features like page navigation, shopping cart functionality, and secure areas of the website. The website cannot function properly without these cookies.",
  examples: [{
    name: "session_id",
    purpose: "Maintains your session while browsing",
    duration: "Session"
  }, {
    name: "cookie-consent",
    purpose: "Stores your cookie preferences",
    duration: "1 year"
  }, {
    name: "csrf_token",
    purpose: "Security token for form submissions",
    duration: "Session"
  }]
}, {
  name: "Functional Cookies",
  required: false,
  description: "These cookies enable enhanced functionality and personalization, such as remembering your language preference and recently viewed products. If you do not allow these cookies, some features may not work properly.",
  examples: [{
    name: "language",
    purpose: "Remembers your language choice",
    duration: "1 year"
  }, {
    name: "recently_viewed",
    purpose: "Shows recently browsed products",
    duration: "30 days"
  }]
}, {
  name: "Analytics Cookies",
  required: false,
  description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and your experience.",
  examples: [{
    name: "_analytics_id",
    purpose: "Anonymous visitor identification",
    duration: "1 year"
  }, {
    name: "_page_views",
    purpose: "Counts page views anonymously",
    duration: "30 days"
  }]
}];
function CookiesPage() {
  const $ = c(12);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("header", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Avatar, { className: "w-16 h-16 bg-primary/10 mx-auto mb-4", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(Cookie, { className: "w-8 h-8 text-primary" }) }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4", children: "Cookie Policy" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Last updated: March 2026" })
    ] }) }) }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "What Are Cookies?" }) });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxs(Card, { children: [
      t1,
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed", children: "Cookies are small text files placed on your device when you visit a website. They help the website remember your preferences and improve your experience. This policy explains what cookies we use and why." }) })
    ] });
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "How We Use Cookies" }) });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxs(Card, { children: [
      t3,
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed", children: "Blossom uses cookies to keep the website working properly, remember your preferences, understand how you use our website, and improve your experience. We do not use cookies for advertising or to sell your data to third parties." }) })
    ] });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, children: cookieTypes.map(_temp2) });
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "Managing Cookies" }) });
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  let t7;
  let t8;
  if ($[7] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsxs(Card, { children: [
      t6,
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed", children: "You can manage your cookie preferences through our cookie banner that appears when you first visit our website. You can also control cookies through your browser settings. Please note that disabling essential cookies may prevent the website from functioning properly." }) })
    ] });
    t8 = /* @__PURE__ */ jsx(Separator, {});
    $[7] = t7;
    $[8] = t8;
  } else {
    t7 = $[7];
    t8 = $[8];
  }
  let t9;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "Contact" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Questions about our cookie policy? Contact us at:" })
    ] });
    $[9] = t9;
  } else {
    t9 = $[9];
  }
  let t10;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ jsx("br", {});
    $[10] = t10;
  } else {
    t10 = $[10];
  }
  let t11;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsx("main", { className: "pt-24", children: /* @__PURE__ */ jsxs(SectionWrapper, { loading: false, error: null, children: [
      t0,
      /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8", children: [
        t2,
        t4,
        t5,
        t7,
        t8,
        /* @__PURE__ */ jsxs(Card, { children: [
          t9,
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("address", { className: "text-muted-foreground not-italic leading-relaxed", children: [
            "Blossom",
            t10,
            "Email: privacy@blossom.com",
            /* @__PURE__ */ jsx("br", {}),
            "Athens, Greece"
          ] }) })
        ] })
      ] }) })
    ] }) });
    $[11] = t11;
  } else {
    t11 = $[11];
  }
  return t11;
}
function _temp2(type, index) {
  return /* @__PURE__ */ jsxs(AccordionItem, { value: `cookie-${index}`, children: [
    /* @__PURE__ */ jsx(AccordionTrigger, { children: /* @__PURE__ */ jsxs("div", { className: "flex items-center gap-3", children: [
      /* @__PURE__ */ jsx("span", { className: "font-heading font-semibold text-card-foreground", children: type.name }),
      /* @__PURE__ */ jsx(Badge, { variant: type.required ? "default" : "secondary", children: type.required ? "Required" : "Optional" })
    ] }) }),
    /* @__PURE__ */ jsxs(AccordionContent, { children: [
      /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed mb-4", children: type.description }),
      /* @__PURE__ */ jsxs(Table, { children: [
        /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
          /* @__PURE__ */ jsx(TableHead, { children: "Cookie" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Purpose" }),
          /* @__PURE__ */ jsx(TableHead, { children: "Duration" })
        ] }) }),
        /* @__PURE__ */ jsx(TableBody, { children: type.examples.map(_temp) })
      ] })
    ] })
  ] }, index);
}
function _temp(cookie, i) {
  return /* @__PURE__ */ jsxs(TableRow, { children: [
    /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-xs text-muted-foreground", children: cookie.name }),
    /* @__PURE__ */ jsx(TableCell, { className: "text-muted-foreground", children: cookie.purpose }),
    /* @__PURE__ */ jsx(TableCell, { className: "text-muted-foreground", children: cookie.duration })
  ] }, i);
}
const SplitComponent = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(CookiesPage, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  SplitComponent as component
};

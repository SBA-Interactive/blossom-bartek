import { jsxs, jsx } from "react/jsx-runtime";
import { B as BlurFade, A as Avatar, a as AvatarFallback, C as Card, n as CardHeader, o as CardTitle, l as CardContent, p as CardDescription, b as Badge, m as Separator } from "./router-CtctPOdV.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-zv1c6Gj2.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-6YEcb7e6.js";
import { Cookie } from "lucide-react";
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
const cookieTypes = [
  {
    name: "Essential Cookies",
    required: true,
    description: "These cookies are necessary for the website to function. They enable basic features like page navigation, shopping cart functionality, and secure areas of the website. The website cannot function properly without these cookies.",
    examples: [
      { name: "session_id", purpose: "Maintains your session while browsing", duration: "Session" },
      { name: "cookie-consent", purpose: "Stores your cookie preferences", duration: "1 year" },
      { name: "csrf_token", purpose: "Security token for form submissions", duration: "Session" }
    ]
  },
  {
    name: "Functional Cookies",
    required: false,
    description: "These cookies enable enhanced functionality and personalization, such as remembering your language preference and recently viewed products. If you do not allow these cookies, some features may not work properly.",
    examples: [
      { name: "language", purpose: "Remembers your language choice", duration: "1 year" },
      { name: "recently_viewed", purpose: "Shows recently browsed products", duration: "30 days" }
    ]
  },
  {
    name: "Analytics Cookies",
    required: false,
    description: "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and your experience.",
    examples: [
      { name: "_analytics_id", purpose: "Anonymous visitor identification", duration: "1 year" },
      { name: "_page_views", purpose: "Counts page views anonymously", duration: "30 days" }
    ]
  }
];
function CookiesPage() {
  return /* @__PURE__ */ jsxs("main", { className: "pt-24", children: [
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("header", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Avatar, { className: "w-16 h-16 bg-primary/10 mx-auto mb-4", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(Cookie, { className: "w-8 h-8 text-primary" }) }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4", children: "Cookie Policy" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Last updated: March 2026" })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8", children: [
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "What Are Cookies?" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed", children: "Cookies are small text files placed on your device when you visit a website. They help the website remember your preferences and improve your experience. This policy explains what cookies we use and why." }) })
      ] }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "How We Use Cookies" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed", children: "Blossom uses cookies to keep the website working properly, remember your preferences, understand how you use our website, and improve your experience. We do not use cookies for advertising or to sell your data to third parties." }) })
      ] }),
      /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, children: cookieTypes.map((type, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `cookie-${index}`, children: [
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
            /* @__PURE__ */ jsx(TableBody, { children: type.examples.map((cookie, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
              /* @__PURE__ */ jsx(TableCell, { className: "font-mono text-xs text-muted-foreground", children: cookie.name }),
              /* @__PURE__ */ jsx(TableCell, { className: "text-muted-foreground", children: cookie.purpose }),
              /* @__PURE__ */ jsx(TableCell, { className: "text-muted-foreground", children: cookie.duration })
            ] }, i)) })
          ] })
        ] })
      ] }, index)) }),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "Managing Cookies" }) }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed", children: "You can manage your cookie preferences through our cookie banner that appears when you first visit our website. You can also control cookies through your browser settings. Please note that disabling essential cookies may prevent the website from functioning properly." }) })
      ] }),
      /* @__PURE__ */ jsx(Separator, {}),
      /* @__PURE__ */ jsxs(Card, { children: [
        /* @__PURE__ */ jsxs(CardHeader, { children: [
          /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "Contact" }),
          /* @__PURE__ */ jsx(CardDescription, { children: "Questions about our cookie policy? Contact us at:" })
        ] }),
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("address", { className: "text-muted-foreground not-italic leading-relaxed", children: [
          "Blossom",
          /* @__PURE__ */ jsx("br", {}),
          "Email: privacy@blossom.com",
          /* @__PURE__ */ jsx("br", {}),
          "Athens, Greece"
        ] }) })
      ] })
    ] }) })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsx(CookiesPage, {});
export {
  SplitComponent as component
};

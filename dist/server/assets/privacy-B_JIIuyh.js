import { jsxs, jsx } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { C as Card, o as CardContent, h as BlurFade, A as Avatar, g as AvatarFallback, m as CardHeader, n as CardTitle, p as CardDescription, l as Separator } from "./router-DBR8M-aC.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion--8wPrElP.js";
import { Shield } from "lucide-react";
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
const sections = [{
  id: "1",
  title: "Information We Collect",
  content: "When you visit our website, we collect your IP address, browser type, device information, and pages visited. When you place an order, we collect your name, email, shipping address, and payment details. When you subscribe to our newsletter, we collect your email address."
}, {
  id: "2",
  title: "How We Use Your Information",
  content: "We use your information to process and ship orders, send order confirmations and updates, respond to your inquiries, send marketing emails (only with your consent), and improve our website and services."
}, {
  id: "3",
  title: "Cookies",
  content: "We use essential cookies to ensure our website functions properly. These include session cookies for shopping cart functionality and security cookies for form submissions. We do not use tracking or advertising cookies at this time. You can manage cookie preferences through our cookie banner."
}, {
  id: "4",
  title: "Data Sharing",
  content: "We do not sell your personal data. We may share your information with payment processors to complete transactions, shipping providers to deliver orders, and analytics services to understand website usage. All third parties are required to protect your data."
}, {
  id: "5",
  title: "Your Rights (GDPR)",
  content: "Under GDPR, you have the right to access your personal data, request correction of inaccurate data, request deletion of your data, object to data processing, and request data portability. To exercise these rights, contact us at privacy@blossom.com."
}, {
  id: "6",
  title: "Data Retention",
  content: "We retain order data for 5 years for tax and accounting purposes. Marketing data is retained until you unsubscribe. Server logs are retained for 30 days."
}];
function PrivacyPage() {
  const $ = c(7);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("header", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Avatar, { className: "w-16 h-16 bg-primary/10 mx-auto mb-4", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(Shield, { className: "w-8 h-8 text-primary" }) }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4", children: "Privacy Policy" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Last updated: March 2026" })
    ] }) }) }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { children: "Privacy Overview" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "Browse our privacy policy sections below. Click any section to expand." })
    ] });
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  let t2;
  let t3;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = /* @__PURE__ */ jsxs(Card, { className: "mb-8", children: [
      t1,
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, children: sections.map(_temp) }) })
    ] });
    t3 = /* @__PURE__ */ jsx(Separator, { className: "my-8" });
    $[2] = t2;
    $[3] = t3;
  } else {
    t2 = $[2];
    t3 = $[3];
  }
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsxs(CardHeader, { children: [
      /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "7. Contact Us" }),
      /* @__PURE__ */ jsx(CardDescription, { children: "If you have questions about this privacy policy or your personal data, contact us at:" })
    ] });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx("br", {});
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t6 = /* @__PURE__ */ jsx("main", { className: "pt-24", children: /* @__PURE__ */ jsxs(SectionWrapper, { loading: false, error: null, children: [
      t0,
      /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        t2,
        t3,
        /* @__PURE__ */ jsxs(Card, { children: [
          t4,
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("address", { className: "text-muted-foreground not-italic leading-relaxed", children: [
            "Blossom",
            t5,
            "Email: privacy@blossom.com",
            /* @__PURE__ */ jsx("br", {}),
            "Athens, Greece"
          ] }) })
        ] })
      ] }) })
    ] }) });
    $[6] = t6;
  } else {
    t6 = $[6];
  }
  return t6;
}
function _temp(s) {
  return /* @__PURE__ */ jsxs(AccordionItem, { value: s.id, children: [
    /* @__PURE__ */ jsxs(AccordionTrigger, { className: "font-heading font-bold", children: [
      s.id,
      ". ",
      s.title
    ] }),
    /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed text-base", children: s.content }) })
  ] }, s.id);
}
const SplitComponent = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(PrivacyPage, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  SplitComponent as component
};

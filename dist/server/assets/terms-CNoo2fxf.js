import { jsx, jsxs } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { S as ScrollArea, h as BlurFade, A as Avatar, g as AvatarFallback, l as Separator, m as CardHeader, n as CardTitle, C as Card, o as CardContent } from "./router-p6p1R6bc.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-CBkDO8jU.js";
import { FileText } from "lucide-react";
import { S as SectionWrapper } from "./section-wrapper-Dquk3Zgc.js";
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
  title: "Agreement to Terms",
  content: "By accessing or using the Blossom website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or purchase our products."
}, {
  id: "2",
  title: "Products",
  content: "Blossom sells natural fragrances made from upcycled fruit peels. All product descriptions, images, and pricing are provided as accurately as possible. We reserve the right to modify or discontinue products at any time without notice. Colors and scents may vary slightly from what is displayed on screen."
}, {
  id: "3",
  title: "Orders & Payment",
  content: "By placing an order, you confirm that the information you provide is accurate and that you are authorized to use the payment method. All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason. Prices are displayed in Euros (EUR) and include applicable taxes."
}, {
  id: "4",
  title: "Shipping",
  content: "We ship within Greece. Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers or customs. Risk of loss passes to you upon delivery to the carrier."
}, {
  id: "5",
  title: "Returns & Refunds",
  content: "You may return unopened products within 14 days of delivery for a full refund. Products must be in their original packaging and unused. To initiate a return, contact us at support@blossom.com. Refunds are processed within 5-7 business days after we receive the returned item. Shipping costs for returns are the responsibility of the customer unless the return is due to our error."
}, {
  id: "6",
  title: "Intellectual Property",
  content: "All content on this website, including text, images, logos, and designs, is the property of Blossom and is protected by copyright and trademark laws. You may not reproduce, distribute, or modify any content without our written permission."
}, {
  id: "7",
  title: "Limitation of Liability",
  content: "Blossom is not liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our products are made from natural ingredients. If you have allergies or sensitivities, please review ingredient lists carefully and perform a patch test before use. Our total liability shall not exceed the amount paid for the product in question."
}, {
  id: "8",
  title: "Governing Law",
  content: "These terms are governed by the laws of Greece. Any disputes shall be resolved in the courts of Athens, Greece."
}, {
  id: "9",
  title: "Changes to Terms",
  content: "We may update these terms at any time. Changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance of the new terms."
}];
function TermsPage() {
  const $ = c(6);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx("section", { className: "py-16 bg-secondary", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("header", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsx(Avatar, { className: "w-16 h-16 bg-primary/10 mx-auto mb-4", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(FileText, { className: "w-8 h-8 text-primary" }) }) }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4", children: "Terms of Service" }),
      /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Last updated: March 2026" })
    ] }) }) }) });
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  let t1;
  let t2;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = /* @__PURE__ */ jsx(ScrollArea, { className: "w-full mb-8", children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, children: sections.map(_temp) }) });
    t2 = /* @__PURE__ */ jsx(Separator, { className: "my-8" });
    $[1] = t1;
    $[2] = t2;
  } else {
    t1 = $[1];
    t2 = $[2];
  }
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "10. Contact" }) });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx("br", {});
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx("main", { className: "pt-24", children: /* @__PURE__ */ jsxs(SectionWrapper, { loading: false, error: null, children: [
      t0,
      /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto px-4 sm:px-6 lg:px-8", children: [
        t1,
        t2,
        /* @__PURE__ */ jsxs(Card, { children: [
          t3,
          /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs("address", { className: "text-muted-foreground not-italic leading-relaxed", children: [
            "Blossom",
            t4,
            "Email: support@blossom.com",
            /* @__PURE__ */ jsx("br", {}),
            "Athens, Greece"
          ] }) })
        ] })
      ] }) })
    ] }) });
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  return t5;
}
function _temp(s) {
  return /* @__PURE__ */ jsxs(AccordionItem, { value: s.id, children: [
    /* @__PURE__ */ jsxs(AccordionTrigger, { className: "font-heading font-semibold text-lg", children: [
      s.id,
      ". ",
      s.title
    ] }),
    /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx(Card, { className: "border-0 shadow-none bg-transparent", children: /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx("p", { className: "text-muted-foreground leading-relaxed", children: s.content }) }) }) })
  ] }, s.id);
}
const SplitComponent = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(TermsPage, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  SplitComponent as component
};

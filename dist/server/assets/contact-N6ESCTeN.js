import { jsx, jsxs } from "react/jsx-runtime";
import { c } from "react/compiler-runtime";
import { h as BlurFade, C as Card, o as CardContent, v as Alert, w as AlertTitle, x as AlertDescription, f as Button, L as Label, I as Input, B as Badge, m as CardHeader, n as CardTitle, A as Avatar, g as AvatarFallback, p as CardDescription } from "./router-p6p1R6bc.js";
import { T as Textarea } from "./textarea-DJFy-xEo.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-CBkDO8jU.js";
import { T as Table, d as TableBody, a as TableHeader, b as TableRow, c as TableHead, e as TableCell } from "./table-BF44o3nc.js";
import { A as AnimatedList } from "./animated-list-BCnLQjD9.js";
import { Mail, Phone, MapPin, CheckCircle, Send, MessageCircle, Clock } from "lucide-react";
import { useState } from "react";
import { F as FAQ } from "./FAQ-D-FokA9W.js";
import { S as SectionWrapper } from "./section-wrapper-Dquk3Zgc.js";
import { A as ANIMATED_LIST_DELAY, B as BLUR_FADE_DELAY_MEDIUM, c as BLUR_FADE_DELAY_MEDIUM_LONG, b as BLUR_FADE_DELAY_LONG, d as ANIMATED_LIST_STAGGER } from "./animation-DXk-6j-p.js";
import "@tanstack/react-router";
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
const contactInfo = [{
  icon: Mail,
  title: "Email Us",
  primary: "hello@blossom.com",
  secondary: "We reply within 24 hours"
}, {
  icon: Phone,
  title: "Call Us",
  primary: "+30 210 123 4567",
  secondary: "Mon-Fri, 9am-6pm"
}, {
  icon: MapPin,
  title: "Visit Us",
  primary: "Athens, Greece",
  secondary: "By appointment only"
}];
const faqs = [{
  question: "How do I track my order?",
  answer: "You'll receive a tracking link via email once your order ships."
}, {
  question: "Can I change my order?",
  answer: "Contact us within 2 hours of placing your order for changes."
}, {
  question: "Do you ship internationally?",
  answer: "Currently we ship within Greece. International shipping coming soon!"
}];
const businessHours = [{
  day: "Monday - Friday",
  hours: "9:00 AM - 6:00 PM"
}, {
  day: "Saturday",
  hours: "10:00 AM - 4:00 PM"
}, {
  day: "Sunday",
  hours: "Closed"
}];
function ContactPage() {
  const $ = c(23);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = {
      name: "",
      email: "",
      subject: "",
      message: ""
    };
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  const [formData, setFormData] = useState(t0);
  const [submitted, setSubmitted] = useState(false);
  let t1;
  if ($[1] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t1 = (e) => {
      e.preventDefault();
      setSubmitted(true);
      setFormData({
        name: "",
        email: "",
        subject: "",
        message: ""
      });
    };
    $[1] = t1;
  } else {
    t1 = $[1];
  }
  const handleSubmit = t1;
  let t2;
  if ($[2] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t2 = (e_0) => {
      setFormData((prev) => ({
        ...prev,
        [e_0.target.name]: e_0.target.value
      }));
    };
    $[2] = t2;
  } else {
    t2 = $[2];
  }
  const handleChange = t2;
  let t3;
  if ($[3] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t3 = /* @__PURE__ */ jsx("section", { className: "py-16 bg-linear-to-br from-primary/5 via-background to-secondary/20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "inline-flex items-center gap-2 px-4 py-2 mb-6", children: [
        /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
        "Get in Touch"
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4", children: "We'd Love to Hear From You" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Have questions about our products, shipping, or anything else? We're here to help and would love to hear your feedback." })
    ] }) }) }) });
    $[3] = t3;
  } else {
    t3 = $[3];
  }
  let t4;
  if ($[4] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t4 = /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(AnimatedList, { delay: ANIMATED_LIST_DELAY, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto -mt-8", children: contactInfo.map(_temp) }) }) }) });
    $[4] = t4;
  } else {
    t4 = $[4];
  }
  let t5;
  if ($[5] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t5 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "Send Us a Message" }) });
    $[5] = t5;
  } else {
    t5 = $[5];
  }
  let t6;
  if ($[6] !== formData || $[7] !== submitted) {
    t6 = /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Card, { children: [
      t5,
      /* @__PURE__ */ jsx(CardContent, { children: submitted ? /* @__PURE__ */ jsxs(Alert, { className: "bg-primary/10 border-primary/20", children: [
        /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-primary" }),
        /* @__PURE__ */ jsx(AlertTitle, { className: "text-xl font-heading font-semibold", children: "Message Sent!" }),
        /* @__PURE__ */ jsx(AlertDescription, { className: "mt-2", children: "Thank you for reaching out. We'll get back to you within 24 hours." }),
        /* @__PURE__ */ jsx(Button, { variant: "outline", className: "mt-4", onClick: () => setSubmitted(false), children: "Send Another Message" })
      ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", id: "message-us", children: [
        /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
            /* @__PURE__ */ jsx(Input, { id: "name", name: "name", placeholder: "Your name", value: formData.name, onChange: handleChange, required: true })
          ] }),
          /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
            /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
            /* @__PURE__ */ jsx(Input, { id: "email", name: "email", type: "email", placeholder: "your@email.com", value: formData.email, onChange: handleChange, required: true })
          ] })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "subject", children: "Subject" }),
          /* @__PURE__ */ jsx(Input, { id: "subject", name: "subject", placeholder: "How can we help?", value: formData.subject, onChange: handleChange, required: true })
        ] }),
        /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
          /* @__PURE__ */ jsx(Label, { htmlFor: "message", children: "Message" }),
          /* @__PURE__ */ jsx(Textarea, { id: "message", name: "message", placeholder: "Tell us more...", rows: 5, value: formData.message, onChange: handleChange, required: true })
        ] }),
        /* @__PURE__ */ jsxs(Button, { type: "submit", size: "lg", className: "w-full group", children: [
          "Send Message",
          /* @__PURE__ */ jsx(Send, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })
        ] })
      ] }) })
    ] }) });
    $[6] = formData;
    $[7] = submitted;
    $[8] = t6;
  } else {
    t6 = $[8];
  }
  let t7;
  if ($[9] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t7 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "Quick Answers" }) });
    $[9] = t7;
  } else {
    t7 = $[9];
  }
  let t8;
  if ($[10] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t8 = /* @__PURE__ */ jsxs(Card, { children: [
      t7,
      /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, children: faqs.map(_temp2) }) })
    ] });
    $[10] = t8;
  } else {
    t8 = $[10];
  }
  let t9;
  if ($[11] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t9 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 font-heading font-semibold", children: [
      /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-primary" }),
      "Business Hours"
    ] }) });
    $[11] = t9;
  } else {
    t9 = $[11];
  }
  let t10;
  if ($[12] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t10 = /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
      /* @__PURE__ */ jsx(TableHead, { children: "Day" }),
      /* @__PURE__ */ jsx(TableHead, { children: "Hours" })
    ] }) });
    $[12] = t10;
  } else {
    t10 = $[12];
  }
  let t11;
  if ($[13] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t11 = /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_MEDIUM, inView: true, children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", id: "faq", children: [
      t8,
      /* @__PURE__ */ jsxs(Card, { className: "bg-secondary/50", children: [
        t9,
        /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
          t10,
          /* @__PURE__ */ jsx(TableBody, { children: businessHours.map(_temp3) })
        ] }) })
      ] })
    ] }) });
    $[13] = t11;
  } else {
    t11 = $[13];
  }
  let t12;
  if ($[14] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t12 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "Shipping Information" }) });
    $[14] = t12;
  } else {
    t12 = $[14];
  }
  let t13;
  if ($[15] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t13 = /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_MEDIUM_LONG, inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "mt-6", id: "shipping", children: [
      t12,
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Delivery Times" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Standard delivery: 3-5 business days within Greece. Free shipping on orders over €50." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "Tracking" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "You'll receive a tracking link via email once your order ships." })
        ] })
      ] })
    ] }) });
    $[15] = t13;
  } else {
    t13 = $[15];
  }
  let t14;
  if ($[16] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t14 = /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "Returns Policy" }) });
    $[16] = t14;
  } else {
    t14 = $[16];
  }
  let t15;
  if ($[17] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t15 = /* @__PURE__ */ jsx(BlurFade, { delay: BLUR_FADE_DELAY_LONG, inView: true, children: /* @__PURE__ */ jsxs(Card, { className: "mt-6", id: "returns", children: [
      t14,
      /* @__PURE__ */ jsxs(CardContent, { className: "space-y-4", children: [
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "30-Day Returns" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Not satisfied? Return unopened products within 30 days for a full refund." })
        ] }),
        /* @__PURE__ */ jsxs("div", { children: [
          /* @__PURE__ */ jsx("h4", { className: "font-semibold mb-2", children: "How to Return" }),
          /* @__PURE__ */ jsx("p", { className: "text-muted-foreground", children: "Contact us to get a return label. Pack items securely and drop off at any pickup point." })
        ] })
      ] })
    ] }) });
    $[17] = t15;
  } else {
    t15 = $[17];
  }
  let t16;
  if ($[18] !== t6) {
    t16 = /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto", children: [
      t6,
      t11,
      t13,
      t15
    ] }) });
    $[18] = t6;
    $[19] = t16;
  } else {
    t16 = $[19];
  }
  let t17;
  if ($[20] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t17 = /* @__PURE__ */ jsx(FAQ, {});
    $[20] = t17;
  } else {
    t17 = $[20];
  }
  let t18;
  if ($[21] !== t16) {
    t18 = /* @__PURE__ */ jsx("main", { className: "pt-24", children: /* @__PURE__ */ jsxs(SectionWrapper, { loading: false, error: null, children: [
      t3,
      t4,
      /* @__PURE__ */ jsxs("section", { className: "py-16", children: [
        t16,
        t17
      ] })
    ] }) });
    $[21] = t16;
    $[22] = t18;
  } else {
    t18 = $[22];
  }
  return t18;
}
function _temp3(row, i) {
  return /* @__PURE__ */ jsxs(TableRow, { children: [
    /* @__PURE__ */ jsx(TableCell, { className: "text-muted-foreground", children: row.day }),
    /* @__PURE__ */ jsx(TableCell, { className: "text-foreground", children: row.hours })
  ] }, i);
}
function _temp2(faq, index_0) {
  return /* @__PURE__ */ jsxs(AccordionItem, { value: `faq-${index_0}`, children: [
    /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-heading font-medium", children: faq.question }),
    /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed", children: faq.answer }) })
  ] }, index_0);
}
function _temp(info, index) {
  return /* @__PURE__ */ jsx(BlurFade, { delay: ANIMATED_LIST_STAGGER * index, inView: true, children: /* @__PURE__ */ jsx(Card, { className: "text-center hover:shadow-md transition-all border-border/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
    /* @__PURE__ */ jsx(Avatar, { className: "w-14 h-14 bg-primary/10 mx-auto mb-4", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(info.icon, { className: "w-7 h-7 text-primary" }) }) }),
    /* @__PURE__ */ jsx(CardTitle, { className: "font-heading font-semibold text-lg mb-2", children: info.title }),
    /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium text-base", children: info.primary }),
    /* @__PURE__ */ jsx(CardDescription, { className: "mt-1", children: info.secondary })
  ] }) }) }, index);
}
const SplitComponent = () => {
  const $ = c(1);
  let t0;
  if ($[0] === /* @__PURE__ */ Symbol.for("react.memo_cache_sentinel")) {
    t0 = /* @__PURE__ */ jsx(ContactPage, {});
    $[0] = t0;
  } else {
    t0 = $[0];
  }
  return t0;
};
export {
  SplitComponent as component
};

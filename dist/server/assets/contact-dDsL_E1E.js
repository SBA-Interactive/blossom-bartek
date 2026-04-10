import { jsx, jsxs } from "react/jsx-runtime";
import { x as cn, B as BlurFade, b as Badge, C as Card, l as CardContent, A as Avatar, a as AvatarFallback, o as CardTitle, p as CardDescription, n as CardHeader, y as Alert, z as AlertTitle, D as AlertDescription, h as Button, L as Label, I as Input } from "./router-CtctPOdV.js";
import { A as Accordion, a as AccordionItem, b as AccordionTrigger, c as AccordionContent } from "./accordion-6YEcb7e6.js";
import { T as Table, a as TableHeader, b as TableRow, c as TableHead, d as TableBody, e as TableCell } from "./table-zv1c6Gj2.js";
import { A as AnimatedList } from "./animated-list-BMLPWeED.js";
import { MessageCircle, Mail, Phone, MapPin, CheckCircle, Send, Clock } from "lucide-react";
import { useState } from "react";
import { F as FAQ } from "./FAQ-ee-iIzRz.js";
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
function Textarea({ className, ...props }) {
  return /* @__PURE__ */ jsx(
    "textarea",
    {
      "data-slot": "textarea",
      className: cn(
        "flex field-sizing-content min-h-16 w-full rounded-md border border-input bg-transparent px-2.5 py-2 text-base shadow-xs transition-[color,box-shadow] outline-none placeholder:text-muted-foreground focus-visible:border-ring focus-visible:ring-3 focus-visible:ring-ring/50 disabled:cursor-not-allowed disabled:opacity-50 aria-invalid:border-destructive aria-invalid:ring-3 aria-invalid:ring-destructive/20 md:text-sm dark:bg-input/30 dark:aria-invalid:border-destructive/50 dark:aria-invalid:ring-destructive/40",
        className
      ),
      ...props
    }
  );
}
const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    primary: "hello@blossom.com",
    secondary: "We reply within 24 hours"
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+30 210 123 4567",
    secondary: "Mon-Fri, 9am-6pm"
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "Athens, Greece",
    secondary: "By appointment only"
  }
];
const faqs = [
  {
    question: "How do I track my order?",
    answer: "You'll receive a tracking link via email once your order ships."
  },
  {
    question: "Can I change my order?",
    answer: "Contact us within 2 hours of placing your order for changes."
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently we ship within Greece. International shipping coming soon!"
  }
];
const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" }
];
function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: ""
  });
  const [submitted, setSubmitted] = useState(false);
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };
  const handleChange = (e) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };
  return /* @__PURE__ */ jsxs("main", { className: "pt-24", children: [
    /* @__PURE__ */ jsx("section", { className: "py-16 bg-linear-to-br from-primary/5 via-background to-secondary/20", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs("div", { className: "max-w-3xl mx-auto text-center", children: [
      /* @__PURE__ */ jsxs(Badge, { variant: "secondary", className: "inline-flex items-center gap-2 px-4 py-2 mb-6", children: [
        /* @__PURE__ */ jsx(MessageCircle, { className: "w-4 h-4" }),
        "Get in Touch"
      ] }),
      /* @__PURE__ */ jsx("h1", { className: "text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4", children: "We'd Love to Hear From You" }),
      /* @__PURE__ */ jsx("p", { className: "text-lg text-muted-foreground", children: "Have questions about our products, shipping, or anything else? We're here to help and would love to hear your feedback." })
    ] }) }) }) }),
    /* @__PURE__ */ jsx("section", { className: "py-16", children: /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsx(AnimatedList, { delay: 0.1, children: /* @__PURE__ */ jsx("div", { className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto -mt-8", children: contactInfo.map((info, index) => /* @__PURE__ */ jsx(BlurFade, { delay: 0.1 * index, inView: true, children: /* @__PURE__ */ jsx(Card, { className: "text-center hover:shadow-md transition-all border-border/50", children: /* @__PURE__ */ jsxs(CardContent, { className: "pt-6", children: [
      /* @__PURE__ */ jsx(Avatar, { className: "w-14 h-14 bg-primary/10 mx-auto mb-4", children: /* @__PURE__ */ jsx(AvatarFallback, { className: "bg-primary/10", children: /* @__PURE__ */ jsx(info.icon, { className: "w-7 h-7 text-primary" }) }) }),
      /* @__PURE__ */ jsx(CardTitle, { className: "font-heading font-semibold text-lg mb-2", children: info.title }),
      /* @__PURE__ */ jsx("p", { className: "text-foreground font-medium text-base", children: info.primary }),
      /* @__PURE__ */ jsx(CardDescription, { className: "mt-1", children: info.secondary })
    ] }) }) }, index)) }) }) }) }),
    /* @__PURE__ */ jsxs("section", { className: "py-16", children: [
      /* @__PURE__ */ jsx("div", { className: "container mx-auto px-4 sm:px-6 lg:px-8", children: /* @__PURE__ */ jsxs("div", { className: "grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto", children: [
        /* @__PURE__ */ jsx(BlurFade, { inView: true, children: /* @__PURE__ */ jsxs(Card, { children: [
          /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "Send Us a Message" }) }),
          /* @__PURE__ */ jsx(CardContent, { children: submitted ? /* @__PURE__ */ jsxs(Alert, { className: "bg-primary/10 border-primary/20", children: [
            /* @__PURE__ */ jsx(CheckCircle, { className: "h-5 w-5 text-primary" }),
            /* @__PURE__ */ jsx(AlertTitle, { className: "text-xl font-heading font-semibold", children: "Message Sent!" }),
            /* @__PURE__ */ jsx(AlertDescription, { className: "mt-2", children: "Thank you for reaching out. We'll get back to you within 24 hours." }),
            /* @__PURE__ */ jsx(
              Button,
              {
                variant: "outline",
                className: "mt-4",
                onClick: () => setSubmitted(false),
                children: "Send Another Message"
              }
            )
          ] }) : /* @__PURE__ */ jsxs("form", { onSubmit: handleSubmit, className: "space-y-6", id: "message-us", children: [
            /* @__PURE__ */ jsxs("div", { className: "grid sm:grid-cols-2 gap-4", children: [
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "name", children: "Name" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "name",
                    name: "name",
                    placeholder: "Your name",
                    value: formData.name,
                    onChange: handleChange,
                    required: true
                  }
                )
              ] }),
              /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
                /* @__PURE__ */ jsx(Label, { htmlFor: "email", children: "Email" }),
                /* @__PURE__ */ jsx(
                  Input,
                  {
                    id: "email",
                    name: "email",
                    type: "email",
                    placeholder: "your@email.com",
                    value: formData.email,
                    onChange: handleChange,
                    required: true
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "subject", children: "Subject" }),
              /* @__PURE__ */ jsx(
                Input,
                {
                  id: "subject",
                  name: "subject",
                  placeholder: "How can we help?",
                  value: formData.subject,
                  onChange: handleChange,
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs("div", { className: "space-y-2", children: [
              /* @__PURE__ */ jsx(Label, { htmlFor: "message", children: "Message" }),
              /* @__PURE__ */ jsx(
                Textarea,
                {
                  id: "message",
                  name: "message",
                  placeholder: "Tell us more...",
                  rows: 5,
                  value: formData.message,
                  onChange: handleChange,
                  required: true
                }
              )
            ] }),
            /* @__PURE__ */ jsxs(Button, { type: "submit", size: "lg", className: "w-full group", children: [
              "Send Message",
              /* @__PURE__ */ jsx(Send, { className: "ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" })
            ] })
          ] }) })
        ] }) }),
        /* @__PURE__ */ jsx(BlurFade, { delay: 0.2, inView: true, children: /* @__PURE__ */ jsxs("div", { className: "space-y-6", children: [
          /* @__PURE__ */ jsxs(Card, { children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsx(CardTitle, { className: "text-2xl font-heading font-bold", children: "Quick Answers" }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsx(Accordion, { type: "single", collapsible: true, children: faqs.map((faq, index) => /* @__PURE__ */ jsxs(AccordionItem, { value: `faq-${index}`, children: [
              /* @__PURE__ */ jsx(AccordionTrigger, { className: "font-heading font-medium", children: faq.question }),
              /* @__PURE__ */ jsx(AccordionContent, { children: /* @__PURE__ */ jsx(CardDescription, { className: "leading-relaxed", children: faq.answer }) })
            ] }, index)) }) })
          ] }),
          /* @__PURE__ */ jsxs(Card, { className: "bg-secondary/50", children: [
            /* @__PURE__ */ jsx(CardHeader, { children: /* @__PURE__ */ jsxs(CardTitle, { className: "flex items-center gap-3 font-heading font-semibold", children: [
              /* @__PURE__ */ jsx(Clock, { className: "w-5 h-5 text-primary" }),
              "Business Hours"
            ] }) }),
            /* @__PURE__ */ jsx(CardContent, { children: /* @__PURE__ */ jsxs(Table, { children: [
              /* @__PURE__ */ jsx(TableHeader, { children: /* @__PURE__ */ jsxs(TableRow, { children: [
                /* @__PURE__ */ jsx(TableHead, { children: "Day" }),
                /* @__PURE__ */ jsx(TableHead, { children: "Hours" })
              ] }) }),
              /* @__PURE__ */ jsx(TableBody, { children: businessHours.map((row, i) => /* @__PURE__ */ jsxs(TableRow, { children: [
                /* @__PURE__ */ jsx(TableCell, { className: "text-muted-foreground", children: row.day }),
                /* @__PURE__ */ jsx(TableCell, { className: "text-foreground", children: row.hours })
              ] }, i)) })
            ] }) })
          ] })
        ] }) })
      ] }) }),
      /* @__PURE__ */ jsx(FAQ, {})
    ] })
  ] });
}
const SplitComponent = () => /* @__PURE__ */ jsx(ContactPage, {});
export {
  SplitComponent as component
};

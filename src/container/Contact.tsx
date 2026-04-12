import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { AnimatedList } from "@/components/ui/animated-list";
import { Mail, MapPin, Phone, Send, Clock, MessageCircle, CheckCircle } from "lucide-react";
import { useState } from "react";
import FAQ from "../components/FAQ";
import { SectionWrapper } from "@/components/section-wrapper";
import {
  BLUR_FADE_DELAY_SHORT,
  BLUR_FADE_DELAY_MEDIUM,
  BLUR_FADE_DELAY_LONG,
  BLUR_FADE_DELAY_MEDIUM_LONG,
  ANIMATED_LIST_DELAY,
  ANIMATED_LIST_STAGGER,
} from "@/constants/animation";

const contactInfo = [
  {
    icon: Mail,
    title: "Email Us",
    primary: "hello@blossom.com",
    secondary: "We reply within 24 hours",
  },
  {
    icon: Phone,
    title: "Call Us",
    primary: "+30 210 123 4567",
    secondary: "Mon-Fri, 9am-6pm",
  },
  {
    icon: MapPin,
    title: "Visit Us",
    primary: "Athens, Greece",
    secondary: "By appointment only",
  },
];

const faqs = [
  {
    question: "How do I track my order?",
    answer: "You'll receive a tracking link via email once your order ships.",
  },
  {
    question: "Can I change my order?",
    answer: "Contact us within 2 hours of placing your order for changes.",
  },
  {
    question: "Do you ship internationally?",
    answer: "Currently we ship within Greece. International shipping coming soon!",
  },
];

const businessHours = [
  { day: "Monday - Friday", hours: "9:00 AM - 6:00 PM" },
  { day: "Saturday", hours: "10:00 AM - 4:00 PM" },
  { day: "Sunday", hours: "Closed" },
];

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  return (
    <main className="pt-24">
      <SectionWrapper loading={false} error={null}>
        <section className="py-16 bg-linear-to-br from-primary/5 via-background to-secondary/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade inView>
              <div className="max-w-3xl mx-auto text-center">
                <Badge variant="secondary" className="inline-flex items-center gap-2 px-4 py-2 mb-6">
                  <MessageCircle className="w-4 h-4" />
                  Get in Touch
                </Badge>
                <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
                  We&apos;d Love to Hear From You
                </h1>
                <p className="text-lg text-muted-foreground">
                  Have questions about our products, shipping, or anything else? We&apos;re here to
                  help and would love to hear your feedback.
                </p>
              </div>
            </BlurFade>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <AnimatedList delay={ANIMATED_LIST_DELAY}>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-4xl mx-auto -mt-8">
                {contactInfo.map((info, index) => (
                  <BlurFade key={index} delay={ANIMATED_LIST_STAGGER * index} inView>
                    <Card className="text-center hover:shadow-md transition-all border-border/50">
                    <CardContent className="pt-6">
                      <Avatar className="w-14 h-14 bg-primary/10 mx-auto mb-4">
                        <AvatarFallback className="bg-primary/10">
                          <info.icon className="w-7 h-7 text-primary" />
                        </AvatarFallback>
                      </Avatar>
                      <CardTitle className="font-heading font-semibold text-lg mb-2">
                        {info.title}
                      </CardTitle>
                      <p className="text-foreground font-medium text-base">{info.primary}</p>
                      <CardDescription className="mt-1">{info.secondary}</CardDescription>
                    </CardContent>
                  </Card>
                </BlurFade>
              ))}
            </div>
          </AnimatedList>
        </div>
      </section>

      <section className="py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 max-w-6xl mx-auto">
            <BlurFade inView>
              <Card>
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold">
                    Send Us a Message
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  {submitted ? (
                    <Alert className="bg-primary/10 border-primary/20">
                      <CheckCircle className="h-5 w-5 text-primary" />
                      <AlertTitle className="text-xl font-heading font-semibold">
                        Message Sent!
                      </AlertTitle>
                      <AlertDescription className="mt-2">
                        Thank you for reaching out. We&apos;ll get back to you within 24 hours.
                      </AlertDescription>
                      <Button
                        variant="outline"
                        className="mt-4"
                        onClick={() => setSubmitted(false)}
                      >
                        Send Another Message
                      </Button>
                    </Alert>
                  ) : (
                    <form onSubmit={handleSubmit} className="space-y-6" id="message-us">
                      <div className="grid sm:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name</Label>
                          <Input
                            id="name"
                            name="name"
                            placeholder="Your name"
                            value={formData.name}
                            onChange={handleChange}
                            required
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="email">Email</Label>
                          <Input
                            id="email"
                            name="email"
                            type="email"
                            placeholder="your@email.com"
                            value={formData.email}
                            onChange={handleChange}
                            required
                          />
                        </div>
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Subject</Label>
                        <Input
                          id="subject"
                          name="subject"
                          placeholder="How can we help?"
                          value={formData.subject}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="message">Message</Label>
                        <Textarea
                          id="message"
                          name="message"
                          placeholder="Tell us more..."
                          rows={5}
                          value={formData.message}
                          onChange={handleChange}
                          required
                        />
                      </div>
                      <Button type="submit" size="lg" className="w-full group">
                        Send Message
                        <Send className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </Button>
                    </form>
                  )}
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY_MEDIUM} inView>
              <div className="space-y-6" id="faq">
                <Card>
                  <CardHeader>
                    <CardTitle className="text-2xl font-heading font-bold">Quick Answers</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Accordion type="single" collapsible>
                      {faqs.map((faq, index) => (
                        <AccordionItem key={index} value={`faq-${index}`}>
                          <AccordionTrigger className="font-heading font-medium">
                            {faq.question}
                          </AccordionTrigger>
                          <AccordionContent>
                            <CardDescription className="leading-relaxed">
                              {faq.answer}
                            </CardDescription>
                          </AccordionContent>
                        </AccordionItem>
                      ))}
                    </Accordion>
                  </CardContent>
                </Card>

                <Card className="bg-secondary/50">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 font-heading font-semibold">
                      <Clock className="w-5 h-5 text-primary" />
                      Business Hours
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <Table>
                      <TableHeader>
                        <TableRow>
                          <TableHead>Day</TableHead>
                          <TableHead>Hours</TableHead>
                        </TableRow>
                      </TableHeader>
                      <TableBody>
                        {businessHours.map((row, i) => (
                          <TableRow key={i}>
                            <TableCell className="text-muted-foreground">{row.day}</TableCell>
                            <TableCell className="text-foreground">{row.hours}</TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  </CardContent>
                </Card>
              </div>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY_MEDIUM_LONG} inView>
              <Card className="mt-6" id="shipping">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold">Shipping Information</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">Delivery Times</h4>
                    <p className="text-muted-foreground">Standard delivery: 3-5 business days within Greece. Free shipping on orders over €50.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">Tracking</h4>
                    <p className="text-muted-foreground">You'll receive a tracking link via email once your order ships.</p>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>

            <BlurFade delay={BLUR_FADE_DELAY_LONG} inView>
              <Card className="mt-6" id="returns">
                <CardHeader>
                  <CardTitle className="text-2xl font-heading font-bold">Returns Policy</CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div>
                    <h4 className="font-semibold mb-2">30-Day Returns</h4>
                    <p className="text-muted-foreground">Not satisfied? Return unopened products within 30 days for a full refund.</p>
                  </div>
                  <div>
                    <h4 className="font-semibold mb-2">How to Return</h4>
                    <p className="text-muted-foreground">Contact us to get a return label. Pack items securely and drop off at any pickup point.</p>
                  </div>
                </CardContent>
              </Card>
            </BlurFade>
          </div>
        </div>
        <FAQ />
      </section>
      </SectionWrapper>
    </main>
  );
}

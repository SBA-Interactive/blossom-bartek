import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { Shield } from "lucide-react";

const sections = [
  {
    id: "1",
    title: "Information We Collect",
    content:
      "When you visit our website, we collect your IP address, browser type, device information, and pages visited. When you place an order, we collect your name, email, shipping address, and payment details. When you subscribe to our newsletter, we collect your email address.",
  },
  {
    id: "2",
    title: "How We Use Your Information",
    content:
      "We use your information to process and ship orders, send order confirmations and updates, respond to your inquiries, send marketing emails (only with your consent), and improve our website and services.",
  },
  {
    id: "3",
    title: "Cookies",
    content:
      "We use essential cookies to ensure our website functions properly. These include session cookies for shopping cart functionality and security cookies for form submissions. We do not use tracking or advertising cookies at this time. You can manage cookie preferences through our cookie banner.",
  },
  {
    id: "4",
    title: "Data Sharing",
    content:
      "We do not sell your personal data. We may share your information with payment processors to complete transactions, shipping providers to deliver orders, and analytics services to understand website usage. All third parties are required to protect your data.",
  },
  {
    id: "5",
    title: "Your Rights (GDPR)",
    content:
      "Under GDPR, you have the right to access your personal data, request correction of inaccurate data, request deletion of your data, object to data processing, and request data portability. To exercise these rights, contact us at privacy@blossom.com.",
  },
  {
    id: "6",
    title: "Data Retention",
    content:
      "We retain order data for 5 years for tax and accounting purposes. Marketing data is retained until you unsubscribe. Server logs are retained for 30 days.",
  },
];

export default function PrivacyPage() {
  return (
    <main className="pt-24">
      <section className="py-16 bg-secondary">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <header className="max-w-3xl mx-auto text-center">
              <Avatar className="w-16 h-16 bg-primary/10 mx-auto mb-4">
                <AvatarFallback className="bg-primary/10">
                  <Shield className="w-8 h-8 text-primary" />
                </AvatarFallback>
              </Avatar>
              <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
                Privacy Policy
              </h1>
              <p className="text-muted-foreground">Last updated: March 2026</p>
            </header>
          </BlurFade>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <Card className="mb-8">
            <CardHeader>
              <CardTitle>Privacy Overview</CardTitle>
              <CardDescription>
                Browse our privacy policy sections below. Click any section to expand.
              </CardDescription>
            </CardHeader>
            <CardContent>
              <Accordion type="single" collapsible>
                {sections.map((s) => (
                  <AccordionItem key={s.id} value={s.id}>
                    <AccordionTrigger className="font-heading font-bold">
                      {s.id}. {s.title}
                    </AccordionTrigger>
                    <AccordionContent>
                      <CardDescription className="leading-relaxed text-base">
                        {s.content}
                      </CardDescription>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </CardContent>
          </Card>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold">7. Contact Us</CardTitle>
              <CardDescription>
                If you have questions about this privacy policy or your personal data, contact us
                at:
              </CardDescription>
            </CardHeader>
            <CardContent>
              <address className="text-muted-foreground not-italic leading-relaxed">
                Blossom
                <br />
                Email: privacy@blossom.com
                <br />
                Athens, Greece
              </address>
            </CardContent>
          </Card>
        </div>
      </section>
    </main>
  );
}

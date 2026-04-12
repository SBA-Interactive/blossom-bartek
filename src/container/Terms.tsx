import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { FileText } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";

const sections = [
  {
    id: "1",
    title: "Agreement to Terms",
    content:
      "By accessing or using the Blossom website, you agree to be bound by these Terms of Service. If you do not agree to these terms, please do not use our website or purchase our products.",
  },
  {
    id: "2",
    title: "Products",
    content:
      "Blossom sells natural fragrances made from upcycled fruit peels. All product descriptions, images, and pricing are provided as accurately as possible. We reserve the right to modify or discontinue products at any time without notice. Colors and scents may vary slightly from what is displayed on screen.",
  },
  {
    id: "3",
    title: "Orders & Payment",
    content:
      "By placing an order, you confirm that the information you provide is accurate and that you are authorized to use the payment method. All orders are subject to acceptance and availability. We reserve the right to refuse or cancel any order for any reason. Prices are displayed in Euros (EUR) and include applicable taxes.",
  },
  {
    id: "4",
    title: "Shipping",
    content:
      "We ship within Greece. Shipping times are estimates and not guaranteed. We are not responsible for delays caused by shipping carriers or customs. Risk of loss passes to you upon delivery to the carrier.",
  },
  {
    id: "5",
    title: "Returns & Refunds",
    content:
      "You may return unopened products within 14 days of delivery for a full refund. Products must be in their original packaging and unused. To initiate a return, contact us at support@blossom.com. Refunds are processed within 5-7 business days after we receive the returned item. Shipping costs for returns are the responsibility of the customer unless the return is due to our error.",
  },
  {
    id: "6",
    title: "Intellectual Property",
    content:
      "All content on this website, including text, images, logos, and designs, is the property of Blossom and is protected by copyright and trademark laws. You may not reproduce, distribute, or modify any content without our written permission.",
  },
  {
    id: "7",
    title: "Limitation of Liability",
    content:
      "Blossom is not liable for any indirect, incidental, or consequential damages arising from the use of our products or website. Our products are made from natural ingredients. If you have allergies or sensitivities, please review ingredient lists carefully and perform a patch test before use. Our total liability shall not exceed the amount paid for the product in question.",
  },
  {
    id: "8",
    title: "Governing Law",
    content:
      "These terms are governed by the laws of Greece. Any disputes shall be resolved in the courts of Athens, Greece.",
  },
  {
    id: "9",
    title: "Changes to Terms",
    content:
      "We may update these terms at any time. Changes will be posted on this page with an updated date. Continued use of the website after changes constitutes acceptance of the new terms.",
  },
];

export default function TermsPage() {
  return (
    <main className="pt-24">
      <SectionWrapper loading={false} error={null}>
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade inView>
              <header className="max-w-3xl mx-auto text-center">
                <Avatar className="w-16 h-16 bg-primary/10 mx-auto mb-4">
                  <AvatarFallback className="bg-primary/10">
                    <FileText className="w-8 h-8 text-primary" />
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
                  Terms of Service
                </h1>
                <p className="text-muted-foreground">Last updated: March 2026</p>
              </header>
            </BlurFade>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <ScrollArea className="w-full mb-8">
            <Accordion type="single" collapsible>
              {sections.map((s) => (
                <AccordionItem key={s.id} value={s.id}>
                  <AccordionTrigger className="font-heading font-semibold text-lg">
                    {s.id}. {s.title}
                  </AccordionTrigger>
                  <AccordionContent>
                    <Card className="border-0 shadow-none bg-transparent">
                      <CardContent>
                        <p className="text-muted-foreground leading-relaxed">{s.content}</p>
                      </CardContent>
                    </Card>
                  </AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
          </ScrollArea>

          <Separator className="my-8" />

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold">10. Contact</CardTitle>
            </CardHeader>
            <CardContent>
              <address className="text-muted-foreground not-italic leading-relaxed">
                Blossom
                <br />
                Email: support@blossom.com
                <br />
                Athens, Greece
              </address>
            </CardContent>
          </Card>
        </div>
      </section>
      </SectionWrapper>
    </main>
  );
}

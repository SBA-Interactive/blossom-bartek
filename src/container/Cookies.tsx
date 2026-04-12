import { Card, CardContent, CardHeader, CardTitle, CardDescription } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { BlurFade } from "@/components/ui/blur-fade";
import { Cookie } from "lucide-react";
import { SectionWrapper } from "@/components/section-wrapper";

const cookieTypes = [
  {
    name: "Essential Cookies",
    required: true,
    description:
      "These cookies are necessary for the website to function. They enable basic features like page navigation, shopping cart functionality, and secure areas of the website. The website cannot function properly without these cookies.",
    examples: [
      { name: "session_id", purpose: "Maintains your session while browsing", duration: "Session" },
      { name: "cookie-consent", purpose: "Stores your cookie preferences", duration: "1 year" },
      { name: "csrf_token", purpose: "Security token for form submissions", duration: "Session" },
    ],
  },
  {
    name: "Functional Cookies",
    required: false,
    description:
      "These cookies enable enhanced functionality and personalization, such as remembering your language preference and recently viewed products. If you do not allow these cookies, some features may not work properly.",
    examples: [
      { name: "language", purpose: "Remembers your language choice", duration: "1 year" },
      { name: "recently_viewed", purpose: "Shows recently browsed products", duration: "30 days" },
    ],
  },
  {
    name: "Analytics Cookies",
    required: false,
    description:
      "These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously. This helps us improve our website and your experience.",
    examples: [
      { name: "_analytics_id", purpose: "Anonymous visitor identification", duration: "1 year" },
      { name: "_page_views", purpose: "Counts page views anonymously", duration: "30 days" },
    ],
  },
];

export default function CookiesPage() {
  return (
    <main className="pt-24">
      <SectionWrapper loading={false} error={null}>
        <section className="py-16 bg-secondary">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <BlurFade inView>
              <header className="max-w-3xl mx-auto text-center">
                <Avatar className="w-16 h-16 bg-primary/10 mx-auto mb-4">
                  <AvatarFallback className="bg-primary/10">
                    <Cookie className="w-8 h-8 text-primary" />
                  </AvatarFallback>
                </Avatar>
                <h1 className="text-4xl sm:text-5xl font-heading font-bold text-foreground mb-4">
                Cookie Policy
              </h1>
              <p className="text-muted-foreground">Last updated: March 2026</p>
            </header>
          </BlurFade>
        </div>
      </section>

      <section className="py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 space-y-8">
          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold">What Are Cookies?</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Cookies are small text files placed on your device when you visit a website. They
                help the website remember your preferences and improve your experience. This policy
                explains what cookies we use and why.
              </CardDescription>
            </CardContent>
          </Card>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold">How We Use Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                Blossom uses cookies to keep the website working properly, remember your
                preferences, understand how you use our website, and improve your experience. We do
                not use cookies for advertising or to sell your data to third parties.
              </CardDescription>
            </CardContent>
          </Card>

          <Accordion type="single" collapsible>
            {cookieTypes.map((type, index) => (
              <AccordionItem key={index} value={`cookie-${index}`}>
                <AccordionTrigger>
                  <div className="flex items-center gap-3">
                    <span className="font-heading font-semibold text-card-foreground">
                      {type.name}
                    </span>
                    <Badge variant={type.required ? "default" : "secondary"}>
                      {type.required ? "Required" : "Optional"}
                    </Badge>
                  </div>
                </AccordionTrigger>
                <AccordionContent>
                  <CardDescription className="leading-relaxed mb-4">
                    {type.description}
                  </CardDescription>
                  <Table>
                    <TableHeader>
                      <TableRow>
                        <TableHead>Cookie</TableHead>
                        <TableHead>Purpose</TableHead>
                        <TableHead>Duration</TableHead>
                      </TableRow>
                    </TableHeader>
                    <TableBody>
                      {type.examples.map((cookie, i) => (
                        <TableRow key={i}>
                          <TableCell className="font-mono text-xs text-muted-foreground">
                            {cookie.name}
                          </TableCell>
                          <TableCell className="text-muted-foreground">{cookie.purpose}</TableCell>
                          <TableCell className="text-muted-foreground">{cookie.duration}</TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold">Managing Cookies</CardTitle>
            </CardHeader>
            <CardContent>
              <CardDescription className="leading-relaxed">
                You can manage your cookie preferences through our cookie banner that appears when
                you first visit our website. You can also control cookies through your browser
                settings. Please note that disabling essential cookies may prevent the website from
                functioning properly.
              </CardDescription>
            </CardContent>
          </Card>

          <Separator />

          <Card>
            <CardHeader>
              <CardTitle className="text-2xl font-heading font-bold">Contact</CardTitle>
              <CardDescription>Questions about our cookie policy? Contact us at:</CardDescription>
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
      </SectionWrapper>
    </main>
  );
}

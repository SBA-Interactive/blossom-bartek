import {
  Outlet,
  createRootRoute,
  HeadContent,
  Scripts,
} from "@tanstack/react-router";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { CookieBanner } from "@/components/CookieBanner";
import { CompareIndicator } from "@/components/CompareIndicator";
import { TooltipProvider } from "@/components/ui/tooltip";
import { ThemeProvider } from "next-themes";
import { Toaster } from "@/components/ui/sonner";
import { ErrorHome } from "@/components/ErrorHome";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { AlertTriangle } from "lucide-react";
import { Link } from "@tanstack/react-router";
import { Button } from "@/components/ui/button";
import {
  Empty,
  EmptyHeader,
  EmptyTitle,
  EmptyDescription,
  EmptyMedia,
  EmptyContent,
} from "@/components/ui/empty";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { Home, Flower2 } from "lucide-react";
import { Spinner } from "@/components/ui/spinner";
import { Skeleton } from "@/components/ui/skeleton";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { BlurFade } from "@/components/ui/blur-fade";

import "../index.css";

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      { name: "theme-color", content: "#3d5a3d" },
    ],
    links: [
      { rel: "icon", type: "image/svg+xml", href: "/logo.svg" },
      { rel: "canonical", href: "https://blossom.com" },
    ],
  }),
  component: RootComponent,
  notFoundComponent: NotFound,
  errorComponent: ErrorOccurred,
  pendingComponent: PageLoading,
});

function RootComponent() {
  return (
    <RootDocument>
      <Header />
      <Outlet />
      <Footer />
      <CookieBanner />
      <CompareIndicator />
      <Toaster />
    </RootDocument>
  );
}

function NotFound() {
  return (
    <RootDocument>
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <Empty className="max-w-md mx-auto text-center">
              <EmptyHeader>
                <EmptyMedia variant="default">
                  <Avatar className="w-24 h-24 bg-primary/10">
                    <AvatarFallback className="bg-primary/10">
                      <Flower2 className="w-12 h-12 text-primary" />
                    </AvatarFallback>
                  </Avatar>
                </EmptyMedia>
                <EmptyTitle className="text-6xl font-heading font-bold">
                  <AnimatedGradientText>404</AnimatedGradientText>
                </EmptyTitle>
                <EmptyDescription className="text-2xl font-heading font-semibold text-foreground">
                  Page Not Found
                </EmptyDescription>
                <EmptyDescription>
                  Oops! It seems this page has wilted away. Let&apos;s get you back to fresh scents.
                </EmptyDescription>
              </EmptyHeader>
              <EmptyContent>
                <Button size="lg" className="group" asChild>
                  <Link to="/">
                    <Home className="mr-2 w-4 h-4" />
                    Back to Home
                  </Link>
                </Button>
              </EmptyContent>
            </Empty>
          </BlurFade>
        </div>
      </div>
    </RootDocument>
  );
}

function PageLoading() {
  return (
    <RootDocument>
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <Card className="max-w-sm mx-auto text-center">
              <CardHeader>
                <Spinner className="size-14 mx-auto" />
              </CardHeader>
              <CardContent className="space-y-4">
                <h1 className="text-sm select-none text-muted-foreground">Loading...</h1>
                <Progress value={33} className="h-1" />
                <div className="space-y-2">
                  <Skeleton className="h-4 w-3/4 mx-auto" />
                  <Skeleton className="h-4 w-1/2 mx-auto" />
                </div>
              </CardContent>
            </Card>
          </BlurFade>
        </div>
      </div>
    </RootDocument>
  );
}

function ErrorOccurred() {
  return (
    <RootDocument>
      <div className="min-h-screen flex items-center justify-center bg-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <BlurFade inView>
            <Alert variant="destructive" className="max-w-md mx-auto text-center">
              <AlertTriangle className="h-6 w-6 mx-auto" />
              <AlertTitle className="text-2xl font-heading font-bold">Unexpected Error</AlertTitle>
              <AlertDescription className="mt-2">
                Something went wrong. Please try again.
              </AlertDescription>
              <Separator className="my-4" />
              <ErrorHome className="text-xl w-50" />
            </Alert>
          </BlurFade>
        </div>
      </div>
    </RootDocument>
  );
}

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <HeadContent />
      </head>
      <body>
          <>
            <ThemeProvider attribute="class" defaultTheme="light" enableSystem>
              <TooltipProvider delayDuration={300}>
                {children}
              </TooltipProvider>
            </ThemeProvider>
          </>
        <Scripts />
      </body>
    </html>
  );
}
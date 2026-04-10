import { Link } from "@tanstack/react-router";
import { Flower2 } from "lucide-react";
import { HugeiconsIcon } from "@hugeicons/react";
import { InstagramFreeIcons, NewTwitterFreeIcons, Facebook02FreeIcons } from "@hugeicons/core-free-icons";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Tooltip, TooltipContent, TooltipTrigger } from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Newsletter } from "./Newsletter";

const footerLinks = {
  shop: [
    { label: "All Products", href: "/products" },
    { label: "My Cart", href: "/cart" },
  ],
  company: [
    { label: "About Us", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  support: [
    { label: "FAQ", href: "/faq" },
    { label: "Shipping Info", href: "/faq" },
    { label: "Returns", href: "/faq" },
  ],
  legal: [
    { label: "Privacy Policy", href: "/privacy" },
    { label: "Terms of Service", href: "/terms" },
    { label: "Cookie Policy", href: "/cookies" },
  ],
};

const socialLinks = [
  { icon: InstagramFreeIcons, href: "#", label: "Follow us on Instagram", color: "#E4405F" },
  { icon: NewTwitterFreeIcons, href: "#", label: "Follow us on Twitter", color: "black" },
  { icon: Facebook02FreeIcons, href: "#", label: "Follow us on Facebook", color: "#1877F2" },
];

const linkSections = [
  { title: "Shop", links: footerLinks.shop },
  { title: "Company", links: footerLinks.company },
  { title: "Support", links: footerLinks.support },
  { title: "Legal", links: footerLinks.legal },
];

export function Footer() {
  return (
    <>
    <Newsletter />
    <footer className="bg-foreground text-background">
      <ScrollArea className="h-auto">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-2 md:grid-cols-5 gap-8">
            <div className="col-span-2 md:col-span-1">
              <NavigationMenu orientation="vertical" className="max-w-full">
                <NavigationMenuList className="flex-col items-start gap-0">
                  <NavigationMenuItem>
                    <NavigationMenuLink asChild>
                      <Link id="link-footer" to="/#link-footer" className="flex items-center gap-2 mb-4 hover:bg-white/50 active:bg-white/40 focus-visible:bg-white/5 dark:hover:bg-black/5 dark:active:bg-black/20 dark:focus-visible:bg-black/5">
                        <Flower2 className="w-8 h-8" />
                        <span className="text-xl font-heading font-bold">Blossom</span>
                      </Link>
                    </NavigationMenuLink>
                  </NavigationMenuItem>
                </NavigationMenuList>
              </NavigationMenu>
              <p className="text-sm opacity-70 mb-6 leading-relaxed">
                Natural fragrances crafted from upcycled fruit peels. Fresh, sustainable, and made
                with love.
              </p>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <Tooltip key={social.label}>
                    <TooltipTrigger asChild>
                      <Button
                        variant="ghost"
                        size="icon"
                        className="rounded-full dark:hover:bg-white hover:bg-white/80 bg-white/10 border border-white/20 footer-social-btn"
                        data-social={["instagram", "twitter", "facebook"][index]}
                        asChild
                      >
                        <a
                          href={social.href}
                          aria-label={social.label}
                          className="flex items-center justify-center"
                        >
                          <HugeiconsIcon
                            icon={social.icon}
                            className="w-6 h-6"
                            color={social.color}
                          />
                        </a>
                      </Button>
                    </TooltipTrigger>
                    <TooltipContent>{social.label}</TooltipContent>
                  </Tooltip>
                ))}
              </div>
            </div>

            {linkSections.map((section) => (
              <div key={section.title}>
                <NavigationMenu orientation="vertical" className="max-w-full">
                  <NavigationMenuList className="flex-col items-start gap-3">
                    <NavigationMenuItem className="font-heading font-semibold mb-1">
                      {section.title}
                    </NavigationMenuItem>
                    {section.links.map((link) => (
                      <NavigationMenuItem key={link.label}>
                        <NavigationMenuLink asChild>
                          <Link
                            to={link.href}
                            className="text-sm text-muted hover:text-white dark:hover:text-foreground hover:bg-muted/50 px-2 py-1 rounded-md -mx-2 transition-colors"
                          >
                            {link.label}
                          </Link>
                        </NavigationMenuLink>
                      </NavigationMenuItem>
                    ))}
                  </NavigationMenuList>
                </NavigationMenu>
              </div>
            ))}
          </div>

          <Separator className="mt-12 bg-background/10" />

          <div className="pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm opacity-70">
              © {new Date().getFullYear()} Blossom. All rights reserved.
            </p>
            <Tooltip>
              <TooltipTrigger asChild>
                <span className="text-sm opacity-70 cursor-default">
                  Made with 🌸 for a greener world
                </span>
              </TooltipTrigger>
              <TooltipContent>Sustainable & Eco-Friendly</TooltipContent>
            </Tooltip>
          </div>
        </div>
      </ScrollArea>
    </footer>
    </>
  );
}

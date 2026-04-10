import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Alert, AlertTitle, AlertDescription } from "@/components/ui/alert";
import { Separator } from "@/components/ui/separator";
import { Spinner } from "@/components/ui/spinner";
import { BlurFade } from "@/components/ui/blur-fade";
import { Ripple } from "@/components/ui/ripple";
import { ArrowRight, Leaf, CheckCircle } from "lucide-react";
import { useState } from "react";

export function Newsletter() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setLoading(true);
      setTimeout(() => {
        setSubmitted(true);
        setLoading(false);
        setEmail("");
      }, 800);
    }
  };

  return (
    <section className="py-24 bg-[#2d3b2d] text-white relative overflow-hidden">
      <Ripple className="opacity-20" color="#4a7c59" />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <BlurFade inView>
          <div className="max-w-2xl mx-auto text-center">
            <Leaf className="w-12 h-12 mx-auto mb-6 opacity-80" />
            <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-4">Stay in the Loop</h2>
            <p className="text-lg opacity-90 mb-8">
              Subscribe to our newsletter for new scents, exclusive offers, and sustainability tips.
              Join the Blossom community.
            </p>

            {submitted ? (
              <Alert className="bg-white/10 backdrop-blur-sm border-white/20">
                <CheckCircle className="h-5 w-5 text-white" />
                <AlertTitle className="text-lg font-medium text-white">Thank you for subscribing!</AlertTitle>
                <AlertDescription className="opacity-80 mt-2 text-gray-200">
                  We&apos;ll keep you updated with the latest from Blossom.
                </AlertDescription>
              </Alert>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto"
              >
                <Input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="flex-1 h-12 bg-white border text-gray-950 dark:text-gray-100 placeholder:text-gray-900 dark:placeholder:text-gray-300 focus-visible:ring-[#d4af37] focus-visible:ring-2 border-2 dark:bg-black/50"
                  required
                />
                <Button
                  type="submit"
                  variant="secondary"
                  className="group h-12 px-8 bg-[#d4af37] text-black font-bold hover:bg-[#c9a227] shadow-lg"
                  disabled={loading}
                >
                  {loading ? (
                    <Spinner className="w-4 h-4" />
                  ) : (
                    <>
                      Subscribe
                      <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </Button>
              </form>
            )}

            <Separator className="my-6 bg-white/20" />
            <p className="text-sm opacity-70 text-gray-200">We respect your privacy. Unsubscribe at any time.</p>
          </div>
        </BlurFade>
      </div>
    </section>
  );
}

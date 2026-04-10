import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Separator } from "@/components/ui/separator";
import { BlurFade } from "@/components/ui/blur-fade";
import { DotPattern } from "@/components/ui/dot-pattern";
import { AnimatedGradientText } from "@/components/ui/animated-gradient-text";
import { MorphingText } from "@/components/ui/morphing-text";
import { NumberTicker } from "@/components/ui/number-ticker";
import { Link } from "@tanstack/react-router";
import { ArrowRight, Leaf, Flower2 } from "lucide-react";

export function Hero() {
  return (
    <section
      aria-label="Welcome to Blossom"
      className="relative min-h-[90vh] flex items-center overflow-hidden bg-hero-bg text-hero-text pb-12"
    >
      <video
        aria-hidden
        muted
        loop
        playsInline
        autoPlay
        poster="/perfume.png"
        className="z-10 absolute inset-0 w-full h-full object-cover grayscale sepia-125"
      >
        <source src="/hero.webm" type="video/mp4" />
      </video>
      <div
        aria-hidden
        className="absolute inset-0 bg-black/30 backdrop-blur-[1px] -z-10"
      />
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 pt-24">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="space-y-8">
            <BlurFade delay={0.2} inView>
              <h1 className="text-hero-text text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-heading font-bold leading-tight">
                <span className="text-shadow text-shadow-zinc-950 text-shadow-2xl">Fresh Scents from{" "}</span>
                <AnimatedGradientText colorFrom="#fbbf24" colorTo="#f97316">
                  Nature&apos;s Gift
                </AnimatedGradientText>
              </h1>
            </BlurFade>

            <BlurFade delay={0.3} inView>
              <p className="text-hero-text/70 text-base sm:text-lg max-w-lg leading-relaxed">
                Discover our collection of natural, eco-friendly perfumes crafted from upcycled
                fruit peels. Fresh, modern scents that are safe for everyday use.
              </p>
            </BlurFade>

            <BlurFade delay={0.4} inView>
              <div className="flex flex-col sm:flex-row flex-wrap gap-4">
                <Button
                  size="lg"
                  className="group bg-brand-rose text-white hover:bg-brand-rose/80 active:bg-brand-rose/70 text-base px-8 py-6 h-auto font-semibold transition-all duration-200"
                  asChild
                >
                  <Link to="/products">
                    Shop Now
                    <ArrowRight
                      className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform"
                      aria-hidden="true"
                    />
                  </Link>
                </Button>
                <Button
                  size="lg"
                  variant="ghost"
                  className="border border-white/40 hover:bg-white/20 active:bg-white/25 text-base px-8 py-6 h-auto text-white transition-all duration-200"
                  asChild
                >
                  <Link to="/about">Learn More</Link>
                </Button>
              </div>
            </BlurFade>

            <BlurFade delay={0.5} inView>
              <div className="flex flex-col items-start justify-center w-full">
                <div className="w-full bg-black/25 rounded-2xl p-4 sm:p-6 pb-0! flex flex-col items-center sm:items-start gap-4">
                  <dl className="grid grid-cols-1 sm:grid-cols-3 gap-4 sm:gap-8 w-full">
                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <dt className="text-3xl sm:text-4xl font-heading font-black">
                        <span className="text-white">
                          <NumberTicker value={10} />
                        </span>
                        <span className="ml-px bg-linear-to-b from-lime-200 to-lime-500 bg-clip-text text-transparent">
                          +
                        </span>
                      </dt>
                      <dd className="text-sm sm:text-sm text-white/70 mt-1">Safe Age</dd>
                    </div>

                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <dt className="text-3xl sm:text-4xl font-heading font-black">
                        <span className="text-white">
                          <NumberTicker value={100} />
                        </span>
                        <span className="ml-px bg-linear-to-b from-lime-200 to-lime-500 bg-clip-text text-transparent">
                          %
                        </span>
                      </dt>
                      <dd className="text-sm sm:text-sm text-white/70 mt-1">Natural</dd>
                    </div>

                    <div className="flex flex-col items-center sm:items-start text-center sm:text-left">
                      <dt className="text-3xl sm:text-4xl font-heading font-black bg-linear-to-b from-lime-200 to-lime-500 bg-clip-text text-transparent">
                        Eco
                      </dt>
                      <dd className="text-sm sm:text-sm text-white/70 mt-1">Friendly</dd>
                    </div>
                  </dl>

                  <Separator orientation="horizontal" className="mb-0 w-20 h-px bg-white/20" />
                  <MorphingText
                    className="text-emerald-500 relative [&>span]:font-semibold text-center text-lg [&>span]:text-4xl"
                    texts={["Cruelty-free", "Vegan", "Premium"]}
                  />
                </div>
              </div>
            </BlurFade>
          </div>

          <BlurFade delay={0.3} inView>
            <figure className="relative flex justify-center lg:justify-end">
              <div className="relative w-full max-w-md lg:max-w-lg">
                <img
                  src="/perfume.png"
                  alt="Blossom natural perfume bottle with fruit peel ingredients"
                  className="relative z-10 w-full h-auto rounded-2xl border-0"
                />
              </div>
              <figcaption className="sr-only">
                Blossom eco-friendly perfume made from natural fruit peels
              </figcaption>
            </figure>
          </BlurFade>
        </div>
      </div>
    </section>
  );
}

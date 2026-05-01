import { cn } from "@/lib/utils";
import { HEADER_HEIGHT } from "@/constants/header";
import { AspectRatio } from "./ui/aspect-ratio";
import { BentoGrid } from "./ui/bento-grid";
import { BlurFade } from "./ui/blur-fade";
import { Separator } from "./ui/separator";
import { BLUR_FADE_DELAY_MEDIUM } from "@/constants/animation";

import "../index.css";

export function Landing() {
  return (
    <BentoGrid className="mb-20">
      <BlurFade inView>
        <div className={cn(`pt-${HEADER_HEIGHT}`, "w-full bg-accent-foreground text-accent")}>
          <div className="min-h-[20rem] sm:h-80">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="flex justify-center items-center gap-y-4 flex-col p-6 md:p-8">
                <h1 className="text-2xl sm:text-3xl md:text-4xl">Hello, world!</h1>
                <div className="text-lg sm:text-xl text-center">
                  <p>Welcome to Bun + React!</p>
                  <p>This is a simple landing page.</p>
                </div>
              </div>
              <div className="p-4 md:p-0">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src="/perfume.webp"
                    alt="Perfume"
                    className="w-full h-full object-cover rounded-md"
                  />
                </AspectRatio>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>

      <Separator className="my-8" />

      <BlurFade delay={BLUR_FADE_DELAY_MEDIUM} inView>
        <div className={cn("w-full bg-accent text-accent-foreground")}>
          <div className="min-h-[20rem] sm:h-80">
            <div className="grid grid-cols-1 md:grid-cols-2">
              <div className="p-4 md:p-0 order-2 md:order-1">
                <AspectRatio ratio={4 / 3}>
                  <img
                    src="/perfume.webp"
                    alt="Perfume"
                    className="w-full h-full object-cover rounded-md"
                  />
                </AspectRatio>
              </div>
              <div className="flex justify-center items-center gap-y-4 flex-col p-6 md:p-8 order-1 md:order-2">
                <h1 className="text-2xl sm:text-3xl md:text-4xl">Hello, world!</h1>
                <div className="text-lg sm:text-xl text-center">
                  <p>Welcome to Bun + React!</p>
                  <p>This is a simple landing page.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </BlurFade>
    </BentoGrid>
  );
}

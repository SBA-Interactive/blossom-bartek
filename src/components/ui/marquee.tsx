import React from "react";
import { cn } from "@/lib/utils";

export default function Marquee({
  children,
  className,
  duration = 12,
  gap = 24,
  repeat = 2,
  pauseOnHover = true,
}: {
  children: React.ReactNode;
  className?: string;
  duration?: number;
  gap?: number;
  repeat?: number;
  pauseOnHover?: boolean;
}) {
  const animation = `marquee ${duration}s linear infinite`;
  const innerStyle: React.CSSProperties = {
    display: "flex",
    gap: `${gap}px`,
    animation,
    ["--gap" as any]: `${gap}px`,
    ["--duration" as any]: `${duration}s`,
    whiteSpace: "nowrap",
  };

  const containerStyle: React.CSSProperties = {
    overflow: "hidden",
  };

  return (
    <div className={cn("relative", className)} style={containerStyle}>
      <div
        style={innerStyle}
        className={cn({ "group-hover:[animation-play-state:paused]": pauseOnHover })}
        aria-hidden="true"
      >
        {Array.from({ length: repeat }).map((_, i) => (
          <div key={i} className="inline-block">
            {children}
          </div>
        ))}
      </div>
    </div>
  );
}

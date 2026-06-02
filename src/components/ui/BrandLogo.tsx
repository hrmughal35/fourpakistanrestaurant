"use client";

import { useState } from "react";
import Image from "next/image";
import { BRAND } from "@/data/site";
import { cn } from "@/lib/utils";

interface BrandLogoProps {
  size?: number;
  showFallbackLabel?: boolean;
  className?: string;
}

export function BrandLogo({
  size = 44,
  showFallbackLabel = false,
  className,
}: BrandLogoProps) {
  const [failed, setFailed] = useState(false);

  if (failed) {
    return (
      <div
        className={cn(
          "flex items-center justify-center rounded-lg bg-white/10 font-display font-bold tracking-widest text-warm-white",
          className
        )}
        style={{ width: size, height: size, fontSize: size * 0.35 }}
      >
        4
      </div>
    );
  }

  return (
    <div className={cn("relative shrink-0", className)} style={{ width: size, height: size }}>
      <Image
        src={BRAND.logoUrl}
        alt="FOUR Restaurant"
        width={size}
        height={size}
        className="rounded-lg object-cover"
        unoptimized
        onError={() => setFailed(true)}
        priority={size >= 80}
      />
      {showFallbackLabel && failed && (
        <span className="sr-only">FOUR (Your Logo)</span>
      )}
    </div>
  );
}

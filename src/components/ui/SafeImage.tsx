"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { IMAGES } from "@/data/site";
import { cn } from "@/lib/utils";

/** Next/Image with fallback when upstream optimization fails */
export function SafeImage({ src, alt, className, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  return (
    <Image
      {...props}
      src={imgSrc}
      alt={alt}
      className={cn(className)}
      onError={() => {
        if (imgSrc !== IMAGES.burgerClassic) {
          setImgSrc(IMAGES.burgerClassic);
        }
      }}
    />
  );
}

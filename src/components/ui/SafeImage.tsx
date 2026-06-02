"use client";

import { useState } from "react";
import Image, { type ImageProps } from "next/image";
import { IMAGES } from "@/data/site";
import { cn } from "@/lib/utils";

/** Next/Image with fallback when upstream optimization fails */
export function SafeImage({ src, alt, className, fill, ...props }: ImageProps) {
  const [imgSrc, setImgSrc] = useState(src);

  const image = (
    <Image
      {...props}
      fill={fill}
      src={imgSrc}
      alt={alt}
      className={cn(fill && "object-cover", className)}
      onError={() => {
        if (imgSrc !== IMAGES.burgerClassic) {
          setImgSrc(IMAGES.burgerClassic);
        }
      }}
    />
  );

  if (fill) {
    return (
      <div className="relative h-full w-full min-h-0 min-w-0 overflow-hidden">
        {image}
      </div>
    );
  }

  return image;
}

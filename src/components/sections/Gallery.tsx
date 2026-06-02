"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { motion } from "framer-motion";
import { GALLERY } from "@/data/site";

export function Gallery() {
  return (
    <section id="gallery" className="w-full max-w-[100vw] overflow-x-clip bg-deep-black py-20 md:py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Visual Archive
          </span>
          <h2 className="mt-4 font-display text-4xl text-warm-white md:text-6xl">
            The FOUR Universe
          </h2>
        </div>

        <div className="columns-1 gap-4 sm:columns-2 lg:columns-3">
          {GALLERY.map((item, i) => (
            <motion.figure
              key={item.dish + item.location}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.08 }}
              className={`group relative mb-4 overflow-hidden rounded-2xl break-inside-avoid ${
                item.tall ? "aspect-[3/4]" : "aspect-square"
              }`}
            >
              <SafeImage
                src={item.src}
                alt={item.dish}
                fill
                className="object-cover transition-transform duration-700 group-hover:scale-105"
                sizes="(max-width:768px) 100vw, 33vw"
              />
              <div className="absolute inset-0 bg-deep-black/60 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
              <figcaption className="absolute inset-0 flex flex-col items-center justify-center opacity-0 transition-all duration-500 group-hover:opacity-100">
                <span className="text-xs uppercase tracking-[0.3em] text-gold">
                  {item.location}
                </span>
                <span className="mt-2 font-display text-2xl text-warm-white">
                  {item.dish}
                </span>
              </figcaption>
            </motion.figure>
          ))}
        </div>
      </div>
    </section>
  );
}

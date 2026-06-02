"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import { STORY_TIMELINE } from "@/data/site";

export function Story() {
  const headlineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headlineRef, { once: true, margin: "-100px" });

  return (
    <section
      id="story"
      className="relative w-full max-w-[100vw] overflow-x-clip bg-deep-black py-20 md:py-32"
    >
      <div ref={headlineRef} className="mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          animate={inView ? { opacity: 1 } : {}}
          className="text-xs uppercase tracking-[0.4em] text-gold"
        >
          Our Philosophy
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="mt-4 font-display text-3xl leading-tight text-warm-white sm:text-4xl md:text-6xl"
        >
          We don&apos;t serve food.
          <br />
          <span className="text-gold">We craft cravings.</span>
        </motion.h2>
      </div>

      {/* Horizontal timeline — contained scroll, no GSAP pin (prevents page overflow) */}
      <div className="mt-12 w-full max-w-[100vw] overflow-x-auto overflow-y-hidden scroll-smooth px-6 pb-4 [-ms-overflow-style:none] [scrollbar-width:none] md:mt-20 md:px-8 [&::-webkit-scrollbar]:hidden">
        <div className="flex w-max max-w-none gap-4 md:gap-8">
          {STORY_TIMELINE.map((item, i) => (
            <article
              key={item.year}
              className="group relative w-[min(85vw,380px)] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:w-[420px]"
            >
              <div className="relative h-56 overflow-hidden md:h-64">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                  sizes="(max-width: 768px) 85vw, 420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />
              </div>
              <div className="p-6 md:p-8">
                <span className="font-mono text-sm text-gold">{item.year}</span>
                <h3 className="mt-2 font-display text-xl text-warm-white md:text-2xl">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-white/60">
                  {item.body}
                </p>
              </div>
              <span className="pointer-events-none absolute right-6 top-6 font-display text-6xl text-white/5">
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

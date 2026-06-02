"use client";

import { useRef, useEffect } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { motion, useInView } from "framer-motion";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { STORY_TIMELINE } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function Story() {
  const sectionRef = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const headlineRef = useRef<HTMLDivElement>(null);
  const inView = useInView(headlineRef, { once: true, margin: "-100px" });

  useEffect(() => {
    const section = sectionRef.current;
    const track = trackRef.current;
    if (!section || !track) return;

    const mm = gsap.matchMedia();
    mm.add("(min-width: 768px)", () => {
      gsap.to(track, {
        x: () => -(track.scrollWidth - window.innerWidth + 80),
        ease: "none",
        scrollTrigger: {
          trigger: section,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 1,
          invalidateOnRefresh: true,
        },
      });
    });

    return () => mm.revert();
  }, []);

  return (
    <section id="story" ref={sectionRef} className="relative bg-deep-black py-32">
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
          className="mt-4 font-display text-4xl leading-tight text-warm-white md:text-6xl"
        >
          We don&apos;t serve food.
          <br />
          <span className="text-gold">We craft cravings.</span>
        </motion.h2>
      </div>

      {/* Desktop: horizontal scroll timeline */}
      <div className="mt-20 hidden overflow-hidden md:block">
        <div
          ref={trackRef}
          className="flex w-max gap-8 px-6 md:px-12"
        >
          {STORY_TIMELINE.map((item, i) => (
            <article
              key={item.year}
              className="group relative w-[85vw] shrink-0 overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-xl md:w-[420px]"
            >
              <div className="relative h-64 overflow-hidden">
                <SafeImage
                  src={item.image}
                  alt={item.title}
                  fill
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                  sizes="420px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-deep-black via-transparent to-transparent" />
              </div>
              <div className="p-8">
                <span className="font-mono text-sm text-gold">{item.year}</span>
                <h3 className="mt-2 font-display text-2xl text-warm-white">
                  {item.title}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-warm-white/60">
                  {item.body}
                </p>
              </div>
              <span className="absolute right-6 top-6 font-display text-6xl text-white/5">
                {String(i + 1).padStart(2, "0")}
              </span>
            </article>
          ))}
        </div>
      </div>

      {/* Mobile: swipeable cards with images */}
      <div className="mt-12 -mx-6 flex gap-4 overflow-x-auto px-6 pb-4 snap-x snap-mandatory scroll-smooth md:hidden">
        {STORY_TIMELINE.map((item) => (
          <article
            key={item.year}
            className="w-[85vw] max-w-sm shrink-0 snap-center overflow-hidden rounded-2xl border border-white/10 bg-white/5"
          >
            <div className="relative h-48">
              <SafeImage
                src={item.image}
                alt={item.title}
                fill
                className="object-cover"
                sizes="85vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-deep-black/80 to-transparent" />
            </div>
            <div className="p-6">
              <span className="font-mono text-sm text-gold">{item.year}</span>
              <h3 className="mt-2 font-display text-xl text-warm-white">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-warm-white/60">{item.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

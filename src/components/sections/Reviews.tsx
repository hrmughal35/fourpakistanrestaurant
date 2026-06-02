"use client";

import { useEffect, useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Star } from "lucide-react";
import { BRAND, TESTIMONIALS } from "@/data/site";

function AnimatedCounter({ target, suffix = "" }: { target: number; suffix?: string }) {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 2000;
          const start = performance.now();
          const tick = (now: number) => {
            const progress = Math.min(1, (now - start) / duration);
            setCount(Math.floor(progress * target));
            if (progress < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
        }
      },
      { threshold: 0.5 }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref}>
      {count.toLocaleString()}
      {suffix}
    </span>
  );
}

export function Reviews() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((i) => (i + 1) % TESTIMONIALS.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section id="reviews" className="relative overflow-hidden bg-burgundy/30 py-32">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_right,rgba(212,175,55,0.08),transparent_50%)]" />

      <div className="relative mx-auto max-w-6xl px-6">
        <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-gold">
              Customer Love
            </span>
            <div className="mt-8 flex flex-wrap gap-12">
              <div>
                <p className="font-display text-6xl text-gold md:text-7xl">
                  <AnimatedCounter target={BRAND.stats.reviews} suffix="+" />
                </p>
                <p className="mt-2 text-sm uppercase tracking-widest text-warm-white/50">
                  Reviews
                </p>
              </div>
              <div>
                <p className="font-display text-6xl text-warm-white md:text-7xl">
                  {BRAND.stats.rating}
                  <span className="text-3xl text-gold"> ★</span>
                </p>
                <p className="mt-2 text-sm uppercase tracking-widest text-warm-white/50">
                  Average Rating
                </p>
              </div>
            </div>
          </div>

          <div className="relative min-h-[220px] rounded-3xl border border-white/10 bg-deep-black/50 p-10 backdrop-blur-2xl">
            <AnimatePresence mode="wait">
              <motion.blockquote
                key={index}
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -30 }}
                transition={{ duration: 0.5 }}
              >
                <div className="mb-4 flex gap-1">
                  {Array.from({ length: TESTIMONIALS[index].rating }).map((_, i) => (
                    <Star key={i} className="h-4 w-4 fill-gold text-gold" />
                  ))}
                </div>
                <p className="text-lg leading-relaxed text-warm-white/80">
                  &ldquo;{TESTIMONIALS[index].text}&rdquo;
                </p>
                <footer className="mt-6 font-display text-gold">
                  — {TESTIMONIALS[index].name}
                </footer>
              </motion.blockquote>
            </AnimatePresence>

            <div className="absolute bottom-6 right-6 flex gap-2">
              {TESTIMONIALS.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setIndex(i)}
                  className={`h-2 rounded-full transition-all ${
                    i === index ? "w-8 bg-gold" : "w-2 bg-white/20"
                  }`}
                  aria-label={`Testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

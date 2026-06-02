"use client";

import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { BRAND, HERO_VIDEO, IMAGES } from "@/data/site";
import { MagneticButton } from "@/components/effects/MagneticButton";
export function Hero() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "30%"]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={ref}
      id="hero"
      className="relative flex min-h-[100svh] w-full max-w-[100vw] items-center justify-center overflow-hidden px-4 sm:px-6"
    >
      <motion.div style={{ y }} className="absolute inset-0 min-h-0 min-w-0 overflow-hidden">
        <video
          autoPlay
          muted
          loop
          playsInline
          poster={IMAGES.burgerClassic.replace("w=1200", "w=1920")}
          className="h-full w-full max-w-full object-cover object-center"
        >
          <source src={HERO_VIDEO} type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-deep-black/70 via-deep-black/50 to-deep-black" />
        <div className="absolute inset-0 bg-burgundy/20 mix-blend-multiply" />
      </motion.div>

      <motion.div
        style={{ opacity }}
        className="relative z-10 mx-auto max-w-5xl px-6 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 2.8, duration: 0.8 }}
          className="mb-4 text-xs uppercase tracking-[0.4em] text-gold"
        >
          Lahore · Pakistan
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3, duration: 1 }}
          className="font-display text-[2rem] leading-[1.1] text-warm-white sm:text-5xl md:text-7xl lg:text-8xl"
        >
          {BRAND.tagline}
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 3.3 }}
          className="mx-auto mt-6 max-w-xl text-lg text-warm-white/70 md:text-xl"
        >
          {BRAND.subtagline}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 3.6 }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row"
        >
          <MagneticButton
            as="a"
            href="#menu"
            className="inline-flex h-14 items-center rounded-full bg-gold px-10 text-sm font-semibold uppercase tracking-widest text-deep-black shadow-[0_0_50px_rgba(212,175,55,0.35)]"
          >
            Explore Menu
          </MagneticButton>
          <MagneticButton
            as="a"
            href="#branches"
            className="inline-flex h-14 items-center rounded-full border border-gold/50 bg-white/5 px-10 text-sm font-semibold uppercase tracking-widest text-warm-white backdrop-blur-xl"
          >
            Reserve Table
          </MagneticButton>
        </motion.div>
      </motion.div>

      <motion.a
        href="#story"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 4 }}
        className="absolute bottom-10 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2 text-warm-white/50"
        aria-label="Scroll down"
      >
        <span className="text-[10px] uppercase tracking-[0.3em]">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ChevronDown className="h-6 w-6 text-gold" />
        </motion.div>
      </motion.a>

      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_center,transparent_0%,#0B0B0B_75%)]" />
    </section>
  );
}

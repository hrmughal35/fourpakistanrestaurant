"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { BrandLogo } from "@/components/ui/BrandLogo";

interface LoadingScreenProps {
  onComplete: () => void;
}

export function LoadingScreen({ onComplete }: LoadingScreenProps) {
  const [progress, setProgress] = useState(0);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const start = performance.now();
    const duration = 2200;

    const tick = (now: number) => {
      const p = Math.min(100, ((now - start) / duration) * 100);
      setProgress(p);
      if (p < 100) {
        requestAnimationFrame(tick);
      } else {
        setTimeout(() => setDone(true), 400);
      }
    };
    requestAnimationFrame(tick);
  }, []);

  useEffect(() => {
    if (done) {
      const t = setTimeout(onComplete, 600);
      return () => clearTimeout(t);
    }
  }, [done, onComplete]);

  return (
    <AnimatePresence>
      {!done && (
        <motion.div
          className="fixed inset-0 z-[100] flex flex-col items-center justify-center bg-deep-black"
          exit={{ opacity: 0 }}
          transition={{ duration: 0.8, ease: [0.76, 0, 0.24, 1] }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center gap-8"
          >
            <div className="relative">
              <motion.div
                className="absolute -inset-8 rounded-full bg-gold/10 blur-3xl"
                animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <BrandLogo size={120} className="relative rounded-2xl" />
            </div>
            <div className="text-center">
              <p className="font-display text-4xl tracking-[0.3em] text-warm-white md:text-5xl">
                FOUR
              </p>
              <p className="mt-2 text-xs uppercase tracking-[0.5em] text-gold/80">
                (Your Logo)
              </p>
            </div>
          </motion.div>

          <div className="absolute bottom-16 left-1/2 w-64 -translate-x-1/2">
            <div className="h-px w-full overflow-hidden rounded-full bg-white/10">
              <motion.div
                className="h-full bg-gradient-to-r from-burgundy via-gold to-burgundy"
                style={{ width: `${progress}%` }}
              />
            </div>
            <p className="mt-4 text-center font-mono text-xs text-warm-white/40">
              Crafting experience {Math.round(progress)}%
            </p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

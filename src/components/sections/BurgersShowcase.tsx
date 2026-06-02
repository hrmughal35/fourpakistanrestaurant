"use client";

import { useRef } from "react";
import { SafeImage } from "@/components/ui/SafeImage";
import { motion, useInView, useMotionValue, useSpring, useTransform } from "framer-motion";
import { SIGNATURE_BURGERS } from "@/data/site";
import { formatPrice } from "@/lib/utils";

function BurgerCard({
  burger,
  index,
}: {
  burger: (typeof SIGNATURE_BURGERS)[number];
  index: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useTransform(y, [-0.5, 0.5], [8, -8]));
  const rotateY = useSpring(useTransform(x, [-0.5, 0.5], [-8, 8]));

  const handleMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.article
      ref={ref}
      initial={{ opacity: 0, y: 80 }}
      animate={inView ? { opacity: 1, y: 0 } : {}}
      transition={{ delay: index * 0.15, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
      onMouseMove={handleMove}
      onMouseLeave={handleLeave}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-transparent p-1 backdrop-blur-xl"
    >
      <div className="absolute -inset-px rounded-3xl bg-gradient-to-br from-gold/0 via-gold/0 to-gold/30 opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

      <div className="relative overflow-hidden rounded-[22px] bg-deep-black">
        <div className="relative aspect-[4/3] overflow-hidden">
          <SafeImage
            src={burger.image}
            alt={burger.name}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
            sizes="(max-width:768px) 100vw, 50vw"
          />
          <span className="absolute left-4 top-4 rounded-full bg-gold px-4 py-1 text-xs font-semibold uppercase tracking-wider text-deep-black">
            {burger.badge}
          </span>
        </div>

        <div className="p-8">
          <div className="flex items-start justify-between gap-4">
            <h3 className="font-display text-3xl text-warm-white">{burger.name}</h3>
            <p className="shrink-0 font-display text-2xl text-gold">
              {formatPrice(burger.price)}
            </p>
          </div>
          <p className="mt-3 text-sm leading-relaxed text-warm-white/60">
            {burger.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-2">
            {burger.ingredients.map((ing) => (
              <span
                key={ing}
                className="rounded-full border border-white/10 px-3 py-1 text-xs text-warm-white/70"
              >
                {ing}
              </span>
            ))}
          </div>
          <p className="mt-4 text-xs uppercase tracking-widest text-warm-white/40">
            {burger.calories} cal
          </p>
        </div>
      </div>
    </motion.article>
  );
}

export function BurgersShowcase() {
  const titleRef = useRef<HTMLDivElement>(null);
  const inView = useInView(titleRef, { once: true });

  return (
    <section id="burgers" className="relative bg-deep-black py-32">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(75,15,25,0.4),transparent_60%)]" />

      <div ref={titleRef} className="relative mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          className="mb-16 text-center"
        >
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Signature Collection
          </span>
          <h2 className="mt-4 font-display text-4xl text-warm-white md:text-6xl">
            Engineered to Obsess
          </h2>
          <p className="mx-auto mt-4 max-w-lg text-warm-white/50">
            Apple-grade product reveals. Burger-grade flavor explosions.
          </p>
        </motion.div>

        <div className="grid gap-8 md:grid-cols-2">
          {SIGNATURE_BURGERS.map((burger, i) => (
            <BurgerCard key={burger.id} burger={burger} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}

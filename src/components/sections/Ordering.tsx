"use client";

import { motion } from "framer-motion";
import { SafeImage } from "@/components/ui/SafeImage";
import { BRAND, IMAGES } from "@/data/site";
import { MagneticButton } from "@/components/effects/MagneticButton";

export function Ordering() {
  return (
    <section id="order" className="relative overflow-hidden py-32">
      <div className="absolute inset-0">
        <SafeImage
          src={IMAGES.burgerStack.replace("w=1200", "w=1920")}
          alt=""
          fill
          className="object-cover opacity-20"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-deep-black via-deep-black/90 to-burgundy/80" />
      </div>

      <div className="relative mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] text-gold"
        >
          Delivered Luxury
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 font-display text-4xl text-warm-white md:text-7xl"
        >
          Get Your Craving Delivered
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-6 max-w-lg text-warm-white/60"
        >
          Premium burgers at your door. Order via FoodPanda or WhatsApp for the
          fastest fix.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <MagneticButton
            as="a"
            href={BRAND.social.foodpanda}
            className="inline-flex h-16 min-w-[240px] items-center justify-center rounded-full bg-[#D70F64] px-10 text-sm font-bold uppercase tracking-widest text-white shadow-lg"
          >
            Order on FoodPanda
          </MagneticButton>
          <MagneticButton
            as="a"
            href={BRAND.social.whatsapp}
            className="inline-flex h-16 min-w-[240px] items-center justify-center rounded-full border-2 border-[#25D366] bg-[#25D366]/10 px-10 text-sm font-bold uppercase tracking-widest text-[#25D366]"
          >
            WhatsApp Order
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

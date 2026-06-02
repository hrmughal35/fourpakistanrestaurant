"use client";

import { motion } from "framer-motion";
import { Instagram, MessageCircle } from "lucide-react";
import { BRAND } from "@/data/site";
import { CONTACT_LINKS } from "@/lib/contact";
import { MagneticButton } from "@/components/effects/MagneticButton";

export function ContactSection() {
  return (
    <section
      id="contact"
      className="relative w-full max-w-[100vw] overflow-x-clip border-t border-white/5 bg-deep-black py-20 md:py-28"
    >
      <div className="mx-auto max-w-4xl px-6 text-center">
        <motion.span
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-xs uppercase tracking-[0.4em] text-gold"
        >
          Get in Touch
        </motion.span>
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-4 font-display text-3xl text-warm-white md:text-5xl"
        >
          Order · Reserve · Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="mx-auto mt-4 max-w-lg text-warm-white/60"
        >
          DM us on Instagram or message on WhatsApp — we&apos;ll get back fast.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
        >
          <MagneticButton
            as="a"
            href={CONTACT_LINKS.instagram}
            className="inline-flex h-14 min-w-[260px] items-center justify-center gap-3 rounded-full border border-white/15 bg-white/5 px-8 text-sm font-semibold uppercase tracking-widest text-warm-white backdrop-blur-xl transition hover:border-gold/50 hover:text-gold"
          >
            <Instagram className="h-5 w-5" />
            {BRAND.contact.instagramHandle}
          </MagneticButton>
          <MagneticButton
            as="a"
            href={CONTACT_LINKS.whatsapp}
            className="inline-flex h-14 min-w-[260px] items-center justify-center gap-3 rounded-full bg-[#25D366] px-8 text-sm font-bold uppercase tracking-widest text-white shadow-[0_0_40px_rgba(37,211,102,0.25)]"
          >
            <MessageCircle className="h-5 w-5" />
            WhatsApp · {BRAND.contact.whatsappDisplay}
          </MagneticButton>
        </motion.div>
      </div>
    </section>
  );
}

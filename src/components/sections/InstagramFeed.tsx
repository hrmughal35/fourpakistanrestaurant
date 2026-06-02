"use client";

import { SafeImage } from "@/components/ui/SafeImage";
import { motion } from "framer-motion";
import { Heart, Instagram } from "lucide-react";
import { BRAND, INSTAGRAM_POSTS } from "@/data/site";

export function InstagramFeed() {
  return (
    <section id="instagram" className="bg-deep-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-12 flex flex-col items-center justify-between gap-6 sm:flex-row">
          <div>
            <span className="text-xs uppercase tracking-[0.4em] text-gold">
              @FOURRestaurant
            </span>
            <h2 className="mt-2 font-display text-4xl text-warm-white md:text-5xl">
              Viral by Design
            </h2>
          </div>
          <a
            href={BRAND.social.instagram}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full border border-white/10 px-6 py-3 text-sm uppercase tracking-widest text-warm-white transition hover:border-gold hover:text-gold"
          >
            <Instagram className="h-4 w-4" />
            Follow FOUR
          </a>
        </div>

        <div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">
          {INSTAGRAM_POSTS.map((post, i) => (
            <motion.a
              key={post.id}
              href={BRAND.social.instagram}
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05 }}
              whileHover={{ scale: 1.03 }}
              className="group relative aspect-square overflow-hidden rounded-xl"
            >
              <SafeImage
                src={post.image}
                alt="FOUR Instagram"
                fill
                className="object-cover"
                sizes="200px"
              />
              <div className="absolute inset-0 flex items-center justify-center gap-2 bg-deep-black/70 opacity-0 transition-opacity group-hover:opacity-100">
                <Heart className="h-5 w-5 fill-gold text-gold" />
                <span className="text-sm font-semibold text-warm-white">
                  {post.likes}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
}

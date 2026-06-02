"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { MENU_CATEGORIES, MENU_ITEMS, type MenuCategory } from "@/data/site";
import { formatPrice } from "@/lib/utils";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";

export function MenuSection() {
  const [active, setActive] = useState<MenuCategory>("burgers");

  return (
    <section id="menu" className="relative w-full max-w-[100vw] overflow-x-clip bg-burgundy/20 py-20 md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <div className="text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Interactive Menu
          </span>
          <h2 className="mt-4 font-display text-4xl text-warm-white md:text-6xl">
            Curated Indulgence
          </h2>
        </div>

        <Tabs
          value={active}
          onValueChange={(v) => setActive(v as MenuCategory)}
          className="mt-12"
        >
          <TabsList className="mx-auto flex w-full max-w-3xl justify-center">
            {MENU_CATEGORIES.map((cat) => (
              <TabsTrigger key={cat.id} value={cat.id}>
                {cat.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {MENU_CATEGORIES.map((cat) => {
            const items = MENU_ITEMS.filter((item) => item.category === cat.id);
            return (
            <TabsContent key={cat.id} value={cat.id}>
              <AnimatePresence mode="wait">
                <motion.ul
                  key={active}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.35 }}
                  className="grid gap-4 sm:grid-cols-2"
                >
                  {items.map((item, i) => (
                    <motion.li
                      key={item.id}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.05 }}
                      className="group flex items-center justify-between rounded-2xl border border-white/10 bg-deep-black/60 p-6 backdrop-blur-xl transition hover:border-gold/30 hover:shadow-[0_0_40px_rgba(212,175,55,0.1)]"
                    >
                      <div>
                        <h3 className="font-display text-xl text-warm-white group-hover:text-gold transition-colors">
                          {item.name}
                        </h3>
                        <p className="mt-1 text-sm text-warm-white/50">{item.desc}</p>
                        <p className="mt-2 text-xs text-warm-white/30">
                          {item.calories} cal
                        </p>
                      </div>
                      <span className="font-display text-xl text-gold">
                        {formatPrice(item.price)}
                      </span>
                    </motion.li>
                  ))}
                </motion.ul>
              </AnimatePresence>
            </TabsContent>
          );
          })}
        </Tabs>
      </div>
    </section>
  );
}

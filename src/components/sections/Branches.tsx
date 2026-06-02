"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Clock, Phone, Navigation } from "lucide-react";
import { BRANCHES } from "@/data/site";
import { MagneticButton } from "@/components/effects/MagneticButton";

export function Branches() {
  const [active, setActive] = useState(BRANCHES[0].id);
  const selected = BRANCHES.find((b) => b.id === active) ?? BRANCHES[0];

  return (
    <section id="branches" className="bg-deep-black py-32">
      <div className="mx-auto max-w-7xl px-6">
        <div className="mb-16 text-center">
          <span className="text-xs uppercase tracking-[0.4em] text-gold">
            Lahore Locations
          </span>
          <h2 className="mt-4 font-display text-4xl text-warm-white md:text-6xl">
            Find Your FOUR
          </h2>
        </div>

        <div className="grid gap-8 lg:grid-cols-2">
          <div className="space-y-4">
            {BRANCHES.map((branch) => (
              <motion.button
                key={branch.id}
                type="button"
                onClick={() => setActive(branch.id)}
                whileHover={{ scale: 1.01 }}
                className={`w-full rounded-2xl border p-6 text-left transition ${
                  active === branch.id
                    ? "border-gold/50 bg-gold/10 shadow-[0_0_40px_rgba(212,175,55,0.15)]"
                    : "border-white/10 bg-white/5 hover:border-white/20"
                }`}
              >
                <h3 className="font-display text-xl text-warm-white">{branch.name}</h3>
                <p className="mt-2 flex items-start gap-2 text-sm text-warm-white/60">
                  <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-gold" />
                  {branch.address}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-warm-white/50">
                  <Clock className="h-4 w-4 text-gold" />
                  {branch.hours}
                </p>
                <p className="mt-2 flex items-center gap-2 text-sm text-warm-white/50">
                  <Phone className="h-4 w-4 text-gold" />
                  {branch.phone}
                </p>
              </motion.button>
            ))}
          </div>

          <motion.div
            key={active}
            initial={{ opacity: 0, scale: 0.98 }}
            animate={{ opacity: 1, scale: 1 }}
            className="group relative overflow-hidden rounded-3xl border border-white/10"
          >
            <iframe
              title={`Map - ${selected.name}`}
              src={`https://www.google.com/maps?q=${selected.lat},${selected.lng}&z=15&output=embed`}
              className="h-[400px] w-full grayscale transition duration-700 group-hover:grayscale-0"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
            <div className="absolute bottom-6 left-6 right-6 flex justify-center">
              <MagneticButton
                as="a"
                href={`https://www.google.com/maps/dir/?api=1&destination=${selected.lat},${selected.lng}`}
                className="inline-flex items-center gap-2 rounded-full bg-gold px-8 py-3 text-sm font-semibold uppercase tracking-widest text-deep-black"
              >
                <Navigation className="h-4 w-4" />
                Directions
              </MagneticButton>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

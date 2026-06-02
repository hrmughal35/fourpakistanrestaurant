"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { LoadingScreen } from "@/components/effects/LoadingScreen";
import { SmoothScroll } from "@/components/effects/SmoothScroll";
import { CustomCursor } from "@/components/effects/CustomCursor";
import { SauceParticles } from "@/components/effects/SauceParticles";
import { BurgerFollower } from "@/components/effects/BurgerFollower";
import { SoundToggle } from "@/components/effects/SoundToggle";
import { IngredientExplosion } from "@/components/effects/IngredientExplosion";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Story } from "@/components/sections/Story";
import { BurgersShowcase } from "@/components/sections/BurgersShowcase";
import { MenuSection } from "@/components/sections/MenuSection";
import { Gallery } from "@/components/sections/Gallery";
import { Reviews } from "@/components/sections/Reviews";
import { Branches } from "@/components/sections/Branches";
import { Ordering } from "@/components/sections/Ordering";
import { InstagramFeed } from "@/components/sections/InstagramFeed";

export function HomePage() {
  const [loaded, setLoaded] = useState(false);

  return (
    <>
      <AnimatePresence>
        {!loaded && <LoadingScreen onComplete={() => setLoaded(true)} />}
      </AnimatePresence>

      {loaded && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
        >
          <SmoothScroll>
            <CustomCursor />
            <SauceParticles />
            <BurgerFollower />
            <SoundToggle />
            <Navbar />
            <main>
              <Hero />
              <Story />
              <IngredientExplosion />
              <BurgersShowcase />
              <MenuSection />
              <Gallery />
              <Reviews />
              <Branches />
              <Ordering />
              <InstagramFeed />
            </main>
            <Footer />
          </SmoothScroll>
        </motion.div>
      )}
    </>
  );
}

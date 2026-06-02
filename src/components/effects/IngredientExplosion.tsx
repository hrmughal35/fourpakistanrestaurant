"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { INGREDIENTS_EXPLOSION } from "@/data/site";

gsap.registerPlugin(ScrollTrigger);

export function IngredientExplosion() {
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const items = section.querySelectorAll("[data-ingredient]");

    gsap.fromTo(
      items,
      { scale: 0, opacity: 0, rotation: -30 },
      {
        scale: 1,
        opacity: 1,
        rotation: 0,
        stagger: 0.08,
        duration: 0.8,
        ease: "back.out(2)",
        scrollTrigger: {
          trigger: section,
          start: "top 70%",
          toggleActions: "play none none reverse",
        },
      }
    );

    return () => {
      ScrollTrigger.getAll().forEach((t) => {
        if (t.trigger === section) t.kill();
      });
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative overflow-hidden py-24"
      aria-label="Ingredient showcase"
    >
      <div className="mx-auto flex max-w-5xl flex-wrap items-center justify-center gap-4 px-6">
        {INGREDIENTS_EXPLOSION.map((word) => (
          <span
            key={word}
            data-ingredient
            className="rounded-full border border-gold/20 bg-burgundy/30 px-6 py-3 font-display text-xl text-gold backdrop-blur-md md:text-2xl"
          >
            {word}
          </span>
        ))}
      </div>
    </section>
  );
}

"use client";

import { Instagram, MessageCircle } from "lucide-react";
import { CONTACT_LINKS } from "@/lib/contact";

export function FloatingContact() {
  return (
    <div className="fixed bottom-24 right-4 z-50 flex flex-col gap-3 md:bottom-8 md:right-6">
      <a
        href={CONTACT_LINKS.whatsapp}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat on WhatsApp"
        className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25D366] text-white shadow-lg transition hover:scale-105 hover:shadow-[0_0_24px_rgba(37,211,102,0.45)]"
      >
        <MessageCircle className="h-6 w-6" />
      </a>
      <a
        href={CONTACT_LINKS.instagram}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Follow on Instagram"
        className="flex h-12 w-12 items-center justify-center rounded-full border border-white/10 bg-deep-black/90 text-warm-white backdrop-blur-xl transition hover:scale-105 hover:border-gold hover:text-gold"
      >
        <Instagram className="h-5 w-5" />
      </a>
    </div>
  );
}

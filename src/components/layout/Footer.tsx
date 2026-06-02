import { Instagram, MessageCircle } from "lucide-react";
import { BRAND, DEVELOPER } from "@/data/site";
import { BrandLogo } from "@/components/ui/BrandLogo";
import { CONTACT_LINKS } from "@/lib/contact";

export function Footer() {
  return (
    <footer className="border-t border-white/5 bg-deep-black py-16">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-8 px-6 md:flex-row">
        <div className="flex items-center gap-4">
          <BrandLogo size={48} />
          <div>
            <p className="font-display text-2xl tracking-widest text-warm-white">
              FOUR
            </p>
            <p className="text-xs text-warm-white/40">
              Premium Burgers · {BRAND.city}, {BRAND.country}
            </p>
          </div>
        </div>
        <p className="text-center text-xs text-warm-white/30">
          © {new Date().getFullYear()} FOUR Restaurant. Crafted with obsession.
        </p>
        <div className="flex flex-col items-center gap-4 md:items-end">
          <div className="flex gap-6 text-xs uppercase tracking-widest text-warm-white/50">
            <a href="#menu" className="hover:text-gold">
              Menu
            </a>
            <a href="#branches" className="hover:text-gold">
              Locations
            </a>
            <a href="#contact" className="hover:text-gold">
              Contact
            </a>
          </div>
          <div className="flex flex-wrap items-center justify-center gap-4 text-xs text-warm-white/50">
            <a
              href={CONTACT_LINKS.instagram}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-gold"
            >
              <Instagram className="h-4 w-4" />
              {BRAND.contact.instagramHandle}
            </a>
            <a
              href={CONTACT_LINKS.whatsapp}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 transition hover:text-[#25D366]"
            >
              <MessageCircle className="h-4 w-4" />
              {BRAND.contact.whatsappDisplay}
            </a>
          </div>
        </div>
      </div>
      <div className="mx-auto mt-10 max-w-7xl border-t border-white/5 px-6 pt-8 text-center">
        <p className="text-xs text-warm-white/40">
          Website concept by{" "}
          <a
            href={DEVELOPER.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="font-medium text-gold transition hover:text-gold/80"
          >
            {DEVELOPER.name}
          </a>
          <span className="text-warm-white/30"> · {DEVELOPER.title}</span>
        </p>
        <p className="mt-2 text-[11px] text-warm-white/30">
          <a
            href={DEVELOPER.profileUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-gold"
          >
            hassanrazadev.tech
          </a>
          {" · "}
          <a
            href={DEVELOPER.linkedInUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="transition hover:text-gold"
          >
            LinkedIn
          </a>
        </p>
      </div>
    </footer>
  );
}

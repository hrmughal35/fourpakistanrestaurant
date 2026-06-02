import { BRAND } from "@/data/site";

export function getWhatsAppUrl(message = BRAND.contact.whatsappMessage) {
  const num = BRAND.contact.whatsappNumber.replace(/\D/g, "");
  const text = encodeURIComponent(message);
  return `https://wa.me/${num}?text=${text}`;
}

export const CONTACT_LINKS = {
  instagram: BRAND.contact.instagramUrl,
  whatsapp: getWhatsAppUrl(),
} as const;

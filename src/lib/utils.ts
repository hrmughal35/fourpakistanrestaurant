import { clsx, type ClassValue } from "clsx";
import { twMerge } from "tailwind-merge";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function formatPrice(pkr: number) {
  return `Rs. ${pkr.toLocaleString("en-PK")}`;
}

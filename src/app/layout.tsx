import type { Metadata, Viewport } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "FOUR Restaurant | Lahore's Premium Burger Experience",
  description:
    "FOUR Restaurant — Not Just Burgers. An Obsession. Lahore's most loved premium burger experience. Luxury fast-casual dining with international standards.",
  keywords: [
    "FOUR Restaurant",
    "premium burgers Lahore",
    "best burgers Pakistan",
    "luxury fast casual Lahore",
    "FOUR burger",
  ],
  openGraph: {
    title: "FOUR Restaurant | Premium Burgers Lahore",
    description: "Not Just Burgers. An Obsession.",
    type: "website",
    locale: "en_PK",
  },
  robots: { index: true, follow: true },
};

export const viewport: Viewport = {
  themeColor: "#0B0B0B",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen antialiased">{children}</body>
    </html>
  );
}

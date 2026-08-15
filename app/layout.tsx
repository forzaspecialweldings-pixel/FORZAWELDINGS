import type { Metadata, Viewport } from "next";

import { manrope, oswald } from "./fonts";
import "./globals.css";
import { IconSprite } from "@/view/IconSprite";
import { Header } from "@/view/Header";
import { Footer } from "@/view/Footer";
import { FloatingActions } from "@/view/FloatingActions";
import { LanguageProvider } from "@/model/i18n";

export const metadata: Metadata = {
  title: "Forza Special Welding LLC | Metal Fabrication & Welding in Mansfield, TX",
  description:
    "Custom metal fabrication, MIG and TIG welding, trailer repairs, structural repairs, metal furniture, and industrial metalwork in Mansfield and the Dallas–Fort Worth area.",
  openGraph: {
    title: "Forza Special Welding LLC | Built with Precision",
    description:
      "Custom fabrication, professional welding, and reliable metal repairs across the Dallas–Fort Worth area.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#08090A",
  width: "device-width",
  initialScale: 1,
};

const localBusinessJsonLd = {
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  name: "Forza Special Welding LLC",
  telephone: "+1-657-610-8935",
  address: {
    "@type": "PostalAddress",
    streetAddress: "6771 N FM Shop 107",
    addressLocality: "Mansfield",
    addressRegion: "TX",
  },
  sameAs: ["https://www.instagram.com/forzaspecialweldings/"],
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${oswald.variable} ${manrope.variable}`}>
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusinessJsonLd) }}
        />
        <IconSprite />
        <LanguageProvider>
          <Header />
          <main id="top">{children}</main>
          <Footer />
          <FloatingActions />
        </LanguageProvider>
      </body>
    </html>
  );
}

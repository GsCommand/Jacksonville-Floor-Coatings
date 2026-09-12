import type { Metadata } from "next";
import Script from "next/script";
import "./globals.css";
import "./placeholders.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Epoxy Flooring Jacksonville FL | Jacksonville Floor Coatings",
    template: "%s | Jacksonville Floor Coatings",
  },
  description: site.description,
  applicationName: site.name,
  keywords: [
    "epoxy flooring Jacksonville",
    "garage floor coatings Jacksonville",
    "polyaspartic flooring Jacksonville",
    "metallic epoxy Jacksonville",
    "resin flooring Jacksonville",
  ],
  openGraph: {
    title: "Jacksonville Floor Coatings",
    description: site.description,
    url: site.url,
    siteName: site.name,
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: site.name,
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1 },
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    "@id": `${site.url}/#business`,
    name: site.name,
    url: site.url,
    email: site.email,
    priceRange: "$$$",
    areaServed: [
      { "@type": "City", name: "Jacksonville", addressRegion: "FL" },
      { "@type": "Place", name: "Nocatee, Florida" },
      { "@type": "Place", name: "Ponte Vedra, Florida" },
      { "@type": "AdministrativeArea", name: "St. Johns County, Florida" },
      { "@type": "AdministrativeArea", name: "Duval County, Florida" },
    ],
    description: site.description,
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Floor coating services",
      itemListElement: [
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Epoxy flooring" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Garage floor coatings" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Polyaspartic floor coatings" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Metallic epoxy flooring" } },
        { "@type": "Offer", itemOffered: { "@type": "Service", name: "Commercial floor coatings" } },
      ],
    },
  };

  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <Script id="local-business-schema" type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}

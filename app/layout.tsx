import type { Metadata } from "next";
import "./globals.css";
import "./placeholders.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: { default: "Jacksonville Floor Coatings | Designer Resin Floors", template: "%s | Jacksonville Floor Coatings" },
  description: site.description,
  openGraph: { title: site.name, description: site.description, url: site.url, siteName: site.name, type: "website" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  const schema = {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: site.name,
    url: site.url,
    areaServed: ["Jacksonville, FL", "Nocatee, FL", "Ponte Vedra, FL", "St. Johns County, FL"],
    description: site.description,
  };
  return (
    <html lang="en">
      <body>
        <Header />
        {children}
        <Footer />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      </body>
    </html>
  );
}

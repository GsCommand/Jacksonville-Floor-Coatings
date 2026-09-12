import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "St. Johns Floor Coatings | Garage & Epoxy Floors",
  description: "Garage floor coatings, epoxy flooring, polyaspartic systems and resin flooring in St. Johns, FL and St. Johns County.",
  alternates: { canonical: "/service-areas/st-johns-floor-coatings" },
};

export default function StJohns() {
  return (
    <main>
      <section className="local-hero shell">
        <p className="eyebrow">St. Johns, Florida</p>
        <h1>Garage floor coatings and resin flooring for St. Johns homes.</h1>
        <p>Jacksonville Floor Coatings serves St. Johns and nearby St. Johns County communities with full-flake garage systems, epoxy and polyaspartic options, metallic resin and light-commercial floor coatings.</p>
        <div className="hero-actions"><Link href="/contact" className="button button-dark">Request a quote</Link><Link href="/epoxy-flooring-jacksonville" className="text-link">Compare coating systems <span>↗</span></Link></div>
        <div className="local-page-image-grid"><ImagePlaceholder className="local-page-image-primary" /><ImagePlaceholder className="local-page-image-secondary" /></div>
        <div className="local-cards">
          <article className="local-card"><h2>Garage systems</h2><p>Mechanically prepared full-flake and resinous systems for two- and three-car garages, workshops and home gyms.</p></article>
          <article className="local-card"><h2>Epoxy & polyaspartic</h2><p>System selection based on concrete condition, UV exposure, cure requirements and expected traffic.</p></article>
          <article className="local-card"><h2>Decorative resin</h2><p>Custom metallic and seamless finishes for concrete-slab interiors and design-forward commercial spaces.</p></article>
        </div>
      </section>
      <section className="section design-story"><div className="shell"><SectionHeading eyebrow="St. Johns floor coatings" title="The system should fit the slab and the way the room is used." copy="The coating name is only one part of the decision. Preparation, repairs, texture, UV exposure and cure requirements all matter." /><div className="three-grid benefit-grid"><article className="number-card"><span>01</span><h3>Inspect</h3><p>Confirm floor condition, previous coatings, cracks and use of the space.</p></article><article className="number-card"><span>02</span><h3>Prepare</h3><p>Mechanically prepare the concrete and address repairs required by the project scope.</p></article><article className="number-card"><span>03</span><h3>Protect</h3><p>Install the selected build and protective finish with a documented cure and return-to-service plan.</p></article></div></div></section>
      <section className="section shell consultation-panel"><div><p className="eyebrow">St. Johns quote</p><h2>Tell us about the floor before choosing a product.</h2><p>Share the project type, approximate square footage, ZIP code and current floor condition to start the estimate process.</p></div><ConsultationForm compact /></section>
    </main>
  );
}

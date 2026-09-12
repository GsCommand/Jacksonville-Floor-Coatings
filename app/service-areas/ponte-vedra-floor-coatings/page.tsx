import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Ponte Vedra Floor Coatings | Garage & Epoxy Floors",
  description: "Garage floor coatings, epoxy flooring, polyaspartic systems and designer resin floors in Ponte Vedra, FL.",
  alternates: { canonical: "/service-areas/ponte-vedra-floor-coatings" },
};

export default function PonteVedra() {
  return (
    <main>
      <section className="local-hero shell">
        <p className="eyebrow">Ponte Vedra, Florida</p>
        <h1>Premium garage floor coatings and resin floors for Ponte Vedra properties.</h1>
        <p>Jacksonville Floor Coatings serves Ponte Vedra with mechanically prepared garage coating systems, epoxy and polyaspartic options, and custom decorative resin for residential and light-commercial interiors.</p>
        <div className="hero-actions"><Link href="/contact" className="button button-dark">Request a quote</Link><Link href="/garage-floor-coatings" className="text-link">Garage floor systems <span>↗</span></Link></div>
        <div className="local-page-image-grid"><ImagePlaceholder className="local-page-image-primary" /><ImagePlaceholder className="local-page-image-secondary" /></div>
        <div className="local-cards">
          <article className="local-card"><h2>Finished garages</h2><p>Full-flake, quartz and resin systems designed around high-use residential garages and the surrounding finishes.</p></article>
          <article className="local-card"><h2>UV-aware systems</h2><p>Garage-door and exterior-edge sunlight are considered when selecting clear coats and exposed finish chemistry.</p></article>
          <article className="local-card"><h2>Designer resin</h2><p>Metallic and neutral seamless floors for interiors and customer-facing commercial spaces where appearance matters.</p></article>
        </div>
      </section>
      <section className="section design-story"><div className="shell"><SectionHeading eyebrow="Ponte Vedra floor systems" title="High-end spaces deserve disciplined preparation underneath the finish." copy="A premium result starts with concrete evaluation, mechanical preparation, repairs and a coating build chosen around exposure and use." /><div className="three-grid benefit-grid"><article className="number-card"><span>01</span><h3>Evaluate</h3><p>Existing coatings, cracking and surface condition are reviewed before the scope is finalized.</p></article><article className="number-card"><span>02</span><h3>Prepare</h3><p>The slab is mechanically prepared to create the profile required by the selected resinous system.</p></article><article className="number-card"><span>03</span><h3>Finish</h3><p>Color, texture, sheen and protective layers are selected for the actual environment and design goal.</p></article></div></div></section>
      <section className="section shell consultation-panel"><div><p className="eyebrow">Ponte Vedra quote</p><h2>Start with square footage and slab condition.</h2><p>Tell us whether the floor is bare concrete or previously coated, the approximate size and the finish you are considering.</p></div><ConsultationForm compact /></section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Nocatee Floor Coatings | Garage, Epoxy & Resin Floors",
  description: "Garage floor coatings, epoxy flooring, polyaspartic systems and designer resin floors for Nocatee, FL homes.",
  alternates: { canonical: "/service-areas/nocatee-floor-coatings" },
};

export default function Nocatee() {
  return (
    <main>
      <section className="local-hero shell">
        <p className="eyebrow">Nocatee, Florida</p>
        <h1>Garage floor coatings and designer resin floors for Nocatee homes.</h1>
        <p>Jacksonville Floor Coatings serves Nocatee with full-flake garage systems, epoxy and polyaspartic options, and decorative resin flooring for concrete-slab interiors. The recommendation starts with the slab, the use of the space and the look you want.</p>
        <div className="hero-actions"><Link href="/contact" className="button button-dark">Request a quote</Link><Link href="/garage-floor-coatings" className="text-link">Garage floor coatings <span>↗</span></Link></div>

        <div className="local-page-image-grid"><ImagePlaceholder className="local-page-image-primary" /><ImagePlaceholder className="local-page-image-secondary" /></div>

        <div className="local-cards">
          <article className="local-card"><h2>2- & 3-car garages</h2><p>Mechanically prepared full-flake, quartz and resinous systems for garages that function as parking, storage, workshops or home gyms.</p></article>
          <article className="local-card"><h2>Polyaspartic options</h2><p>UV-stable and faster-curing finish options where the product, site conditions and project schedule support them.</p></article>
          <article className="local-card"><h2>Designer interiors</h2><p>Neutral and movement-based resin finishes for concrete-slab interiors where a seamless custom floor fits the room.</p></article>
        </div>
      </section>

      <section className="section design-story">
        <div className="shell">
          <SectionHeading eyebrow="Built for the home" title="A Nocatee garage floor should complement the house, not look like an industrial afterthought." copy="Color blends, sheen and texture can be selected around cabinetry, wall color, lighting and how the garage is used while still prioritizing concrete preparation and coating performance." />
          <div className="three-grid benefit-grid">
            <article className="number-card"><span>01</span><h3>Preparation</h3><p>Existing coatings, cracks, edges and slab condition are evaluated before the new system is installed.</p></article>
            <article className="number-card"><span>02</span><h3>Design</h3><p>Flake blends and decorative finishes are chosen as part of the finished space rather than from a generic chip board alone.</p></article>
            <article className="number-card"><span>03</span><h3>Use</h3><p>Vehicle traffic, home-gym use, storage, sunlight and cleaning expectations influence the final recommendation.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell consultation-panel">
        <div><p className="eyebrow">Nocatee floor quote</p><h2>Tell us the garage or room size and what is on the floor now.</h2><p>Square footage, existing coating or bare concrete, visible cracks and the finish direction are enough to start the conversation.</p></div>
        <ConsultationForm compact />
      </section>
    </main>
  );
}

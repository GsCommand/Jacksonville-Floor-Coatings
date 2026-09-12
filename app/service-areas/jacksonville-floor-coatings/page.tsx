import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";

export const metadata: Metadata = {
  title: "Jacksonville Floor Coatings | Epoxy, Garage & Resin Floors",
  description: "Floor coatings in Jacksonville, FL including epoxy flooring, full-flake garage floors, polyaspartic systems and metallic resin interiors.",
  alternates: { canonical: "/service-areas/jacksonville-floor-coatings" },
};

export default function Jacksonville() {
  return (
    <main>
      <section className="local-hero shell">
        <p className="eyebrow">Jacksonville, Florida</p>
        <h1>Floor coatings for Jacksonville garages, homes and design-forward commercial spaces.</h1>
        <p>Jacksonville Floor Coatings serves the Jacksonville area with mechanically prepared garage floor systems, epoxy and polyaspartic options, metallic resin floors and light-commercial coatings. This page is the local service hub; the homepage remains the primary Jacksonville epoxy-flooring page.</p>
        <div className="hero-actions"><Link href="/contact" className="button button-dark">Request a quote</Link><Link href="/epoxy-flooring-jacksonville" className="text-link">Epoxy flooring Jacksonville <span>↗</span></Link></div>

        <div className="local-page-image-grid"><ImagePlaceholder className="local-page-image-primary" /><ImagePlaceholder className="local-page-image-secondary" /></div>

        <div className="local-cards">
          <article className="local-card"><h2>Garage floor coatings</h2><p>Full-flake and resinous systems for two- and three-car garages, workshops, home gyms and finished storage spaces.</p><Link href="/garage-floor-coatings" className="text-link">Garage systems ↗</Link></article>
          <article className="local-card"><h2>Epoxy & polyaspartic</h2><p>Coating chemistry selected around concrete condition, cure requirements, UV exposure and the way the floor is used.</p><Link href="/polyaspartic-floor-coatings" className="text-link">Polyaspartic options ↗</Link></article>
          <article className="local-card"><h2>Designer resin</h2><p>Metallic and seamless decorative floors for interiors, studios, salons, showrooms and statement spaces.</p><Link href="/metallic-epoxy-flooring" className="text-link">Metallic floors ↗</Link></article>
        </div>
      </section>

      <section className="section design-story">
        <div className="shell">
          <SectionHeading eyebrow="Jacksonville concrete conditions" title="The local environment matters more than a coating brand name." copy="Heat, humidity, open garage doors, exterior-edge sunlight and the condition of an existing slab all affect how a floor should be evaluated and installed." />
          <div className="three-grid benefit-grid">
            <article className="number-card"><span>01</span><h3>Slab evaluation</h3><p>Existing coatings, contamination, cracks, spalling and moisture risk are reviewed before the system is specified.</p></article>
            <article className="number-card"><span>02</span><h3>UV exposure</h3><p>Garages and commercial spaces near doors can receive significant Florida sunlight, making finish chemistry and color stability relevant.</p></article>
            <article className="number-card"><span>03</span><h3>Use-based design</h3><p>A working garage, home gym, salon and kitchen do not need the same texture, sheen or coating build.</p></article>
          </div>
        </div>
      </section>

      <section className="section shell consultation-panel">
        <div><p className="eyebrow">Jacksonville floor quote</p><h2>Start with the slab and square footage.</h2><p>Tell us the ZIP code, approximate size, current floor condition and whether the space is a garage, interior or commercial project.</p></div>
        <ConsultationForm compact />
      </section>
    </main>
  );
}

import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { finishCollection } from "@/lib/site";

export const metadata: Metadata = {
  title: "Epoxy Flooring Jacksonville FL | Garage Floor Coatings",
  description: "Jacksonville epoxy flooring, garage floor coatings, polyaspartic systems and designer resin floors. Professional concrete preparation and coating systems for Northeast Florida.",
  alternates: { canonical: "/" },
};

const services = [
  {
    title: "Garage floor coatings",
    kicker: "High-use concrete",
    text: "Full-flake, quartz and resinous garage systems with mechanical preparation, repair work and a finish selected for vehicle traffic and open-door exposure.",
    href: "/garage-floor-coatings",
  },
  {
    title: "Epoxy flooring",
    kicker: "The broad category",
    text: "Professional resinous flooring for garages, homes and light commercial spaces — with the actual chemistry selected around the slab and application.",
    href: "/epoxy-flooring-jacksonville",
  },
  {
    title: "Metallic resin floors",
    kicker: "Design-forward interiors",
    text: "Custom marble-inspired and movement-based floors for kitchens, studios, showrooms and statement spaces where the floor is part of the design.",
    href: "/metallic-epoxy-flooring",
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero shell wide-shell">
        <div className="home-hero-copy">
          <p className="eyebrow">Jacksonville · Nocatee · Ponte Vedra · St. Johns</p>
          <h1>Epoxy flooring in Jacksonville, <em>finished like it belongs there.</em></h1>
          <p className="hero-copy">
            Jacksonville Floor Coatings installs garage floor coatings, polyaspartic systems and designer resin floors with one priority underneath every finish: prepare the concrete correctly and build the system for the way the space is actually used.
          </p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">Request a floor consultation</Link>
            <Link className="text-link" href="/garage-floor-coatings">Explore garage floors <span>↗</span></Link>
          </div>
          <div className="hero-notes">
            <span>Mechanical preparation</span>
            <span>Garage floor systems</span>
            <span>Designer resin interiors</span>
          </div>
        </div>
        <div className="hero-gallery">
          <div className="hero-image hero-image-main"><ImagePlaceholder className="hero-image-placeholder" /></div>
          <div className="hero-sample finish-pearl"><span>Signature finish</span><strong>Pearl Stone</strong><small>Soft / architectural</small></div>
        </div>
      </section>

      <section className="editorial-strip">
        <div className="shell"><span>Epoxy flooring</span><i></i><span>Polyaspartic systems</span><i></i><span>Garage floor coatings</span><i></i><span>Metallic resin</span></div>
      </section>

      <section className="section shell">
        <SectionHeading
          eyebrow="Floor coating services"
          title="The right floor starts with the use case — not a product label."
          copy="Homeowners often search for epoxy flooring. The finished system may use epoxy, polyaspartic or another resin chemistry depending on the slab, cure window, UV exposure and design goal."
        />
        <div className="space-grid">
          {services.map((service, index) => (
            <Link href={service.href} className={`space-card space-card-${index + 1}`} key={service.title}>
              <ImagePlaceholder />
              <div className="space-overlay" />
              <div className="space-content"><p>{service.kicker}</p><h3>{service.title}</h3><span>{service.text}</span><b>Explore <em>↗</em></b></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section design-story">
        <div className="shell design-story-grid">
          <div className="design-story-visual"><ImagePlaceholder /></div>
          <div className="design-story-copy">
            <p className="eyebrow">Preparation first</p>
            <h2>Pretty coatings fail when the concrete underneath is ignored.</h2>
            <p>Existing paint, failed coatings, contamination, cracks, surface profile and moisture risk all matter. We evaluate the slab before choosing the coating build so the proposal addresses the floor you actually have.</p>
            <Link className="text-link" href="/epoxy-flooring-jacksonville">How professional epoxy flooring is built <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="Garage floor coatings Jacksonville" title="A practical service with a better design standard." copy="Garage floors are the repeatable core: mechanically prepared concrete, repairs where required, a controlled broadcast or coating system, and a protective finish selected for the environment." />
        <div className="three-grid benefit-grid">
          <article className="number-card"><span>01</span><h3>Full-flake systems</h3><p>Dense decorative broadcast systems for a consistent finished appearance and everyday garage use.</p></article>
          <article className="number-card"><span>02</span><h3>Polyaspartic options</h3><p>Fast-curing, UV-stable finish options when the site conditions and complete system support them.</p></article>
          <article className="number-card"><span>03</span><h3>Concrete repair</h3><p>Cracks, spalls, edges and failed coatings are addressed as part of the preparation scope rather than hidden under a new finish.</p></article>
        </div>
        <div className="hero-actions"><Link href="/garage-floor-coatings" className="button button-dark">Garage floor coatings</Link><Link href="/polyaspartic-floor-coatings" className="text-link">Polyaspartic flooring <span>↗</span></Link></div>
      </section>

      <section className="section dark-section">
        <div className="shell garage-editorial">
          <div className="garage-copy">
            <p className="eyebrow eyebrow-light">Designer resin</p>
            <h2>The premium side of floor coatings should feel like interior design.</h2>
            <p>Metallic and movement-based resin floors are developed around palette, contrast, sight lines and the room itself. The goal is controlled visual direction, not random swirls sold as custom work.</p>
            <Link href="/metallic-epoxy-flooring" className="button button-light">Explore metallic floors</Link>
          </div>
          <ImagePlaceholder className="garage-photo-placeholder" />
        </div>
      </section>

      <section className="section shell">
        <div className="collection-heading">
          <SectionHeading eyebrow="Signature finishes" title="A finish collection customers can actually understand." copy="Named design directions make decorative resin easier to specify. Each palette can move from restrained to dramatic while keeping its core character." />
          <Link href="/finishes" className="text-link">View all finishes <span>↗</span></Link>
        </div>
        <div className="finish-grid">
          {finishCollection.map((finish, index) => (
            <article className="finish-card" key={finish.name}>
              <div className={`finish-swatch ${finish.className}`}><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div><p>{finish.mood}</p><h3>{finish.name}</h3><span>{finish.description}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section local-feature">
        <div className="shell local-grid">
          <div>
            <p className="eyebrow">Northeast Florida</p>
            <h2>Jacksonville first. Nocatee, Ponte Vedra and St. Johns built into the service area.</h2>
            <p>Local pages focus on the actual coating services offered in each area instead of duplicating generic city copy. As completed projects grow, those pages can become the project library for each market.</p>
            <div className="local-links"><Link href="/service-areas/nocatee-floor-coatings">Nocatee floor coatings ↗</Link><Link href="/service-areas/jacksonville-floor-coatings">Jacksonville service area ↗</Link></div>
          </div>
          <ImagePlaceholder className="local-photo-placeholder" />
        </div>
      </section>

      <section className="section shell consultation-panel home-consultation">
        <div><p className="eyebrow">Get a floor recommendation</p><h2>Tell us what you have, how you use it and what you want it to become.</h2><p>Share the approximate square footage, current floor condition, project type and neighborhood. We can use that to narrow the right next step.</p></div>
        <ConsultationForm compact />
      </section>
    </main>
  );
}

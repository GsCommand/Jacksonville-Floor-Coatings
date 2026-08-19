import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { finishCollection } from "@/lib/site";

const spaces = [
  {
    title: "Home interiors",
    kicker: "The signature work",
    text: "Kitchens, open living areas and interior spaces where the floor becomes part of the architecture.",
    href: "/residential-resin-flooring",
    imageBrief: "HOME INTERIORS — Finished luxury kitchen / open living resin floor",
    imageDetail: "Vertical/editorial composition. Show cabinetry, furniture and daylight so the floor reads as luxury home improvement, not a coating sample.",
  },
  {
    title: "Garage floors",
    kicker: "The everyday work",
    text: "Prepared coating systems with refined flake, quartz and solid-color palettes for garages that feel finished.",
    href: "/garage-floor-coatings",
    imageBrief: "GARAGE FLOORS — Finished 2–3 car garage after coating",
    imageDetail: "Wide clean garage with refined flake or quartz floor, finished walls/storage and enough floor area visible to understand the transformation.",
  },
  {
    title: "Commercial spaces",
    kicker: "Built for business",
    text: "Design-conscious resin floors for retail, salons, studios, offices and showrooms.",
    href: "/commercial-floor-coatings",
    imageBrief: "COMMERCIAL — Salon, boutique, studio or showroom resin floor",
    imageDetail: "Design-forward finished space. The room should feel premium and occupied; floor must remain clearly visible.",
  },
];

export default function Home() {
  return (
    <main>
      <section className="home-hero shell wide-shell">
        <div className="home-hero-copy">
          <p className="eyebrow">Jacksonville · Nocatee · Northeast Florida</p>
          <h1>Beautiful resin floors for your home. <em>Tough coatings for your garage.</em></h1>
          <p className="hero-copy">Jacksonville Floor Coatings is being built as a design-forward flooring studio: custom resin interiors first, practical garage systems every day.</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/finishes">Explore floor designs</Link>
            <Link className="text-link" href="/contact">Request a consultation <span>↗</span></Link>
          </div>
          <div className="hero-notes"><span>Designer resin interiors</span><span>Garage floor coatings</span><span>Commercial spaces</span></div>
        </div>
        <div className="hero-gallery">
          <div className="hero-image hero-image-main">
            <ImagePlaceholder
              className="hero-image-placeholder"
              label="HERO — Luxury kitchen + open living room with finished resin floor"
              detail="Wide landscape image. Modern Nocatee/Ponte Vedra-style interior; neutral cabinetry; soft daylight; resin floor visible across roughly 35–45% of the frame. This should be the strongest image on the entire site."
            />
          </div>
          <div className="hero-sample finish-pearl"><span>01</span><strong>Pearl Stone</strong><small>Soft / architectural</small></div>
        </div>
      </section>

      <section className="editorial-strip"><div className="shell"><span>Designer resin interiors</span><i></i><span>Garage floor systems</span><i></i><span>Jacksonville & St. Johns</span></div></section>

      <section className="section shell">
        <SectionHeading eyebrow="Choose your space" title="The room leads. The coating system follows." copy="Most coating companies begin with chemistry. We begin with where the floor lives, what it should look like, and what it needs to withstand." />
        <div className="space-grid">
          {spaces.map((space, index) => (
            <Link href={space.href} className={`space-card space-card-${index + 1}`} key={space.title}>
              <ImagePlaceholder label={space.imageBrief} detail={space.imageDetail} />
              <div className="space-overlay"></div>
              <div className="space-content"><p>{space.kicker}</p><h3>{space.title}</h3><span>{space.text}</span><b>Explore <em>↗</em></b></div>
            </Link>
          ))}
        </div>
      </section>

      <section className="section design-story">
        <div className="shell design-story-grid">
          <div className="design-story-visual">
            <ImagePlaceholder
              label="SIGNATURE INTERIOR — Pearl Stone kitchen / open living project"
              detail="Finished real project once available. Low-contrast warm white and graphite movement. Photograph from room height with cabinetry, island and adjacent living area visible."
            />
          </div>
          <div className="design-story-copy">
            <p className="eyebrow">Residential resin, reconsidered</p>
            <h2>Not an epoxy floor dropped into a kitchen. A floor designed for the kitchen.</h2>
            <p>Cabinetry, natural light, wall color, sight lines and furniture should influence the finish. Our design collections are being built around complete rooms rather than isolated pigment samples.</p>
            <Link className="text-link" href="/residential-resin-flooring">Residential resin flooring <span>↗</span></Link>
          </div>
        </div>
      </section>

      <section className="section shell">
        <div className="collection-heading"><SectionHeading eyebrow="The finish collection" title="Choose a feeling before you choose a formula." copy="Named design directions make custom resin easier to understand. Each finish can evolve from soft to balanced to dramatic while keeping its core palette." /><Link href="/finishes" className="text-link">View the collection <span>↗</span></Link></div>
        <div className="finish-grid">
          {finishCollection.map((finish, index) => (
            <article className="finish-card" key={finish.name}>
              <div className={`finish-swatch ${finish.className}`}><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div><p>{finish.mood}</p><h3>{finish.name}</h3><span>{finish.description}</span></div>
            </article>
          ))}
        </div>
      </section>

      <section className="section dark-section">
        <div className="shell garage-editorial">
          <div className="garage-copy"><p className="eyebrow eyebrow-light">Garage collection</p><h2>The practical side of the business should still look designed.</h2><p>Garage floors keep the calendar moving. We will standardize preparation, flake and quartz systems while presenting palettes that actually complement Northeast Florida homes.</p><Link href="/garage-floor-coatings" className="button button-light">Explore garage floors</Link></div>
          <ImagePlaceholder
            className="garage-photo-placeholder"
            label="GARAGE FEATURE — Upscale Nocatee / Ponte Vedra 3-car garage"
            detail="Finished coating job. Wide horizontal view from driveway or rear corner. Refined gray/off-white palette; clean walls and storage; floor should dominate the lower half of frame."
          />
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="The process" title="Discover. Design. Prepare. Pour. Protect. Reveal." copy="A simple client experience on the surface, with disciplined preparation and system selection underneath." />
        <div className="process-home-grid">{["Discover", "Design", "Prepare", "Pour", "Protect", "Reveal"].map((item, index) => <div key={item}><span>{String(index + 1).padStart(2, "0")}</span><strong>{item}</strong></div>)}</div>
      </section>

      <section className="section local-feature"><div className="shell local-grid"><div><p className="eyebrow">Start local</p><h2>Nocatee and Ponte Vedra are where this brand should become recognizable.</h2><p>We are building a local-first project library around high-end residential interiors and garages, then expanding that proof across Jacksonville and Northeast Florida.</p><div className="local-links"><Link href="/service-areas/nocatee-floor-coatings">Nocatee floor coatings ↗</Link><Link href="/service-areas/jacksonville-floor-coatings">Jacksonville floor coatings ↗</Link></div></div><ImagePlaceholder className="local-photo-placeholder" label="LOCAL PROOF — Completed Nocatee / Ponte Vedra project" detail="Use a recognizable upscale-home context: finished interior or garage with enough surrounding architecture to feel local and residential. This eventually becomes a real project link." /></div></section>

      <section className="section shell consultation-panel home-consultation"><div><p className="eyebrow">Start with the space</p><h2>Show us the room you want to change.</h2><p>Send photos, approximate square footage and the look you are after. We will use that to guide the first design conversation.</p></div><ConsultationForm compact /></section>
    </main>
  );
}

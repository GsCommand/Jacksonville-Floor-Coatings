"use client";

import Image from "next/image";
import Link from "next/link";
import { FormEvent, useRef, useState } from "react";
import { ConsultationForm } from "@/components/ConsultationForm";
import { navigationServices as services, serviceAreas as areas } from "@/lib/design";


const spaces = [
  { name: "2-car garage", title: "A better everyday garage", text: "A coordinated full-flake finish for parking, projects, storage and everything in between.", image: "garage", href: "/garage-floor-coatings" },
  { name: "Home gym", title: "Make room for your routine", text: "Turn a garage into a brighter, easier-to-clean space that works with your equipment and daily routine.", image: "gym", href: "/garage-floor-coatings" },
  { name: "Designer interiors", title: "Bring the whole room together", text: "Soft pearl, warm neutrals and marble-inspired movement for a seamless interior finish.", image: "metallic", href: "/metallic-epoxy-flooring" },
  { name: "3-car garage", title: "A finish worthy of the space", text: "Give a larger garage a consistent, intentional appearance from the threshold to the far wall.", image: "hero", href: "/garage-floor-coatings" },
  { name: "Commercial", title: "Make a strong first impression", text: "Resinous floors selected for the traffic, appearance and maintenance needs of your business.", image: "commercial", href: "/commercial-floor-coatings" },
];
const blends = [
  { name: "Coastal Gray", image: "coastal-gray", description: "Light gray · charcoal · white" },
  { name: "Sandstone", image: "sandstone", description: "Warm beige · ivory · taupe" },
  { name: "Graphite", image: "graphite", description: "Charcoal · slate · silver" },
  { name: "Tuxedo", image: "tuxedo", description: "White · black" },
  { name: "Blue Tide", image: "blue-tide", description: "Slate blue · gray · white" },
];
function CheckIcon() { return <svg viewBox="0 0 40 40" aria-hidden="true"><circle cx="20" cy="20" r="14" fill="none" stroke="currentColor" strokeWidth="2"/><path d="m11 20 6 7L32 9" fill="none" stroke="currentColor" strokeWidth="4" strokeLinecap="round" strokeLinejoin="round"/></svg>; }

function AreaCheck() {
  const [result, setResult] = useState("");
  function check(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const zip = String(new FormData(event.currentTarget).get("serviceZip") || "").trim();
    if (!/^\d{5}$/.test(zip)) { setResult("Enter a five-digit ZIP code."); return; }
    // ZIP prefixes are a regional guide, not an address-level coverage guarantee.
    setResult(/^32[02]/.test(zip) ? "You're in our Northeast Florida region. Send your address with your quote request so we can confirm service." : "Outside our usual Jacksonville region? Send your location and we'll confirm whether we can help.");
  }
  return <form className="jfc-area-check" onSubmit={check}><label htmlFor="serviceZip">Do we serve your area?</label><div><input id="serviceZip" name="serviceZip" inputMode="numeric" autoComplete="postal-code" pattern="[0-9]{5}" maxLength={5} required placeholder="ZIP code"/><button type="submit">Check ZIP <span aria-hidden="true">→</span></button></div><p aria-live="polite">{result || "Serving Jacksonville, Nocatee, Ponte Vedra and St. Johns."}</p></form>;
}

export function HomePage() {
  const track = useRef<HTMLDivElement>(null);
  const [selected, setSelected] = useState(0);
  function move(direction: number) { const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches; track.current?.scrollBy({ left: direction * (track.current.clientWidth * 0.8), behavior: reduced ? "instant" : "smooth" }); }
  return <div className="jfc-home">
    <main id="main-content">
      <section className="jfc-hero">
        <Image className="jfc-hero-photo" src="/images/home/hero.webp" alt="Design visualization of an open Florida garage with a gray full-flake coating floor" fill priority sizes="100vw"/>
        <div className="jfc-hero-wash"/>
        <div className="jfc-container jfc-hero-grid"><div className="jfc-hero-copy"><p className="jfc-kicker">JACKSONVILLE FLOOR COATINGS</p><h1>Epoxy flooring<br/>in Jacksonville.<br/><em>Built</em> for the way<br/>you live.</h1><p className="jfc-hero-intro">Garage floor coatings, polyaspartic systems and designer resin floors. Properly prepared. Thoughtfully finished.</p><AreaCheck/></div><div className="jfc-quote-card" id="quote"><h2>Your new floor starts here.</h2><p>Request a free consultation. Tell us where you are and we’ll help you choose the right next step.</p><ConsultationForm compact quick/><small>Prefer email? <a href="mailto:hello@jacksonvillefloorcoatings.com">hello@jacksonvillefloorcoatings.com</a></small></div></div>
        <span className="jfc-visual-label">Design visualization</span>
      </section>
      <section className="jfc-section jfc-services" id="services"><div className="jfc-container"><div className="jfc-section-heading"><h2>A beautiful floor for the space you use.</h2><p>From everyday garages to statement interiors, find a finish that fits your home or business.</p></div><div className="jfc-service-grid">{services.map(s=><Link key={s.title} href={s.href} className="jfc-service-tile"><Image src={`/images/home/${s.image}.webp`} alt={`${s.title.toLowerCase()} design visualization`} fill sizes="(max-width: 600px) 85vw, (max-width: 900px) 30vw, 20vw"/><span>{s.title}</span></Link>)}</div><div className="jfc-benefits">{["Easy-to-clean finishes","Mechanical preparation","Personalized finish choices","Clear project timelines"].map(t=><div key={t}><CheckIcon/><h3>{t}</h3></div>)}</div></div></section>
      <section className="jfc-confidence"><div className="jfc-container"><div className="jfc-section-heading"><p className="jfc-script">The details make the difference.</p><h2>Know what goes into your floor.</h2></div><div className="jfc-confidence-grid">{[
        ["01", "A plan for your concrete", "Existing paint, cracks, contamination and moisture concerns are evaluated before the coating system is selected."],
        ["02", "Preparation with purpose", "Mechanical preparation, edge work and the repairs in your proposal build the foundation beneath the finish."],
        ["03", "A finish chosen for you", "Compare the color, texture and coating options for your garage, interior or commercial space."],
        ["04", "A clear return-to-use plan", "Installation and cure schedules are explained around the selected products and actual site conditions."],
      ].map(([n,t,p])=><article key={n}><span>{n}</span><h3>{t}</h3><p>{p}</p></article>)}</div></div></section>
      <section className="jfc-section jfc-spaces"><div className="jfc-container"><div className="jfc-carousel-heading"><div><p className="jfc-script">Picture the possibilities.</p><h2>More than a floor. Your next space.</h2></div><div className="jfc-carousel-controls"><button type="button" onClick={()=>move(-1)} aria-label="Previous floor ideas" aria-controls="floor-ideas">←</button><button type="button" onClick={()=>move(1)} aria-label="Next floor ideas" aria-controls="floor-ideas">→</button></div></div><div className="jfc-space-track" id="floor-ideas" ref={track} tabIndex={0} aria-label="Floor design ideas carousel">{spaces.map(s=><article className="jfc-space-card" key={s.name}><div className="jfc-space-photo"><Image src={`/images/home/${s.image}.webp`} alt={`${s.name} floor design visualization`} fill sizes="(max-width: 600px) 85vw, 30vw"/><span>{s.name}</span></div><div className="jfc-space-copy"><h3>{s.title}</h3><p>{s.text}</p><strong>Quoted for your floor & scope</strong><Link href={s.href}>Explore this space <span aria-hidden="true">→</span></Link></div></article>)}</div><p className="jfc-image-note">Images are design visualizations, not completed Jacksonville Floor Coatings projects.</p></div></section>
      <section className="jfc-budget"><div className="jfc-container jfc-budget-grid"><div><p className="jfc-script">A clear scope. A confident choice.</p><h2>Start with the floor. Get a tailored estimate.</h2><p>Garage size, existing coatings, repairs and the selected system determine the price. We’ll review the details before recommending your coating build.</p><div className="jfc-budget-points"><span><CheckIcon/> Preparation & repairs</span><span><CheckIcon/> Finish & cure schedule</span></div><a href="#quote" className="jfc-button">REQUEST YOUR FREE ESTIMATE →</a></div><div className="jfc-budget-photo"><Image src="/images/home/prep.webp" alt="Illustration of a concrete grinder and dust extractor preparing a garage slab" fill sizes="(max-width: 800px) 100vw, 35vw"/></div></div></section>
      <section className="jfc-section jfc-colors" id="colors"><div className="jfc-container"><div className="jfc-section-heading"><h2>Find a color that feels at home.</h2><p>Explore flake color directions, then confirm your blend with a physical sample.</p></div><div className="jfc-blend-grid">{blends.map((b,i)=><button key={b.name} className={`jfc-blend ${selected===i?"selected":""}`} onClick={()=>setSelected(i)} aria-pressed={selected===i}><span className="jfc-blend-photo"><Image src={`/images/home/${b.image}.webp`} alt={`Illustrative ${b.name} decorative flake blend`} fill sizes="(max-width: 600px) 42vw, 18vw"/></span><strong>{b.name}</strong></button>)}</div><div className="jfc-selected-blend" aria-live="polite"><div><strong>{blends[selected].name}</strong><p>{blends[selected].description}</p></div><Link href={`/contact?finish=${encodeURIComponent(blends[selected].name)}`}>Ask about this blend →</Link></div><p className="jfc-image-note">Illustrative color directions. Actual flake products, scale and appearance are confirmed with samples.</p><Link className="jfc-button" href="/finishes">EXPLORE DESIGNER RESIN FINISHES →</Link></div></section>
      <section className="jfc-promise"><div className="jfc-container jfc-promise-grid"><div><p className="jfc-script">Our approach</p><h2>A great finish starts below the surface.</h2><p>Jacksonville Floor Coatings brings mechanical preparation and thoughtful finish selection together. We build garage and resin floor systems around the concrete, the environment and the way the space will be used.</p><p>From full-flake garage floors to refined metallic interiors, let’s make your floor feel like part of the home.</p><a href="#quote" className="jfc-button">LET’S PLAN YOUR FLOOR →</a></div><div className="jfc-promise-photo"><Image src="/images/home/metallic.webp" alt="Design visualization of a coastal interior with pearl marble-inspired resin flooring" fill sizes="(max-width: 800px) 100vw, 50vw"/><span>Designer resin · Concept visualization</span></div></div></section>
      <section className="jfc-area" id="service-area"><div className="jfc-container"><p className="jfc-kicker">LOCAL FLOOR COATING SERVICES</p><h2>Jacksonville. Nocatee. Ponte Vedra. St. Johns.</h2><p>Explore floor coating options for your Northeast Florida home.</p><div>{areas.map(([name,href])=><Link href={href} key={name}>{name} <span aria-hidden="true">↗</span></Link>)}</div></div></section>
      <section className="jfc-last-cta"><div className="jfc-container"><h2>Ready to give your floor a new beginning?</h2><a className="jfc-button jfc-button-white" href="#quote">REQUEST A QUOTE →</a></div></section>
    </main>
  </div>;
}

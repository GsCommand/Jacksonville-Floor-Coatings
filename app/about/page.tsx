import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, DesignCards, DesignImage, GuideLinks, QuoteSection } from "@/components/Design";

export const metadata: Metadata = {
  title: "About Jacksonville Floor Coatings",
  description: "Jacksonville Floor Coatings focuses on professional concrete preparation, garage floor systems and design-forward resin flooring across Northeast Florida.",
  alternates: { canonical: "/about" },
};

export default function About() { return <main id="main-content">
<PageHero eyebrow="ABOUT JACKSONVILLE FLOOR COATINGS" title="A great finish starts below the surface." intro="Garage floor coatings, polyaspartic systems and designer resin interiors for Northeast Florida. We bring concrete preparation and finish selection into the same conversation." image="/images/home/prep.webp" secondary="Explore our services" secondaryHref="/garage-floor-coatings"/>
<section className="design-section shell"><div className="design-section-head"><p className="jfc-script">Thoughtful from the start.</p><h2>A floor that belongs in your space.</h2><p>A garage can be practical and look finished. A resin interior can make a statement and still have a clear care plan. The recommendation begins with how you use the room.</p></div><DesignCards items={[
{title:"Preparation first",body:"Existing paint, adhesive, contamination, cracks and moisture risk are reviewed before the coating build is chosen. The proposal should describe the work beneath the decorative finish."},
{title:"Design with intention",body:"Wall color, cabinets, daylight and furniture help shape the palette. Physical samples clarify the direction before color and movement become part of your floor."},
{title:"The complete system",body:"Base coats, decorative layers and protective finishes each serve a purpose. The system should fit the substrate, exposure and expected traffic."}]}/></section>
<section className="design-tint"><div className="shell design-split"><div><p className="jfc-script">Clear expectations make better projects.</p><h2>Know the scope before work starts.</h2><p>We discuss floor area, removal, repairs, product selection and the finish you want. Access, furniture, ventilation and the cure schedule are part of that conversation.</p><p>Ask about the coating layers, maintenance and written project terms. A good-looking sample is one part of choosing the right floor.</p><Link className="button button-dark" href="/contact">LET’S TALK ABOUT YOUR FLOOR →</Link></div><DesignImage src="/images/finishes/pearl-stone.webp" alt="Warm white decorative resin living room concept"/></div></section>
<GuideLinks category="preparation-moisture"/><QuoteSection title="A better floor starts with a conversation."/></main>; }

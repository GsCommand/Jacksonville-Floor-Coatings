import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, DesignImage, DesignCards, QuoteSection } from "@/components/Design";
import { finishCollection } from "@/lib/site";

export const metadata: Metadata = {
  title: "Designer Resin Floor Finishes Jacksonville",
  description: "Explore Jacksonville Floor Coatings designer resin finish directions for metallic epoxy, residential interiors and statement spaces.",
  alternates: { canonical: "/finishes" },
};

export default function Finishes() { return <main id="main-content">
<PageHero eyebrow="THE FINISH COLLECTION" title="Find a finish that feels at home." intro="Soft pearl. Warm mineral tones. Dramatic charcoal. Explore six decorative resin directions, then refine the palette, movement and protective finish around your room." image="/images/finishes/pearl-stone.webp" secondary="Metallic resin floors" secondaryHref="/metallic-epoxy-flooring"/>
<section className="design-section shell"><div className="design-section-head"><p className="jfc-script">Picture the possibilities.</p><h2>Six directions. Your own interpretation.</h2><p>These images illustrate design ideas. Hand-worked resin has natural variation; final colors and movement are confirmed with physical samples.</p></div><div className="design-finish-grid">{finishCollection.map(finish=><article className="design-finish-card" key={finish.name}><DesignImage src={`/images/finishes/${finish.name.toLowerCase().replaceAll(" ","-")}.webp`} alt={`${finish.name} resin floor room concept`}/><div><p className="eyebrow">{finish.mood}</p><h2>{finish.name}</h2><p>{finish.description}</p><Link className="text-link" href={`/contact?finish=${encodeURIComponent(finish.name)}`}>Ask about this finish →</Link></div></article>)}</div></section>
<section className="design-tint"><div className="shell"><div className="design-section-head"><p className="jfc-script">Bring the room together.</p><h2>From inspiration to a practical floor.</h2></div><DesignCards items={[
{title:"Choose the palette",body:"Bring paint, cabinetry and furniture references. Look at samples in your room’s lighting before committing to a warm or cool direction."},
{title:"Set the movement",body:"Decide whether the floor should quietly connect the room or become its focal point. Fluid resin follows a direction without repeating a photo exactly."},
{title:"Confirm the protective finish",body:"Sheen, traction and care requirements belong in the design discussion. The final clear finish is selected around how the room will be used."}]}/></div></section>
<section className="design-section shell"><div className="design-section-head"><h2>Looking for a full-flake garage finish?</h2><p>Compare Coastal Gray, Sandstone, Graphite, Tuxedo and Blue Tide on the homepage. Actual products and color blends are confirmed using physical samples.</p><Link href="/#colors" className="button button-dark">EXPLORE GARAGE COLORS →</Link></div></section><QuoteSection title="Let’s find your finish."/></main>; }

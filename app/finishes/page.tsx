import type { Metadata } from "next";
import Link from "next/link";
import { PageHero, DesignImage, DesignCards, QuoteSection } from "@/components/Design";
import { finishCollection } from "@/lib/site";

export const metadata: Metadata = {
  title: "Designer Resin Floor Finishes Jacksonville",
  description: "Explore Jacksonville Floor Coatings designer resin finish directions for metallic epoxy, residential interiors and statement spaces.",
  alternates: { canonical: "/finishes" },
};

const flakeFinishes = [
 {name:"Gray Flake",image:"gray",description:"A neutral mix of silver, charcoal and white for a clean garage finish."},
 {name:"Blue Flake",image:"blue",description:"Blue, navy and light accents for a bolder floor with a cool palette."},
 {name:"Tan Flake",image:"tan",description:"Warm beige, cream and brown tones for an understated natural look."},
 {name:"Red Flake",image:"red",description:"Deep red with charcoal and white accents for a statement garage floor."},
 {name:"Custom Teal, Black & Gold",image:"jax-custom",description:"A Jaguars-inspired color direction. Refine the blend and chip size with a physical sample."},
];

export default function Finishes() { return <main id="main-content">
<PageHero eyebrow="THE FINISH COLLECTION" title="Find a finish that feels at home." intro="Soft pearl. Warm mineral tones. Dramatic charcoal. Explore six decorative resin directions and five full-flake color ideas, then refine the palette and protective finish around your space." image="/images/finishes/pearl-stone.webp" secondary="Metallic resin floors" secondaryHref="/metallic-epoxy-flooring"/>
<section className="design-section shell"><div className="design-section-head"><p className="jfc-script">Picture the possibilities.</p><h2>Six directions. Your own interpretation.</h2><p>These images illustrate design ideas. Hand-worked resin has natural variation; final colors and movement are confirmed with physical samples.</p></div><div className="design-finish-grid">{finishCollection.map(finish=><article className="design-finish-card" key={finish.name}><DesignImage src={`/images/finishes/${finish.name.toLowerCase().replaceAll(" ","-")}.webp`} alt={`${finish.name} resin floor room concept`}/><div><p className="eyebrow">{finish.mood}</p><h2>{finish.name}</h2><p>{finish.description}</p><Link className="text-link" href={`/contact?finish=${encodeURIComponent(finish.name)}`}>Ask about this finish →</Link></div></article>)}</div></section>
<section className="design-tint"><div className="shell"><div className="design-section-head"><p className="jfc-script">Bring the room together.</p><h2>From inspiration to a practical floor.</h2></div><DesignCards items={[
{title:"Choose the palette",body:"Bring paint, cabinetry and furniture references. Look at samples in your room’s lighting before committing to a warm or cool direction."},
{title:"Set the movement",body:"Decide whether the floor should quietly connect the room or become its focal point. Fluid resin follows a direction without repeating a photo exactly."},
{title:"Confirm the protective finish",body:"Sheen, traction and care requirements belong in the design discussion. The final clear finish is selected around how the room will be used."}]}/></div></section>
<section className="design-section shell" id="flake-finishes"><div className="design-section-head"><p className="jfc-script">Color for everyday spaces.</p><h2>Find your full-flake finish.</h2><p>Explore five flake-floor color directions for garages and other suitable spaces. These are design visualizations; confirm the actual blend, flake size and sheen with physical samples.</p></div><div className="design-finish-grid">{flakeFinishes.map(finish=><article className="design-finish-card" key={finish.image}><DesignImage src={`/images/learning/cost-floors/${finish.image}.webp`} alt={`${finish.name} garage floor design visualization`}/><div><p className="eyebrow">FULL-FLAKE COLOR DIRECTION</p><h2>{finish.name}</h2><p>{finish.description}</p><Link className="text-link" href={`/contact?finish=${encodeURIComponent(finish.name)}`}>Ask about this finish →</Link></div></article>)}</div><div className="design-section-head"><Link href="/garage-floor-coatings" className="button button-dark">EXPLORE GARAGE FLOOR SYSTEMS →</Link></div></section><QuoteSection title="Let’s find your finish."/></main>; }

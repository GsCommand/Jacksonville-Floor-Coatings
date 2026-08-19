import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "Nocatee Floor Coatings | Resin & Garage Floors",
  description: "Designer resin flooring and garage floor coatings in Nocatee, FL for kitchens, interiors and garages.",
};

export default function Nocatee() {
  return (
    <main>
      <section className="local-hero shell">
        <p className="eyebrow">Nocatee, Florida</p>
        <h1>Designer resin floors and refined garage coatings for Nocatee homes.</h1>
        <p>Our local strategy starts here: beautiful interior resin work that feels at home in modern Nocatee spaces, plus practical garage systems that can be installed repeatedly and consistently.</p>
        <div className="hero-actions"><Link href="/contact" className="button button-dark">Request a consultation</Link><Link href="/finishes" className="text-link">Explore finishes <span>↗</span></Link></div>

        <div className="local-page-image-grid">
          <ImagePlaceholder
            className="local-page-image-primary"
            label="NOCATEE HERO — Luxury kitchen / open living resin floor"
            detail="Real Nocatee project preferred. Wide room view with modern cabinetry, island and finished resin floor clearly visible. This should feel like a premium home-design photograph."
          />
          <ImagePlaceholder
            className="local-page-image-secondary"
            label="NOCATEE GARAGE — 2–3 car garage coating project"
            detail="Real completed garage in Nocatee. Wide angle showing the full floor, walls/storage and upscale residential context."
          />
        </div>

        <div className="local-cards">
          <article className="local-card"><h2>Kitchens & interiors</h2><p>Neutral, design-forward resin finishes built around cabinetry, light and open floor plans.</p></article>
          <article className="local-card"><h2>Garage floors</h2><p>Prepared flake, quartz and resin systems for two- and three-car garages.</p></article>
          <article className="local-card"><h2>Project library</h2><p>Real Nocatee installations will become local case studies with finish names, room type and project details.</p></article>
        </div>
      </section>
    </main>
  );
}

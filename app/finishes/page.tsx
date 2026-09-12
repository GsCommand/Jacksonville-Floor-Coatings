import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { finishCollection } from "@/lib/site";

export const metadata: Metadata = {
  title: "Designer Resin Floor Finishes Jacksonville",
  description: "Explore Jacksonville Floor Coatings designer resin finish directions for metallic epoxy, residential interiors and statement spaces.",
  alternates: { canonical: "/finishes" },
};

export default function Finishes() {
  return (
    <main className="content-page shell">
      <p className="eyebrow">The finish collection</p>
      <h1>Choose the character of the floor before choosing the final coating build.</h1>
      <p className="lead">These named finish directions make custom resin easier to discuss. Palette, contrast and movement can be tuned to the room while the final chemistry and protective finish are selected around the substrate and use of the space.</p>
      <div className="finish-grid">
        {finishCollection.map((finish, index) => (
          <article className="finish-card" key={finish.name}>
            <div className={`finish-swatch ${finish.className}`}><span>{String(index + 1).padStart(2, "0")}</span></div>
            <ImagePlaceholder className="finish-room-placeholder" />
            <div><p>{finish.mood}</p><h3>{finish.name}</h3><span>{finish.description}</span></div>
          </article>
        ))}
      </div>
      <div style={{ marginTop: 56, display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}><Link className="button button-dark" href="/contact">Request a design consultation</Link><Link className="text-link" href="/metallic-epoxy-flooring">Metallic epoxy flooring <span>↗</span></Link></div>
    </main>
  );
}

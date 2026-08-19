import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { finishCollection } from "@/lib/site";

export const metadata: Metadata = {
  title: "Designer Resin Floor Finishes",
  description: "Explore the Jacksonville Floor Coatings design collection: named resin floor directions for residential interiors and statement spaces.",
};

export default function Finishes() {
  return (
    <main className="content-page shell">
      <p className="eyebrow">The finish collection</p>
      <h1>Choose the character of the floor before the chemistry.</h1>
      <p className="lead">This collection is the visual language of Jacksonville Floor Coatings. As real projects are completed, each finish will gain its own project history, material recipe, room examples and installation playbook.</p>
      <div className="finish-grid">
        {finishCollection.map((finish, index) => (
          <article className="finish-card" key={finish.name}>
            <div className={`finish-swatch ${finish.className}`}><span>{String(index + 1).padStart(2, "0")}</span></div>
            <ImagePlaceholder
              className="finish-room-placeholder"
              label={`${finish.name.toUpperCase()} — Finished room example`}
              detail="Real kitchen, living room, office or statement interior using this exact design direction. Show the whole space, not only the floor texture."
            />
            <div><p>{finish.mood}</p><h3>{finish.name}</h3><span>{finish.description}</span></div>
          </article>
        ))}
      </div>
      <div style={{ marginTop: 56 }}><Link className="button button-dark" href="/contact">Request a design consultation</Link></div>
    </main>
  );
}

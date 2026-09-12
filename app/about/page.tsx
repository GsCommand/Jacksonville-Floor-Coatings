import type { Metadata } from "next";
import Link from "next/link";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";

export const metadata: Metadata = {
  title: "About Jacksonville Floor Coatings",
  description: "Jacksonville Floor Coatings focuses on professional concrete preparation, garage floor systems and design-forward resin flooring across Northeast Florida.",
  alternates: { canonical: "/about" },
};

export default function About() {
  return (
    <main className="content-page shell">
      <p className="eyebrow">About Jacksonville Floor Coatings</p>
      <h1>Better-looking floors without treating preparation like an afterthought.</h1>
      <p className="lead">Jacksonville Floor Coatings combines two parts of the market that are often separated: repeatable, technically disciplined garage floor systems and design-forward resin finishes for spaces where appearance matters just as much as performance.</p>

      <div className="about-story-grid"><ImagePlaceholder className="about-image-placeholder" /><ImagePlaceholder className="about-process-placeholder" /></div>

      <div className="content-grid">
        <article className="content-card"><h2>Preparation-led</h2><p>Existing coatings, concrete condition, cracks, contamination and moisture risk are considered before the coating build is selected.</p></article>
        <article className="content-card"><h2>Design-aware</h2><p>Garage blends, metallic movement, sheen and texture are selected as part of the finished space instead of being treated as an afterthought.</p></article>
        <article className="content-card"><h2>System-specific</h2><p>Epoxy, polyaspartic and related resin chemistries have different strengths. The recommendation should fit the floor rather than a one-product sales script.</p></article>
      </div>

      <div style={{ marginTop: 48, display: "flex", gap: 16, flexWrap: "wrap" }}>
        <Link className="button button-dark" href="/contact">Request a quote</Link>
        <Link className="text-link" href="/garage-floor-coatings">See garage floor systems <span>↗</span></Link>
      </div>
    </main>
  );
}

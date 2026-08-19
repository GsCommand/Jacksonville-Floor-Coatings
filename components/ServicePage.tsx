import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import type { ServicePageData } from "@/lib/site";

export function ServicePage({ data }: { data: ServicePageData }) {
  return (
    <main>
      <section className="service-hero shell wide-shell">
        <div className="service-hero-copy">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p className="hero-copy">{data.intro}</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">Request a consultation</Link>
            <Link className="text-link" href="/finishes">Explore finishes <span>↗</span></Link>
          </div>
          {data.price ? <p className="price-note">{data.price}</p> : null}
        </div>
        <div className={`service-visual ${data.visualClass}`}>
          <ImagePlaceholder
            className="service-image-placeholder"
            label={`SERVICE HERO — ${data.title}`}
            detail="Use a real completed project for this exact service. Show enough of the surrounding room or garage to explain the application; avoid a close-up-only floor texture. Wide landscape composition preferred."
          />
        </div>
      </section>

      <section className="application-strip">
        <div className="shell application-grid">
          {data.applications.map((application) => <span key={application}>{application}</span>)}
        </div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="Why this approach" title="The finish gets attention. The system underneath earns trust." />
        <div className="three-grid benefit-grid">
          {data.benefits.map((benefit, index) => (
            <article className="number-card" key={benefit.title}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <h3>{benefit.title}</h3>
              <p>{benefit.body}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section process-section">
        <div className="shell process-layout">
          <SectionHeading eyebrow="Process" title="A design-led installation with a clear sequence." copy="Every project starts with the room and substrate, then moves into the finish. The visual result matters, but preparation and cure requirements are not negotiable." />
          <ol className="process-list">
            {data.process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}
          </ol>
        </div>
      </section>

      <section className="section shell faq-layout">
        <SectionHeading eyebrow="Questions" title="What homeowners usually want to know first." />
        <div className="faq-list">
          {data.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>)}
        </div>
      </section>

      <section className="section shell consultation-panel">
        <div>
          <p className="eyebrow">Start with the space</p>
          <h2>Show us the room before you choose the chemistry.</h2>
          <p>Send the approximate square footage, a few photos and what you want the finished space to feel like. We can narrow down the right design direction from there.</p>
        </div>
        <ConsultationForm compact />
      </section>
    </main>
  );
}

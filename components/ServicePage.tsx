import Link from "next/link";
import Script from "next/script";
import { ConsultationForm } from "@/components/ConsultationForm";
import { ImagePlaceholder } from "@/components/ImagePlaceholder";
import { SectionHeading } from "@/components/SectionHeading";
import { site, type ServicePageData } from "@/lib/site";

export function ServicePage({ data }: { data: ServicePageData }) {
  const schema = [
    {
      "@context": "https://schema.org",
      "@type": "Service",
      name: data.eyebrow,
      description: data.metaDescription,
      url: `${site.url}/${data.slug}`,
      provider: { "@id": `${site.url}/#business` },
      areaServed: ["Jacksonville, FL", "Nocatee, FL", "Ponte Vedra, FL", "St. Johns County, FL"],
    },
    {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      mainEntity: data.faqs.map((faq) => ({
        "@type": "Question",
        name: faq.q,
        acceptedAnswer: { "@type": "Answer", text: faq.a },
      })),
    },
  ];

  return (
    <main>
      <section className="service-hero shell wide-shell">
        <div className="service-hero-copy">
          <p className="eyebrow">{data.eyebrow}</p>
          <h1>{data.title}</h1>
          <p className="hero-copy">{data.intro}</p>
          <div className="hero-actions">
            <Link className="button button-dark" href="/contact">Request a floor consultation</Link>
            <Link className="text-link" href="/finishes">Explore finishes <span>↗</span></Link>
          </div>
          {data.price ? <p className="price-note">{data.price}</p> : null}
        </div>
        <div className={`service-visual ${data.visualClass}`}><ImagePlaceholder className="service-image-placeholder" /></div>
      </section>

      <section className="application-strip">
        <div className="shell application-grid">{data.applications.map((application) => <span key={application}>{application}</span>)}</div>
      </section>

      <section className="section shell">
        <SectionHeading eyebrow="Why the system matters" title="The finish gets attention. The preparation and coating build earn trust." />
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

      {data.details?.length ? (
        <section className="section design-story">
          <div className="shell">
            <SectionHeading eyebrow="What to know" title="A floor coating is a system, not a can of product." copy="The details below are where professional coating work separates from a quick cosmetic application." />
            <div className="three-grid benefit-grid">
              {data.details.map((detail, index) => (
                <article className="number-card" key={detail.title}>
                  <span>{String(index + 1).padStart(2, "0")}</span>
                  <h3>{detail.title}</h3>
                  <p>{detail.body}</p>
                </article>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="section process-section">
        <div className="shell process-layout">
          <SectionHeading eyebrow="Installation process" title="A clear sequence from slab evaluation to return-to-service." copy="Every project starts with the substrate and use case. Preparation, repairs, coating sequence and cure requirements are documented around the selected system." />
          <ol className="process-list">{data.process.map((step, index) => <li key={step}><span>{String(index + 1).padStart(2, "0")}</span><strong>{step}</strong></li>)}</ol>
        </div>
      </section>

      <section className="section shell faq-layout">
        <SectionHeading eyebrow="Questions" title="What Jacksonville property owners usually want to know first." />
        <div className="faq-list">{data.faqs.map((faq) => <details key={faq.q}><summary>{faq.q}<span>+</span></summary><p>{faq.a}</p></details>)}</div>
      </section>

      <section className="section local-feature">
        <div className="shell local-grid">
          <div>
            <p className="eyebrow">Compare the options</p>
            <h2>Start with the floor you have. Then choose the chemistry and finish.</h2>
            <p>Garage systems, epoxy, polyaspartic and metallic resin overlap, but they are not interchangeable. The best recommendation depends on slab condition, exposure, design goal and return-to-service requirements.</p>
            <div className="local-links">
              <Link href="/epoxy-flooring-jacksonville">Epoxy flooring ↗</Link>
              <Link href="/garage-floor-coatings">Garage coatings ↗</Link>
              <Link href="/polyaspartic-floor-coatings">Polyaspartic ↗</Link>
              <Link href="/metallic-epoxy-flooring">Metallic resin ↗</Link>
            </div>
          </div>
          <ImagePlaceholder className="local-photo-placeholder" />
        </div>
      </section>

      <section className="section shell consultation-panel">
        <div>
          <p className="eyebrow">Request a recommendation</p>
          <h2>Tell us about the slab, the space and the finish you want.</h2>
          <p>Share the project type, approximate square footage, current floor condition and neighborhood. That is enough to start narrowing the right coating system and estimate path.</p>
        </div>
        <ConsultationForm compact />
      </section>

      <Script id={`schema-${data.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
    </main>
  );
}

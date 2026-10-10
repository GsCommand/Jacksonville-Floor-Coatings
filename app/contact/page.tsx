import type { Metadata } from "next";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { DesignImage } from "@/components/Design";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Floor Coating Quote",
  description: "Request an epoxy flooring, garage floor coating, polyaspartic or resin flooring quote from Jacksonville Floor Coatings.",
  alternates: { canonical: "/contact" },
};

export default function Contact() { return <main id="main-content">
<section className="design-contact shell"><div><nav className="design-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link> / <span aria-current="page">Contact</span></nav><p className="eyebrow">YOUR NEW FLOOR STARTS HERE</p><h1>Tell us about the floor you have in mind.</h1><p className="design-lead">Garage, interior or commercial space: share the size, current condition and look you want. We’ll use those details to help you choose the next step.</p><DesignImage src="/images/home/garage.webp" alt="Finished gray full-flake garage design concept"/><div className="design-contact-info"><h3>Jacksonville & Northeast Florida</h3><p>Jacksonville, Nocatee, Ponte Vedra and St. Johns. Send your ZIP code and location so we can confirm service.</p><a href={`mailto:${site.email}`}>{site.email}</a></div></div><div className="design-form-card"><h2>Request a free consultation.</h2><p>A few details help us understand your project.</p><ConsultationForm/><div className="design-next"><h3>What happens next?</h3><ol><li>We review your project details.</li><li>We clarify the slab, finish and preparation needs.</li><li>We discuss the estimate and installation plan.</li></ol></div></div></section>
<section className="design-tint"><div className="shell design-section-head"><p className="jfc-script">A little preparation helps.</p><h2>What to include in your request.</h2><p>Approximate square footage, bare concrete or existing flooring, visible cracks, sunlight exposure and your finish preferences. Mention any access restrictions or schedule requirements.</p></div></section>
</main>; }

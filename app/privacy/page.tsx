import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: "Privacy policy for Jacksonville Floor Coatings website and quote requests.",
  alternates: { canonical: "/privacy" },
};

export default function Privacy() {
  return (
    <main className="content-page shell">
      <p className="eyebrow">Privacy</p>
      <h1>Privacy Policy</h1>
      <p className="lead">Jacksonville Floor Coatings uses the information you provide to respond to quote requests, discuss projects and operate this website.</p>
      <div className="content-grid" style={{ marginTop: 48 }}>
        <article className="content-card"><h2>Information we collect</h2><p>When you submit a quote request, we may collect your name, phone number, email address, ZIP code, approximate project size, project type and the details you choose to provide.</p></article>
        <article className="content-card"><h2>How we use it</h2><p>We use submitted information to respond to inquiries, prepare estimates, communicate about requested services and maintain basic business records. We do not sell quote-request information to advertisers or data brokers.</p></article>
        <article className="content-card"><h2>Service providers</h2><p>Website hosting and form delivery may be handled by service providers acting on our behalf. Those providers receive only the information needed to provide their services.</p></article>
      </div>
      <div style={{ maxWidth: 820, marginTop: 52 }}>
        <h2>Data choices</h2>
        <p>You can ask us to correct or delete information you submitted, subject to records we may need to retain for legitimate business, legal or accounting purposes.</p>
        <h2>Contact</h2>
        <p>Questions about this policy can be sent to <a href={`mailto:${site.email}`}><strong>{site.email}</strong></a>.</p>
        <p style={{ fontSize: 13, color: "#746d64", marginTop: 32 }}>Last updated: September 12, 2026.</p>
      </div>
    </main>
  );
}

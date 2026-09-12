import type { Metadata } from "next";
import { ConsultationForm } from "@/components/ConsultationForm";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Request a Floor Coating Quote",
  description: "Request an epoxy flooring, garage floor coating, polyaspartic or resin flooring quote from Jacksonville Floor Coatings.",
  alternates: { canonical: "/contact" },
};

export default function Contact() {
  return (
    <main className="content-page shell contact-page">
      <div>
        <p className="eyebrow">Request a quote</p>
        <h1>Tell us about the floor.</h1>
        <p className="lead">Share the project type, approximate square footage, ZIP code and current floor condition. We will use those details to narrow the right coating system and next step.</p>
        <p style={{ fontSize: 13, color: "#746d64", marginTop: 32 }}>Service area: Jacksonville, Nocatee, Ponte Vedra, St. Johns County and surrounding Northeast Florida communities.</p>
        <p style={{ fontSize: 13, color: "#746d64" }}>Prefer email? <a href={`mailto:${site.email}`}><strong>{site.email}</strong></a></p>
      </div>
      <ConsultationForm />
    </main>
  );
}

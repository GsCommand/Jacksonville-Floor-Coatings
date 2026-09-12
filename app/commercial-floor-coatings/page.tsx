import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Commercial Floor Coatings Jacksonville FL",
  description: servicePages.commercial.metaDescription,
  alternates: { canonical: "/commercial-floor-coatings" },
};

export default function Page() {
  return <ServicePage data={servicePages.commercial} />;
}

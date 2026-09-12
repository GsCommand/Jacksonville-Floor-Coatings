import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Residential Resin Flooring Jacksonville FL",
  description: servicePages.residential.metaDescription,
  alternates: { canonical: "/residential-resin-flooring" },
};

export default function Page() {
  return <ServicePage data={servicePages.residential} />;
}

import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Epoxy Flooring Jacksonville FL",
  description: servicePages.epoxy.metaDescription,
  alternates: { canonical: "/epoxy-flooring-jacksonville" },
};

export default function Page() {
  return <ServicePage data={servicePages.epoxy} />;
}

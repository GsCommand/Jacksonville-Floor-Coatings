import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Metallic Epoxy Flooring Jacksonville FL",
  description: servicePages.metallic.metaDescription,
  alternates: { canonical: "/metallic-epoxy-flooring" },
};

export default function Page() {
  return <ServicePage data={servicePages.metallic} />;
}

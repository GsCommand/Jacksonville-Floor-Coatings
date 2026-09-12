import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Polyaspartic Floor Coatings Jacksonville FL",
  description: servicePages.polyaspartic.metaDescription,
  alternates: { canonical: "/polyaspartic-floor-coatings" },
};

export default function Page() {
  return <ServicePage data={servicePages.polyaspartic} />;
}

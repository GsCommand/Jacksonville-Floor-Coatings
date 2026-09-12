import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/site";

export const metadata: Metadata = {
  title: "Garage Floor Coatings Jacksonville FL",
  description: servicePages.garage.metaDescription,
  alternates: { canonical: "/garage-floor-coatings" },
};

export default function Page() {
  return <ServicePage data={servicePages.garage} />;
}

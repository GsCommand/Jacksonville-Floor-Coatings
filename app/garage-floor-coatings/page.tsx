import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/site";
export const metadata: Metadata = { title: "Garage Floor Coatings Jacksonville", description: servicePages.garage.metaDescription };
export default function Page(){ return <ServicePage data={servicePages.garage} />; }

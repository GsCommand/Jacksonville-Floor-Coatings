import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/site";
export const metadata: Metadata = { title: "Commercial Floor Coatings Jacksonville", description: servicePages.commercial.metaDescription };
export default function Page(){ return <ServicePage data={servicePages.commercial} />; }

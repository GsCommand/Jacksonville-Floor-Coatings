import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/site";
export const metadata: Metadata = { title: "Residential Resin Flooring", description: servicePages.residential.metaDescription };
export default function Page(){ return <ServicePage data={servicePages.residential} />; }

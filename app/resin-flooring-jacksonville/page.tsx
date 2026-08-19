import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/site";
export const metadata: Metadata = { title: "Resin Flooring Jacksonville", description: servicePages.resin.metaDescription };
export default function Page(){ return <ServicePage data={servicePages.resin} />; }

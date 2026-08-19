import type { Metadata } from "next";
import { ServicePage } from "@/components/ServicePage";
import { servicePages } from "@/lib/site";
export const metadata: Metadata = { title: "Metallic Epoxy Flooring Jacksonville", description: servicePages.metallic.metaDescription };
export default function Page(){ return <ServicePage data={servicePages.metallic} />; }

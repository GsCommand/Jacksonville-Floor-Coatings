import type { MetadataRoute } from "next";
import { site } from "@/lib/site";
export default function sitemap(): MetadataRoute.Sitemap {
  const paths=["","/resin-flooring-jacksonville","/residential-resin-flooring","/garage-floor-coatings","/metallic-epoxy-flooring","/commercial-floor-coatings","/finishes","/about","/contact","/service-areas/nocatee-floor-coatings","/service-areas/jacksonville-floor-coatings"];
  return paths.map((path)=>({url:`${site.url}${path}`,lastModified:new Date(),changeFrequency:path===""?"weekly":"monthly",priority: path === "" ? 1 : path.includes("service-areas") ? 0.8 : 0.9}));
}

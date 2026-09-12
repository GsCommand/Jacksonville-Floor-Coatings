import type { MetadataRoute } from "next";
import { articlePath, learningArticles, learningCategories } from "@/lib/learning-center";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const entries = [
    { path: "", priority: 1, changeFrequency: "weekly" as const },
    { path: "/epoxy-flooring-jacksonville", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/garage-floor-coatings", priority: 0.95, changeFrequency: "monthly" as const },
    { path: "/polyaspartic-floor-coatings", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/metallic-epoxy-flooring", priority: 0.9, changeFrequency: "monthly" as const },
    { path: "/resin-flooring-jacksonville", priority: 0.85, changeFrequency: "monthly" as const },
    { path: "/residential-resin-flooring", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/commercial-floor-coatings", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/finishes", priority: 0.75, changeFrequency: "monthly" as const },
    { path: "/learning-center", priority: 0.9, changeFrequency: "weekly" as const },
    { path: "/service-areas/nocatee-floor-coatings", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/service-areas/ponte-vedra-floor-coatings", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/service-areas/st-johns-floor-coatings", priority: 0.8, changeFrequency: "monthly" as const },
    { path: "/service-areas/jacksonville-floor-coatings", priority: 0.7, changeFrequency: "monthly" as const },
    { path: "/about", priority: 0.6, changeFrequency: "yearly" as const },
    { path: "/contact", priority: 0.7, changeFrequency: "yearly" as const },
    { path: "/privacy", priority: 0.3, changeFrequency: "yearly" as const },
  ];

  const categoryEntries = learningCategories.map((category) => ({
    path: `/learning-center/${category.slug}`,
    priority: 0.76,
    changeFrequency: "monthly" as const,
  }));

  const articleEntries = learningArticles.map((article) => ({
    path: articlePath(article),
    priority: 0.72,
    changeFrequency: "monthly" as const,
  }));

  return [...entries, ...categoryEntries, ...articleEntries].map((entry) => ({
    url: `${site.url}${entry.path}`,
    changeFrequency: entry.changeFrequency,
    priority: entry.priority,
  }));
}

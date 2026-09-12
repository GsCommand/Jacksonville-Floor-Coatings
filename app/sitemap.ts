import type { MetadataRoute } from "next";
import { articlePath, getCategoryArticles, learningArticles, learningCategories } from "@/lib/learning-center";
import { site } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticEntries: MetadataRoute.Sitemap = [
    { url: site.url, priority: 1, changeFrequency: "weekly" },
    { url: `${site.url}/epoxy-flooring-jacksonville`, priority: 0.95, changeFrequency: "monthly" },
    { url: `${site.url}/garage-floor-coatings`, priority: 0.95, changeFrequency: "monthly" },
    { url: `${site.url}/polyaspartic-floor-coatings`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${site.url}/metallic-epoxy-flooring`, priority: 0.9, changeFrequency: "monthly" },
    { url: `${site.url}/resin-flooring-jacksonville`, priority: 0.85, changeFrequency: "monthly" },
    { url: `${site.url}/residential-resin-flooring`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${site.url}/commercial-floor-coatings`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${site.url}/finishes`, priority: 0.75, changeFrequency: "monthly" },
    { url: `${site.url}/service-areas/nocatee-floor-coatings`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${site.url}/service-areas/ponte-vedra-floor-coatings`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${site.url}/service-areas/st-johns-floor-coatings`, priority: 0.8, changeFrequency: "monthly" },
    { url: `${site.url}/service-areas/jacksonville-floor-coatings`, priority: 0.7, changeFrequency: "monthly" },
    { url: `${site.url}/about`, priority: 0.6, changeFrequency: "yearly" },
    { url: `${site.url}/contact`, priority: 0.7, changeFrequency: "yearly" },
    { url: `${site.url}/privacy`, priority: 0.3, changeFrequency: "yearly" },
  ];

  const learningCenterLastModified = learningArticles.reduce(
    (latest, article) => article.modified > latest ? article.modified : latest,
    "1970-01-01"
  );

  const learningCenterEntry: MetadataRoute.Sitemap[number] = {
    url: `${site.url}/learning-center`,
    lastModified: learningCenterLastModified,
    changeFrequency: "weekly",
    priority: 0.9,
  };

  const categoryEntries: MetadataRoute.Sitemap = learningCategories.map((category) => {
    const categoryLastModified = getCategoryArticles(category.slug).reduce(
      (latest, article) => article.modified > latest ? article.modified : latest,
      "1970-01-01"
    );

    return {
      url: `${site.url}/learning-center/${category.slug}`,
      lastModified: categoryLastModified,
      changeFrequency: "monthly",
      priority: 0.76,
    };
  });

  const articleEntries: MetadataRoute.Sitemap = learningArticles.map((article) => ({
    url: `${site.url}${articlePath(article)}`,
    lastModified: article.modified,
    changeFrequency: "monthly",
    priority: 0.72,
  }));

  return [...staticEntries, learningCenterEntry, ...categoryEntries, ...articleEntries];
}

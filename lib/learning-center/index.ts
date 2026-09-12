import { costArticles } from "./articles-cost";
import { designArticles } from "./articles-design";
import { floridaArticles } from "./articles-florida";
import { garageArticles } from "./articles-garage";
import { preparationArticles } from "./articles-preparation";
import { problemArticles } from "./articles-problems";
import { learningSources } from "./sources";
import type { LearningArticle, LearningCategory } from "./types";

export const learningCategories: LearningCategory[] = [
  {
    slug: "cost-pricing",
    name: "Cost & Pricing",
    description: "Jacksonville planning ranges, quote scope, garage-size pricing and what actually changes the cost of professional resin flooring."
  },
  {
    slug: "garage-floors",
    name: "Garage Floors",
    description: "Epoxy, polyaspartic, full-flake and vehicle-use guidance for Jacksonville and Florida garages."
  },
  {
    slug: "preparation-moisture",
    name: "Preparation & Moisture",
    description: "Concrete grinding, surface profile, crack repair, new slabs and moisture testing before a resin floor is installed."
  },
  {
    slug: "problems-failures",
    name: "Problems & Failures",
    description: "Peeling, bubbles, yellowing, hot-tire damage and existing coatings—diagnose the cause before paying for another layer."
  },
  {
    slug: "florida-jacksonville",
    name: "Florida & Jacksonville",
    description: "Humidity, sun, rainfall, coastal exposure, scheduling and contractor-selection guidance for Northeast Florida."
  },
  {
    slug: "design-maintenance",
    name: "Design & Maintenance",
    description: "Metallic resin, flake systems, kitchens, traction and practical care for finished epoxy and polyaspartic floors."
  }
];

export const learningArticles: LearningArticle[] = [
  ...costArticles,
  ...garageArticles,
  ...preparationArticles,
  ...problemArticles,
  ...floridaArticles,
  ...designArticles,
];

export const articleByRoute = new Map(
  learningArticles.map((article) => [`${article.category}/${article.slug}`, article])
);

export const articleBySlug = new Map(learningArticles.map((article) => [article.slug, article]));

export function getLearningCategory(slug: string) {
  return learningCategories.find((category) => category.slug === slug);
}

export function getCategoryArticles(category: string) {
  return learningArticles.filter((article) => article.category === category);
}

export function getLearningArticle(category: string, slug: string) {
  return articleByRoute.get(`${category}/${slug}`);
}

export function articlePath(article: LearningArticle) {
  return `/learning-center/${article.category}/${article.slug}`;
}

function articleText(article: LearningArticle) {
  return [
    article.quickAnswer,
    ...article.intro,
    ...article.sections.flatMap((section) => [
      section.heading,
      ...section.paragraphs,
      ...(section.bullets || []),
      ...(section.table?.headers || []),
      ...(section.table?.rows.flat() || []),
    ]),
    ...article.faqs.flatMap((faq) => [faq.q, faq.a]),
  ].join(" ");
}

function validateLearningCenter() {
  const failures: string[] = [];
  const paths = new Set<string>();
  const categorySlugs = new Set(learningCategories.map((category) => category.slug));
  const slugs = new Set(learningArticles.map((article) => article.slug));

  if (learningArticles.length !== 30) {
    failures.push(`expected 30 articles, found ${learningArticles.length}`);
  }

  for (const category of learningCategories) {
    const count = getCategoryArticles(category.slug).length;
    if (count !== 5) failures.push(`${category.slug}: expected 5 articles, found ${count}`);
  }

  for (const article of learningArticles) {
    const route = articlePath(article);
    if (paths.has(route)) failures.push(`${route}: duplicate route`);
    paths.add(route);

    if (!categorySlugs.has(article.category)) failures.push(`${route}: unknown category`);
    if (article.sections.length < 4) failures.push(`${route}: fewer than four substantive sections`);
    if (article.faqs.length < 4) failures.push(`${route}: fewer than four FAQs`);
    if (article.sourceIds.length < 3) failures.push(`${route}: fewer than three sources`);

    const words = articleText(article).match(/\b[\w’'-]+\b/g)?.length || 0;
    if (words < 550) failures.push(`${route}: thin article (${words} words; minimum 550)`);

    const lower = articleText(article).toLowerCase();
    for (const phrase of ["content coming soon", "lorem ipsum", "this article is being rebuilt"]) {
      if (lower.includes(phrase)) failures.push(`${route}: placeholder phrase ${phrase}`);
    }

    for (const sourceId of article.sourceIds) {
      if (!learningSources[sourceId]) failures.push(`${route}: unknown source ${sourceId}`);
    }

    for (const relatedSlug of article.related) {
      if (!slugs.has(relatedSlug)) failures.push(`${route}: unknown related article ${relatedSlug}`);
      if (relatedSlug === article.slug) failures.push(`${route}: links to itself as related`);
    }
  }

  if (failures.length) {
    throw new Error(`Learning Center validation failed:\n- ${failures.join("\n- ")}`);
  }
}

validateLearningCenter();

export type { LearningArticle, LearningCategory } from "./types";
export { resolveSources } from "./sources";

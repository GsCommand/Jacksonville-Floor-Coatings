import type { Metadata } from "next";
import Link from "next/link";
import styles from "./learning-center.module.css";
import {
  articlePath,
  learningArticles,
  learningCategories,
} from "@/lib/learning-center";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Floor Coating Learning Center | Jacksonville Epoxy & Garage Guides",
  description:
    "Practical Jacksonville and Florida guides about epoxy flooring cost, garage floor coatings, polyaspartic systems, concrete preparation, moisture, failures, metallic resin, and maintenance.",
  alternates: { canonical: "/learning-center" },
  openGraph: {
    title: "Jacksonville Floor Coatings Learning Center",
    description:
      "30 practical guides about epoxy flooring, garage coatings, polyaspartic systems, concrete prep, moisture, cost, failures, and designer resin floors.",
    url: `${site.url}/learning-center`,
    type: "website",
  },
};

const featuredSlugs = [
  "how-much-does-epoxy-flooring-cost-jacksonville",
  "best-garage-floor-coating-florida",
  "epoxy-vs-polyaspartic-garage-floor",
  "do-you-have-to-grind-concrete-before-epoxy",
  "moisture-testing-before-epoxy-flooring",
  "how-to-choose-epoxy-flooring-contractor-jacksonville",
];

export default function LearningCenterPage() {
  const featured = featuredSlugs
    .map((slug) => learningArticles.find((article) => article.slug === slug))
    .filter((article): article is (typeof learningArticles)[number] => Boolean(article));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${site.url}/learning-center#webpage`,
        url: `${site.url}/learning-center`,
        name: "Jacksonville Floor Coatings Learning Center",
        description:
          "Practical Jacksonville and Florida floor-coating guides covering cost, garage systems, concrete preparation, moisture, failures, climate, metallic floors, and maintenance.",
        isPartOf: { "@id": `${site.url}/#website` },
        about: { "@id": `${site.url}/#business` },
        inLanguage: "en-US",
      },
      {
        "@type": "ItemList",
        name: "Jacksonville Floor Coatings Learning Center articles",
        numberOfItems: learningArticles.length,
        itemListElement: learningArticles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: article.title,
          url: `${site.url}${articlePath(article)}`,
        })),
      },
    ],
  };

  return (
    <main className={styles.hub}>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="shell">
        <header className={styles.hero}>
          <p className={styles.eyebrow}>Jacksonville Floor Coatings Resources</p>
          <h1>Learning Center</h1>
          <p>
            Straight answers for Jacksonville and Northeast Florida homeowners comparing epoxy flooring,
            garage floor coatings, polyaspartic systems, concrete preparation, moisture, cost, failures,
            metallic resin, and long-term maintenance.
          </p>
          <div className={styles.summary}>
            <div><strong>30</strong><span>Detailed guides</span></div>
            <div><strong>6</strong><span>Buyer-focused topics</span></div>
            <div><strong>Florida</strong><span>Climate-aware guidance</span></div>
          </div>
        </header>

        <section aria-labelledby="topics-heading">
          <div className={styles.featuredHead}>
            <div>
              <p className={styles.eyebrow}>Browse by topic</p>
              <h2 id="topics-heading">Start with the question you actually have.</h2>
            </div>
          </div>
          <div className={styles.categoryGrid}>
            {learningCategories.map((category) => {
              const count = learningArticles.filter((article) => article.category === category.slug).length;
              return (
                <Link className={styles.categoryCard} href={`/learning-center/${category.slug}`} key={category.slug}>
                  <span>{count} guides</span>
                  <h2>{category.name}</h2>
                  <p>{category.description}</p>
                  <b>Browse {category.name} →</b>
                </Link>
              );
            })}
          </div>
        </section>

        <section className={styles.featured} aria-labelledby="featured-guides-heading">
          <div className={styles.featuredHead}>
            <div>
              <p className={styles.eyebrow}>High-value buyer guides</p>
              <h2 id="featured-guides-heading">The questions worth answering before you hire anyone.</h2>
            </div>
          </div>
          <div className={styles.articleGrid}>
            {featured.map((article) => (
              <Link className={styles.articleCard} href={articlePath(article)} key={article.slug}>
                <small>{learningCategories.find((category) => category.slug === article.category)?.name}</small>
                <h3>{article.title}</h3>
                <p>{article.description}</p>
                <span>Read guide →</span>
              </Link>
            ))}
          </div>
        </section>

        <section className={styles.hubFooter}>
          <h2>Research first. Quote second.</h2>
          <p>
            These guides explain the tradeoffs behind preparation, moisture, coating chemistry and pricing so
            you can compare proposals on scope instead of marketing language.
          </p>
          <Link href="/contact">Request a Jacksonville floor consultation →</Link>
        </section>
      </div>
    </main>
  );
}

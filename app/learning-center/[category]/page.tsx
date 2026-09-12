import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../learning-center.module.css";
import {
  articlePath,
  getCategoryArticles,
  getLearningCategory,
  learningCategories,
} from "@/lib/learning-center";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ category: string }>;
};

export function generateStaticParams() {
  return learningCategories.map((category) => ({ category: category.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category: categorySlug } = await params;
  const category = getLearningCategory(categorySlug);
  if (!category) return {};

  return {
    title: `${category.name} Guides | Jacksonville Floor Coatings`,
    description: category.description,
    alternates: { canonical: `/learning-center/${category.slug}` },
    openGraph: {
      title: `${category.name} | Jacksonville Floor Coatings Learning Center`,
      description: category.description,
      url: `${site.url}/learning-center/${category.slug}`,
      type: "website",
    },
  };
}

export default async function LearningCategoryPage({ params }: Props) {
  const { category: categorySlug } = await params;
  const category = getLearningCategory(categorySlug);
  if (!category) notFound();

  const articles = getCategoryArticles(category.slug);
  const canonical = `${site.url}/learning-center/${category.slug}`;
  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "CollectionPage",
        "@id": `${canonical}#webpage`,
        url: canonical,
        name: `${category.name} Guides`,
        description: category.description,
        isPartOf: { "@id": `${site.url}/learning-center#webpage` },
        inLanguage: "en-US",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Learning Center", item: `${site.url}/learning-center` },
          { "@type": "ListItem", position: 3, name: category.name, item: canonical },
        ],
      },
      {
        "@type": "ItemList",
        name: `${category.name} articles`,
        numberOfItems: articles.length,
        itemListElement: articles.map((article, index) => ({
          "@type": "ListItem",
          position: index + 1,
          name: article.title,
          url: `${site.url}${articlePath(article)}`,
        })),
      },
    ],
  };

  return (
    <main className={styles.categoryPage}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="shell">
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>›</span>
          <Link href="/learning-center">Learning Center</Link><span>›</span>
          <span aria-current="page">{category.name}</span>
        </nav>

        <header className={styles.categoryHero}>
          <p className={styles.eyebrow}>Jacksonville Floor Coatings Learning Center</p>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
        </header>

        <section className={styles.categoryList} aria-label={`${category.name} guides`}>
          {articles.map((article, index) => (
            <Link className={styles.categoryArticle} href={articlePath(article)} key={article.slug}>
              <span>{String(index + 1).padStart(2, "0")}</span>
              <div>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
              <b>Read guide →</b>
            </Link>
          ))}
        </section>

        <section className={styles.hubFooter}>
          <h2>Need the service page instead?</h2>
          <p>Use the Learning Center to understand the decision, then compare the actual Jacksonville services and request a measured quote when you are ready.</p>
          <Link href="/epoxy-flooring-jacksonville">View Jacksonville epoxy flooring →</Link>
        </section>
      </div>
    </main>
  );
}

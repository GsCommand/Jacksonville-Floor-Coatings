import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { categoryImages } from "@/lib/design";
import { DesignImage } from "@/components/Design";
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
    title: `${category.name} Guides`,
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
  const flakeFloorImages = ["gray", "blue", "tan", "red", "jax-custom"];
  const showFlakeFloors = ["cost-pricing", "garage-floors", "florida-jacksonville"].includes(category.slug);
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
    <main id="main-content" className={styles.categoryPage}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <div className="shell">
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>›</span>
          <Link href="/learning-center">Learning Center</Link><span>›</span>
          <span aria-current="page">{category.name}</span>
        </nav>

        <header className={styles.categoryHero}>
          <div>
          <p className={styles.eyebrow}>Jacksonville Floor Coatings Learning Center</p>
          <h1>{category.name}</h1>
          <p>{category.description}</p>
          </div>
          <DesignImage src={categoryImages[category.slug]} alt={`${category.name} floor concept`} priority/>
        </header>

        <section className={styles.categoryList} aria-label={`${category.name} guides`}>
          {articles.map((article, index) => (
            <Link className={styles.categoryArticle} href={articlePath(article)} key={article.slug}>
              <div className={styles.listPhoto}><Image src={showFlakeFloors ? `/images/learning/cost-floors/${flakeFloorImages[index]}.webp` : categoryImages[category.slug]} alt={showFlakeFloors ? `${["Gray", "Blue", "Tan", "Red", "Teal, black and gold custom"][index]} flake garage floor design visualization` : ""} fill sizes="(max-width:640px) 100vw, 160px"/><span>{String(index + 1).padStart(2, "0")}</span></div>
              <div>
                <h2>{article.title}</h2>
                <p>{article.description}</p>
              </div>
              <b>Read guide →</b>
            </Link>
          ))}
        </section>

        {showFlakeFloors ? <p className={styles.imageNote}>Floor images are design visualizations, not completed projects. Custom colors are confirmed with physical samples.</p> : null}

        <section className={styles.hubFooter}>
          <h2>Need the service page instead?</h2>
          <p>Use the Learning Center to understand the decision, then compare the actual Jacksonville services and request a measured quote when you are ready.</p>
          <Link href="/epoxy-flooring-jacksonville">View Jacksonville epoxy flooring →</Link>
        </section>
      </div>
    </main>
  );
}

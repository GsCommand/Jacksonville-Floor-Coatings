import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import styles from "../../learning-center.module.css";
import {
  articleBySlug,
  articlePath,
  getLearningArticle,
  learningArticles,
  learningCategories,
  resolveSources,
} from "@/lib/learning-center";
import { site } from "@/lib/site";

type Props = {
  params: Promise<{ category: string; slug: string }>;
};

export function generateStaticParams() {
  return learningArticles.map((article) => ({ category: article.category, slug: article.slug }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { category, slug } = await params;
  const article = getLearningArticle(category, slug);
  if (!article) return {};

  const canonical = articlePath(article);
  return {
    title: `${article.title} | Jacksonville Floor Coatings`,
    description: article.description,
    authors: [{ name: site.name }],
    alternates: { canonical },
    openGraph: {
      title: article.title,
      description: article.description,
      url: `${site.url}${canonical}`,
      type: "article",
      publishedTime: article.published,
      modifiedTime: article.modified,
    },
  };
}

export default async function LearningArticlePage({ params }: Props) {
  const { category, slug } = await params;
  const article = getLearningArticle(category, slug);
  if (!article) notFound();

  const categoryData = learningCategories.find((item) => item.slug === article.category);
  const canonicalPath = articlePath(article);
  const canonicalUrl = `${site.url}${canonicalPath}`;
  const sources = resolveSources(article.sourceIds);
  const related = article.related
    .map((relatedSlug) => articleBySlug.get(relatedSlug))
    .filter((item): item is (typeof learningArticles)[number] => Boolean(item));

  const schema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": `${canonicalUrl}#webpage`,
        url: canonicalUrl,
        name: article.title,
        description: article.description,
        inLanguage: "en-US",
        isPartOf: { "@id": `${site.url}/#website` },
        breadcrumb: { "@id": `${canonicalUrl}#breadcrumb` },
        mainEntity: { "@id": `${canonicalUrl}#article` },
        datePublished: article.published,
        dateModified: article.modified,
      },
      {
        "@type": "BlogPosting",
        "@id": `${canonicalUrl}#article`,
        mainEntityOfPage: { "@id": `${canonicalUrl}#webpage` },
        headline: article.title,
        description: article.description,
        datePublished: article.published,
        dateModified: article.modified,
        author: { "@id": `${site.url}/#business` },
        publisher: { "@id": `${site.url}/#business` },
        articleSection: categoryData?.name || "Floor Coating Guide",
        inLanguage: "en-US",
        isAccessibleForFree: true,
        citation: sources.map((source) => source.url),
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${canonicalUrl}#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: site.url },
          { "@type": "ListItem", position: 2, name: "Learning Center", item: `${site.url}/learning-center` },
          { "@type": "ListItem", position: 3, name: categoryData?.name || article.category, item: `${site.url}/learning-center/${article.category}` },
          { "@type": "ListItem", position: 4, name: article.title, item: canonicalUrl },
        ],
      },
      {
        "@type": "FAQPage",
        "@id": `${canonicalUrl}#faq`,
        mainEntity: article.faqs.map((faq) => ({
          "@type": "Question",
          name: faq.q,
          acceptedAnswer: { "@type": "Answer", text: faq.a },
        })),
      },
    ],
  };

  return (
    <main className={styles.article}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />
      <article className={styles.articleShell}>
        <nav className={styles.breadcrumbs} aria-label="Breadcrumb">
          <Link href="/">Home</Link><span>›</span>
          <Link href="/learning-center">Learning Center</Link><span>›</span>
          <Link href={`/learning-center/${article.category}`}>{categoryData?.name}</Link><span>›</span>
          <span aria-current="page">{article.title}</span>
        </nav>

        <header className={styles.articleHeader}>
          <p className={styles.eyebrow}>{article.eyebrow}</p>
          <h1>{article.title}</h1>
          <p className={styles.dek}>{article.description}</p>
          <p className={styles.meta}>
            Updated {new Date(`${article.modified}T12:00:00`).toLocaleDateString("en-US", { month: "long", day: "numeric", year: "numeric" })}
            {" · "}Jacksonville Floor Coatings research guidance
          </p>
        </header>

        <section className={styles.quickAnswer} aria-label="Quick answer">
          <strong>Quick answer</strong>
          <p>{article.quickAnswer}</p>
        </section>

        <div className={styles.intro}>
          {article.intro.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
        </div>

        {article.sections.map((section) => (
          <section className={styles.section} key={section.heading}>
            <h2>{section.heading}</h2>
            {section.paragraphs.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
            {section.bullets?.length ? (
              <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
            ) : null}
            {section.table ? (
              <div className={styles.tableWrap} role="region" aria-label={`${section.heading} comparison table`} tabIndex={0}>
                <table className={styles.table}>
                  <thead><tr>{section.table.headers.map((header) => <th key={header}>{header}</th>)}</tr></thead>
                  <tbody>
                    {section.table.rows.map((row, rowIndex) => (
                      <tr key={`${section.heading}-${rowIndex}`}>
                        {row.map((cell, cellIndex) => <td key={`${rowIndex}-${cellIndex}`}>{cell}</td>)}
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            ) : null}
          </section>
        ))}

        <section className={styles.faq} id="faq">
          <h2>Frequently asked questions</h2>
          {article.faqs.map((faq, index) => (
            <details className={styles.faqItem} key={faq.q} open={index === 0}>
              <summary>{faq.q}</summary>
              <p>{faq.a}</p>
            </details>
          ))}
        </section>

        <section className={styles.sources} aria-labelledby="sources-heading">
          <h2 id="sources-heading">Sources & technical references</h2>
          <p>
            Technical standards and manufacturer documentation support the general guidance above. Local contractor pricing pages are used only as market context; they are not industry standards or a Jacksonville Floor Coatings quote. Product technical data for the system actually installed controls exact application and cure limits.
          </p>
          <ul>
            {sources.map((source) => (
              <li key={source.id}>
                <a href={source.url} target="_blank" rel="noreferrer">{source.name}</a>
                {` — ${source.publisher}`}{source.note ? ` · ${source.note}` : ""}
              </li>
            ))}
          </ul>
        </section>

        <section className={styles.related} aria-labelledby="related-guides-heading">
          <h2 id="related-guides-heading">Related guides</h2>
          <div className={styles.relatedGrid}>
            {related.map((item) => (
              <Link href={articlePath(item)} key={item.slug}>{item.title} →</Link>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <h2>{article.ctaTitle}</h2>
          <p>{article.ctaBody}</p>
          <Link href={article.serviceHref}>{article.serviceLabel}</Link>
        </section>
      </article>
    </main>
  );
}

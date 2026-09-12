export type LearningSource = {
  id: string;
  name: string;
  publisher: string;
  url: string;
  note?: string;
};

export type LearningTable = {
  headers: string[];
  rows: string[][];
};

export type LearningSection = {
  heading: string;
  paragraphs: string[];
  bullets?: string[];
  table?: LearningTable;
};

export type LearningFaq = {
  q: string;
  a: string;
};

export type LearningArticle = {
  category: string;
  slug: string;
  title: string;
  description: string;
  eyebrow: string;
  published: string;
  modified: string;
  quickAnswer: string;
  intro: string[];
  sections: LearningSection[];
  faqs: LearningFaq[];
  sourceIds: string[];
  related: string[];
  serviceHref: string;
  serviceLabel: string;
  ctaTitle: string;
  ctaBody: string;
};

export type LearningCategory = {
  slug: string;
  name: string;
  description: string;
};

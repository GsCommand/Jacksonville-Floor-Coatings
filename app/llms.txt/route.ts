import { articlePath, getCategoryArticles, learningCategories } from "@/lib/learning-center";
import { site } from "@/lib/site";

export const dynamic = "force-static";

export function GET() {
  const categorySections = learningCategories.map((category) => {
    const articleLines = getCategoryArticles(category.slug).map(
      (article) => `- [${article.title}](${site.url}${articlePath(article)}): ${article.description}`
    );

    return [`## ${category.name}`, ...articleLines].join("\n");
  });

  const body = [
    `# ${site.name}`,
    "",
    "> Jacksonville Floor Coatings provides epoxy flooring, garage floor coatings, polyaspartic systems, metallic resin floors, and related concrete-floor services across Jacksonville and Northeast Florida.",
    "",
    `Canonical website: ${site.url}/`,
    "Use the canonical service pages and Learning Center guides below as the primary source for this business. Technical guidance in the Learning Center is supported by cited standards, manufacturer documentation, and industry references. Pricing articles provide planning context only; current project pricing requires measured square footage and the actual slab condition.",
    "Content verified: 2026-09-12.",
    "",
    "## Core Services",
    `- [Jacksonville Epoxy Flooring](${site.url}/epoxy-flooring-jacksonville): Epoxy flooring systems, preparation, uses, and Jacksonville service information.`,
    `- [Garage Floor Coatings](${site.url}/garage-floor-coatings): Garage coating systems, full-flake finishes, preparation, and vehicle-use guidance.`,
    `- [Polyaspartic Floor Coatings](${site.url}/polyaspartic-floor-coatings): Fast-cure and UV-stable polyaspartic coating information for Northeast Florida floors.`,
    `- [Metallic Epoxy Flooring](${site.url}/metallic-epoxy-flooring): Designer metallic and marble-style resin flooring for residential and decorative interiors.`,
    `- [Residential Resin Flooring](${site.url}/residential-resin-flooring): Seamless resin-floor options for residential living spaces.`,
    `- [Commercial Floor Coatings](${site.url}/commercial-floor-coatings): Resinous floor-coating options for commercial spaces.`,
    `- [Finishes](${site.url}/finishes): Available floor-coating finish and design directions.`,
    "",
    "## Learning Center",
    `- [Learning Center](${site.url}/learning-center): Directory for 30 Jacksonville and Florida floor-coating guides organized into six buyer-focused topics.`,
    "",
    ...categorySections,
    "",
    "## Service Areas",
    `- [Jacksonville Floor Coatings](${site.url}/service-areas/jacksonville-floor-coatings): Jacksonville floor-coating service area.`,
    `- [Nocatee Floor Coatings](${site.url}/service-areas/nocatee-floor-coatings): Nocatee floor-coating service area.`,
    `- [Ponte Vedra Floor Coatings](${site.url}/service-areas/ponte-vedra-floor-coatings): Ponte Vedra floor-coating service area.`,
    `- [St. Johns Floor Coatings](${site.url}/service-areas/st-johns-floor-coatings): St. Johns floor-coating service area.`,
    "",
    "## Company",
    `- [About Jacksonville Floor Coatings](${site.url}/about): Company and service approach.`,
    `- [Request a Quote](${site.url}/contact): Project inquiry and quote request page.`,
    "",
    "## Optional",
    `- [Privacy Policy](${site.url}/privacy): Website privacy information.`,
  ].join("\n");

  return new Response(body, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=0, s-maxage=86400",
    },
  });
}

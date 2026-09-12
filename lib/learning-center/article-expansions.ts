import type { LearningArticle, LearningSection } from "./types";

const expansions: Record<string, LearningSection[]> = {
  "can-you-coat-new-concrete-how-long-wait": [
    {
      heading: "Why builder schedules and coating schedules can conflict",
      paragraphs: [
        "New-construction garages are often easiest to coat before storage, vehicles and shelving arrive, but the closing or move-in date should not override the coating manufacturer's substrate requirements. If the slab was poured late in the build, the best access window may occur before the concrete is ready. In that case, protecting the bare slab and returning after the required cure and moisture checks is safer than forcing the installation into the construction schedule.",
        "Ask the builder for the pour date and, when available, information about curing compounds, densifiers or sealers. Those details can save unnecessary testing and help the coating contractor choose the correct mechanical-preparation plan."
      ]
    }
  ],
  "why-do-epoxy-floors-turn-yellow": [
    {
      heading: "How to diagnose discoloration before refinishing",
      paragraphs: [
        "Not every yellow or brown cast is resin ambering. Tire residue, dirty cleaner film, rust, sunlight fading of pigment, and contamination trapped in a clear coat can create similar visual changes. Clean a small test area with a coating-compatible cleaner and compare shaded and sun-exposed sections before assuming the entire resin layer has chemically changed color.",
        "If discoloration follows the exact line of direct sunlight while shaded areas remain stable, UV exposure becomes a stronger suspect. A contractor can then determine whether abrasion and a UV-stable recoat are enough or whether the decorative layer itself needs replacement."
      ]
    }
  ],
  "does-florida-sun-damage-epoxy-garage-floor": [
    {
      heading: "Garage orientation can change the exposure dramatically",
      paragraphs: [
        "Two Jacksonville garages using the same coating can experience very different UV loads. A deeply shaded north-facing garage that stays closed most of the day is not equivalent to a west-facing garage with the door open through the afternoon. Overhang depth, trees, screen panels, windows and reflective driveways can all change how much light reaches the slab.",
        "During an estimate, note the direction the garage faces and look for an existing fade line on stored items, paint or old coatings near the threshold. That evidence helps the installer decide whether color stability should be a primary system requirement rather than a secondary feature."
      ]
    }
  ],
  "metallic-epoxy-vs-flake-flooring": [
    {
      heading: "Repairs age differently on the two finishes",
      paragraphs: [
        "Future repair visibility is worth considering before choosing the finish. A full-flake floor can often disguise a localized repair by rebroadcasting a matching blend and recoating a controlled section, although an exact invisible repair is never guaranteed. Metallic movement is unique, so recreating the original veins and color flow in a small spot can be much harder.",
        "That does not make metallic floors impractical; it simply means owners of high-design floors should keep the original color recipe and understand that a larger artistic blend area may look better than a tiny patch if damage occurs years later."
      ]
    }
  ],
  "how-slippery-are-epoxy-floors-slip-resistance": [
    {
      heading: "More traction is not automatically safer in every situation",
      paragraphs: [
        "Aggressive texture can improve grip, but it also changes how a room functions. Rough surfaces hold more dirt, require stronger brushing, can be uncomfortable for bare feet and may catch mop fibers. In a residential garage, the ideal finish is often a moderate texture that handles wet shoes and occasional rainwater without turning routine cleaning into industrial scrubbing.",
        "Commercial kitchens, ramps and regularly wet work areas can require a much more aggressive texture and may also be governed by project-specific safety specifications. Residential homeowners should avoid copying an industrial broadcast simply because it feels rough in a sample."
      ]
    },
    {
      heading: "Test the finished texture, not only the color chip",
      paragraphs: [
        "Color samples rarely communicate traction accurately because the clear coat and aggregate determine the final surface. Ask for a cured sample that uses the proposed topcoat and texture additive, then handle it dry and slightly damp. That is a better preview of the real floor than choosing traction from a product name such as satin, non-slip or grip coat."
      ]
    }
  ],
  "how-to-clean-epoxy-garage-floor": [
    {
      heading: "Cleaner residue can create a maintenance problem of its own",
      paragraphs: [
        "More soap does not necessarily mean a cleaner floor. Detergent left behind can attract soil, reduce gloss and make a smooth coating feel slick. If the floor looks hazy after mopping, rinse a small area with clean water and dry it before reaching for a stronger chemical. The problem may be residue rather than permanent wear.",
        "Hard-water minerals can also leave visible spots on darker or glossy floors. Removing rinse water with a wet vacuum or microfiber mop can reduce spotting, especially in coastal or mineral-heavy water conditions."
      ]
    }
  ]
};

export function applyArticleExpansions(article: LearningArticle): LearningArticle {
  const extraSections = expansions[article.slug];
  if (!extraSections?.length) return article;
  return { ...article, sections: [...article.sections, ...extraSections] };
}

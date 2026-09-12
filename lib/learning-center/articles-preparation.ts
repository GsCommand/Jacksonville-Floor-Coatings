import type { LearningArticle } from "./types";

export const preparationArticles: LearningArticle[] = [
  {
    category: "preparation-moisture",
    slug: "do-you-have-to-grind-concrete-before-epoxy",
    title: "Do You Have to Grind Concrete Before Epoxy Flooring?",
    description: "Learn why professional epoxy and garage-floor installers often diamond-grind concrete, what surface profile does, when other methods may be used, and what Jacksonville homeowners should ask before coating.",
    eyebrow: "Concrete Grinding Before Epoxy",
    published: "2026-09-12",
    modified: "2026-09-12",
    quickAnswer: "Professional resin floors usually need a defined, sound surface profile before coating, and diamond grinding is one of the most common ways to create it on residential concrete. ICRI uses Concrete Surface Profile (CSP) concepts to describe surface texture, while manufacturers such as Sika and Sherwin-Williams require concrete to be clean, sound and appropriately prepared for the selected system. Grinding is not the only possible preparation method, but a smooth, contaminated or previously coated slab should not simply be rolled over because it looks clean.",
    intro: [
      "A coating needs mechanical and chemical contact with the concrete. New or power-troweled slabs can be too smooth, while older slabs may carry laitance, curing compounds, paint, tire residue or surface contamination. Grinding removes weak surface material and creates a controlled texture for the resin to wet into and bond against.",
      "The goal is not to grind every floor as aggressively as possible. The goal is to prepare the substrate to the profile required by the coating system while preserving sound concrete."
    ],
    sections: [
      {
        heading: "What grinding actually accomplishes",
        paragraphs: [
          "A diamond grinder can open the concrete surface, remove thin coatings and weak laitance, flatten small high spots and create a more uniform profile. It can also expose hidden problems: oil that has penetrated deeper than expected, soft patch material or a previous coating that is bonded in some areas and failing in others.",
          "Sherwin-Williams' ArmorSeal preparation material references different ICRI CSP ranges for different floor systems and lists diamond grinding among accepted methods for multiple profiles. That is why a contractor should think in terms of the required finished substrate—not simply “we always use this machine.”"
        ]
      },
      {
        heading: "What grinding does not fix by itself",
        paragraphs: [
          "Grinding is not moisture mitigation, structural crack repair or deep oil extraction. It also does not guarantee adhesion if the slab remains contaminated or if the selected coating is incompatible with the moisture condition. Surface preparation is a sequence, not one machine pass.",
          "After grinding, the installer still needs to remove dust, inspect the profile, repair defects and keep the slab clean before coating."
        ],
        bullets: [
          "Grinding does not stop slab movement",
          "Grinding does not lower internal slab humidity",
          "Grinding may not remove deeply absorbed oil in one pass",
          "Grinding does not make every existing patch compatible",
          "Grinding dust must be controlled and collected safely"
        ]
      },
      {
        heading: "Why dust control is part of professional prep",
        paragraphs: [
          "Grinding concrete can generate respirable crystalline silica. OSHA and NIOSH both publish controls for concrete grinding, including shrouded tools and vacuum dust collection. NIOSH research found large reductions in dust exposure when grinders were connected to local exhaust systems with appropriate filtration.",
          "For homeowners, the visible sign is straightforward: professional grinding should be connected to serious dust collection rather than filling the garage and house with concrete dust."
        ]
      },
      {
        heading: "What to ask your Jacksonville coating contractor",
        paragraphs: [
          "Ask how the contractor determines the target profile, what equipment is used at edges, how old coatings are removed, and how dust is controlled. If they say grinding is unnecessary, ask what alternative preparation method the product manufacturer allows for your exact slab and coating system.",
          "A confident answer should be specific to the floor, not a generic promise that one prep method is always right."
        ]
      }
    ],
    faqs: [
      { q: "Can epoxy stick to smooth concrete?", a: "Some products can bond to properly prepared smooth concrete, but manufacturers generally require a defined clean and sound substrate. Very smooth or treated slabs often need mechanical or other approved preparation before coating." },
      { q: "Does grinding damage concrete?", a: "Correctly selected tooling removes a controlled amount of the surface. Overly aggressive grinding can remove more material than necessary, which is why tooling and target profile matter." },
      { q: "Can I grind over old garage paint?", a: "Often yes, but coating type, thickness and adhesion affect tooling and labor. Soft or gummy coatings may require specialized removal methods." },
      { q: "Why do contractors use HEPA vacuums?", a: "Concrete grinding creates fine silica-containing dust. Dust collection and filtration are important for worker safety, cleanup and keeping contaminants off the prepared floor." }
    ],
    sourceIds: ["icriCsp", "sikaPrep", "sherwinPrep", "oshaSilica", "oshaGrinding", "nioshGrinding"],
    related: ["diamond-grinding-vs-acid-etching", "moisture-testing-before-epoxy-flooring", "why-do-epoxy-floors-peel"],
    serviceHref: "/epoxy-flooring-jacksonville",
    serviceLabel: "See our Jacksonville preparation approach",
    ctaTitle: "Make the prep visible in the proposal",
    ctaBody: "Before choosing a floor system, ask how the slab will be profiled, cleaned, repaired and protected from dust contamination."
  },
  {
    category: "preparation-moisture",
    slug: "diamond-grinding-vs-acid-etching",
    title: "Diamond Grinding vs. Acid Etching Before Epoxy: Which Is Better?",
    description: "Compare diamond grinding and acid etching for epoxy-floor preparation. Learn where each method fits, what manufacturers require, and why Jacksonville garage floors often benefit from mechanical preparation.",
    eyebrow: "Diamond Grinding vs Acid Etching",
    published: "2026-09-12",
    modified: "2026-09-12",
    quickAnswer: "For professional garage and resin-floor work, diamond grinding is generally the more controllable preparation method because it mechanically removes surface material and can create a measurable profile while exposing weak concrete and old coatings. Acid etching can be an approved preparation method for certain products and clean bare slabs, but it is less useful for removing coatings, oil, curing compounds or repairing an uneven substrate. Always follow the installed product's preparation requirements rather than treating either method as universally correct.",
    intro: [
      "Acid etching remains common in consumer epoxy instructions because it can increase texture on bare concrete without expensive machinery. Professional installers often prefer mechanical preparation because it produces a more predictable physical result and can remove material that chemistry alone will not.",
      "The choice is not about whether acid is “bad.” It is about what the floor needs removed, what profile the coating needs and what the manufacturer accepts."
    ],
    sections: [
      {
        heading: "How acid etching works",
        paragraphs: [
          "An acid etch chemically reacts with the cement paste at the surface, roughening clean concrete. It does not grind away an existing epoxy coating, flatten high spots or mechanically expose weak patches. It also requires thorough neutralization or rinsing according to the product instructions and complete drying before coating.",
          "Consumer garage-floor kits may specify etching for suitable bare concrete. That does not mean the same preparation is sufficient for a professional high-build system or a floor with contamination."
        ]
      },
      {
        heading: "How diamond grinding differs",
        paragraphs: [
          "Diamond tooling physically cuts and abrades the surface. The installer can choose tooling for bare concrete, thin coatings, hard concrete or softer surface material, then inspect the resulting texture. Mechanical grinding also allows edges, repairs and coating transitions to be feathered more deliberately.",
          "ICRI's CSP framework gives the industry a common language for surface texture. The correct profile depends on the coating thickness and system."
        ]
      },
      {
        heading: "Where each method makes sense",
        table: {
          headers: ["Condition", "Diamond grinding", "Acid etching"],
          rows: [
            ["Bare, clean concrete", "Strong professional option", "May be allowed by selected product"],
            ["Existing paint / coating", "Useful for removal", "Not a coating-removal method"],
            ["Oil or tire contamination", "Can remove affected surface, but deeper treatment may still be needed", "Does not reliably solve absorbed contamination"],
            ["High spots / uneven patches", "Can mechanically correct small irregularities", "Does not flatten concrete"],
            ["Need defined CSP", "More controllable", "Less direct control"],
            ["DIY equipment limits", "Requires grinder and dust control", "Lower equipment barrier"]
          ]
        },
        paragraphs: [
          "A professional contractor should be able to explain why the chosen method matches the slab. The answer should reference the coating system, not just habit or convenience."
        ]
      },
      {
        heading: "Jacksonville humidity makes drying after wet prep important",
        paragraphs: [
          "Etching and aggressive washing introduce water to the slab. In Northeast Florida, shaded garages and humid weather can lengthen drying. If the coating requires a dry substrate, applying it because the surface “looks dry” may be premature.",
          "Mechanical dry grinding can reduce added water, although moisture originating within the slab still needs separate evaluation."
        ]
      }
    ],
    faqs: [
      { q: "Is acid etching ever acceptable before epoxy?", a: "Yes, some products specifically allow it on suitable bare concrete. The product instructions and actual slab condition should determine whether it is adequate." },
      { q: "Why do many professional installers prefer grinding?", a: "It is more useful for removing coatings and weak surface material and gives the installer more control over the finished surface profile." },
      { q: "Can pressure washing replace grinding?", a: "Cleaning can remove dirt and some contaminants, but ordinary pressure washing does not create the same controlled mechanical profile as diamond grinding." },
      { q: "Does grinding eliminate the need to clean oil?", a: "No. Oil can penetrate below the surface. Contamination may require degreasing, additional grinding or a different repair/removal strategy." }
    ],
    sourceIds: ["icriCsp", "sherwinPrep", "sikaPrep", "rustoleumGarage", "oshaGrinding"],
    related: ["do-you-have-to-grind-concrete-before-epoxy", "moisture-testing-before-epoxy-flooring", "can-you-coat-over-existing-epoxy"],
    serviceHref: "/garage-floor-coatings",
    serviceLabel: "View garage floor preparation",
    ctaTitle: "Choose preparation around the floor condition",
    ctaBody: "A bare clean slab, a painted garage and a failed old coating should not all receive the same prep plan."
  },
  {
    category: "preparation-moisture",
    slug: "moisture-testing-before-epoxy-flooring",
    title: "Do You Need Moisture Testing Before Epoxy Flooring in Florida?",
    description: "Why concrete moisture matters before epoxy and polyaspartic flooring in Florida, how ASTM F2170 and D4263 differ, and what Jacksonville homeowners should understand before coating.",
    eyebrow: "Concrete Moisture Testing Florida",
    published: "2026-09-12",
    modified: "2026-09-12",
    quickAnswer: "Moisture testing is important whenever slab moisture could exceed the limits of the proposed floor system. ASTM F2170 measures internal relative humidity using in-situ probes, while ASTM D4263 uses a plastic sheet to indicate capillary moisture at the surface. These tests answer different questions, and the acceptable result is determined by the specific coating or moisture-mitigation system—not by a universal “Florida number.”",
    intro: [
      "Concrete can look dry while containing significant internal moisture. After a low-permeability coating is installed, vapor moving through the slab can contribute to blistering, debonding or other failures when the system is not designed for that moisture condition.",
      "Florida's humid climate makes homeowners especially aware of moisture, but outdoor humidity and slab moisture are not the same thing. A useful diagnosis separates ambient conditions, surface condensation, plumbing or drainage problems, and moisture moving through the concrete."
    ],
    sections: [
      {
        heading: "What ASTM F2170 measures",
        paragraphs: [
          "ASTM F2170 is a quantitative method for measuring relative humidity inside a concrete slab with in-situ probes. ASTM notes that excess moisture can contribute to flooring and coating failures and that manufacturers commonly require concrete moisture testing before installation.",
          "The result is a snapshot of conditions at the tested locations and time. It is not a prediction that the slab can never become wetter."
        ]
      },
      {
        heading: "What the plastic-sheet method can and cannot tell you",
        paragraphs: [
          "ASTM D4263 is an indicator method for capillary moisture. A sealed plastic sheet can reveal moisture accumulation or darkening at the surface, but it is not the same as measuring internal relative humidity throughout the slab.",
          "A contractor may use a simple indicator during screening, but higher-risk floors or manufacturer requirements can justify more quantitative testing."
        ]
      },
      {
        heading: "Why the product limit matters more than the test number alone",
        paragraphs: [
          "Different primers, epoxies and moisture-mitigation systems tolerate different substrate conditions. Sika product data, for example, publishes explicit substrate-moisture and humidity limits for individual products. That means a reading only becomes useful when compared with the technical data for the proposed coating system.",
          "If a result is too high, the answer is not simply to wait one afternoon. The contractor should identify whether the moisture is from recent washing, groundwater vapor, drainage, plumbing or another source and then decide whether to mitigate, change systems or postpone coating."
        ]
      },
      {
        heading: "Questions Jacksonville homeowners should ask",
        bullets: [
          "What moisture test are you using and what does it measure?",
          "What limit does the proposed primer or coating allow?",
          "What happens if the result is above that limit?",
          "Is a moisture-vapor barrier or mitigation primer an option?",
          "Could irrigation, drainage or plumbing be adding moisture?",
          "Will the slab be retested after cleaning or wet preparation if necessary?"
        ],
        paragraphs: [
          "A responsible contractor does not need to perform the most elaborate testing on every simple garage, but they should recognize conditions that justify more investigation rather than coating blindly."
        ]
      }
    ],
    faqs: [
      { q: "Can a concrete floor be dry on top but wet inside?", a: "Yes. Surface appearance does not reliably indicate internal slab relative humidity." },
      { q: "Is a plastic sheet test the same as ASTM F2170?", a: "No. ASTM D4263 is an indicator method at the surface; ASTM F2170 measures internal relative humidity with in-situ probes." },
      { q: "What RH is too high for epoxy?", a: "There is no universal number for every product. The coating or primer manufacturer's published limit should determine acceptability." },
      { q: "Can a moisture barrier solve every wet-slab problem?", a: "No. Mitigation systems have their own limits and cannot substitute for correcting active water intrusion, drainage or plumbing problems." }
    ],
    sourceIds: ["astmF2170", "astmD4263", "sika700", "sherwinPrep", "jaxEpoxyFaq"],
    related: ["does-florida-humidity-affect-epoxy-flooring", "why-do-epoxy-floors-bubble", "why-do-epoxy-floors-peel"],
    serviceHref: "/epoxy-flooring-jacksonville",
    serviceLabel: "View Jacksonville epoxy flooring",
    ctaTitle: "Do not guess at a suspicious slab",
    ctaBody: "If moisture risk is visible or the floor has a history of coating failure, testing should be part of choosing the next system."
  },
  {
    category: "preparation-moisture",
    slug: "how-to-repair-cracks-before-floor-coating",
    title: "How Should Cracks Be Repaired Before Epoxy or Garage Floor Coating?",
    description: "Learn how floor-coating contractors evaluate cracks, control joints, spalls, and movement before epoxy or polyaspartic installation—and why no coating can guarantee concrete will never crack again.",
    eyebrow: "Crack Repair Before Epoxy",
    published: "2026-09-12",
    modified: "2026-09-12",
    quickAnswer: "Cracks should be evaluated before coating to determine whether they are dormant surface defects, active movement, control joints, settlement-related damage or part of a larger structural issue. Non-moving cracks and spalls can often be routed or opened, cleaned and filled with a compatible repair material before the coating system is installed. Active joints and moving cracks require different treatment, and no resin coating can honestly guarantee that future slab movement will never telegraph through the finish.",
    intro: [
      "A crack is not automatically a reason to reject a floor-coating project. Most residential garage slabs contain some cracking or control joints. The important question is what kind of movement the crack represents and whether the proposed repair can tolerate or accommodate it.",
      "Hiding a crack cosmetically is easy. Building a repair that is compatible with grinding, coating thickness and expected movement is the real work."
    ],
    sections: [
      {
        heading: "First identify the type of defect",
        paragraphs: [
          "Hairline shrinkage cracks, open cracks, spalled edges, saw-cut control joints and differential settlement are different conditions. A contractor should inspect width, depth, edge strength and whether the two sides are at the same elevation. Widespread movement or significant displacement may justify structural evaluation before decorative coating.",
          "Control joints are intentional weak planes that encourage the slab to crack in a controlled location. Filling them flush can improve appearance, but the joint may still move."
        ]
      },
      {
        heading: "Typical repair sequence for non-structural defects",
        paragraphs: [
          "A common repair process is to mechanically open or clean the defect, remove weak concrete and dust, then install a compatible repair resin or patch material before grinding it flush. The exact material can be epoxy, polyurea, cementitious repair mortar or another product selected for the condition and recoat schedule.",
          "The repair material needs enough cure before it is ground and coated. Fast-setting fillers are useful for production schedules, but their speed should not override compatibility."
        ],
        bullets: [
          "Inspect and classify the crack or spall",
          "Remove weak edges and contamination",
          "Create clean repair geometry when required",
          "Vacuum dust thoroughly",
          "Install compatible repair material",
          "Allow required cure",
          "Grind or finish flush",
          "Reinspect before coating"
        ]
      },
      {
        heading: "Why crack repairs can reappear",
        paragraphs: [
          "Concrete changes with temperature, moisture and subgrade movement. A repaired crack may be stronger than the adjacent slab, causing movement to appear next to the old repair. This is why credible warranties often distinguish coating adhesion from future concrete cracking.",
          "Decorative flake can visually soften repaired areas, while solid or metallic floors may reveal minor patch texture more easily."
        ]
      },
      {
        heading: "When not to simply fill and coat",
        paragraphs: [
          "Large vertical displacement, recurring water through a crack, heaving, settlement or extensive structural distress deserves more investigation than cosmetic filler. Coating over an unresolved slab problem can hide evidence temporarily without correcting the cause.",
          "A contractor should be willing to say when the floor needs repair work outside the coating scope."
        ]
      }
    ],
    faqs: [
      { q: "Will epoxy hide cracks?", a: "It can visually cover properly repaired cracks, especially under flake, but it does not stop future concrete movement." },
      { q: "Should control joints be filled?", a: "It depends on the desired appearance, system and expected movement. Filling a joint does not eliminate its function or guarantee it will never move." },
      { q: "Can you coat over a crack that leaks water?", a: "The moisture source should be diagnosed first. Active water intrusion can undermine coating adhesion and may require repair outside the coating system." },
      { q: "Are crack repairs normally included in garage-floor quotes?", a: "Many contractors include a defined amount of routine repair and charge separately for extensive damage. The proposal should state the assumption clearly." }
    ],
    sourceIds: ["sikaPrep", "sherwinPrep", "icriCsp", "jaxEpoxyFaq"],
    related: ["why-do-epoxy-floors-peel", "moisture-testing-before-epoxy-flooring", "what-should-floor-coating-quote-include-jacksonville"],
    serviceHref: "/garage-floor-coatings",
    serviceLabel: "View Jacksonville garage floor repair and coating",
    ctaTitle: "Repair the concrete before hiding it",
    ctaBody: "Cracks and spalls should be evaluated as substrate conditions first and cosmetic defects second."
  },
  {
    category: "preparation-moisture",
    slug: "can-you-coat-new-concrete-how-long-wait",
    title: "How Long Should New Concrete Cure Before Epoxy Flooring?",
    description: "Learn why new concrete needs time before epoxy or garage-floor coating, common 28–30 day manufacturer guidance, moisture testing, and what Jacksonville new-build homeowners should know.",
    eyebrow: "New Concrete Cure Before Epoxy",
    published: "2026-09-12",
    modified: "2026-09-12",
    quickAnswer: "Many coating manufacturers require conventionally placed new concrete to cure for about 28–30 days before standard coating application, but calendar age alone does not prove the slab is ready. Moisture condition, curing compounds, surface hardness, pH and the specific primer or coating requirements still matter. Some specialty systems are designed for younger or damp concrete, but those are product-specific exceptions—not permission to coat any new slab immediately.",
    intro: [
      "New Jacksonville garages are tempting to coat before the homeowner moves in. The floor is empty, clean and easy to access. But fresh concrete contains substantial water and may also have curing compounds or surface treatments that interfere with adhesion.",
      "Waiting is not only about strength gain. It is also about allowing the slab to reach a condition that the selected floor system accepts."
    ],
    sections: [
      {
        heading: "Why 28 to 30 days is commonly quoted",
        paragraphs: [
          "Rust-Oleum's consumer EpoxyShield instructions require newly poured concrete to cure for at least 28 days. Sherwin-Williams surface-preparation guidance defines cured concrete for its coating guidance as concrete aged at least 30 days at suitable temperature. Those examples explain where the familiar month-long rule comes from.",
          "The rule is useful for planning, but the product being installed should always control. A specialty primer may have different requirements than a standard garage-floor epoxy."
        ]
      },
      {
        heading: "Curing compounds and hardeners can be another problem",
        paragraphs: [
          "New slabs are sometimes treated with curing compounds, sealers, densifiers or other materials. Sherwin-Williams specifically warns that concrete treatments must be compatible with the coating or removed. A slab can be 60 days old and still have a bond-breaking treatment at the surface.",
          "Mechanical preparation can remove many surface treatments, but the installer should identify what was used when possible."
        ]
      },
      {
        heading: "Moisture can still be high after a month",
        paragraphs: [
          "Concrete does not dry at a fixed rate. Thickness, mix design, vapor retarder, weather, enclosed conditioning and groundwater all affect moisture. ASTM F2170 exists because internal relative humidity can remain elevated after the concrete is strong enough for normal use.",
          "For a high-risk or moisture-sensitive system, the installer should compare test results with the product's requirements instead of relying only on the date the slab was poured."
        ]
      },
      {
        heading: "Best plan for a Jacksonville new build",
        bullets: [
          "Find the slab pour date if available",
          "Ask whether curing compounds or sealers were used",
          "Wait the minimum period required by the selected coating",
          "Mechanically prepare the surface as specified",
          "Evaluate moisture when the system or conditions justify it",
          "Do not let the move-in schedule force a coating onto an unready slab"
        ],
        paragraphs: [
          "The empty-garage window is useful, but delaying a few days is cheaper than removing a coating that never developed proper adhesion."
        ]
      }
    ],
    faqs: [
      { q: "Can I epoxy a brand-new garage before moving in?", a: "Possibly, if the concrete has cured long enough and meets the selected system's moisture and preparation requirements. New does not automatically mean ready." },
      { q: "Is 28 days always enough?", a: "No. It is a common minimum in product guidance, but moisture and surface treatments can still make the slab unsuitable." },
      { q: "Can special primers coat younger concrete?", a: "Some specialty systems are formulated for damp or younger concrete. Use only products that explicitly allow those conditions and follow their technical data." },
      { q: "Should a new slab still be ground?", a: "Often yes. New concrete can have laitance, smooth troweling or curing compounds. Preparation should match the coating system and slab condition." }
    ],
    sourceIds: ["rustoleumGarage", "sherwinPrep", "astmF2170", "sikaPrep"],
    related: ["moisture-testing-before-epoxy-flooring", "do-you-have-to-grind-concrete-before-epoxy", "does-florida-humidity-affect-epoxy-flooring"],
    serviceHref: "/epoxy-flooring-jacksonville",
    serviceLabel: "Plan a new-construction floor coating",
    ctaTitle: "Use the empty-garage window without rushing the slab",
    ctaBody: "For new construction, confirm cure age, surface treatments and moisture conditions before choosing the installation date."
  }
];

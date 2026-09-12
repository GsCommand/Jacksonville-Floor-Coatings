export const site = {
  name: "Jacksonville Floor Coatings",
  shortName: "JFC",
  url: process.env.NEXT_PUBLIC_SITE_URL || "https://jacksonvillefloorcoatings.com",
  description:
    "Epoxy flooring, garage floor coatings, polyaspartic systems and designer resin floors in Jacksonville, Nocatee, Ponte Vedra and Northeast Florida.",
  email: "hello@jacksonvillefloorcoatings.com",
};

export const primaryNav = [
  { label: "Epoxy Flooring", href: "/epoxy-flooring-jacksonville" },
  { label: "Garage Floors", href: "/garage-floor-coatings" },
  { label: "Polyaspartic", href: "/polyaspartic-floor-coatings" },
  { label: "Metallic", href: "/metallic-epoxy-flooring" },
  { label: "Finishes", href: "/finishes" },
];

export const finishCollection = [
  { name: "Pearl Stone", description: "Warm white movement with restrained graphite veining.", className: "finish-pearl", mood: "Soft / architectural" },
  { name: "Coastal Smoke", description: "Layered pearl, silver and charcoal with quiet depth.", className: "finish-smoke", mood: "Balanced / modern" },
  { name: "Champagne Vein", description: "Cream mineral tones with a subtle warm metallic trace.", className: "finish-champagne", mood: "Warm / refined" },
  { name: "Atlantic Stone", description: "Cool gray movement inspired by honed coastal limestone.", className: "finish-atlantic", mood: "Calm / contemporary" },
  { name: "Midnight Marble", description: "Deep charcoal field with controlled silver movement.", className: "finish-midnight", mood: "Dramatic / polished" },
  { name: "Ivory Cloud", description: "Low-contrast ivory and pearl for light-filled interiors.", className: "finish-ivory", mood: "Quiet / minimal" },
];

export type ServicePageData = {
  slug: string;
  eyebrow: string;
  title: string;
  intro: string;
  metaDescription: string;
  price?: string;
  applications: string[];
  benefits: { title: string; body: string }[];
  process: string[];
  details?: { title: string; body: string }[];
  faqs: { q: string; a: string }[];
  visualClass: string;
};

export const servicePages: Record<string, ServicePageData> = {
  epoxy: {
    slug: "epoxy-flooring-jacksonville",
    eyebrow: "Epoxy Flooring Jacksonville FL",
    title: "Epoxy flooring built around the slab, the space and how you use it.",
    intro: "Jacksonville Floor Coatings installs professionally prepared resinous flooring systems for garages, residential interiors and light commercial spaces. We use the term homeowners search for — epoxy flooring — while selecting the actual coating system around the substrate, exposure and desired finish.",
    metaDescription: "Epoxy flooring in Jacksonville, FL for garages, homes and commercial spaces. Mechanical preparation, full-flake, metallic and resinous floor coating systems.",
    price: "Pricing depends on square footage, slab condition, repairs, removal work and the coating system selected.",
    applications: ["Garages", "Home interiors", "Workshops", "Home gyms", "Retail", "Studios"],
    benefits: [
      { title: "Preparation before product", body: "Coating performance starts with the concrete. Existing coatings, contamination, cracks and surface condition are evaluated before the system is selected." },
      { title: "The right resin for the job", body: "Epoxy, polyaspartic and related resin systems each have strengths. We match the build to the environment instead of forcing one chemistry onto every floor." },
      { title: "A finished-space mindset", body: "Color, sheen and texture should work with the room or garage. Performance matters, but the floor should also look intentional." },
    ],
    process: ["Project review", "Concrete evaluation", "Mechanical preparation", "Repairs & detailing", "Coating installation", "Protective finish & cure"],
    details: [
      { title: "Mechanical surface preparation", body: "A durable coating needs a properly prepared profile. The required grinding, removal and edge work are determined by the condition of the slab and any existing coating." },
      { title: "Florida slab conditions", body: "Jacksonville heat, humidity, ground moisture and open garage doors can influence system choice and cure behavior. Moisture risk and site conditions are considered before installation." },
      { title: "Epoxy is a category, not a single finish", body: "A homeowner may ask for an epoxy floor and ultimately be better served by a full-flake system with a UV-stable topcoat, a polyaspartic build or a decorative metallic resin system." },
    ],
    faqs: [
      { q: "How much does epoxy flooring cost in Jacksonville?", a: "Price varies with square footage, slab condition, repairs, coating removal, system thickness and finish. A clean garage slab with a repeatable full-flake system will price differently from a damaged floor or a custom metallic interior." },
      { q: "Do you grind the concrete first?", a: "Mechanical preparation is a core part of professional coating work. The exact preparation method depends on the existing surface, coating system and condition of the slab." },
      { q: "Is polyaspartic better than epoxy?", a: "Not universally. Polyaspartic systems can offer fast cure and strong UV resistance, while epoxy can provide excellent build, adhesion and design flexibility. The best system depends on the floor and how it will be used." },
      { q: "Can you coat an existing painted or failed floor?", a: "Existing coatings are evaluated before work begins. Failed or incompatible material may need to be mechanically removed so the new system can bond to a properly prepared substrate." },
    ],
    visualClass: "visual-pearl",
  },
  garage: {
    slug: "garage-floor-coatings",
    eyebrow: "Garage Floor Coatings Jacksonville",
    title: "Garage floor coatings that look finished and are built for everyday use.",
    intro: "Professional garage floor coating systems for Jacksonville, Nocatee, Ponte Vedra and St. Johns County, including full-flake, quartz, solid-color and resinous systems selected around the slab and the way the garage is used.",
    metaDescription: "Garage floor coatings in Jacksonville, FL. Mechanical concrete preparation, crack repair, full-flake and polyaspartic garage floor systems.",
    price: "Most garage projects are quoted after square footage, coating removal, crack repair and slab condition are confirmed.",
    applications: ["2-car garages", "3-car garages", "Workshops", "Home gyms", "Storage garages", "Luxury garages"],
    benefits: [
      { title: "Mechanical preparation", body: "The finished coating is only as trustworthy as the surface beneath it. The slab is evaluated for coating removal, grinding, repairs and edge preparation." },
      { title: "Full-flake and refined palettes", body: "Garage floors can be practical without looking generic. We use balanced color blends and finish choices that work with the home, walls, cabinets and lighting." },
      { title: "System-specific protection", body: "Vehicle traffic, hot tires, cleaning, sunlight at the garage door and expected use all influence the recommended build and topcoat." },
    ],
    process: ["Slab inspection", "Mechanical preparation", "Crack & surface repairs", "Base coat / broadcast", "Scrape, vacuum & detail", "Protective topcoat & cure"],
    details: [
      { title: "Full-flake garage systems", body: "A full broadcast creates a dense decorative layer and helps produce a consistent finished appearance across the floor. Texture and final sheen are controlled by the selected topcoat and finishing process." },
      { title: "Cracks and failed coatings", body: "Cracks, spalls, previous paint and delaminating coatings are addressed as part of preparation. Repairs are scoped before installation so they are not hidden surprises on coating day." },
      { title: "UV and open-door exposure", body: "Jacksonville garages spend plenty of time with the door open. Where sunlight exposure matters, the coating build and finish should account for color stability and exterior-edge exposure." },
    ],
    faqs: [
      { q: "How long before I can use the garage?", a: "Return-to-service depends on the exact coating system, temperature and site conditions. Your proposal should include the product-specific cure schedule before work begins." },
      { q: "Do you coat over an existing failed floor?", a: "Not blindly. Existing coatings are evaluated for removal and compatibility. A failing layer should not become the foundation of a new system." },
      { q: "Do you offer more than flake?", a: "Yes. Full-flake is a practical garage option, but quartz, solid-color and more design-forward systems can be specified when the use case supports them." },
      { q: "Epoxy or polyaspartic for a garage?", a: "Both can be part of a professional system. The right answer depends on the slab, cure window, UV exposure, design goals and the complete coating build — not a single marketing claim." },
    ],
    visualClass: "visual-garage",
  },
  polyaspartic: {
    slug: "polyaspartic-floor-coatings",
    eyebrow: "Polyaspartic Floor Coatings Jacksonville",
    title: "Fast-curing floor protection without treating speed as the only feature.",
    intro: "Polyaspartic coatings are useful where UV stability, return-to-service time and durable clear protection matter. We evaluate the entire system — preparation, base, broadcast and topcoat — instead of selling one resin name as a shortcut.",
    metaDescription: "Polyaspartic floor coatings in Jacksonville, FL for garages and concrete floors. UV-stable clear coats, full-flake systems and professional surface preparation.",
    price: "Polyaspartic systems are quoted by floor condition, coverage, broadcast system and required preparation.",
    applications: ["Garages", "Workshops", "Home gyms", "Utility spaces", "Light commercial", "Showrooms"],
    benefits: [
      { title: "UV-stable finish options", body: "Polyaspartic topcoats are commonly selected where sunlight exposure and color stability matter, especially around garage-door openings." },
      { title: "Efficient cure windows", body: "Fast cure can reduce downtime when the site, temperature and installation sequence are appropriate for the product." },
      { title: "Part of a system", body: "A premium topcoat cannot compensate for weak preparation. We treat polyaspartic as one component in a complete resinous floor build." },
    ],
    process: ["Use-case review", "Slab evaluation", "Mechanical preparation", "Repairs & base coat", "Broadcast / build coat", "Polyaspartic finish & cure"],
    details: [
      { title: "Why cure speed matters", body: "Faster return-to-service can be valuable in occupied homes and working garages, but installers also need to manage working time carefully in Florida temperatures." },
      { title: "Where polyaspartic fits", body: "It is often used as a durable clear finish over flake or decorative systems, and can also be part of faster-cure coating builds when the substrate and product specifications support it." },
      { title: "What it does not fix", body: "Polyaspartic chemistry does not solve moisture problems, contaminated concrete or poor mechanical preparation. Those conditions still have to be addressed correctly." },
    ],
    faqs: [
      { q: "Is polyaspartic better than epoxy for garage floors?", a: "It can be better for certain priorities such as UV stability and cure speed, but a garage floor should be judged as a complete system. Preparation, base chemistry, broadcast and final clear coat all matter." },
      { q: "Does polyaspartic yellow in sunlight?", a: "Quality aliphatic polyaspartic products are commonly chosen for improved UV stability. Product selection and the full system specification still matter." },
      { q: "Can a polyaspartic floor be installed in one day?", a: "Some systems are designed for rapid installation, but site conditions, repair work, coating removal and cure requirements determine the real project schedule. We do not promise a one-day job before evaluating the floor." },
    ],
    visualClass: "visual-atlantic",
  },
  resin: {
    slug: "resin-flooring-jacksonville",
    eyebrow: "Designer Resin Flooring",
    title: "Resin flooring designed around the room — not just the slab.",
    intro: "Seamless resin floors for Jacksonville homes and commercial interiors, with custom palettes, controlled movement and a protective finish selected for how the space is actually used.",
    metaDescription: "Designer resin flooring in Jacksonville, FL for kitchens, living areas, studios, offices and commercial spaces. Custom metallic and seamless resin finishes.",
    price: "Designer collections are quoted by finish, condition and square footage.",
    applications: ["Kitchens", "Open living spaces", "Home offices", "Studios & salons", "Retail", "Hospitality"],
    benefits: [
      { title: "Designed, not improvised", body: "Palette, movement and visual intensity are selected before installation so the floor has a clear design direction." },
      { title: "Seamless surface", body: "A continuous finish can visually simplify large open spaces and remove grout-line interruption." },
      { title: "Built for the room", body: "Topcoat, sheen and slip profile are selected around traffic, cleaning, sunlight and the actual use of the space." },
    ],
    process: ["Consultation & room review", "Finish and palette selection", "Concrete evaluation", "Mechanical preparation", "Design coat installation", "Protective finish & reveal"],
    faqs: [
      { q: "Is resin flooring only for garages?", a: "No. Decorative resin systems can be used in interior residential and commercial spaces when the substrate, system and finish are appropriate for the environment." },
      { q: "Will every floor look exactly the same?", a: "No. Movement-based resin floors are intentionally one of a kind. The goal is to reproduce the design language, palette and intensity — not a mechanically identical pattern." },
      { q: "Can you work around islands and open floor plans?", a: "Yes. The room layout is part of the design. Islands, transitions, doorways and sight lines influence how movement is placed." },
    ],
    visualClass: "visual-pearl",
  },
  residential: {
    slug: "residential-resin-flooring",
    eyebrow: "Residential Resin Floors",
    title: "A custom resin floor can change the entire room.",
    intro: "For kitchens, open living areas, home offices and other concrete-slab interiors where the floor should feel like part of the design — not an afterthought.",
    metaDescription: "Residential resin flooring in Jacksonville and Nocatee for kitchens, living spaces, home offices and custom interiors.",
    price: "Signature residential resin floors are custom quoted.",
    applications: ["Kitchens", "Living rooms", "Dining areas", "Home offices", "Laundry rooms", "Creative spaces"],
    benefits: [
      { title: "Interior-first styling", body: "We design around cabinetry, wall color, natural light and furniture rather than choosing a coating in isolation." },
      { title: "Custom visual intensity", body: "Choose a soft, balanced or dramatic interpretation of the finish collection." },
      { title: "Easy visual continuity", body: "Seamless flooring can connect kitchens and open living areas without introducing another pattern of joints." },
    ],
    process: ["Room photos & measurements", "Finish consultation", "Sample approval", "Concrete preparation", "Decorative resin installation", "Protective topcoat"],
    faqs: [
      { q: "Can resin flooring work in a kitchen?", a: "Yes, when the slab and coating system are appropriate. Kitchens and open living spaces can be strong candidates for seamless decorative resin." },
      { q: "Can the finish be subtle?", a: "Absolutely. The collection is not limited to high-contrast metallic swirls. Many interior designs work best with restrained movement and neutral palettes." },
      { q: "Do you move appliances and cabinets?", a: "Project access and exclusions are confirmed before scheduling. Permanent cabinetry is treated as part of the room geometry; appliance handling is quoted based on the project." },
    ],
    visualClass: "visual-ivory",
  },
  metallic: {
    slug: "metallic-epoxy-flooring",
    eyebrow: "Metallic Epoxy Flooring Jacksonville",
    title: "Metallic resin floors with controlled movement, depth and a clear design direction.",
    intro: "Custom metallic epoxy and resin floors for Jacksonville residential interiors, studios, retail and statement spaces. Each floor is hand-created around an approved palette, contrast level and room composition.",
    metaDescription: "Metallic epoxy flooring in Jacksonville, FL. Custom marble-inspired and movement-based resin floors for residential and commercial interiors.",
    price: "Metallic and signature designs are custom quoted by complexity and floor condition.",
    applications: ["Designer kitchens", "Open living", "Showrooms", "Salons", "Retail", "Studios"],
    benefits: [
      { title: "One-of-one appearance", body: "The movement is hand created, so each installation has natural variation while following an intentional palette and layout." },
      { title: "Named design collections", body: "Choose a finished look and intensity level instead of trying to build a floor from raw pigment names." },
      { title: "Controlled composition", body: "Major movement, quiet areas and focal points are planned around the room rather than distributed randomly." },
    ],
    process: ["Design selection", "Room mapping", "Surface preparation", "Base field", "Movement & accent placement", "Protective finish"],
    details: [
      { title: "Marble-inspired, not imitation stone", body: "The goal is a sophisticated resin interpretation with depth and movement, not a claim that the surface is natural marble." },
      { title: "Repeatable design language", body: "Fluid resin will never create two identical floors. Repeatability comes from controlling palette, material ratios, pour placement, movement style and visual intensity." },
      { title: "Protective finish matters", body: "The clear system and sheen are selected around traffic, cleaning, sunlight and slip requirements so the final surface is more than a decorative pour." },
    ],
    faqs: [
      { q: "Is metallic epoxy the same as a garage coating?", a: "It can use related resin chemistry, but the design intent and installation process are different. Metallic interiors focus heavily on visual composition, movement and the finished room." },
      { q: "Can you copy a photo exactly?", a: "No responsible installer should promise an exact fluid pattern. We can target a palette, movement style, contrast level and overall design character." },
      { q: "Can you make it look like marble?", a: "Marble-inspired movement is possible, but we position it as a resin interpretation rather than pretending it is natural stone." },
    ],
    visualClass: "visual-smoke",
  },
  commercial: {
    slug: "commercial-floor-coatings",
    eyebrow: "Commercial Floor Coatings Jacksonville",
    title: "Commercial floor coatings that respect both the space and the operating requirements.",
    intro: "Resinous floor and concrete coating systems for Jacksonville retail, studios, salons, offices, showrooms and other light-commercial interiors where appearance and performance both matter.",
    metaDescription: "Commercial floor coatings and resin flooring in Jacksonville for retail, offices, salons, studios, showrooms and light-commercial interiors.",
    price: "Commercial pricing is based on access, condition, system and project schedule.",
    applications: ["Retail", "Salons", "Studios", "Offices", "Showrooms", "Light commercial"],
    benefits: [
      { title: "Brand-aware design", body: "Color and finish can support the identity of the space instead of defaulting to industrial gray." },
      { title: "Project-specific systems", body: "Traffic, cleaning routines, downtime, sunlight and slip needs are considered before choosing the coating build." },
      { title: "Clear scope", body: "Preparation, repairs, finish, cure expectations and exclusions are documented before the project starts." },
    ],
    process: ["Site review", "System recommendation", "Scheduling plan", "Preparation", "Installation", "Handover & care"],
    faqs: [
      { q: "Do you work around business hours?", a: "Scheduling needs are reviewed during estimating. The feasible installation window depends on the system, cure requirements and access." },
      { q: "Can commercial floors still look custom?", a: "Yes. Commercial does not have to mean industrial. Decorative systems can be appropriate for customer-facing spaces when the performance requirements allow it." },
      { q: "Do you handle warehouses?", a: "The primary focus is residential and design-forward light commercial work. Larger industrial projects are evaluated individually so the scope matches the operation and system requirements." },
    ],
    visualClass: "visual-atlantic",
  },
};

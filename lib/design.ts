export const navigationServices = [
  { title: "GARAGE FLOORS", image: "garage", href: "/garage-floor-coatings" },
  { title: "POLYASPARTIC", image: "hero", href: "/polyaspartic-floor-coatings" },
  { title: "METALLIC RESIN", image: "metallic", href: "/metallic-epoxy-flooring" },
  { title: "HOME INTERIORS", image: "metallic", href: "/residential-resin-flooring" },
  { title: "COMMERCIAL FLOORS", image: "commercial", href: "/commercial-floor-coatings" },
];
export const serviceAreas = [
  ["Jacksonville", "/service-areas/jacksonville-floor-coatings"],
  ["Nocatee", "/service-areas/nocatee-floor-coatings"],
  ["Ponte Vedra", "/service-areas/ponte-vedra-floor-coatings"],
  ["St. Johns", "/service-areas/st-johns-floor-coatings"],
];
export const categoryImages: Record<string, string> = {
  "cost-pricing": "/images/home/garage.webp",
  "garage-floors": "/images/home/hero.webp",
  "preparation-moisture": "/images/home/prep.webp",
  "problems-failures": "/images/home/prep.webp",
  "florida-jacksonville": "/images/home/hero.webp",
  "design-maintenance": "/images/finishes/pearl-stone.webp",
};
export const serviceDesign: Record<string, {image:string; category:string; note:string; highlights: {title:string;body:string}[]}> = {
  "garage-floor-coatings": { image:"/images/home/garage.webp", category:"garage-floors", note:"Parking. Projects. A space you can be proud of.", highlights:[
    {title:"Full-flake coverage",body:"A dense decorative broadcast creates an even color field. Blend size, scraping and the clear finish influence the final texture."},
    {title:"Your garage, measured",body:"A two-car label is not a measurement. We look at the actual floor area, stairs, vertical edges and removal work when developing the scope."},
    {title:"Park after the cure",body:"Installation time and vehicle-ready time are different. Follow the schedule for your selected system before bringing back cars, cabinets or equipment."}] },
  "epoxy-flooring-jacksonville": {image:"/images/home/garage.webp",category:"preparation-moisture",note:"A complete system. A considered finish.",highlights:[
    {title:"The base and finish do different jobs",body:"Epoxy may form the bonding or decorative layer while another resin protects the surface. Compare the complete build rather than a single product name."},
    {title:"Start beneath the coating",body:"Surface profile, contamination and moisture determine whether the proposed build is appropriate. A clear coat cannot repair a weak bond underneath."},
    {title:"Choose for the setting",body:"A working garage, quiet interior and customer-facing business have different traffic, sunlight and cleaning needs."}]},
  "polyaspartic-floor-coatings": {image:"/images/home/hero.webp",category:"garage-floors",note:"Less downtime starts with the right plan.",highlights:[
    {title:"Topcoat or complete build?",body:"Ask which layers are polyaspartic and what is used beneath them. A hybrid epoxy-base system and an all-polyaspartic system are different proposals."},
    {title:"Fast cure needs careful timing",body:"Temperature, humidity, coat thickness and product working time all influence installation. Speed is useful when conditions support the selected system."},
    {title:"Sunlight at the threshold",body:"UV-stable clear finishes can help protect the decorative layer near an open garage door. Confirm the actual product and exposure requirements."}]},
  "metallic-epoxy-flooring": {image:"/images/finishes/coastal-smoke.webp",category:"design-maintenance",note:"Movement, depth and a finish made for the room.",highlights:[
    {title:"Approve a design direction",body:"Use physical samples to establish palette, contrast and movement. Hand-worked fluid resin produces variation rather than an exact copy of a photograph."},
    {title:"Allow for the whole process",body:"Removal, preparation, repairs, decorative layers and protective coats each need their own working and cure windows."},
    {title:"Live with the finish",body:"Discuss sheen, texture, furniture protection and routine cleaning before selecting the final clear coat."}]},
  "residential-resin-flooring": {image:"/images/finishes/champagne-vein.webp",category:"design-maintenance",note:"From the kitchen to the living room. One visual story.",highlights:[
    {title:"Plan the transitions",body:"Existing tile, door clearances, baseboards and adjacent flooring affect the scope. Removal and substrate repairs need to be established before a pour."},
    {title:"Design with your home",body:"Bring cabinet, paint and furniture references. Natural light and warm interior lighting can change how a resin palette appears."},
    {title:"Schedule around daily life",body:"Occupied homes need a plan for room access, ventilation, furniture storage and cure time. Those details belong in the proposal."}]},
  "resin-flooring-jacksonville": {image:"/images/finishes/pearl-stone.webp",category:"design-maintenance",note:"Seamless style, grounded in the concrete.",highlights:[
    {title:"A family of finishes",body:"Solid, flake and metallic systems create very different appearances. Begin with the room and use before choosing a decorative approach."},
    {title:"The slab sets the scope",body:"Flatness, existing adhesives, repairs and moisture can influence the build. Decorative resin is not a substitute for evaluating the substrate."},
    {title:"Protection selected for use",body:"The finish chemistry, sheen and texture should suit traffic, sunlight and cleaning. Discuss practical care along with the visual sample."}]},
  "commercial-floor-coatings": {image:"/images/home/commercial.webp",category:"cost-pricing",note:"Make a strong impression. Keep the operating plan clear.",highlights:[
    {title:"Traffic and cleaning first",body:"Describe foot traffic, carts, cleaning products and spill exposure. A decorative showroom and a service area may require different systems."},
    {title:"Plan the shutdown",body:"Separate installation duration from return-to-service. Access, equipment movement and phased work need to be addressed before scheduling."},
    {title:"Define the performance scope",body:"Discuss traction, transitions and any project-specific requirements. Product suitability and exclusions should be stated in the proposal."}]},
};

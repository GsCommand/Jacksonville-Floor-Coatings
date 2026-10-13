import Link from "next/link";
import Image from "next/image";
import Script from "next/script";
import { FlakeStrip } from "@/components/FlakeStrip";
import { PageHero, DesignCards, DesignImage, QuoteSection, GuideLinks } from "@/components/Design";
import { serviceDesign, navigationServices } from "@/lib/design";
import { site, type ServicePageData } from "@/lib/site";
export function ServicePage({ data }: { data: ServicePageData }) {
 const design=serviceDesign[data.slug];
 const finishImages: Record<string,string> = {
  "/garage-floor-coatings":"/images/home/garage.webp",
  "/polyaspartic-floor-coatings":"/images/home/hero.webp",
  "/metallic-epoxy-flooring":"/images/finishes/coastal-smoke.webp",
  "/residential-resin-flooring":"/images/finishes/champagne-vein.webp",
  "/commercial-floor-coatings":"/images/garage-details/uv-open-door.webp",
 };
 const garageDetailImages = [
  {src:"/images/garage-details/full-flake-system.webp",alt:"Finished garage with a dense gray full-flake floor coating design"},
  {src:"/images/garage-details/cracks-failed-coatings.webp",alt:"Garage concrete with a narrow crack and peeling old coating before preparation"},
  {src:"/images/garage-details/uv-open-door.webp",alt:"Sunlight reaching a flake garage floor through an open garage door"},
 ];
 const detailCards=data.details?.map((item,index)=>data.slug === "garage-floor-coatings" ? {...item,image:garageDetailImages[index]} : item);
 const schema=[{"@context":"https://schema.org","@type":"Service",name:data.eyebrow,description:data.metaDescription,url:`${site.url}/${data.slug}`,provider:{"@id":`${site.url}/#business`},areaServed:["Jacksonville, FL","Nocatee, FL","Ponte Vedra, FL","St. Johns County, FL","Clay County, FL"]},{"@context":"https://schema.org","@type":"FAQPage",mainEntity:data.faqs.map(faq=>({"@type":"Question",name:faq.q,acceptedAnswer:{"@type":"Answer",text:faq.a}}))}];
 return <main id="main-content">
 <PageHero eyebrow={data.eyebrow} title={data.title} intro={data.intro} image={design.image}/>
 {["garage-floor-coatings", "polyaspartic-floor-coatings", "commercial-floor-coatings"].includes(data.slug) ? <FlakeStrip /> : null}
 <div className="design-applications"><div className="shell">{data.applications.map(item=><span key={item}>✓ {item}</span>)}</div></div>
 <section className="design-section shell"><div className="design-section-head"><p className="jfc-script">{design.note}</p><h2>Beautiful on the surface. Considered underneath.</h2><p>Build the floor around your concrete, your space and your everyday use.</p></div><DesignCards items={data.benefits}/></section>
 <section className="design-tint"><div className="shell design-split"><DesignImage src={data.slug.includes("resin") || data.slug.includes("metallic") ? "/images/finishes/ivory-cloud.webp" : "/images/home/prep.webp"} alt="Floor finish and preparation concept"/><div><p className="eyebrow">THE DETAILS THAT MATTER</p><h2>A floor coating is a complete system.</h2>{design.highlights.map(item=><div className="design-detail" key={item.title}><h3>{item.title}</h3><p>{item.body}</p></div>)}</div></div></section>
 {detailCards?.length ? <section className="design-section shell"><div className="design-section-head"><p className="jfc-script">Look beyond the finish.</p><h2>What to know before choosing your coating.</h2></div><DesignCards items={detailCards}/></section> : null}
 <section className="design-process"><div className="shell design-split"><div><p className="jfc-script">From the first look to the final coat.</p><h2>Your installation, step by step.</h2><p>The concrete and selected products determine the working sequence. Repair scope, site conditions and cure requirements are confirmed before work begins.</p><p className="design-callout">Installation time is different from cure time. Your return-to-use instructions cover foot traffic, furniture and vehicles separately.</p></div><ol>{data.process.map((step,index)=><li key={step}><span>{String(index+1).padStart(2,"0")}</span><strong>{step}</strong></li>)}</ol></div></section>
 <section className="design-section shell design-split"><div><p className="jfc-script">A clear scope. A confident choice.</p><h2>What goes into your estimate?</h2><p>Actual square footage, existing coating removal, repairs, moisture requirements and the decorative build all influence the proposal.</p>{data.price ? <p className="design-callout">{data.price}</p> : null}<Link href="/learning-center/cost-pricing" className="text-link">Explore cost and pricing guides →</Link></div><div className="design-checklist"><h3>Compare proposals on the full scope.</h3><ul><li>Preparation method and removal work</li><li>Crack, spall and edge repairs</li><li>Base coat, decorative layer and topcoat</li><li>Texture, sheen and physical color sample</li><li>Access, cure schedule and aftercare</li><li>Written terms and any exclusions</li></ul></div></section>
 <section className="design-tint"><div className="shell design-split"><div><p className="jfc-script">Good questions. Clear answers.</p><h2>Before you book your floor.</h2><p>Choose the answer you need, or send us the details of your space for a project-specific recommendation.</p></div><div className="design-faq">{data.faqs.map(faq=><details key={faq.q}><summary>{faq.q}</summary><p>{faq.a}</p></details>)}</div></div></section>
 <GuideLinks category={design.category}/>
 <section className="design-related design-finish-links shell"><h2>Find the finish for your space.</h2><div>{navigationServices.filter(s=>s.href!==`/${data.slug}`).map(s=><Link className="design-finish-link" key={s.href} href={s.href}><Image src={finishImages[s.href]} alt="" fill sizes="(max-width:600px) 100vw, (max-width:1000px) 50vw, 25vw"/><span>{s.title}<span aria-hidden="true">→</span></span></Link>)}</div></section>
 <QuoteSection/>
 <Script id={`schema-${data.slug}`} type="application/ld+json" dangerouslySetInnerHTML={{__html:JSON.stringify(schema)}}/>
 </main>;
}

import Image from "next/image";
import Link from "next/link";
import { ConsultationForm } from "@/components/ConsultationForm";
import { articlePath, getCategoryArticles } from "@/lib/learning-center";
import { categoryImages } from "@/lib/design";
export function DesignImage({src, alt, className="", priority=false}: {src:string;alt:string;className?:string;priority?:boolean}) {
 return <figure className={`design-image ${className}`}><Image src={src} alt={alt} fill priority={priority} sizes="(max-width:800px) 100vw, 50vw"/><figcaption>Design visualization</figcaption></figure>;
}
export function PageHero({eyebrow,title,intro,image,secondary="Explore finishes",secondaryHref="/finishes"}: {eyebrow:string;title:string;intro:string;image:string;secondary?:string;secondaryHref?:string}) {
 return <section className="design-hero"><div className="shell design-hero-grid"><div><nav className="design-breadcrumb" aria-label="Breadcrumb"><Link href="/">Home</Link><span aria-hidden="true"> / </span><span aria-current="page">{eyebrow}</span></nav><p className="eyebrow">{eyebrow}</p><h1>{title}</h1><p className="design-lead">{intro}</p><div className="hero-actions"><Link className="button button-dark" href="/contact">REQUEST A FREE ESTIMATE →</Link><Link className="text-link" href={secondaryHref}>{secondary} →</Link></div></div><DesignImage src={image} alt={`${eyebrow} floor design visualization`} priority/></div></section>;
}
export function DesignCards({items}: {items:{title:string;body:string;image?:{src:string;alt:string}}[]}) {
 return <div className="design-card-grid">{items.map((item,index)=><article key={item.title} className={`design-card${item.image ? " design-card-with-image" : ""}`}>{item.image ? <DesignImage src={item.image.src} alt={item.image.alt} className="design-card-image"/> : null}<div className="design-card-copy"><span className="design-number">{String(index+1).padStart(2,"0")}</span><h3>{item.title}</h3><p>{item.body}</p></div></article>)}</div>;
}
export function QuoteSection({title="Let’s plan your floor.",copy="Tell us about your space, approximate size and current floor condition. We’ll help you narrow the finish and the next step."}: {title?:string;copy?:string}) {
 return <section className="design-quote" id="consultation"><div className="shell design-quote-grid"><div><p className="jfc-script">Your next space starts here.</p><h2>{title}</h2><p>{copy}</p><ul><li>Slab condition and preparation scope</li><li>Color, coating system and texture</li><li>Installation and return-to-use plan</li></ul><DesignImage src="/images/home/garage.webp" alt="Gray full-flake garage floor concept"/></div><div className="design-form-card"><h3>Request a free consultation</h3><ConsultationForm compact/></div></div></section>;
}
export function GuideLinks({category}: {category:string}) {
 const guides=getCategoryArticles(category).slice(0,3);
 const guideImages: Record<string,string> = {
  "best-garage-floor-coating-florida":"/images/learning/guide-best-garage.webp",
  "epoxy-vs-polyaspartic-garage-floor":"/images/learning/topic-garage.webp",
  "full-flake-vs-solid-color-garage-floor":"/images/learning/guide-epoxy-polyaspartic.webp",
 };
 return <section className="design-section shell"><div className="design-section-head"><p className="jfc-script">Make an informed choice.</p><h2>Answers before the estimate.</h2><p>Practical advice from our Learning Center to help you compare the options.</p></div><div className="design-guide-grid">{guides.map(guide=><Link className="design-guide-card" href={articlePath(guide)} key={guide.slug}><div className="design-guide-photo"><Image src={guideImages[guide.slug] ?? categoryImages[category]} alt="" fill sizes="(max-width:800px) 100vw, 33vw"/></div><div><h3>{guide.title}</h3><p>{guide.description}</p><strong>READ THE GUIDE →</strong></div></Link>)}</div></section>;
}

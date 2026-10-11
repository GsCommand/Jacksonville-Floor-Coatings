"use client";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef, useState } from "react";
import { BrandMark } from "@/components/BrandMark";
import { navigationServices as services } from "@/lib/design";
export function Header() {
 const home = usePathname() === "/";
 const areaHref = home ? "#service-area" : "/#service-area";
 const quoteHref = home ? "#quote" : "/contact";
 const colorsHref = "/finishes";
 const [menuOpen,setMenuOpen] = useState(false);
 const serviceMenu = useRef<HTMLDetailsElement>(null);
 return <> <a className="jfc-skip" href="#main-content">Skip to content</a>
    <header className="jfc-header">
      <div className="jfc-topbar"><div className="jfc-container"><span>JACKSONVILLE & NORTHEAST FLORIDA</span><nav aria-label="Quick links"><a href={areaHref}>OUR SERVICE AREA</a><a href={quoteHref}>REQUEST A QUOTE</a></nav></div></div>
      <div className="jfc-nav jfc-container"><BrandMark/><button className="jfc-menu-button" aria-expanded={menuOpen} aria-controls="home-navigation" onClick={()=>{ setMenuOpen(!menuOpen); if (serviceMenu.current) serviceMenu.current.open = false; }}>{menuOpen ? "Close ✕" : "Menu ☰"}</button><nav id="home-navigation" className={menuOpen ? "is-open" : ""} aria-label="Primary navigation" onClick={(event)=>{ if ((event.target as HTMLElement).closest("a")) { setMenuOpen(false); if (serviceMenu.current) serviceMenu.current.open = false; } }}><details className="jfc-service-menu" ref={serviceMenu} onKeyDown={(event)=>{ if (event.key === "Escape") { event.preventDefault(); event.currentTarget.open = false; event.currentTarget.querySelector("summary")?.focus(); } }} onBlur={(event)=>{ if (!event.currentTarget.contains(event.relatedTarget as Node | null)) event.currentTarget.open = false; }}><summary>OUR SERVICES <span aria-hidden="true">⌄</span></summary><div className="jfc-service-dropdown"><p>From everyday garages to statement interiors, find a finish that fits your home or business.</p><div className="jfc-dropdown-grid">{services.map(service=><Link key={service.title} href={service.href} className="jfc-dropdown-card"><span className="jfc-dropdown-photo"><Image src={`/images/home/${service.image}.webp`} alt="" fill sizes="(max-width: 800px) 80px, 180px"/></span><span>{service.title}</span><span aria-hidden="true">→</span></Link>)}</div></div></details><a href={colorsHref}>COLORS</a><a href={areaHref}>WHO WE SERVE</a><Link href="/learning-center">LEARN</Link><Link href="/about">ABOUT US</Link><Link href="/contact">CONTACT</Link></nav><a className="jfc-button jfc-nav-quote" href={quoteHref}>FREE ESTIMATE</a></div>
    </header>
</>;
}

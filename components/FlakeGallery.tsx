"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import swatches from "@/lib/flake-gallery.json";
import styles from "./flake-gallery.module.css";

const collections = [
 ["All", "All collections"], ["Flake Flooring Cool Series", "Cool colors"],
 ["Warm Series", "Warm colors"], ["Cool Neutral Series", "Cool neutrals"],
 ["Warm Neutral Series", "Warm neutrals"], ["Marble Series", "Marble blends"],
 ["SPORTS / INSIGNIA COLLECTION", "Sports blends"], ["UV+ Collection", "UV+ collection"],
 ["MISC Series", "More colors"],
];
const sizes = [
 {value:"1/4",label:"¼ inch",title:"Classic flake",copy:"A more visible decorative chip pattern. A useful starting point for full-flake garage designs."},
 {value:"1/8",label:"⅛ inch",title:"Finer flake",copy:"A smaller chip profile for a tighter, more detailed visual texture."},
 {value:"1/16",label:"¹⁄₁₆ inch",title:"Fine-grain flake",copy:"A finer chip profile for a more subtle decorative pattern."},
];

export function FlakeGallery() {
 const [query,setQuery]=useState("");
 const [collection,setCollection]=useState("All");
 const [limit,setLimit]=useState(32);
 const [size,setSize]=useState("1/4");
 const [selected,setSelected]=useState<(typeof swatches)[number] | null>(null);
 const dialog=useRef<HTMLDialogElement>(null);
 useEffect(()=>{if(selected)dialog.current?.showModal();},[selected]);
 const filtered=swatches.filter(item=>(collection==="All" || item.series===collection) && `${item.name} ${item.code} ${item.series}`.toLowerCase().includes(query.trim().toLowerCase()));
 return <div className={styles.gallery}>
  <div className={styles.sizeIntro}><p className="eyebrow">CHOOSE THE CHIP PROFILE</p><h3>Same color direction. Different visual texture.</h3><p>Start with a size preference, then confirm a physical sample. These catalog photos show supplier samples; changing the size below does not change the photographed chip size.</p></div>
  <div className={styles.sizes} aria-label="Preferred flake size">{sizes.map(option=><button type="button" key={option.value} aria-pressed={size===option.value} onClick={()=>setSize(option.value)}><strong>{option.label}</strong><span>{option.title}</span><p>{option.copy}</p></button>)}</div>
  <p className={styles.note}>¼″ is the displayed profile on many supplier samples. ⅛″ and ¹⁄₁₆″ are catalog size options; availability for your chosen blend is confirmed before quoting. Topcoat and finishing process also affect final texture.</p>
  <div className={styles.toolbar}><div><p className="eyebrow">THE FLAKE COLOR LIBRARY</p><h3>319 color and style choices.</h3></div><label>Find a color or blend code<input type="search" value={query} onChange={event=>{setQuery(event.target.value);setLimit(32);}} placeholder="Try Domino, blue, FB-310…" /></label></div>
  <div className={styles.filters} aria-label="Filter flake collection">{collections.map(([value,label])=><button type="button" key={value} aria-pressed={collection===value} onClick={()=>{setCollection(value);setLimit(32);}}>{label}</button>)}</div>
  <p className={styles.results} role="status">{filtered.length} blends · Preferred size: {sizes.find(option=>option.value===size)?.label}</p>
  <div className={styles.grid}>{filtered.slice(0,limit).map(item=><article className={styles.card} key={`${item.code}-${item.image}`}><button type="button" className={styles.preview} onClick={()=>setSelected(item)} aria-label={`View larger sample of ${item.name}, ${item.code}`}><Image src={item.image} alt={`${item.name} decorative flake supplier color sample`} width={400} height={400} sizes="(max-width:600px) 45vw, (max-width:1000px) 30vw, 23vw"/><span>VIEW SAMPLE ↗</span></button><div><p>{item.code}</p><h4>{item.name}</h4><span>{collections.find(([value])=>value===item.series)?.[1] ?? item.series}</span><Link href={`/contact?finish=${encodeURIComponent(item.name+" "+item.code+" — preferred "+size+" inch flake")}`}>Ask about this blend →</Link></div></article>)}</div>
  {filtered.length===0 ? <p className={styles.empty}>No matches. Try another name or blend code, or choose All collections.</p> : null}
  {limit<filtered.length ? <div className={styles.more}><button type="button" onClick={()=>setLimit(limit+32)}>SHOW MORE COLORS →</button><p>Showing {Math.min(limit,filtered.length)} of {filtered.length}</p></div> : null}
  <div className={styles.source}><p>Supplier catalog images from XPS Xpress / Torginol collections. Screen color varies; select from physical samples. Catalog inclusion does not confirm local stock or size availability.</p><a href="https://xtremepolishingsystems.com/pages/epoxy-flake-colors" target="_blank" rel="noreferrer">View supplier color reference ↗</a></div>
  <dialog ref={dialog} className={styles.dialog} onClose={()=>setSelected(null)} onClick={event=>{if(event.target===event.currentTarget)dialog.current?.close();}}>{selected ? <><button type="button" className={styles.close} onClick={()=>dialog.current?.close()} aria-label="Close sample">✕</button><Image src={selected.image} alt={`${selected.name} supplier flake sample enlarged`} width={400} height={400}/><div><p className="eyebrow">{selected.code}</p><h3>{selected.name}</h3><p>Supplier color sample. Confirm the actual chip size and blend using a physical sample.</p><Link className="button button-dark" href={`/contact?finish=${encodeURIComponent(selected.name+" "+selected.code+" — preferred "+size+" inch flake")}`}>ASK ABOUT THIS BLEND →</Link></div></> : null}</dialog>
 </div>;
}

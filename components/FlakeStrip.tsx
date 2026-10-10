"use client";

import Image from "next/image";
import { useState } from "react";

const blends = ["Domino", "Gravel", "Nightfall", "Orbit", "Tidal Wave", "Shoreline", "Creekbed", "Wombat", "Coyote", "Cabin Fever", "Basalt", "Carbon", "Outback", "Stonewash", "Dolerite", "Garnet", "Obsidian", "Stonehenge", "Feather Gray", "Sand Dollar"];

export function FlakeStrip() {
  const [paused, setPaused] = useState(false);

  return (
    <section className="flake-strip" aria-labelledby="flake-strip-title">
      <div className="shell flake-strip-heading">
        <div><p className="eyebrow">EXPLORE THE COLORS</p><h2 id="flake-strip-title">Find your flake finish.</h2></div>
        <button type="button" aria-pressed={paused} onClick={() => setPaused(!paused)}>{paused ? "Play colors →" : "Pause colors Ⅱ"}</button>
      </div>
      <div className="shell flake-strip-window">
        <div className={`flake-strip-track${paused ? " is-paused" : ""}`}>
          {[0, 1].map(copy => (
            <div className="flake-strip-group" key={copy} aria-hidden={copy === 1 ? true : undefined}>
              {blends.map(name => (
                <figure className="flake-strip-card" key={name}>
                  <Image src={`/images/flake/${name.toLowerCase().replaceAll(" ", "-")}.webp`} alt={copy === 0 ? `${name} decorative flake blend` : ""} width={320} height={320} sizes="(max-width: 600px) 132px, 168px" />
                  <figcaption>{name}</figcaption>
                </figure>
              ))}
            </div>
          ))}
        </div>
      </div>
      <p className="shell flake-strip-note">Supplier color samples. Confirm your blend and flake size with a physical sample.</p>
    </section>
  );
}

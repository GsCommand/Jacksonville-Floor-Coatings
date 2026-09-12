import Link from "next/link";

export default function NotFound() {
  return (
    <main className="content-page shell">
      <p className="eyebrow">404</p>
      <h1>That floor plan does not exist.</h1>
      <p className="lead">The page may have moved, or the link may be outdated. Start from the main Jacksonville floor-coating pages below.</p>
      <div style={{ marginTop: 40, display: "flex", gap: 18, flexWrap: "wrap", alignItems: "center" }}>
        <Link className="button button-dark" href="/">Back to home</Link>
        <Link className="text-link" href="/garage-floor-coatings">Garage floor coatings <span>↗</span></Link>
        <Link className="text-link" href="/epoxy-flooring-jacksonville">Epoxy flooring <span>↗</span></Link>
      </div>
    </main>
  );
}

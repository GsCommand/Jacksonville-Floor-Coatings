import { ImageResponse } from "next/og";

export const alt = "Jacksonville Floor Coatings — Epoxy, Garage and Designer Resin Floors";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        padding: "72px",
        color: "#181817",
        background: "linear-gradient(135deg, #f4f0e9 0%, #ddd4c8 52%, #8c8174 100%)",
        fontFamily: "serif",
      }}
    >
      <div style={{ display: "flex", alignItems: "center", gap: 18, fontFamily: "sans-serif", fontSize: 22, letterSpacing: 4, textTransform: "uppercase" }}>
        <div style={{ width: 58, height: 58, border: "2px solid #181817", borderRadius: 999, display: "flex", alignItems: "center", justifyContent: "center", fontSize: 20 }}>JFC</div>
        Jacksonville Floor Coatings
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 920 }}>
        <div style={{ fontSize: 78, lineHeight: 0.98, letterSpacing: -3 }}>Epoxy flooring. Garage coatings. Designer resin.</div>
        <div style={{ marginTop: 28, fontFamily: "sans-serif", fontSize: 24, color: "#544f49" }}>Jacksonville · Nocatee · Ponte Vedra · St. Johns</div>
      </div>
    </div>,
    size,
  );
}

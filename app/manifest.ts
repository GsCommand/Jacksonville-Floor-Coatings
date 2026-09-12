import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "Jacksonville Floor Coatings",
    short_name: "JFC",
    description: "Epoxy flooring, garage floor coatings, polyaspartic systems and designer resin floors in Jacksonville, Florida.",
    start_url: "/",
    display: "standalone",
    background_color: "#f8f6f1",
    theme_color: "#181817",
    icons: [{ src: "/icon.svg", sizes: "any", type: "image/svg+xml" }],
  };
}

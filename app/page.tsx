import type { Metadata } from "next";
import { HomePage } from "@/components/HomePage";
import "./home.css";

export const metadata: Metadata = {
  title: "Epoxy Flooring Jacksonville FL | Garage Floor Coatings",
  description: "Jacksonville epoxy flooring, garage floor coatings, polyaspartic systems and designer resin floors. Professional concrete preparation and coating systems for Northeast Florida.",
  alternates: { canonical: "/" },
};

export default function Home() { return <HomePage />; }

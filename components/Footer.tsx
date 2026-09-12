import Link from "next/link";
import { BrandMark } from "@/components/BrandMark";
import { primaryNav, site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="shell footer-grid">
        <div className="footer-brand">
          <BrandMark inverse />
          <p>Epoxy flooring, garage floor coatings, polyaspartic systems and designer resin floors across Jacksonville and Northeast Florida.</p>
        </div>
        <div>
          <p className="footer-kicker">Services & resources</p>
          <div className="footer-links">
            {primaryNav.map((item) => <Link href={item.href} key={item.href}>{item.label}</Link>)}
            <Link href="/commercial-floor-coatings">Commercial coatings</Link>
            <Link href="/learning-center">Learning Center</Link>
          </div>
        </div>
        <div>
          <p className="footer-kicker">Service areas</p>
          <div className="footer-links">
            <Link href="/service-areas/jacksonville-floor-coatings">Jacksonville</Link>
            <Link href="/service-areas/nocatee-floor-coatings">Nocatee</Link>
            <Link href="/service-areas/ponte-vedra-floor-coatings">Ponte Vedra</Link>
            <Link href="/service-areas/st-johns-floor-coatings">St. Johns</Link>
          </div>
        </div>
        <div>
          <p className="footer-kicker">Start a project</p>
          <p className="footer-small">Tell us the floor type, approximate square footage, condition and the finish you are considering.</p>
          <Link className="text-link text-link-light" href="/contact">Request a quote <span>↗</span></Link>
          <a className="footer-small" href={`mailto:${site.email}`}>{site.email}</a>
        </div>
      </div>
      <div className="shell footer-bottom"><span>© {new Date().getFullYear()} Jacksonville Floor Coatings · <Link href="/privacy">Privacy</Link></span><span>Professional preparation. Better-looking floor systems.</span></div>
    </footer>
  );
}

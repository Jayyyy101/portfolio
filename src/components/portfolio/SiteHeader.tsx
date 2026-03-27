import { RESUME_PATH } from "@/lib/site";

export function SiteHeader() {
  return (
    <header className="site-header">
      <a href="#hero" className="site-header__brand">
        Jayita Sharma
      </a>
      <nav className="site-header__nav" aria-label="Primary">
        <a href="#about">About</a>
        <a href="#featured">Work</a>
        <a href="#skills">Skills</a>
        <a href="#certifications">Certifications</a>
        <a href="#writing">Writing</a>
        <a href="#contact">Contact</a>
        <a className="btn-gold-outline site-header__resume" href={RESUME_PATH} download>
          Resume
        </a>
      </nav>
    </header>
  );
}

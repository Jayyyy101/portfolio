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
        <a href="#experience">Experience</a>
        <a href="#writing">Writing</a>
        <a href="#contact">Contact</a>
        <a className="site-header__resume" href={RESUME_PATH} download>
          Resume
        </a>
      </nav>
    </header>
  );
}

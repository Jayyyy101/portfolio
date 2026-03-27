"use client";

import { useEffect, useState } from "react";
import { RESUME_PATH } from "@/lib/site";

const NAV_LINKS = [
  { href: "#about", label: "About" },
  { href: "#featured", label: "Work" },
  { href: "#skills", label: "Skills" },
  { href: "#certifications", label: "Certifications" },
  { href: "#articles", label: "Articles" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    if (!menuOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMenuOpen(false);
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [menuOpen]);

  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <a href="#hero" className="site-header__brand" onClick={closeMenu}>
        Jayita Sharma
      </a>

      <button
        type="button"
        className={`site-header__menu-btn ${menuOpen ? "is-open" : ""}`}
        onClick={() => setMenuOpen((o) => !o)}
        aria-expanded={menuOpen}
        aria-controls="site-header-nav"
        aria-label={menuOpen ? "Close menu" : "Open menu"}
      >
        {menuOpen ? (
          <span className="site-header__menu-icon-x" aria-hidden>
            ×
          </span>
        ) : (
          <span className="site-header__menu-bars" aria-hidden>
            <span className="site-header__menu-bar" />
            <span className="site-header__menu-bar" />
            <span className="site-header__menu-bar" />
          </span>
        )}
      </button>

      <nav
        id="site-header-nav"
        className={`site-header__nav ${menuOpen ? "is-open" : ""}`}
        aria-label="Primary"
      >
        {NAV_LINKS.map(({ href, label }) => (
          <a key={href} href={href} onClick={closeMenu}>
            {label}
          </a>
        ))}
        <div className="site-header__resume-row">
          <a className="btn-gold-outline site-header__resume" href={RESUME_PATH} download onClick={closeMenu}>
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

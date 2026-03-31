"use client";

import { useEffect, useState } from "react";
import { RESUME_PATH } from "@/lib/site";

const PRIMARY_LINKS = [
  { href: "#about", label: "About" },
  { href: "#featured", label: "Work" },
] as const;

const EXPLORE_LINKS = [
  { href: "#ai-consulting", label: "AI consulting" },
  { href: "#skills", label: "Skills" },
  { href: "#articles", label: "Writing & Thinking" },
  { href: "#education", label: "Education & certification" },
] as const;

const CONTACT_LINK = { href: "#contact", label: "Contact" } as const;

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

  const allMobileLinks = [...PRIMARY_LINKS, ...EXPLORE_LINKS, CONTACT_LINK];

  return (
    <header className="site-header">
      <a
        href="#hero"
        className="site-header__brand"
        onClick={closeMenu}
        aria-label="Jayita Sharma — Home"
      >
        <span className="site-header__logotype">JS</span>
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
        {/* Desktop: fewer top-level choices — Explore groups secondary destinations */}
        <div className="site-header__nav-desktop">
          {PRIMARY_LINKS.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
          <div className="site-header__more">
            <button
              type="button"
              className="site-header__more-trigger"
              id="site-header-explore-trigger"
              aria-haspopup="menu"
              aria-controls="site-header-explore-menu"
            >
              Explore
            </button>
            <div
              id="site-header-explore-menu"
              className="site-header__more-panel"
              role="menu"
              aria-labelledby="site-header-explore-trigger"
            >
              {EXPLORE_LINKS.map(({ href, label }) => (
                <a key={href} href={href} role="menuitem" onClick={closeMenu}>
                  {label}
                </a>
              ))}
            </div>
          </div>
          <a href={CONTACT_LINK.href} onClick={closeMenu}>
            {CONTACT_LINK.label}
          </a>
        </div>

        {/* Mobile overlay: full list, single column */}
        <div className="site-header__nav-mobile">
          {allMobileLinks.map(({ href, label }) => (
            <a key={href} href={href} onClick={closeMenu}>
              {label}
            </a>
          ))}
        </div>

        <div className="site-header__resume-row">
          <a
            className="btn-header-subtle site-header__resume"
            href={RESUME_PATH}
            download
            onClick={closeMenu}
          >
            Resume
          </a>
        </div>
      </nav>
    </header>
  );
}

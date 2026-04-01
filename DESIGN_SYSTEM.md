# Portfolio design system

Single reference for the current visual language. **Source of truth for tokens:** `src/app/globals.css` (`:root` and section blocks). Prefer editing variables and existing patterns over one-off colors in components.

## Principles

- **Dark editorial:** black base, off-white body text, **gold** for accents, links, and section titles.
- **Restraint:** one strong additive accent (gold) in the **hero fold**: gold **CTA** only; hero focus line is neutral warm grey (between name and body scale). Header nav uses `--header-nav-muted` until hover. Category chip colors stay secondary.
- **No parallel systems:** new sections should use existing shell, section title, borders, and spacing from `globals.css`.

## Typography

| Use | Font | Where |
|-----|------|--------|
| Body UI | **DM Sans** (`next/font` → `--font-dm`) | `layout.tsx` → `body` |
| Header logotype | **Great Vibes** (`--font-signature`) — flowing initials (`JS`) | `.site-header__logotype` — full name only in hero + `aria-label` on home link |

- Base body: `17px`, `line-height: 1.65`, `-webkit-font-smoothing: antialiased`.
- Hero fold: **fills first viewport** (`min-height: calc(100svh - var(--hero-first-screen-offset))`), `align-content: center`, **`max-width: ~1080px`** centered in shell. Subtle **`::before` radial** (warm gold mist) for depth — no new chrome. Intro muted; **neutral** roles line under name (**one row**, middots, **hairline** under; scrolls horizontally only if needed); **hero CTA** gets lift + soft gold shadow on hover; portrait **frameless**; **soft static radial warm glow** behind the image (blurred ellipse, reference-style spotlight); portrait is **static** (no hover scale/filter/glow shift) — no spinning conic or hard offset frame. About sits below the fold on typical laptop heights.
- Header: primary row is **About · Work · Explore ▾ · Contact** (Explore = Skills, Certifications, Articles). Resume = `.btn-header-subtle` (not gold).
- Contact rail (wide desktop, `≥1180px`): **always visible**; muted icons until hover gold (works with full-viewport hero).

## Layout

- **Max content width:** `--site-max: 1320px` (`.site-shell`, `.site-header`).
- **Horizontal padding:** `clamp(16px, 3vw, 32px)` on shell and header.
- **Section vertical rhythm:** `padding: 56px 0` + `border-bottom: 1px solid var(--panel-border)` for major sections.
- **Breakpoints:** ~`900px` (featured grid, hero stack), `768px` (mobile nav), `1180px` (contact rail hidden), `600px` (certifications tighten).

## Color tokens (`:root`)

| Token | Role |
|-------|------|
| `--bg` `#000000` | Page background |
| `--bg-elevated` `#0d0d0d` | Slight lift (e.g. hero frame) |
| `--panel` `#141414` | Cards, panels |
| `--panel-border` `#2a2a2a` | Dividers, borders |
| `--text` `#f5f5f5` | Primary text |
| `--muted` `#a3a3a3` | Secondary / supporting text |
| `--gold` `#d4af37` | Primary accent, links, titles |
| `--gold-dim` `#b8962e` | Gradients, hover-adjacent |
| `--gold-glow` | Gold-tinted fills (hover, outlines) |
| `--gold-ring` / `--gold-ring-soft` | Pill / outline borders |
| `--header-nav-muted` | Header + hero intro demotion |
| `--rail-muted` | Fixed contact rail icons (until hover) |
| `--accent-green` | About highlights + closing bar border |
| `--gold-bright` | Hover text on gold controls (read more, modal primary, etc.) |
| `--photo-matte` | Light background behind modal case imagery |
| `--paper` / `--paper-soft` | White / off-white surfaces for institution seals and similar |

**Semantic green:** use `var(--accent-green)` for About highlights / closing bar only unless you intentionally extend that accent.

## Category / chip accents (data `variant`)

Use existing classes only; **TS types and CSS share these names:**

| Variant | Typical use | Notes |
|---------|-------------|--------|
| `mint` | Product / growth “positive” | `#5ee0b5` family in badges/chips |
| `lavender` | AI / secondary accent | |
| `sand` | EdTech / warm | |
| `ice` | Platform / analytical | |
| `rose` | Creator / alternate | Writing cards |
| `tools` | Neutral chips | Gold-soft border |

Adding a new variant requires **both** CSS (e.g. `.skills-chip--*`, `.writing-card__tag--*`, `.featured-story__badge--*`, `.more-projects__category--*`) and `PortfolioData` typing where applicable.

## Components (class contracts)

- **Primary button / outline:** `.btn-gold-outline` — gold border, transparent fill, `--gold-glow` hover.
- **Section headers:** `.section-title`, `.section-title__text` (gold), `.section-title__line` (gold gradient fade).
- **Featured work:** `.featured-work`, zigzag `.featured-work__row-split`, giant step numbers in faint gold.
- **Modals:** `.case-modal`, `.case-modal__btn--primary` / `--secondary` — stay aligned with gold + neutral borders.

## Motion & interaction

- Short transitions: `0.15s ease` on borders/backgrounds; mobile nav `0.2s` opacity.
- **Do not** introduce heavy animation libraries without matching the current restrained feel.

## Checklist before large UI changes

1. Reuse `--*` variables; avoid new hex unless added to `:root` with documentation here.
2. New sections: same shell padding and bottom border as siblings.
3. Preserve sticky header, z-index stack (`header` 50, mobile overlay 60–70, modal 100).
4. Run visual pass: hero, one featured row, skills, writing card, footer, mobile menu.

---

*Last captured from codebase structure March 2026 — update this file if you intentionally evolve the system.*

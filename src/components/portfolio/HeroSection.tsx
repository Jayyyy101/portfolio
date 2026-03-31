import { Fragment } from "react";
import Image from "next/image";
import { HeroTypingIntro } from "@/components/portfolio/HeroTypingIntro";

const HERO_TITLE_SEP = /\s*·\s*/;

function HeroTitleLine({ text }: { text: string }) {
  const parts = text
    .split(HERO_TITLE_SEP)
    .map((s) => s.trim())
    .filter(Boolean);
  const labels = parts.length <= 1 ? (text.trim() ? [text.trim()] : []) : parts;
  if (labels.length === 0) return null;
  return (
    <p className="hero-section__tagline hero-section__tagline--rail" role="text">
      {labels.map((label, i) => (
        <Fragment key={`${i}-${label.slice(0, 32)}`}>
          {i > 0 ? (
            <span className="hero-section__tagline-mid" aria-hidden="true">
              ·
            </span>
          ) : null}
          <span className="hero-section__tagline-chunk">{label}</span>
        </Fragment>
      ))}
    </p>
  );
}

type Props = {
  name: string;
  title: string;
  /** Short value line between keywords and bio (optional). */
  tagline?: string;
  summary: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function HeroSection({
  name,
  title,
  tagline,
  summary,
  ctaLabel = "See my work",
  ctaHref = "#featured",
}: Props) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__copy">
        <HeroTypingIntro />
        <h1 className="hero-section__name">{name}</h1>
        <HeroTitleLine text={title} />
        {tagline ? <p className="hero-section__lede">{tagline}</p> : null}
        <p className="hero-section__summary">{summary}</p>
        <a className="hero-section__cta btn-gold-outline" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
      <div className="hero-section__photo-wrap">
        <Image
          src="/profile-jayita.png"
          alt="Jayita Sharma"
          width={400}
          height={391}
          className="hero-section__photo"
          priority
        />
      </div>
    </section>
  );
}

"use client";

import { Fragment, useLayoutEffect, useRef, useState } from "react";

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
  title: string;
  tagline?: string;
  summary: string;
};

export function HeroHeadlineGroup({ title, tagline, summary }: Props) {
  const rulerRef = useRef<HTMLDivElement>(null);
  const [measuredPx, setMeasuredPx] = useState<number | null>(null);

  useLayoutEffect(() => {
    const el = rulerRef.current;
    if (!el) return;
    const apply = () => setMeasuredPx(el.offsetWidth);
    apply();
    const ro = new ResizeObserver(apply);
    ro.observe(el);
    return () => ro.disconnect();
  }, [title]);

  return (
    <div
      className={
        measuredPx != null
          ? "hero-section__headline-group hero-section__headline-group--measured"
          : "hero-section__headline-group"
      }
      style={
        measuredPx != null
          ? {
              // Custom property consumed by .hero-section__headline-group--measured .hero-section__summary
              ["--hero-headline-w" as string]: `${measuredPx}px`,
            }
          : undefined
      }
    >
      <div ref={rulerRef} className="hero-section__headline-ruler">
        <HeroTitleLine text={title} />
      </div>
      {tagline ? <p className="hero-section__lede">{tagline}</p> : null}
      <p className="hero-section__summary">{summary}</p>
    </div>
  );
}

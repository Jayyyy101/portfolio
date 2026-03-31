"use client";

import { useId, useMemo, useState } from "react";
import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { AboutSegment } from "@/types/portfolio";

type Props = {
  paragraphs: AboutSegment[][];
  /** Fallback single block when `paragraphs` is empty */
  fallbackBody?: string;
  closingLine?: string;
};

const FALLBACK_COLLAPSE_MIN_CHARS = 320;

function Paragraph({ segments }: { segments: AboutSegment[] }) {
  return (
    <p className="about-section__para">
      {segments.map((seg, i) =>
        seg.highlight ? (
          <span key={i} className="about-highlight">
            {seg.text}
          </span>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </p>
  );
}

export function AboutSection({ paragraphs, fallbackBody, closingLine }: Props) {
  const [expanded, setExpanded] = useState(false);
  const bodyId = useId();
  const hasStructured = paragraphs.length > 0;

  const showReadMore = useMemo(() => {
    if (hasStructured) return paragraphs.length > 1;
    return Boolean(fallbackBody && fallbackBody.length >= FALLBACK_COLLAPSE_MIN_CHARS);
  }, [hasStructured, paragraphs.length, fallbackBody]);

  const visibleStructured = hasStructured
    ? expanded
      ? paragraphs
      : paragraphs.slice(0, 1)
    : [];

  return (
    <section id="about" className="about-section">
      <SectionTitle>About Me</SectionTitle>
      <div
        id={bodyId}
        className={
          showReadMore && !expanded && !hasStructured && fallbackBody
            ? "about-section__body about-section__body--clamped"
            : "about-section__body"
        }
      >
        {hasStructured ? (
          visibleStructured.map((segs, idx) => <Paragraph key={idx} segments={segs} />)
        ) : (
          <p className="about-section__para">{fallbackBody}</p>
        )}
      </div>
      {showReadMore ? (
        <button
          type="button"
          className="about-section__read-toggle"
          aria-expanded={expanded}
          aria-controls={bodyId}
          onClick={() => setExpanded((e) => !e)}
        >
          {expanded ? "Read less" : "Read more"}
        </button>
      ) : null}
      {closingLine ? <p className="about-section__closing">{closingLine}</p> : null}
    </section>
  );
}

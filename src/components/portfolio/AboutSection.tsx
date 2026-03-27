import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { AboutSegment } from "@/types/portfolio";

type Props = {
  paragraphs: AboutSegment[][];
  /** Fallback single block when `paragraphs` is empty */
  fallbackBody?: string;
};

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

export function AboutSection({ paragraphs, fallbackBody }: Props) {
  const hasStructured = paragraphs.length > 0;

  return (
    <section id="about" className="about-section">
      <SectionTitle>About Me</SectionTitle>
      <div className="about-section__body">
        {hasStructured ? (
          paragraphs.map((segs, idx) => <Paragraph key={idx} segments={segs} />)
        ) : (
          <p className="about-section__para">{fallbackBody}</p>
        )}
      </div>
      <div className="about-section__tags">
        <span className="about-tag">Product strategy</span>
        <span className="about-tag">Marketplace &amp; aggregators</span>
        <span className="about-tag">Growth &amp; SEO</span>
        <span className="about-tag">AI automation</span>
      </div>
    </section>
  );
}

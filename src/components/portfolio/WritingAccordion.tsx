import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { WritingItem } from "@/types/portfolio";

type Props = {
  items: WritingItem[];
};

export function WritingAccordion({ items }: Props) {
  if (!items.length) return null;

  return (
    <section id="writing" className="writing-section">
      <SectionTitle>Product Thinking &amp; Writing</SectionTitle>
      <div className="writing-accordion" role="list">
        {items.map((item) =>
          item.href ? (
            <a
              key={item.id}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
              className="writing-accordion__row writing-accordion__row--link"
            >
              <span className="writing-accordion__title">{item.title}</span>
              <span className="writing-accordion__chevron" aria-hidden>
                ↗
              </span>
            </a>
          ) : (
            <div key={item.id} className="writing-accordion__row writing-accordion__row--soon">
              <span className="writing-accordion__title">{item.title}</span>
              <span className="writing-accordion__badge">Soon</span>
            </div>
          )
        )}
      </div>
      <p className="writing-section__note muted">
        Add URLs in <code>src/data/localPortfolio.ts</code> under each writing item&apos;s{" "}
        <code>href</code>.
      </p>
    </section>
  );
}

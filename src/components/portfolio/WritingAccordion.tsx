import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { WritingCard, WritingGroup } from "@/types/portfolio";

function MagnifyGlassIcon() {
  return (
    <svg
      className="writing-card__magnify-icon"
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
    >
      <circle cx="10.5" cy="10.5" r="6.75" stroke="currentColor" strokeWidth="1.65" />
      <path
        d="M15.2 15.2 21 21"
        stroke="currentColor"
        strokeWidth="1.65"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  groups: WritingGroup[];
  /** Entire section is a placeholder until articles go live */
  comingSoon?: boolean;
};

function WritingCardBlock({ card, preview }: { card: WritingCard; preview?: boolean }) {
  const inner = (
    <>
      <div className="writing-card__head">
        <h4 className="writing-card__title">{card.title}</h4>
        <span className="writing-card__head-tags">
          <span className={`writing-card__tag writing-card__tag--${card.tagVariant}`}>{card.tag}</span>
          {preview ? (
            <span className="writing-card__soon-badge" title="Link goes live when published">
              Soon
            </span>
          ) : null}
        </span>
      </div>
      <p className="writing-card__desc">{card.description}</p>
      {card.angle ? (
        <p className="writing-card__angle">
          <span className="writing-card__angle-start">
            <MagnifyGlassIcon />
          </span>
          <span>{card.angle}</span>
        </p>
      ) : null}
    </>
  );

  const cardClass = `writing-card writing-card--static${preview ? " writing-card--preview" : ""}`;

  if (card.href && !preview) {
    return (
      <a
        href={card.href}
        target="_blank"
        rel="noopener noreferrer"
        className="writing-card writing-card--link"
      >
        {inner}
      </a>
    );
  }

  return <article className={cardClass}>{inner}</article>;
}

export function WritingAccordion({ groups, comingSoon }: Props) {
  if (!groups.length && !comingSoon) return null;

  if (!groups.length && comingSoon) {
    return (
      <section id="articles" className="writing-section writing-section--preview">
        <SectionTitle>Product Thinking &amp; Articles</SectionTitle>
        <div className="writing-section__soon">
          <p className="writing-section__soon-label">In the works</p>
          <p className="writing-section__soon-hint muted">
            Long-form notes on product, growth, and automation — I&apos;ll share them here when they&apos;re ready.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="articles"
      className={`writing-section${comingSoon ? " writing-section--preview" : ""}`}
      aria-busy={comingSoon ? "true" : undefined}
    >
      <SectionTitle>Product Thinking &amp; Articles</SectionTitle>
      {comingSoon ? (
        <p className="writing-section__preview-lede muted">
          <strong className="writing-section__preview-strong">In the works</strong>— a few longer pieces are still taking shape. Stay tuned.
        </p>
      ) : null}
      <div className="writing-section__groups">
        {groups.map((group) => (
          <div key={group.id} className="writing-section__group">
            <div className="writing-section__group-head">
              <h3 className="writing-section__group-title">{group.heading}</h3>
              <span className="writing-section__group-line" aria-hidden />
            </div>
            <div className="writing-cards">
              {group.cards.map((card) => (
                <WritingCardBlock key={card.id} card={card} preview={comingSoon} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

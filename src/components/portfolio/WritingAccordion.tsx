import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { WritingCard, WritingGroup } from "@/types/portfolio";

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
      <section id="writing" className="writing-section writing-section--preview">
        <SectionTitle>Product Thinking &amp; Writing</SectionTitle>
        <div className="writing-section__soon">
          <p className="writing-section__soon-label">Coming soon</p>
          <p className="writing-section__soon-hint muted">
            Long-form notes on product, growth, and automation — publishing here shortly.
          </p>
        </div>
      </section>
    );
  }

  return (
    <section
      id="writing"
      className={`writing-section${comingSoon ? " writing-section--preview" : ""}`}
      aria-busy={comingSoon ? "true" : undefined}
    >
      <SectionTitle>Product Thinking &amp; Writing</SectionTitle>
      {comingSoon ? (
        <p className="writing-section__preview-lede muted">
          <strong className="writing-section__preview-strong">Coming soon</strong> — drafts are in progress.
          Below is a preview of themes and working titles so you know what&apos;s in the pipeline.
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

"use client";

import Image from "next/image";
import { useEffect } from "react";
import type {
  CaseStudyModalStory,
  FeaturedModalBlock,
  FeaturedStorySegment,
} from "@/types/portfolio";

function ExternalIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 3h7v7M10 14L21 3M21 10v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function DocumentIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8l-6-6z"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path d="M14 2v6h6M16 13H8M16 17H8M10 9H8" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
    </svg>
  );
}

function ModalLink({
  href,
  label,
  variant,
}: {
  href: string;
  label: string;
  variant: "primary" | "secondary";
}) {
  const external = href.startsWith("http");
  return (
    <a
      className={`case-modal__btn case-modal__btn--${variant}`}
      href={href}
      {...(external ? { target: "_blank", rel: "noopener noreferrer" as const } : {})}
    >
      {variant === "primary" ? <ExternalIcon /> : <DocumentIcon />}
      {label}
    </a>
  );
}

function RichParagraph({
  heading,
  segments,
}: {
  heading: string;
  segments: FeaturedStorySegment[];
}) {
  return (
    <section className="case-modal__section case-modal__section--narrative">
      <h3 className="case-modal__h3 case-modal__h3--eyebrow">{heading}</h3>
      <p className="case-modal__body">
        {segments.map((seg, i) =>
          seg.strong ? (
            <strong key={i} className="case-modal__strong">
              {seg.text}
            </strong>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        )}
      </p>
    </section>
  );
}

function renderModalBlock(block: FeaturedModalBlock, i: number) {
  if (block.type === "divider") {
    return <hr key={i} className="case-modal__rule" />;
  }
  if (block.type === "richParagraph") {
    return (
      <RichParagraph key={i} heading={block.heading} segments={block.segments} />
    );
  }
  if (block.type === "dashBullets") {
    return (
      <section key={i} className="case-modal__section case-modal__section--narrative">
        <h3 className="case-modal__h3 case-modal__h3--eyebrow">{block.heading}</h3>
        <ul className="case-modal__dash-list">
          {block.items.map((item) => (
            <li key={item} className="case-modal__dash-item">
              {item}
            </li>
          ))}
        </ul>
      </section>
    );
  }
  if (block.type === "statGrid") {
    return (
      <section key={i} className="case-modal__section case-modal__section--narrative">
        <h3 className="case-modal__h3 case-modal__h3--eyebrow">{block.heading}</h3>
        <div className="case-modal__stat-grid">
          {block.stats.map((s) => (
            <div key={s.value + s.label} className="case-modal__stat">
              <span className="case-modal__stat-value">{s.value}</span>
              <span className="case-modal__stat-label">{s.label}</span>
            </div>
          ))}
        </div>
      </section>
    );
  }
  if (block.type === "pullQuote") {
    return (
      <section key={i} className="case-modal__section case-modal__section--narrative">
        <h3 className="case-modal__h3 case-modal__h3--eyebrow">{block.heading}</h3>
        <blockquote className="case-modal__pull-quote">
          <p>{block.quote}</p>
        </blockquote>
      </section>
    );
  }
  if (block.type === "subheading") {
    return (
      <h4 key={i} className="case-modal__h4">
        {block.text}
      </h4>
    );
  }
  if (block.type === "paragraph") {
    return (
      <section key={i} className="case-modal__section">
        <h3 className="case-modal__h3">{block.heading}</h3>
        <p className="case-modal__body">{block.body}</p>
      </section>
    );
  }
  return (
    <section key={i} className="case-modal__section">
      <h3 className="case-modal__h3">{block.heading}</h3>
      <ul className="case-modal__list">
        {block.items.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    </section>
  );
}

type Props = {
  story: CaseStudyModalStory | null;
  onClose: () => void;
};

export function FeaturedCaseStudyModal({ story, onClose }: Props) {
  useEffect(() => {
    if (!story) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") onClose();
    };
    document.addEventListener("keydown", onKey);
    const prev = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = prev;
    };
  }, [story, onClose]);

  if (!story) return null;

  const modal = story.modal;
  const hasOverview = modal.overview.trim().length > 0;
  const hasDetails = modal.details.trim().length > 0;
  const hasTags = modal.modalTags.length > 0;

  return (
    <div
      className="case-modal-overlay"
      onClick={onClose}
      role="presentation"
    >
      <div
        className="case-modal"
        role="dialog"
        aria-modal="true"
        aria-labelledby={`case-modal-title-${story.id}`}
        onClick={(e) => e.stopPropagation()}
      >
        <header className="case-modal__header">
          <h2 id={`case-modal-title-${story.id}`} className="case-modal__title">
            {story.title}
          </h2>
          <button
            type="button"
            className="case-modal__close"
            onClick={onClose}
            aria-label="Close"
          >
            <span aria-hidden>×</span>
          </button>
        </header>

        {story.featuredImage ? (
          <div className="case-modal__image-shell">
            <Image
              src={story.featuredImage}
              alt={story.featuredImageAlt ?? ""}
              width={880}
              height={520}
              className="case-modal__image"
            />
          </div>
        ) : null}

        {story.impactHighlights && story.impactHighlights.length > 0 ? (
          <ul className="case-modal__impact" aria-label="Key outcomes">
            {story.impactHighlights.map((line) => (
              <li key={line} className="case-modal__impact-pill">
                {line}
              </li>
            ))}
          </ul>
        ) : null}

        {hasTags ? (
          <div className="case-modal__tags">
            {modal.modalTags.map((tag) => (
              <span key={tag} className="case-modal__tag">
                {tag}
              </span>
            ))}
          </div>
        ) : null}

        {hasOverview ? (
          <section className="case-modal__section">
            <h3 className="case-modal__h3">Overview</h3>
            <p className="case-modal__body">{modal.overview}</p>
          </section>
        ) : null}

        {hasDetails ? (
          <section className="case-modal__section">
            <h3 className="case-modal__h3">Details</h3>
            <p className="case-modal__body">{modal.details}</p>
          </section>
        ) : null}

        {modal.blocks?.map((block, i) => renderModalBlock(block, i))}

        {(modal.primaryAction || modal.secondaryAction) && (
          <footer className="case-modal__footer">
            {modal.primaryAction ? (
              <ModalLink
                href={modal.primaryAction.href}
                label={modal.primaryAction.label}
                variant="primary"
              />
            ) : null}
            {modal.secondaryAction ? (
              <ModalLink
                href={modal.secondaryAction.href}
                label={modal.secondaryAction.label}
                variant="secondary"
              />
            ) : null}
          </footer>
        )}
      </div>
    </div>
  );
}

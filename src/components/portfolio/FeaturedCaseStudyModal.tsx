"use client";

import Image from "next/image";
import { useEffect } from "react";
import type { CaseStudyModalStory } from "@/types/portfolio";

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

        <div className="case-modal__tags">
          {modal.modalTags.map((tag) => (
            <span key={tag} className="case-modal__tag">
              {tag}
            </span>
          ))}
        </div>

        <section className="case-modal__section">
          <h3 className="case-modal__h3">Overview</h3>
          <p className="case-modal__body">{modal.overview}</p>
        </section>

        <section className="case-modal__section">
          <h3 className="case-modal__h3">Details</h3>
          <p className="case-modal__body">{modal.details}</p>
        </section>

        {modal.blocks?.map((block, i) => {
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
        })}

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

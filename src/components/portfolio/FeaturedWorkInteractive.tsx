"use client";

import { useState } from "react";
import { FeaturedCaseStudyModal } from "@/components/portfolio/FeaturedCaseStudyModal";
import { FeaturedVisual } from "@/components/portfolio/FeaturedVisual";
import type { FeaturedStory, FeaturedStorySegment } from "@/types/portfolio";

function StoryParagraph({ segments }: { segments: FeaturedStorySegment[] }) {
  return (
    <p className="featured-work__p">
      {segments.map((seg, i) =>
        seg.strong ? (
          <strong key={i} className="featured-work__strong">
            {seg.text}
          </strong>
        ) : (
          <span key={i}>{seg.text}</span>
        )
      )}
    </p>
  );
}

function CardLinkIcon() {
  return (
    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" className="featured-story__cta-icon" aria-hidden>
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

type Props = {
  stories: FeaturedStory[];
};

export function FeaturedWorkInteractive({ stories }: Props) {
  const [activeId, setActiveId] = useState<string | null>(null);
  const activeStory = stories.find((s) => s.id === activeId) ?? null;

  return (
    <>
      <div className="featured-work__list">
        {stories.map((story, index) => {
          const imageLeft = index % 2 === 0;
          const step = String(index + 1).padStart(2, "0");
          const badgeClass = story.badgeVariant
            ? `featured-story__badge featured-story__badge--${story.badgeVariant}`
            : "featured-story__badge featured-story__badge--default";
          const bodyMain = (
            <div className="featured-work__text featured-story">
              <div className="featured-story__body">
                {story.cardLede ? (
                  <p className="featured-story__lede">{story.cardLede}</p>
                ) : (
                  story.paragraphs.map((segs, i) => (
                    <StoryParagraph key={i} segments={segs} />
                  ))
                )}
              </div>
              {story.impactLine ? (
                <p className="featured-story__impact-line" role="text">
                  {story.impactLine}
                </p>
              ) : story.footerTags.length > 0 ? (
                <ul className="featured-story__chips" aria-label="Project highlights">
                  {story.footerTags.map((tag) => (
                    <li key={tag} className="featured-story__chip">
                      {tag}
                    </li>
                  ))}
                </ul>
              ) : null}
              {story.modal ? (
                <button
                  type="button"
                  className="btn-gold-outline featured-story__open"
                  onClick={() => setActiveId(story.id)}
                >
                  <CardLinkIcon />
                  Full case study
                </button>
              ) : null}
            </div>
          );
          const visual = (
            <FeaturedVisual
              label={story.title}
              imageSrc={story.featuredImage}
              imageAlt={story.featuredImageAlt ?? story.title}
              imageFocus={story.featuredImageFocus}
            />
          );
          const headMain = (
            <div className="featured-work__row-head-main">
              <h3 className="featured-work__title">{story.title}</h3>
              <p className="featured-story__meta-line">
                <span className={badgeClass}>{story.badge}</span>
                {story.meta ? (
                  <>
                    <span className="featured-story__meta-dot" aria-hidden>
                      ·
                    </span>
                    <span className="featured-story__meta">{story.meta}</span>
                  </>
                ) : null}
              </p>
            </div>
          );
          const zStep = (
            <span className="featured-work__z-step" aria-hidden>
              {step}
            </span>
          );
          const splitHead = (
            <header className="featured-work__split-head">
              <div
                className={`featured-work__row-head-cluster featured-work__row-head-cluster--${imageLeft ? "step-trail" : "step-lead"}`}
              >
                {imageLeft ? (
                  <>
                    {headMain}
                    {zStep}
                  </>
                ) : (
                  <>
                    {zStep}
                    {headMain}
                  </>
                )}
              </div>
            </header>
          );

          return (
            <article
              key={story.id}
              className={`featured-work__row ${imageLeft ? "featured-work__row--media-left" : "featured-work__row--media-right"}`}
            >
              <div className="featured-work__row-split">
                {imageLeft ? (
                  <>
                    {splitHead}
                    <div className="featured-work__col featured-work__col--visual featured-work__col--visual-left">
                      {visual}
                    </div>
                    <div className="featured-work__col featured-work__col--body">{bodyMain}</div>
                  </>
                ) : (
                  <>
                    {splitHead}
                    <div className="featured-work__col featured-work__col--body">{bodyMain}</div>
                    <div className="featured-work__col featured-work__col--visual featured-work__col--visual-right">
                      {visual}
                    </div>
                  </>
                )}
              </div>
            </article>
          );
        })}
      </div>

      <FeaturedCaseStudyModal
        story={
          activeStory?.modal
            ? {
                id: activeStory.id,
                title: activeStory.title,
                featuredImage: activeStory.featuredImage,
                featuredImageAlt: activeStory.featuredImageAlt,
                modal: activeStory.modal,
                impactHighlights:
                  activeStory.modal.hideTopMetrics || activeStory.footerTags.length === 0
                    ? undefined
                    : activeStory.footerTags,
              }
            : null
        }
        onClose={() => setActiveId(null)}
      />
    </>
  );
}

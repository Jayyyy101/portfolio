"use client";

import Image from "next/image";
import { useState } from "react";
import { FeaturedCaseStudyModal } from "@/components/portfolio/FeaturedCaseStudyModal";
import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { CaseStudyModalStory, MoreProjectItem } from "@/types/portfolio";

type Props = {
  items: MoreProjectItem[];
};

function CoverPlaceholder({ label }: { label: string }) {
  const initial = label.slice(0, 2).toUpperCase();
  return (
    <div className="more-projects__placeholder" aria-hidden>
      <span className="more-projects__placeholder-initial">{initial}</span>
    </div>
  );
}

export function MoreProjectsGrid({ items }: Props) {
  const [open, setOpen] = useState<CaseStudyModalStory | null>(null);

  if (!items.length) return null;

  return (
    <>
      <section id="more-projects" className="more-projects">
        <SectionTitle>More product work</SectionTitle>
        <p className="more-projects__lede muted">
          Shorter write-ups on work that didn&apos;t sit in the featured row — same rigour, smaller canvas.
        </p>
        <div className="more-projects__grid">
          {items.map((item) => {
            const variant = item.badgeVariant ?? "mint";
            return (
              <article key={item.id} className="more-projects__card">
                <div className="more-projects__cover">
                  {item.coverImage ? (
                    <Image
                      src={item.coverImage}
                      alt={item.coverImageAlt ?? ""}
                      fill
                      className="more-projects__cover-img"
                      sizes="(max-width: 900px) 100vw, 33vw"
                    />
                  ) : (
                    <CoverPlaceholder label={item.category} />
                  )}
                </div>
                <div className="more-projects__body">
                  <p className={`more-projects__category more-projects__category--${variant}`}>{item.category}</p>
                  <h3 className="more-projects__title">{item.title}</h3>
                  {item.date ? <p className="more-projects__date">{item.date}</p> : null}
                  <p className="more-projects__excerpt">{item.description}</p>
                  <button
                    type="button"
                    className="btn-gold-outline more-projects__cta"
                    onClick={() =>
                      setOpen({
                        id: item.id,
                        title: item.title,
                        featuredImage: item.coverImage,
                        featuredImageAlt: item.coverImageAlt,
                        modal: item.modal,
                      })
                    }
                  >
                    View case study
                  </button>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      <FeaturedCaseStudyModal story={open} onClose={() => setOpen(null)} />
    </>
  );
}

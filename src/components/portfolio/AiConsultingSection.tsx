/* eslint-disable @next/next/no-img-element -- deck covers use lazy static SVG/PNG (no iframe) */
import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { ConsultingDeckItem } from "@/types/portfolio";

type Props = {
  items: ConsultingDeckItem[];
};

/** Block view URLs (HTML loaders). Allow paths and CDN thumbnails (e.g. cdn.presentations.ai). */
function safeDeckThumbnailSrc(item: ConsultingDeckItem): string | undefined {
  const src = item.thumbnailSrc?.trim();
  if (!src) return undefined;
  const deck = item.presentationUrl?.trim();
  if (deck && src === deck) return undefined;
  if (/app\.presentations\.ai\/view\//i.test(src)) return undefined;
  return src;
}

function CoverPlaceholder({ label, initials }: { label: string; initials?: string }) {
  const letters = (initials ?? label).replace(/[^a-zA-Z]/g, "").slice(0, 2);
  const mono = letters.length >= 2 ? letters.toUpperCase() : label.slice(0, 2).toUpperCase();
  return (
    <div className="consulting-decks__placeholder" aria-hidden>
      <span className="consulting-decks__placeholder-initial">{mono}</span>
    </div>
  );
}

function ArrowIcon() {
  return (
    <svg className="consulting-decks__arrow" width="20" height="20" viewBox="0 0 24 24" aria-hidden>
      <path
        fill="currentColor"
        d="M12 4l-1.41 1.41L16.17 11H4v2h12.17l-5.58 5.59L12 20l8-8-8-8z"
      />
    </svg>
  );
}

export function AiConsultingSection({ items }: Props) {
  if (!items.length) return null;

  return (
    <section
      id="ai-consulting"
      className="consulting-decks"
      aria-labelledby="ai-consulting-heading"
    >
      <SectionTitle id="ai-consulting-heading">AI Consulting &amp; Strategy</SectionTitle>
      <div className="consulting-decks__grid">
        {items.map((item, index) => {
          const raw = item.presentationUrl?.trim();
          const href = raw && raw.length > 0 ? raw : "#contact";
          const external = /^https?:\/\//i.test(href);
          const thumbSrc = safeDeckThumbnailSrc(item);
          const openLabel = external
            ? `Open deck: ${item.headline} in a new tab`
            : "Request this deck — contact";

          return (
            <article key={item.id} className="consulting-decks__card">
              <a
                href={href}
                {...(external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                className="consulting-decks__card-link"
                aria-label={openLabel}
              >
                <div className="consulting-decks__cover">
                  {thumbSrc ? (
                    <img
                      src={thumbSrc}
                      alt={item.thumbnailAlt ?? `${item.headline} deck preview`}
                      className="consulting-decks__cover-img"
                      loading={index === 0 ? "eager" : "lazy"}
                      decoding="async"
                      fetchPriority={index === 0 ? "high" : "low"}
                    />
                  ) : (
                    <CoverPlaceholder label={item.industryTag} initials={item.coverInitials} />
                  )}
                  <div className="consulting-decks__cover-overlay" aria-hidden>
                    <span className="consulting-decks__cover-cta">View deck →</span>
                  </div>
                </div>
                <div className="consulting-decks__body">
                  <p className="consulting-decks__tag">{item.industryTag}</p>
                  <div className="consulting-decks__title-row">
                    <div className="consulting-decks__text">
                      <h3 className="consulting-decks__headline">{item.headline}</h3>
                      {item.subtitle ? (
                        <p className="consulting-decks__subtitle">{item.subtitle}</p>
                      ) : null}
                    </div>
                    <span className="consulting-decks__arrow-wrap" aria-hidden>
                      <ArrowIcon />
                    </span>
                  </div>
                </div>
              </a>
            </article>
          );
        })}
      </div>
      <p className="consulting-decks__footnote">More decks and industries available on request.</p>
    </section>
  );
}

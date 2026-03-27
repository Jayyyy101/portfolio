import { FeaturedVisual } from "@/components/portfolio/FeaturedVisual";
import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { ProjectItem } from "@/types/portfolio";

type Props = {
  projects: ProjectItem[];
};

export function FeaturedWorkZ({ projects }: Props) {
  const featured = projects.filter((p) => p.featured).sort((a, b) => a.order - b.order);

  return (
    <section id="featured" className="featured-work">
      <SectionTitle line={false}>Featured Product Work</SectionTitle>
      <div className="featured-work__list">
        {featured.map((p, index) => {
          const imageLeft = index % 2 === 0;
          const body = (
            <div className="featured-work__text">
              <h3 className="featured-work__title">{p.title}</h3>
              <p className="featured-work__subtitle">{p.subtitle}</p>
              <p className="featured-work__p">{p.problem}</p>
              <p className="featured-work__p">{p.approach}</p>
              <p className="featured-work__impact">
                <strong>Impact:</strong> {p.impact}
              </p>
            </div>
          );
          const visual = (
            <FeaturedVisual
              label={p.title}
              imageSrc={p.featuredImage}
              imageAlt={p.featuredImageAlt ?? p.title}
            />
          );
          return (
            <article key={p.id} className="featured-work__row">
              {imageLeft ? (
                <>
                  <div className="featured-work__col">{visual}</div>
                  <div className="featured-work__col">{body}</div>
                </>
              ) : (
                <>
                  <div className="featured-work__col">{body}</div>
                  <div className="featured-work__col">{visual}</div>
                </>
              )}
            </article>
          );
        })}
      </div>
    </section>
  );
}

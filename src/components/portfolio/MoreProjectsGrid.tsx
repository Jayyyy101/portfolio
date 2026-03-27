import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { MoreProjectItem } from "@/types/portfolio";

type Props = {
  items: MoreProjectItem[];
};

export function MoreProjectsGrid({ items }: Props) {
  if (!items.length) return null;
  return (
    <section id="more-projects" className="more-projects">
      <SectionTitle>More Projects</SectionTitle>
      <div className="more-projects__grid">
        {items.map((item) => (
          <article key={item.id} className="more-projects__card">
            <h3 className="more-projects__title">{item.title}</h3>
            <p className="more-projects__desc">{item.description}</p>
          </article>
        ))}
      </div>
    </section>
  );
}

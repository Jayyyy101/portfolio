import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { SkillsSectionData } from "@/types/portfolio";

type Props = {
  data: SkillsSectionData;
};

export function SkillsSection({ data }: Props) {
  if (!data.categories.length) return null;

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <SectionTitle id="skills-heading">Skills</SectionTitle>
      <p className="skills-section__intro">
        {data.intro.map((seg, i) =>
          seg.emph ? (
            <strong key={i} className="skills-section__emph">
              {seg.text}
            </strong>
          ) : (
            <span key={i}>{seg.text}</span>
          )
        )}
      </p>
      {data.categories.map((cat) => (
        <div key={cat.id} className="skills-section__group">
          <h3 className="skills-section__label">{cat.title}</h3>
          <ul className="skills-section__chips" aria-label={cat.title}>
            {cat.items.map((item) => (
              <li key={`${cat.id}-${item}`} className={`skills-chip skills-chip--${cat.variant}`}>
                {item}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </section>
  );
}

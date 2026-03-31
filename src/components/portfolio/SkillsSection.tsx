import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { SkillsChipVariant, SkillsSectionData } from "@/types/portfolio";

function chipClass(variant: SkillsChipVariant): string {
  return `skills-chip skills-chip--${variant}`;
}

type Props = {
  data: SkillsSectionData;
};

export function SkillsSection({ data }: Props) {
  if (!data.categories.length) return null;

  return (
    <section id="skills" className="skills-section" aria-labelledby="skills-heading">
      <SectionTitle id="skills-heading">Skills</SectionTitle>
      {data.intro.length ? (
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
      ) : null}
      <div className="skills-section__blocks">
        {data.categories.map((cat) =>
          cat.isToolsBand ? (
            <div key={cat.id} className="skills-section__block skills-section__block--tools">
              <h3 className="skills-section__tools-heading">{cat.title}</h3>
              <ul className="skills-section__chips" aria-label={cat.title}>
                {cat.items.map((item) => (
                  <li key={`${cat.id}-${item}`} className={chipClass(cat.variant)}>
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div key={cat.id} className="skills-section__block">
              <div className="skills-section__block-copy">
                <div
                  className={
                    "skills-section__block-lede" +
                    (cat.index ? "" : " skills-section__block-lede--no-index")
                  }
                >
                  {cat.index ? (
                    <span className={`skills-section__index skills-section__index--${cat.variant}`}>
                      {cat.index}
                    </span>
                  ) : null}
                  <h3 className="skills-section__block-title">{cat.title}</h3>
                  {cat.description ? (
                    <p className="skills-section__block-desc">{cat.description}</p>
                  ) : null}
                </div>
                <ul className="skills-section__chips" aria-label={cat.title}>
                  {cat.items.map((item) => (
                    <li key={`${cat.id}-${item}`} className={chipClass(cat.variant)}>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

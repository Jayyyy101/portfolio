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
                  <li key={`${cat.id}-${item}`} className="skills-chip skills-chip--neutral">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          ) : (
            <div key={cat.id} className="skills-section__block">
              <div className="skills-section__block-head">
                {cat.index ? <span className="skills-section__index">{cat.index}</span> : null}
                <div className="skills-section__block-copy">
                  <div className="skills-section__block-lede">
                    <h3 className="skills-section__block-title">{cat.title}</h3>
                    {cat.description ? (
                      <p className="skills-section__block-desc">{cat.description}</p>
                    ) : null}
                  </div>
                  <ul className="skills-section__chips" aria-label={cat.title}>
                    {cat.items.map((item) => (
                      <li key={`${cat.id}-${item}`} className="skills-chip skills-chip--neutral">
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

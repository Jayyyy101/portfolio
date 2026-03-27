import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { ExperienceItem } from "@/types/portfolio";

type Props = {
  items: ExperienceItem[];
};

export function ExperienceSection({ items }: Props) {
  const sorted = [...items].sort((a, b) => a.order - b.order);
  return (
    <section id="experience" className="experience-section">
      <SectionTitle>Where I&apos;ve Worked</SectionTitle>
      <ul className="experience-list">
        {sorted.map((item) => (
          <li key={item.id} className="experience-list__item">
            <div className="experience-list__meta">
              <h3 className="experience-list__role">{item.role}</h3>
              <p className="experience-list__company">
                {item.company} · {item.start_date} – {item.end_date}
              </p>
            </div>
            <p className="experience-list__summary">{item.summary}</p>
            {item.bullets && item.bullets.length > 0 ? (
              <ul className="experience-list__bullets">
                {item.bullets.map((b) => (
                  <li key={b}>{b}</li>
                ))}
              </ul>
            ) : null}
          </li>
        ))}
      </ul>
    </section>
  );
}

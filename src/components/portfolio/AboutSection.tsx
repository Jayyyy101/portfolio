import { SectionTitle } from "@/components/portfolio/SectionTitle";

type Props = {
  body: string;
};

export function AboutSection({ body }: Props) {
  return (
    <section id="about" className="about-section">
      <SectionTitle>About Me</SectionTitle>
      <div className="about-section__body">
        <p>{body}</p>
      </div>
      <div className="about-section__tags">
        <span className="about-tag">Product strategy</span>
        <span className="about-tag">Marketplace &amp; aggregators</span>
        <span className="about-tag">Growth &amp; SEO</span>
        <span className="about-tag">AI automation</span>
      </div>
    </section>
  );
}

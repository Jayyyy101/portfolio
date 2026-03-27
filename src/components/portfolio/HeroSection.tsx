import Image from "next/image";
import { RESUME_PATH } from "@/lib/site";

type Props = {
  name: string;
  title: string;
  summary: string;
};

export function HeroSection({ name, title, summary }: Props) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__copy">
        <h1 className="hero-section__name">{name}</h1>
        <p className="hero-section__role">{title}</p>
        <p className="hero-section__summary">{summary}</p>
        <div className="hero-section__ctas">
          <a className="btn-gold-outline" href="#about">
            Read more
          </a>
          <a className="btn-gold-ghost" href={RESUME_PATH} download>
            Download resume
          </a>
        </div>
      </div>
      <div className="hero-section__photo-wrap">
        <div className="hero-section__photo-frame">
          <Image
            src="/profile-jayita.png"
            alt="Jayita Sharma"
            width={480}
            height={600}
            className="hero-section__photo"
            priority
          />
        </div>
      </div>
    </section>
  );
}

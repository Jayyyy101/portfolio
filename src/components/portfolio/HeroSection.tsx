import Image from "next/image";

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
        <a className="btn-gold-outline" href="#about">
          Read more
        </a>
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

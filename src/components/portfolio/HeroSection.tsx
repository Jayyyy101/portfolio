import Image from "next/image";
import { HeroTypingIntro } from "@/components/portfolio/HeroTypingIntro";

type Props = {
  name: string;
  title: string;
  summary: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function HeroSection({
  name,
  title,
  summary,
  ctaLabel = "See my work",
  ctaHref = "#featured",
}: Props) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__copy">
        <HeroTypingIntro />
        <h1 className="hero-section__name">{name}</h1>
        <p className="hero-section__role hero-section__role--italic">{title}</p>
        <p className="hero-section__summary hero-section__summary--italic">{summary}</p>
        <a className="btn-gold-outline" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
      <div className="hero-section__photo-wrap">
        <div className="hero-section__photo-frame">
          <Image
            src="/profile-jayita.png"
            alt="Jayita Sharma"
            width={400}
            height={391}
            className="hero-section__photo"
            priority
          />
        </div>
      </div>
    </section>
  );
}

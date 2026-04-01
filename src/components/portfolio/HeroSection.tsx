import Image from "next/image";
import { HeroHeadlineGroup } from "@/components/portfolio/HeroHeadlineGroup";
import { HeroTypingIntro } from "@/components/portfolio/HeroTypingIntro";

type Props = {
  name: string;
  title: string;
  /** Short value line between keywords and bio (optional). */
  tagline?: string;
  summary: string;
  ctaLabel?: string;
  ctaHref?: string;
};

export function HeroSection({
  name,
  title,
  tagline,
  summary,
  ctaLabel = "View my work",
  ctaHref = "#featured",
}: Props) {
  return (
    <section id="hero" className="hero-section">
      <div className="hero-section__copy">
        <HeroTypingIntro />
        <h1 className="hero-section__name">{name}</h1>
        <HeroHeadlineGroup title={title} tagline={tagline} summary={summary} />
        <a className="hero-section__cta btn-gold-outline" href={ctaHref}>
          {ctaLabel}
        </a>
      </div>
      <div className="hero-section__photo-wrap">
        <Image
          src="/profile-jayita.png"
          alt="Jayita Sharma"
          width={400}
          height={391}
          className="hero-section__photo"
          priority
        />
      </div>
    </section>
  );
}

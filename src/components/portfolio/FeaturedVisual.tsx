import Image from "next/image";

type Props = {
  label: string;
  imageSrc?: string;
  imageAlt?: string;
};

/** Featured work visual: real image when `imageSrc` is set, else gradient placeholder. */
export function FeaturedVisual({ label, imageSrc, imageAlt }: Props) {
  if (imageSrc) {
    return (
      <div className="featured-visual featured-visual--image">
        <Image
          src={imageSrc}
          alt={imageAlt ?? label}
          fill
          sizes="(max-width: 900px) 100vw, 520px"
          className="featured-visual__img"
          priority={false}
        />
      </div>
    );
  }

  return (
    <div className="featured-visual" aria-hidden>
      <div className="featured-visual__inner">
        <span className="featured-visual__label">{label}</span>
      </div>
    </div>
  );
}

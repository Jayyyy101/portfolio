import Image from "next/image";

type Props = {
  label: string;
  imageSrc?: string;
  imageAlt?: string;
  /** Where to anchor the crop when the frame aspect ratio differs from the asset */
  imageFocus?: "top" | "center";
};

/** Featured work visual: real image when `imageSrc` is set, else gradient placeholder. */
export function FeaturedVisual({ label, imageSrc, imageAlt, imageFocus = "top" }: Props) {
  if (imageSrc) {
    const imgClass =
      imageFocus === "center"
        ? "featured-visual__img featured-visual__img--focus-center"
        : "featured-visual__img";
    return (
      <div className="featured-visual featured-visual--image">
        <Image
          src={imageSrc}
          alt={imageAlt ?? label}
          fill
          sizes="(max-width: 900px) 100vw, 520px"
          className={imgClass}
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

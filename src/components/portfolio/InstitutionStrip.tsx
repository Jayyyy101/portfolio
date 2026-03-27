import Image from "next/image";

/**
 * Google (official G) + IIT Roorkee + University of Delhi seals.
 */
export function InstitutionStrip() {
  return (
    <section className="institution-strip" aria-labelledby="institution-strip-heading">
      <h2 id="institution-strip-heading" className="institution-strip__title">
        Education &amp; certifications
      </h2>
      <p className="institution-strip__subtitle">
        Degrees and programs that grounded my craft—and still inform how I frame problems, ship product, and grow systems.
      </p>
      <ul className="institution-strip__list">
        <li className="institution-strip__item">
          <div className="institution-strip__circle institution-strip__circle--img institution-strip__circle--google-mark">
            <Image
              src="/institutions/google.png"
              alt="Google"
              fill
              className="institution-strip__img institution-strip__img--contain"
              sizes="56px"
            />
          </div>
          <div className="institution-strip__text">
            <span className="institution-strip__name">Google</span>
            <span className="institution-strip__role">Professional certificates · AI &amp; ML</span>
          </div>
        </li>
        <li className="institution-strip__item">
          <div className="institution-strip__circle institution-strip__circle--img institution-strip__circle--seal">
            <Image
              src="/institutions/iit-roorkee.png"
              alt="Indian Institute of Technology Roorkee"
              fill
              className="institution-strip__img institution-strip__img--contain"
              sizes="56px"
            />
          </div>
          <div className="institution-strip__text">
            <span className="institution-strip__name">Indian Institute of Technology, Roorkee</span>
            <span className="institution-strip__role">Certified Product Manager (CPM)</span>
          </div>
        </li>
        <li className="institution-strip__item">
          <div className="institution-strip__circle institution-strip__circle--img institution-strip__circle--seal">
            <Image
              src="/institutions/university-of-delhi.png"
              alt="University of Delhi"
              fill
              className="institution-strip__img institution-strip__img--contain"
              sizes="56px"
            />
          </div>
          <div className="institution-strip__text">
            <span className="institution-strip__name">University of Delhi</span>
            <span className="institution-strip__role">B.A. English (Honours) · Research, writing &amp; analysis</span>
          </div>
        </li>
      </ul>
    </section>
  );
}

import Image from "next/image";
import { SectionTitle } from "@/components/portfolio/SectionTitle";
import type { CertificationItem } from "@/types/portfolio";

function DiamondIcon() {
  return (
    <svg className="certifications-item__diamond" width="9" height="9" viewBox="0 0 8 8" aria-hidden>
      <path fill="currentColor" d="M4 0 8 4 4 8 0 4z" />
    </svg>
  );
}

function ExternalIcon() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
      <path
        d="M14 3h7v7M10 14L21 3M21 10v8a2 2 0 01-2 2H5a2 2 0 01-2-2V5a2 2 0 012-2h8"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

type Props = {
  items: CertificationItem[];
};

export function CertificationsSection({ items }: Props) {
  const sorted = [...items].sort((a, b) => a.order - b.order);
  if (sorted.length === 0) return null;

  return (
    <section id="certifications" className="certifications-section">
      <SectionTitle>Licenses &amp; certifications</SectionTitle>
      <ul className="certifications-list">
        {sorted.map((c) => {
          const variant = c.logoVariant ?? "default";
          const initials =
            c.logoInitials ??
            c.issuer
              .split(/\s+/)
              .slice(0, 2)
              .map((w) => w[0])
              .join("")
              .toUpperCase()
              .slice(0, 3);

          return (
            <li key={c.id} className="certifications-item">
              <div className="certifications-item__logo-wrap" aria-hidden>
                {c.logoSrc ? (
                  <div className="certifications-item__logo-img">
                    <Image
                      src={c.logoSrc}
                      alt={c.logoAlt ?? c.issuer}
                      width={48}
                      height={48}
                      className="certifications-item__logo-image"
                    />
                  </div>
                ) : (
                  <span className={`cert-logo cert-logo--${variant}`}>{initials}</span>
                )}
              </div>
              <div className="certifications-item__body">
                <h3 className="certifications-item__title">{c.title}</h3>
                <p className="certifications-item__issuer">{c.issuer}</p>
                <p className="certifications-item__meta">
                  {c.issued}
                  {c.credentialId ? (
                    <>
                      <span className="certifications-item__meta-sep" aria-hidden>
                        {" "}
                        ·{" "}
                      </span>
                      <span>Credential ID {c.credentialId}</span>
                    </>
                  ) : null}
                </p>
                {c.credentialUrl ? (
                  <a
                    className="certifications-item__credential"
                    href={c.credentialUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <ExternalIcon />
                    Show credential
                  </a>
                ) : null}
                {c.skills ? (
                  <p className="certifications-item__skills">
                    <DiamondIcon />
                    <span className="certifications-item__skills-text">{c.skills}</span>
                  </p>
                ) : null}
              </div>
            </li>
          );
        })}
      </ul>
    </section>
  );
}

"use client";

import Image from "next/image";
import { useMemo } from "react";
import { PortfolioData } from "@/types/portfolio";

type Props = {
  data: PortfolioData;
};

export function PortfolioPageClient({ data }: Props) {
  const highlights = useMemo(
    () => [
      data.content.highlight_1 ?? "2.5+ years experience",
      data.content.highlight_2 ?? "250+ DAU in first month",
      data.content.highlight_3 ?? "3 enterprise clients in month one",
      data.content.highlight_4 ?? "~500K additional monthly visits driven",
    ],
    [data.content]
  );

  return (
    <div className="grid" style={{ gap: 24 }}>
      <section id="hero" className="card hero">
        <div className="hero-grid">
          <div>
            <span className="hero-tag">Product Portfolio</span>
            <h1>{data.content.hero_name ?? "Jayita Sharma"}</h1>
            <p className="muted">{data.content.hero_title ?? "Product & Growth"}</p>
            <p>
              {data.content.hero_summary ??
                "Product and growth specialist building marketplace and AI automation products."}
            </p>
          </div>
          <aside className="hero-side">
            <Image
              src="/profile-jayita.png"
              alt="Jayita Sharma profile"
              className="profile-photo"
              width={420}
              height={540}
              priority
            />
            <p className="kicker">Core Focus</p>
            <div className="chip-row">
              <span className="chip">Marketplace Strategy</span>
              <span className="chip">Discovery UX</span>
              <span className="chip">AI Automation</span>
              <span className="chip">SEO Growth</span>
            </div>
          </aside>
        </div>
      </section>

      <section id="impact" className="grid grid-2">
        {highlights.map((item) => (
          <div className="card stat-tile" key={item}>
            {item}
          </div>
        ))}
      </section>

      <section id="about" className="card section-shell">
        <span className="kicker">Profile</span>
        <h2>About</h2>
        <p>
          {data.content.about ??
            "Jayita works across product strategy, discovery architecture, and growth systems."}
        </p>
      </section>

      <section id="experience" className="card section-shell">
        <span className="kicker">Career Journey</span>
        <h2>Experience</h2>
        <div className="timeline">
          {data.experience.map((item) => (
            <article key={item.id} className="card timeline-item">
              <h3>
                {item.role} - {item.company}
              </h3>
              <p className="muted">
                {item.start_date} to {item.end_date}
              </p>
              <p>{item.summary}</p>
            </article>
          ))}
        </div>
      </section>

      <section id="projects" className="card section-shell">
        <span className="kicker">Selected Work</span>
        <h2>Projects</h2>
        <div className="grid">
          {data.projects.map((project) => (
            <article key={project.id} className="card project-card">
              <h3>{project.title}</h3>
              <p className="muted">{project.subtitle}</p>
              <p>
                <strong>Problem:</strong> {project.problem}
              </p>
              <p>
                <strong>Approach:</strong> {project.approach}
              </p>
              <p>
                <strong>Impact:</strong> {project.impact}
              </p>
              <p className="muted">
                <strong>Tools:</strong> {project.tools}
              </p>
            </article>
          ))}
        </div>
      </section>

      <section id="contact" className="card cta-strip">
        <div>
          <p className="kicker">Let us Build</p>
          <h3 style={{ margin: 0 }}>Open to product and growth opportunities</h3>
        </div>
        <div style={{ display: "flex", gap: 8 }}>
          <a className="btn" href="mailto:jayitasharma111@gmail.com">
            Contact Jayita
          </a>
          <a className="btn secondary" href="#">
            Download Resume
          </a>
        </div>
      </section>
    </div>
  );
}

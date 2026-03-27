"use client";

import { useState } from "react";
import { ExperienceItem, ProjectItem } from "@/types/portfolio";

type Props = {
  projects: ProjectItem[];
  experience: ExperienceItem[];
};

export function AdminEditors({ projects, experience }: Props) {
  const [projectItems, setProjectItems] = useState(projects);
  const [experienceItems, setExperienceItems] = useState(experience);
  const [status, setStatus] = useState("");

  async function saveProject(item: ProjectItem) {
    const res = await fetch("/api/admin/projects/update", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(item),
    });
    setStatus(res.ok ? `Project ${item.id} saved` : `Project ${item.id} failed`);
  }

  async function saveExperience(item: ExperienceItem) {
    const res = await fetch("/api/admin/experience/update", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(item),
    });
    setStatus(res.ok ? `Experience ${item.id} saved` : `Experience ${item.id} failed`);
  }

  return (
    <div className="grid" style={{ gap: 20 }}>
      <p className="muted">{status}</p>
      <section className="card">
        <h2>Edit Projects</h2>
        <div className="grid">
          {projectItems.map((item, idx) => (
            <div key={item.id} className="card">
              <p className="muted">ID: {item.id}</p>
              <input
                value={item.title}
                onChange={(e) => {
                  const copy = [...projectItems];
                  copy[idx] = { ...item, title: e.target.value };
                  setProjectItems(copy);
                }}
              />
              <textarea
                rows={2}
                value={item.subtitle}
                onChange={(e) => {
                  const copy = [...projectItems];
                  copy[idx] = { ...item, subtitle: e.target.value };
                  setProjectItems(copy);
                }}
              />
              <textarea
                rows={3}
                value={item.problem}
                onChange={(e) => {
                  const copy = [...projectItems];
                  copy[idx] = { ...item, problem: e.target.value };
                  setProjectItems(copy);
                }}
              />
              <textarea
                rows={3}
                value={item.approach}
                onChange={(e) => {
                  const copy = [...projectItems];
                  copy[idx] = { ...item, approach: e.target.value };
                  setProjectItems(copy);
                }}
              />
              <textarea
                rows={3}
                value={item.impact}
                onChange={(e) => {
                  const copy = [...projectItems];
                  copy[idx] = { ...item, impact: e.target.value };
                  setProjectItems(copy);
                }}
              />
              <input
                value={item.tools}
                onChange={(e) => {
                  const copy = [...projectItems];
                  copy[idx] = { ...item, tools: e.target.value };
                  setProjectItems(copy);
                }}
              />
              <button className="btn" onClick={() => saveProject(item)}>
                Save Project
              </button>
            </div>
          ))}
        </div>
      </section>

      <section className="card">
        <h2>Edit Experience</h2>
        <div className="grid">
          {experienceItems.map((item, idx) => (
            <div key={item.id} className="card">
              <p className="muted">ID: {item.id}</p>
              <input
                value={item.company}
                onChange={(e) => {
                  const copy = [...experienceItems];
                  copy[idx] = { ...item, company: e.target.value };
                  setExperienceItems(copy);
                }}
              />
              <input
                value={item.role}
                onChange={(e) => {
                  const copy = [...experienceItems];
                  copy[idx] = { ...item, role: e.target.value };
                  setExperienceItems(copy);
                }}
              />
              <textarea
                rows={3}
                value={item.summary}
                onChange={(e) => {
                  const copy = [...experienceItems];
                  copy[idx] = { ...item, summary: e.target.value };
                  setExperienceItems(copy);
                }}
              />
              <button className="btn" onClick={() => saveExperience(item)}>
                Save Experience
              </button>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}

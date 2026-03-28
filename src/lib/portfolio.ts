import { readSheet } from "@/lib/sheets";
import { ExperienceItem, PortfolioData, ProjectItem } from "@/types/portfolio";

function toMap(rows: string[][]) {
  const header = rows[0] ?? [];
  const keyIdx = header.indexOf("key");
  const valueIdx = header.indexOf("value");
  const map: Record<string, string> = {};

  rows.slice(1).forEach((row) => {
    const key = row[keyIdx];
    if (key) map[key] = row[valueIdx] ?? "";
  });
  return map;
}

function toProjects(rows: string[][]): ProjectItem[] {
  if (!rows.length) return [];
  const [header, ...body] = rows;
  const idx = (k: string) => header.indexOf(k);
  return body
    .filter((r) => r[idx("id")])
    .map((r) => ({
      id: r[idx("id")] ?? "",
      title: r[idx("title")] ?? "",
      subtitle: r[idx("subtitle")] ?? "",
      problem: r[idx("problem")] ?? "",
      approach: r[idx("approach")] ?? "",
      impact: r[idx("impact")] ?? "",
      tools: r[idx("tools")] ?? "",
      order: Number(r[idx("order")] ?? 0),
      is_published: (r[idx("is_published")] ?? "true") === "true",
      updated_at: r[idx("updated_at")] ?? "",
    }))
    .sort((a, b) => a.order - b.order);
}

function toExperience(rows: string[][]): ExperienceItem[] {
  if (!rows.length) return [];
  const [header, ...body] = rows;
  const idx = (k: string) => header.indexOf(k);
  return body
    .filter((r) => r[idx("id")])
    .map((r) => ({
      id: r[idx("id")] ?? "",
      company: r[idx("company")] ?? "",
      role: r[idx("role")] ?? "",
      start_date: r[idx("start_date")] ?? "",
      end_date: r[idx("end_date")] ?? "",
      summary: r[idx("summary")] ?? "",
      highlights_json: r[idx("highlights_json")] ?? "[]",
      order: Number(r[idx("order")] ?? 0),
      updated_at: r[idx("updated_at")] ?? "",
    }))
    .sort((a, b) => a.order - b.order);
}

function fallbackPortfolioData(): PortfolioData {
  return {
    content: {
      hero_name: "Jayita Sharma",
      hero_title:
        "I build products people trust, systems that scale, and growth that compounds.",
      hero_summary:
        "From marketplace platforms to AI automation — I work at the intersection of user insight and business impact.",
      about:
        "2.5+ years across AI and auto-tech with experience in taxonomy, discovery UX, and growth systems.",
      highlight_1: "2.5+ years experience",
      highlight_2: "250+ DAU in first month",
      highlight_3: "3 enterprise clients onboarded in month one",
      highlight_4: "~500K additional monthly visits driven",
    },
    projects: [],
    experience: [],
  };
}

export async function getPortfolioData(includeUnpublished = false): Promise<PortfolioData> {
  try {
    const [contentRows, projectRows, experienceRows] = await Promise.all([
      readSheet("content"),
      readSheet("projects"),
      readSheet("experience"),
    ]);

    return {
      content: { ...fallbackPortfolioData().content, ...toMap(contentRows) },
      projects: toProjects(projectRows).filter((p) => includeUnpublished || p.is_published),
      experience: toExperience(experienceRows),
    };
  } catch (error) {
    console.warn("Falling back to default portfolio data:", error);
    return fallbackPortfolioData();
  }
}

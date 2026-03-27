export type ContentType = "text" | "markdown" | "json";

export type ContentItem = {
  key: string;
  value: string;
  type: ContentType;
  updated_at?: string;
  updated_by?: string;
};

export type ProjectItem = {
  id: string;
  title: string;
  subtitle: string;
  problem: string;
  approach: string;
  impact: string;
  tools: string;
  order: number;
  is_published: boolean;
  updated_at?: string;
};

export type ExperienceItem = {
  id: string;
  company: string;
  role: string;
  start_date: string;
  end_date: string;
  summary: string;
  highlights_json: string;
  order: number;
  updated_at?: string;
};

export type PortfolioData = {
  content: Record<string, string>;
  projects: ProjectItem[];
  experience: ExperienceItem[];
};

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
  /** Large Z-pattern featured blocks */
  featured?: boolean;
  /** Optional screenshot under `/public` e.g. `/featured/shot.png` */
  featuredImage?: string;
  featuredImageAlt?: string;
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
  /** Parsed in UI when present */
  bullets?: string[];
  order: number;
  updated_at?: string;
};

export type MoreProjectItem = {
  id: string;
  title: string;
  description: string;
};

export type WritingItem = {
  id: string;
  title: string;
  /** External article URL; omit if not published yet */
  href?: string;
};

export type PortfolioData = {
  content: Record<string, string>;
  projects: ProjectItem[];
  experience: ExperienceItem[];
  /** Smaller cards in “More projects” grid */
  moreProjects?: MoreProjectItem[];
  /** Accordion / writing links */
  writing?: WritingItem[];
};

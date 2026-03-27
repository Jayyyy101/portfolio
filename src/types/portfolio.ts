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

/** Pill colour on writing cards (aligned with featured badge palette). */
export type WritingTagVariant = "lavender" | "mint" | "ice" | "sand" | "rose";

export type WritingCard = {
  id: string;
  title: string;
  tag: string;
  tagVariant: WritingTagVariant;
  description: string;
  /** Optional angle line below the description (shown with a magnifying-glass icon) */
  angle?: string;
  /** External article URL; omit when not published yet */
  href?: string;
};

export type WritingGroup = {
  id: string;
  heading: string;
  cards: WritingCard[];
};

/** Coloured skill pill preset (matches section group). */
export type SkillsChipVariant = "mint" | "lavender" | "sand" | "ice" | "tools";

export type SkillsCategory = {
  id: string;
  title: string;
  variant: SkillsChipVariant;
  items: string[];
};

export type SkillIntroSegment = {
  text: string;
  /** Stronger emphasis in the intro line (e.g. “they compound.”) */
  emph?: boolean;
};

export type SkillsSectionData = {
  intro: SkillIntroSegment[];
  categories: SkillsCategory[];
};

/** License / certification row (LinkedIn-style list). */
export type CertificationItem = {
  id: string;
  order: number;
  title: string;
  issuer: string;
  /** e.g. "Issued Sep 2024" */
  issued: string;
  credentialId?: string;
  credentialUrl?: string;
  /** Single line, e.g. "Generative AI, GANs, +2 skills" */
  skills?: string;
  /** Optional logo under `/public` */
  logoSrc?: string;
  logoAlt?: string;
  /** Shown in circle when `logoSrc` omitted */
  logoInitials?: string;
  /** Visual preset for fallback avatar */
  logoVariant?: "default" | "google" | "iit" | "brand";
};

/** One run of text inside an About paragraph; optional highlight (e.g. teal accent). */
export type AboutSegment = { text: string; highlight?: boolean };

/** Inline segment inside a featured story paragraph; `strong` for bold emphasis. */
export type FeaturedStorySegment = { text: string; strong?: boolean };

/** Extra sections inside the case-study modal (after Overview & Details). */
export type FeaturedModalBlock =
  | { type: "paragraph"; heading: string; body: string }
  | { type: "bullets"; heading: string; items: string[] }
  | { type: "subheading"; text: string };

export type FeaturedStoryModal = {
  overview: string;
  details: string;
  /** Amber/gold pills in the modal header area */
  modalTags: string[];
  blocks?: FeaturedModalBlock[];
  primaryAction?: { label: string; href: string };
  secondaryAction?: { label: string; href: string };
};

/** Cover pill on more-project cards (matches featured badge palette). */
export type MoreProjectBadgeVariant = "mint" | "lavender" | "sand" | "ice";

/** Non-featured product work: blog-style card + case-study modal. */
export type MoreProjectItem = {
  id: string;
  title: string;
  /** Short excerpt on the card */
  description: string;
  category: string;
  /** Optional display date or range on the card */
  date?: string;
  /** Optional hero image under `/public` */
  coverImage?: string;
  coverImageAlt?: string;
  badgeVariant?: MoreProjectBadgeVariant;
  modal: FeaturedStoryModal;
};

/** Payload for `FeaturedCaseStudyModal` (featured row or more-project card). */
export type CaseStudyModalStory = {
  id: string;
  title: string;
  featuredImage?: string;
  featuredImageAlt?: string;
  modal: FeaturedStoryModal;
};

/** Rich narrative card in Featured Product Work (Z-layout). */
export type FeaturedStory = {
  id: string;
  order: number;
  badge: string;
  badgeVariant?: "mint" | "lavender" | "sand";
  title: string;
  meta: string;
  paragraphs: FeaturedStorySegment[][];
  footerTags: string[];
  featuredImage?: string;
  featuredImageAlt?: string;
  /** Crop focal point for featured frame (`object-position`); landing pages = top, dense diagrams = center */
  featuredImageFocus?: "top" | "center";
  /** Full-screen case study popup */
  modal?: FeaturedStoryModal;
};

export type PortfolioData = {
  content: Record<string, string>;
  projects: ProjectItem[];
  experience: ExperienceItem[];
  /** About Me: each inner array is one paragraph */
  aboutParagraphs?: AboutSegment[][];
  /** Featured work — full story cards (preferred over `projects[].featured`) */
  featuredStories?: FeaturedStory[];
  /** Smaller cards in “More projects” grid */
  moreProjects?: MoreProjectItem[];
  /** Product thinking & articles — grouped cards (ignored when `writingComingSoon`) */
  writing?: WritingGroup[];
  /** When true, show a placeholder instead of article cards */
  writingComingSoon?: boolean;
  /** Licenses & certifications */
  certifications?: CertificationItem[];
  /** Skills intro + grouped chips */
  skills?: SkillsSectionData;
};

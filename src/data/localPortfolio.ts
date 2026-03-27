import { PortfolioData } from "@/types/portfolio";

export const localPortfolioData: PortfolioData = {
  content: {
    hero_name: "Jayita Sharma",
    hero_title: "Product & Growth",
    hero_summary:
      "Product and growth professional with 2.5+ years of experience scaling aggregator and marketplace platforms across auto-tech and AI tools.",
    about:
      "Jayita works at the intersection of product strategy, discovery architecture, SEO-led growth, and AI automation. She has driven measurable outcomes through taxonomy design, conversion-focused UX, and cross-functional execution.",
    highlight_1: "2.5+ years experience",
    highlight_2: "250+ DAU in first month",
    highlight_3: "3 enterprise clients onboarded in month one",
    highlight_4: "~500K monthly visits added via SEO growth",
  },
  experience: [
    {
      id: "exp-thatsmyai",
      company: "ThatsMyAI",
      role: "Product Lead / Consultant",
      start_date: "Mar 2024",
      end_date: "Present",
      summary:
        "Defined taxonomy and discovery architecture, owned marketplace requirements, and built n8n automations for content and LinkedIn publishing.",
      highlights_json: "[]",
      order: 1,
    },
    {
      id: "exp-tractor-junction",
      company: "Tractor Junction",
      role: "Content Team Lead",
      start_date: "Jul 2022",
      end_date: "May 2024",
      summary:
        "Led a 7-member content team, delivered 25% output increase and 17% organic growth, and helped define requirements for in-house CMS.",
      highlights_json: "[]",
      order: 2,
    },
  ],
  projects: [
    {
      id: "proj-ai-aggregator",
      title: "AI Tools Aggregator Discovery System",
      subtitle: "Taxonomy + navigation + discovery UX for AI marketplace",
      problem: "Users struggled to discover relevant AI tools across categories.",
      approach:
        "Built category taxonomy, information architecture, and dynamic navigation backed by market research and intent analysis.",
      impact: "Contributed to 250+ DAU in first month with improved discoverability.",
      tools: "SEMrush, IA design, product specs, stakeholder alignment",
      order: 1,
      is_published: true,
    },
    {
      id: "proj-linkedin-automation",
      title: "AI-Powered LinkedIn Automation (n8n)",
      subtitle: "Contextual post generation from live news feeds",
      problem: "Manual content publishing was slow and inconsistent.",
      approach:
        "Designed end-to-end n8n workflow to fetch feeds, generate contextual posts, and publish automatically.",
      impact: "Improved content consistency and reduced manual operations.",
      tools: "n8n, RSS feeds, prompt engineering, automation pipelines",
      order: 2,
      is_published: true,
    },
  ],
};

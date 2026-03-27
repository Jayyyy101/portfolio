import { PortfolioData } from "@/types/portfolio";

export const localPortfolioData: PortfolioData = {
  content: {
    hero_name: "Jayita Sharma",
    hero_title: "Product & Growth | Marketplace Platforms & AI Automation",
    hero_summary:
      "Product and growth professional with 2.5+ years of experience scaling aggregator and marketplace platforms across auto-tech and AI tools. I define taxonomy, discovery UX, and growth systems that move metrics.",
    about:
      "Jayita works at the intersection of product strategy, discovery architecture, SEO-led growth, and AI automation. She partners with engineering to ship marketplace modules, content systems, and automation pipelines that compound over time.",
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
        "AI tools aggregator: taxonomy, discovery UX, marketplace requirements, and n8n automations.",
      highlights_json: "[]",
      bullets: [
        "Owned PRDs for listings, enquiry flows, and dynamic navigation.",
        "Built LinkedIn + RSS automation workflows for freshness and distribution.",
        "Onboarded 3 enterprise clients in the first month post-launch.",
      ],
      order: 1,
    },
    {
      id: "exp-tractor-junction",
      company: "Tractor Junction",
      role: "Content Team Lead",
      start_date: "Jul 2022",
      end_date: "May 2024",
      summary:
        "India’s leading agri aggregator: SEO-led growth and content operations at scale.",
      highlights_json: "[]",
      bullets: [
        "Led team of 7; +25% output and +17% organic traffic (~500K visits).",
        "Co-defined in-house CMS requirements with engineering.",
        "107+ optimized PDPs across vehicle categories.",
      ],
      order: 2,
    },
  ],
  projects: [
    {
      id: "proj-ai-aggregator",
      title: "AI Tools Aggregator Discovery",
      subtitle: "Taxonomy · IA · Discovery UX",
      problem: "Users struggled to discover relevant AI tools across fast-moving categories.",
      approach:
        "Defined platform taxonomy and information architecture from high-volume research (SEMrush), then shipped navigation and listing patterns that matched user intent.",
      impact: "250+ DAU within the first month; stronger category coverage and clearer journeys.",
      tools: "SEMrush, PRDs, Figma, stakeholder alignment",
      order: 1,
      is_published: true,
      featured: true,
      featuredImage: "/featured/ai-discovery.svg",
      featuredImageAlt: "Abstract UI mock for discovery and taxonomy work",
    },
    {
      id: "proj-linkedin-automation",
      title: "LinkedIn & News Automation",
      subtitle: "n8n · RSS · Publishing",
      problem: "Publishing was manual; the platform needed consistent distribution and freshness.",
      approach:
        "Designed n8n workflows: ingest RSS → generate contextual posts → schedule and publish with guardrails.",
      impact: "Reduced manual ops and improved organic visibility through steady output.",
      tools: "n8n, RSS, prompt engineering",
      order: 2,
      is_published: true,
      featured: true,
      featuredImage: "/featured/n8n-automation.svg",
      featuredImageAlt: "Abstract workflow diagram for automation pipelines",
    },
  ],
  moreProjects: [
    {
      id: "more-1",
      title: "Adaptive learning engine",
      description: "Rule engine PRDs and assessment logic for personalized JEE prep (Grovita).",
    },
    {
      id: "more-2",
      title: "SEO content systems",
      description: "GA, GSC, SEMrush loops to steer content strategy at 3.2M monthly visitors scale.",
    },
    {
      id: "more-3",
      title: "CMS & publishing ops",
      description: "Requirements for internal CMS to cut turnaround and standardize quality.",
    },
  ],
  writing: [
    { id: "w1", title: "Building marketplace taxonomy that scales" },
    { id: "w2", title: "From RSS to published: automation guardrails" },
    { id: "w3", title: "SEO metrics that actually change roadmap" },
  ],
};

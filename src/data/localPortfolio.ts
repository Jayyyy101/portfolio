import { PortfolioData } from "@/types/portfolio";

export const localPortfolioData: PortfolioData = {
  content: {
    hero_name: "Jayita Sharma",
    hero_title: "Product & Growth Strategist | Marketplace Platforms & AI Automation",
    hero_summary:
      "Product and growth professional with 2.5+ years of experience scaling aggregator and marketplace platforms across auto-tech and AI tools.",
    highlight_1: "2.5+ years experience",
    highlight_2: "250+ DAU in first month",
    highlight_3: "3 enterprise clients onboarded in month one",
    highlight_4: "~500K monthly visits added via SEO growth",
  },
  aboutParagraphs: [
    [
      {
        text: "I started as a writer — someone who believed words could move people. Turns out, they can also move traffic, convert users, and build products.",
      },
    ],
    [
      {
        text: "But here's the thing nobody tells you about following your curiosity: it doesn't take you in a straight line. It takes you through detours that, in hindsight, were never detours at all.",
      },
    ],
    [
      { text: "SEO taught me that " },
      { text: "intention lives behind every search.", highlight: true },
      {
        text: " Growth taught me that numbers tell stories if you know how to listen. Product taught me that the best ideas are just well-understood problems wearing a solution. And then AI arrived — and suddenly every question I ever had felt like the beginning of a new\u00A0chapter.",
      },
    ],
  ],
  featuredStories: [
    {
      id: "story-thatsmyai",
      order: 1,
      badge: "AI Tools · Product",
      badgeVariant: "mint",
      title: "ThatsMyAI — Where the AI world finally made sense",
      meta: "Product Lead · March 2024 – Present",
      paragraphs: [
        [
          {
            text: "Thousands of AI tools, zero intuitive shelves — discovery felt like searching a library where nothing is catalogued. As product lead I owned ",
          },
          {
            text: "taxonomy through enquiries and n8n-backed freshness",
            strong: true,
          },
          {
            text: " so ThatsMyAI could scale without drowning users in noise.",
          },
        ],
      ],
      footerTags: [
        "250+ DAU · Month one",
        "Full discovery architecture",
        "n8n automation workflows",
      ],
      modal: {
        overview:
          "Owned discovery for an AI tools aggregator: turning a crowded, hard-to-navigate landscape into a structured marketplace where users can compare, shortlist, and take the next step with confidence.",
        details:
          "Work spanned taxonomy, information architecture, listing and navigation patterns, enquiry flows, and automation for freshness. Early traction included 250+ DAU in month one and three enterprise clients onboarded in the first month — evidence that discovery and onboarding were thought through, not guessed.",
        modalTags: [
          "AI marketplace",
          "Taxonomy",
          "Discovery UX",
          "Information architecture",
          "Listing systems",
          "Enquiry flows",
          "Product strategy",
          "Platform PRDs",
          "n8n",
          "B2B onboarding",
        ],
        blocks: [
          {
            type: "paragraph",
            heading: "Problem",
            body: "Users faced an explosion of AI tools with inconsistent categorisation, weak comparability, and unclear next steps. Discovery felt noisy, and both consumers and enterprise evaluators struggled to move from browsing to action.",
          },
          {
            type: "bullets",
            heading: "Research & insights",
            items: [
              "Search and filter behaviour mapped poorly to static category trees without synonym and intent coverage.",
              "Trust signals (use case, integrations, pricing clarity) needed to sit alongside listings, not after deep clicks.",
              "Enterprises needed repeatable evaluation paths: shortlist, compare, contact — without losing context.",
              "Freshness mattered: new tools land weekly; manual curation could not scale without automation support.",
            ],
          },
          {
            type: "paragraph",
            heading: "Solution",
            body: "Defined category logic and navigational IA, specified listing modules and enquiry flows, and paired product surfaces with n8n-based publishing and distribution workflows so the platform stayed current while the team stayed lean.",
          },
          {
            type: "bullets",
            heading: "Expected impact",
            items: [
              "Faster time-to-relevant-tool for new visitors.",
              "Clearer enterprise evaluation journeys and higher-quality inbound conversations.",
              "Sustainable operations through automated content and outreach loops.",
            ],
          },
          {
            type: "paragraph",
            heading: "Key learnings",
            body: "On aggregators, taxonomy is product strategy. If the shelves are wrong, every downstream metric compounds the confusion — SEO, conversion, and support included.",
          },
        ],
        primaryAction: { label: "View project", href: "https://thatsmyai.com" },
        secondaryAction: { label: "View document", href: "/resume/resume.pdf" },
      },
      featuredImage: "/featured/thatsmyai-landing.png",
      featuredImageAlt:
        "ThatsMyAI homepage: Discover the Best AI Tools — search bar and discovery UI",
    },
    {
      id: "story-linkedin-agent",
      order: 2,
      badge: "AI · Automation",
      badgeVariant: "lavender",
      title: "The LinkedIn Agent — like a mum's love, it won't sleep till you've achieved your goals",
      meta: "Built at ThatsMyAI · 2024",
      paragraphs: [
        [
          {
            text: "Everyone wants a LinkedIn presence; nobody wants Sunday topic hunts. I built an n8n workflow that ingests live signals and drafts on-theme posts — from ",
          },
          {
            text: "pick-and-publish to hands-off cadence",
            strong: true,
          },
          { text: ", with checkpoints when you want control." },
        ],
      ],
      footerTags: [
        "Real-time RSS feeds",
        "End-to-end publishing",
        "Agentic AI workflow",
      ],
      modal: {
        overview:
          "Built an agentic workflow that ingests live signals, proposes topics aligned to market conversation, and takes LinkedIn publishing from draft to post with minimal friction.",
        details:
          "The system combines RSS and news sources, relevance filtering, drafting, optional human selection, and scheduled publishing — designed for operators who want consistency without sacrificing judgment. It keeps showing up on a cadence so presence doesn’t depend on weekly manual topic hunts.",
        modalTags: [
          "n8n",
          "Agentic workflow",
          "RSS feeds",
          "LinkedIn",
          "Content automation",
          "Publishing",
          "Prompt design",
          "Growth",
          "Product",
        ],
        blocks: [
          {
            type: "paragraph",
            heading: "Problem",
            body: "Consistency on LinkedIn breaks when research, writing, and scheduling compete with everything else on the calendar. Generic schedulers do not solve idea discovery or topical relevance.",
          },
          {
            type: "bullets",
            heading: "Research & insights",
            items: [
              "Users abandon flows that require manual topic hunting every week.",
              "Publishing quality drops when tone and structure are not guard-railed.",
              "Automation wins when humans can intervene briefly — not operate the entire pipeline.",
            ],
          },
          {
            type: "paragraph",
            heading: "Solution",
            body: "Designed end-to-end n8n automation: ingest feeds, score topics, generate structured drafts, apply refinements, and publish on cadence — with clear choke points for review when needed.",
          },
          {
            type: "bullets",
            heading: "Expected impact",
            items: [
              "Higher weekly publishing consistency with fewer Sunday planning sessions.",
              "Better topical alignment with market narratives.",
              "Lower operational load for solo operators and small teams.",
            ],
          },
          {
            type: "paragraph",
            heading: "Key learnings",
            body: "The best automations feel boring on the outside: strict contracts between steps, observable failures, and defaults that respect brand tone beat flashy prompts every time.",
          },
        ],
        primaryAction: { label: "View project", href: "https://thatsmyai.com" },
        secondaryAction: { label: "View document", href: "/resume/resume.pdf" },
      },
      featuredImage: "/featured/linkedin-agent-workflow.png",
      featuredImageAlt:
        "Multi-agent automation workflow with social upload agent including LinkedIn publishing",
      featuredImageFocus: "center",
    },
    {
      id: "story-grovita",
      order: 3,
      badge: "EdTech · AI Product",
      badgeVariant: "sand",
      title: "Grovita — the engine that knows where you're stuck before you do",
      meta: "Product & Automation Consultant",
      paragraphs: [
        [
          {
            text: "JEE is one of the hardest exams in the world. Most platforms hand you content and wish you luck. Grovita ",
          },
          {
            text: "pays attention",
            strong: true,
          },
          {
            text: " — I consulted on a three-tier adaptive engine (performance, mastery, recommendations) so next steps follow ",
          },
          {
            text: "behaviour, not a fixed playlist",
            strong: true,
          },
          { text: "." },
        ],
      ],
      footerTags: [
        "Adaptive learning",
        "Real-time performance tracking",
        "Personalised learnings",
      ],
      modal: {
        overview:
          "Designed product logic for an adaptive JEE prep experience: a three-tier system that records performance, models topic mastery, and recommends what to practise next based on behaviour — not a fixed syllabus order.",
        details:
          "The concept treats hesitation, error patterns, and avoidance as signals. The engine translates those signals into learning paths that adapt every session, aiming to intervene before a student wastes time on the wrong difficulty or wrong topic.",
        modalTags: [
          "EdTech",
          "Adaptive learning",
          "Rule engine",
          "Personalisation",
          "Assessment design",
          "JEE",
          "AI product",
          "PRDs",
          "Behaviour signals",
        ],
        blocks: [
          {
            type: "paragraph",
            heading: "Problem",
            body: "Static content playlists fail competitive exams because they ignore what the student is actually struggling with. Personalisation requires instrumentation: what was answered, how fast, what was skipped, and what repeats.",
          },
          {
            type: "bullets",
            heading: "Research & insights",
            items: [
              "Performance variance within a chapter is as important as chapter completion.",
              "Students often avoid topics they fear; the system must surface that without shame or noise.",
              "Recommendations must be explainable enough to build trust with parents and coaches.",
            ],
          },
          {
            type: "subheading",
            text: "Engine sketch — Record Manager, Topic Master, Recommender",
          },
          {
            type: "paragraph",
            heading: "Solution",
            body: "Specified a three-tier architecture: a Record Manager for granular attempt data, a Topic Master for mapping strengths and gaps, and a Recommender that selects next actions based on rules and performance history — with room to evolve toward fuller adaptive models.",
          },
          {
            type: "bullets",
            heading: "Expected impact",
            items: [
              "Higher practise efficiency by matching difficulty to ability.",
              "Better retention through paths that respond to avoidance signals.",
              "A foundation for measurable outcomes beyond hours watched.",
            ],
          },
          {
            type: "paragraph",
            heading: "Key learnings",
            body: "Adaptive products are data products first. If the events you capture cannot justify the next recommendation, the UX will feel magical-and-wrong instead of magical-and-fair.",
          },
        ],
        primaryAction: { label: "View project", href: "#featured" },
        secondaryAction: { label: "View document", href: "/resume/resume.pdf" },
      },
      featuredImage: "/featured/grovita-landing.png",
      featuredImageAlt:
        "Grovita homepage: AI-powered JEE prep — hero, practice CTAs, and progress UI",
    },
  ],
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
  skills: {
    intro: [
      { text: "My skills don't live in neat boxes — " },
      { text: "they compound.", emph: true },
      {
        text: " Writing taught me clarity. SEO taught me intent. Product taught me systems. Growth taught me leverage. And AI taught me that all of it, put together, is just the beginning.",
      },
    ],
    categories: [
      {
        id: "product",
        title: "Product",
        variant: "mint",
        items: [
          "Product strategy",
          "PRDs & feature specs",
          "Roadmapping",
          "Feature prioritisation",
          "0→1 product building",
          "User research",
          "Stakeholder management",
          "Go-to-market strategy",
          "Competitive analysis",
          "Wireframing & Figma",
        ],
      },
      {
        id: "growth",
        title: "Growth & marketing",
        variant: "lavender",
        items: [
          "SEO strategy",
          "Organic traffic growth",
          "Content strategy",
          "Conversion optimisation",
          "Lead generation",
          "Funnel analysis",
          "LinkedIn growth",
          "Social media strategy",
          "Brand voice & positioning",
          "Email outreach",
        ],
      },
      {
        id: "ai",
        title: "AI & automation",
        variant: "sand",
        items: [
          "n8n workflows",
          "AI agent design",
          "Prompt engineering",
          "Content automation",
          "RSS feed integration",
          "Rule engine design",
          "Agentic systems",
          "AI tools evaluation",
          "Workflow architecture",
        ],
      },
      {
        id: "platforms",
        title: "Platforms & marketplaces",
        variant: "ice",
        items: [
          "Aggregator platforms",
          "Discovery UX",
          "Platform taxonomy",
          "Information architecture",
          "Listing systems",
          "Enquiry workflows",
          "CMS management",
        ],
      },
      {
        id: "tools",
        title: "Tools",
        variant: "tools",
        items: [
          "SEMrush",
          "Google Analytics",
          "Google Search Console",
          "Google Tag Manager",
          "Mixpanel",
          "Figma",
          "Canva",
          "ChatGPT",
          "Claude AI",
          "Perplexity",
          "n8n",
        ],
      },
    ],
  },
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
    },
  ],
  moreProjects: [
    {
      id: "more-1",
      title: "Tractor Junction at scale",
      description: "SEO-led growth and CMS ops on a high-traffic agri marketplace",
      category: "Growth & SEO",
      badgeVariant: "mint",
      coverImageAlt: "Marketplace growth abstract",
      modal: {
        overview:
          "At India’s leading agri marketplace, organic traffic and editorial throughput had to move together — volume without quality erodes trust; quality without volume cedes shelf space to competitors.",
        details:
          "I led a content team of seven while co-owning the loop between SEMrush, GSC, GA, and editorial calendars. Work spanned PDP optimisation, topical clusters, and internal advocacy for tooling that reduced turnaround without diluting standards.",
        modalTags: ["SEO", "Marketplace", "Content ops", "Team lead"],
        blocks: [
          {
            type: "bullets",
            heading: "Outcomes",
            items: [
              "~17% organic traffic lift in a key year; ~500K incremental monthly visits attributed to SEO-led initiatives.",
              "107+ optimised PDPs across vehicle categories with clearer intent and structured data hygiene.",
              "Co-defined requirements for an in-house CMS so publishing could scale without losing guardrails.",
            ],
          },
          {
            type: "paragraph",
            heading: "Takeaway",
            body: "At aggregators, SEO is not a channel silo — it is a product surface. When taxonomy, PDPs, and freshness align, compounding shows up in both rankings and revenue.",
          },
        ],
        secondaryAction: { label: "View resume", href: "/resume/resume.pdf" },
      },
    },
    {
      id: "more-2",
      title: "SEO content systems",
      description:
        "GA, GSC, SEMrush loops to steer content strategy at 3.2M monthly visitors scale",
      category: "SEO",
      badgeVariant: "ice",
      coverImage: "/featured/linkedin-agent-workflow.png",
      coverImageAlt: "Workflow and analytics — SEO content systems",
      modal: {
        overview:
          "When monthly visitors are in the millions, intuition stops scaling — you need a repeatable loop from query → brief → ship → measure, with clear ownership at each step.",
        details:
          "I helped institutionalise how we read Search Console and SEMrush: which clusters to expand, where cannibalisation appeared, and how to prioritise fixes that moved the aggregate without starving long-tail demand.",
        modalTags: ["GSC", "SEMrush", "Content strategy", "Analytics"],
        blocks: [
          {
            type: "bullets",
            heading: "How the loop worked",
            items: [
              "Weekly triage of query shifts and impression share changes before they showed up in revenue reports.",
              "Brief templates tied to intent (informational vs transactional) so writers didn’t ship generic pages.",
              "Retro on underperforming URLs: thin content, internal links, or SERP feature mismatch.",
            ],
          },
        ],
        primaryAction: { label: "Featured work", href: "#featured" },
      },
    },
    {
      id: "more-3",
      title: "CMS & publishing ops",
      description: "Requirements for internal CMS to cut turnaround and standardize quality",
      category: "Platforms",
      badgeVariant: "lavender",
      coverImageAlt: "CMS workflow abstract",
      modal: {
        overview:
          "External traffic means little if the team can’t publish fast enough to test hypotheses. We needed a CMS that matched marketplace reality: many categories, many stakeholders, one quality bar.",
        details:
          "I partnered with engineering to translate editorial pain into requirements: workflows, permissions, previews, and guardrails for bulk updates — without turning the tool into a second job for writers.",
        modalTags: ["CMS", "Requirements", "Publishing", "B2B marketplace"],
        blocks: [
          {
            type: "paragraph",
            heading: "What I owned",
            body: "User stories from content and SEO, acceptance criteria for releases, and rollout plans that didn’t strand legacy pages in limbo.",
          },
        ],
      },
    },
  ],
  certifications: [
    {
      id: "cert-genai-tmai",
      order: 1,
      title: "Introduction to Generative AI",
      issuer: "ThatsMyAI",
      issued: "Issued Sep 2024",
      credentialId: "a3fa2fd9432e0348cdfc",
      skills: "Generative AI, Generative Adversarial Networks (GANs), +2 skills",
      logoInitials: "TM",
      logoVariant: "brand",
    },
    {
      id: "cert-genai-google",
      order: 2,
      title: "Generative AI",
      issuer: "Google",
      issued: "Issued Jul 2024",
      credentialId: "9804371",
      skills: "Generative AI, Machine Learning, Artificial Intelligence (AI), +2 skills",
      logoInitials: "G",
      logoVariant: "google",
    },
    {
      id: "cert-llm-google",
      order: 3,
      title: "Large Language Models",
      issuer: "Google",
      issued: "Issued Jul 2024",
      credentialId: "9804434",
      skills: "Large Language Models, Natural Language Processing (NLP), Deep Learning, +1 skill",
      logoInitials: "G",
      logoVariant: "google",
    },
    {
      id: "cert-cpm-iit",
      order: 4,
      title: "Certified Product Manager (CPM)",
      issuer: "Indian Institute of Technology, Roorkee",
      issued: "Issued Apr 2024",
      credentialId: "CA-14/2023-24/07",
      skills: "Product Management, Problem Solving, +3 skills",
      logoInitials: "IIT",
      logoVariant: "iit",
    },
  ],
  writingComingSoon: true,
  writing: [
    {
      id: "wg-ai",
      heading: "AI & automation",
      cards: [
        {
          id: "w-linkedin-agent",
          title: "I built an AI agent to run my LinkedIn. Here's what actually happened.",
          tag: "AI",
          tagVariant: "lavender",
          description:
            "Not a tutorial. The real story — what worked, what broke, and what it taught me about automation that no course will tell you.",
        },
        {
          id: "w-n8n-2am",
          title: "Why your n8n workflow breaks at 2am — and how to fix it before it does",
          tag: "Automation",
          tagVariant: "lavender",
          description:
            "The unglamorous side of agentic systems — failure modes, guardrails, and hard lessons from shipping real workflows.",
        },
      ],
    },
    {
      id: "wg-product",
      heading: "Product & marketplaces",
      cards: [
        {
          id: "w-taxonomy-1k",
          title:
            "How I built a taxonomy for 1000+ AI tools — and why it matters more than the product itself",
          tag: "Product",
          tagVariant: "mint",
          description:
            "Discovery is a product decision. The structure behind ThatsMyAI and why most aggregators get this completely wrong.",
        },
        {
          id: "w-0-250-dau",
          title: "0 to 250 daily users in a month — what we did and what we'd never do again",
          tag: "Growth",
          tagVariant: "mint",
          description:
            "The honest version of an early traction story. No vanity metrics, no fundraising spin.",
        },
      ],
    },
    {
      id: "wg-seo",
      heading: "SEO & growth",
      cards: [
        {
          id: "w-500k-visits",
          title: "500,000 extra monthly visits. The content strategy behind it.",
          tag: "SEO",
          tagVariant: "ice",
          description:
            "How a team of 7 moved the needle on organic traffic at Tractor Junction — and the framework that made every piece of content count.",
        },
      ],
    },
    {
      id: "wg-edtech",
      heading: "EdTech & adaptive learning",
      cards: [
        {
          id: "w-grovita-stuck",
          title: "Designing an AI that knows where a student is stuck before they do",
          tag: "EdTech",
          tagVariant: "sand",
          description:
            "The logic behind Grovita's three-tier rule engine — and what building it taught me about the difference between teaching and adapting.",
        },
      ],
    },
  ],
};

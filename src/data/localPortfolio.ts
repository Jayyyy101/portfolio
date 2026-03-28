import { PortfolioData } from "@/types/portfolio";

export const localPortfolioData: PortfolioData = {
  content: {
    hero_name: "Jayita Sharma",
    hero_title:
      "I build products people trust, systems that scale, and growth that compounds.",
    hero_summary:
      "From marketplace platforms to AI automation — I work at the intersection of user insight and business impact. The kind of thinking that turns problems into products.",
    highlight_1: "2.5+ years experience",
    highlight_2: "250+ DAU in first month",
    highlight_3: "3 enterprise clients onboarded in month one",
    highlight_4: "~500K monthly visits added via SEO growth",
  },
  aboutParagraphs: [
    [
      { text: "Some people find their edge in code. Some in data. Mine was always in " },
      { text: "understanding people", highlight: true },
      {
        text: " — what they search for, what they trust, what makes them stay.",
      },
    ],
    [
      {
        text: "That instinct has never been quiet. It pushed me to learn SEO not as a checklist but as a conversation with intent. It made me see growth not as a funnel but as a series of decisions people make when they think nobody's watching. And when I crossed into product — it turned out everything I already knew was just the same question wearing a different coat.",
      },
    ],
    [
      {
        text: "That's how a content brief becomes a traffic strategy. How a user problem becomes a product. How a late night with n8n becomes an AI agent that works while you sleep. ",
      },
      { text: "The medium keeps changing. The obsession doesn't.", highlight: true },
    ],
    [
      {
        text: "I've built marketplace platforms from the ground up, designed adaptive AI engines, and driven half a million monthly visits through organic strategy. I see a problem — ",
      },
      { text: "I'm already at the table with a solution.", highlight: true },
    ],
  ],
  aboutClosingLine: "The only question is what we build next.",
  aboutTags: [
    "AI-native products",
    "Discovery architecture",
    "Growth automation",
    "0→1 building",
    "Marketplace & aggregators",
    "SEO-led growth",
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
  writingComingSoon: false,
  writing: [
    {
      id: "wg-ai-future",
      heading: "AI & The Future of Work",
      cards: [
        {
          id: "w-saas-india",
          title: "India's SaaS is dying. AI-native products are what comes next.",
          tag: "AI",
          tagVariant: "lavender",
          description:
            "1,803 enterprise tech startups shut down in India between 2023-25. The ones surviving are AI-first. This is a real, urgent conversation.",
          angle:
            "What does an AI-native product actually look like from the inside — having built one.",
        },
        {
          id: "w-ai-discovery",
          title: "Everyone is building AI tools. Nobody is building AI discovery.",
          tag: "Product",
          tagVariant: "ice",
          description:
            "The market is flooded with AI tools but finding the right one is still broken. You literally built the solution to this problem.",
          angle:
            "Why discovery is a product problem, not a search problem — from someone who architected it.",
        },
      ],
    },
    {
      id: "wg-edtech",
      heading: "EdTech & Adaptive Learning",
      cards: [
        {
          id: "w-edtech-failed",
          title: "2,150 EdTech startups failed in India. Here's the product mistake they all made.",
          tag: "EdTech",
          tagVariant: "sand",
          description:
            "EdTech funding collapsed 56% YoY. Most platforms pushed content, not personalisation. Grovita's approach was the opposite.",
          angle:
            "The difference between a platform that teaches and one that actually adapts — and why it matters for survival.",
        },
        {
          id: "w-jee-system",
          title: "Why JEE students don't need more content. They need a system that listens.",
          tag: "EdTech",
          tagVariant: "sand",
          description:
            "Physics Wallah is thriving while Byju's collapsed. The difference? Understanding what students actually need vs what looks good on a pitch deck.",
          angle:
            "The Grovita rule engine — and what designing it taught you about real learning vs content delivery.",
        },
      ],
    },
    {
      id: "wg-growth-seo",
      heading: "Growth & SEO in the AI Era",
      cards: [
        {
          id: "w-seo-dead",
          title: "SEO isn't dead. But the way you've been doing it is.",
          tag: "Growth",
          tagVariant: "ice",
          description:
            "AI-generated content is flooding search. Organic strategies built on volume are collapsing. Intent-led SEO is the only thing left standing.",
          angle:
            "How the SEO-first strategy at Tractor Junction — 500K+ extra monthly visits — would be built differently today with AI.",
        },
        {
          id: "w-fintech-users",
          title: "Fintech is India's most funded sector. And nobody knows how to talk to their users.",
          tag: "Fintech",
          tagVariant: "mint",
          description:
            "Fintech raised $1.6B in India in H1 2025 — yet user trust and engagement remain broken. Your resume says you're headed into fintech. This stakes your claim early.",
          angle:
            "What aggregator and marketplace thinking can teach fintech about discovery, onboarding, and conversion.",
        },
      ],
    },
    {
      id: "wg-creator-social",
      heading: "Creator Economy & Social Commerce",
      cards: [
        {
          id: "w-creator-8pct",
          title:
            "Only 8% of Indian creators make money. The other 92% have a product problem.",
          tag: "Creator Economy",
          tagVariant: "rose",
          description:
            "India has 100M+ creators but monetisation remains broken — discovery, taxonomy, conversion. Sound familiar? You literally built a platform to solve this in a different category.",
          angle:
            "What ThatsMyAI's discovery architecture taught you about why creator monetisation is falling — and what the fix looks like.",
        },
        {
          id: "w-linkedin-brands",
          title: "Every brand wants a LinkedIn presence. Almost none of them have a strategy.",
          tag: "Social Commerce",
          tagVariant: "rose",
          description:
            "3 in 4 D2C brands now use creators for growth but most treat it like an afterthought — no system, no consistency, no automation.",
          angle:
            "What building a LinkedIn AI agent taught you about the difference between showing up and actually being present.",
        },
      ],
    },
    {
      id: "wg-qcommerce-d2c",
      heading: "Quick Commerce & D2C",
      cards: [
        {
          id: "w-qcommerce-discovery",
          title:
            "India's Q-commerce market is worth ₹64,000 crore. Nobody is thinking about the discovery problem.",
          tag: "Q-Commerce",
          tagVariant: "sand",
          description:
            "Blinkit, Zepto, Instamart are racing on speed. But how users find products inside these platforms is still broken. It's a taxonomy and UX problem dressed up as a logistics problem.",
          angle:
            "Why the next battleground in quick commerce isn't 10-minute delivery — it's 10-second discovery.",
        },
        {
          id: "w-d2c-roas",
          title: "D2C brands are spending more on ads and getting less back. Here's the real problem.",
          tag: "D2C",
          tagVariant: "sand",
          description:
            "ROAS on Meta and Google is falling sharply. CAC in Delhi NCR is 50% above other metros. Yet most brands keep pouring money in instead of fixing the funnel.",
          angle:
            "What conversion optimisation from Tractor Junction's 3.2M monthly visitors taught you about where D2C brands are actually leaking.",
        },
      ],
    },
    {
      id: "wg-marketplaces",
      heading: "Marketplaces & Aggregators",
      cards: [
        {
          id: "w-aggregators-fail",
          title: "Why most aggregators fail at the one thing they exist to do",
          tag: "Marketplaces",
          tagVariant: "mint",
          description:
            "Aggregators promise to simplify choice. Most add to the noise instead. The difference is almost always information architecture — the thing nobody talks about.",
          angle:
            "From Tractor Junction to ThatsMyAI — what two very different aggregators taught you about the anatomy of good discovery.",
        },
      ],
    },
  ],
};

import { RESUME_PATH, SOCIAL_LINKEDIN } from "@/lib/site";
import { PortfolioData } from "@/types/portfolio";

export const localPortfolioData: PortfolioData = {
  content: {
    hero_name: "Jayita Sharma",
    hero_title:
      "Product Lead · Growth Strategist · AI Automation Architect",
    hero_summary:
      "I turn user insights into scalable products, growth systems, and AI automations that drive adoption, retention, and operational efficiency",
    highlight_1: "500K+ incremental monthly visits (organic)",
    highlight_2: "250+ DAU · 3 enterprise clients (month one)",
    highlight_3: "1,000+ AI tools · 30+ categories (taxonomy & IA)",
    highlight_4: "40% fewer content errors · 60% faster CMS publishing",
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
        text: "I've built marketplace platforms from the ground up, designed adaptive AI engines, and driven 500K+ incremental monthly visits through organic strategy. I see a problem — ",
      },
      { text: "I'm already at the table with a solution.", highlight: true },
    ],
  ],
  aboutClosingLine: "The only question is what we build next.",
  featuredStories: [
    {
      id: "story-thatsmyai",
      order: 1,
      badge: "AI Tools · Product",
      badgeVariant: "mint",
      title: "ThatsMyAI — AI Tools Marketplace",
      meta: "",
      paragraphs: [],
      footerTags: [],
      cardLede:
        "Built an AI tools marketplace from scratch — 1,000+ tools, structured for how people actually search. 250+ DAU and 3 enterprise clients in the first month.",
      modal: {
        overview: "",
        details: "",
        hideTopMetrics: true,
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
            type: "richParagraph",
            heading: "Overview",
            segments: [
              {
                text: "The AI tools market exploded overnight. Thousands of tools, dozens of categories, zero structure. Users weren't struggling to find AI — they were struggling to find the ",
              },
              { text: "right", strong: true },
              {
                text: " AI. I led product to fix that — building a marketplace where discovery felt like browsing a well-curated store, not digging through a cluttered directory.",
              },
            ],
          },
          { type: "divider" },
          {
            type: "richParagraph",
            heading: "The problem",
            segments: [
              {
                text: "Finding the right AI tool was broken — not because the tools didn't exist, but because nothing was organised for how people actually think and search. Categories were arbitrary. Listings were inconsistent. Enterprise buyers had no clear path from browsing to decision. And the platform had no way to stay fresh without burning the team out on manual updates.",
              },
            ],
          },
          { type: "divider" },
          {
            type: "dashBullets",
            heading: "What I discovered",
            items: [
              "People search by intent and use case — not by tool name or category label. The taxonomy had to reflect how users think, not how products are built.",
              "Trust signals needed to be visible upfront — pricing clarity, use cases, integrations — not buried three clicks deep.",
              "Enterprise evaluators needed a repeatable path: shortlist, compare, contact — without losing their place every time.",
              "New tools launched weekly. Without automation, freshness was impossible to maintain at scale.",
            ],
          },
          { type: "divider" },
          {
            type: "richParagraph",
            heading: "What I built",
            segments: [
              { text: "Designed the full taxonomy and information architecture for " },
              { text: "1,000+ tools", strong: true },
              { text: " across " },
              { text: "30+ categories", strong: true },
              {
                text: " — structured around user intent, not product labels. Owned PRDs for listing systems, enquiry workflows, and dynamic navigation. Paired everything with ",
              },
              { text: "n8n automation", strong: true },
              {
                text: " workflows so the platform stayed fresh and the team stayed lean.",
              },
            ],
          },
          { type: "divider" },
          {
            type: "statGrid",
            heading: "Impact",
            stats: [
              { value: "250+", label: "Daily active users in month one" },
              { value: "3", label: "Enterprise clients onboarded in month one" },
              { value: "1,000+", label: "AI tools across 30+ categories" },
            ],
          },
          { type: "divider" },
          {
            type: "pullQuote",
            heading: "What this taught me",
            quote:
              "On aggregator platforms, taxonomy is product strategy. Get the shelves wrong and every downstream metric suffers — SEO, conversion, support, retention. Get it right and the platform sells itself.",
          },
        ],
        primaryAction: { label: "View project", href: "https://thatsmy.ai/" },
        secondaryAction: { label: "View document", href: RESUME_PATH },
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
      title: "LinkedIn AI Agent — Your Voice, On Autopilot",
      meta: "",
      paragraphs: [],
      cardLede:
        "I built an AI agent that reads the market, writes in your voice, and posts to LinkedIn — while you focus on everything else.",
      footerTags: [],
      modal: {
        overview: "",
        details: "",
        hideTopMetrics: true,
        modalTags: [
          "n8n",
          "Agentic workflow",
          "LinkedIn",
          "RSS feeds",
          "Content automation",
          "Publishing",
          "Topic discovery",
          "Market context",
        ],
        blocks: [
          {
            type: "richParagraph",
            heading: "Overview",
            segments: [
              {
                text: "Over 1 billion professionals are on LinkedIn. Only 3% post more than once a week. The gap isn't motivation — it's the daily grind of knowing what to say, when to say it, and actually showing up. I built an AI agent that closes that gap completely — from topic discovery to published post, end to end, zero manual effort required.",
              },
            ],
          },
          { type: "divider" },
          {
            type: "richParagraph",
            heading: "The problem",
            segments: [
              {
                text: "LinkedIn rewards consistency above everything. But consistency is hard when you're also running a business, managing a team, or simply don't know what the market cares about today. Most professionals know they should post — they just don't have the system to do it. The result? Sporadic content, missed opportunities, and a presence that fades the moment life gets busy.",
              },
            ],
          },
          { type: "divider" },
          {
            type: "dashBullets",
            heading: "What I discovered",
            items: [
              "80% of B2B leads on social media come from LinkedIn — but only if you show up consistently enough to be found.",
              "Over 50% of LinkedIn long-form posts in 2025 are AI-generated — yet human-written posts still get 45% more engagement. The opportunity is in sounding human while moving at AI speed.",
              "Posts that tap into trending market topics outperform generic content every time — timing and relevance matter as much as quality.",
              "Most professionals don't need more content ideas. They need a system that removes the friction between idea and published post.",
            ],
          },
          { type: "divider" },
          {
            type: "richParagraph",
            heading: "What I built",
            segments: [
              {
                text: "An agentic n8n workflow that runs the full content cycle autonomously. It ingests live RSS feeds to surface what the market is talking about, generates contextual post drafts in your voice, and manages end-to-end publishing — including scheduling, formatting, and distribution across LinkedIn. You can brief it with a topic and walk away, or select from its recommendations and approve. Either way, ",
              },
              { text: "the post goes out.", strong: true },
            ],
          },
          { type: "divider" },
          {
            type: "statGrid",
            heading: "Market context",
            stats: [
              {
                value: "$850M",
                label: "LinkedIn automation tools market in 2026 — growing 42% YoY",
              },
              {
                value: "3%",
                label: "LinkedIn members who post more than once a week — the gap this solves",
              },
              {
                value: "80%",
                label: "Of B2B social media leads that come from LinkedIn",
              },
            ],
          },
          { type: "divider" },
          {
            type: "pullQuote",
            heading: "What this taught me",
            quote:
              "Automation works best when it removes friction, not personality. The agent doesn't replace your voice — it makes sure your voice actually shows up. Consistently. That's the real product.",
          },
        ],
        primaryAction: { label: "View project", href: SOCIAL_LINKEDIN },
        secondaryAction: { label: "View document", href: RESUME_PATH },
      },
      featuredImage: "/featured/linkedin-agent-phone-ai.png",
      featuredImageAlt:
        "Phone showing LinkedIn logo against a circuit board with glowing AI chip",
      featuredImageFocus: "center",
    },
    {
      id: "story-grovita",
      order: 3,
      badge: "EdTech · AI Product",
      badgeVariant: "sand",
      title: "Grovita — Adaptive Learning Engine for JEE",
      meta: "",
      paragraphs: [],
      cardLede:
        "JEE doesn't fail students. Generic prep platforms do. I built the AI engine that actually adapts — to every student, every session, every gap.",
      footerTags: [],
      modal: {
        overview: "",
        details: "",
        hideTopMetrics: true,
        modalTags: [
          "EdTech",
          "JEE",
          "Adaptive learning",
          "Rule engine",
          "Personalisation",
          "Product strategy",
          "B2B / white-label",
          "PRDs",
          "Assessment design",
        ],
        blocks: [
          {
            type: "richParagraph",
            heading: "Overview",
            segments: [
              {
                text: "Over 13 lakh students appear for JEE every year. Most study hard. Most don't make it — not because they lack effort, but because they lack a system that tells them exactly where they're going wrong and what to do next. Grovita is that system. I designed the product logic, the adaptive AI rule engine, and the learning journey that makes personalised preparation actually possible — at scale.",
              },
            ],
          },
          { type: "divider" },
          {
            type: "richParagraph",
            heading: "The problem",
            segments: [
              {
                text: "The JEE preparation market is flooded with content. Byju's had 150 million registered users and still collapsed. The problem was never content — it was that platforms treated every student the same. Same videos, same tests, same roadmap. But students aren't the same. A student stuck on organic chemistry needs a different plan than one struggling with calculus. ",
              },
              {
                text: "Most platforms couldn't tell the difference.",
                strong: true,
              },
            ],
          },
          { type: "divider" },
          {
            type: "dashBullets",
            heading: "What I discovered",
            items: [
              "Students don't need more content. They need a system that knows where they're stuck — before they know it themselves.",
              "Adaptive learning platforms that personalise based on real-time performance see significantly higher engagement and completion rates than static content platforms.",
              "Most EdTech platforms track what students study. Grovita needed to track how they think — and adjust accordingly.",
              "B2B institutional adoption is the fastest path to scale — schools and coaching institutes need white-label solutions they can deploy immediately.",
            ],
          },
          { type: "divider" },
          {
            type: "richParagraph",
            heading: "What I built",
            segments: [
              {
                text: "A three-tier adaptive AI rule engine — and a 6-stage personalised learning journey built on top of it:",
              },
            ],
          },
          {
            type: "dashBullets",
            heading: "Six-stage journey",
            items: [
              "01 Screening — diagnostic test to establish a baseline across subjects and topics",
              "02 Learner Profile — AI builds a map of strengths, gaps, and learning pace",
              "03 Topic Tagging — every question tagged by concept, difficulty, and past performance",
              "04 Adaptive Practice — questions served based on current knowledge state, not a fixed syllabus",
              "05 Session Recalibration — AI adjusts the plan after every session based on what just happened",
              "06 Subject Mastery — clear milestones, gamification, and a study planner that evolves with the student",
            ],
          },
          { type: "divider" },
          {
            type: "statGrid",
            heading: "Scale & reach",
            stats: [
              {
                value: "13L+",
                label: "JEE aspirants in India — the addressable market",
              },
              {
                value: "$33B",
                label: "India EdTech market projected by 2034",
              },
              {
                value: "Global",
                label:
                  "Active deal negotiation with Thailand university for China market adoption",
              },
            ],
          },
          { type: "divider" },
          {
            type: "pullQuote",
            heading: "What this taught me",
            quote:
              "Content is not the product. The system that knows what to do with content — for each student, in each session — is the product. Grovita's real innovation isn't the questions. It's the engine that decides which question comes next.",
          },
        ],
        primaryAction: { label: "View project", href: "#featured" },
        secondaryAction: { label: "View document", href: RESUME_PATH },
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
        "Architected taxonomy and IA for 1,000+ AI tools across 30+ categories; 250+ DAU and 3 enterprise onboards within the first month of launch.",
        "Owned end-to-end PRDs for tool listings, enquiry workflows, dynamic navigation, and discovery UX — spec through production.",
        "Built agentic LinkedIn and RSS-to-publish n8n workflows for autonomous distribution and platform freshness.",
      ],
      order: 1,
    },
    {
      id: "exp-grovita",
      company: "Grovita",
      role: "Product & Automation Consultant",
      start_date: "May 2025",
      end_date: "Present",
      summary:
        "Adaptive AI EdTech for JEE: rule engine, personalized journeys, and B2B institutional GTM.",
      highlights_json: "[]",
      bullets: [
        "Defined PRDs for a three-tier adaptive AI rule engine (diagnostic screening, real-time recalibration, mastery-based progression) — platform live and in active use.",
        "Designed six-stage journey and five core modules (Adaptive Question Engine, Confidence Mode, AI Analytics Dashboard, Smart Study Planner, gamification) across student, teacher, and parent surfaces.",
        "Contributed to B2B institutional GTM, including white-label positioning and active deal negotiation with a Thailand university (cross-border adoption scope).",
      ],
      order: 2,
    },
    {
      id: "exp-tractor-junction",
      company: "Tractor Junction",
      role: "Content Team Lead",
      start_date: "Jul 2022",
      end_date: "May 2024",
      summary:
        "India’s leading agri digital aggregator — 3.2M monthly visitors: SEO-led growth and content operations at scale.",
      highlights_json: "[]",
      bullets: [
        "Led and upskilled a content team of 7; drove 17% organic traffic growth and 500K+ incremental monthly visits via SEMrush and GSC-led intent strategy.",
        "Co-defined in-house CMS requirements with engineering — 40% fewer content errors, 60% faster publishing turnaround.",
        "100+ conversion-oriented PDPs across tractors, trucks, and bikes; org-wide content QA supporting 3.2M visitor operations.",
      ],
      order: 3,
    },
  ],
  skills: {
    intro: [],
    categories: [
      {
        id: "understanding",
        index: "01",
        title: "Understanding people",
        description:
          "Where everything started — reading what people search for, what they trust, and what makes them stay.",
        variant: "mint",
        items: [
          "SEO strategy",
          "Search intent mapping",
          "Content strategy",
          "User research",
          "Brand voice & positioning",
          "Keyword gap analysis",
        ],
      },
      {
        id: "growth",
        index: "02",
        title: "Building for growth",
        description:
          "Turning intent into traffic and traffic into outcomes — SEO, content, and channels that compound.",
        variant: "lavender",
        items: [
          "Organic traffic growth",
          "Conversion optimisation",
          "Lead generation",
          "Funnel analysis",
          "LinkedIn growth",
          "Social media strategy",
          "Email outreach",
        ],
      },
      {
        id: "shipping",
        index: "03",
        title: "Shipping product",
        description:
          "From prioritisation to shipped specs and UX — the craft of getting real products out the door.",
        variant: "sand",
        items: [
          "PRDs & feature specs",
          "Roadmapping",
          "Feature prioritisation",
          "0→1 product building",
          "Wireframing & Figma",
        ],
      },
      {
        id: "scaling",
        index: "04",
        title: "Scaling with systems",
        description:
          "Automation, rule engines, and AI workflows — so leverage holds up under real traffic and real ops.",
        variant: "ice",
        items: [
          "n8n workflows",
          "AI agent design",
          "Prompt engineering",
          "Content automation",
          "API Integration",
          "Rule engine design",
          "Agentic systems",
          "Workflow architecture",
        ],
      },
      {
        id: "platforms",
        index: "05",
        title: "Building platforms",
        description:
          "Marketplace and aggregator mechanics — discovery, taxonomy, and listings that work at scale.",
        variant: "amber",
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
        isToolsBand: true,
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
        "Architected taxonomy and IA for 1,000+ tools across 30+ categories; paired SEMrush-informed intent work with navigation and listing patterns that matched how people search and evaluate.",
      impact: "250+ DAU and 3 enterprise clients in month one; scalable shelves for a fast-growing inventory.",
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
      title: "Tractor Junction — From Content to Product Thinking",
      description:
        "Led content strategy for India's leading tractor aggregator — 3.2M monthly visitors, 500K+ organic visits added, and a CMS built from scratch.",
      category: "Growth & SEO",
      badgeVariant: "mint",
      coverImage: "/featured/tractor-junction-home.png",
      coverImageAlt:
        "Tractor Junction homepage: search, loan hero, navigation — India's tractor marketplace",
      modal: {
        overview: "",
        details: "",
        hideTopMetrics: true,
        modalTags: [
          "SEO",
          "Marketplace",
          "Content strategy",
          "Team lead",
          "CMS",
          "Agri-tech",
          "SEM / GSC",
          "PDP optimisation",
          "Quality assurance",
        ],
        blocks: [
          {
            type: "richParagraph",
            heading: "Overview",
            segments: [
              {
                text: "India is the world's largest tractor market. Millions of farmers make significant purchase decisions every year — and increasingly, they research online before they buy. Tractor Junction is where that research happens. With 3.2 million monthly visitors, it's India's leading digital aggregator for tractors, farm equipment, financing, insurance, and servicing. I led the content team that made it one of the most trusted platforms in the agri-tech space.",
              },
            ],
          },
          { type: "divider" },
          {
            type: "richParagraph",
            heading: "The problem",
            segments: [
              {
                text: "At the scale of 3.2 million monthly visitors, content is infrastructure. One inconsistent page costs trust. One poorly optimised article costs thousands of visits. The team was producing at volume but without a system — no SEO framework, no quality baseline, no way to measure what was actually working. ",
              },
              {
                text: "Growth was happening despite the process, not because of it.",
                strong: true,
              },
            ],
          },
          { type: "divider" },
          {
            type: "dashBullets",
            heading: "What I discovered",
            items: [
              "Most high-traffic pages were winning on volume, not intent. Reorienting content around what farmers actually searched for — financing options, brand comparisons, pricing — unlocked a new tier of organic growth.",
              "Publishing turnaround was slow because the CMS was generic. A custom CMS built for the team's workflow would cut errors and speed up output simultaneously.",
              "Quality assurance was entirely manual and inconsistent. A framework would remove subjectivity and raise the floor across 100+ product pages.",
              "The team had capability but no structure to scale it. Upskilling and clear ownership changed output faster than hiring would have.",
            ],
          },
          { type: "divider" },
          {
            type: "richParagraph",
            heading: "What I did",
            segments: [
              {
                text: "Led and upskilled a team of 7 with an SEO-first content strategy built on keyword gap analysis and search intent mapping. Collaborated with engineering to define requirements for a custom CMS — reducing content errors by 40% and cutting publishing turnaround by 60%. Developed and optimised 100+ conversion-oriented product descriptions across tractors, trucks, and bikes. Built a content quality assurance framework that brought consistency to every page at 3.2M visitor scale.",
              },
            ],
          },
          { type: "divider" },
          {
            type: "statGrid",
            heading: "Impact",
            stats: [
              {
                value: "500K+",
                label: "Incremental monthly organic visits added",
              },
              {
                value: "40%",
                label: "Reduction in content errors after CMS build",
              },
              {
                value: "60%",
                label: "Faster publishing turnaround time",
              },
            ],
          },
          { type: "divider" },
          {
            type: "pullQuote",
            heading: "What this taught me",
            quote:
              "At scale, content strategy and product strategy are the same thing. Every page is a product decision. The CMS is a product. The QA framework is a product. That's when I understood — I'd been doing product all along.",
          },
        ],
        secondaryAction: { label: "View resume", href: RESUME_PATH },
      },
    },
  ],
  consultingDecks: [
    {
      id: "deck-ai-consulting-automation",
      industryTag: "AI consulting",
      coverInitials: "AC",
      headline: "AI Consulting & Automation",
      subtitle:
        "Operating models, tooling, and delivery patterns for AI in the organisation.",
      thumbnailSrc:
        "https://cdn.presentations.ai/thumbnails/15688690/c3e6dd2e-c1d1-4ae5-a2d4-e434edc80392-AI_1280x720.png?v=1774994442717",
      thumbnailAlt: "SimplySocial — AI Consulting — first slide preview (Presentations.ai)",
      presentationUrl: "https://app.presentations.ai/view/4DTtmAEHd6",
    },
    {
      id: "deck-digital-transformation-growth",
      industryTag: "Digital transformation",
      coverInitials: "DT",
      headline: "Strategic Digital Transformation & Growth Strategy",
      subtitle: "Enterprise roadmaps: change, platforms, and compound growth.",
      thumbnailSrc:
        "https://cdn.presentations.ai/thumbnails/20984252/f39e250d-d849-48e5-9e54-326028417879_1280x720.png?v=1774994299116",
      thumbnailAlt:
        "Phase-Wise Transformation Plan for Fateh Rural — first slide preview (Presentations.ai)",
      presentationUrl: "https://app.presentations.ai/view/2Ura6ydfMX",
    },
    {
      id: "deck-finance-insurance",
      industryTag: "Finance & insurance",
      coverInitials: "FI",
      headline: "AI in Finance & Insurance",
      subtitle: "Risk, lending, and customer experience reimagined with AI.",
      thumbnailSrc:
        "https://cdn.presentations.ai/thumbnails/15801762/2cf46156-5392-41bb-8cee-6c39d57de36b_1280x720.png?v=1774994570223",
      thumbnailAlt: "2. AI in Finance & Insurance — first slide preview (Presentations.ai)",
      presentationUrl: "https://app.presentations.ai/view/5aPhRo",
    },
  ],
  writingComingSoon: false,
  writing: [
    {
      id: "wg-linkedin",
      heading: "LinkedIn",
      cards: [
        {
          id: "w-lsp-mutual-funds",
          title: "LSPs sitting on a goldmine: unlocking mutual funds distribution",
          tag: "Fintech",
          tagVariant: "mint",
          description:
            "India's lending platforms have already earned trust at scale—while mutual fund penetration still has room to run. The gap is distribution, not product.",
          angle:
            "Voice AI, Account Aggregator, embedded finance, and WhatsApp investing: why the next wealth platform may compound on lending rails.",
          href: "https://www.linkedin.com/posts/jayita-sharma_fintech-lendingserviceproviders-mutualfunds-share-7442237730354348032-H0lF",
        },
        {
          id: "w-sora-shutdown",
          title: "OpenAI kills Sora app after 'melting' GPUs",
          tag: "AI",
          tagVariant: "ice",
          description:
            "From invite waitlists to a quiet shutdown—GPU cost, revenue vs burn, and what happens when the story outruns the business case.",
          angle:
            "The tech didn’t fail on vibes alone—the question is whether this is one product’s math or the start of a broader AI hype correction.",
          href: "https://www.linkedin.com/posts/jayita-sharma_openai-sora-ainews-share-7442613822831570944-aLYH",
        },
        {
          id: "w-openclaw-agents",
          title: "OpenClaw: AI agent framework breaks records",
          tag: "Agents",
          tagVariant: "lavender",
          description:
            "Organic GitHub momentum for an agent layer that runs locally—less about the model, more about orchestration between AI and real work.",
          angle:
            "If the moat isn’t the foundation model, it’s the interface between intelligence and action—the shift from AI that talks to AI that acts.",
          href: "https://www.linkedin.com/posts/jayita-sharma_aiagents-agenticai-openclaw-share-7442983977067491328-iPXy",
        },
        {
          id: "w-india-credit-ai",
          title: "India's credit system overhaul: AI-driven loans revolution",
          tag: "Fintech",
          tagVariant: "mint",
          description:
            "Retail NPAs, RBI guardrails, and why bureau-only scores miss millions—UPI, GST, and real-time behaviour are becoming the underwriting signal.",
          angle:
            "From “prove you deserve credit” to “let your behaviour speak”—the lenders who ship that win the next cycle.",
          href: "https://www.linkedin.com/posts/jayita-sharma_ai-fintech-artificialintelligence-share-7441885355580207105-nCEV",
        },
      ],
    },
  ],
};

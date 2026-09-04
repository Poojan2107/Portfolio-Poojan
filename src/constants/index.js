import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin, FaGithub, FaBrain, FaLock, FaLink, FaServer, FaTerminal, FaMobileAlt, FaBolt, FaLayerGroup, FaChartLine, FaCloud, FaAws } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiOpenai, SiTypescript, SiNextdotjs, SiVercel, SiGoogle, SiFirebase, SiPostgresql, SiSupabase, SiPrisma, SiSocketdotio, SiPython, SiCplusplus, SiPwa, SiNginx, SiFramer } from 'react-icons/si';

export const PERSONAL_DETAILS = {
  name: "Poojan P. Shrivastav",
  role: "Full Stack Developer • AI Engineering Student",
  roles: [
    "Developer Intern @ KaryaUp",
    "Full Stack Developer @ 13 UTOPIA",
    "Co-Founder @ Oneverce",
    "B.Tech AI Student @ GIT"
  ],
  bio: "B.Tech AI student shipping production SaaS, AI products, and client platforms — currently building at KaryaUp, 13 UTOPIA, and Oneverce.",
  email: "poojanshrivastav21@gmail.com",
  phone: "+91 9023362134",
  location: "Ahmedabad, Gujarat",
  social: {
    linkedin: "https://www.linkedin.com/in/poojanshrivastav21/",
    github: "https://github.com/Poojan2107",
  }
};

export const SOCIAL_PROOF_BADGES = [
  { text: "Developer Intern @ KaryaUp — 170 commits (Jul–Sep 2026)", category: "status" },
  { text: "Full Stack @ 13 UTOPIA — FormX & Navkar shipped", category: "status" },
  { text: "Co-Founder @ Oneverce — Travebie (travebie.com)", category: "role" },
  { text: "Build With AI Ahmedabad — Runner-Up (OpenBridge)", category: "award" },
  { text: "B.Tech AI — Gandhinagar Institute of Technology (2024–2028)", category: "academic" }
];

export const SKILL_CATEGORIES = [
  {
    title: "Programming Languages",
    skills: [
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', description: "Static typing, Interfaces, Generics" },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', description: "ES6+, Async/Await, Web APIs, DOM" },
      { name: 'Python', icon: SiPython, color: '#3776AB', description: "AI/ML Scripts, Scikit-Learn, Subprocesses" },
      { name: 'C++', icon: SiCplusplus, color: '#00599C', description: "Algorithms, Data Structures, OOP" },
      { name: 'C', icon: FaTerminal, color: '#A8B9CC', description: "Systems programming, Memory management" }
    ]
  },
  {
    title: "Frontend & Creative Tech",
    skills: [
      { name: 'React 19', icon: FaReact, color: '#61DAFB', description: "Hooks, Virtual DOM, Context API, Performance" },
      { name: 'Next.js 16', icon: SiNextdotjs, color: '#ffffff', description: "App Router, SSR, Server Components, Turbopack" },
      { name: 'Tailwind CSS 4', icon: SiTailwindcss, color: '#38B2AC', description: "Utility-first CSS, Custom design systems" },
      { name: 'Framer Motion 12', icon: SiFramer, color: '#0055FF', description: "High-fidelity micro-interactions & layout animations" },
      { name: 'Vite 7', icon: FaBolt, color: '#646CFF', description: "Lightning-fast bundler & dev server" },
      { name: 'Radix UI / Headless', icon: FaLayerGroup, color: '#ffffff', description: "Accessible headless UI components" }
    ]
  },
  {
    title: "Backend & Systems Architecture",
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', description: "Event loop, Async I/O, Subprocess management" },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff', description: "REST APIs, Middleware, HTTP Routing" },
      { name: 'Analytics Engine & HQ', icon: FaChartLine, color: '#00F0FF', description: "First-party IP geo analytics, bot filtering, demography" },
      { name: 'AWS S3 & CloudFront CDN', icon: FaCloud, color: '#FF9900', description: "Cloud media architecture & asset CDN migration" },
      { name: 'Nginx & Proxy Flushing', icon: SiNginx, color: '#009639', description: "Reverse proxies, CDN 1KB whitespace token streaming" }
    ]
  },
  {
    title: "Databases & Storage",
    skills: [
      { name: 'PostgreSQL & Neon', icon: SiPostgresql, color: '#336791', description: "Relational schemas, SQL queries, Serverless Postgres" },
      { name: 'MongoDB & Atlas', icon: SiMongodb, color: '#47A248', description: "NoSQL document models, Atlas sync, projected card queries" },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', description: "PostgREST APIs, Auth, Realtime DB, Storage" },
      { name: 'Prisma ORM', icon: SiPrisma, color: '#2D3748', description: "Type-safe DB client, Migrations, Schema design" }
    ]
  },
  {
    title: "AI Engineering & LLM Systems",
    skills: [
      { name: 'Gemini AI SDK', icon: SiGoogle, color: '#ffffff', description: "Structured JSON schemas, Intent detection, Model fallbacks" },
      { name: 'KAI AI Agent Platform', icon: FaBrain, color: '#FFD700', description: "Automated business voice calling, particle posters & calculators" },
      { name: 'Intent Detection Engine', icon: FaBrain, color: '#FF9900', description: "19-intent classification, Composable prompt modules" },
      { name: 'OpenAI API', icon: SiOpenai, color: '#ffffff', description: "GPT models API integrations, System prompts" },
      { name: 'RAG & Scikit-Learn', icon: FaBrain, color: '#61DAFB', description: "Retrieval-Augmented Generation, Random Forest ML" }
    ]
  },
  {
    title: "Infrastructure, QA & Optimization",
    skills: [
      { name: 'IP-Based Geo Pricing', icon: FaBolt, color: '#00FF66', description: "Automatic INR (India) vs USD (Global $20) pricing engine" },
      { name: '80% Payload Optimization', icon: FaBolt, color: '#FF4500', description: "Payload drop (36MB → 6.89MB), WebP downscaling, TBT reduction" },
      { name: 'Playwright E2E', icon: FaTerminal, color: '#2EAD33', description: "Automated E2E testing pipelines & wizard validation" },
      { name: 'PWA & Service Workers', icon: SiPwa, color: '#5A0FC8', description: "Offline caching, Manifests, Maskable touch icons" },
      { name: 'SPA Crawl SEO Engine', icon: SiVercel, color: '#ffffff', description: "Prerendered pricing/demo routes, dynamic sitemaps, canonical fixes" }
    ]
  }
];

export const PROJECTS = [
  {
    title: 'KaryaUp AI CRM',
    subtitle: 'Production SaaS — 170 commits on karyaUp_Website (Jul 7 → Sep 2, 2026)',
    status: 'In Production · Developer Intern',
    problem: 'Live business SaaS needed production-grade KAI chatbot streaming, first-party analytics, IP geo pricing, blog/media CDN migration, SPA SEO, mobile stability, and a sustained PageSpeed/TBT optimization campaign without gutting visuals.',
    solution: 'Over ~8 weeks shipped 170 commits across KAI streaming (1KB proxy flush), Analytics HQ + bot filtering, INR/USD geo pricing, MongoDB→S3/CloudFront, lean blog projections, SPA crawl SEO/prerender, KAI Agent experience, and Render→Vercel migration.',
    tags: ['React 19', 'Node.js', 'MongoDB Atlas', 'AWS S3/CloudFront', 'Analytics HQ', 'KAI Agent', 'IP Geo Pricing', 'Vercel'],
    github: 'https://github.com/KaryaUp/karyaUp_Website.git',
    live: 'https://karyaup.com',
    image: '/assets/karyaup_crm.png',
    metrics: {
      "Commits": "170 (Jul 7 – Sep 2, 2026)",
      "Analytics": "First-Party Analytics HQ",
      "Media CDN": "MongoDB → AWS S3 + CloudFront",
      "Geo Pricing": "Auto INR / USD ($20 Pro)",
      "Optimization": "PageSpeed · TBT · ~80% payload cut",
      "Role": "Developer Intern"
    },
    highlights: [
      "170 production commits on KaryaUp/karyaUp_Website from Jul 7–Sep 2, 2026 (internship trail)",
      "Hardened KAI chatbot streaming: 1KB whitespace proxy flush, abort/timeouts, voice engines, suggestion chips",
      "Built First-Party Analytics HQ with real client-IP geo, demographics, and bot/junk filtering",
      "Shipped IP-based geo pricing (INR in India, USD internationally; Pro $20)",
      "Migrated blog images MongoDB → AWS S3/CloudFront; fixed admin hangs with projected lean card queries",
      "PageSpeed/TBT sprint: deferred i18n hydrate, route CSS split, critical-path cuts while restoring full visuals",
      "SPA crawl SEO: unique canonicals, prerendered pricing/demo, sitemap dates, Helmet title dedupe",
      "Shipped KAI Agent experience (particles/silk hero, Calling page) and migrated hosting Render → Vercel SPA"
    ],
    caseStudy: {
      summary: "Developer Intern on KaryaUp — 170 commits in eight weeks shipping production marketing SaaS, AI streaming, analytics, and performance work for a live Startup India / GUSEC-connected product.",
      problem: "Chat streams buffered behind proxies, blog admin hung on full-HTML payloads, media lived in MongoDB, pricing ignored visitor geography, SPA SEO collapsed to homepage canonicals, and mobile/GSAP pins caused white voids and crashes.",
      solution: "Iterated in production: streaming flush + chatbot stability, Analytics HQ, geo pricing, S3/CloudFront, lean DB projections, SEO prerender, homepage/mobile hardening, KAI Agent UI, and Vercel deep-link fallbacks.",
      research: "Debugged network waterfalls, Cloudflare/Nginx buffering, React 19 chunk order, GSAP pin blank screens, PageSpeed TBT, and real client-IP headers for geo accuracy.",
      architecture: "React 19 + Vite marketing/app shell, Express/MongoDB Atlas, AWS S3/CloudFront media, first-party analytics pipeline, KAI streaming with 1KB padding, Vercel SPA rewrites after Render migration.",
      challenges: "Balancing PageSpeed cuts against visual fidelity; Team Solutions GSAP pin white voids required multiple production rollbacks and sticky/scrub redesigns; blog seed resurfacing after deploys.",
      roadmap: [
        "Scale KAI voice calling workflow triggers",
        "Expand Analytics HQ demographic dashboards",
        "Continue affiliate program and pricing packaging"
      ],
      lessonsLearned: [
        "1KB whitespace padding forces reverse proxies to flush AI tokens immediately.",
        "Projecting lean card fields beats shipping full HTML blobs to admin lists.",
        "Performance work that guts visuals gets reverted — measure TBT without deleting the product."
      ],
      technicalHighlights: [
        "170-commit internship trail (Jul–Sep 2026)",
        "KAI streaming + 1KB proxy flush",
        "First-Party Analytics HQ + bot filter",
        "IP geo pricing (INR / USD)",
        "S3/CloudFront media CDN",
        "Lean MongoDB list projections",
        "PageSpeed / TBT optimization sprint",
        "SPA SEO prerender + Vercel migration"
      ],
      impact: "Stabilized live SaaS UX on mobile and desktop, unblocked blog admin, enabled accurate first-party analytics and regional pricing, and kept shipping KAI Agent features through a hosting migration."
    }
  },
  {
    title: 'Travebie',
    subtitle: 'AI Travel Booking & Itinerary Platform (travebie.com)',
    status: 'Delivered (Oneverce Solutions)',
    problem: 'A tourism business with 15+ years of experience needed a modern platform to replace manual spreadsheet itinerary creation and fragmented package distribution.',
    solution: 'Designed and shipped a production travel platform with a 19-pattern AI intent detector, composable prompt modules, 18 interactive chat cards, Playwright E2E tests, PWA support, and a React Native admin mobile app.',
    tags: ['Next.js App Router', 'TypeScript', 'Gemini AI SDK', 'PostgreSQL', 'Supabase', 'Prisma ORM', 'Playwright E2E', 'PWA'],
    github: 'https://github.com/Poojan2107/Tripzy_Oneverce.git',
    live: 'https://www.travebie.com/',
    image: '/assets/traveling_tent.png',
    metrics: {
      "Domain": "travebie.com",
      "AI Engine": "19 Intent Patterns + Prompt Modules",
      "QA": "14 E2E Playwright Tests",
      "Client": "Oneverce Solutions"
    },
    highlights: [
      "Built Phase 1 AI Intelligence Upgrade: 19 intent patterns (budget, traveler, duration) + composable prompt modules",
      "Engineered 18 custom chat card components (HotelGrid, ExperiencesCard, TimelineCard, BudgetCard, FoodCard, etc.)",
      "Implemented Gemini AI streaming with race-condition safeguards, model fallbacks, and offline notes support",
      "Constructed Playwright E2E test suite covering search modals, planner wizards, budget sliders, and API integrations",
      "Configured PWA offline caching with 192x192/512x512 maskable icons and custom service worker strategies",
      "Implemented full Schema.org JSON-LD structured data (`WebApplication`, `BreadcrumbList`, `ItemList`) and dynamic `sitemap.xml`"
    ],
    caseStudy: {
      summary: "Co-founded and delivered for Oneverce Solutions: a complete travel booking and itinerary platform (`travebie.com`) for a 15+ year tourism client.",
      problem: "Manual spreadsheet booking workflows caused communication overhead, delayed package distribution, and limited custom itinerary scaling.",
      solution: "Shipped a unified solution: a Next.js web application for travelers, a React Native mobile companion, and a Supabase-backed admin dashboard.",
      research: "Analyzed traveler booking journeys and mapped out 19 distinct intent patterns for personalized itinerary generation.",
      architecture: "Next.js App Router, Supabase cloud database with Prisma ORM, Gemini SDK integration, and Playwright E2E testing pipeline.",
      challenges: "Ensuring Gemini AI outputs reliably render structured UI cards without crashing on missing data fields.",
      roadmap: [
        "Add multi-currency payment gateway integrations",
        "Expand real-time push notifications on React Native admin app",
        "Introduce automated PDF ticket and invoice generation"
      ],
      lessonsLearned: [
        "Parsing structured AI responses into dedicated React card components improves user comprehension.",
        "Automated Playwright E2E tests catch edge-case UI regressions early in development.",
        "PWA service worker caching ensures offline accessibility for travelers on the move."
      ],
      technicalHighlights: [
        "19-Intent AI Detector & Prompt Modules",
        "18 Interactive Chat Card Components",
        "Playwright E2E Automated Test Suite",
        "Full PWA with Service Worker Caching",
        "Schema.org JSON-LD & Dynamic Sitemap",
        "React Native Administrator Mobile App"
      ],
      impact: "Replaced spreadsheet tracking with a live platform at `travebie.com`, enabling instant AI itinerary generation and streamlined booking management."
    }
  },
  {
    title: 'FormX Consultants',
    subtitle: 'Enterprise Architectural Consulting Platform',
    status: 'Production (13 UTOPIA)',
    problem: 'FormX Consultants needed a premium digital web presence reflecting their architectural consulting, multi-sector expertise, and engineering portfolio.',
    solution: 'Built a 40+ page enterprise web platform with Next.js 16, React 19, TypeScript, and Tailwind CSS 4, utilizing a custom brand design system with Chakra Petch typography, logo-cut geometric shapes, and branded mega menu portals.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion 12', 'Lucide React'],
    github: 'https://github.com/Poojan2107/FormX.git',
    live: 'https://formxconsultants.com/',
    image: '/assets/formx_consultants.png',
    metrics: {
      "Pages": "40+ Production Routes",
      "Sectors": "12 Sector Matrices",
      "Framework": "Next.js 16 & React 19",
      "Studio": "13 UTOPIA Pvt. Ltd."
    },
    highlights: [
      "Engineered 40+ production routes across 12 sector matrices, 10 service lines, and 9 project case studies",
      "Created signature brand design system (Chakra Petch display font, Source Sans 3 body, white/black/#DE3024 palette)",
      "Implemented logo-cut geometric shapes, dual-tone tickers, and high-fidelity red motion hover accents",
      "Built branded mega menu navigation portals and responsive multi-page consulting architecture",
      "Applied S3M content psychology framework (Proof → People → Process → Peers) for maximum client trust"
    ],
    caseStudy: {
      summary: "Full stack agency development at 13 UTOPIA Pvt. Ltd. for FormX Consultants, an architectural consulting firm.",
      problem: "The client needed a digital platform capable of showcasing complex architectural project galleries, multi-sector capabilities, and corporate credibility.",
      solution: "Engineered a Next.js 16 platform with a custom design system, structured sector matrices, and interactive project filters.",
      research: "Studied architectural firm marketing paradigms and structured content around proof-led consulting workflows.",
      architecture: "Next.js 16 App Router, TypeScript, Tailwind CSS 4, and Framer Motion 12 for micro-UX interactions.",
      challenges: "Designing scalable mega menu portals that maintain smooth layout performance across desktop and mobile screens.",
      roadmap: [
        "Wire production CRM contact form API endpoint",
        "Integrate client document brochure download analytics",
        "Add interactive 3D architectural model viewer"
      ],
      lessonsLearned: [
        "Custom font pairings and logo-cut geometric accents create an unmistakable brand identity.",
        "Structuring content around proof, process, and people increases user engagement time."
      ],
      technicalHighlights: [
        "Next.js 16 & React 19 App Architecture",
        "Chakra Petch Custom Typography System",
        "Branded Mega Menu Navigation Portals",
        "Logo-Cut Geometric UI Elements",
        "S3M Proof Content Psychology Framework"
      ],
      impact: "Delivered a corporate digital platform elevating FormX's market positioning across industrial, residential, and commercial architecture sectors."
    }
  },
  {
    title: 'Navkar Tubes & Tools',
    subtitle: 'Industrial Steel Pipe Authority Platform',
    status: 'Production (13 UTOPIA)',
    problem: 'Authorized Jindal steel pipes dealer (serving procurement teams since 1995) needed a digital web presence to display technical specs, stock availability, and Jindal authorization credibility.',
    solution: 'Designed and engineered an industrial web platform featuring an interactive pipe weight calculator, technical inspection dashboard, Jindal MTC documentation search, and an Express.js backend on Vercel.',
    tags: ['React 19', 'Vite 7', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion 12', 'Radix UI', 'Express.js', 'Zod'],
    github: 'https://github.com/Poojan2107/Navkar.git',
    live: 'https://navkar-tubes-and-pipes.vercel.app/',
    image: '/assets/navkar_tubes.png',
    metrics: {
      "Legacy": "Authorized Jindal Dealer Since 1995",
      "Palette": "Deep Teal (#0A1628) & Brand Teal (#2D7A82)",
      "Tools": "Interactive Pipe Weight Calculator",
      "Studio": "13 UTOPIA Pvt. Ltd."
    },
    highlights: [
      "Crafted 'Industrial Authority' design aesthetic anchored by Deep Teal (#0A1628) and Brand Teal (#2D7A82)",
      "Built interactive pipe weight calculator tool for quick procurement estimation",
      "Designed technical specification inspection dashboard with bracketed section typography (`[ TECHNICAL INSPECTION ]`)",
      "Configured Express.js serverless API routes on Vercel with JSONL inquiry logging and Zod schema validation",
      "Implemented animated years-of-experience counters and Jindal MTC verification proof sections"
    ],
    caseStudy: {
      summary: "Agency engineering at 13 UTOPIA Pvt. Ltd. for Navkar Tubes & Tools, an authorized Jindal pipes dealer in Ahmedabad since 1995.",
      problem: "Industrial procurement buyers required fast access to pipe dimensions, weight charts, Jindal authorization proof, and instant inquiry forms.",
      solution: "Built a high-density industrial web platform with interactive calculators, inspection dashboards, and procurement-focused copy.",
      research: "Audited industrial steel distributor workflows to determine key buying criteria (OD ranges, Jindal authorization, MTC documentation).",
      architecture: "React 19 frontend built with Vite 7 and Radix UI primitives, backed by an Express.js serverless API on Vercel.",
      challenges: "Ensuring complex specification tables remain readable and responsive on mobile devices.",
      roadmap: [
        "Add live stock availability ticker connected to ERP inventory",
        "Implement automated WhatsApp quote request integration",
        "Expand technical pipe specification PDF generator"
      ],
      lessonsLearned: [
        "Procurement buyers value technical accuracy, weight calculators, and MTC proof over generic marketing copy.",
        "Deep teal and navy color palettes instill trust for legacy industrial businesses."
      ],
      technicalHighlights: [
        "Interactive Pipe Weight Calculator",
        "Technical Inspection Specification Dashboard",
        "Bracketed Typography System (`[ PROVEN ADVANTAGE ]`)",
        "Express.js Serverless API with Zod & JSONL Logging",
        "Vercel Deployment & SPA Routing Engine"
      ],
      impact: "Modernized digital procurement for a 30-year industrial business, providing clients with instant pipe calculation and inquiry workflows."
    }
  },
  {
    title: 'OpenBridge',
    subtitle: 'AI-Powered Open Source Onboarding Platform',
    status: 'Active Development (Runner-Up Award)',
    problem: 'Open Source is intimidating for newcomers. Developers struggle to discover appropriate repositories, comprehend complex GitHub issues, and navigate GSoC/LFX fellowship pathways.',
    solution: 'An AI-powered onboarding platform that recommends repositories based on skill profiles, translates difficult issues via Gemini AI SDK, synthesizes 4-week roadmaps, and aggregates fellowship opportunities.',
    tags: ['Next.js', 'TypeScript', 'Gemini AI SDK', 'GitHub GraphQL APIs', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/Poojan2107/OpenBridge',
    live: 'https://openbridge-in.vercel.app/',
    image: '/assets/openbridge.png',
    metrics: {
      "Award": "Build With AI Ahmedabad Runner-Up",
      "Model": "Gemini AI SDK",
      "Auth": "GitHub OAuth + AES-256 Encryption",
      "Focus": "Open Source Onboarding"
    },
    highlights: [
      "Secured Runner-Up position at Build With AI Ahmedabad 2026 (organized via Google for Developers ecosystem)",
      "Engineered repository recommendation and issue translation systems using Google Gemini AI SDK",
      "Synthesized personalized 4-week contribution roadmaps from developer skill profile inputs",
      "Integrated GSoC, LFX, and Outreachy fellowship discovery search engines",
      "Secured GitHub OAuth tokens with AES-256-CBC encryption"
    ],
    caseStudy: {
      summary: "An AI-powered onboarding companion for open-source newcomers. Profiles developer skills, matches to real GitHub repos, and generates custom 4-week roadmaps using Gemini AI.",
      problem: "Open Source is difficult for newcomers. Developers struggle with finding repositories, understanding issues, and navigating contribution pathways.",
      solution: "An AI-powered onboarding platform that recommends repositories, translates issues, generates roadmaps, discovers fellowships, and tracks progress.",
      research: "Conducted interviews with peer students and observed that many wanted to contribute to open source but felt overwhelmed by the sheer volume of code and complex setup instructions.",
      architecture: "Next.js frontend with TailwindCSS, connecting to GitHub GraphQL APIs and Google Gemini SDK for intelligent repo parsing and roadmap synthesis.",
      challenges: "Designing structured JSON outputs from Gemini AI to parse reliably into step-by-step roadmaps, and securing GitHub OAuth credentials with AES-256-CBC.",
      roadmap: [
        "Ship OpenBridge publicly",
        "Acquire initial beta users and gather feedback",
        "Introduce support for LFX and Outreachy programs",
        "Release fully as an open-source tool on GitHub"
      ],
      lessonsLearned: [
        "Factual and structured prompt engineering with Gemini yields reliable roadmap schemas.",
        "Building tooltips and descriptive interface copy significantly reduces friction for newcomers.",
        "Integrating open-source program search (GSoC/LFX) simplifies program navigation."
      ],
      technicalHighlights: [
        "Gemini structured schema generation",
        "GitHub OAuth integration",
        "AES-256 credential encryption",
        "Personalized onboarding pathways",
        "4-week contribution roadmaps"
      ],
      impact: "Reduces the barrier to entry for new contributors by transforming complex open-source onboarding workflows into structured contribution pathways."
    }
  },
  {
    title: 'NeuralCredit',
    subtitle: 'Explainable AI FinTech Platform',
    status: 'Completed',
    problem: 'Traditional financial credit scoring models operate as black boxes, providing predictions without giving underwriters or applicants interpretability.',
    solution: 'Built an explainable AI fintech platform with credit risk prediction, financial dashboards, and feature explainability radar charts.',
    tags: ['React', 'Python', 'Machine Learning', 'Scikit-Learn', 'SQLite', 'Recharts'],
    github: 'https://github.com/Poojan2107/NeuralCredit_',
    live: 'https://neuralcredit.onrender.com/',
    image: '/assets/neural_credit.png',
    metrics: {
      "Status": "Completed",
      "Model": "Scikit-Learn Random Forest",
      "Interpretability": "XAI Radar Dashboard"
    },
    highlights: [
      "Implemented a Scikit-Learn Random Forest model to predict credit risk from financial parameters",
      "Designed feature explainability dashboards displaying feature importances via Recharts radar charts",
      "Secured inter-process data flows between Python machine learning daemon and Express Node.js API backend"
    ],
    caseStudy: {
      summary: "A fintech dashboard demonstrating explainable credit scoring model parameters to underwriting operators.",
      problem: "Traditional credit scoring models operate as black boxes, providing predictions without giving underwriters any interpretability.",
      solution: "Built NeuralCredit, incorporating feature explainability to show exactly which parameters (income, history, etc.) affected the credit score.",
      research: "Audited standard risk compliance criteria and designed feature visualizations that highlight feature importance factors.",
      architecture: "Express API server coordinating REST requests, spawning Python sub-daemons running Scikit-Learn Random Forest estimators.",
      techStack: ['React', 'Python', 'Machine Learning', 'SQLite', 'Recharts'],
      challenges: "Bridging data flows securely and asynchronously between React, Express API layers, and a Python Machine Learning daemon without blockages.",
      solution: "Established a JSON-RPC broker architecture using standard I/O pipes to run Python inference asynchronously, ensuring Express handles API requests without locking the main thread.",
      roadmap: [
        "Integrate SHAP value calculations for individual predictions",
        "Add deep-learning classification options",
        "Secure pipeline parameters validation"
      ],
      lessonsLearned: [
        "Node subprocess management requires recycling daemons to prevent memory leaks.",
        "Visualizing feature contributions via Radar charts helps underwriters make decisions faster."
      ]
    }
  }
];

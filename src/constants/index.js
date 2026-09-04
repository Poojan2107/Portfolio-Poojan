import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin, FaGithub, FaBrain, FaLock, FaLink, FaServer, FaTerminal, FaMobileAlt, FaBolt, FaLayerGroup, FaChartLine, FaCloud, FaAws } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiOpenai, SiTypescript, SiNextdotjs, SiVercel, SiGoogle, SiFirebase, SiPostgresql, SiSupabase, SiPrisma, SiSocketdotio, SiPython, SiCplusplus, SiPwa, SiNginx, SiFramer } from 'react-icons/si';

export const PERSONAL_DETAILS = {
  name: "Poojan P. Shrivastav",
  role: "Full Stack Developer • AI Engineering Student",
  roles: [
    "Developer Intern @ KaryaUp (SaaS)",
    "Developer Intern @ 13 UTOPIA (Agency)",
    "Oneverce — college freelancing side hustle",
    "B.Tech AI Student @ GIT"
  ],
  bio: "B.Tech AI student on a dual internship: engineering KaryaUp (company SaaS) and shipping client platforms for 13 UTOPIA (agency) — plus a college freelancing side hustle with Oneverce / Travebie.",
  email: "poojanshrivastav21@gmail.com",
  phone: "+91 9023362134",
  location: "Ahmedabad, Gujarat",
  social: {
    linkedin: "https://www.linkedin.com/in/poojanshrivastav21/",
    github: "https://github.com/Poojan2107",
  }
};

export const SOCIAL_PROOF_BADGES = [
  { text: "Dual Intern — KaryaUp SaaS + 13 UTOPIA agency clients", category: "status" },
  { text: "KaryaUp — primary web contributor (~96% post-join)", category: "status" },
  { text: "13 UTOPIA — FormX, AIA & Navkar built from scratch", category: "status" },
  { text: "Oneverce side hustle — Travebie (travebie.com)", category: "role" },
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
    subtitle: 'Company SaaS track — primary contributor after joining Jul 2026 MVP (~96% post-join)',
    status: 'In Production · Dual Intern (KaryaUp SaaS)',
    problem: 'Joined an existing marketing/SaaS MVP (built Feb–Jul 2026 by prior contributors) that was live but uneven: open mobile/SEO/deploy/blog reliability issues, buffered AI streams, screenshot-based product marketing, and no first-party analytics or object-storage media pipeline.',
    solution: 'Became the primary engineer on karyaUp_Website after Jul 7, 2026 (~96% of commits in that window). Shipped net-new systems (Analytics HQ, S3/CDN, Vercel migration, app-mock chrome, Calling/Affiliates) while productionizing KAI, homepage, chatbot streaming, blog, pricing, and SPA SEO.',
    tags: ['React 19', 'Node.js', 'MongoDB Atlas', 'AWS S3/CloudFront', 'Analytics HQ', 'KAI Agent', 'IP Geo Pricing', 'Vercel'],
    github: 'https://github.com/KaryaUp/karyaUp_Website.git',
    live: 'https://karyaup.com',
    image: '/assets/karyaup_crm.png',
    metrics: {
      "Ownership": "154 / 160 commits after join (~96%)",
      "Window": "Jul 7 – Sep 2, 2026",
      "Inherited": "MVP (166 commits before join)",
      "Analytics": "First-Party Analytics HQ",
      "Media CDN": "MongoDB → AWS S3 + CloudFront",
      "Role": "Developer Intern · Primary web contributor"
    },
    highlights: [
      "Joined Jul 7, 2026 on an existing MVP; became primary engineering contributor (~96% of 160 post-join commits; prior phase: 166 commits by others)",
      "Built net-new systems: Analytics HQ + bot/geo filtering, blog→S3/CloudFront pipeline, Vercel SPA migration, live app-mock chrome, Calling & Affiliates surfaces",
      "Productionized KAI: streaming 1KB proxy flush, timeouts/fallbacks, Agent silk/particle UX, compositor flicker fixes, mobile tour",
      "Hardened homepage/mobile (GSAP white-void iterations), PageSpeed/TBT without gutting visuals, SPA crawl SEO (canonicals, prerender, sitemap)",
      "Unblocked blog admin with projected lean card queries; fixed deploy persistence, publish sync, and seed resurfacing",
      "Shipped IP geo pricing (INR / USD) and commercial pricing/showcase surfaces on the live product"
    ],
    caseStudy: {
      summary: "Developer Intern who inherited a 4-month-old KaryaUp marketing MVP and became its primary website/product-surface engineer for the next ~2 months — acceleration and productionization, not greenfield creation of the whole site.",
      problem: "The pre-join site was a real product (homepage, KAI v1, blog admin, chatbot, i18n, Render) with uneven polish and open launch blockers across streaming, mobile, SEO, deploy, and blog reliability.",
      solution: "Owned the day-to-day engineering loop: diagnose production failures, ship fixes, add missing systems (analytics, CDN, Vercel), rebuild KAI Agent/marketing fidelity, and keep the live site shipping.",
      research: "Read existing Vite/React/Mongo architecture, reproduced stream buffering and React 19 chunk crashes, profiled PageSpeed/TBT, and mapped SPA crawl failures to shared homepage canonicals.",
      architecture: "React 19 + Vite product/marketing shell, Express/MongoDB Atlas, first-party analytics pipeline, S3/CloudFront media, KAI streaming with 1KB padding, Vercel SPA rewrites after Render.",
      challenges: "Balancing Lighthouse wins against visual fidelity; Team Solutions GSAP pin blank screens required multiple ship/revert cycles; blog seeds resurfacing after deploys; Hobby-plan Vercel rewrite limits.",
      roadmap: [
        "Deepen MongoDB → S3 storage architecture (verification, rollback, lifecycle, cost)",
        "Scale KAI voice calling workflow triggers",
        "Expand Analytics HQ demographic dashboards"
      ],
      lessonsLearned: [
        "Inheriting an MVP and becoming primary contributor is a stronger, more defensible story than claiming greenfield ownership.",
        "1KB whitespace padding forces reverse proxies to flush AI tokens immediately.",
        "Performance work that guts visuals gets reverted — measure TBT without deleting the product."
      ],
      technicalHighlights: [
        "Primary post-join contributor (~96%)",
        "Analytics HQ + bot/geo filtering",
        "KAI streaming + Agent rebuild",
        "S3/CloudFront media CDN",
        "Lean MongoDB list projections",
        "PageSpeed / TBT with visual restore",
        "SPA SEO prerender + Vercel migration",
        "Live product mock system (20+ shells)"
      ],
      impact: "Transformed an early MVP into a more production-hardened live SaaS surface: accurate analytics, regional pricing, reliable blog/media, stable mobile/homepage, and modern deploy path — while remaining honest that the foundation was built by the prior team."
    }
  },
  {
    title: 'FormX Consultants',
    subtitle: 'Greenfield agency client — built from scratch @ 13 UTOPIA',
    status: 'Production (13 UTOPIA Client)',
    problem: 'FormX Consultants needed a premium digital web presence reflecting their architectural consulting, multi-sector expertise, and engineering portfolio.',
    solution: 'Built the platform from scratch for 13 UTOPIA: 40+ page Next.js 16 / React 19 site with a custom brand system (Chakra Petch, logo-cut geometry, branded mega menus), production SEO, and contact API fail-safes.',
    tags: ['Next.js 16', 'React 19', 'TypeScript', 'Tailwind CSS 4', 'Framer Motion 12', 'SEO'],
    github: 'https://github.com/Poojan2107/FormX.git',
    live: 'https://formxconsultants.com/',
    image: '/assets/formx_consultants.png',
    metrics: {
      "Ownership": "Built from scratch",
      "Pages": "40+ Production Routes",
      "Sectors": "12 Sector Matrices",
      "Studio": "13 UTOPIA Agency Client"
    },
    highlights: [
      "Greenfield build for 13 UTOPIA client FormX — owned end-to-end from blank repo to production",
      "Engineered 40+ production routes across 12 sector matrices, 10 service lines, and 9 project case studies",
      "Created signature brand design system (Chakra Petch, Source Sans 3, white/black/#DE3024)",
      "Shipped production SEO (canonicals, icons, sitemap), mobile UX, and contact API fail-safes",
      "Applied S3M content psychology (Proof → People → Process → Peers)"
    ],
    caseStudy: {
      summary: "Greenfield client delivery at 13 UTOPIA for FormX Consultants — built from scratch as a dual-track intern on the agency side.",
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
        "Greenfield end-to-end ownership",
        "Next.js 16 & React 19 App Architecture",
        "Chakra Petch Custom Typography System",
        "Branded Mega Menu Navigation Portals",
        "Production SEO + API fail-safes"
      ],
      impact: "Delivered a corporate digital platform elevating FormX's market positioning across industrial, residential, and commercial architecture sectors."
    }
  },
  {
    title: 'AIA Engineering',
    subtitle: 'Greenfield industrial showcase — built from scratch @ 13 UTOPIA',
    status: 'Production (13 UTOPIA Client)',
    problem: 'AIA needed a Figma-faithful industrial engineering showcase: hero mill film, mega menu, product/service offerings, metrics, and a Present-complete homepage clients could review and ship.',
    solution: 'Built the AIA portal from scratch for 13 UTOPIA — pixel-aligned Figma sections, hero/about films, Reveal motion, MetricGauge, dual-palette client review prototypes, and production typecheck/layout hardening.',
    tags: ['Next.js', 'React', 'Figma Implementation', 'Motion', 'Video/Film', 'Responsive'],
    github: 'https://github.com/Poojan2107/Aia.git',
    live: 'https://aia-engineering.vercel.app/',
    image: '/assets/aia_engineering.jpg',
    metrics: {
      "Ownership": "Built from scratch",
      "Fidelity": "Figma → Present product",
      "Motion": "Reveal + film heroes",
      "Studio": "13 UTOPIA Agency Client"
    },
    highlights: [
      "Greenfield AIA build for 13 UTOPIA — owned homepage from prototype palettes to Present-complete ship",
      "Matched Figma lockups across hero, mega menu, 3D hotspots, mining offerings, and sustainability",
      "Wired homepage mill/about films at full viewport; fixed ghosting via correct composite assets",
      "Built MetricGauge / Reveal animation system and extended Offering types for products + services",
      "Hardened production typecheck and layout for 100% viewport width without broken parallax"
    ],
    caseStudy: {
      summary: "Greenfield industrial showcase for AIA under 13 UTOPIA — Figma-accurate implementation with film, motion, and client-review palette prototypes.",
      problem: "Client review required a Present-complete homepage that matched design plates, not a wireframe demo.",
      solution: "Extracted Figma plates, locked section layouts, integrated films/counters/hotspots, and iterated until production-ready.",
      research: "Compared Figma composites against live renders to eliminate hero/footer ghosting and parallax bugs.",
      architecture: "Next.js/React marketing shell with Reveal motion primitives, film heroes, and dual orange/blue palette prototypes for client choice.",
      challenges: "Keeping film + motion performant while matching pixel lockups; dropping unused Gallery overlays that broke typecheck.",
      roadmap: [
        "Finalize public production domain and SEO package",
        "Expand gallery/product deep-links",
        "Add CMS-backed offering updates"
      ],
      lessonsLearned: [
        "Client trust often hinges on Figma fidelity before feature breadth.",
        "Prototype dual palettes early so stakeholders can choose without rewrites."
      ],
      technicalHighlights: [
        "Greenfield Figma → Present ship",
        "Hero mill film + section films",
        "Reveal / MetricGauge motion system",
        "Dual-palette client review prototypes",
        "Production typecheck hardening"
      ],
      impact: "Gave 13 UTOPIA a shippable AIA Present product clients could evaluate as finished work, not a prototype."
    }
  },
  {
    title: 'Navkar Tubes & Tools',
    subtitle: 'Greenfield industrial B2B — built from scratch @ 13 UTOPIA',
    status: 'Production (13 UTOPIA Client)',
    problem: 'Authorized Jindal steel pipes dealer (serving procurement teams since 1995) needed a digital web presence to display technical specs, stock availability, and Jindal authorization credibility.',
    solution: 'Built from scratch for 13 UTOPIA: industrial React/Vite platform with pipe weight calculator, MTC inspection UI, Express serverless inquiry APIs, dynamic sitemap/SEO, and launch-blocker fixes to go live.',
    tags: ['React 19', 'Vite 7', 'TypeScript', 'Tailwind CSS 4', 'Express.js', 'Zod', 'SEO'],
    github: 'https://github.com/Poojan2107/Navkar.git',
    live: 'https://navkar-tubes-and-pipes.vercel.app/',
    image: '/assets/navkar_tubes.png',
    metrics: {
      "Ownership": "Built from scratch",
      "Legacy": "Jindal Dealer Since 1995",
      "Tools": "Pipe Weight Calculator",
      "Studio": "13 UTOPIA Agency Client"
    },
    highlights: [
      "Greenfield Navkar build for 13 UTOPIA — initial commit through launch blockers and live Vercel deploy",
      "Built interactive pipe weight calculator and MTC / technical inspection surfaces",
      "Configured Express serverless inquiry APIs with Zod validation and production hardening",
      "Shipped SEO/AEO, dynamic sitemap, OG image, mobile nav, and yard-updates feed for go-live",
      "Crafted Industrial Authority palette (Deep Teal #0A1628 / Brand Teal #2D7A82)"
    ],
    caseStudy: {
      summary: "Greenfield agency engineering at 13 UTOPIA for Navkar Tubes & Tools — owned from initial commit to production launch.",
      problem: "Industrial procurement buyers required fast access to pipe dimensions, weight charts, Jindal authorization proof, and instant inquiry forms.",
      solution: "Built a high-density industrial web platform with interactive calculators, inspection dashboards, and procurement-focused copy.",
      research: "Audited industrial steel distributor workflows to determine key buying criteria (OD ranges, Jindal authorization, MTC documentation).",
      architecture: "React 19 frontend built with Vite 7 and Radix UI primitives, backed by an Express.js serverless API on Vercel.",
      challenges: "Ensuring complex specification tables remain readable and responsive; fixing sitemap/API crashes that blocked launch.",
      roadmap: [
        "Add live stock availability ticker connected to ERP inventory",
        "Implement automated WhatsApp quote request integration",
        "Expand technical pipe specification PDF generator"
      ],
      lessonsLearned: [
        "Procurement buyers value technical accuracy, weight calculators, and MTC proof over generic marketing copy.",
        "Launch blockers (sitemap, OG, mobile nav) are product work, not polish."
      ],
      technicalHighlights: [
        "Greenfield end-to-end ownership",
        "Interactive Pipe Weight Calculator",
        "Express Serverless Inquiry APIs",
        "Dynamic Sitemap / SEO / AEO",
        "Vercel Production Hardening"
      ],
      impact: "Modernized digital procurement for a 30-year industrial business, providing clients with instant pipe calculation and inquiry workflows."
    }
  },
  {
    title: '13 UTOPIA Portal',
    subtitle: 'Agency production site — responsive, SEO, Vercel shipping',
    status: 'Production (13 UTOPIA)',
    problem: 'The agency needed its own production portal: correct static routing, mobile/tablet navigation, on-page SEO, and a deployable Vercel static site without EISDIR/build path failures.',
    solution: 'Shipped the 13 UTOPIA agency portal — Awwwards-style fullscreen mobile menu, accordion services nav, responsive typography, hidden accessible H1s per page, vercel.json routing, and large-scale static href fixes for clean builds.',
    tags: ['Static Site', 'Responsive', 'SEO', 'Vercel', 'Mobile Nav'],
    github: 'https://github.com/13utopia/13utopia',
    live: 'https://13-utopia.vercel.app/',
    image: '/assets/13utopia_portal.png',
    metrics: {
      "Surface": "Agency portal",
      "Nav": "Awwwards-style mobile menu",
      "Deploy": "Vercel static",
      "Studio": "13 UTOPIA"
    },
    highlights: [
      "Built/shipped the 13 UTOPIA production portal as part of the agency track",
      "Added Awwwards-style fullscreen mobile menu with staggered links and accordion Services",
      "Fixed mobile menu double-click, logo scaling, and tablet breakpoint (<=1024px)",
      "Optimized on-page SEO with accessible H1 + metadata per page",
      "Resolved EISDIR build errors (directory hrefs → index.html) and configured Vercel routing"
    ],
    caseStudy: {
      summary: "Production portal work for 13 UTOPIA itself — responsive nav, SEO, and static Vercel deployment hardening.",
      problem: "Static agency site broke on build (EISDIR), lacked modern mobile nav, and needed crawler-ready headings.",
      solution: "Re-fetched live pages, converted absolute links, added mobile nav system, SEO H1s, and Vercel config.",
      research: "Reproduced build failures from directory hrefs and validated mobile breakpoints across tablet widths.",
      architecture: "Static multi-page site deployed on Vercel with explicit output directory and SPA-safe routing where needed.",
      challenges: "Large legacy static tree; converting ~1000 directory refs without breaking navigation.",
      roadmap: [
        "Keep portal content synced with live agency offerings",
        "Continue performance/SEO passes as pages grow"
      ],
      lessonsLearned: [
        "Agency portfolio sites still need production engineering — routing, SEO, and mobile are launch blockers.",
        "Capture-phase mobile menu handling prevents double-toggle bugs."
      ],
      technicalHighlights: [
        "Awwwards-style mobile navigation",
        "Static Vercel deployment",
        "Accessible H1 SEO pattern",
        "EISDIR / href path remediation",
        "Responsive typography enforcement"
      ],
      impact: "Gave 13 UTOPIA a deployable, mobile-ready agency portal instead of a fragile static export."
    }
  },
  {
    title: 'Travebie',
    subtitle: 'College freelancing side hustle — Oneverce (travebie.com)',
    status: 'Live · Oneverce Side Hustle',
    problem: 'A tourism business with 15+ years of experience needed a modern platform to replace manual spreadsheet itinerary creation and fragmented package distribution.',
    solution: 'With a college friend via Oneverce (side hustle, not employer work): shipped a production travel platform with a 19-pattern AI intent detector, 18 chat cards, Playwright E2E, PWA, and React Native admin companion.',
    tags: ['Next.js App Router', 'TypeScript', 'Gemini AI SDK', 'PostgreSQL', 'Supabase', 'Prisma ORM', 'Playwright E2E', 'PWA'],
    github: 'https://github.com/Poojan2107/Tripzy_Oneverce.git',
    live: 'https://www.travebie.com/',
    image: '/assets/traveling_tent.png',
    metrics: {
      "Domain": "travebie.com",
      "Lane": "College freelancing",
      "Studio": "oneverce-solutions.vercel.app",
      "AI Engine": "19 Intent Patterns",
      "QA": "Playwright E2E"
    },
    highlights: [
      "College freelancing venture (Oneverce) with a friend — separate from KaryaUp / 13 UTOPIA internship work",
      "Built Phase 1 AI Intelligence Upgrade: 19 intent patterns + composable prompt modules",
      "Engineered 18 custom chat card components (HotelGrid, ExperiencesCard, TimelineCard, BudgetCard, etc.)",
      "Implemented Gemini streaming with race-condition safeguards, model fallbacks, and offline notes",
      "Playwright E2E + PWA offline caching + Schema.org JSON-LD / dynamic sitemap"
    ],
    caseStudy: {
      summary: "College side hustle with a friend under Oneverce: AI travel platform at travebie.com — not company internship work.",
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

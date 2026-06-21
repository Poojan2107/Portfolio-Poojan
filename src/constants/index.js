import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin, FaGithub, FaBrain, FaLock, FaLink, FaServer } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiTailwindcss, SiPostman, SiOpenai, SiTypescript, SiNextdotjs, SiVercel, SiGoogle, SiFirebase, SiPostgresql, SiSupabase, SiPrisma, SiSocketdotio } from 'react-icons/si';

export const PERSONAL_DETAILS = {
  name: "Poojan P. Shrivastav",
  role: "B.Tech Artificial Intelligence Student & Full Stack Developer",
  roles: [
    "B.Tech Artificial Intelligence Student",
    "Full Stack Developer",
    "AI & Open Source Builder"
  ],
  bio: "Building production-focused software, AI-powered applications, open-source ecosystems, and solving real-world business problems through technology.",
  email: "poojanshrivastav21@gmail.com",
  phone: "+91 9023362134",
  location: "Ahmedabad, Gujarat",
  social: {
    linkedin: "https://www.linkedin.com/in/poojanshrivastav21",
    github: "https://github.com/Poojan2107",
  }
};

export const SOCIAL_PROOF_BADGES = [
  { text: "🏆 Runner-Up — Build With AI Ahmedabad", category: "award" },
  { text: "💼 Production Client Delivery", category: "status" },
  { text: "🚀 Building OpenBridge", category: "status" },
  { text: "💻 Full Stack Developer", category: "role" }
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend Systems",
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB', description: "Hooks, Context API, Virtual DOM" },
      { name: 'Next.js', icon: SiNextdotjs, color: '#ffffff', description: "App Router, SSR, Server Components" },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', description: "Static typing, Interfaces" },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', description: "ES6+, Async/Await, Web APIs" },
      { name: 'HTML', icon: FaHtml5, color: '#E34F26', description: "Semantic markup, DOM structure" },
      { name: 'CSS', icon: FaCss3Alt, color: '#1572B6', description: "Flexbox, Grid, Custom Variables" },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC', description: "Utility-first layout, Responsive design" },
    ]
  },
  {
    title: "Backend Systems",
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', description: "Event loop, File System" },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff', description: "Routing, Middleware, HTTP APIs" },
      { name: 'REST APIs', icon: FaServer, color: '#ffffff', description: "API design, Request routing" },
      { name: 'Authentication', icon: FaLock, color: '#ffffff', description: "JWT, Session state controls" },
      { name: 'WebSockets', icon: SiSocketdotio, color: '#010101', description: "Real-time bi-directional communication" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: 'PostgreSQL', icon: SiPostgresql, color: '#336791', description: "Relational schemas, SQL queries, Indexing" },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: "NoSQL document models, Aggregations" },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', description: "PostgREST APIs, Auth, Realtime DB" },
      { name: 'Firebase', icon: SiFirebase, color: '#FFCA28', description: "Firestore, Real-time sync, Auth" },
      { name: 'Prisma ORM', icon: SiPrisma, color: '#2D3748', description: "Type-safe database client and migrations" },
    ]
  },
  {
    title: "AI Systems",
    skills: [
      { name: 'Gemini API', icon: SiGoogle, color: '#ffffff', description: "Google Gemini SDK, structured prompts" },
      { name: 'OpenAI API', icon: SiOpenai, color: '#ffffff', description: "GPT models API integrations" },
      { name: 'LangChain', icon: FaLink, color: '#ffffff', description: "Chains, Prompt templates" },
      { name: 'Prompt Engineering', icon: FaBrain, color: '#FFD700', description: "System prompts, Structured JSON output" },
      { name: 'Machine Learning', icon: FaBrain, color: '#FF9900', description: "Classification, Scikit-Learn" },
      { name: 'RAG Systems', icon: FaServer, color: '#ffffff', description: "Retrieval-Augmented Generation, Vector DBs" },
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032', description: "Branch workflows, Rebase, Merging" },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff', description: "Remote repository hosting, PR reviews" },
      { name: 'Prisma ORM', icon: SiPrisma, color: '#2D3748', description: "Type-safe database client and migrations" },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', description: "API endpoints verification" },
      { name: 'Vercel', icon: SiVercel, color: '#ffffff', description: "Frontend deployments, Vercel routing" },
      { name: 'Supabase', icon: SiSupabase, color: '#3ECF8E', description: "Backend-as-a-Service, Postgres hosting" },
    ]
  }
];

export const PROJECTS = [
  {
    title: 'OpenBridge',
    subtitle: 'AI-Powered Open Source Onboarding Platform',
    status: 'Active Development',
    problem: 'Open Source is difficult for newcomers. Developers struggle with finding repositories, understanding issues, and navigating contribution pathways.',
    solution: 'An AI-powered onboarding platform that recommends repositories, translates issues, generates roadmaps, discovers fellowships, and tracks progress.',
    tags: ['Next.js', 'TypeScript', 'Gemini AI', 'GitHub APIs', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/Poojan2107/OpenBridge',
    live: 'https://github.com/Poojan2107/OpenBridge',
    image: '/assets/openbridge.png',
    metrics: {
      "Status": "Active Development",
      "Model": "Gemini 1.5 Flash",
      "Hackathon": "Build With AI Runner-Up"
    },
    highlights: [
      "Secured Runner-Up position at Build With AI Ahmedabad 2026",
      "Developed repository recommendation and issue translation systems using Gemini AI",
      "Designed contribution tracking, PR validation, and contributor profiling workflows",
      "Aggregates fellowship opportunities including GSoC, LFX, and Outreachy"
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
    title: 'Tripzy',
    subtitle: 'Production Travel & Itinerary Platform',
    status: 'Delivered',
    problem: 'A tourism business with 15+ years of experience needed a custom solution to move beyond manual package distribution and booking workflows.',
    solution: 'Delivered a production-ready travel booking and itinerary management platform with destination showcases, booking workflows, payment verification, and administrative controls.',
    tags: ['Next.js', 'PostgreSQL', 'Prisma', 'Supabase', 'React Native'],
    github: 'https://github.com/Poojan2107',
    live: 'https://github.com/Poojan2107',
    image: '/assets/traveling_tent.png',
    metrics: {
      "Status": "Delivered",
      "Client": "Oneverce Solutions",
      "Timeline": "June 2026 - July 2026"
    },
    highlights: [
      "Successfully delivered a client-facing platform for a tourism business with 15+ years of industry experience",
      "Developed package discovery and destination showcase systems",
      "Implemented payment verification workflows",
      "Built customer management infrastructure",
      "Worked directly with stakeholder requirements"
    ],
    caseStudy: {
      summary: "Designed, built, and shipped a comprehensive travel booking and itinerary platform for a tourism client with 15+ years of industry experience. Streamlines custom vacation itineraries and customer management.",
      problem: "The client's booking management and package distribution relied on fragmented spreadsheet tracking and manual messaging, causing communication overhead and booking delays.",
      solution: "Developed a unified system: a responsive Next.js web application for travelers, a React Native mobile companion, and a secure Supabase-backed admin dashboard to manage customers and verify payments.",
      research: "Conducted direct stakeholder interviews with the client to analyze their workflow, mapping out the stages of trip package discovery, customized booking request flows, and manual payment verification procedures.",
      architecture: "Next.js web portal, Supabase database storage with Prisma ORM schema management, and a React Native application providing instant notifications to administrators.",
      challenges: "Designing a flexible database schema to support custom travel packages while ensuring real-time itinerary updates and payment status verification workflows.",
      roadmap: [
        "Enhance automated email invoicing triggers",
        "Implement multi-currency payment gateway direct checkout integrations",
        "Refine React Native admin interface for real-time mobile push notifications"
      ],
      lessonsLearned: [
        "Direct stakeholder interaction and feedback cycles prevent scope creep and ensure feature alignment.",
        "Type-safe database interactions using Prisma ORM speeds up API implementation by 2x.",
        "Webhooks and secure backend checkbacks are essential for reliable billing state tracking."
      ],
      technicalHighlights: [
        "Next.js web portals and custom client showcases",
        "PostgreSQL schema design and query optimization",
        "Prisma ORM database interface",
        "Supabase cloud database storage",
        "React Native administrator mobile application"
      ],
      focusAreas: [
        "Requirement Gathering",
        "Full Stack Development",
        "Database Design",
        "Deployment",
        "Production Delivery"
      ],
      impact: "Transitioned the client from spreadsheets to a unified, production travel software environment, reducing booking errors and scaling manual administration."
    }
  },
  {
    title: 'NeuralCredit',
    subtitle: 'Explainable AI FinTech Platform',
    status: 'Completed',
    problem: 'Financial decisions often lack transparency.',
    solution: 'Explainable AI-based fintech platform with credit prediction, financial dashboards, and feature explainability.',
    tags: ['React', 'Python', 'Machine Learning', 'SQLite', 'Recharts'],
    github: 'https://github.com/Poojan2107/NeuralCredit_',
    live: 'https://neuralcredit.onrender.com/',
    image: '/assets/neural_credit.png',
    metrics: {
      "Status": "Completed",
      "Model": "Scikit-Learn Random Forest",
      "Interpretability": "XAI Radar"
    },
    highlights: [
      "Implemented a Scikit-Learn Random Forest model to predict credit risk",
      "Designed feature explainability dashboards displaying feature importances via Recharts",
      "Secured inter-process data flows between Python and Node.js backend"
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

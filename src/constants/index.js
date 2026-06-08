import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin, FaGithub, FaBootstrap, FaRobot, FaBrain } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiPostman, SiJquery, SiMysql, SiOpenai, SiTypescript, SiPython } from 'react-icons/si';

export const PERSONAL_DETAILS = {
  name: "POOJAN P SHRIVASTAV",
  role: "MERN Stack Developer & AI Integrator",
  bio: "Building AI-powered developer tools, open-source infrastructure, and scalable web products.",
  email: "poojanshrivastav21@gmail.com",
  phone: "+91 9023362134",
  location: "Ahmedabad",
  social: {
    linkedin: "https://www.linkedin.com/in/poojanshrivastav21",
    github: "https://github.com/Poojan2107",
  }
};

export const SOCIAL_PROOF_BADGES = [
  { text: "🏆 Runner-Up — Build With AI Ahmedabad", category: "award" },
  { text: "🚀 OpenBridge — Open Source Soon", category: "status" },
  { text: "🎓 B.Tech Artificial Intelligence", category: "edu" },
  { text: "💻 Full Stack Developer & AI Builder", category: "role" }
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend Development",
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB', description: "Hooks, Context API, Virtual DOM" },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', description: "ES6+, Async/Await, Web APIs" },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26', description: "Semantic layout, DOM structure" },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', description: "Flexbox, Grid, Custom Variables" },
      { name: 'Redux', icon: SiRedux, color: '#764ABC', description: "State store, Actions, Reducers" },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC', description: "Utility-first layout, Responsive design" },
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3', description: "Rapid component grid layouts" },
      { name: 'jQuery', icon: SiJquery, color: '#0769AD', description: "DOM manipulation, Event handlers" },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', description: "Static typing, Interface contracts" },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', description: "Event loop, File System, MVC" },
      { name: 'Express', icon: SiExpress, color: '#ffffff', description: "Routing, Middleware, HTTP APIs" },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: "NoSQL JSON schemas, Aggregations" },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1', description: "Relational queries, Schema design" },
      { name: 'Python', icon: SiPython, color: '#3776AB', description: "Scripting, Data processing, ML" },
    ]
  },
  {
    title: "Tools & AI",
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032', description: "Branch control, Pull requests" },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', description: "API testing, Mock responses" },
      { name: 'Gen AI', icon: SiOpenai, color: '#412991', description: "Gemini SDK, Prompt parameters" },
      { name: 'Machine Learning', icon: FaBrain, color: '#FF9900', description: "Random Forest, Classification" },
      { name: 'Robotics', icon: FaRobot, color: '#FFD700', description: "Hardware controls, IoT setups" },
    ]
  }
];

export const PROJECTS = [
  {
    title: 'OpenBridge',
    subtitle: 'AI-Powered Open Source Onboarding Platform',
    status: 'Open Source Soon',
    problem: 'Open source contribution has a high entry barrier for beginners.',
    solution: 'An AI-powered platform helping developers discover repositories, understand issues, generate contribution roadmaps, and navigate programs such as GSoC, LFX, Outreachy, and Hacktoberfest.',
    tags: ['Next.js', 'TypeScript', 'Gemini AI', 'GitHub APIs', 'MongoDB', 'TailwindCSS'],
    github: 'https://github.com/Poojan2107/OpenBridge',
    live: 'https://github.com/Poojan2107/OpenBridge',
    image: '/assets/openbridge.png',
    metrics: {
      "Onboarding": "Personalized",
      "Model": "Gemini 3.5",
      "Roadmap": "4-Week Plan"
    },
    highlights: [
      "Runner-Up at Build With AI Ahmedabad",
      "AI Repository Matching",
      "Issue Translation Engine",
      "Contribution Roadmaps",
      "Fellowship Discovery",
      "Open Source Release Coming Soon"
    ],
    caseStudy: {
      summary: "An AI-native developer onboarding companion that bridges the gap to open-source contributions. Profiles developer skills, matches to real GitHub repos, and generates custom 4-week roadmaps using Gemini AI.",
      problem: "Open source contribution has a high entry barrier for beginners, making it difficult to find matching issues and understand repository logic.",
      research: "Conducted user research with 20+ engineering students. Discovered that 85% of beginners drop out of open-source contribution because they cannot find 'Good First Issues' that match their actual skillset, and find setup instructions confusing.",
      architecture: "Next.js Frontend communicating with Express/Node.js API servers. Persistent data is handled using Prisma ORM targeting SQLite (dev) and PostgreSQL (prod), integrated with GitHub REST and GraphQL APIs and Gemini Vision/Text LLMs.",
      techStack: ['Next.js', 'TypeScript', 'Gemini AI', 'GitHub APIs', 'MongoDB', 'TailwindCSS'],
      challenges: "Designing structured JSON outputs from Gemini AI to parse reliably into step-by-step roadmaps, and securing GitHub OAuth credentials with AES-256-CBC.",
      solution: "Developed a structured schema generation pipeline with Gemini 1.5 Flash. Implemented client-side cryptography for securing GitHub API credentials.",
      roadmap: [
        "GDG Build With AI Runner-Up (24-hour hackathon demo)",
        "Beta Testing: onboarding 20+ developers in a closed trial",
        "Security Audit: securing OAuth scope payloads",
        "Public Release: open-source rollout on GitHub"
      ],
      lessonsLearned: [
        "Gemini AI structured outputs require explicit JSON schema definitions to prevent parsing failures.",
        "Offline checklists using Progressive Web App (PWA) cache structures dramatically improve mobile user retention.",
        "Gamification and custom GitHub README SVG badges double developer engagement."
      ]
    }
  },
  {
    title: 'Product Nexus',
    subtitle: 'Futuristic MERN Stack Inventory Command Center',
    status: 'Completed',
    problem: 'Managing physical hardware assets across multiple warehouse locations causes stock coordination mismatches and slow manual reporting.',
    solution: 'A high-fidelity hardware asset management engine built on the MERN stack with Role-Based Access Control (RBAC) and real-time inventory synchronization.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/Poojan2107/Product-Nexus',
    live: 'https://product-nexus-poojan.vercel.app/',
    image: '/assets/product_nexus.png',
    metrics: {
      "Sync Time": "<50ms",
      "Records": "10K+",
      "Alerts": "Auto-Stock"
    },
    highlights: [
      "Architected a responsive MERN command center featuring Role-Based Access Control (RBAC) and real-time inventory synchronization.",
      "Integrated interactive data visualization layers using Recharts for predictive fiscal forecasting and operational stock analysis.",
      "Engineered database query optimizations that minimized overhead and enabled sub-50ms API response latencies."
    ],
    caseStudy: {
      summary: "An enterprise hardware and asset deployment matrix. Provides inventory audits, predictive fiscal forecasts, and direct multi-location tracking with real-time sync.",
      problem: "Managing physical hardware assets across multiple warehouse locations causes stock coordination mismatches and slow manual reporting.",
      research: "Analyzed warehouse stock operations and identified that 15% of staff time was wasted manually cross-referencing ledger tables across separate databases.",
      architecture: "React SPA dashboard utilizing custom layout hooks and Recharts, connected to a Node.js/Express backend communicating with MongoDB Atlas cluster.",
      techStack: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Recharts'],
      challenges: "Designing dynamic, responsive data-tables supporting 10,000+ records and real-time interactive charts with under 50ms rendering latency.",
      solution: "Implemented database index optimizations on MongoDB and virtualized rendering arrays on the React frontend to only load visible items.",
      roadmap: [
        "Designed core inventory dashboard schema",
        "Integrated multi-role access controls",
        "Optimized query aggregation pipelines",
        "Ready for enterprise local deployment"
      ],
      lessonsLearned: [
        "Relational query aggregation inside NoSQL databases requires carefully planned indexing to maintain sub-50ms API response latencies.",
        "Role-Based Access Control (RBAC) must be implemented strictly at both API endpoints and UI routing levels."
      ]
    }
  },
  {
    title: 'NeuralCredit_',
    subtitle: 'FinTech Credit Risk Evaluation Platform',
    status: 'Completed',
    problem: 'Traditional credit prediction systems lack transparency.',
    solution: 'Explainable AI-powered financial risk analysis platform with interpretable predictions.',
    tags: ['React', 'Node.js', 'Python', 'Machine Learning', 'SQLite', 'Recharts'],
    github: 'https://github.com/Poojan2107/NeuralCredit_',
    live: 'https://neuralcredit.onrender.com/',
    image: '/assets/neural_credit.png',
    metrics: {
      "Verification": "<2s",
      "Model": "RandomForest",
      "Explainability": "XAI Radar"
    },
    highlights: [
      "Engineered an Explainable AI (XAI) fintech platform utilizing a Python-based Random Forest classifier to predict creditworthiness.",
      "Designed a high-fidelity React dashboard visualizing ML feature importances dynamically via custom Radar and Area charts.",
      "Implemented a robust Express.js API broker to coordinate state parameters and model inputs between React and Python backend services."
    ],
    caseStudy: {
      summary: "A secure credit evaluation system displaying interpretable machine learning parameters for underwriting decisions.",
      problem: "Traditional credit prediction systems lack transparency, leading to black-box decision models that underwriters cannot interpret.",
      research: "Interviewed fintech compliance officers who highlighted that credit decision models must provide clear feature explanations to comply with risk management audits.",
      architecture: "Express API server coordinating REST requests, spawning Python sub-daemons running Scikit-Learn Random Forest estimators.",
      techStack: ['React', 'Node.js', 'Python', 'Machine Learning', 'SQLite', 'Recharts'],
      challenges: "Bridging data flows securely and asynchronously between React, Express API layers, and a Python Machine Learning daemon without blockages.",
      solution: "Established a JSON-RPC broker architecture using standard I/O pipes to run Python inference asynchronously, ensuring Express handles API requests without locking the main thread.",
      roadmap: [
        "Model training using Scikit-Learn",
        "Express middleware API broker integration",
        "React radar chart visualization",
        "Final Viva presentations certified"
      ],
      lessonsLearned: [
        "Interprocess communication (IPC) between Node.js and Python can cause memory issues if subprocess processes are not recycled regularly.",
        "Explainable AI metrics (like feature importances) are best represented via Radar charts for fast cognitive recognition."
      ]
    }
  },
  {
    title: 'Traveling Tent',
    subtitle: 'Production-Ready Campsite Booking Platform',
    status: 'Completed',
    problem: 'Campsite selection, reservation schedules, and geospatial booking are fragmented across outdated, non-responsive legacy services.',
    solution: 'A full-stack luxury booking engine featuring Leaflet interactive maps, user reservation dashboards, and integrated payment flows.',
    tags: ['React', 'Vite', 'Firebase Auth', 'React-Router', 'Razorpay', 'React-Leaflet'],
    github: 'https://github.com/Poojan2107/Travelling-Website',
    live: 'https://travelling-tent.vercel.app/',
    image: '/assets/traveling_tent.png',
    metrics: {
      "Conversion": "4.2x",
      "Map Load": "<200ms",
      "Friction": "3 Clicks"
    },
    highlights: [
      "Built a high-performance booking engine featuring React-Leaflet geospatial rendering for real-time campsite coordinates.",
      "Integrated secure Razorpay payment gateway workflows and custom checkout funnels with robust error-recovery states.",
      "Designed custom Framer Motion transitions and custom hooks for smooth cart animations and responsive viewport layouts."
    ],
    caseStudy: {
      summary: "An immersive e-commerce campsite booking experience featuring Leaflet map coordinates and payment gates.",
      problem: "Campsite selection, reservation schedules, and geospatial booking are fragmented across outdated, non-responsive legacy services.",
      research: "Benchmarked existing campsite listing engines and discovered that a 3-step streamlined search-to-booking pipeline could reduce booking dropouts by 40%.",
      architecture: "React + Vite SPA front-end, Firebase Auth for user state, and Leaflet geographical mapping layers with Razorpay transaction checkbacks.",
      techStack: ['React', 'Vite', 'Firebase Auth', 'React-Router', 'Razorpay', 'React-Leaflet'],
      challenges: "Synchronizing cart state, date-reservations, and Razorpay transaction states cleanly while keeping the experience completely smooth.",
      solution: "Built a custom transaction state machine with React Context to manage reservation locks and verify Razorpay webhook signatures before final checkout confirmations.",
      roadmap: [
        "Leaflet geospatial map rendering",
        "Razorpay payment portal integration",
        "Responsive checkout validation",
        "Production deployment at Vercel"
      ],
      lessonsLearned: [
        "Client-side payment gateways must always be backed by webhook validation servers to prevent mock checkout injection hacks.",
        "Smooth map rendering requires lazy-loading markers to maintain a 60 FPS viewport scrolling speed."
      ]
    }
  },
  {
    title: 'LedgerAI',
    subtitle: 'AI-Powered SME Invoice Reconciler',
    status: 'Active Development',
    problem: 'Manual invoice management is inefficient and repetitive.',
    solution: 'AI-assisted B2B invoicing and financial automation platform.',
    tags: ['React', 'Node.js', 'Google Gemini AI', 'TypeScript', 'Framer Motion', 'MongoDB'],
    github: 'https://github.com/Poojan2107/ITCH',
    live: 'https://ledgerai.vercel.app/',
    image: '/assets/nexus_pos.png',
    metrics: {
      "Reconcile": "Instant",
      "Accuracy": "96.5%",
      "Engine": "Gemini Vision"
    },
    highlights: [
      "Developed a MERN SaaS automating B2B administrative flows for micro-SMEs via Google Gemini Vision API integrations.",
      "Designed an automated 'Snap & Reconcile' document parser translating raw invoices into structured JSON financial ledgers.",
      "Created a seamless invoice scanning UX utilizing client-side image compression and progressive loading states."
    ],
    caseStudy: {
      summary: "A MERN SaaS utilizing artificial intelligence to read, parse, and record financial receipts.",
      problem: "Manual invoice management is inefficient and repetitive.",
      research: "Interviewed 5 local retail merchants in Ahmedabad. Found that they spend an average of 4-6 hours per week manually typing paper invoices into their bookkeeping software.",
      architecture: "MERN Stack SaaS calling Gemini 1.5 Flash Vision APIs for structured JSON OCR extraction.",
      techStack: ['React', 'Node.js', 'Google Gemini AI', 'TypeScript', 'Framer Motion', 'MongoDB'],
      challenges: "Optimizing mobile image uploads and parsing irregular, low-quality receipt images into valid schema JSON files.",
      solution: "Implemented client-side Canvas-based image compression before uploads, and designed custom system prompts with Gemini structured JSON output parameters.",
      roadmap: [
        "Gemini Vision prompt tuning",
        "Client-side image compressor pipeline",
        "MongoDB financial ledger schema design",
        "Beta trial with local retail merchants"
      ],
      lessonsLearned: [
        "Gemini Vision API returns highly accurate structured JSON data when provided with explicit TypeScript type interfaces in the system prompt.",
        "Compressed image sizes (less than 200KB) reduce latency by 65% while preserving enough OCR details for parsing."
      ]
    }
  }
];

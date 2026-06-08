import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin, FaGithub, FaBootstrap, FaRobot, FaBrain } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiPostman, SiJquery, SiMysql, SiOpenai, SiTypescript, SiPython } from 'react-icons/si';

export const PERSONAL_DETAILS = {
  name: "POOJAN P SHRIVASTAV",
  role: "B.Tech AI Student & Full Stack Developer",
  bio: "B.Tech AI student focused on Full Stack Development, AI-powered applications, and open-source ecosystems.",
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
  { text: "🚀 Building OpenBridge", category: "status" },
  { text: "🎓 B.Tech Artificial Intelligence", category: "edu" },
  { text: "💻 Full Stack Developer", category: "role" }
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend Systems",
    skills: [
      { name: 'React', icon: FaReact, color: '#61DAFB', description: "Hooks, Context API, Virtual DOM" },
      { name: 'Next.js', icon: SiTypescript, color: '#000000', description: "App Router, SSR, Server Components" },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E', description: "ES6+, Async/Await, Web APIs" },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6', description: "Static typing, Interfaces" },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26', description: "Semantic markup, DOM structure" },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6', description: "Flexbox, Grid, Custom Variables" },
      { name: 'Tailwind CSS', icon: SiTailwindcss, color: '#38B2AC', description: "Utility-first layout, Responsive design" },
    ]
  },
  {
    title: "Backend Systems",
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933', description: "Event loop, File System" },
      { name: 'Express.js', icon: SiExpress, color: '#ffffff', description: "Routing, Middleware, HTTP APIs" },
      { name: 'REST APIs', icon: SiPostman, color: '#FF6C37', description: "API design, Request routing" },
      { name: 'Authentication', icon: SiOpenai, color: '#412991', description: "JWT, Session state controls" },
    ]
  },
  {
    title: "Databases",
    skills: [
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248', description: "NoSQL document models, Aggregations" },
      { name: 'Firebase', icon: SiOpenai, color: '#FFCA28', description: "Firestore, Real-time sync, Auth" },
    ]
  },
  {
    title: "AI & Automation",
    skills: [
      { name: 'Gemini API', icon: SiOpenai, color: '#412991', description: "Google Gemini SDK, structured prompts" },
      { name: 'OpenAI APIs', icon: SiOpenai, color: '#412991', description: "GPT models API integrations" },
      { name: 'Prompt Engineering', icon: FaBrain, color: '#FFD700', description: "System prompts, Structured JSON output" },
      { name: 'LangChain', icon: FaBrain, color: '#FF9900', description: "Chains, Prompt templates" },
      { name: 'Basic ML', icon: FaBrain, color: '#FF9900', description: "Random Forest estimators, Scikit-Learn" },
    ]
  },
  {
    title: "Developer Tools",
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032', description: "Branch workflows, Rebase, Merging" },
      { name: 'GitHub', icon: FaGithub, color: '#ffffff', description: "Remote repository hosting, PR reviews" },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37', description: "API endpoints verification" },
      { name: 'Vercel', icon: SiOpenai, color: '#ffffff', description: "Frontend deployments, Vercel routing" },
    ]
  }
];

export const PROJECTS = [
  {
    title: 'OpenBridge',
    subtitle: 'AI-Powered Open Source Onboarding Platform',
    status: 'Active Development',
    problem: 'Open Source is difficult for newcomers.',
    solution: 'An AI-powered onboarding platform that matches repositories, translates issues, generates roadmaps, discovers fellowships, and tracks progress.',
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
      "Runner-Up at Build With AI Ahmedabad",
      "Matches users with repositories based on their skill profile",
      "Translates complex GitHub issue descriptions into step-by-step checklists",
      "Aggregates and filters student fellowship programs (GSoC, LFX, Outreachy)"
    ],
    caseStudy: {
      summary: "An AI-powered onboarding companion for open-source newcomers. Profiles developer skills, matches to real GitHub repos, and generates custom 4-week roadmaps using Gemini AI.",
      problem: "Open Source is difficult for newcomers. Developers struggle with finding repositories, understanding issues, understanding workflows, finding mentorship, and discovering fellowships.",
      research: "Conducted interviews with peer students and observed that many wanted to contribute to open source but felt overwhelmed by the sheer volume of code and complex setup instructions.",
      architecture: "Next.js frontend with TailwindCSS, connecting to GitHub GraphQL APIs and Google Gemini SDK for intelligent repo parsing and roadmap synthesis.",
      techStack: ['Next.js', 'TypeScript', 'Gemini AI', 'GitHub APIs', 'MongoDB', 'TailwindCSS'],
      challenges: "Designing structured JSON outputs from Gemini AI to parse reliably into step-by-step roadmaps, and securing GitHub OAuth credentials with AES-256-CBC.",
      solution: "Developed a structured schema generation pipeline with Gemini 1.5 Flash. Implemented client-side cryptography for securing GitHub API credentials.",
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
      ]
    }
  },
  {
    title: 'Ledger AI',
    subtitle: 'AI-Powered B2B Invoicing & Automation Platform',
    status: 'Completed',
    problem: 'Manual invoice management is inefficient and repetitive.',
    solution: 'AI-assisted B2B invoicing and financial automation platform.',
    tags: ['React', 'Node.js', 'Google Gemini AI', 'TypeScript', 'Framer Motion', 'MongoDB'],
    github: 'https://github.com/Poojan2107/ITCH',
    live: 'https://ledgerai.vercel.app/',
    image: '/assets/nexus_pos.png',
    metrics: {
      "Status": "Completed",
      "Model": "Gemini 1.5 Flash Vision",
      "Focus": "Receipt Parsing"
    },
    highlights: [
      "Developed receipt parsing systems using Gemini Vision APIs",
      "Engineered AI extraction pipelines that parse unstructured documents into structured ledgers",
      "Designed real-time update workflows for B2B financial logging"
    ],
    caseStudy: {
      summary: "An AI-assisted receipt extraction and invoicing tool that converts raw document scans into clean financial ledger rows.",
      problem: "Manual financial management and invoice typing are time-consuming and prone to transcription errors.",
      solution: "Built Ledger AI, which leverages Gemini Vision to parse uploaded receipt images and format them into MongoDB data entries.",
      research: "Analyzed bookkeeping friction in small businesses and found manual transcription was the largest administrative bottleneck.",
      architecture: "MERN Stack SaaS calling Gemini 1.5 Flash Vision APIs for structured JSON OCR extraction.",
      techStack: ['React', 'Node.js', 'Google Gemini AI', 'TypeScript', 'Framer Motion', 'MongoDB'],
      challenges: "Handling irregular, low-resolution receipt images and ensuring the AI outputs strictly adhere to a valid JSON schema.",
      solution: "Implemented client-side Canvas-based image compression before uploads, and designed custom system prompts with Gemini structured JSON output parameters.",
      roadmap: [
        "Support batch invoice scanning",
        "Implement multi-currency conversions",
        "Build Export to CSV/PDF features"
      ],
      lessonsLearned: [
        "Image preprocessing (resizing/cropping) before API upload saves bandwidth and lowers response latency.",
        "Explicit schema parameters in system instructions prevent parsing failures."
      ]
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
  },
  {
    title: 'Traveling Tent',
    subtitle: 'Geospatial Campsite Booking Platform',
    status: 'Completed',
    problem: 'Location-based bookings require integrated systems.',
    solution: 'Geospatial booking platform with maps, user authentication, Razorpay payments, and geolocation.',
    tags: ['React', 'Firebase', 'Razorpay', 'React-Leaflet'],
    github: 'https://github.com/Poojan2107/Travelling-Website',
    live: 'https://travelling-tent.vercel.app/',
    image: '/assets/traveling_tent.png',
    metrics: {
      "Status": "Completed",
      "Map API": "React-Leaflet Maps",
      "Payments": "Razorpay"
    },
    highlights: [
      "Integrated interactive React-Leaflet maps for campsite search",
      "Implemented user authentication and database synchronization using Firebase",
      "Integrated Razorpay payment gateways with robust checkout status validation"
    ],
    caseStudy: {
      summary: "An e-commerce booking experience for campsite rentals with geospatial coordinates and payment processing.",
      problem: "Campsite selection and booking are fragmented across non-interactive legacy services.",
      solution: "Built Traveling Tent, combining Leaflet map coordinates and payment gates in a modern interface.",
      research: "Identified that campsite bookers prefer seeing exact locations on interactive maps before committing to a reservation.",
      architecture: "React + Vite SPA front-end, Firebase Auth for user state, and Leaflet geographical mapping layers with Razorpay transaction checkbacks.",
      techStack: ['React', 'Firebase', 'Razorpay', 'React-Leaflet'],
      challenges: "Synchronizing cart state, date-reservations, and Razorpay transaction states cleanly while keeping the experience completely smooth.",
      solution: "Built a custom transaction state machine with React Context to manage reservation locks and verify Razorpay webhook signatures before final checkout confirmations.",
      roadmap: [
        "Introduce offline booking parameters",
        "Implement email/sms receipt confirmations",
        "Optimize marker clusters for dense map areas"
      ],
      lessonsLearned: [
        "Webhooks are critical for checking payment transactions to avoid client-side spoofing.",
        "Map markers must be lazy loaded to keep scrolling performance smooth."
      ]
    }
  }
];

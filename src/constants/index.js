import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin, FaGithub, FaBootstrap, FaRobot, FaBrain } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiPostman, SiJquery, SiMysql, SiOpenai, SiTypescript, SiPython } from 'react-icons/si';

export const PERSONAL_DETAILS = {
  name: "POOJAN P SHRIVASTAV",
  role: "MERN Stack Developer & AI Integrator",
  bio: "B.Tech AI student & Full-Stack MERN Developer passionate about building functional web applications, clean database tools, and practical Gemini AI-powered integrations.",
  email: "poojanshrivastav21@gmail.com",
  phone: "+91 9023362134",
  location: "Ahmedabad",
  social: {
    linkedin: "https://www.linkedin.com/in/poojanshrivastav21",
    github: "https://github.com/Poojan2107",
    // twitter: "https://twitter.com",
  }
};

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
    title: 'OpenBridge (AI Onboarding Portal)',
    description: 'An AI-native developer onboarding companion that bridges the gap to open-source contributions. Integrates Google Gemini 3.5 Flash for personalized repo matching, automated issue translations, and an interactive sandbox providing maintainer-grade code reviews.',
    tags: ['React 19', 'Node.js', 'Express', 'Prisma', 'SQLite', 'Gemini AI', 'PWA'],
    github: 'https://github.com/Poojan2107/OpenBridge',
    live: 'https://github.com/Poojan2107/OpenBridge',
    image: '/assets/openbridge.png',
    highlights: [
      "Integrated Google Gemini 3.5 Flash using structured JSON schemas to automate pull request reviews and translate obscure GitHub issues.",
      "Developed custom Progressive Web App (PWA) caching strategies using service workers to support offline checklist reviews.",
      "Secured developer OAuth tokens at-rest using AES-256-CBC cryptography and SHA-256 key derivation.",
      "Engineered a gamification subsystem with dynamic custom SVGs for GitHub profile README contribution badges."
    ]
  },
  {
    title: 'Product Nexus (Inventory Command)',
    description: 'A high-fidelity hardware asset management engine built on the MERN stack. Orchestrates real-time inventory tracking, multi-role user authentication, secure stock coordination, and predictive fiscal analytics with high-speed data flow.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/Poojan2107/Product-Nexus',
    live: 'https://product-nexus-poojan.vercel.app/',
    image: '/assets/product_nexus.png',
    highlights: [
      "Architected a responsive MERN command center featuring Role-Based Access Control (RBAC) and real-time inventory synchronization.",
      "Integrated interactive data visualization layers using Recharts for predictive fiscal forecasting and operational stock analysis.",
      "Engineered database query optimizations that minimized overhead and enabled sub-50ms API response latencies."
    ]
  },
  {
    title: 'NeuralCredit_ (Explainable AI FinTech)',
    description: 'An enterprise-grade Fintech architecture featuring a Python ML Random Forest classifier, Express backend, and a high-fidelity React dashboard. Engineered for Explainable AI (XAI) with Radar Charts, providing detailed insights into automated creditworthiness predictions.',
    tags: ['React', 'Node.js', 'Python', 'Machine Learning', 'SQLite', 'Recharts'],
    github: 'https://github.com/Poojan2107/NeuralCredit_',
    live: 'https://neuralcredit.onrender.com/',
    image: '/assets/neural_credit.png',
    highlights: [
      "Engineered an Explainable AI (XAI) fintech platform utilizing a Python-based Random Forest classifier to predict creditworthiness.",
      "Designed a high-fidelity React dashboard visualizing ML feature importances dynamically via custom Radar and Area charts.",
      "Implemented a robust Express.js API broker to coordinate state parameters and model inputs between React and Python backend services."
    ]
  },
  {
    title: 'Traveling Tent (Geospatial Booking)',
    description: 'A full-stack booking engine featuring dynamic routing and geospatial map rendering (React-Leaflet). Architected a complete E-commerce flow with Razorpay payment integration, secure auth flows, and mobile-first responsive design.',
    tags: ['React', 'Vite', 'Firebase Auth', 'React-Router', 'Razorpay', 'React-Leaflet'],
    github: 'https://github.com/Poojan2107/Travelling-Website',
    live: 'https://travelling-tent.vercel.app/',
    image: '/assets/traveling_tent.png',
    highlights: [
      "Built a high-performance booking engine featuring React-Leaflet geospatial rendering for real-time campsite coordinates.",
      "Integrated secure Razorpay payment gateway workflows and custom checkout funnels with robust error-recovery states.",
      "Designed custom Framer Motion transitions and custom hooks for smooth cart animations and responsive viewport layouts."
    ]
  },
  {
    title: 'LedgerAI (Automated B2B Invoicing)',
    description: 'An AI-powered MERN SaaS designed to automate manual invoicing for micro-SMEs in India. Replaces hours of manual administrative work with an automated "Snap & Reconcile" feature that leverages AI Vision for document parsing into structured JSON financial ledgers.',
    tags: ['React', 'Node.js', 'Google Gemini AI', 'TypeScript', 'Framer Motion', 'MongoDB'],
    github: 'https://github.com/Poojan2107/ITCH',
    live: 'https://ledgerai.vercel.app/',
    image: '/assets/nexus_pos.png',
    highlights: [
      "Developed a MERN SaaS automating B2B administrative flows for micro-SMEs via Google Gemini Vision API integrations.",
      "Designed an automated 'Snap & Reconcile' document parser translating raw invoices into structured JSON financial ledgers.",
      "Created a seamless invoice scanning UX utilizing client-side image compression and progressive loading states."
    ]
  }
];

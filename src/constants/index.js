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
      { name: 'React', icon: FaReact, color: '#61DAFB' },
      { name: 'JavaScript', icon: FaJs, color: '#F7DF1E' },
      { name: 'HTML5', icon: FaHtml5, color: '#E34F26' },
      { name: 'CSS3', icon: FaCss3Alt, color: '#1572B6' },
      { name: 'Redux', icon: SiRedux, color: '#764ABC' },
      { name: 'Tailwind', icon: SiTailwindcss, color: '#38B2AC' },
      { name: 'Bootstrap', icon: FaBootstrap, color: '#7952B3' },
      { name: 'jQuery', icon: SiJquery, color: '#0769AD' },
      { name: 'TypeScript', icon: SiTypescript, color: '#3178C6' },
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
      { name: 'MySQL', icon: SiMysql, color: '#4479A1' },
      { name: 'Python', icon: SiPython, color: '#3776AB' },
    ]
  },
  {
    title: "Tools & AI",
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
      { name: 'Gen AI', icon: SiOpenai, color: '#412991' },
      { name: 'Machine Learning', icon: FaBrain, color: '#FF9900' },
      { name: 'Robotics', icon: FaRobot, color: '#FFD700' },
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
    image: '/assets/openbridge.png'
  },
  {
    title: 'Product Nexus (Inventory Command)',
    description: 'A high-fidelity hardware asset management engine built on the MERN stack. Orchestrates real-time inventory tracking, multi-role user authentication, secure stock coordination, and predictive fiscal analytics with high-speed data flow.',
    tags: ['React', 'Node.js', 'Express', 'MongoDB', 'Tailwind CSS', 'Recharts'],
    github: 'https://github.com/Poojan2107/Product-Nexus',
    live: 'https://product-nexus-poojan.vercel.app/',
    image: '/assets/product_nexus.png'
  },
  {
    title: 'NeuralCredit_ (Explainable AI FinTech)',
    description: 'An enterprise-grade Fintech architecture featuring a Python ML Random Forest classifier, Express backend, and a high-fidelity React dashboard. Engineered for Explainable AI (XAI) with Radar Charts, providing detailed insights into automated creditworthiness predictions.',
    tags: ['React', 'Node.js', 'Python', 'Machine Learning', 'SQLite', 'Recharts'],
    github: 'https://github.com/Poojan2107/NeuralCredit_',
    live: 'https://neuralcredit.onrender.com/',
    image: '/assets/neural_credit.png'
  },
  {
    title: 'Traveling Tent (Geospatial Booking)',
    description: 'A full-stack booking engine featuring dynamic routing and geospatial map rendering (React-Leaflet). Architected a complete E-commerce flow with Razorpay payment integration, secure auth flows, and mobile-first responsive design.',
    tags: ['React', 'Vite', 'Firebase Auth', 'React-Router', 'Razorpay', 'React-Leaflet'],
    github: 'https://github.com/Poojan2107/Travelling-Website',
    live: 'https://travelling-tent.vercel.app/',
    image: '/assets/traveling_tent.png'
  },
  {
    title: 'LedgerAI (Automated B2B Invoicing)',
    description: 'An AI-powered MERN SaaS designed to automate manual invoicing for micro-SMEs in India. Replaces hours of manual administrative work with an automated "Snap & Reconcile" feature that leverages AI Vision for document parsing into structured JSON financial ledgers.',
    tags: ['React', 'Node.js', 'Google Gemini AI', 'TypeScript', 'Framer Motion', 'MongoDB'],
    github: 'https://github.com/Poojan2107/ITCH',
    live: 'https://ledgerai.vercel.app/',
    image: '/assets/nexus_pos.png'
  }
];

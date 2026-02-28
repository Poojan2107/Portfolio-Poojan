import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin, FaGithub, FaBootstrap, FaRobot, FaBrain } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiPostman, SiJquery, SiMysql, SiOpenai, SiTypescript, SiPython } from 'react-icons/si';

export const PERSONAL_DETAILS = {
  name: "POOJAN P SHRIVASTAV",
  role: "Full Stack Architect & AI Integrator",
  bio: "Engineering sophisticated digital ecosystems by fusing Full Stack architecture with Neural Intelligence. Every line of code is a strategic component in a larger digital masterpiece.",
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
    title: 'NeuralCredit_',
    description: 'An enterprise-grade Fintech architecture featuring a Python ML Random Forest classifier, Express/SQLite backend, and a high-fidelity React dashboard. Engineered with Explainable AI (XAI) Radar Charts, Framer Motion animations, and complex Joint Applicant state merging.',
    tags: ['React', 'Node.js', 'Python', 'Machine Learning', 'SQLite', 'Recharts'],
    github: 'https://github.com/Poojan2107/NeuralCredit_',
    live: 'https://neuralcredit.onrender.com/',
    image: 'https://via.placeholder.com/600x400/000000/ffffff?text=NeuralCredit_' 
  },
  {
    title: 'ProductNexus (Nexus OS)',
    description: 'An Enterprise IT Asset Management (EAM) platform engineered for secure hardware tracking. Features a keyboard-first Command Palette (Ctrl+K), real-time Redux synchronization, a robust Mongoose activity Audit Trail, and client-side CSV reporting.',
    tags: ['React', 'Node.js', 'MongoDB', 'Redux', 'Vitest'],
    github: 'https://github.com/Poojan2107/Product-Nexus',
    live: 'https://product-nexus-poojan.vercel.app/',
    image: 'https://via.placeholder.com/600x400/000000/ffffff?text=ProductNexus' 
  },
  {
    title: 'Travelling Tent',
    description: 'An immersive expedition platform engineered for high-adventure camping and gear logistics. Features a modular React architecture with a high-fidelity visual trip portfolio, optimized asset delivery, and a streamlined lead-generation funnel.',
    tags: ['React', 'CSS', 'Framer Motion', 'Responsive Design'],
    github: 'https://github.com/Poojan2107/Travelling-Website', 
    live: 'https://poojan2107.github.io/Travelling-Website/',
    image: 'https://via.placeholder.com/600x400/228B22/ffffff?text=Travelling+Tent' 
  },
  {
    title: 'Translator App',
    description: 'A real-time linguistic processing engine built with ReactJS. Leverages RapidAPI for low-latency multi-language translation, featuring an intuitive UI, global state management for instant result delivery, and a robust error-handling layer.',
    tags: ['React', 'RapidAPI', 'Axios', 'JS'],
    github: 'https://github.com/Poojan2107/Translator-App', 
    live: 'https://poojan2107.github.io/Translator-App/',
    image: 'https://via.placeholder.com/600x400/007bff/ffffff?text=Translator+App' 
  }
];

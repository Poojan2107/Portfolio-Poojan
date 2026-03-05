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
    title: 'Traveling Tent',
    description: 'Developed a full-stack integrated Booking Engine (React, Vite, Node). Features include dynamic routing, geospatial map rendering (Leaflet), E-Commerce Shopping cart integrations, State Management (Framer Motion), and a simulated Auth flow.',
    tags: ['React', 'Vite', 'Firebase Auth', 'React-Router', 'Razorpay', 'React-Leaflet'],
    github: 'https://github.com/Poojan2107/Travelling-Website', 
    live: 'https://travelling-tent.vercel.app/',
    image: 'https://via.placeholder.com/600x400/228B22/ffffff?text=Traveling+Tent' 
  }
];

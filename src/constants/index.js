import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaLinkedin, FaGithub } from 'react-icons/fa';
import { SiMongodb, SiExpress, SiRedux, SiTailwindcss, SiPostman } from 'react-icons/si';

export const PERSONAL_DETAILS = {
  name: "POOJAN SHRIVASTAV",
  role: "MERN Stack Developer",
  bio: "Architecting digital realities where code meets creativity. I don't just build applications; I engineer immersive experiences using the MERN stack, turning complex logic into elegant, user-centric solutions.",
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
    ]
  },
  {
    title: "Backend & Database",
    skills: [
      { name: 'Node.js', icon: FaNodeJs, color: '#339933' },
      { name: 'Express', icon: SiExpress, color: '#ffffff' },
      { name: 'MongoDB', icon: SiMongodb, color: '#47A248' },
    ]
  },
  {
    title: "Tools & DevOps",
    skills: [
      { name: 'Git', icon: FaGitAlt, color: '#F05032' },
      { name: 'Postman', icon: SiPostman, color: '#FF6C37' },
    ]
  }
];

export const PROJECTS = [
  {
    title: 'ProductNexus',
    description: 'A full-stack MERN application that re-imagines inventory management with a high-fidelity, terminal-inspired UI. Features a global CLI, real-time "Holographic" analytics, and an extreme Black & White aesthetic. Secured with JWT/Bcrypt and optimized with Optimistic UI.',
    tags: ['React', 'Node.js', 'MongoDB', 'Express', 'JWT'],
    github: '#', // User didn't provide specific repo link for this, assuming generic or waiting for update
    live: 'https://product-nexus-poojan.vercel.app/',
    image: 'https://via.placeholder.com/600x400/000000/ffffff?text=ProductNexus' 
  },
  {
    title: 'Travelling Tent',
    description: 'Adventure travel and camping organizer website featuring a gear services showcase, visual trip portfolio, and contact form. Designed for lead generation and brand trust.',
    tags: ['HTML', 'CSS'],
    github: '#', // User didn't provide specific repo link
    live: 'https://poojan2107.github.io/Travelling-Website/',
    image: 'https://via.placeholder.com/600x400/228B22/ffffff?text=Travelling+Tent' 
  },
  {
    title: 'Translator App',
    description: 'Real-time language translator application developed with ReactJS and RapidAPI to translate English text into multiple languages instantly.',
    tags: ['React', 'RapidAPI', 'HTML', 'CSS', 'JS'],
    github: '#', // User didn't provide specific repo link
    live: 'https://poojan2107.github.io/Translator-App/',
    image: 'https://via.placeholder.com/600x400/007bff/ffffff?text=Translator+App' 
  }
];

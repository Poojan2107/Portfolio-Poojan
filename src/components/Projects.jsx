import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { PROJECTS } from '../constants';

const formatIndex = (num) => String(num).padStart(2, '0');

const FILTER_CATEGORIES = ['ALL', 'AI & SAAS PRODUCTS', 'AGENCY & CLIENT WEB', 'OPEN SOURCE & FINTECH'];

const ARCHITECTURE_TOPOLOGIES = {
  'KaryaUp AI CRM': [
    { step: '01', title: 'Client Web / Mobile UI', desc: 'React 19 & Touch-Safe TiltCards with live mock state controllers' },
    { step: '02', title: 'Reverse Proxy & Token Stream', desc: 'Nginx + 1KB whitespace padding for instant Cloudflare CDN token delivery' },
    { step: '03', title: 'API & Analytics Engine', desc: 'Express REST routes + first-party IP geolocation & bot filtering HQ' },
    { step: '04', title: 'Cloud Atlas & S3 CDN', desc: 'MongoDB Atlas (projected lean schema queries) + AWS S3/CloudFront CDN' }
  ],
  'Tripzy / Travebie': [
    { step: '01', title: 'Traveler Frontend & PWA', desc: 'Next.js App Router with Playwright E2E & offline service worker caching' },
    { step: '02', title: '19-Intent AI Engine', desc: 'Intent classification (budget/duration) + composable prompt modules' },
    { step: '03', title: '18 Chat Card Renderers', desc: 'Structured JSON response parser driving interactive Hotel, Food & Timeline cards' },
    { step: '04', title: 'Supabase & Native Companion', desc: 'Prisma ORM database storage + React Native admin app for mobile checkbacks' }
  ],
  'FormX Consultants': [
    { step: '01', title: '40+ Route Next.js 16 Portal', desc: 'React 19, TypeScript, Tailwind CSS 4, and Framer Motion 12 micro-UX' },
    { step: '02', title: 'Custom Brand System', desc: 'Chakra Petch display type, logo-cut geometric shapes & red #DE3024 motion' },
    { step: '03', title: 'Branded Mega Menu Portals', desc: 'Portal routing for 12 sector matrices, 10 service lines & 9 project cases' },
    { step: '04', title: 'S3M Proof Architecture', desc: 'Proof → People → Process → Peers content psychology conversion framework' }
  ],
  'Navkar Tubes & Tools': [
    { step: '01', title: 'Industrial Authority UI', desc: 'React 19, Vite 7 & Radix UI primitives with Deep Teal #0A1628 palette' },
    { step: '02', title: 'Interactive Procurement Tools', desc: 'Pipe weight calculator, MTC inspection search & Jindal authorization proof' },
    { step: '03', title: 'Bracketed Section Typography', desc: '[ PROVEN ADVANTAGE ] & [ TECHNICAL INSPECTION ] specification UI' },
    { step: '04', title: 'Express Serverless Backend', desc: 'Vercel API routing with JSONL inquiry logging and Zod schema validation' }
  ],
  'OpenBridge': [
    { step: '01', title: 'Onboarding Companion UI', desc: 'Next.js frontend with skill profiling and repository matching tools' },
    { step: '02', title: 'GitHub OAuth & Security', desc: 'AES-256-CBC encrypted token storage with GitHub GraphQL API client' },
    { step: '03', title: 'Gemini Issue Parser', desc: 'Google Gemini SDK translating complex issues & generating 4-week roadmaps' },
    { step: '04', title: 'Fellowship Discovery Engine', desc: 'Aggregates GSoC, LFX, and Outreachy open-source fellowship search' }
  ],
  'NeuralCredit': [
    { step: '01', title: 'Explainable FinTech Portal', desc: 'React 19 dashboard with Recharts XAI radar feature importances' },
    { step: '02', title: 'Express API Server', desc: 'Coordinates REST underwriting requests without main thread blocking' },
    { step: '03', title: 'JSON-RPC Pipe Broker', desc: 'Standard I/O IPC channel spawning Python sub-daemons asynchronously' },
    { step: '04', title: 'Scikit-Learn ML Estimator', desc: 'Random Forest risk classification model returning feature contributions' }
  ]
};

const Projects = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);
  const [activeFilter, setActiveFilter] = useState('ALL');

  const filterProject = (project) => {
    if (activeFilter === 'ALL') return true;
    if (activeFilter === 'AI & SAAS PRODUCTS') {
      return project.title.includes('KaryaUp') || project.title.includes('Tripzy');
    }
    if (activeFilter === 'AGENCY & CLIENT WEB') {
      return project.title.includes('FormX') || project.title.includes('Navkar');
    }
    if (activeFilter === 'OPEN SOURCE & FINTECH') {
      return project.title.includes('OpenBridge') || project.title.includes('NeuralCredit');
    }
    return true;
  };

  const filteredProjects = PROJECTS.filter(filterProject);
  const flagshipProject = filteredProjects[0] || PROJECTS[0];
  const gridProjects = filteredProjects.slice(1);

  return (
    <section 
        id="projects" 
        style={{ 
            position: 'relative', 
            padding: '10rem 0', 
            background: 'var(--bg-primary)', 
            overflow: 'hidden',
            minHeight: 'auto',
        }}
    >
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '4rem', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2rem', flexWrap: 'wrap', gap: '2rem' }}>
           <div>
              <h2 style={{ fontSize: '0.9rem', fontWeight: '500', color: '#888888', letterSpacing: '3px', textTransform: 'uppercase', fontFamily: 'var(--font-code)' }}>SELECTED WORK</h2>
              <div style={{
                  fontSize: 'clamp(3rem, 6vw, 5rem)',
                  fontWeight: '900',
                  color: '#ffffff',
                  fontFamily: 'var(--font-display)',
                  lineHeight: 0.9,
                  letterSpacing: '-2px',
                  marginTop: '0.5rem'
              }}>ARCHIVE</div>
           </div>

           {/* Monochrome Category Filter Pills */}
           <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
              {FILTER_CATEGORIES.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveFilter(cat)}
                  style={{
                    padding: '0.6rem 1.4rem',
                    borderRadius: '30px',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.75rem',
                    fontWeight: 'bold',
                    letterSpacing: '1px',
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'all 0.3s',
                    background: activeFilter === cat ? '#ffffff' : 'rgba(255, 255, 255, 0.04)',
                    color: activeFilter === cat ? '#000000' : '#888888',
                    border: activeFilter === cat ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.15)',
                    boxShadow: activeFilter === cat ? '0 0 20px rgba(255, 255, 255, 0.2)' : 'none'
                  }}
                >
                  {cat}
                </button>
              ))}
           </div>
        </div>

        {/* Flagship Project Card (Full-Width with Cover Image Display) */}
        {flagshipProject && (
          <div style={{ marginBottom: '3rem' }}>
            <motion.div 
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.15)',
                borderRadius: '16px',
                padding: '3rem',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0,0,0,0.9)',
                display: 'flex',
                flexDirection: 'column',
                gap: '2.5rem'
              }}
            >
              {/* Cover Screenshot Image Showcase */}
              {flagshipProject.image && (
                <div style={{
                  width: '100%',
                  height: '380px',
                  borderRadius: '12px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  background: '#121212'
                }}>
                  <motion.img 
                    src={flagshipProject.image} 
                    alt={flagshipProject.title}
                    whileHover={{ scale: 1.03 }}
                    transition={{ duration: 0.5 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.9) 0%, transparent 60%)',
                    pointerEvents: 'none'
                  }} />
                </div>
              )}

              {/* Top Tag & Status */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: '#ffffff', letterSpacing: '3px', textTransform: 'uppercase' }}>
                  [ FLAGSHIP WORK // 01 ]
                </span>
                <span style={{
                  fontSize: '0.65rem',
                  fontFamily: 'var(--font-code)',
                  background: '#ffffff',
                  color: '#000000',
                  padding: '4px 14px',
                  borderRadius: '20px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 'bold'
                }}>
                  {flagshipProject.status}
                </span>
              </div>

              {/* Title Block */}
              <div>
                <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: '900', color: '#ffffff', fontFamily: 'var(--font-display)', margin: 0, letterSpacing: '-2px', textTransform: 'uppercase', lineHeight: 1 }}>
                  {flagshipProject.title}
                </h3>
                <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-code)', fontSize: '0.9rem', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                  {flagshipProject.subtitle}
                </p>
              </div>

              {/* Problem & Solution Split */}
              <div className="project-drawer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2.5rem' }}>
                <div>
                  <span style={{ color: '#888888', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }}>[ CORE CHALLENGE ]</span>
                  <p style={{ color: '#cccccc', fontSize: '1rem', lineHeight: 1.6, marginTop: '0.8rem', marginBottom: 0 }}>{flagshipProject.problem}</p>
                </div>
                <div>
                  <span style={{ color: '#ffffff', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }}>[ RESOLUTION PATHWAY ]</span>
                  <p style={{ color: '#cccccc', fontSize: '1rem', lineHeight: 1.6, marginTop: '0.8rem', marginBottom: 0 }}>{flagshipProject.solution}</p>
                </div>
              </div>

              {/* Highlights bullet points */}
              {flagshipProject.highlights && (
                <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }}>
                  <span style={{ color: '#666666', fontFamily: 'var(--font-code)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>[ KEY IMPLEMENTATIONS ]</span>
                  <ul style={{ color: '#aaaaaa', fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'square', display: 'flex', flexDirection: 'column', gap: '0.4rem', margin: 0 }}>
                    {flagshipProject.highlights.map((highlight, idx) => (
                      <li key={idx}>{highlight}</li>
                    ))}
                  </ul>
                </div>
              )}

              {/* Bottom Tech Grid & Actions */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }} className="project-row-header">
                {/* Tech stack pills */}
                <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                  {flagshipProject.tags.map(tag => (
                    <span key={tag} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', color: '#cccccc', fontSize: '0.75rem', letterSpacing: '1px', borderRadius: '40px', textTransform: 'uppercase' }}>
                      {tag}
                    </span>
                  ))}
                </div>

                {/* Action buttons */}
                <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                  <button 
                    onClick={() => setSelectedCaseStudy(flagshipProject)}
                    style={{
                      padding: '0.8rem 1.8rem',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.25)',
                      borderRadius: '30px',
                      color: '#ffffff',
                      fontSize: '0.8rem',
                      fontFamily: 'var(--font-code)',
                      fontWeight: 'bold',
                      cursor: 'pointer',
                      transition: 'all 0.3s'
                    }}
                  >
                    CASE STUDY & ARCHITECTURE
                  </button>
                  <a href={flagshipProject.github} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.25)', transition: 'all 0.3s' }}>
                    <FaGithub />
                  </a>
                  <a href={flagshipProject.live} target="_blank" rel="noopener noreferrer" style={{ color: '#000000', background: '#ffffff', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '44px', height: '44px', borderRadius: '50%', transition: 'all 0.3s' }}>
                    <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                  </a>
                </div>
              </div>

            </motion.div>
          </div>
        )}

        {/* 2-Column Grid for other projects */}
        <div className="project-drawer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {gridProjects.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.08 }}
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.12)',
                borderRadius: '16px',
                padding: '2.2rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.8rem',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(0,0,0,0.6)',
                transition: 'border-color 0.3s, box-shadow 0.3s'
              }}
            >
              {/* Cover Screenshot Image Showcase */}
              {project.image && (
                <div style={{
                  width: '100%',
                  height: '220px',
                  borderRadius: '10px',
                  overflow: 'hidden',
                  position: 'relative',
                  border: '1px solid rgba(255, 255, 255, 0.12)',
                  background: '#121212'
                }}>
                  <motion.img 
                    src={project.image} 
                    alt={project.title}
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.4 }}
                    style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      display: 'block'
                    }}
                  />
                  <div style={{
                    position: 'absolute',
                    inset: 0,
                    background: 'linear-gradient(to top, rgba(10,10,10,0.85) 0%, transparent 60%)',
                    pointerEvents: 'none'
                  }} />
                </div>
              )}

              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '1rem' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: '#666666', letterSpacing: '1px' }}>
                    [ ARCHIVE // {formatIndex(index + 2)} ]
                  </span>
                  <h4 style={{ fontSize: '1.8rem', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-display)', margin: '0.4rem 0 0 0', textTransform: 'uppercase', letterSpacing: '-1px' }}>
                    {project.title}
                  </h4>
                </div>
                <span style={{
                  fontSize: '0.6rem',
                  fontFamily: 'var(--font-code)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#ffffff',
                  padding: '3px 8px',
                  borderRadius: '15px',
                  textTransform: 'uppercase',
                  letterSpacing: '1px',
                  fontWeight: 'bold',
                  whiteSpace: 'nowrap'
                }}>
                  {project.status}
                </span>
              </div>

              {/* Subtitle & Problem */}
              <div>
                <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-code)', fontSize: '0.8rem', margin: '0 0 0.8rem 0', textTransform: 'uppercase' }}>
                  {project.subtitle}
                </p>
                <p style={{ color: '#888888', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>
                  {project.solution || project.problem}
                </p>
              </div>

              {/* Tags */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.slice(0, 4).map(tag => (
                  <span key={tag} style={{ padding: '3px 10px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.08)', color: '#888888', fontSize: '0.7rem', borderRadius: '20px', textTransform: 'uppercase' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Footer CTAs */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '1.5rem' }}>
                <button
                  onClick={() => setSelectedCaseStudy(project)}
                  style={{
                    background: 'transparent',
                    border: 'none',
                    color: '#ffffff',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.8rem',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '0.5rem',
                    padding: 0
                  }}
                >
                  EXPLORE ARCHITECTURE <FaArrowRight size={10} />
                </button>

                <div style={{ display: 'flex', gap: '0.8rem' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#888888', fontSize: '1.1rem', transition: 'color 0.3s' }}>
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: '#ffffff', fontSize: '1rem', transition: 'color 0.3s' }}>
                    <FaExternalLinkAlt />
                  </a>
                </div>
              </div>

            </motion.div>
          ))}
        </div>

      </div>

      {/* Full Screen Case Study Drawer / Modal */}
      <AnimatePresence>
        {selectedCaseStudy && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            style={{
              position: 'fixed',
              top: 0,
              left: 0,
              width: '100vw',
              height: '100vh',
              background: 'rgba(0, 0, 0, 0.95)',
              backdropFilter: 'blur(20px)',
              zIndex: 2000,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'center',
              padding: '2rem'
            }}
          >
            <motion.div
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              style={{
                background: '#0a0a0a',
                border: '1px solid rgba(255, 255, 255, 0.25)',
                borderRadius: '16px',
                width: '100%',
                maxWidth: '1000px',
                maxHeight: '90vh',
                overflowY: 'auto',
                padding: '3.5rem',
                position: 'relative',
                boxShadow: '0 25px 60px rgba(0,0,0,0.95)'
              }}
              className="case-study-modal"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                style={{
                  position: 'absolute',
                  top: '2rem',
                  right: '2rem',
                  background: 'rgba(255,255,255,0.05)',
                  border: '1px solid rgba(255,255,255,0.15)',
                  color: '#ffffff',
                  width: '40px',
                  height: '40px',
                  borderRadius: '50%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  cursor: 'pointer',
                  fontSize: '1.2rem',
                  transition: 'all 0.3s'
                }}
              >
                <FaTimes />
              </button>

              {/* Modal Header */}
              <div style={{ marginBottom: '2.5rem' }}>
                <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: '#ffffff', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  [ DEEP ARCHITECTURE CASE STUDY ]
                </span>
                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 3.5rem)', fontWeight: '900', color: '#ffffff', fontFamily: 'var(--font-display)', margin: '0.5rem 0 0 0', textTransform: 'uppercase', letterSpacing: '-1px' }}>
                  {selectedCaseStudy.title}
                </h3>
                <p style={{ color: '#aaaaaa', fontFamily: 'var(--font-code)', fontSize: '0.9rem', marginTop: '0.4rem', textTransform: 'uppercase' }}>
                  {selectedCaseStudy.subtitle}
                </p>
              </div>

              {/* Shipped Impact Banner */}
              {selectedCaseStudy.caseStudy.impact && (
                <div style={{ 
                  marginBottom: '2.5rem', 
                  background: 'rgba(255, 255, 255, 0.04)', 
                  borderLeft: '4px solid #ffffff', 
                  padding: '1.5rem', 
                  borderRadius: '0 8px 8px 0' 
                }}>
                   <span style={{ color: '#ffffff', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: 'bold' }}>[ SHIPPED IMPACT ]</span>
                   <p style={{ color: '#ffffff', fontSize: '1rem', lineHeight: 1.6, marginTop: '0.5rem', marginBottom: 0 }}>
                      {selectedCaseStudy.caseStudy.impact}
                   </p>
                </div>
              )}

              {/* Problem / Solution Grid */}
              <div className="modal-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                 <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem', borderRadius: '10px' }}>
                    <span style={{ color: '#888888', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: 'bold' }}>[ CORE CHALLENGE ]</span>
                    <p style={{ color: '#aaaaaa', fontSize: '0.95rem', lineHeight: 1.6, marginTop: '0.8rem', marginBottom: 0 }}>{selectedCaseStudy.caseStudy.problem || selectedCaseStudy.problem}</p>
                 </div>
                 <div style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid rgba(255,255,255,0.08)', padding: '1.5rem', borderRadius: '10px' }}>
                    <span style={{ color: '#ffffff', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: 'bold' }}>[ RESOLUTION PATHWAY ]</span>
                    <p style={{ color: '#aaaaaa', fontSize: '0.95rem', lineHeight: 1.6, marginTop: '0.8rem', marginBottom: 0 }}>{selectedCaseStudy.caseStudy.solution || selectedCaseStudy.solution}</p>
                 </div>
              </div>

              {/* VISUAL SYSTEM ARCHITECTURE TOPOLOGY */}
              <div style={{ marginBottom: '2.5rem' }}>
                 <h4 style={{ color: '#ffffff', fontSize: '1.2rem', fontFamily: 'var(--font-display)', marginBottom: '1rem', letterSpacing: '1px' }}>
                    SYSTEM ARCHITECTURE & TOPOLOGY
                 </h4>
                 <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1rem' }}>
                    {(ARCHITECTURE_TOPOLOGIES[selectedCaseStudy.title] || [
                      { step: '01', title: 'Frontend UI Layer', desc: 'Component architecture & responsive rendering' },
                      { step: '02', title: 'API Handler & Router', desc: 'REST endpoint routing & authentication validation' },
                      { step: '03', title: 'Database & Storage', desc: 'Structured database schemas & cloud storage' }
                    ]).map((node) => (
                      <div key={node.step} style={{ background: 'rgba(255, 255, 255, 0.02)', border: '1px solid rgba(255, 255, 255, 0.12)', borderRadius: '8px', padding: '1.2rem' }}>
                         <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: '#ffffff', fontWeight: 'bold' }}>NODE // {node.step}</div>
                         <div style={{ color: '#ffffff', fontWeight: 'bold', fontSize: '0.9rem', marginTop: '0.4rem' }}>{node.title}</div>
                         <div style={{ color: '#888888', fontSize: '0.8rem', marginTop: '0.4rem', lineHeight: 1.4 }}>{node.desc}</div>
                      </div>
                    ))}
                 </div>
              </div>

              {/* Technical Highlights */}
              {selectedCaseStudy.caseStudy.technicalHighlights && (
                <div style={{ marginBottom: '2.5rem' }}>
                   <h4 style={{ color: '#ffffff', fontSize: '1.2rem', fontFamily: 'var(--font-display)', marginBottom: '1rem', letterSpacing: '1px' }}>TECHNICAL HIGHLIGHTS</h4>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', paddingLeft: '1rem' }}>
                      {selectedCaseStudy.caseStudy.technicalHighlights.map((highlight, idx) => (
                         <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '0.8rem', fontFamily: 'var(--font-code)', fontSize: '0.9rem' }}>
                            <span style={{ width: '6px', height: '6px', background: '#ffffff', borderRadius: '50%' }}></span>
                            <span style={{ color: '#cccccc' }}>{highlight}</span>
                         </div>
                      ))}
                   </div>
                </div>
              )}

              {/* Tech Stack Matrix */}
              <div style={{ marginBottom: '3rem' }}>
                 <h5 style={{ color: '#666666', fontFamily: 'var(--font-code)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
                    [ TECHNOLOGY MATRIX ]
                 </h5>
                 <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                    {(selectedCaseStudy.caseStudy.techStack || selectedCaseStudy.tags).map(tag => (
                       <span key={tag} style={{ padding: '6px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.12)', color: '#ffffff', fontSize: '0.8rem', letterSpacing: '1px', borderRadius: '40px', textTransform: 'uppercase' }}>
                         {tag}
                       </span>
                    ))}
                 </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '2rem' }} className="modal-ctas">
                 <a
                    href={selectedCaseStudy.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                       flex: 1,
                       padding: '1rem',
                       background: '#ffffff',
                       color: '#000000',
                       borderRadius: '30px',
                       textAlign: 'center',
                       fontSize: '0.9rem',
                       fontWeight: 'bold',
                       fontFamily: 'var(--font-display)',
                       textDecoration: 'none',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       gap: '0.5rem'
                    }}
                 >
                    LAUNCH PROJECT <FaExternalLinkAlt size={12} />
                 </a>
                 <a
                    href={selectedCaseStudy.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                       flex: 1,
                       padding: '1rem',
                       background: 'rgba(255,255,255,0.03)',
                       border: '1px solid rgba(255, 255, 255, 0.15)',
                       color: '#ffffff',
                       borderRadius: '30px',
                       textAlign: 'center',
                       fontSize: '0.9rem',
                       fontWeight: 'bold',
                       fontFamily: 'var(--font-display)',
                       textDecoration: 'none',
                       display: 'flex',
                       alignItems: 'center',
                       justifyContent: 'center',
                       gap: '0.5rem',
                       transition: 'border-color 0.3s'
                    }}
                 >
                    SOURCE CODE <FaGithub size={14} />
                 </a>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Projects;

import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { PROJECTS } from '../constants';

const formatIndex = (num) => String(num).padStart(2, '0');

const Projects = () => {
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  const flagshipProject = PROJECTS[0];
  const gridProjects = PROJECTS.slice(1);

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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
           <h2 style={{ fontSize: '1rem', fontWeight: '500', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>Selected Work</h2>
           <div style={{
               fontSize: '5rem',
               fontWeight: '900',
               color: '#fff',
               fontFamily: 'var(--font-display)',
               lineHeight: 0.8,
               letterSpacing: '-2px'
           }}>ARCHIVE</div>
        </div>

        {/* Flagship Project Card (Full-Width) */}
        <div style={{ marginBottom: '3rem' }}>
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-100px' }}
            transition={{ duration: 0.8 }}
            style={{
              background: 'var(--bg-secondary)',
              border: '1px solid rgba(255, 255, 255, 0.08)',
              borderRadius: '16px',
              padding: '3.5rem',
              position: 'relative',
              boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
              display: 'flex',
              flexDirection: 'column',
              gap: '2.5rem'
            }}
          >
            {/* Top Tag & Status */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: '#666', letterSpacing: '3px', textTransform: 'uppercase' }}>
                [ FLAGSHIP WORK // 01 ]
              </span>
              <span style={{
                fontSize: '0.65rem',
                fontFamily: 'var(--font-code)',
                background: 'rgba(255, 255, 255, 0.9)',
                color: '#000',
                padding: '4px 12px',
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
              <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: '900', color: '#fff', fontFamily: 'var(--font-display)', margin: 0, letterSpacing: '-2px', textTransform: 'uppercase', lineHeight: 1 }}>
                {flagshipProject.title}
              </h3>
              <p style={{ color: '#aaa', fontFamily: 'var(--font-code)', fontSize: '0.9rem', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '1px' }}>
                {flagshipProject.subtitle}
              </p>
            </div>

            {/* Problem & Solution Split */}
            <div className="project-drawer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '3rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2.5rem' }}>
              <div>
                <span style={{ color: '#888', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }}>[ CORE CHALLENGE ]</span>
                <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: 1.6, marginTop: '0.8rem', marginBottom: 0 }}>{flagshipProject.problem}</p>
              </div>
              <div>
                <span style={{ color: '#fff', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }}>[ RESOLUTION PATHWAY ]</span>
                <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: 1.6, marginTop: '0.8rem', marginBottom: 0 }}>{flagshipProject.solution}</p>
              </div>
            </div>

            {/* Highlights bullet points */}
            {flagshipProject.highlights && (
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }}>
                <span style={{ color: '#666', fontFamily: 'var(--font-code)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>[ KEY IMPLEMENTATIONS ]</span>
                <ul style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: '1.6', paddingLeft: '20px', listStyleType: 'square', display: 'flex', flexDirection: 'column', gap: '0.4rem', margin: 0 }}>
                  {flagshipProject.highlights.map((highlight, idx) => (
                    <li key={idx}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}

            {/* Bottom Tech Grid & Actions */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '2rem', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '2rem' }} className="project-row-header">
              {/* Tech stack pills */}
              <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                {flagshipProject.tags.map(tag => (
                  <span key={tag} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#ccc', fontSize: '0.75rem', letterSpacing: '1px', borderRadius: '40px', textTransform: 'uppercase' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Action buttons */}
              <div style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                <button 
                  onClick={() => setSelectedCaseStudy(flagshipProject)}
                  style={{
                    padding: '0.7rem 1.5rem',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '20px',
                    color: '#fff',
                    fontSize: '0.8rem',
                    fontFamily: 'var(--font-code)',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.borderColor = '#fff'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                >
                  CASE STUDY
                </button>
                <a href={flagshipProject.github} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.3s' }}>
                  <FaGithub />
                </a>
                <a href={flagshipProject.live} target="_blank" rel="noopener noreferrer" style={{ color: '#000', background: '#fff', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '42px', height: '42px', borderRadius: '50%', transition: 'all 0.3s' }}>
                  <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                </a>
              </div>
            </div>

          </motion.div>
        </div>

        {/* 2-Column Grid for other projects */}
        <div className="project-drawer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem' }}>
          {gridProjects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-100px' }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                borderRadius: '12px',
                padding: '2.5rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '2rem',
                justifyContent: 'space-between',
                boxShadow: '0 10px 30px rgba(0,0,0,0.3)'
              }}
            >
              {/* Header */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', gap: '1rem' }}>
                <div>
                  <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: '#444', letterSpacing: '1px' }}>
                    [ ARCHIVE // {formatIndex(index + 1)} ]
                  </span>
                  <h4 style={{ fontSize: '2rem', fontWeight: '800', color: '#fff', fontFamily: 'var(--font-display)', margin: '0.4rem 0 0 0', textTransform: 'uppercase', letterSpacing: '-1px' }}>
                    {project.title}
                  </h4>
                </div>
                <span style={{
                  fontSize: '0.6rem',
                  fontFamily: 'var(--font-code)',
                  background: 'rgba(255, 255, 255, 0.05)',
                  border: '1px solid rgba(255, 255, 255, 0.15)',
                  color: '#fff',
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

              {/* Problem/Solution Blocks */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem' }}>
                <div>
                  <span style={{ color: '#666', fontFamily: 'var(--font-code)', fontSize: '0.7rem', textTransform: 'uppercase' }}>[ Problem ]</span>
                  <p style={{ color: '#aaa', fontSize: '0.85rem', lineHeight: 1.5, marginTop: '0.2rem', marginBottom: 0 }}>{project.problem}</p>
                </div>
                <div>
                  <span style={{ color: '#aaa', fontFamily: 'var(--font-code)', fontSize: '0.7rem', textTransform: 'uppercase' }}>[ Solution ]</span>
                  <p style={{ color: '#ccc', fontSize: '0.85rem', lineHeight: 1.5, marginTop: '0.2rem', marginBottom: 0 }}>{project.solution}</p>
                </div>
              </div>

              {/* Tech tags */}
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {project.tags.map(tag => (
                  <span key={tag} style={{ padding: '2px 8px', background: 'rgba(255,255,255,0.03)', border: '1px solid rgba(255,255,255,0.05)', color: '#999', fontSize: '0.7rem', letterSpacing: '1px', borderRadius: '40px', textTransform: 'uppercase' }}>
                    {tag}
                  </span>
                ))}
              </div>

              {/* Actions row */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '1.5rem', marginTop: '0.5rem' }}>
                <button 
                  onClick={() => setSelectedCaseStudy(project)}
                  style={{
                    padding: '0.5rem 1.2rem',
                    background: 'transparent',
                    border: '1px solid rgba(255,255,255,0.2)',
                    borderRadius: '20px',
                    color: '#fff',
                    fontSize: '0.75rem',
                    fontFamily: 'var(--font-code)',
                    fontWeight: 'bold',
                    cursor: 'pointer',
                    transition: 'all 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.borderColor = '#fff'}
                  onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                >
                  CASE STUDY
                </button>
                <div style={{ display: 'flex', gap: '0.8rem', alignItems: 'center' }}>
                  <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.3s' }}>
                    <FaGithub />
                  </a>
                  <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: '#000', background: '#fff', fontSize: '1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '36px', height: '36px', borderRadius: '50%', transition: 'all 0.3s' }}>
                    <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

      </div>

      {/* Fullscreen Case Study Modal Overlay */}
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
              background: 'rgba(5, 5, 5, 0.98)',
              backdropFilter: 'blur(30px)',
              zIndex: 9999,
              display: 'flex',
              justifyContent: 'center',
              alignItems: 'start',
              overflowY: 'auto',
              padding: '4rem 2rem',
              pointerEvents: 'auto'
            }}
            onClick={() => setSelectedCaseStudy(null)}
          >
            <motion.div
              initial={{ scale: 0.95, y: 30, opacity: 0 }}
              animate={{ scale: 1, y: 0, opacity: 1 }}
              exit={{ scale: 0.95, y: 30, opacity: 0 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
              style={{
                width: '100%',
                maxWidth: '950px',
                background: '#090a0c',
                border: '1px solid rgba(255, 255, 255, 0.1)',
                borderRadius: '20px',
                padding: '3rem',
                position: 'relative',
                boxShadow: '0 20px 50px rgba(0,0,0,0.8)',
                marginBottom: '4rem'
              }}
              onClick={(e) => e.stopPropagation()}
              className="case-study-modal"
            >
              {/* Close Button */}
              <button
                onClick={() => setSelectedCaseStudy(null)}
                style={{
                  position: 'absolute',
                  top: '2rem',
                  right: '2rem',
                  background: 'transparent',
                  border: 'none',
                  color: '#666',
                  fontSize: '1.5rem',
                  cursor: 'pointer',
                  transition: 'color 0.3s',
                  zIndex: 10
                }}
                onMouseEnter={(e) => e.target.style.color = '#fff'}
                onMouseLeave={(e) => e.target.style.color = '#666'}
              >
                <FaTimes />
              </button>

              {/* Header */}
              <div style={{ borderBottom: '1px solid rgba(255,255,255,0.08)', paddingBottom: '2rem', marginBottom: '2.5rem' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem', flexWrap: 'wrap' }}>
                   <span style={{ color: '#fff', fontFamily: 'var(--font-code)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                      [ CASE STUDY DOSSIER ]
                   </span>
                   <span style={{
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-code)',
                      background: 'rgba(255, 255, 255, 0.05)',
                      border: '1px solid rgba(255, 255, 255, 0.2)',
                      color: '#fff',
                      padding: '2px 8px',
                      borderRadius: '4px',
                      textTransform: 'uppercase',
                      letterSpacing: '1px',
                      fontWeight: 'bold'
                   }}>
                      {selectedCaseStudy.status}
                   </span>
                 </div>
                 <h3 style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', fontWeight: '900', color: '#fff', fontFamily: 'var(--font-display)', marginTop: '0.5rem', textTransform: 'uppercase', letterSpacing: '-1px' }}>
                    {selectedCaseStudy.title}
                 </h3>
                 <p style={{ color: '#888', fontFamily: 'var(--font-code)', fontSize: '1rem', marginTop: '0.2rem' }}>
                    {selectedCaseStudy.subtitle}
                 </p>
              </div>

              {/* Simulated UI Mockup Frame */}
              <div style={{
                  width: '100%',
                  height: '320px',
                  background: 'linear-gradient(135deg, #111 0%, #000 100%)',
                  border: '1px solid rgba(255, 255, 255, 0.05)',
                  borderRadius: '12px',
                  marginBottom: '2.5rem',
                  position: 'relative',
                  overflow: 'hidden',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center'
              }}>
                  <div style={{ position: 'absolute', inset: 0, opacity: 0.05, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '20px 20px' }} />
                  <div style={{ position: 'absolute', top: '1rem', left: '1rem', display: 'flex', gap: '0.4rem' }}>
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ff5f56' }} />
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#ffbd2e' }} />
                      <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#27c93f' }} />
                  </div>
                  
                  <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem' }}>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: '#888', textTransform: 'uppercase', letterSpacing: '2px' }}>
                          [ ARCHITECTURE & VIEWPORT INTERFACE ]
                      </span>
                      <h5 style={{ fontSize: '2rem', fontWeight: 'bold', color: '#fff', fontFamily: 'var(--font-display)', marginTop: '0.5rem', textTransform: 'uppercase' }}>
                          {selectedCaseStudy.title}
                      </h5>
                      <p style={{ color: '#555', fontFamily: 'var(--font-code)', fontSize: '0.75rem', marginTop: '0.5rem', letterSpacing: '1px' }}>
                          SYSTEM: COMPILING // FRAMEWORK: MERN_CORE // LATENCY: 22ms
                      </p>
                  </div>
              </div>

              {/* Overview */}
              <div style={{ marginBottom: '2.5rem' }}>
                 <h4 style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-display)', marginBottom: '0.8rem', letterSpacing: '1px' }}>OVERVIEW</h4>
                 <p style={{ color: '#ccc', fontSize: '1rem', lineHeight: 1.7 }}>
                    {selectedCaseStudy.caseStudy.summary}
                 </p>
              </div>

              {/* Problem / Solution Grid */}
              <div className="modal-grid-2" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2.5rem' }}>
                 <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '10px' }}>
                    <span style={{ color: '#ff4444', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: 'bold' }}>[ CORE CHALLENGE ]</span>
                    <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6, marginTop: '0.8rem', marginBottom: 0 }}>{selectedCaseStudy.caseStudy.problem || selectedCaseStudy.problem}</p>
                 </div>
                 <div style={{ background: 'rgba(255,255,255,0.01)', border: '1px solid rgba(255,255,255,0.05)', padding: '1.5rem', borderRadius: '10px' }}>
                    <span style={{ color: '#fff', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: 'bold' }}>[ RESOLUTION PATHWAY ]</span>
                    <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6, marginTop: '0.8rem', marginBottom: 0 }}>{selectedCaseStudy.caseStudy.solution || selectedCaseStudy.solution}</p>
                 </div>
              </div>

              {/* Research Section */}
              {selectedCaseStudy.caseStudy.research && (
                <div style={{ marginBottom: '2.5rem' }}>
                   <h4 style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-display)', marginBottom: '0.8rem', letterSpacing: '1px' }}>RESEARCH & DISCOVERY</h4>
                   <p style={{ color: '#aaa', fontSize: '1rem', lineHeight: 1.7 }}>
                      {selectedCaseStudy.caseStudy.research}
                   </p>
                </div>
              )}

              {/* Systems Architecture */}
              <div style={{ marginBottom: '2.5rem' }}>
                 <h4 style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-display)', marginBottom: '0.8rem', letterSpacing: '1px' }}>SYSTEMS ARCHITECTURE</h4>
                 <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {selectedCaseStudy.caseStudy.architecture}
                 </p>
              </div>

              {/* Engineering Obstacles */}
              <div style={{ marginBottom: '2.5rem' }}>
                 <h4 style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-display)', marginBottom: '0.8rem', letterSpacing: '1px' }}>ENGINEERING OBSTACLES</h4>
                 <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6 }}>
                    {selectedCaseStudy.caseStudy.challenges}
                 </p>
              </div>

              {/* Timeline Roadmap */}
              <div style={{ marginBottom: '2.5rem' }}>
                 <h4 style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-display)', marginBottom: '1.2rem', letterSpacing: '1px' }}>FUTURE ROADMAP</h4>
                 <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', borderLeft: '1px solid rgba(255,255,255,0.1)', paddingLeft: '1.5rem', marginLeft: '0.5rem' }}>
                    {selectedCaseStudy.caseStudy.roadmap.map((step, idx) => (
                       <div key={idx} style={{ position: 'relative' }}>
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#fff', position: 'absolute', left: '-1.85rem', top: '0.45rem' }}></span>
                          <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: 1.5, margin: 0 }}>{step}</p>
                       </div>
                    ))}
                 </div>
              </div>

              {/* Lessons Learned */}
              {selectedCaseStudy.caseStudy.lessonsLearned && (
                <div style={{ marginBottom: '2.5rem' }}>
                   <h4 style={{ color: '#fff', fontSize: '1.2rem', fontFamily: 'var(--font-display)', marginBottom: '1.2rem', letterSpacing: '1px' }}>LESSONS LEARNED</h4>
                   <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      {selectedCaseStudy.caseStudy.lessonsLearned.map((lesson, idx) => (
                         <div key={idx} style={{ background: 'rgba(255,255,255,0.01)', borderLeft: '3px solid #fff', padding: '1rem 1.5rem', borderRadius: '0 8px 8px 0' }}>
                            <p style={{ color: '#ccc', fontSize: '0.95rem', lineHeight: 1.6, margin: 0 }}>{lesson}</p>
                         </div>
                      ))}
                   </div>
                </div>
              )}

              {/* Tech Stack Matrix */}
              <div style={{ marginBottom: '3rem' }}>
                 <h5 style={{ color: '#555', fontFamily: 'var(--font-code)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '2px', marginBottom: '1rem' }}>
                    [ TECHNOLOGY MATRIX ]
                 </h5>
                 <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                    {(selectedCaseStudy.caseStudy.techStack || selectedCaseStudy.tags).map(tag => (
                       <span key={tag} style={{ padding: '6px 16px', background: 'rgba(255,255,255,0.04)', border: '1px solid rgba(255,255,255,0.08)', color: '#fff', fontSize: '0.8rem', letterSpacing: '1px', borderRadius: '40px', textTransform: 'uppercase' }}>
                         {tag}
                       </span>
                    ))}
                 </div>
              </div>

              {/* CTAs */}
              <div style={{ display: 'flex', gap: '1.5rem', borderTop: '1px solid rgba(255,255,255,0.08)', paddingTop: '2rem' }} className="modal-ctas">
                 <a
                    href={selectedCaseStudy.live}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{
                       flex: 1,
                       padding: '1rem',
                       background: '#fff',
                       color: '#000',
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
                       border: '1px solid rgba(255, 255, 255, 0.1)',
                       color: '#fff',
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
                    onMouseEnter={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.3)'}
                    onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.1)'}
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

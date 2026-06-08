import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaGithub, FaExternalLinkAlt, FaTimes } from 'react-icons/fa';
import { PROJECTS } from '../constants';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [selectedCaseStudy, setSelectedCaseStudy] = useState(null);

  // Pad numbers with leading zero
  const formatIndex = (i) => (i < 9 ? `0${i + 1}` : i + 1);

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
      
      {/* Fixed Ambient Image Preview */}
      <div style={{
          position: 'absolute',
          top: '50%',
          right: '10%',
          transform: 'translateY(-50%)',
          width: '40vw',
          height: '60vh',
          zIndex: 0,
          pointerEvents: 'none',
          opacity: 0.15,
          filter: 'grayscale(100%) contrast(150%) brightness(0.5)',
          transition: 'all 0.8s cubic-bezier(0.16, 1, 0.3, 1)',
      }}>
          <AnimatePresence mode="wait">
            {hoveredIndex !== null && (
                <motion.img
                  key={hoveredIndex}
                  src={PROJECTS[hoveredIndex].image}
                  initial={{ opacity: 0, x: 50, scale: 1.1 }}
                  animate={{ opacity: 1, x: 0, scale: 1 }}
                  exit={{ opacity: 0, x: -50, scale: 0.9 }}
                  transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                  style={{
                      width: '100%',
                      height: '100%',
                      objectFit: 'cover',
                      borderRadius: '20px',
                  }}
                />
            )}
          </AnimatePresence>
      </div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '8rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
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

        {/* The List Layout */}
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {PROJECTS.map((project, index) => {
            const isFlagship = index === 0; // OpenBridge
            const isHovered = hoveredIndex === index;
            const isExpanded = isHovered || isFlagship;
            
            return (
              <motion.div 
                key={index}
                onMouseEnter={() => setHoveredIndex(index)}
                onMouseLeave={() => setHoveredIndex(null)}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: '-100px' }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  padding: '4rem 0',
                  borderBottom: isFlagship ? 'none' : '1px solid',
                  borderColor: isExpanded ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.05)',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.4s ease',
                  background: isFlagship ? 'rgba(0, 230, 254, 0.01)' : 'transparent',
                  border: isFlagship ? '1px solid rgba(0, 230, 254, 0.1)' : 'none',
                  paddingLeft: isFlagship ? '2rem' : '0',
                  paddingRight: isFlagship ? '2rem' : '0',
                  borderRadius: isFlagship ? '15px' : '0',
                  marginBottom: isFlagship ? '2rem' : '0',
                  boxShadow: isFlagship ? '0 10px 30px rgba(0,0,0,0.5)' : 'none'
                }}
                className="project-row-container"
              >
                 {/* Top Row for Title and Index */}
                 <div style={{ display: 'flex', alignItems: 'center', width: '100%' }} className="project-row-header">
                     {/* Index Number */}
                     <div style={{ flex: '0 0 100px', fontSize: '1.2rem', color: isExpanded ? '#fff' : '#444', fontFamily: 'var(--font-code)', transition: 'color 0.4s' }}>
                        {formatIndex(index)}
                     </div>

                     {/* Title & Subtitle */}
                     <div style={{ flex: '1' }}>
                        <div style={{ display: 'flex', alignItems: 'center', flexWrap: 'wrap' }}>
                          <motion.h3 
                              animate={{ x: isHovered ? 20 : 0 }}
                              transition={{ ease: "easeOut", duration: 0.4 }}
                              style={{ 
                                fontSize: 'clamp(2rem, 5vw, 6rem)', 
                                fontWeight: '800', 
                                color: isExpanded ? '#fff' : '#666', 
                                margin: 0, 
                                fontFamily: 'var(--font-display)',
                                letterSpacing: '-2px',
                                textTransform: 'uppercase',
                                lineHeight: 1
                              }}
                          >
                              {project.title}
                          </motion.h3>
                          
                          {/* Project Status Badge */}
                          <span style={{
                              fontSize: '0.65rem',
                              fontFamily: 'var(--font-code)',
                              background: project.status === 'Completed' ? 'rgba(255, 255, 255, 0.05)' : 'rgba(0, 230, 254, 0.1)',
                              border: `1px solid ${project.status === 'Completed' ? 'rgba(255, 255, 255, 0.2)' : 'var(--accent-cyber)'}`,
                              color: project.status === 'Completed' ? '#fff' : 'var(--accent-cyber)',
                              padding: '4px 10px',
                              borderRadius: '20px',
                              marginLeft: '1.5rem',
                              textTransform: 'uppercase',
                              letterSpacing: '1px',
                              fontWeight: 'bold',
                              display: 'inline-block',
                              marginTop: '0.5rem'
                          }}>
                              {project.status}
                          </span>

                          {isFlagship && (
                            <span style={{
                                fontSize: '0.65rem',
                                fontFamily: 'var(--font-code)',
                                background: 'rgba(255, 255, 255, 0.9)',
                                color: '#000',
                                padding: '4px 10px',
                                borderRadius: '20px',
                                marginLeft: '1rem',
                                textTransform: 'uppercase',
                                letterSpacing: '1px',
                                fontWeight: 'bold',
                                display: 'inline-block',
                                marginTop: '0.5rem'
                            }}>
                                Flagship Project
                            </span>
                          )}
                        </div>
                     </div>

                     {/* Action Buttons */}
                     <div className="project-row-actions" style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}>
                         <motion.div 
                            initial={{ opacity: 0 }}
                            animate={{ opacity: isExpanded ? 1 : 0 }}
                            transition={{ duration: 0.3 }}
                            style={{ display: 'flex', gap: '1rem', alignItems: 'center' }}
                         >
                              <button 
                                 onClick={(e) => {
                                     e.stopPropagation();
                                     setSelectedCaseStudy(project);
                                 }}
                                 style={{
                                     padding: '0.6rem 1.2rem',
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
                                 onMouseEnter={(e) => e.target.style.borderColor = 'var(--accent-cyber)'}
                                 onMouseLeave={(e) => e.target.style.borderColor = 'rgba(255,255,255,0.2)'}
                              >
                                 CASE STUDY
                              </button>
                              <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.3rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.3s' }}>
                                 <FaGithub />
                              </a>
                              <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: '#000', background: '#fff', fontSize: '1.1rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '40px', height: '40px', borderRadius: '50%', transition: 'all 0.3s' }}>
                                 <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                              </a>
                         </motion.div>
                     </div>
                 </div>

                 {/* Meta Info (Tags & Desc) - Reveals gracefully */}
                 <motion.div
                     initial={{ height: isFlagship ? 'auto' : 0, opacity: isFlagship ? 1 : 0 }}
                     animate={{ height: isExpanded ? 'auto' : 0, opacity: isExpanded ? 1 : 0 }}
                     transition={{ duration: 0.4, ease: "easeOut" }}
                     style={{ overflow: 'hidden', width: '100%', maxWidth: '1000px', paddingLeft: isFlagship ? '100px' : '100px', marginTop: isExpanded ? '2rem' : 0 }}
                     className="project-drawer-content"
                 >
                    {/* Dossier Subtitle */}
                    <p style={{ color: 'var(--accent-cyber)', fontFamily: 'var(--font-code)', fontSize: '0.85rem', letterSpacing: '1px', textTransform: 'uppercase', margin: '0.5rem 0' }}>
                       {project.subtitle}
                    </p>

                    {/* Problem & Solution columns */}
                    <div className="project-drawer-grid" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '1.5rem', marginTop: '1.5rem' }}>
                       <div>
                          <span style={{ color: '#ff5555', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }}>[ PROBLEM ]</span>
                          <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.5, marginTop: '0.4rem' }}>{project.problem}</p>
                       </div>
                       <div>
                          <span style={{ color: 'var(--accent-cyber)', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', textTransform: 'uppercase' }}>[ SOLUTION ]</span>
                          <p style={{ color: '#aaa', fontSize: '0.9rem', lineHeight: 1.5, marginTop: '0.4rem' }}>{project.solution}</p>
                       </div>
                    </div>

                    {/* Metrics block */}
                    <div style={{ display: 'flex', gap: '2.5rem', flexWrap: 'wrap', marginBottom: '1.5rem', background: 'rgba(255,255,255,0.02)', padding: '1rem 1.5rem', borderRadius: '10px', border: '1px solid rgba(255,255,255,0.05)' }}>
                       {Object.entries(project.metrics).map(([key, val]) => (
                          <div key={key}>
                             <span style={{ color: '#666', fontFamily: 'var(--font-code)', fontSize: '0.7rem', textTransform: 'uppercase', letterSpacing: '1px' }}>{key}</span>
                             <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 'bold', fontFamily: 'var(--font-display)', marginTop: '0.2rem' }}>{val}</p>
                          </div>
                       ))}
                    </div>

                    {/* Highlights list */}
                    {project.highlights && (
                      <ul style={{ 
                          color: '#999', 
                          fontSize: '0.9rem', 
                          lineHeight: '1.6', 
                          marginBottom: '1.5rem', 
                          paddingLeft: '20px', 
                          listStyleType: 'square',
                          display: 'flex',
                          flexDirection: 'column',
                          gap: '0.4rem',
                          fontFamily: 'var(--font-main)'
                      }}>
                         {project.highlights.map((highlight, idx) => (
                            <li key={idx}>{highlight}</li>
                         ))}
                      </ul>
                    )}

                    {/* Tech Badges */}
                    <div style={{ display: 'flex', gap: '0.6rem', flexWrap: 'wrap' }}>
                       {project.tags.map(tag => (
                          <span key={tag} style={{ padding: '4px 12px', background: 'rgba(255,255,255,0.06)', border: '1px solid rgba(255,255,255,0.1)', color: '#ccc', fontSize: '0.75rem', letterSpacing: '1px', borderRadius: '40px', textTransform: 'uppercase' }}>
                            {tag}
                          </span>
                       ))}
                    </div>
                 </motion.div>
              </motion.div>
            );
          })}
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
              background: 'rgba(5, 5, 5, 0.97)',
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
                   <span style={{ color: 'var(--accent-cyber)', fontFamily: 'var(--font-code)', fontSize: '0.8rem', letterSpacing: '2px', textTransform: 'uppercase' }}>
                      [ CASE STUDY DOSSIER ]
                   </span>
                   <span style={{
                      fontSize: '0.65rem',
                      fontFamily: 'var(--font-code)',
                      background: 'rgba(0, 230, 254, 0.1)',
                      border: '1px solid var(--accent-cyber)',
                      color: 'var(--accent-cyber)',
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
                  background: 'linear-gradient(135deg, #090a0c 0%, #000000 100%)',
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
                  <div style={{ position: 'absolute', bottom: '-20px', right: '-20px', width: '300px', height: '200px', background: 'rgba(0, 230, 254, 0.02)', filter: 'blur(40px)', borderRadius: '50%' }} />
                  
                  <div style={{ position: 'relative', zIndex: 1, textAlign: 'center', padding: '2rem' }}>
                      <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: 'var(--accent-cyber)', textTransform: 'uppercase', letterSpacing: '2px' }}>
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
                 <div style={{ background: 'rgba(255,68,68,0.02)', border: '1px solid rgba(255,68,68,0.08)', padding: '1.5rem', borderRadius: '10px' }}>
                    <span style={{ color: '#ff4444', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: 'bold' }}>[ CORE CHALLENGE ]</span>
                    <p style={{ color: '#aaa', fontSize: '0.95rem', lineHeight: 1.6, marginTop: '0.8rem', marginBottom: 0 }}>{selectedCaseStudy.caseStudy.problem || selectedCaseStudy.problem}</p>
                 </div>
                 <div style={{ background: 'rgba(0,230,254,0.02)', border: '1px solid rgba(0,230,254,0.08)', padding: '1.5rem', borderRadius: '10px' }}>
                    <span style={{ color: 'var(--accent-cyber)', fontFamily: 'var(--font-code)', fontSize: '0.75rem', letterSpacing: '1px', fontWeight: 'bold' }}>[ RESOLUTION PATHWAY ]</span>
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
                          <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyber)', position: 'absolute', left: '-1.85rem', top: '0.45rem' }}></span>
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
                         <div key={idx} style={{ background: 'rgba(255,255,255,0.01)', borderLeft: '3px solid var(--accent-cyber)', padding: '1rem 1.5rem', borderRadius: '0 8px 8px 0' }}>
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
                       border: '1px solid rgba(255,255,255,0.1)',
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

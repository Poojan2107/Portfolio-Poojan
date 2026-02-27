import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaArrowRight, FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import { PROJECTS } from '../constants';

const Projects = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null);

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
      
      {/* Fixed Ambient Image Preview - More Sophisticated and Less Cluttered */}
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
            const isHovered = hoveredIndex === index;
            
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
                  alignItems: 'center',
                  padding: '4rem 0',
                  borderBottom: '1px solid',
                  borderColor: isHovered ? 'rgba(255,255,255,0.4)' : 'rgba(255,255,255,0.05)',
                  cursor: 'pointer',
                  position: 'relative',
                  transition: 'all 0.4s ease'
                }}
                className="group"
              >
                 {/* Index Number */}
                 <div style={{ flex: '0 0 100px', fontSize: '1.2rem', color: isHovered ? '#fff' : '#444', fontFamily: 'var(--font-code)', transition: 'color 0.4s' }}>
                   {formatIndex(index)}
                 </div>

                 {/* Title & Description Container */}
                 <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                    <motion.h3 
                        animate={{ x: isHovered ? 20 : 0 }}
                        transition={{ ease: "easeOut", duration: 0.4 }}
                        style={{ 
                          fontSize: 'clamp(2rem, 5vw, 6rem)', 
                          fontWeight: '800', 
                          color: isHovered ? '#fff' : '#666', 
                          margin: 0, 
                          fontFamily: 'var(--font-display)',
                          letterSpacing: '-2px',
                          textTransform: 'uppercase',
                          lineHeight: 1
                        }}
                    >
                        {project.title}
                    </motion.h3>

                    {/* Meta Info (Tags & Desc) - Reveals gracefully */}
                    <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: isHovered ? 'auto' : 0, opacity: isHovered ? 1 : 0 }}
                        transition={{ duration: 0.4, ease: "easeOut" }}
                        style={{ overflow: 'hidden', maxWidth: '800px', paddingLeft: isHovered ? '20px' : '0px' }}
                    >
                       <p style={{ color: '#aaa', fontSize: '1.1rem', lineHeight: 1.6, marginBottom: '2rem', marginTop: '1rem' }}>
                          {project.description}
                       </p>
                       <div style={{ display: 'flex', gap: '0.8rem', flexWrap: 'wrap' }}>
                          {project.tags.map(tag => (
                             <span key={tag} style={{ padding: '6px 16px', background: 'rgba(255,255,255,0.1)', color: '#fff', fontSize: '0.8rem', letterSpacing: '1px', borderRadius: '40px', textTransform: 'uppercase' }}>
                               {tag}
                             </span>
                          ))}
                       </div>
                    </motion.div>
                 </div>

                 {/* Actions */}
                 <div style={{ flex: '0 0 200px', display: 'flex', justifyContent: 'flex-end', alignItems: 'center', gap: '2rem' }}>
                     <motion.div 
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: isHovered ? 1 : 0, x: isHovered ? 0 : -20 }}
                        transition={{ duration: 0.3 }}
                        style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}
                     >
                         <a href={project.github} target="_blank" rel="noopener noreferrer" style={{ color: '#fff', fontSize: '1.5rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '50%', border: '1px solid rgba(255,255,255,0.2)', transition: 'all 0.3s' }}>
                            <FaGithub />
                         </a>
                         <a href={project.live} target="_blank" rel="noopener noreferrer" style={{ color: '#000', background: '#fff', fontSize: '1.2rem', display: 'flex', alignItems: 'center', justifyContent: 'center', width: '50px', height: '50px', borderRadius: '50%', transition: 'all 0.3s' }}>
                            <FaArrowRight style={{ transform: 'rotate(-45deg)' }} />
                         </a>
                     </motion.div>
                 </div>

              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Projects;

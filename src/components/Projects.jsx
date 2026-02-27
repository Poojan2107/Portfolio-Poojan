import React, { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTerminal, FaCampground, FaLanguage, FaBrain } from 'react-icons/fa';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';

const ProjectCard = ({ project, index, activeTech }) => {
  const [hovered, setHovered] = useState(false);

  // Check if this project uses the active tech
  const isMatch = activeTech && project.tags.includes(activeTech.name);
  
  return (
    <motion.div
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-50px" }}
      className="dapper-card"
      style={{
        marginBottom: '6rem',
        background: '#0a0a0a',
        border: hovered ? '1px solid #fff' : '1px solid #222',
        display: 'grid',
        gridTemplateColumns: index % 2 === 0 ? '1.2fr 1fr' : '1fr 1.2fr', // Alternating layout
        gap: '0',
        minHeight: '450px',
        position: 'relative',
        transition: 'all 0.4s ease'
      }}
    >
      {/* Swap Order based on index */}
      {index % 2 !== 0 && (
         <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', borderRight: '1px solid #222' }}>
            <ProjectContent project={project} isMatch={isMatch} activeTech={activeTech} />
         </div>
      )}

      {/* Image / Graphic Section */}
      <div style={{ 
        position: 'relative', 
        overflow: 'hidden',
        background: '#050505',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        borderLeft: index % 2 !== 0 ? 'none' : '1px solid #222',
        borderRight: index % 2 === 0 ? 'none' : '1px solid #222'
      }}>
         {/* Grayscale Filter overlay or styled abstract graphic */}
         <div style={{
            position: 'absolute',
            top: 0, left: 0, width: '100%', height: '100%',
            background: hovered ? 'radial-gradient(circle, rgba(255,255,255,0.05) 0%, transparent 60%)' : 'none',
            transition: 'background 0.5s'
         }}></div>
         
         <motion.div
           animate={hovered ? { scale: 1.05 } : { scale: 1 }}
           transition={{ duration: 0.6 }}
           style={{ color: hovered ? '#fff' : '#333', fontSize: '5rem', transition: 'color 0.4s' }}
         >
           {/* Abstract Icon Placeholder if no image */}
           {index === 0 ? <FaBrain /> : index === 1 ? <FaTerminal /> : index === 2 ? <FaCampground /> : <FaLanguage />}
         </motion.div>
         
         <div style={{ position: 'absolute', bottom: '2rem', right: '2rem', fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: '#444' }}>
            PRJ_0{index + 1}
         </div>
      </div>

      {index % 2 === 0 && (
         <div style={{ padding: '4rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
            <ProjectContent project={project} isMatch={isMatch} activeTech={activeTech} />
         </div>
      )}
    </motion.div>
  );
};

const ProjectContent = ({ project, isMatch, activeTech }) => (
  <>
    <div style={{ marginBottom: '1.5rem' }}>
       <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.8rem', color: '#666', letterSpacing: '0.1em' }}>FEATURED WORK</span>
       <h3 style={{ fontSize: '2.5rem', fontWeight: '800', margin: '0.5rem 0', color: '#fff', lineHeight: 1.1 }}>
         {project.title.toUpperCase()}
       </h3>
    </div>
    
    <p style={{ color: 'var(--text-secondary)', marginBottom: '2.5rem', fontSize: '1.1rem', lineHeight: '1.6' }}>
      {project.description}
    </p>
    
    <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '3rem' }}>
      {project.tags.map(tag => (
        <span key={tag} style={{ 
          fontSize: '0.8rem', 
          color: isMatch && tag === activeTech?.name ? '#fff' : '#888',
          borderBottom: isMatch && tag === activeTech?.name ? '1px solid #fff' : '1px solid transparent',
          paddingBottom: '2px',
          fontFamily: 'var(--font-code)',
          textTransform: 'uppercase'
        }}>
          {tag}
        </span>
      ))}
    </div>

    <div style={{ display: 'flex', gap: '2rem' }}>
      <a 
        href={project.github} 
        style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}
        className="hover-underline"
      >
        <FaGithub /> CODE
      </a>
      <a 
        href={project.live} 
        style={{ color: '#fff', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '0.5rem', fontWeight: '600' }}
        className="hover-underline"
      >
        <FaExternalLinkAlt /> LIVE
      </a>
    </div>
  </>
);

const Projects = ({ activeTech }) => {
  return (
    <section id="projects" className="section" style={{ position: 'relative', background: '#000' }}>
      <div className="container" style={{ maxWidth: '1200px' }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ marginBottom: '8rem', borderTop: '1px solid #333', paddingTop: '4rem' }}
        >
           <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
              <h2 style={{ fontSize: '4rem', fontWeight: '900', color: '#fff', margin: 0, letterSpacing: '-2px' }}>
                SELECTED<br/><span style={{ color: '#333' }}>WORKS</span>
              </h2>
              <div style={{ textAlign: 'right' }}>
                 <span style={{ fontSize: '1.5rem', fontWeight: 'bold', color: '#fff' }}>0{PROJECTS.length}</span>
              </div>
           </div>
        </motion.div>

        <div>
           {PROJECTS.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} activeTech={activeTech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

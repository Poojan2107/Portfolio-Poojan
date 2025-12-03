import React from 'react';
import { FaGithub, FaExternalLinkAlt, FaTerminal, FaCampground, FaLanguage } from 'react-icons/fa';
import { motion } from 'framer-motion';
import { PROJECTS } from '../constants';

const Projects = () => {
  const getProjectIcon = (index) => {
    switch(index) {
      case 0: return <FaTerminal />; // ProductNexus
      case 1: return <FaCampground />; // Travelling Tent
      case 2: return <FaLanguage />; // Translator
      default: return <FaGithub />;
    }
  };

  return (
    <section id="projects" className="section">
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '4rem' }}
        >
          <h2 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Featured <span className="gradient-text">Projects</span></h2>
          <p style={{ color: 'var(--text-secondary)' }}>Some of the best works I've built</p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {PROJECTS.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true, margin: "-100px" }}
              className="glass-card glow-on-hover"
              style={{ 
                display: 'flex', 
                flexDirection: index % 2 === 0 ? 'row' : 'row-reverse', // Zig-zag layout
                gap: '2rem',
                padding: '0',
                overflow: 'hidden',
                minHeight: '400px',
                alignItems: 'stretch'
              }}
            >
              {/* Image Section - Takes 50% width */}
              <div className="project-card-image" style={{ flex: 1, minWidth: '300px', position: 'relative' }}>
                <div 
                  className="project-thumb-gradient"
                  style={{
                    height: '100%',
                    background: index === 0 
                      ? 'linear-gradient(135deg, #000000 0%, #1a1a1a 100%)' 
                      : index === 1
                      ? 'linear-gradient(135deg, #134E5E 0%, #71B280 100%)' 
                      : 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
                    position: 'relative',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center'
                  }}
                >
                  <div className="tech-grid-pattern"></div>
                  <div className="thumb-icon" style={{ fontSize: '5rem' }}>
                    {getProjectIcon(index)}
                  </div>
                </div>
              </div>

              {/* Content Section - Takes 50% width */}
              <div style={{ flex: 1, padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center' }}>
                <h3 style={{ fontSize: '2.2rem', marginBottom: '1rem', color: 'var(--text-primary)' }}>{project.title}</h3>
                <p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.8' }}>{project.description}</p>
                
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2.5rem' }}>
                  {project.tags.map(tag => (
                    <span key={tag} style={{ 
                      fontSize: '0.9rem', 
                      padding: '0.5rem 1.2rem', 
                      borderRadius: '50px', 
                      background: 'rgba(255, 255, 255, 0.05)', 
                      border: '1px solid rgba(255, 255, 255, 0.1)',
                      color: 'var(--accent-primary)',
                      fontFamily: 'var(--font-code)'
                    }}>
                      {tag}
                    </span>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: '1.5rem' }}>
                  <a href={project.github} className="btn-outline" style={{ padding: '0.8rem 1.5rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', fontSize: '1rem' }}>
                    <FaGithub /> View Code
                  </a>
                  <a href={project.live} className="btn-primary" style={{ padding: '0.8rem 1.5rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', color: '#000', fontSize: '1rem' }}>
                    <FaExternalLinkAlt /> Live Demo
                  </a>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

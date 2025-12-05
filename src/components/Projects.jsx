import React, { useRef, useState } from 'react';
import { FaGithub, FaExternalLinkAlt, FaTerminal, FaCampground, FaLanguage } from 'react-icons/fa';
import { motion, useMotionValue, useSpring, useTransform } from 'framer-motion';
import { PROJECTS } from '../constants';

const Project3DCard = ({ project, index, activeTech }) => {
  const ref = useRef(null);
  const [hovered, setHovered] = useState(false);

  // Check if this project uses the active tech
  const isMatch = activeTech && project.tags.includes(activeTech.name);
  const isDimmed = activeTech && !isMatch;

  // Motion values for tilt effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["7deg", "-7deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-7deg", "7deg"]);

  // Glare effect movement
  const glareX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glareY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    setHovered(false);
    x.set(0);
    y.set(0);
  };

  const getProjectIcon = (idx) => {
    switch(idx) {
      case 0: return <FaTerminal />;
      case 1: return <FaCampground />;
      case 2: return <FaLanguage />;
      default: return <FaGithub />;
    }
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={handleMouseLeave}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
      viewport={{ once: true, margin: "-100px" }}
      style={{
        perspective: 1000,
        marginBottom: '5rem',
        opacity: isDimmed ? 0.3 : 1,
        scale: isMatch ? 1.05 : 1,
        transition: 'all 0.4s ease'
      }}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
          display: 'flex',
          flexDirection: index % 2 === 0 ? 'row' : 'row-reverse',
          background: 'rgba(20, 20, 20, 0.6)',
          border: isMatch ? `2px solid ${activeTech.color}` : '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '24px',
          minHeight: '450px',
          position: 'relative',
          boxShadow: isMatch 
            ? `0 0 40px ${activeTech.color}40` 
            : hovered 
              ? '0 25px 50px -12px rgba(0, 0, 0, 0.5)' 
              : '0 10px 30px -10px rgba(0, 0, 0, 0.3)'
        }}
        className="project-card-3d"
      >
        {/* Dynamic Glare Overlay */}
        <div style={{
          position: 'absolute',
          top: 0, left: 0, right: 0, bottom: 0,
          borderRadius: '24px',
          background: `radial-gradient(circle at ${hovered ? 'var(--mouse-x, 50%)' : '50%'} ${hovered ? 'var(--mouse-y, 50%)' : '50%'}, rgba(255,255,255,0.03) 0%, transparent 80%)`,
          pointerEvents: 'none',
          zIndex: 10
        }}></div>

        {/* --- IMAGE SECTION (Left/Right) --- */}
        <div style={{ flex: 1.2, minWidth: '300px', position: 'relative', overflow: 'hidden', borderRadius: index % 2 === 0 ? '24px 0 0 24px' : '0 24px 24px 0' }}>
          <motion.div 
            style={{ 
              height: '100%', 
              background: index === 0 
                ? 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)' 
                : index === 1
                ? 'linear-gradient(135deg, #134E5E 0%, #71B280 100%)' 
                : 'linear-gradient(135deg, #00c6ff 0%, #0072ff 100%)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              transformStyle: "preserve-3d",
              translateZ: "20px"
            }}
          >
            {/* Tech Pattern Overlay */}
            <div className="tech-grid-pattern" style={{ opacity: 0.3 }}></div>
            
            {/* Floating Icon */}
            <motion.div 
              style={{ 
                fontSize: '6rem', 
                color: 'rgba(255,255,255,0.9)',
                filter: 'drop-shadow(0 0 20px rgba(255,255,255,0.3))',
                transformStyle: "preserve-3d",
                translateZ: "60px"
              }}
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
            >
              {getProjectIcon(index)}
            </motion.div>
          </motion.div>
        </div>

        {/* --- CONTENT SECTION --- */}
        <div style={{ flex: 1, padding: '3rem', display: 'flex', flexDirection: 'column', justifyContent: 'center', transformStyle: "preserve-3d" }}>
            <motion.h3 style={{ fontSize: '2.5rem', marginBottom: '1rem', color: '#fff', fontWeight: '800', translateZ: "40px" }}>
              {project.title}
            </motion.h3>
            
            <motion.p style={{ color: 'var(--text-secondary)', marginBottom: '2rem', fontSize: '1.1rem', lineHeight: '1.6', translateZ: "30px" }}>
              {project.description}
            </motion.p>
            
            <motion.div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.8rem', marginBottom: '2.5rem', translateZ: "35px" }}>
              {project.tags.map(tag => (
                <span key={tag} style={{ 
                  fontSize: '0.85rem', 
                  padding: '0.5rem 1rem', 
                  borderRadius: '50px', 
                  background: isMatch && tag === activeTech.name ? activeTech.color : 'rgba(255, 255, 255, 0.05)', 
                  border: isMatch && tag === activeTech.name ? `1px solid ${activeTech.color}` : '1px solid rgba(255, 255, 255, 0.1)',
                  color: isMatch && tag === activeTech.name ? '#000' : 'var(--accent-primary)',
                  fontFamily: '"Fira Code", monospace',
                  fontWeight: '600',
                  boxShadow: isMatch && tag === activeTech.name ? `0 0 15px ${activeTech.color}` : 'none'
                }}>
                  {tag}
                </span>
              ))}
            </motion.div>

            <motion.div style={{ display: 'flex', gap: '1.5rem', translateZ: "50px" }}>
              <motion.a 
                href={project.github} 
                whileHover={{ scale: 1.05, z: 10 }}
                whileTap={{ scale: 0.95 }}
                className="btn-outline" 
                style={{ padding: '0.8rem 1.5rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', fontSize: '1rem' }}
              >
                <FaGithub /> Code
              </motion.a>
              <motion.a 
                href={project.live} 
                whileHover={{ scale: 1.05, z: 10 }}
                whileTap={{ scale: 0.95 }}
                className="btn-primary" 
                style={{ padding: '0.8rem 1.5rem', borderRadius: '50px', display: 'flex', alignItems: 'center', gap: '0.8rem', textDecoration: 'none', color: '#000', fontSize: '1rem', fontWeight: 'bold' }}
              >
                <FaExternalLinkAlt /> Live Demo
              </motion.a>
            </motion.div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Projects = ({ activeTech }) => {
  return (
    <section id="projects" className="section" style={{ position: 'relative', perspective: '2000px' }}>
      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '6rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '800' }}>
            FEATURED <span className="gradient-text">PROJECTS</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            A dimensional look at my digital creations.
          </p>
        </motion.div>

        <div>
          {PROJECTS.map((project, index) => (
            <Project3DCard key={index} project={project} index={index} activeTech={activeTech} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

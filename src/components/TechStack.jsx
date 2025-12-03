import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const MarqueeRow = ({ skills, direction = 1, speed = 20 }) => {
  return (
    <div style={{ display: 'flex', overflow: 'hidden', width: '100%', marginBottom: '2rem', maskImage: 'linear-gradient(to right, transparent, black 10%, black 90%, transparent)' }}>
      <motion.div
        initial={{ x: direction === 1 ? 0 : '-50%' }}
        animate={{ x: direction === 1 ? '-50%' : 0 }}
        transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
        style={{ display: 'flex', gap: '2rem', flexShrink: 0, paddingRight: '2rem' }}
      >
        {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
          <div 
            key={`${skill.name}-${index}`}
            className="glass-card"
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '1rem',
              padding: '1rem 2rem',
              background: 'rgba(255, 255, 255, 0.03)',
              border: '1px solid rgba(255, 255, 255, 0.05)',
              borderRadius: '50px',
              whiteSpace: 'nowrap',
              minWidth: 'max-content'
            }}
          >
            <span style={{ color: skill.color, fontSize: '1.5rem', display: 'flex' }}><skill.icon /></span>
            <span style={{ color: 'var(--text-primary)', fontWeight: '600', fontSize: '1.1rem' }}>{skill.name}</span>
          </div>
        ))}
      </motion.div>
    </div>
  );
};

const TechStack = () => {
  // Flatten skills for a mixed "Chaos" mode or keep categorized for structure.
  // Let's do categorized rows for structure but moving.
  
  return (
    <section id="skills" className="section" style={{ padding: '8rem 0', overflow: 'hidden', position: 'relative' }}>
       {/* Background Elements */}
       <div style={{
        position: 'absolute',
        top: '20%',
        right: '-10%',
        width: '600px',
        height: '600px',
        background: 'radial-gradient(circle, rgba(112, 0, 255, 0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />
      <div style={{
        position: 'absolute',
        bottom: '10%',
        left: '-10%',
        width: '500px',
        height: '500px',
        background: 'radial-gradient(circle, rgba(0, 242, 255, 0.05) 0%, transparent 70%)',
        filter: 'blur(80px)',
        pointerEvents: 'none'
      }} />

      <div className="container" style={{ marginBottom: '4rem', textAlign: 'center' }}>
        <motion.h2 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem' }}
        >
          TECH <span className="gradient-text">ECOSYSTEM</span>
        </motion.h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>Always moving, always evolving.</p>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
        <MarqueeRow skills={SKILL_CATEGORIES[0].skills} direction={1} speed={25} />
        <MarqueeRow skills={SKILL_CATEGORIES[1].skills} direction={-1} speed={30} />
        <MarqueeRow skills={SKILL_CATEGORIES[2].skills} direction={1} speed={20} />
      </div>
    </section>
  );
};

export default TechStack;

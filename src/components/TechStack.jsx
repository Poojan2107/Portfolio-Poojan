import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const PipelineRow = ({ title, skills, direction = 1, speed = 25, color }) => {
  return (
    <div style={{ 
      display: 'flex', 
      flexDirection: 'column', 
      marginBottom: '3rem',
      position: 'relative'
    }}>
      {/* Category Label */}
      <motion.div 
        initial={{ opacity: 0, x: -20 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        style={{ 
          marginBottom: '1rem', 
          display: 'flex', 
          alignItems: 'center', 
          gap: '1rem',
          paddingLeft: '1rem'
        }}
      >
        <div style={{ 
          width: '4px', 
          height: '24px', 
          background: color,
          boxShadow: `0 0 15px ${color}`
        }}></div>
        <h3 style={{ 
          fontSize: '1.5rem', 
          fontWeight: '700', 
          color: '#fff', 
          letterSpacing: '1px',
          textTransform: 'uppercase'
        }}>
          {title}
        </h3>
        <div style={{ height: '1px', flex: 1, background: `linear-gradient(to right, ${color}40, transparent)` }}></div>
      </motion.div>

      {/* Scrolling Track */}
      <div 
        className="glass-card"
        style={{ 
          overflow: 'hidden', 
          width: '100%', 
          padding: '1.5rem 0',
          background: 'rgba(20, 20, 20, 0.4)',
          border: '1px solid rgba(255, 255, 255, 0.05)',
          borderRadius: '16px',
          position: 'relative',
          maskImage: 'linear-gradient(to right, transparent, black 5%, black 95%, transparent)'
        }}
      >
        <motion.div
          initial={{ x: direction === 1 ? 0 : '-50%' }}
          animate={{ x: direction === 1 ? '-50%' : 0 }}
          transition={{ duration: speed, repeat: Infinity, ease: "linear" }}
          style={{ display: 'flex', gap: '2rem', flexShrink: 0, paddingLeft: '2rem' }}
        >
          {[...skills, ...skills, ...skills, ...skills].map((skill, index) => (
            <div 
              key={`${skill.name}-${index}`}
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.8rem',
                padding: '0.8rem 1.5rem',
                background: 'rgba(255, 255, 255, 0.03)',
                border: `1px solid ${skill.color}30`,
                borderRadius: '50px',
                whiteSpace: 'nowrap',
                minWidth: 'max-content',
                boxShadow: `0 0 10px ${skill.color}10`
              }}
            >
              <span style={{ color: skill.color, fontSize: '1.2rem', display: 'flex' }}><skill.icon /></span>
              <span style={{ color: 'var(--text-secondary)', fontWeight: '500', fontSize: '1rem' }}>{skill.name}</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
};

const TechStack = () => {
  return (
    <section id="skills" className="section" style={{ padding: '8rem 0', overflow: 'hidden', position: 'relative' }}>
       {/* Background Elements */}
       <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(0, 242, 255, 0.02) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            MY <span className="gradient-text">ARSENAL</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem' }}>
            Categorized proficiency across the full stack.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <PipelineRow 
            title="Frontend Architecture" 
            skills={SKILL_CATEGORIES[0].skills} 
            direction={1} 
            speed={30} 
            color="#61DAFB"
          />
          <PipelineRow 
            title="Backend & Database" 
            skills={SKILL_CATEGORIES[1].skills} 
            direction={-1} 
            speed={35} 
            color="#47A248"
          />
          <PipelineRow 
            title="DevOps & Tools" 
            skills={SKILL_CATEGORIES[2].skills} 
            direction={1} 
            speed={40} 
            color="#F05032"
          />
        </div>
      </div>
    </section>
  );
};

export default TechStack;

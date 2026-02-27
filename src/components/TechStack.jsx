import React, { useState } from 'react';
import { motion, AnimatePresence, useMotionValue, useSpring } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const SkillPill = ({ skill, categoryTitle, isHovered, onMouseEnter, onMouseLeave }) => {
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  
  const springX = useSpring(x, { stiffness: 150, damping: 15 });
  const springY = useSpring(y, { stiffness: 150, damping: 15 });

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;
    x.set((e.clientX - centerX) * 0.4);
    y.set((e.clientY - centerY) * 0.4);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
    onMouseLeave();
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseEnter={onMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{ 
        position: 'relative',
        x: springX,
        y: springY,
        display: 'flex', 
        alignItems: 'center', 
        gap: '1rem',
        padding: '1rem 2rem',
        border: '1px solid rgba(255, 255, 255, 0.1)',
        borderRadius: '50px',
        color: '#888',
        cursor: 'default',
        background: 'rgba(0,0,0,0.4)',
        backdropFilter: 'blur(10px)',
        zIndex: isHovered ? 10 : 1,
        willChange: 'transform'
      }}
    >
      <div style={{ fontSize: '1.5rem', color: 'var(--accent-primary)' }}>
        <skill.icon />
      </div>
      <span style={{ fontSize: '1.2rem', fontWeight: '600', letterSpacing: '1px' }}>
          {skill.name}
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, y: -60, scale: 1 }}
            exit={{ opacity: 0, scale: 0.8 }}
            style={{
              position: 'absolute',
              top: 0,
              left: '10%',
              background: '#111',
              border: '1px solid var(--accent-primary)',
              padding: '8px 12px',
              borderRadius: '4px',
              zIndex: 100,
              pointerEvents: 'none',
              width: '180px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.8)'
            }}
          >
             <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.6rem', color: 'var(--accent-primary)', display: 'flex', flexDirection: 'column', gap: '2px' }}>
                <span style={{ opacity: 0.5 }}>// SCANNING_METADATA...</span>
                <span>TYPE: {categoryTitle.replace(' ', '_')}</span>
                <span>EFFICIENCY: {(90 + Math.random() * 9).toFixed(1)}%</span>
                <span>READY: TRUE</span>
             </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

const TechStack = () => {
  const [hoveredSkill, setHoveredSkill] = useState(null);

  return (
    <section id="skills" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: 'var(--bg-secondary)', minHeight: 'auto' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', background: 'rgba(255,255,255,0.05)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
           <h2 style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', fontWeight: '900', color: '#fff', margin: 0, lineHeight: 0.8, fontFamily: 'var(--font-display)', letterSpacing: '-3px' }}>
              ARSENAL
           </h2>
           <span style={{ fontSize: '1.2rem', color: '#666', fontFamily: 'var(--font-code)', letterSpacing: '2px', textTransform: 'uppercase' }}>[ / Capabilities ]</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {SKILL_CATEGORIES.map((category, index) => (
            <motion.div 
              key={category.title}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '2rem' }}>
                <span style={{ fontSize: '2rem', color: '#333', fontWeight: '900', fontFamily: 'var(--font-code)' }}>0{index + 1}</span>
                <h3 style={{ fontSize: 'clamp(2rem, 4vw, 4rem)', fontWeight: '800', color: '#fff', margin: 0, letterSpacing: '-1px', textTransform: 'uppercase' }}>
                  {category.title}
                </h3>
              </div>
              
              <div style={{ 
                  display: 'flex', 
                  flexWrap: 'wrap', 
                  gap: '1.5rem', 
                  paddingLeft: 'clamp(1rem, 10vw, 6rem)',
                  maxWidth: '1200px'
              }}>
                {category.skills.map((skill) => (
                  <SkillPill 
                    key={skill.name} 
                    skill={skill} 
                    categoryTitle={category.title}
                    isHovered={hoveredSkill === skill.name}
                    onMouseEnter={() => setHoveredSkill(skill.name)}
                    onMouseLeave={() => setHoveredSkill(null)}
                  />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

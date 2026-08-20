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
        border: isHovered ? '1px solid #ffffff' : '1px solid rgba(255, 255, 255, 0.12)',
        borderRadius: '50px',
        color: isHovered ? '#ffffff' : '#cccccc',
        cursor: 'default',
        background: isHovered ? 'rgba(255, 255, 255, 0.08)' : '#0a0a0a',
        backdropFilter: 'blur(12px)',
        boxShadow: isHovered ? '0 0 25px rgba(255, 255, 255, 0.15)' : '0 4px 20px rgba(0,0,0,0.6)',
        transition: 'border-color 0.3s, background 0.3s, box-shadow 0.3s',
        zIndex: isHovered ? 10 : 1,
        willChange: 'transform'
      }}
    >
      <div style={{ fontSize: '1.5rem', color: '#ffffff', display: 'flex', alignItems: 'center' }}>
        <skill.icon />
      </div>
      <span style={{ fontSize: '1.1rem', fontWeight: '600', letterSpacing: '0.5px', color: '#ffffff' }}>
          {skill.name}
      </span>

      <AnimatePresence>
        {isHovered && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: -10 }}
            animate={{ opacity: 1, scale: 1, y: -65 }}
            exit={{ opacity: 0, scale: 0.95 }}
            style={{
              position: 'absolute',
              top: 0,
              left: '50%',
              transform: 'translateX(-50%)',
              background: '#0a0a0a',
              border: '1px solid rgba(255, 255, 255, 0.3)',
              padding: '12px 16px',
              borderRadius: '8px',
              zIndex: 100,
              pointerEvents: 'none',
              width: '280px',
              boxShadow: '0 10px 30px rgba(0,0,0,0.95), 0 0 15px rgba(255,255,255,0.08)'
            }}
          >
             <div style={{ fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: '#cccccc', display: 'flex', flexDirection: 'column', gap: '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', color: '#ffffff', fontWeight: 'bold' }}>
                   <span>// HUD_SCANNER</span>
                   <span>ACTIVE</span>
                </div>
                <div><span style={{ color: '#666666' }}>CATEGORY:</span> {categoryTitle.toUpperCase()}</div>
                <div><span style={{ color: '#666666' }}>CAPABILITY:</span> {skill.description || 'Production Core'}</div>
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
    <section id="skills" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: 'var(--bg-primary)', minHeight: 'auto' }}>
      <div style={{ position: 'absolute', top: 0, left: '50%', width: '1px', height: '100%', background: 'rgba(255,255,255,0.05)', zIndex: 0 }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1600px' }}>
        
        {/* Massive Header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.15)', paddingBottom: '2rem', marginBottom: '6rem' }}>
           <h2 style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', fontWeight: '900', color: '#ffffff', margin: 0, lineHeight: 0.8, fontFamily: 'var(--font-display)', letterSpacing: '-3px' }}>
              ARSENAL
           </h2>
           <span style={{ fontSize: '1.2rem', color: '#666666', fontFamily: 'var(--font-code)', letterSpacing: '2px', textTransform: 'uppercase' }}>[ / Core Tech Capabilities ]</span>
        </div>

        {/* Skill Category Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(360px, 1fr))', gap: '4rem' }}>
          {SKILL_CATEGORIES.map((category, catIdx) => (
            <motion.div 
              key={catIdx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.6, delay: catIdx * 0.1 }}
              style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}
            >
              <div style={{ borderLeft: '3px solid #ffffff', paddingLeft: '1rem' }}>
                <span style={{ fontSize: '0.75rem', fontFamily: 'var(--font-code)', color: '#666666', letterSpacing: '2px', textTransform: 'uppercase' }}>
                  // CATEGORY 0{catIdx + 1}
                </span>
                <h3 style={{ fontSize: '1.5rem', fontWeight: '800', color: '#ffffff', fontFamily: 'var(--font-display)', margin: '0.2rem 0 0 0', textTransform: 'uppercase', letterSpacing: '-1px' }}>
                  {category.title}
                </h3>
              </div>

              <div style={{ display: 'flex', flexWrap: 'wrap', gap: '1rem' }}>
                {category.skills.map((skill, skillIdx) => {
                  const skillId = `${catIdx}-${skillIdx}`;
                  return (
                    <SkillPill
                      key={skillIdx}
                      skill={skill}
                      categoryTitle={category.title}
                      isHovered={hoveredSkill === skillId}
                      onMouseEnter={() => setHoveredSkill(skillId)}
                      onMouseLeave={() => setHoveredSkill(null)}
                    />
                  );
                })}
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default TechStack;

import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const TechStack = ({ setActiveTech }) => {
  return (
    <section id="skills" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '10rem 0', background: 'var(--bg-primary)' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '6rem', borderBottom: '1px solid #333', paddingBottom: '2rem' }}>
          <div>
            <h2 style={{ fontSize: '4rem', fontWeight: '900', margin: 0, lineHeight: 1, letterSpacing: '-0.02em', color: '#fff' }}>
              TECH<br/><span style={{ color: '#444' }}>STACK</span>
            </h2>
          </div>
          <div style={{ textAlign: 'right', maxWidth: '300px' }}>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', margin: 0 }}>
              Precision tools for high-performance engineering.
            </p>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <div key={category.title}>
              <h3 style={{ fontSize: '1.2rem', fontWeight: '700', color: '#fff', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>
                // {category.title}
              </h3>
              
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fill, minmax(80px, 1fr))', gap: '2rem' }}>
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    onMouseEnter={() => setActiveTech({ name: skill.name, color: skill.color })}
                    onMouseLeave={() => setActiveTech(null)}
                    whileHover={{ y: -5 }}
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      gap: '0.8rem',
                      cursor: 'pointer'
                    }}
                  >
                    <div style={{ 
                      fontSize: '3rem', 
                      color: '#fff', 
                      opacity: 0.8,
                      transition: 'all 0.3s ease'
                    }}>
                      <skill.icon />
                    </div>
                    <span style={{ fontSize: '0.85rem', color: '#666', fontWeight: '500', fontFamily: 'var(--font-code)' }}>{skill.name}</span>
                  </motion.div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

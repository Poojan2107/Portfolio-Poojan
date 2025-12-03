import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.2
    }
  }
};

const itemVariants = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
    transition: { type: 'spring', stiffness: 100 }
  }
};

const TechStack = () => {
  return (
    <section id="skills" className="section section-highlight" style={{ background: 'var(--bg-secondary)', position: 'relative', overflow: 'hidden', padding: '6rem 0' }}>
      {/* Background Grid for Tech Feel */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.03) 1px, transparent 1px)',
        backgroundSize: '30px 30px',
        opacity: 0.5,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ fontSize: '3rem', marginBottom: '1rem', fontWeight: '800', letterSpacing: '-1px' }}>
            MY <span className="gradient-text" style={{ display: 'inline-block' }}>
              <motion.span
                initial={{ backgroundPosition: '0% 50%' }}
                animate={{ backgroundPosition: ['0% 50%', '100% 50%', '0% 50%'] }}
                transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                style={{ 
                  background: 'linear-gradient(to right, var(--accent-primary), var(--accent-secondary), var(--accent-primary))', 
                  WebkitBackgroundClip: 'text', 
                  backgroundClip: 'text', 
                  color: 'transparent',
                  backgroundSize: '200% auto'
                }}
              >
                TECH ARSENAL
              </motion.span>
            </span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.1rem', maxWidth: '600px', margin: '0 auto' }}>
            A comprehensive toolkit for building intelligent, high-performance web solutions.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '4rem' }}>
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <div key={category.title}>
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2rem' }}
              >
                <div style={{ height: '2px', width: '30px', background: 'var(--accent-primary)' }}></div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>{category.title}</h3>
              </motion.div>
              
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(150px, 1fr))', 
                  gap: '2rem' 
                }}
              >
                {category.skills.map((skill, index) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8, 
                      borderColor: skill.color, 
                      boxShadow: `0 10px 30px -10px ${skill.color}` 
                    }}
                    className="glass-card tech-card-wrapper"
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      padding: '2rem',
                      cursor: 'pointer',
                      border: '1px solid rgba(255,255,255,0.05)',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      background: 'rgba(20, 20, 20, 0.4)',
                      position: 'relative',
                      overflow: 'hidden'
                    }}
                  >
                    <motion.div 
                      animate={{ y: [0, -5, 0] }}
                      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut", delay: index * 0.2 }}
                      style={{ fontSize: '3rem', color: skill.color, marginBottom: '1rem', filter: `drop-shadow(0 0 15px ${skill.color}40)` }}
                    >
                      <skill.icon />
                    </motion.div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-secondary)' }}>{skill.name}</h4>
                    
                    {/* Hover Overlay */}
                    <div style={{
                      position: 'absolute',
                      top: 0, left: 0, width: '100%', height: '100%',
                      background: `radial-gradient(circle at center, ${skill.color}10 0%, transparent 70%)`,
                      opacity: 0,
                      transition: 'opacity 0.3s'
                    }} className="hover-glow"></div>
                  </motion.div>
                ))}
              </motion.div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TechStack;

import React from 'react';
import { motion } from 'framer-motion';
import { SKILL_CATEGORIES } from '../constants';

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
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
    <section id="skills" className="section" style={{ position: 'relative', overflow: 'hidden', padding: '8rem 0', background: 'var(--bg-secondary)' }}>
      {/* Ambient Background Glow */}
      <div style={{
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '100%',
        height: '100%',
        background: 'radial-gradient(circle at center, rgba(0, 242, 255, 0.03) 0%, transparent 70%)',
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 1 }}>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          style={{ textAlign: 'center', marginBottom: '5rem' }}
        >
          <h2 style={{ fontSize: '3.5rem', fontWeight: '800', marginBottom: '1rem' }}>
            TECH <span className="gradient-text">ARSENAL</span>
          </h2>
          <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            The comprehensive toolkit I use to architect digital realities.
          </p>
        </motion.div>

        <div style={{ display: 'flex', flexDirection: 'column', gap: '5rem' }}>
          {SKILL_CATEGORIES.map((category, catIndex) => (
            <div key={category.title}>
              {/* Category Title */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: catIndex * 0.1 }}
                viewport={{ once: true }}
                style={{ display: 'flex', alignItems: 'center', gap: '1rem', marginBottom: '2.5rem' }}
              >
                <div style={{ height: '3px', width: '40px', background: 'var(--accent-primary)', borderRadius: '2px' }}></div>
                <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: '#fff', margin: 0, letterSpacing: '0.5px' }}>
                  {category.title}
                </h3>
              </motion.div>
              
              {/* Skills Grid */}
              <motion.div 
                variants={containerVariants}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, margin: "-50px" }}
                style={{ 
                  display: 'grid', 
                  gridTemplateColumns: 'repeat(auto-fill, minmax(160px, 1fr))', 
                  gap: '2rem' 
                }}
              >
                {category.skills.map((skill) => (
                  <motion.div
                    key={skill.name}
                    variants={itemVariants}
                    whileHover={{ 
                      y: -8, 
                      borderColor: skill.color, 
                      boxShadow: `0 10px 30px -10px ${skill.color}40`,
                      background: 'rgba(255, 255, 255, 0.05)'
                    }}
                    className="glass-card"
                    style={{ 
                      display: 'flex', 
                      flexDirection: 'column', 
                      alignItems: 'center', 
                      justifyContent: 'center',
                      padding: '2rem',
                      cursor: 'default',
                      border: '1px solid rgba(255, 255, 255, 0.05)',
                      transition: 'all 0.3s cubic-bezier(0.25, 0.8, 0.25, 1)',
                      background: 'rgba(20, 20, 20, 0.6)',
                      position: 'relative',
                      overflow: 'hidden',
                      borderRadius: '20px',
                      boxShadow: '0 0 40px rgba(0,0,0,0.3)'
                    }}
                  >
                    <div style={{ 
                      fontSize: '3rem', 
                      color: skill.color, 
                      marginBottom: '1rem', 
                      filter: `drop-shadow(0 0 10px ${skill.color}30)`,
                      transition: 'transform 0.3s'
                    }}>
                      <skill.icon />
                    </div>
                    <h4 style={{ fontSize: '1.1rem', fontWeight: '600', color: 'var(--text-secondary)' }}>{skill.name}</h4>
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

import React from 'react';
import { motion } from 'framer-motion';
import { FaGraduationCap } from 'react-icons/fa';

const Education = () => {
  return (
    <section id="education" className="section" style={{ padding: '4rem 0', position: 'relative' }}>
        <div className="container">
            <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="glass-card"
                style={{
                    background: 'rgba(20, 20, 20, 0.6)',
                    border: '1px solid rgba(255, 255, 255, 0.05)',
                    borderRadius: '24px',
                    padding: '3rem',
                    position: 'relative',
                    overflow: 'hidden',
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'center',
                    gap: '2rem',
                    textAlign: 'center',
                     boxShadow: '0 0 40px rgba(0,0,0,0.3)'
                }}
            >
                {/* Decorative Background Elements */}
                <div style={{
                    position: 'absolute',
                    top: '-50%',
                    left: '-20%',
                    width: '500px',
                    height: '500px',
                    background: 'radial-gradient(circle, rgba(97, 218, 251, 0.05) 0%, transparent 70%)',
                    pointerEvents: 'none'
                }}></div>

                 <div style={{
                    width: '80px',
                    height: '80px',
                    borderRadius: '50%',
                    background: 'rgba(255, 255, 255, 0.03)',
                    border: '1px solid var(--accent-primary)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    fontSize: '2rem',
                    color: 'var(--accent-primary)',
                    boxShadow: '0 0 20px rgba(0, 242, 255, 0.2)'
                }}>
                    <FaGraduationCap />
                </div>

                <div>
                    <h2 style={{ fontSize: '2.5rem', fontWeight: '800', marginBottom: '0.5rem', color: '#fff' }}>EDUCATION</h2>
                    <div style={{ width: '60px', height: '3px', background: 'var(--accent-primary)', margin: '0 auto 2rem auto', borderRadius: '2px' }}></div>
                    
                    <h3 style={{ fontSize: '1.8rem', fontWeight: '700', color: 'var(--text-primary)', marginBottom: '0.5rem' }}>
                        B.Tech in Artificial Intelligence
                    </h3>
                    <p style={{ fontSize: '1.2rem', color: 'var(--accent-secondary)', fontWeight: '500', letterSpacing: '1px', marginBottom: '1.5rem', textTransform: 'uppercase' }}>
                        Gandhinagar Institute of Technology
                    </p>
                    
                     <div style={{ 
                        display: 'inline-flex', 
                        alignItems: 'center', 
                        gap: '0.5rem', 
                        background: 'rgba(255, 255, 255, 0.05)', 
                        padding: '0.5rem 1.5rem', 
                        borderRadius: '50px',
                        border: '1px solid rgba(255, 255, 255, 0.1)'
                    }}>
                        <span style={{ color: 'var(--text-secondary)', fontSize: '0.9rem', fontWeight: 'bold' }}>2024 - 2028</span>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: '#4ade80', boxShadow: '0 0 10px #4ade80' }}></span>
                        <span style={{ color: '#4ade80', fontSize: '0.8rem', fontWeight: 'bold', textTransform: 'uppercase' }}>Pursuing</span>
                    </div>
                </div>



            </motion.div>
        </div>
    </section>
  );
};

export default Education;

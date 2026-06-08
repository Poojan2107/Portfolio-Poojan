import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px' }}>
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          style={{
            border: '1px solid rgba(255, 255, 255, 0.1)',
            padding: '5rem 3rem',
            borderRadius: '15px',
            background: 'var(--bg-secondary)',
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            textAlign: 'center',
            gap: '2.5rem',
            position: 'relative'
          }}
        >
          {/* Subtle grid accent background */}
          <div style={{ position: 'absolute', inset: 0, opacity: 0.02, backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)', backgroundSize: '15px 15px', pointerEvents: 'none' }} />
          
          <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: '#666', letterSpacing: '3px', textTransform: 'uppercase' }}>
            [ MINDSET LOGIC ]
          </span>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', maxWidth: '800px' }}>
            <h3 style={{ 
              fontFamily: 'var(--font-code)', 
              fontSize: 'clamp(1.2rem, 2.5vw, 2.5rem)', 
              color: '#555', 
              fontWeight: 'normal',
              margin: 0
            }}>
              I DON'T ASK: "WHAT SHOULD I LEARN NEXT?"
            </h3>
            
            <h3 style={{ 
              fontFamily: 'var(--font-display)', 
              fontSize: 'clamp(2rem, 5vw, 4.5rem)', 
              color: '#fff', 
              fontWeight: '900',
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: '-2px'
            }}>
              I ASK: "WHAT SHOULD I BUILD NEXT?"
            </h3>
          </div>

          <div style={{ width: '40px', height: '1px', background: 'rgba(255,255,255,0.2)' }} />
        </motion.div>
      </div>
    </section>
  );
};

export default Philosophy;

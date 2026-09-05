import React from 'react';
import { motion } from 'framer-motion';

const Playbook = () => {
  const principles = [
    {
      number: "01",
      title: "Real-Time AI Streaming",
      subtitle: "Proxy Flushing & Whitespace Guards",
      description: "Intermediate CDN & Nginx proxies often buffer LLM streams. Flushing 1KB whitespace padding forces instant proxy chunk delivery, ensuring sub-second token-by-token streaming UI response."
    },
    {
      number: "02",
      title: "Payload Engineering",
      subtitle: "Asset Compression & Bundle Decoupling",
      description: "Performance is an essential feature. Downscaling assets to WebP, removing dead script overhead, and decoupling heavy 3D vendor libraries dropped payload size by 80% (36MB to 6.89MB) on KaryaUp."
    },
    {
      number: "03",
      title: "Production Delivery",
      subtitle: "Real Users > Tutorial Clones",
      description: "Shipping production software teaches real engineering: race conditions, cross-browser audits, and measuring code by user impact — not demos."
    }
  ];

  return (
    <section 
      id="playbook" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        padding: '6rem 0', 
        background: 'var(--bg-primary)' 
      }}
    >
      <div 
        className="container" 
        style={{ 
          position: 'relative', 
          zIndex: 1, 
          maxWidth: '1400px', 
          display: 'flex', 
          flexDirection: 'column', 
          gap: '4rem' 
        }}
      >
        
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
           <h2 style={{ fontSize: 'clamp(2.5rem, 6vw, 7rem)', fontWeight: '900', color: '#fff', margin: 0, lineHeight: 0.8, fontFamily: 'var(--font-display)', letterSpacing: '-3px' }}>
              PRINCIPLES
           </h2>
           <span style={{ fontSize: '1rem', color: '#666', fontFamily: 'var(--font-code)', letterSpacing: '2px', textTransform: 'uppercase' }}>[ How I Engineer ]</span>
        </div>

        <div className="modal-grid-2" style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
          {principles.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              whileHover={{ 
                y: -4, 
                borderColor: 'rgba(255, 255, 255, 0.2)',
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '2rem',
                borderRadius: '12px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.1rem',
                cursor: 'default',
                transition: 'border-color 0.3s ease'
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ 
                  fontFamily: 'var(--font-code)', 
                  fontSize: '2.2rem', 
                  color: 'rgba(255, 255, 255, 0.08)', 
                  fontWeight: '700', 
                  lineHeight: 1,
                }}>
                  {principle.number}
                </span>
              </div>

              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1.1rem' }}>
                <h3 style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.1rem', 
                  fontWeight: '900', 
                  color: '#fff', 
                  margin: 0, 
                  letterSpacing: '-0.5px',
                  textTransform: 'uppercase'
                }}>
                  {principle.title}
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-code)', 
                  fontSize: '0.72rem', 
                  color: '#666', 
                  marginTop: '0.35rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px' 
                }}>
                  {principle.subtitle}
                </p>
              </div>

              <p style={{ 
                fontFamily: 'var(--font-main)', 
                fontSize: '0.9rem', 
                color: '#aaa', 
                lineHeight: '1.55',
                margin: 0
              }}>
                {principle.description}
              </p>

            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Playbook;

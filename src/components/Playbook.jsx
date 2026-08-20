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
      title: "Domain-Tailored UX",
      subtitle: "Proof Architecture & Specification Tools",
      description: "Architecture must match domain psychology. Using S3M proof structures for FormX architectural consulting, interactive pipe calculators for industrial buyers at Navkar, and 19 intent patterns for Tripzy."
    },
    {
      number: "04",
      title: "Resilient Fallbacks",
      subtitle: "Local Data & Offline Guards",
      description: "Production software cannot fail when network links degrade. Building JSON local fallbacks for cloud databases (MongoDB Atlas) and offline error boundaries ensures uninterrupted user experiences."
    },
    {
      number: "05",
      title: "Production Delivery",
      subtitle: "Real Users > Tutorial Clones",
      description: "Shipping production software to 2,500+ active users teaches real engineering: debugging race conditions, cross-browser audits across 58 files, and measuring code by user volume and business impact."
    }
  ];

  return (
    <section 
      id="playbook" 
      style={{ 
        position: 'relative', 
        overflow: 'hidden', 
        padding: '10rem 0', 
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
          gap: '6rem' 
        }}
      >
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
           <h2 style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', fontWeight: '900', color: '#fff', margin: 0, lineHeight: 0.8, fontFamily: 'var(--font-display)', letterSpacing: '-3px' }}>
              PLAYBOOK
           </h2>
           <span style={{ fontSize: '1.2rem', color: '#666', fontFamily: 'var(--font-code)', letterSpacing: '2px', textTransform: 'uppercase' }}>[ / Engineering Principles ]</span>
        </div>

        {/* Principles Grid */}
        <div className="modal-grid-2">
          {principles.map((principle, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
              whileHover={{ 
                y: -6, 
                borderColor: 'rgba(255, 255, 255, 0.2)',
                boxShadow: '0 20px 40px rgba(0,0,0,0.6)' 
              }}
              style={{
                background: 'rgba(255, 255, 255, 0.01)',
                border: '1px solid rgba(255, 255, 255, 0.05)',
                padding: '3rem',
                borderRadius: '16px',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
                cursor: 'default',
                transition: 'border-color 0.4s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.4s cubic-bezier(0.16, 1, 0.3, 1)'
              }}
            >
              {/* Card Header (Number & Top Accent Line) */}
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <span style={{ 
                  fontFamily: 'var(--font-code)', 
                  fontSize: '3.5rem', 
                  color: 'rgba(255, 255, 255, 0.08)', 
                  fontWeight: '700', 
                  lineHeight: 1,
                  letterSpacing: '-2px'
                }}>
                  {principle.number}
                </span>
                <span style={{ 
                  fontFamily: 'var(--font-code)', 
                  fontSize: '0.7rem', 
                  color: '#444', 
                  letterSpacing: '2px' 
                }}>
                  [ RULE // 0{idx + 1} ]
                </span>
              </div>

              {/* Title & Subtitle */}
              <div style={{ borderTop: '1px solid rgba(255, 255, 255, 0.05)', paddingTop: '1.5rem' }}>
                <h3 style={{ 
                  fontFamily: 'var(--font-display)', 
                  fontSize: '1.4rem', 
                  fontWeight: '900', 
                  color: '#fff', 
                  margin: 0, 
                  letterSpacing: '-1px',
                  textTransform: 'uppercase'
                }}>
                  {principle.title}
                </h3>
                <p style={{ 
                  fontFamily: 'var(--font-code)', 
                  fontSize: '0.8rem', 
                  color: '#666', 
                  marginTop: '0.4rem', 
                  textTransform: 'uppercase', 
                  letterSpacing: '1px' 
                }}>
                  {principle.subtitle}
                </p>
              </div>

              {/* Description */}
              <p style={{ 
                fontFamily: 'var(--font-main)', 
                fontSize: '0.95rem', 
                color: '#aaa', 
                lineHeight: '1.6',
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

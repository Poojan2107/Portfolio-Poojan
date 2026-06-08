import React from 'react';
import { motion } from 'framer-motion';

const Playbook = () => {
  const principles = [
    {
      number: "01",
      title: "AI Integration",
      subtitle: "Structured Schemas & Fallbacks",
      description: "Designing deterministic interfaces on top of probabilistic LLMs. Relying on strict JSON schema validation, structured outputs, and redundant fallback models to ensure stability in production systems."
    },
    {
      number: "02",
      title: "Security At Rest",
      subtitle: "Token Encryption & Webhooks",
      description: "Never hardcoding secrets. Encrypting API keys at rest using industry-standard cryptography, routing third-party events securely through backend webhooks, and enforcing tight CORS controls."
    },
    {
      number: "03",
      title: "UX Speed",
      subtitle: "Asset Optimization & Pre-rendering",
      description: "Treating performance as a core feature. Delivering content instantly through static pre-rendering, modern asset formats, lazy loading, and aggressive cache management to maintain sub-100ms load times."
    },
    {
      number: "04",
      title: "Execution Mindset",
      subtitle: "Read Docs, Ship Code",
      description: "Learning through building. Diving deep into official documentations, testing assumptions in isolated environments, refactoring relentlessly, and understanding that working software beats perfect theory."
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

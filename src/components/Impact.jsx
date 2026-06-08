import React, { useEffect, useState, useRef } from 'react';
import { motion, useInView } from 'framer-motion';

const Counter = ({ value, suffix = "" }) => {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  useEffect(() => {
    if (isInView) {
      let start = 0;
      const end = parseInt(value);
      if (start === end) return;

      let totalDuration = 2000;
      let incrementTime = Math.max(Math.floor(totalDuration / end), 30);
      
      let timer = setInterval(() => {
        start += 1;
        setCount(start);
        if (start === end) clearInterval(timer);
      }, incrementTime);

      return () => clearInterval(timer);
    }
  }, [value, isInView]);

  return <span ref={ref}>{count}{suffix}</span>;
};

const Impact = () => {
  const stats = [
    { label: "Repositories Built", value: "18", suffix: "+" },
    { label: "Projects Shipped", value: "12", suffix: "+" },
    { label: "Hackathon Awards", value: "2", suffix: "" },
    { label: "Technologies Used", value: "15", suffix: "+" },
    { label: "Open Source Contribs", value: "50", suffix: "+" }
  ];

  return (
    <section id="impact" style={{ position: 'relative', overflow: 'hidden', padding: '8rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', display: 'flex', flexDirection: 'column', gap: '6rem' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
           <h2 style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', fontWeight: '900', color: '#fff', margin: 0, lineHeight: 0.8, fontFamily: 'var(--font-display)', letterSpacing: '-3px' }}>
              IMPACT
           </h2>
           <span style={{ fontSize: '1.2rem', color: '#666', fontFamily: 'var(--font-code)', letterSpacing: '2px', textTransform: 'uppercase' }}>[ / Stats Ledger ]</span>
        </div>

        {/* Stats Grid */}
        <div className="modal-grid-5" style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: '2rem' }}>
          {stats.map((stat, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6, delay: idx * 0.1 }}
              whileHover={{ scale: 1.03, borderColor: 'var(--accent-cyber)' }}
              style={{
                background: 'rgba(255,255,255,0.01)',
                border: '1px solid rgba(255,255,255,0.05)',
                padding: '2.5rem 1.5rem',
                borderRadius: '15px',
                textAlign: 'center',
                cursor: 'default',
                transition: 'border-color 0.3s, transform 0.3s'
              }}
            >
              <h3 style={{ fontSize: 'clamp(2.5rem, 4vw, 4.5rem)', fontWeight: '900', color: '#fff', fontFamily: 'var(--font-display)', letterSpacing: '-2px', margin: 0, lineHeight: 1 }}>
                <Counter value={stat.value} suffix={stat.suffix} />
              </h3>
              <p style={{ color: '#666', fontFamily: 'var(--font-code)', fontSize: '0.75rem', textTransform: 'uppercase', letterSpacing: '1px', marginTop: '1.5rem', marginBottom: 0 }}>
                {stat.label}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Impact;

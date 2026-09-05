import React from 'react';
import { motion } from 'framer-motion';

const Philosophy = () => {
  return (
    <section id="philosophy" style={{ position: 'relative', overflow: 'hidden', padding: '3.5rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px' }}>
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.6 }}
          style={{
            margin: 0,
            textAlign: 'center',
            fontFamily: 'var(--font-display)',
            fontSize: 'clamp(1.35rem, 3.2vw, 2.4rem)',
            fontWeight: 900,
            letterSpacing: '-1px',
            lineHeight: 1.25,
            color: '#fff',
            maxWidth: '900px',
            marginInline: 'auto'
          }}
        >
          I don&apos;t ask what to learn next — I ask what to build next.
        </motion.p>
      </div>
    </section>
  );
};

export default Philosophy;

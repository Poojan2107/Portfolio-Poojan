import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const bootLines = [
  "INITIALIZING SYSTEM...",
  "LOADING KERNEL MODULES...",
  "> VERIFYING USER IDENTITY... [OK]",
  "> ESTABLISHING SECURE CONNECTION...",
  "> MOUNTING VIRTUAL DOM...",
  "> ALLOCATING MEMORY BLOCKS...",
  "> DECRYPTING PROFILE DATA...",
  "ACCESS GRANTED.",
  "WELCOME, USER."
];

const BootSequence = ({ onComplete }) => {
  const [lines, setLines] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex >= bootLines.length) {
      setTimeout(onComplete, 800); // Wait a bit after last line
      return;
    }

    const timeout = setTimeout(() => {
      setLines(prev => [...prev, bootLines[currentIndex]]);
      setCurrentIndex(prev => prev + 1);
    }, Math.random() * 300 + 100); // Random delay between 100-400ms

    return () => clearTimeout(timeout);
  }, [currentIndex, onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: "blur(10px)" }}
      transition={{ duration: 0.8, ease: "easeInOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#000',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'flex-end',
        padding: '2rem',
        fontFamily: '"Fira Code", monospace',
        color: 'var(--accent-primary)',
        overflow: 'hidden'
      }}
    >
      <div style={{ 
        position: 'absolute', 
        top: '50%', 
        left: '50%', 
        transform: 'translate(-50%, -50%)',
        opacity: 0.1,
        pointerEvents: 'none'
      }}>
         {/* Background Pulse */}
         <div style={{
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            background: 'var(--accent-primary)',
            filter: 'blur(100px)',
            animation: 'pulse 2s infinite'
         }}></div>
      </div>

      <div style={{ maxWidth: '800px', width: '100%' }}>
        {lines.map((line, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            style={{ marginBottom: '0.5rem', fontSize: '1.2rem', textShadow: '0 0 5px var(--accent-primary)' }}
          >
            <span style={{ marginRight: '1rem', opacity: 0.5 }}>{`[${(Math.random() * 1000).toFixed(4)}]`}</span>
            {line}
          </motion.div>
        ))}
        <motion.div
            animate={{ opacity: [0, 1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8 }}
            style={{ width: '12px', height: '20px', background: 'var(--accent-primary)', marginTop: '0.5rem' }}
        />
      </div>
    </motion.div>
  );
};

export default BootSequence;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const HeroicIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0); // 0: Init, 1: Power Up, 2: Blast

  useEffect(() => {
    // Sequence
    setTimeout(() => setPhase(1), 800);  // Core spins up
    setTimeout(() => setPhase(2), 2200); // Blast
    setTimeout(() => onComplete(), 2800); // Done
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#050505',
        zIndex: 99999,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden' 
      }}
    >
      {/* 1. The Core (Arc Reactor Style) */}
      <div style={{ position: 'relative', width: '120px', height: '120px', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        
        {/* Outer Ring 1 - Static but glowing */}
        <motion.div 
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5 }}
            style={{
                position: 'absolute',
                width: '100%',
                height: '100%',
                borderRadius: '50%',
                border: '4px solid rgba(0, 242, 255, 0.3)',
                boxShadow: '0 0 20px rgba(0, 242, 255, 0.1)'
            }}
        />

        {/* Outer Ring 2 - Spinning Segments */}
        <motion.div
            initial={{ rotate: 0, opacity: 0 }}
            animate={phase >= 1 ? { rotate: 360, opacity: 1 } : { opacity: 0 }}
            transition={{ rotate: { duration: 1, ease: "linear", repeat: Infinity }, opacity: { duration: 0.3 } }}
            style={{
                position: 'absolute',
                width: '110%',
                height: '110%',
                borderRadius: '50%',
                borderTop: '4px solid #00f2ff',
                borderBottom: '4px solid #00f2ff',
                borderLeft: '4px solid transparent',
                borderRight: '4px solid transparent',
                boxShadow: '0 0 30px #00f2ff'
            }}
        />

        {/* Core Light */}
        <motion.div 
            animate={phase === 1 ? { scale: [1, 1.2, 1], opacity: [0.8, 1, 0.8] } : {}}
            transition={{ duration: 0.4, repeat: Infinity }}
            style={{
                width: '60px',
                height: '60px',
                borderRadius: '50%',
                background: 'radial-gradient(circle, #fff, #00f2ff)',
                boxShadow: '0 0 50px #00f2ff, 0 0 100px #00f2ff',
                zIndex: 10
            }}
        />
      </div>

      {/* 2. HUD Text */}
      <motion.div 
        style={{ marginTop: '3rem', fontFamily: 'monospace', color: '#00f2ff', textAlign: 'center', letterSpacing: '2px' }}
      >
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
        >
            SYSTEM_CHECK... <span style={{ color: '#0f0' }}>OK</span>
        </motion.div>
        
        <motion.div 
            initial={{ opacity: 0, y: 10 }}
            animate={phase >= 1 ? { opacity: 1, y: 0 } : { opacity: 0 }}
            transition={{ delay: 0.2 }}
            style={{ marginTop: '0.5rem', fontWeight: 'bold' }}
        >
            SUITING UP
        </motion.div>
      </motion.div>

      {/* 3. The Blast Overlay */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={phase === 2 ? { scale: 20, opacity: 1 } : {}}
        transition={{ duration: 0.4, ease: "easeIn" }}
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            width: '100px',
            height: '100px',
            background: '#fff',
            borderRadius: '50%',
            zIndex: 20,
            pointerEvents: 'none'
        }}
      />

    </motion.div>
  );
};

export default HeroicIntro;

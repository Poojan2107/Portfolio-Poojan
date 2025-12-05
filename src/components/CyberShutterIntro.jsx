import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CyberShutterIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState('locked'); // locked, scanning, unlocking, opening

  useEffect(() => {
    const scanTimer = setTimeout(() => setPhase('scanning'), 800);
    const unlockTimer = setTimeout(() => setPhase('unlocking'), 2000); // Lock turns green
    const openTimer = setTimeout(() => setPhase('opening'), 2400); // Shutters move
    const completeTimer = setTimeout(onComplete, 3200); // Unmount

    return () => {
      clearTimeout(scanTimer);
      clearTimeout(unlockTimer);
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const shutterVariants = {
    locked: { x: 0, y: 0 },
    scanning: { x: 0, y: 0 },
    unlocking: { x: 0, y: 0 },
    opening: (custom) => {
        switch(custom) {
            case 'tl': return { x: '-100%', y: '-100%' };
            case 'tr': return { x: '100%', y: '-100%' };
            case 'bl': return { x: '-100%', y: '100%' };
            case 'br': return { x: '100%', y: '100%' };
            default: return {};
        }
    }
  };

  const plateStyle = {
    position: 'absolute',
    background: '#050505',
    zIndex: 2,
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundImage: 'radial-gradient(circle at center, #111 0%, #000 100%)', // Subtle gradient
    boxShadow: 'inset 0 0 50px rgba(0,0,0,0.8)'
  };

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        pointerEvents: phase === 'opening' ? 'none' : 'auto', // Block clicks until open
      }}
    >
      {/* Top Left Plate */}
      <motion.div
        custom="tl"
        initial="locked"
        animate={phase === 'opening' ? "opening" : "locked"}
        variants={shutterVariants}
        transition={{ duration: 0.8, ease: "circIn" }}
        style={{
            ...plateStyle,
            top: 0, left: 0, width: '50vw', height: '50vh',
            borderRight: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
          {/* Tech decoration */}
          <div style={{ position: 'absolute', bottom: '10px', right: '10px', fontSize: '10px', color: '#333', fontFamily: 'monospace' }}>SEC-01</div>
      </motion.div>

      {/* Top Right Plate */}
      <motion.div
        custom="tr"
        initial="locked"
        animate={phase === 'opening' ? "opening" : "locked"}
        variants={shutterVariants}
        transition={{ duration: 0.8, ease: "circIn" }}
        style={{
            ...plateStyle,
            top: 0, right: 0, width: '50vw', height: '50vh',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            borderBottom: '1px solid rgba(255,255,255,0.1)',
        }}
      >
          <div style={{ position: 'absolute', bottom: '10px', left: '10px', fontSize: '10px', color: '#333', fontFamily: 'monospace' }}>SEC-02</div>
      </motion.div>

       {/* Bottom Left Plate */}
       <motion.div
        custom="bl"
        initial="locked"
        animate={phase === 'opening' ? "opening" : "locked"}
        variants={shutterVariants}
        transition={{ duration: 0.8, ease: "circIn" }}
        style={{
            ...plateStyle,
            bottom: 0, left: 0, width: '50vw', height: '50vh',
            borderRight: '1px solid rgba(255,255,255,0.1)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
          <div style={{ position: 'absolute', top: '10px', right: '10px', fontSize: '10px', color: '#333', fontFamily: 'monospace' }}>SEC-03</div>
      </motion.div>

       {/* Bottom Right Plate */}
       <motion.div
        custom="br"
        initial="locked"
        animate={phase === 'opening' ? "opening" : "locked"}
        variants={shutterVariants}
        transition={{ duration: 0.8, ease: "circIn" }}
        style={{
            ...plateStyle,
            bottom: 0, right: 0, width: '50vw', height: '50vh',
            borderLeft: '1px solid rgba(255,255,255,0.1)',
            borderTop: '1px solid rgba(255,255,255,0.1)',
        }}
      >
          <div style={{ position: 'absolute', top: '10px', left: '10px', fontSize: '10px', color: '#333', fontFamily: 'monospace' }}>SEC-04</div>
      </motion.div>


      {/* CENTRAL LOCK MECHANISM */}
      <motion.div
        animate={phase === 'opening' ? { opacity: 0, scale: 0.5 } : { opacity: 1, scale: 1 }}
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            zIndex: 10,
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            pointerEvents: 'none'
        }}
      >
          {/* Outer Ring */}
          <motion.div
            animate={
                phase === 'scanning' ? { rotate: 360, borderStyle: 'dashed' } 
                : phase === 'unlocking' ? { rotate: 0, borderColor: '#4ade80', scale: 1.1 }
                : {}
            }
            transition={{ duration: 1.5, ease: "linear" }}
            style={{
                width: '80px',
                height: '80px',
                borderRadius: '50%',
                border: '2px solid',
                borderColor: phase === 'unlocking' ? '#4ade80' : 'var(--accent-primary)',
                borderStyle: 'solid',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center'
            }}
          >
              {/* Inner Dot */}
              <motion.div 
                animate={phase === 'unlocking' ? { backgroundColor: '#4ade80', scale: [1, 1.5, 1] } : {}}
                style={{
                    width: '10px',
                    height: '10px',
                    backgroundColor: phase === 'unlocking' ? '#4ade80' : 'var(--accent-primary)',
                    borderRadius: '50%'
                }}
              />
          </motion.div>

          {/* Text Status */}
          <div style={{
              position: 'absolute',
              top: '120%',
              width: '200px',
              textAlign: 'center',
              color: phase === 'unlocking' ? '#4ade80' : 'var(--text-secondary)',
              fontFamily: '"Fira Code", monospace',
              fontSize: '0.9rem',
              letterSpacing: '2px'
          }}>
              {phase === 'locked' && "SYSTEM LOCKED"}
              {phase === 'scanning' && "SCANNING..."}
              {phase === 'unlocking' && "OPENS ACCESS"}
          </div>

      </motion.div>
    </div>
  );
};

export default CyberShutterIntro;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const BigBangIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState('singularity'); // singularity, explosion, fading

  useEffect(() => {
    // Sequence timing
    const explosionTimer = setTimeout(() => setPhase('explosion'), 800);
    const fadeTimer = setTimeout(() => setPhase('fading'), 1800);
    const completeTimer = setTimeout(onComplete, 2500);

    return () => {
      clearTimeout(explosionTimer);
      clearTimeout(fadeTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      animate={{ opacity: phase === 'fading' ? 0 : 1 }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#000',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden'
      }}
    >
      {/* The Singularity Point */}
      <motion.div
        initial={{ scale: 0, opacity: 0 }}
        animate={
          phase === 'singularity' 
            ? { scale: [0, 1.5, 1], opacity: 1 } // Appear and pulsate
            : phase === 'explosion'
            ? { scale: 50, opacity: 0 } // Explode outwards
            : {}
        }
        transition={
          phase === 'singularity'
            ? { duration: 0.8, times: [0, 0.6, 1], ease: "easeOut" }
            : { duration: 0.6, ease: "easeIn" }
        }
        style={{
          width: '20px',
          height: '20px',
          background: '#fff',
          borderRadius: '50%',
          boxShadow: '0 0 20px #fff, 0 0 50px var(--accent-primary), 0 0 100px var(--accent-secondary)',
          position: 'relative',
          zIndex: 10
        }}
      />

      {/* The Shockwave Ring */}
      {phase === 'explosion' && (
        <motion.div
          initial={{ scale: 0, opacity: 1, borderWidth: '50px' }}
          animate={{ scale: 100, opacity: 0, borderWidth: '0px' }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            x: '-50%',
            y: '-50%',
            width: '20px',
            height: '20px',
            borderRadius: '50%',
            border: '2px solid rgba(0, 242, 255, 0.8)',
            zIndex: 5
          }}
        />
      )}

      {/* The Flash / Whiteout */}
      <motion.div 
        animate={phase === 'explosion' ? { opacity: [0, 1, 0] } : { opacity: 0 }}
        transition={{ duration: 0.5, times: [0, 0.1, 1] }}
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#fff',
            zIndex: 20,
            pointerEvents: 'none'
        }}
      />
    </motion.div>
  );
};

export default BigBangIntro;

import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CyberShutterIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState('sealed'); // sealed, scanning, opening

  useEffect(() => {
    const scanTimer = setTimeout(() => setPhase('scanning'), 500);
    const openTimer = setTimeout(() => setPhase('opening'), 1800);
    const completeTimer = setTimeout(onComplete, 2600);

    return () => {
      clearTimeout(scanTimer);
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  const shutterVariants = {
    sealed: { x: 0, y: 0 },
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

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        display: 'flex',
        flexWrap: 'wrap',
        overflow: 'hidden',
        pointerEvents: 'none' // Let clicks pass through after animation
      }}
    >
      {/* Top Left Shutter */}
      <motion.div
        custom="tl"
        initial="sealed"
        animate={phase === 'opening' ? "opening" : "sealed"}
        variants={shutterVariants}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
        style={{
            width: '50vw',
            height: '50vh',
            background: '#050505',
            borderRight: '1px solid #333',
            borderBottom: '1px solid #333',
            position: 'absolute',
            top: 0,
            left: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'flex-end',
            justifyContent: 'flex-end',
            padding: '2rem'
        }}
      >
        {phase === 'scanning' && <motion.div initial={{ width: 0 }} animate={{ width: '100px' }} style={{ height: '2px', background: 'var(--accent-primary)' }} />}
      </motion.div>

      {/* Top Right Shutter */}
      <motion.div
        custom="tr"
        initial="sealed"
        animate={phase === 'opening' ? "opening" : "sealed"}
        variants={shutterVariants}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
        style={{
            width: '50vw',
            height: '50vh',
            background: '#090909',
            borderLeft: '1px solid #333',
            borderBottom: '1px solid #333',
            position: 'absolute',
            top: 0,
            right: 0,
            zIndex: 2
        }}
      />

       {/* Bottom Left Shutter */}
       <motion.div
        custom="bl"
        initial="sealed"
        animate={phase === 'opening' ? "opening" : "sealed"}
        variants={shutterVariants}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
        style={{
            width: '50vw',
            height: '50vh',
            background: '#090909',
            borderRight: '1px solid #333',
            borderTop: '1px solid #333',
            position: 'absolute',
            bottom: 0,
            left: 0,
            zIndex: 2
        }}
      />

       {/* Bottom Right Shutter */}
       <motion.div
        custom="br"
        initial="sealed"
        animate={phase === 'opening' ? "opening" : "sealed"}
        variants={shutterVariants}
        transition={{ duration: 0.8, ease: [0.7, 0, 0.3, 1] }}
        style={{
            width: '50vw',
            height: '50vh',
            background: '#050505',
            borderLeft: '1px solid #333',
            borderTop: '1px solid #333',
            position: 'absolute',
            bottom: 0,
            right: 0,
            zIndex: 2,
            display: 'flex',
            alignItems: 'flex-start',
            justifyContent: 'flex-start',
            padding: '2rem'
        }}
      >
         {phase === 'scanning' && <motion.div initial={{ width: 0 }} animate={{ width: '100px' }} style={{ height: '2px', background: 'var(--accent-secondary)' }} />}
      </motion.div>

      {/* Center Target Rect (The Lock) */}
      <motion.div
        animate={phase === 'opening' ? { scale: 5, opacity: 0 } : { scale: 1, opacity: 1 }}
        style={{
            position: 'absolute',
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: '100px',
            height: '100px',
            border: '1px solid rgba(255,255,255,0.1)',
            zIndex: 10,
            display: 'flex', 
            alignItems: 'center', 
            justifyContent: 'center'
        }}
      >
         {phase === 'scanning' && (
             <motion.div 
                animate={{ rotate: 360 }}
                transition={{ repeat: Infinity, duration: 1, ease: 'linear' }}
                style={{
                    width: '60px',
                    height: '60px',
                    borderTop: '2px solid var(--accent-primary)',
                    borderRight: '2px solid transparent',
                    borderRadius: '50%'
                }}
             />
         )}
      </motion.div>
    </div>
  );
};

export default CyberShutterIntro;

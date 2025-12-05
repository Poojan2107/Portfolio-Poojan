import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CyberShutterIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState('closed'); // closed, activating, opening

  useEffect(() => {
    const activeTimer = setTimeout(() => setPhase('activating'), 500);
    const openTimer = setTimeout(() => setPhase('opening'), 1500);
    const completeTimer = setTimeout(onComplete, 2500);

    return () => {
      clearTimeout(activeTimer);
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // Iris Blade Variants
  const bladeVariants = {
    closed: { height: '55vh' },
    activating: { height: '50vh', filter: 'brightness(1.5)' }, // Pulse
    opening: { height: '0vh' }
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
        background: 'transparent', // We only draw the blades
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
        pointerEvents: 'none'
      }}
    >
        {/* Background blocker (fades out first) */}
        <motion.div 
            animate={phase === 'opening' ? { opacity: 0 } : { opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.5 }}
            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', background: '#000', zIndex: 0 }}
        />

        {/* The Iris Assembly */}
        <div style={{ position: 'relative', width: '100vw', height: '100vh', zIndex: 1 }}>
            {[...Array(6)].map((_, i) => (
                <motion.div
                    key={i}
                    custom={i}
                    initial="closed"
                    animate={phase}
                    variants={bladeVariants}
                    transition={{ 
                        duration: 0.8, 
                        ease: [0.4, 0, 0.2, 1], // Custom bezier for mechanical feel
                        delay: phase === 'opening' ? i * 0.05 : 0 // Staggered opening
                    }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        width: '30vw', // Width of blade base
                        background: `linear-gradient(${i * 60}deg, #0a0a0a, #111)`,
                        border: '1px solid rgba(255,255,255,0.05)',
                        boxShadow: '0 0 20px rgba(0,0,0,0.8)',
                        transformOrigin: 'top center',
                        transform: `translate(-50%, 0) rotate(${i * 60}deg)`,
                        zIndex: 10
                    }}
                >
                    {/* Glowing Edge */}
                    <motion.div 
                        animate={{ opacity: [0.2, 0.5, 0.2] }}
                        transition={{ repeat: Infinity, duration: 2 }}
                        style={{
                            position: 'absolute',
                            bottom: 0,
                            left: 0,
                            width: '100%',
                            height: '2px',
                            background: 'var(--accent-primary)',
                            boxShadow: '0 0 10px var(--accent-primary)'
                        }}
                    />
                </motion.div>
            ))}
        </div>
        
        {/* Center Ring (The Pupil) */}
        <motion.div
            initial={{ scale: 0.5, opacity: 0 }}
            animate={phase === 'activating' ? { scale: 1, opacity: 1, rotate: 180 } : phase === 'opening' ? { scale: 0, opacity: 0 } : { scale: 0.8, opacity: 1 }}
            transition={{ duration: 0.8 }}
            style={{
                position: 'absolute',
                zIndex: 20,
                width: '150px',
                height: '150px',
                borderRadius: '50%',
                border: '2px solid var(--accent-secondary)',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                boxShadow: '0 0 30px var(--accent-secondary)'
            }}
        >
             <motion.div 
                animate={{ rotate: -360 }}
                transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
                style={{
                    width: '70%',
                    height: '70%',
                    borderTop: '4px solid #fff',
                    borderRadius: '50%'
                }}
             />
             <div style={{ position: 'absolute', fontFamily: 'monospace', fontSize: '10px', letterSpacing: '2px', color: '#fff' }}>
                 LOADING
             </div>
        </motion.div>

    </div>
  );
};

export default CyberShutterIntro;

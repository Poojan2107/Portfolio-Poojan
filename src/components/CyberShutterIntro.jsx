import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const CyberShutterIntro = ({ onComplete }) => {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    // Timing sequence
    // 0s: start
    // 0.8s: Mechanical "Unlock" twitch
    // 1.5s: Open
    // 2.5s: Complete
    const openTimer = setTimeout(() => setIsOpen(true), 1200);
    const completeTimer = setTimeout(onComplete, 2600);

    return () => {
      clearTimeout(openTimer);
      clearTimeout(completeTimer);
    };
  }, [onComplete]);

  // An easing that feels heavy and mechanical
  const mechanicalEase = [0.76, 0, 0.24, 1];

  // Generate 8 blades for a tighter iris
  const blades = Array.from({ length: 8 });

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        zIndex: 99999,
        background: 'transparent',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        pointerEvents: 'none',
        overflow: 'hidden'
      }}
    >
      {/* Background Matte (Ensures total blackout before open) */}
      <motion.div
        initial={{ opacity: 1 }}
        animate={{ opacity: isOpen ? 0 : 1 }}
        transition={{ duration: 0.5, delay: 0.8 }} // Fade out background just as blades open
        style={{
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            background: '#000',
            zIndex: 1
        }}
      />

       {/* The Aperture Assembly */}
       <div style={{ position: 'relative', width: '150vmax', height: '150vmax', zIndex: 10 }}>
          {blades.map((_, i) => (
             <motion.div
                key={i}
                initial={{ rotate: i * (360 / 8), x: 0, y: 0 }}
                animate={
                    isOpen 
                    ? { rotate: i * (360 / 8) + 45, x: 200, y: 200 } // Spin and retract outwards
                    : { rotate: i * (360 / 8), x: 0, y: 0 }
                }
                transition={{ 
                    duration: 1.2, 
                    ease: mechanicalEase 
                }}
                style={{
                    position: 'absolute',
                    top: '50%',
                    left: '50%',
                    width: '100%',
                    height: '100%',
                    transformOrigin: 'top left', // Pivot point
                }}
             >
                 {/* The Blade Graphic */}
                 <div style={{
                     width: '100%',
                     height: '100%',
                     background: '#0a0a0a',
                     transform: 'skewX(30deg)', // Shape the blade
                     borderTop: '2px solid rgba(0, 242, 255, 0.3)', // Cyan edge
                     boxShadow: '0 -10px 50px rgba(0,0,0,1)', // Deep shadow for depth
                     position: 'relative'
                 }}>
                     {/* Details on blade */}
                     <div style={{
                         position: 'absolute',
                         top: '50px',
                         left: '100px',
                         width: '4px',
                         height: '4px',
                         background: 'rgba(255,255,255,0.2)',
                         borderRadius: '50%'
                     }} />
                 </div>
             </motion.div>
          ))}
       </div>

       {/* Central Locking Ring (The Pupil) */}
       <motion.div
         animate={isOpen ? { scale: 3, opacity: 0 } : { scale: 1, opacity: 1 }}
         transition={{ duration: 0.6, ease: "easeIn" }}
         style={{
             position: 'absolute',
             zIndex: 20,
             width: '20vmin',
             height: '20vmin',
             borderRadius: '50%',
             border: '1px solid rgba(0, 242, 255, 0.5)',
             display: 'flex',
             alignItems: 'center',
             justifyContent: 'center',
             background: 'rgba(0,0,0,0.5)',
             backdropFilter: 'blur(5px)'
         }}
       >
           {/* Inner Spinning Elements */}
           <motion.div
             animate={{ rotate: 360 }}
             transition={{ repeat: Infinity, duration: 4, ease: "linear" }}
             style={{
                 width: '80%',
                 height: '80%',
                 borderTop: '2px solid var(--accent-primary)',
                 borderRight: '2px solid transparent',
                 borderRadius: '50%'
             }}
           />
           <div style={{
               position: 'absolute',
               fontFamily: '"Fira Code", monospace',
               fontSize: '1rem',
               color: 'var(--accent-primary)',
               letterSpacing: '4px',
               fontWeight: '600'
           }}>
               SYSTEM.INIT
           </div>
       </motion.div>

    </div>
  );
};

export default CyberShutterIntro;

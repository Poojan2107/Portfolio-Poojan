import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ScrambleText = ({ text }) => {
  const [displayText, setDisplayText] = useState('');
  const chars = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ!#$&*+H^?';
  
  useEffect(() => {
    let iteration = 0;
    const maxIterations = 20;
    let interval;

    const timeout = setTimeout(() => {
        interval = setInterval(() => {
          setDisplayText(
            text
              .split('')
              .map((letter, index) => {
                if (index < Math.floor(iteration / 3)) {
                  return text[index];
                }
                if (letter === ' ') return ' ';
                return chars[Math.floor(Math.random() * chars.length)];
              })
              .join('')
          );

          if (iteration >= text.length * 3) {
            clearInterval(interval);
            setDisplayText(text);
          }
          iteration += 1;
        }, 30);
    }, 500);

    return () => {
        clearTimeout(timeout);
        clearInterval(interval);
    };
  }, [text]);

  useEffect(() => {
      setDisplayText(
          text.split('').map(l => l === ' ' ? ' ' : chars[Math.floor(Math.random() * chars.length)]).join('')
      );
  }, [text]);

  return <>{displayText}</>;
};

const HeroicIntro = ({ onComplete }) => {
  const [phase, setPhase] = useState(0);

  useEffect(() => {
    document.body.style.overflow = 'hidden';

    // Phase 0: Scrambling matrix text
    // Phase 1: Text locked
    // Phase 2: Snap screen open

    const t1 = setTimeout(() => setPhase(1), 1600); 
    const t2 = setTimeout(() => setPhase(2), 2400); 
    const t3 = setTimeout(() => {
        document.body.style.overflow = 'auto'; 
        onComplete();
    }, 3800);

    return () => {
        document.body.style.overflow = 'auto';
        clearTimeout(t1); clearTimeout(t2); clearTimeout(t3);
    };
  }, [onComplete]);

  return (
    <AnimatePresence>
      {(phase < 3) && (
        <div style={{
            position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh',
            zIndex: 99999, display: 'flex', pointerEvents: 'none', overflow: 'hidden'
        }}>
            
            {/* Split Screen Doors */}
            <motion.div 
               initial={{ y: 0 }}
               animate={phase >= 2 ? { y: '-100%' } : { y: 0 }}
               transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
               style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '50vh', background: '#050505', borderBottom: phase >= 2 ? '1px solid rgba(255,255,255,0.4)' : 'none' }}
            />
            <motion.div 
               initial={{ y: 0 }}
               animate={phase >= 2 ? { y: '100%' } : { y: 0 }}
               transition={{ duration: 1.2, ease: [0.76, 0, 0.24, 1] }}
               style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '50vh', background: '#050505', borderTop: phase >= 2 ? '1px solid rgba(255,255,255,0.4)' : 'none' }}
            />

            {/* Glowing Scanline */}
            <motion.div 
               animate={{ y: ['-50vh', '50vh'] }}
               transition={{ duration: 2, repeat: Infinity, ease: 'linear' }}
               style={{
                   position: 'absolute', top: '50%', left: 0, width: '100%', height: '2px', background: 'rgba(255,255,255,0.2)', boxShadow: '0 0 20px rgba(255,255,255,0.5)', zIndex: 3, opacity: phase >= 2 ? 0 : 1
               }}
            />

            {/* Central Decoding Text - REFINED DIGITAL SWEEP UPGRADE */}
            <motion.div 
                initial={{ opacity: 1 }}
                style={{
                    position: 'fixed',
                    top: 0,
                    left: 0,
                    width: '100vw',
                    height: '100vh',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    zIndex: 10,
                    pointerEvents: 'none',
                    perspective: '1000px'
                }}
            >
                {/* Laser Guide Lines (Following the opening doors) */}
                {phase >= 2 && (
                    <>
                        <motion.div 
                            initial={{ y: 0, opacity: 1 }}
                            animate={{ y: '-50vh', opacity: 0 }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                            style={{ position: 'absolute', top: '50%', width: '100%', height: '2px', background: 'var(--accent-primary)', boxShadow: '0 0 15px var(--accent-primary)', zIndex: 20 }}
                        />
                        <motion.div 
                            initial={{ y: 0, opacity: 1 }}
                            animate={{ y: '50vh', opacity: 0 }}
                            transition={{ duration: 1, ease: [0.76, 0, 0.24, 1] }}
                            style={{ position: 'absolute', top: '50%', width: '100%', height: '2px', background: 'var(--accent-primary)', boxShadow: '0 0 15px var(--accent-primary)', zIndex: 20 }}
                        />
                    </>
                )}

                {/* 3D Expansion Grid - More Smooth & Impactful */}
                <motion.div 
                    animate={phase >= 2 ? { scale: 8, opacity: 0, rotateZ: 45, rotateX: 20 } : { scale: 1, opacity: 0.1 }}
                    transition={{ duration: 2, ease: "circOut" }}
                    style={{
                        position: 'absolute',
                        width: '100vw',
                        height: '100vh',
                        backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                        transformStyle: 'preserve-3d'
                    }}
                />

                {/* Spinning Geometric Scanner */}
                <motion.div 
                    animate={{ rotate: 360, scale: phase >= 2 ? 2 : 1 }}
                    transition={{ duration: 10, repeat: Infinity, ease: 'linear' }}
                    style={{
                        position: 'absolute',
                        width: '45vw',
                        height: '45vw',
                        border: '2px dashed rgba(255,255,255,0.08)',
                        borderRadius: '50%',
                        zIndex: -1
                    }}
                />

                {/* Floating Data Points */}
                {[...Array(6)].map((_, i) => (
                    <motion.div
                        key={i}
                        initial={{ opacity: 0, x: Math.random() * 100 - 50 + 'vw', y: Math.random() * 100 - 50 + 'vh' }}
                        animate={{ 
                            opacity: [0, 0.2, 0],
                            y: ['-10vh', '10vh']
                        }}
                        transition={{ duration: 3 + Math.random() * 2, repeat: Infinity, delay: i * 0.5 }}
                        style={{ position: 'absolute', fontFamily: 'var(--font-code)', fontSize: '0.65rem', color: '#fff' }}
                    >
                        0x{Math.random().toString(16).slice(2, 6).toUpperCase()}
                    </motion.div>
                ))}

                {/* Decorative Screen Corners */}
                <div style={{ position: 'absolute', top: '40px', left: '40px', width: '20px', height: '20px', borderLeft: '1px solid rgba(255,255,255,0.2)', borderTop: '1px solid rgba(255,255,255,0.2)' }}></div>
                <div style={{ position: 'absolute', top: '40px', right: '40px', width: '20px', height: '20px', borderRight: '1px solid rgba(255,255,255,0.2)', borderTop: '1px solid rgba(255,255,255,0.2)' }}></div>
                <div style={{ position: 'absolute', bottom: '40px', left: '40px', width: '20px', height: '20px', borderLeft: '1px solid rgba(255,255,255,0.2)', borderBottom: '1px solid rgba(255,255,255,0.2)' }}></div>
                <div style={{ position: 'absolute', bottom: '40px', right: '40px', width: '20px', height: '20px', borderRight: '1px solid rgba(255,255,255,0.2)', borderBottom: '1px solid rgba(255,255,255,0.2)' }}></div>

                <motion.div
                   animate={phase >= 2 
                     ? { opacity: 0, scale: 2.5, filter: 'blur(30px)', skewX: 30, rotateZ: 5 } 
                     : { opacity: 1, scale: 1, filter: 'blur(0px)', y: [0, -10, 0] }
                   }
                   transition={{ 
                     opacity: { duration: 0.6, delay: 0.2 },
                     scale: { duration: 0.8, ease: "circIn" },
                     filter: { duration: 0.6 },
                     y: { duration: 4, repeat: Infinity, ease: 'easeInOut' } 
                   }}
                   style={{ 
                       textAlign: 'center',
                       maxWidth: '90vw',
                       display: 'flex',
                       flexDirection: 'column',
                       alignItems: 'center',
                       gap: '1.5rem',
                       position: 'relative'
                   }}
                >
                    {/* Glitch Overlay Effect */}
                    <motion.h1 
                        animate={phase === 1 ? { x: [-2, 2, -2], opacity: [0.8, 1, 0.8] } : {}}
                        transition={{ duration: 0.1, repeat: phase === 1 ? Infinity : 0 }}
                        style={{ 
                            fontFamily: 'var(--font-code)', 
                            fontSize: 'max(2rem, 6vw)',
                            color: '#ffffff',
                            letterSpacing: '0.4vw', 
                            margin: 0, 
                            fontWeight: '900',
                            lineHeight: 1.1,
                            whiteSpace: 'nowrap',
                            zIndex: 2
                        }}
                    >
                       <ScrambleText text="POOJAN P SHRIVASTAV" />
                    </motion.h1>

                    {/* Shadow Echo behind text */}
                    <h1 style={{ 
                        position: 'absolute', top: 2, left: 2, zIndex: 1,
                        fontFamily: 'var(--font-code)', fontSize: 'max(2rem, 6vw)',
                        color: 'rgba(255,255,255,0.05)',
                        letterSpacing: '0.4vw', margin: 0, fontWeight: '900', lineHeight: 1.1, whiteSpace: 'nowrap', opacity: 0.3
                    }}>
                       POOJAN P SHRIVASTAV
                    </h1>
                    
                    <motion.div
                       initial={{ opacity: 0 }}
                       animate={phase >= 1 ? { opacity: 1 } : { opacity: 0 }}
                       style={{
                            fontFamily: 'var(--font-code)', 
                            fontSize: 'clamp(0.5rem, 1vw, 0.7rem)', 
                            color: 'rgba(255,255,255,0.5)', 
                            letterSpacing: '1.5px',
                            textTransform: 'uppercase', 
                            display: 'flex', 
                            flexDirection: 'column', 
                            gap: '0.4rem',
                            borderLeft: '1px solid rgba(255,255,255,0.2)',
                            paddingLeft: '1.2rem',
                            textAlign: 'left'
                       }}
                    >
                       <span>{'>'} INITIALIZING_KERNEL... [OK]</span>
                       <span>{'>'} ESTABLISHING_CORE_UPLINK... [100%]</span>
                       <span>{'>'} OPTIMIZING_AI_PROTOCOLS... [ACTIVE]</span>
                       <span style={{ color: '#ffffff', marginTop: '0.3rem', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '0.3rem' }}>{'>'} ACCESS_GRANTED: POOJAN_P_SHRIVASTAV</span>
                    </motion.div>
                </motion.div>
            </motion.div>

        </div>
      )}
    </AnimatePresence>
  );
};

export default HeroicIntro;

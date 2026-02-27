import React, { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

const ReactiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    // Generate static random particles for depth only once on mount
    const generatedParticles = Array.from({ length: 40 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100, // vw
      y: Math.random() * 100, // vh
      size: Math.random() * 3 + 1, // 1px to 4px
      duration: Math.random() * 20 + 10, // 10s to 30s float speed
      delay: Math.random() * -20 // random start phase
    }));
    setParticles(generatedParticles);

    const handleMouseMove = (e) => {
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* 1. Base Ambient Engine Void */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -3,
          background: 'var(--bg-primary)',
          pointerEvents: 'none'
        }}
      />

      {/* 2. Floating Deep Space Particles */}
      <div style={{ position: 'fixed', top: 0, left: 0, width: '100vw', height: '100vh', zIndex: -2, pointerEvents: 'none' }}>
        {particles.map((p) => (
          <motion.div
            key={p.id}
            initial={{ y: `${p.y}vh`, x: `${p.x}vw`, opacity: 0 }}
            animate={{ 
                y: [`${p.y}vh`, `${p.y - 10}vh`, `${p.y}vh`],
                opacity: [0.1, 0.4, 0.1]
            }}
            transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: "linear"
            }}
            style={{
                position: 'absolute',
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: '#ffffff',
                borderRadius: '50%',
                boxShadow: `0 0 ${p.size * 2}px rgba(255,255,255,0.8)`
            }}
          />
        ))}
      </div>

      {/* 3. The X-Ray "Hidden Tech Grid" Layer revealed by mouse */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100vw',
          height: '100vh',
          zIndex: -1,
          pointerEvents: 'none',
          backgroundImage: `
            linear-gradient(rgba(255, 255, 255, 0.05) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(255, 255, 255, 0.05) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '4vw 4vw, 4vw 4vw, 4px 4px', // Responsive grid sizing
          
          maskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 400px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
        }}
      />

      {/* 4. Mouse Follower Torch/Spotlight */}
      <div 
        style={{
            position: 'fixed',
            top: mousePosition.y - 200, 
            left: mousePosition.x - 200,
            width: '400px',
            height: '400px',
            borderRadius: '50%',
            background: 'radial-gradient(circle, rgba(255,255,255,0.03) 0%, transparent 70%)',
            zIndex: -1,
            pointerEvents: 'none',
        }}
      />
    </>
  );
};

export default ReactiveBackground;

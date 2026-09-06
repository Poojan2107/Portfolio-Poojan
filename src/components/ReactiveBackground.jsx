import React, { useEffect, useState } from 'react';
import { motion, useReducedMotion } from 'framer-motion';

const ReactiveBackground = () => {
  const reduceMotion = useReducedMotion();
  const [mousePosition, setMousePosition] = useState({ x: -9999, y: -9999 });
  const [particles, setParticles] = useState([]);

  useEffect(() => {
    const generatedParticles = Array.from({ length: reduceMotion ? 0 : 22 }).map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 2 + 0.8,
      duration: Math.random() * 18 + 14,
      delay: Math.random() * -20
    }));
    setParticles(generatedParticles);

    if (reduceMotion) return undefined;

    let raf = 0;
    const handleMouseMove = (e) => {
      cancelAnimationFrame(raf);
      raf = requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, [reduceMotion]);

  return (
    <>
      <div className="bg-void" aria-hidden="true" />
      <div className="bg-vignette" aria-hidden="true" />
      <div className="bg-noise" aria-hidden="true" />

      {!reduceMotion && (
        <div className="bg-particles" aria-hidden="true">
          {particles.map((p) => (
            <motion.div
              key={p.id}
              initial={{ y: `${p.y}vh`, x: `${p.x}vw`, opacity: 0 }}
              animate={{
                y: [`${p.y}vh`, `${p.y - 8}vh`, `${p.y}vh`],
                opacity: [0.08, 0.28, 0.08]
              }}
              transition={{
                duration: p.duration,
                delay: p.delay,
                repeat: Infinity,
                ease: 'linear'
              }}
              style={{
                position: 'absolute',
                width: `${p.size}px`,
                height: `${p.size}px`,
                background: 'rgba(255,255,255,0.85)',
                borderRadius: '50%'
              }}
            />
          ))}
        </div>
      )}

      {!reduceMotion && (
        <div
          className="bg-grid-reveal"
          style={{
            maskImage: `radial-gradient(circle 320px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
            WebkitMaskImage: `radial-gradient(circle 320px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          }}
          aria-hidden="true"
        />
      )}

      {!reduceMotion && (
        <div
          className="bg-torch"
          style={{
            top: mousePosition.y - 180,
            left: mousePosition.x - 180,
          }}
          aria-hidden="true"
        />
      )}
    </>
  );
};

export default ReactiveBackground;

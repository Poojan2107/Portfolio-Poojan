import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  
  // High-performance springs for the core
  const springConfig = { stiffness: 1000, damping: 50, mass: 0.1 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  // Softer springs for the ghost ring (the trail)
  const trailX = useSpring(mouseX, { stiffness: 250, damping: 30, mass: 0.8 });
  const trailY = useSpring(mouseY, { stiffness: 250, damping: 30, mass: 0.8 });

  const [targetType, setTargetType] = useState('default'); // 'default', 'link', 'project', 'text'

  useEffect(() => {
    const handleMouseMove = (e) => {
      mouseX.set(e.clientX);
      mouseY.set(e.clientY);
    };

    const handleMouseOver = (e) => {
      const target = e.target;
      if (target.closest('a') || target.closest('button')) {
        setTargetType('link');
      } else if (target.closest('.group')) {
        setTargetType('project');
      } else if (target.tagName === 'P' || target.tagName === 'H1' || target.tagName === 'H2' || target.tagName === 'H3') {
        setTargetType('text');
      } else {
        setTargetType('default');
      }
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, [mouseX, mouseY]);

  return (
    <>
      {/* Ghost Trail Ring - Now uses decoupled springs */}
      <motion.div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: trailX,
          y: trailY,
          width: '40px',
          height: '40px',
          border: '1px solid rgba(255, 255, 255, 0.2)',
          borderRadius: targetType === 'project' ? '10%' : '50%',
          rotate: targetType === 'project' ? 45 : 0,
          pointerEvents: 'none',
          zIndex: 9998,
          translateX: '-50%',
          translateY: '-50%',
          transition: 'border-radius 0.3s, rotate 0.3s',
          willChange: 'transform'
        }}
      />

      {/* Main Core Cursor - Optimized with MotionValues */}
      <motion.div
        animate={{
          scale: targetType !== 'default' ? 1.5 : 1,
          width: targetType === 'text' ? '2px' : '8px',
          height: targetType === 'text' ? '24px' : '8px',
          borderRadius: targetType === 'text' ? '0%' : '50%',
        }}
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          x: cursorX,
          y: cursorY,
          backgroundColor: '#fff',
          pointerEvents: 'none',
          zIndex: 9999,
          translateX: '-50%',
          translateY: '-50%',
          mixBlendMode: 'difference',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          willChange: 'transform'
        }}
      >
      </motion.div>
      {/* Hide default cursor globally */}
      <style>{`
        * { cursor: none !important; }
      `}</style>
    </>
  );
};

export default CustomCursor;

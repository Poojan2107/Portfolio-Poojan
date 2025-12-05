import React, { useEffect, useState } from 'react';
import { motion, useSpring, useMotionValue } from 'framer-motion';

const CustomCursor = () => {
  const [isHovering, setIsHovering] = useState(false);
  const cursorX = useMotionValue(-100);
  const cursorY = useMotionValue(-100);

  const springConfig = { damping: 25, stiffness: 700 };
  const cursorXSpring = useSpring(cursorX, springConfig);
  const cursorYSpring = useSpring(cursorY, springConfig);

  useEffect(() => {
    const moveCursor = (e) => {
      cursorX.set(e.clientX - 16); // Center the 32px cursor
      cursorY.set(e.clientY - 16);
    };

    const handleMouseOver = (e) => {
        if (e.target.tagName === 'A' || e.target.tagName === 'BUTTON' || e.target.closest('a') || e.target.closest('button') || e.target.closest('.interactive')) {
            setIsHovering(true);
        } else {
            setIsHovering(false);
        }
    };

    window.addEventListener('mousemove', moveCursor);
    window.addEventListener('mouseover', handleMouseOver);

    return () => {
      window.removeEventListener('mousemove', moveCursor);
      window.removeEventListener('mouseover', handleMouseOver);
    };
  }, []);

  return (
    <>
      <motion.div
        style={{
          translateX: cursorXSpring,
          translateY: cursorYSpring,
          position: 'fixed',
          top: 0,
          left: 0,
          pointerEvents: 'none',
          zIndex: 9999,
        }}
        className="custom-cursor-wrapper"
      >
        <motion.div
            animate={{
                scale: isHovering ? 2.5 : 1,
                backgroundColor: isHovering ? 'rgba(0, 242, 255, 0.2)' : 'transparent',
                border: isHovering ? '1px solid rgba(0, 242, 255, 0.5)' : '2px solid var(--accent-primary)',
            }}
            transition={{ type: "spring", stiffness: 300, damping: 20 }}
            style={{
                width: '32px',
                height: '32px',
                borderRadius: '50%',
                boxShadow: isHovering ? '0 0 20px rgba(0, 242, 255, 0.4)' : '0 0 10px var(--accent-primary)',
            }}
        />
        {/* Center Dot */}
        {!isHovering && (
             <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '4px',
                height: '4px',
                backgroundColor: 'white',
                borderRadius: '50%'
             }}></div>
        )}
      </motion.div>
    </>
  );
};

export default CustomCursor;

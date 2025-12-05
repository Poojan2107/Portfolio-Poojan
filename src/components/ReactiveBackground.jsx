import React, { useEffect, useState } from 'react';

const ReactiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Use requestAnimationFrame for smoother performance
      requestAnimationFrame(() => {
        setMousePosition({ x: e.clientX, y: e.clientY });
      });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <>
      {/* 1. Base Ambient Glow (Existing) */}
      <div 
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -2,
          background: `
            radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%),
            radial-gradient(800px at ${window.innerWidth - mousePosition.x}px ${window.innerHeight - mousePosition.y}px, rgba(124, 58, 237, 0.15), transparent 80%)
          `,
          pointerEvents: 'none'
        }}
      />

      {/* 2. The X-Ray "Hidden Tech" Layer */}
      <div
        style={{
          position: 'fixed',
          top: 0,
          left: 0,
          width: '100%',
          height: '100%',
          zIndex: -1,
          pointerEvents: 'none',
          // The Pattern: A high-tech grid + digital noise
          backgroundImage: `
            linear-gradient(rgba(0, 242, 255, 0.07) 1px, transparent 1px), 
            linear-gradient(90deg, rgba(0, 242, 255, 0.07) 1px, transparent 1px),
            radial-gradient(circle at 50% 50%, rgba(255, 255, 255, 0.05) 1px, transparent 1px)
          `,
          backgroundSize: '40px 40px, 40px 40px, 4px 4px', // Grid size + dots
          
          // The Magic: Masking it to the mouse
          maskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
          WebkitMaskImage: `radial-gradient(circle 300px at ${mousePosition.x}px ${mousePosition.y}px, black 0%, transparent 100%)`,
        }}
      >
        {/* Optional: Add random tech data points or decoration inside if needed later */}
      </div>

      {/* 3. A subtle "Cursor Spotlight" ring to emphasize the torch */}
      <div 
        style={{
            position: 'fixed',
            top: mousePosition.y - 150, // Center the 300px circle
            left: mousePosition.x - 150,
            width: '300px',
            height: '300px',
            borderRadius: '50%',
            border: '1px solid rgba(0, 242, 255, 0.1)',
            boxShadow: '0 0 50px rgba(0, 242, 255, 0.05), inset 0 0 20px rgba(0, 242, 255, 0.05)',
            zIndex: -1,
            pointerEvents: 'none',
            transition: 'transform 0.1s ease-out'
        }}
      />
    </>
  );
};

export default ReactiveBackground;

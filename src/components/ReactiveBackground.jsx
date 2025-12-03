import React, { useEffect, useState } from 'react';

const ReactiveBackground = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        background: `
          radial-gradient(600px at ${mousePosition.x}px ${mousePosition.y}px, rgba(29, 78, 216, 0.15), transparent 80%),
          radial-gradient(800px at ${window.innerWidth - mousePosition.x}px ${window.innerHeight - mousePosition.y}px, rgba(124, 58, 237, 0.15), transparent 80%)
        `,
        transition: 'background 0.2s ease-out', // Smooth out the movement slightly
        pointerEvents: 'none'
      }}
    />
  );
};

export default ReactiveBackground;

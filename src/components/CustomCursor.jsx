import React, { useEffect, useState } from 'react';
import { motion, useMotionValue, useSpring } from 'framer-motion';

const CustomCursor = () => {
    const [isHovering, setIsHovering] = useState(false);
    
    // Mouse position
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    // Smooth spring animation for the cursor follower
    const springConfig = { damping: 20, stiffness: 300, mass: 0.5 };
    const cursorX = useSpring(mouseX, springConfig);
    const cursorY = useSpring(mouseY, springConfig);

    useEffect(() => {
        const moveMouse = (e) => {
            mouseX.set(e.clientX);
            mouseY.set(e.clientY);
        };

        const handleMouseDown = () => setIsHovering(true);
        const handleMouseUp = () => setIsHovering(false);

        // Add hover effect listeners to clickable elements
        const handleLinkHoverStart = () => setIsHovering(true);
        const handleLinkHoverEnd = () => setIsHovering(false);

        window.addEventListener('mousemove', moveMouse);
        window.addEventListener('mousedown', handleMouseDown);
        window.addEventListener('mouseup', handleMouseUp);

        // Attach listeners to all standard clickable elements
        const clickables = document.querySelectorAll('a, button, .clickable');
        clickables.forEach(el => {
            el.addEventListener('mouseenter', handleLinkHoverStart);
            el.addEventListener('mouseleave', handleLinkHoverEnd);
        });

        return () => {
            window.removeEventListener('mousemove', moveMouse);
            window.removeEventListener('mousedown', handleMouseDown);
            window.removeEventListener('mouseup', handleMouseUp);
            clickables.forEach(el => {
                el.removeEventListener('mouseenter', handleLinkHoverStart);
                el.removeEventListener('mouseleave', handleLinkHoverEnd);
            });
        };
    }, []);

    return (
        <motion.div
            style={{
                position: 'fixed',
                left: 0,
                top: 0,
                translateX: cursorX,
                translateY: cursorY,
                x: '-50%',
                y: '-50%',
                pointerEvents: 'none',
                zIndex: 9999,
                width: isHovering ? '40px' : '20px',
                height: isHovering ? '40px' : '20px',
                border: '1px solid var(--accent-primary)',
                borderRadius: '50%',
                backgroundColor: isHovering ? 'rgba(0, 242, 255, 0.1)' : 'transparent',
                transition: 'width 0.2s, height 0.2s, background-color 0.2s',
                mixBlendMode: 'screen'
            }}
        >
            {/* Center Dot */}
            <div style={{
                position: 'absolute',
                top: '50%',
                left: '50%',
                transform: 'translate(-50%, -50%)',
                width: '4px',
                height: '4px',
                backgroundColor: 'var(--accent-secondary)',
                borderRadius: '50%'
            }} />
        </motion.div>
    );
};

export default CustomCursor;

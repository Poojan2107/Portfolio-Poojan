import React, { useEffect, useState, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const TerminalIntro = ({ onComplete }) => {
  const [lines, setLines] = useState([
    "Initializing system core...",
  ]);
  const [isAccessGranted, setIsAccessGranted] = useState(false);
  const scrollRef = useRef(null);

  const SEQUENCE = [
    { text: "Loading modules...", delay: 200 },
    { text: "Verifying user identity...", delay: 400 },
    { text: "User detected: POOJAN SHRIVASTAV", delay: 800 },
    { text: "Retrieving skills database...", delay: 1100 },
    { text: "CONNECTING TO MAIN FRAME", delay: 1500 },
    { text: "Downloading portfolio assets...", delay: 1800 },
    { text: "Compiling interface...", delay: 2100 },
    { text: "COMPLETE.", delay: 2400 },
  ];

  useEffect(() => {
    let timeouts = [];

    // Add lines linearly
    SEQUENCE.forEach(({ text, delay }) => {
      const timeout = setTimeout(() => {
        setLines((prev) => [...prev, text]);
      }, delay);
      timeouts.push(timeout);
    });

    // Access granted phase
    const accessTimeout = setTimeout(() => {
        setIsAccessGranted(true);
    }, 2800);
    timeouts.push(accessTimeout);

    // End sequence
    const completeTimeout = setTimeout(() => {
        onComplete();
    }, 3800);
    timeouts.push(completeTimeout);

    return () => timeouts.forEach(clearTimeout);
  }, [onComplete]);

  // Auto-scroll
  useEffect(() => {
    if (scrollRef.current) {
        scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [lines]);

  return (
    <motion.div
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 1.1, filter: 'blur(10px)' }}
      transition={{ duration: 0.8 }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100vw',
        height: '100vh',
        background: '#0a0a0a',
        zIndex: 99999,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '"Fira Code", monospace',
        overflow: 'hidden'
      }}
    >
        {/* Matrix Rain / CRT Overlay Effect (Optional but cool) */}
        <div style={{
            position: 'absolute',
            top: 0, 
            left: 0,
            width: '100%',
            height: '100%',
            background: 'linear-gradient(rgba(18, 16, 16, 0) 50%, rgba(0, 0, 0, 0.25) 50%), linear-gradient(90deg, rgba(255, 0, 0, 0.06), rgba(0, 255, 0, 0.02), rgba(0, 0, 255, 0.06))',
            backgroundSize: '100% 2px, 3px 100%',
            pointerEvents: 'none',
            zIndex: 10
        }} />

        <div 
            style={{ 
                width: 'min(600px, 90vw)', 
                height: '400px',
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'flex-start', // Top alignment
                position: 'relative',
                zIndex: 5
            }}
        >
            <div ref={scrollRef} style={{ height: '80%', overflow: 'hidden', color: '#00f2ff', opacity: 0.8, fontSize: '1rem', lineHeight: '1.6' }}>
                {lines.map((line, i) => (
                    <motion.div 
                        key={i}
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.1 }}
                    >
                        <span style={{ color: '#555', marginRight: '10px' }}>{`>`}</span>
                        {line}
                    </motion.div>
                ))}
                {/* Blinking Cursor */}
                <motion.span
                    animate={{ opacity: [0, 1, 0] }}
                    transition={{ repeat: Infinity, duration: 0.8 }}
                    style={{ color: '#00f2ff', marginLeft: '5px' }}
                >
                    _
                </motion.span>
            </div>

            {/* Access Granted Flash */}
            {isAccessGranted && (
                <motion.div
                    initial={{ scale: 0.8, opacity: 0 }}
                    animate={{ scale: 1, opacity: 1 }}
                    style={{
                        position: 'absolute',
                        top: '50%',
                        left: '50%',
                        transform: 'translate(-50%, -50%)',
                        border: '2px solid #00f2ff',
                        padding: '1rem 3rem',
                        background: 'rgba(0, 242, 255, 0.1)',
                        boxShadow: '0 0 30px rgba(0, 242, 255, 0.2)',
                        textAlign: 'center'
                    }}
                >
                    <h1 style={{ margin: 0, fontSize: '2rem', color: '#fff', letterSpacing: '5px' }}>ACCESS GRANTED</h1>
                    <p style={{ margin: '5px 0 0 0', color: '#00f2ff', fontSize: '0.8rem' }}>WELCOME, USER</p>
                </motion.div>
            )}
        </div>
    </motion.div>
  );
};

export default TerminalIntro;

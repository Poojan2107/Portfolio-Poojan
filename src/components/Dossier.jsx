import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const Dossier = () => {
  const [activeTab, setActiveTab] = useState('about');

  const tabs = [
    { id: 'about', label: 'ABOUT.sys' },
    { id: 'skills', label: 'SKILLS.cfg' },
    { id: 'journey', label: 'JOURNEY.log' },
    { id: 'missions', label: 'ACTIVE_MISSIONS.sh' }
  ];

  const currentlyLearning = [
    "RAG Systems",
    "AI Agents",
    "System Design",
    "Open Source Contribution Workflows",
    "Production AI Evaluation"
  ];

  const journeyLog = [
    { year: "2024", text: "Started B.Tech Artificial Intelligence." },
    { year: "2024", text: "Started learning development ecosystems, databases, APIs, and software engineering fundamentals." },
    { year: "2025", text: "Shifted focus toward full-stack product development." },
    { year: "2025", text: "Started building AI-powered applications." },
    { year: "2026", text: "Participated in Build With AI Ahmedabad." },
    { year: "2026", text: "Built OpenBridge." },
    { year: "2026", text: "Secured Runner-Up position." },
    { year: "2026", text: "Acquired first real-world client through Oneverce." },
    { year: "2026", text: "Delivered Tripzy Travel Platform." },
    { year: "2026", text: "Transitioned from project-building to production software engineering." }
  ];

  const activeMissions = [
    { label: "Ship OpenBridge Publicly", status: false },
    { label: "Acquire Client #2", status: false },
    { label: "Contribute to Open Source", status: false },
    { label: "Strengthen AI Fundamentals", status: false },
    { label: "Improve System Design Knowledge", status: false },
    { label: "Prepare for Internship Season", status: false },
    { label: "Strengthen DSA & Problem Solving", status: false },
    { label: "Gain Real-World Engineering Experience", status: false }
  ];

  return (
    <section id="dossier" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: 'var(--bg-primary)' }}>
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', display: 'flex', flexDirection: 'column', gap: '4rem' }}>
        
        {/* Section Header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
           <h2 style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', fontWeight: '900', color: '#fff', margin: 0, lineHeight: 0.8, fontFamily: 'var(--font-display)', letterSpacing: '-3px' }}>
              DOSSIER
           </h2>
           <span style={{ fontSize: '1.2rem', color: '#666', fontFamily: 'var(--font-code)', letterSpacing: '2px', textTransform: 'uppercase' }}>[ / System Index ]</span>
        </div>

        {/* Outer Split Layout */}
        <div className="modal-grid-3" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr', gap: '3rem' }}>
          
          {/* Main Terminal Frame */}
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid rgba(255, 255, 255, 0.08)',
            borderRadius: '12px',
            overflow: 'hidden',
            boxShadow: '0 20px 40px rgba(0,0,0,0.6)',
            display: 'flex',
            flexDirection: 'column',
            minHeight: '450px'
          }}>
            {/* Terminal Window Header Bar */}
            <div style={{
              background: 'rgba(255, 255, 255, 0.02)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              padding: '1rem 1.5rem',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between'
            }}>
              <div style={{ display: 'flex', gap: '0.5rem' }}>
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.2)' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.1)' }} />
                <span style={{ width: '10px', height: '10px', borderRadius: '50%', background: 'rgba(255,255,255,0.05)' }} />
              </div>
              <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.75rem', color: '#666', letterSpacing: '1px' }}>
                GUEST@OS-POOJAN: ~
              </span>
            </div>

            {/* Monospace Tab Selectors */}
            <div style={{
              display: 'flex',
              background: 'rgba(0, 0, 0, 0.5)',
              borderBottom: '1px solid rgba(255, 255, 255, 0.05)',
              flexWrap: 'wrap'
            }}>
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  style={{
                    background: activeTab === tab.id ? 'var(--bg-secondary)' : 'transparent',
                    border: 'none',
                    borderRight: '1px solid rgba(255, 255, 255, 0.05)',
                    padding: '0.8rem 1.5rem',
                    color: activeTab === tab.id ? '#fff' : '#666',
                    fontFamily: 'var(--font-code)',
                    fontSize: '0.8rem',
                    fontWeight: activeTab === tab.id ? 'bold' : 'normal',
                    cursor: 'pointer',
                    outline: 'none',
                    transition: 'all 0.3s',
                    position: 'relative'
                  }}
                >
                  {tab.label}
                  {activeTab === tab.id && (
                    <span style={{ position: 'absolute', bottom: '-1px', left: 0, width: '100%', height: '2px', background: '#fff' }} />
                  )}
                </button>
              ))}
            </div>

            {/* Terminal Body Content */}
            <div style={{ padding: '2.5rem', flex: 1, fontFamily: 'var(--font-code)', fontSize: '0.95rem', color: '#ccc', lineHeight: 1.7 }}>
              <AnimatePresence mode="wait">
                {activeTab === 'about' && (
                  <motion.div
                    key="about"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <p style={{ color: '#fff', fontSize: '1.1rem', fontWeight: 'bold' }}>
                        // IDENTITY: POOJAN P. SHRIVASTAV
                      </p>
                      <p>
                        Most projects never leave development. Most ideas never reach real users. Most students stop after tutorials.
                      </p>
                      <p style={{ borderLeft: '2px solid #fff', paddingLeft: '1rem', color: '#fff' }}>
                        I focus on shipping production software, building AI-powered systems, contributing to open-source ecosystems, and learning through real-world implementation.
                      </p>
                      <p>
                        Recently delivered a production travel booking platform for a tourism business with 15+ years of industry experience and currently building OpenBridge to simplify open-source onboarding for developers.
                      </p>
                      <p style={{ color: '#666', marginTop: '1rem' }}>
                        &gt; CORE_BELIEF: The fastest way to learn is by building.
                      </p>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'skills' && (
                  <motion.div
                    key="skills"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}>
                      <p style={{ color: '#fff', fontWeight: 'bold' }}>// PRIMARY STACK CAPABILITIES</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
                        <p><span style={{ color: '#fff' }}>Frontend:</span> React, Next.js, TypeScript, JavaScript, HTML, CSS, Tailwind CSS</p>
                        <p><span style={{ color: '#fff' }}>Backend:</span> Node.js, Express.js, REST APIs, Authentication, WebSockets</p>
                        <p><span style={{ color: '#fff' }}>Databases:</span> PostgreSQL, MongoDB, Supabase, Firebase, Prisma ORM</p>
                        <p><span style={{ color: '#fff' }}>AI Systems:</span> Gemini API, OpenAI API, LangChain, Prompt Engineering, Machine Learning, RAG Systems</p>
                        <p><span style={{ color: '#fff' }}>Developer Tools:</span> Git, GitHub, Prisma ORM, Postman, Vercel, Supabase</p>
                      </div>
                    </div>
                  </motion.div>
                )}

                {activeTab === 'journey' && (
                  <motion.div
                    key="journey"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxHeight: '300px', overflowY: 'auto', paddingRight: '1rem' }}>
                      <p style={{ color: '#fff', fontWeight: 'bold' }}>// CHRONOLOGICAL SHIPPING LOG</p>
                      {journeyLog.map((log, idx) => (
                        <div key={idx} style={{ display: 'flex', gap: '1.5rem', borderBottom: '1px solid rgba(255,255,255,0.03)', paddingBottom: '0.6rem' }}>
                          <span style={{ color: '#fff', fontWeight: 'bold' }}>[{log.year}]</span>
                          <span>{log.text}</span>
                        </div>
                      ))}
                    </div>
                  </motion.div>
                )}

                {activeTab === 'missions' && (
                  <motion.div
                    key="missions"
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                  >
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                      <p style={{ color: '#fff', fontWeight: 'bold' }}>// ACTIVE MISSIONS & ROADMAP</p>
                      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                        {activeMissions.map((mission, idx) => (
                          <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                            <span style={{ 
                              width: '14px', 
                              height: '14px', 
                              border: '1px solid #fff', 
                              display: 'inline-flex',
                              alignItems: 'center',
                              justifyContent: 'center',
                              fontSize: '0.6rem',
                              color: '#fff'
                            }}>
                              {mission.status ? "x" : " "}
                            </span>
                            <span style={{ color: mission.status ? '#666' : '#ccc' }}>
                              {mission.label}
                            </span>
                          </div>
                        ))}
                      </div>
                      <p style={{ color: '#666', fontSize: '0.75rem', marginTop: '1rem' }}>
                        * Goals represent target zones of exploration and production shipping.
                      </p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          </div>

          {/* Right Section: Currently Learning Card */}
          <div style={{
            background: 'rgba(255, 255, 255, 0.01)',
            border: '1px solid rgba(255, 255, 255, 0.05)',
            borderRadius: '12px',
            padding: '2.5rem',
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center'
          }} className="currently-learning-card">
            <span style={{ fontFamily: 'var(--font-code)', fontSize: '0.7rem', color: '#666', letterSpacing: '2px', textTransform: 'uppercase' }}>
              [ PIPELINE GROWTH ]
            </span>
            <h4 style={{ color: '#fff', fontSize: '1.5rem', fontFamily: 'var(--font-display)', marginTop: '0.5rem', marginBottom: '2rem', textTransform: 'uppercase', letterSpacing: '-1px' }}>
              CURRENTLY LEARNING
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.2rem', fontFamily: 'var(--font-code)', fontSize: '0.85rem' }}>
              {currentlyLearning.map((item, idx) => (
                <div key={idx} style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                  <span style={{ width: '4px', height: '4px', background: '#fff', borderRadius: '50%' }}></span>
                  <span style={{ color: '#aaa' }}>{item}</span>
                </div>
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
};

export default Dossier;

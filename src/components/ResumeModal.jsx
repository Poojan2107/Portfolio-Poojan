import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaPrint, FaCopy, FaTimes, FaCheck } from 'react-icons/fa';
import resumeData from '../constants/resume.json';

const ResumeModal = ({ isOpen, onClose }) => {
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePrint = () => {
    window.print();
  };

  const handleCopyText = () => {
    const rawText = `
POOJAN PALAKKUMAR SHRIVASTAV
${resumeData.basics.label}
${resumeData.basics.email} | ${resumeData.basics.phone} | ${resumeData.basics.location}
LinkedIn: ${resumeData.basics.profiles.linkedin} | GitHub: ${resumeData.basics.profiles.github} | Portfolio: ${resumeData.basics.website}

PROFESSIONAL SUMMARY
${resumeData.basics.summary}

SKILLS
• Languages: ${resumeData.skills.languages.join(', ')}
• Frontend: ${resumeData.skills.frontend.join(', ')}
• Backend & Infrastructure: ${resumeData.skills.backend.join(', ')}
• Databases & Cloud: ${resumeData.skills.databases_cloud.join(', ')}
• AI & Machine Learning: ${resumeData.skills.ai_ml.join(', ')}
• Tools & QA: ${resumeData.skills.tools_qa.join(', ')}

WORK EXPERIENCE
${resumeData.experience.map(exp => `
${exp.position} — ${exp.company} | ${exp.period} | ${exp.location}
${exp.bullets.map(b => `• ${b}`).join('\n')}
`).join('\n')}

PROJECTS
${resumeData.projects.map(proj => `
${proj.name} | ${proj.period} (${proj.link})
Tech Stack: ${proj.tech}
• ${proj.description}
`).join('\n')}

EDUCATION
${resumeData.education.degree} — ${resumeData.education.institution} | ${resumeData.education.period}

HONORS & ACHIEVEMENTS
${resumeData.achievements.map(a => `• ${a}`).join('\n')}
    `.trim();

    navigator.clipboard.writeText(rawText);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        className="resume-modal-overlay"
        style={{
          position: 'fixed',
          inset: 0,
          background: 'rgba(0, 0, 0, 0.95)',
          backdropFilter: 'blur(20px)',
          zIndex: 9999,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          overflowY: 'auto',
          padding: '1.5rem 1rem'
        }}
      >
        {/* Floating Top Control Bar (Hidden on Print) */}
        <div 
          className="no-print"
          style={{
            position: 'sticky',
            top: '1rem',
            zIndex: 10000,
            display: 'flex',
            gap: '1rem',
            alignItems: 'center',
            background: '#0a0a0a',
            border: '1px solid rgba(255, 255, 255, 0.25)',
            padding: '0.6rem 1.4rem',
            borderRadius: '50px',
            boxShadow: '0 10px 40px rgba(0,0,0,0.95)',
            marginBottom: '1.5rem'
          }}
        >
          <button
            onClick={handlePrint}
            style={{
              padding: '0.5rem 1.2rem',
              background: '#ffffff',
              color: '#000000',
              border: 'none',
              borderRadius: '30px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-code)',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            <FaPrint /> PRINT / SAVE AS PDF (1-PAGE)
          </button>

          <button
            onClick={handleCopyText}
            style={{
              padding: '0.5rem 1.2rem',
              background: 'rgba(255, 255, 255, 0.08)',
              color: '#ffffff',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              borderRadius: '30px',
              fontWeight: 'bold',
              fontFamily: 'var(--font-code)',
              fontSize: '0.8rem',
              cursor: 'pointer',
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem'
            }}
          >
            {copied ? <FaCheck style={{ color: '#00ffcc' }} /> : <FaCopy />} {copied ? 'COPIED' : 'COPY RAW TEXT'}
          </button>

          <button
            onClick={onClose}
            style={{
              width: '34px',
              height: '34px',
              borderRadius: '50%',
              background: 'rgba(255, 255, 255, 0.1)',
              border: '1px solid rgba(255, 255, 255, 0.2)',
              color: '#ffffff',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: 'pointer',
              fontSize: '0.9rem'
            }}
          >
            <FaTimes />
          </button>
        </div>

        {/* Printable ATS Resume Document Frame (Strict 1-Page Layout) */}
        <div
          id="printable-resume"
          style={{
            width: '100%',
            maxWidth: '800px',
            background: '#ffffff',
            color: '#111111',
            padding: '2rem 2.5rem',
            borderRadius: '6px',
            boxShadow: '0 20px 60px rgba(0,0,0,0.9)',
            fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif',
            fontSize: '9pt',
            lineHeight: '1.35',
            boxSizing: 'border-box'
          }}
        >
          {/* Header */}
          <div style={{ borderBottom: '1.5px solid #111111', paddingBottom: '0.5rem', marginBottom: '0.6rem' }}>
            <h1 style={{ fontSize: '18pt', fontWeight: '800', margin: 0, color: '#000000', textTransform: 'uppercase', letterSpacing: '-0.5px' }}>
              {resumeData.basics.name}
            </h1>
            <div style={{ fontSize: '9.5pt', fontWeight: '700', color: '#222222', marginTop: '2px' }}>
              {resumeData.basics.label}
            </div>
            <div style={{ fontSize: '8.5pt', color: '#444444', marginTop: '4px', display: 'flex', flexWrap: 'wrap', gap: '0.8rem' }}>
              <span>✉ {resumeData.basics.email}</span>
              <span>📞 {resumeData.basics.phone}</span>
              <span>📍 {resumeData.basics.location}</span>
            </div>
            <div style={{ fontSize: '8.5pt', color: '#111111', marginTop: '3px', display: 'flex', flexWrap: 'wrap', gap: '1rem', fontWeight: '600' }}>
              <a href={resumeData.basics.profiles.linkedin} target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none' }}>
                LinkedIn: linkedin.com/in/poojanshrivastav21
              </a>
              <a href={resumeData.basics.profiles.github} target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none' }}>
                GitHub: github.com/Poojan2107
              </a>
              <a href={resumeData.basics.website} target="_blank" rel="noreferrer" style={{ color: '#111', textDecoration: 'none' }}>
                Portfolio: portfolio-poojan.vercel.app
              </a>
            </div>
          </div>

          {/* Professional Summary */}
          <div style={{ marginBottom: '0.6rem' }}>
            <h2 style={{ fontSize: '9.5pt', fontWeight: '800', textTransform: 'uppercase', borderBottom: '1px solid #dddddd', paddingBottom: '2px', marginBottom: '4px', letterSpacing: '0.5px' }}>
              PROFESSIONAL SUMMARY
            </h2>
            <p style={{ margin: 0, fontSize: '8.8pt', color: '#222222', textAlign: 'justify' }}>
              {resumeData.basics.summary}
            </p>
          </div>

          {/* Technical Skills */}
          <div style={{ marginBottom: '0.6rem' }}>
            <h2 style={{ fontSize: '9.5pt', fontWeight: '800', textTransform: 'uppercase', borderBottom: '1px solid #dddddd', paddingBottom: '2px', marginBottom: '4px', letterSpacing: '0.5px' }}>
              TECHNICAL SKILLS
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '2px', fontSize: '8.5pt' }}>
              <div><strong>Languages:</strong> {resumeData.skills.languages.join(', ')}</div>
              <div><strong>Frontend:</strong> {resumeData.skills.frontend.join(', ')}</div>
              <div><strong>Backend & Cloud:</strong> {resumeData.skills.backend.concat(resumeData.skills.databases_cloud).join(', ')}</div>
              <div><strong>AI & Testing:</strong> {resumeData.skills.ai_ml.concat(resumeData.skills.tools_qa).join(', ')}</div>
            </div>
          </div>

          {/* Work Experience */}
          <div style={{ marginBottom: '0.6rem' }}>
            <h2 style={{ fontSize: '9.5pt', fontWeight: '800', textTransform: 'uppercase', borderBottom: '1px solid #dddddd', paddingBottom: '2px', marginBottom: '6px', letterSpacing: '0.5px' }}>
              WORK EXPERIENCE
            </h2>
            {resumeData.experience.map((exp, idx) => (
              <div key={idx} style={{ marginBottom: idx === resumeData.experience.length - 1 ? 0 : '6px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 'bold', fontSize: '9pt' }}>
                  <span>{exp.position} — <span style={{ color: '#000000' }}>{exp.company}</span></span>
                  <span style={{ fontSize: '8.5pt', fontWeight: '600' }}>{exp.period} | {exp.location}</span>
                </div>
                <ul style={{ margin: '2px 0 0 0', paddingLeft: '16px', fontSize: '8.5pt', color: '#222222' }}>
                  {exp.bullets.map((b, bIdx) => (
                    <li key={bIdx} style={{ marginBottom: '1px' }}>{b}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          {/* Key Projects */}
          <div style={{ marginBottom: '0.6rem' }}>
            <h2 style={{ fontSize: '9.5pt', fontWeight: '800', textTransform: 'uppercase', borderBottom: '1px solid #dddddd', paddingBottom: '2px', marginBottom: '6px', letterSpacing: '0.5px' }}>
              KEY PROJECTS
            </h2>
            {resumeData.projects.map((proj, idx) => (
              <div key={idx} style={{ marginBottom: idx === resumeData.projects.length - 1 ? 0 : '4px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontWeight: 'bold', fontSize: '9pt' }}>
                  <span>{proj.name} <span style={{ fontWeight: 'normal', fontSize: '8pt', color: '#555' }}>({proj.tech})</span></span>
                  <span style={{ fontSize: '8pt', fontWeight: '600' }}>{proj.period}</span>
                </div>
                <div style={{ fontSize: '8.5pt', color: '#222222', marginTop: '1px', paddingLeft: '8px', borderLeft: '2px solid #eee' }}>
                  {proj.description}
                </div>
              </div>
            ))}
          </div>

          {/* Education */}
          <div style={{ marginBottom: '0.6rem' }}>
            <h2 style={{ fontSize: '9.5pt', fontWeight: '800', textTransform: 'uppercase', borderBottom: '1px solid #dddddd', paddingBottom: '2px', marginBottom: '4px', letterSpacing: '0.5px' }}>
              EDUCATION
            </h2>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'baseline', fontSize: '9pt' }}>
              <span><strong>{resumeData.education.degree}</strong> — <em>{resumeData.education.institution}</em></span>
              <span style={{ fontSize: '8.5pt', fontWeight: '600' }}>{resumeData.education.period}</span>
            </div>
          </div>

          {/* Honors & Achievements */}
          <div>
            <h2 style={{ fontSize: '9.5pt', fontWeight: '800', textTransform: 'uppercase', borderBottom: '1px solid #dddddd', paddingBottom: '2px', marginBottom: '4px', letterSpacing: '0.5px' }}>
              HONORS & ACHIEVEMENTS
            </h2>
            <ul style={{ margin: 0, paddingLeft: '16px', fontSize: '8.5pt', color: '#222222' }}>
              {resumeData.achievements.map((ach, idx) => (
                <li key={idx} style={{ marginBottom: '1px' }}>{ach}</li>
              ))}
            </ul>
          </div>

        </div>

        {/* Strict 1-Page CSS Print Rules */}
        <style>{`
          @media print {
            @page {
              size: letter;
              margin: 0.3in 0.35in;
            }
            body {
              background: #ffffff !important;
              color: #000000 !important;
            }
            .no-print, .resume-modal-overlay {
              position: static !important;
              background: transparent !important;
              padding: 0 !important;
              backdrop-filter: none !important;
            }
            .no-print {
              display: none !important;
            }
            #printable-resume {
              box-shadow: none !important;
              border: none !important;
              padding: 0 !important;
              max-width: 100% !important;
              width: 100% !important;
            }
          }
        `}</style>
      </motion.div>
    </AnimatePresence>
  );
};

export default ResumeModal;

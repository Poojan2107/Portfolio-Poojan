import { motion } from 'framer-motion';

const Missions = () => {
  const activeMissions = [
    {
      symbol: "01",
      title: "KARYAUP",
      role: "Developer Intern · SaaS Track",
      status: "NOW · COMPANY PRODUCT",
      link: "https://karyaup.com",
      description: "Same org, product track: joined Jul 2026 on an existing MVP; became primary engineering contributor on karyaUp_Website (~96% post-join). Analytics HQ, S3/CDN, Vercel, KAI, geo pricing, SPA SEO.",
    },
    {
      symbol: "02",
      title: "13 UTOPIA",
      role: "Developer Intern · Agency Track",
      status: "NOW · CLIENT DELIVERY",
      link: "https://13-utopia.vercel.app/",
      description: "Same org, agency track: built FormX, AIA, and Navkar client platforms from scratch.",
    },
    {
      symbol: "03",
      title: "ONEVERCE / TRAVEBIE",
      role: "Co-Founder & Full Stack · Freelance",
      status: "DELIVERED · ACCESS PAUSED",
      link: "https://www.travebie.com/",
      description: "Freelance with Oneverce (not internship): shipped Travebie (travebie.com) — 19-intent AI itinerary engine, 18 chat cards, Playwright E2E, PWA. Live access currently paused pending client payment.",
    },
    {
      symbol: "04",
      title: "OPENBRIDGE",
      role: "AI Open Source Platform",
      status: "RECENT · RUNNER-UP",
      link: "https://openbridge-in.vercel.app/",
      description: "Built OpenBridge — Gemini-powered open-source onboarding (repo matching, issue translation, 4-week roadmaps, GSoC/LFX discovery). Runner-Up at Build With AI Ahmedabad.",
    }
  ];

  return (
    <section id="experience" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: 'var(--bg-primary)' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
           <h2 style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', fontWeight: '900', color: '#fff', margin: 0, lineHeight: 0.8, fontFamily: 'var(--font-display)', letterSpacing: '-3px' }}>
              EXPERIENCE
           </h2>
           <span style={{ fontSize: '1.2rem', color: '#666', fontFamily: 'var(--font-code)', letterSpacing: '2px', textTransform: 'uppercase' }}>[ Current Work ]</span>
        </div>

        <div style={{ display: 'flex', flexDirection: 'column' }}>
          {activeMissions.map((mission, index) => (
            <motion.div 
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: index * 0.15 }}
              style={{
                  display: 'flex',
                  alignItems: 'center',
                  padding: '4rem 0',
                  borderBottom: '1px solid rgba(255,255,255,0.05)',
                  position: 'relative',
                  flexWrap: 'wrap',
                  gap: '2rem'
              }}
              className="group"
            >
               <div style={{ flex: '0 0 auto', width: '300px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <span style={{ fontSize: '1.5rem', fontFamily: 'var(--font-code)', color: '#555', fontWeight: '700' }}>{mission.symbol}</span>
                   <div>
                     <p style={{ fontSize: '1rem', color: '#555', fontFamily: 'var(--font-code)', letterSpacing: '1px', fontWeight: 'bold', margin: 0 }}>
                       {mission.role}
                     </p>
                     <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', marginTop: '0.4rem' }}>
                        <span style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyber)', boxShadow: '0 0 10px var(--accent-cyber)' }}></span>
                        <span style={{ color: '#fff', fontSize: '0.75rem', fontWeight: 'bold', textTransform: 'uppercase', letterSpacing: '2px' }}>{mission.status}</span>
                     </div>
                   </div>
                 </div>
               </div>

               <div style={{ flex: '1', display: 'flex', flexDirection: 'column', gap: '1rem', minWidth: '300px' }}>
                  <a
                    href={mission.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ textDecoration: 'none' }}
                  >
                    <h3 style={{ 
                          fontSize: 'clamp(2rem, 4vw, 4rem)', 
                          fontWeight: '900', 
                          color: '#fff', 
                          margin: 0, 
                          fontFamily: 'var(--font-display)',
                          letterSpacing: '-2px',
                          textTransform: 'uppercase',
                          lineHeight: 1,
                          transition: 'color 0.3s'
                    }}
                    onMouseEnter={(e) => e.target.style.color = 'var(--accent-primary)'}
                    onMouseLeave={(e) => e.target.style.color = '#fff'}
                    >
                        {mission.title} ↗
                    </h3>
                  </a>
                  
                  <p style={{ color: '#888', fontSize: '1.1rem', lineHeight: 1.6, maxWidth: '600px', marginTop: '0.5rem' }}>
                     {mission.description}
                  </p>
               </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Missions;

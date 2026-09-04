import { motion } from 'framer-motion';

const Missions = () => {
  const activeMissions = [
    {
      symbol: "⚡",
      title: "KARYAUP",
      role: "Developer Intern",
      status: "NOW · PRODUCTION SAAS",
      link: "https://karyaup.com",
      description: "Shipping production AI CRM features: first-party Analytics HQ, IP geo pricing, MongoDB → AWS S3/CloudFront migration, AI voice calling, and an ~80% payload sprint (36MB → 6.89MB) with Nginx token-stream flushing.",
    },
    {
      symbol: "🎨",
      title: "13 UTOPIA",
      role: "Full Stack Developer",
      status: "NOW · CLIENT DELIVERY",
      link: "https://formxconsultants.com/",
      description: "Delivered FormX Consultants (40+ route Next.js 16 architectural platform) and Navkar Tubes & Tools (industrial procurement site with pipe weight calculator and serverless inquiry APIs).",
    },
    {
      symbol: "🚀",
      title: "ONEVERCE / TRAVEBIE",
      role: "Co-Founder & Product Engineer",
      status: "NOW · LIVE PRODUCT",
      link: "https://www.travebie.com/",
      description: "Shipped Travebie (travebie.com): 19-intent AI itinerary engine, 18 chat card UI components, Playwright E2E suite, PWA offline caching, and a React Native admin companion.",
    },
    {
      symbol: "🏆",
      title: "OPENBRIDGE",
      role: "AI Open Source Platform",
      status: "RECENT · RUNNER-UP",
      link: "https://openbridge-in.vercel.app/",
      description: "Built OpenBridge — Gemini-powered open-source onboarding (repo matching, issue translation, 4-week roadmaps, GSoC/LFX discovery). Runner-Up at Build With AI Ahmedabad.",
    }
  ];

  return (
    <section id="missions" style={{ position: 'relative', overflow: 'hidden', padding: '6rem 0', background: 'var(--bg-primary)' }}>
      
      <div className="container" style={{ position: 'relative', zIndex: 1, maxWidth: '1400px', display: 'flex', flexDirection: 'column', gap: '8rem' }}>
        
        {/* Massive Header */}
        <div style={{ display: 'flex', alignItems: 'baseline', gap: '2rem', borderBottom: '1px solid rgba(255,255,255,0.1)', paddingBottom: '2rem' }}>
           <h2 style={{ fontSize: 'clamp(3rem, 8vw, 10rem)', fontWeight: '900', color: '#fff', margin: 0, lineHeight: 0.8, fontFamily: 'var(--font-display)', letterSpacing: '-3px' }}>
              MISSIONS
           </h2>
           <span style={{ fontSize: '1.2rem', color: '#666', fontFamily: 'var(--font-code)', letterSpacing: '2px', textTransform: 'uppercase' }}>[ / Current Status ]</span>
        </div>

        {/* Missions Timeline Row */}
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
               {/* Icon / Status */}
               <div style={{ flex: '0 0 auto', width: '300px' }}>
                 <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                   <span style={{ fontSize: '2.5rem' }}>{mission.symbol}</span>
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

               {/* Title & Description Container */}
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

import React from 'react';

const experiences = [
  {
    role: "Software Engineer (Incoming)",
    company: "BrandmateDigital",
    date: "Starting June 16, 2026",
    description: "Offered a full-time position following a successful 3-month internship. Preparing to transition into the new role to continue building innovative digital solutions.",
    skills: ["React", "Next.js", "Tailwind CSS", "TypeScript", "Node.js"]
  },
  {
    role: "Software Engineering Intern",
    company: "BrandmateDigital",
    date: "March 15, 2026 - June 15, 2026",
    description: "Currently completing a 3-month internship. Contributing to core development projects and collaborating closely with the engineering team, which led to a full-time return offer.",
    skills: ["HTML", "CSS", "JavaScript", "React", "TypeScript", "Node.js"]
  }
];

export default function Experience() {
  const getSkillDisplay = (skillName) => {
    const mapping = {
      "React": { symbol: "⚛️", short: "Re", color: "text-cyan-400 border-cyan-400/50 bg-cyan-950/40" },
      "Next.js": { symbol: "▲", short: "Nx", color: "text-gray-200 border-gray-400/50 bg-gray-800/40" },
      "Tailwind CSS": { symbol: "🌊", short: "Tw", color: "text-teal-400 border-teal-400/50 bg-teal-950/40" },
      "TypeScript": { symbol: "📘", short: "TS", color: "text-blue-400 border-blue-400/50 bg-blue-950/40" },
      "Node.js": { symbol: "🟢", short: "Node", color: "text-green-400 border-green-400/50 bg-green-950/40" },
      "HTML": { symbol: "🌐", short: "HT", color: "text-orange-400 border-orange-400/50 bg-orange-950/40" },
      "CSS": { symbol: "🎨", short: "CS", color: "text-indigo-300 border-indigo-400/50 bg-indigo-950/40" },
      "JavaScript": { symbol: "💛", short: "JS", color: "text-yellow-400 border-yellow-400/50 bg-yellow-950/40" }
    };
    return mapping[skillName] || { symbol: "✨", short: skillName, color: "text-green-300 border-green-400/50 bg-green-950/40" };
  };

  return (
    <section className="relative py-24 px-6 md:px-12 max-w-5xl mx-auto overflow-hidden">
      {/* Custom float animation */}
      <style dangerouslySetInnerHTML={{__html: `
        @keyframes slowFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes drift1 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(40px, -50px) rotate(10deg); }
          66% { transform: translate(-20px, 30px) rotate(-5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes drift2 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-50px, -30px) rotate(-10deg); }
          66% { transform: translate(30px, -40px) rotate(5deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes drift3 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(50px, 50px) rotate(15deg); }
          66% { transform: translate(-40px, -20px) rotate(-10deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
        @keyframes drift4 {
          0% { transform: translate(0, 0) rotate(0deg); }
          33% { transform: translate(-40px, 40px) rotate(-15deg); }
          66% { transform: translate(50px, 20px) rotate(10deg); }
          100% { transform: translate(0, 0) rotate(0deg); }
        }
      `}} />

      {/* Background Floating Symbols */}
      <div className="absolute top-[15%] left-[5%] text-cyan-400/20 font-mono font-bold text-6xl pointer-events-none select-none" style={{ animation: 'drift1 12s ease-in-out infinite' }}>.jsx</div>
      <div className="absolute top-[20%] right-[10%] text-green-400/20 font-mono font-bold text-5xl pointer-events-none select-none" style={{ animation: 'drift2 15s ease-in-out infinite' }}>.node</div>
      <div className="absolute bottom-[30%] left-[8%] text-yellow-400/20 font-mono font-bold text-7xl pointer-events-none select-none" style={{ animation: 'drift3 18s ease-in-out infinite' }}>.js</div>
      <div className="absolute bottom-[15%] right-[12%] text-blue-400/20 font-mono font-bold text-6xl pointer-events-none select-none" style={{ animation: 'drift4 14s ease-in-out infinite' }}>.ts</div>
      <div className="absolute top-[45%] left-[55%] text-teal-400/10 font-mono font-bold text-8xl pointer-events-none select-none" style={{ animation: 'drift1 20s ease-in-out infinite' }}>.css</div>
      <div className="absolute top-[60%] right-[30%] text-indigo-400/10 font-mono font-bold text-6xl pointer-events-none select-none" style={{ animation: 'drift2 16s ease-in-out infinite' }}>&lt;/&gt;</div>
      <div className="absolute top-[10%] left-[40%] text-orange-400/10 font-mono font-bold text-5xl pointer-events-none select-none" style={{ animation: 'drift3 13s ease-in-out infinite' }}>.html</div>
      <div className="absolute bottom-[5%] left-[45%] text-gray-400/10 font-mono font-bold text-5xl pointer-events-none select-none" style={{ animation: 'drift4 19s ease-in-out infinite' }}>&#123; &#125;</div>

      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">
        Internship Experience
      </h2>
      
      <div className="space-y-12 border-l-2 border-indigo-900/50 pl-6 md:pl-10 ml-4 md:ml-0">
        {experiences.map((exp, index) => (
          <div key={index} className="relative">
            {/* Timeline Dot */}
            <div className="absolute -left-[35px] md:-left-[51px] top-1 h-6 w-6 rounded-full bg-neutral-950 border-4 border-cyan-400"></div>
            
            <h3 className="text-2xl font-bold text-white">{exp.role}</h3>
            <div className="flex flex-col md:flex-row md:items-center gap-2 md:gap-4 mt-2 mb-4 text-neutral-400">
              <span className="font-semibold text-indigo-300">{exp.company}</span>
              <span className="hidden md:block">•</span>
              <span className="text-sm">{exp.date}</span>
            </div>
            
            <p className="text-neutral-300 leading-relaxed mb-4 max-w-3xl">
              {exp.description}
            </p>
            
            <div className="flex flex-wrap gap-2">
              {exp.skills.map((skill, i) => {
                const { symbol, short, color } = getSkillDisplay(skill);
                return (
                  <span 
                    key={i} 
                    className={`px-3 py-1.5 text-sm font-semibold rounded-full border shadow-sm ${color}`}
                    style={{ animation: `slowFloat ${3 + (i % 3)}s ease-in-out infinite` }}
                  >
                    {symbol} {short}
                  </span>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

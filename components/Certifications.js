import React from 'react';
import { Award, ExternalLink } from 'lucide-react';

export default function Certifications() {
  const certs = [
    { title: 'Web Development Certificate', org: 'Udemy / Coursera', date: '2023' },
    { title: 'React.js Certification', org: 'HackerRank / Meta', date: '2023' },
    { title: 'JavaScript Certification', org: 'FreeCodeCamp', date: '2022' },
    { title: 'Internship Completion', org: 'Start', date: 'Expected 2026' }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto pt-28">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Certifications & <span className="text-yellow-500">Achievements</span></h2>
        <div className="h-1 w-20 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {certs.map((cert, index) => (
          <div key={index} className="bg-gradient-to-br from-neutral-900 to-neutral-950 border border-white/10 p-6 rounded-2xl group relative overflow-hidden">
            <Award size={48} className="text-yellow-500/20 absolute -right-2 -bottom-2 group-hover:scale-110 transition-transform" />
            <h3 className="text-lg font-bold text-white mb-2 relative z-10">{cert.title}</h3>
            <p className="text-sm text-yellow-500 font-medium mb-4 relative z-10">{cert.org}</p>
            <p className="text-xs text-neutral-500 mb-6 relative z-10">Issued: {cert.date}</p>
            <button className="flex items-center gap-2 text-xs font-bold text-neutral-300 hover:text-white transition-colors relative z-10"><ExternalLink size={14} /> View Credential</button>
          </div>
        ))}
      </div>
    </section>
  );
}
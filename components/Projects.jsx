import React from 'react';

const projects = [
  {
    title: "E-Commerce Platform",
    description: "A full-stack online store with payment gateway integration and user authentication.",
    tech: "Next.js • Node.js • Stripe",
    colSpan: "md:col-span-2",
  },
  {
    title: "AI Chat Interface",
    description: "A sleek UI for interacting with large language models.",
    tech: "React • Tailwind • OpenAI API",
    colSpan: "md:col-span-1",
  },
  {
    title: "Portfolio v1",
    description: "My previous portfolio built with vanilla HTML and CSS.",
    tech: "HTML • CSS • JS",
    colSpan: "md:col-span-1",
  },
  {
    title: "Task Management App",
    description: "A drag-and-drop Kanban board for organizing daily tasks efficiently.",
    tech: "React • Redux • Firebase",
    colSpan: "md:col-span-2",
  }
];

export default function Projects() {
  return (
    <section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
      <h2 className="text-4xl md:text-5xl font-bold mb-16 text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">
        Selected Projects
      </h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <div 
            key={index} 
            className={`group relative p-8 rounded-3xl bg-neutral-900 border border-neutral-800 hover:border-cyan-500/50 transition-colors duration-300 overflow-hidden ${project.colSpan}`}
          >
            {/* Hover Glow Effect */}
            <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-cyan-500/10 to-transparent pointer-events-none"></div>
            
            <h3 className="text-2xl font-bold text-white mb-3">{project.title}</h3>
            <p className="text-neutral-400 mb-8">{project.description}</p>
            
            <div className="absolute bottom-8 left-8">
              <p className="text-sm font-mono text-cyan-400">{project.tech}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

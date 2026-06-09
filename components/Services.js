import React from 'react';
import { MonitorSmartphone, Code2, Palette, Wrench } from 'lucide-react';

export default function Services() {
  const services = [
    {
      title: 'Frontend Development',
      description: 'Building responsive and modern websites with seamless user experiences.',
      icon: <MonitorSmartphone size={32} className="text-blue-400" />,
      color: "from-blue-400 to-cyan-500"
    },
    {
      title: 'React Applications',
      description: 'Developing scalable, high-performance single-page applications (SPAs).',
      icon: <Code2 size={32} className="text-purple-400" />,
      color: "from-purple-400 to-fuchsia-500"
    },
    {
      title: 'UI/UX Implementation',
      description: 'Converting Figma designs into pixel-perfect, accessible code.',
      icon: <Palette size={32} className="text-emerald-400" />,
      color: "from-emerald-400 to-teal-500"
    },
    {
      title: 'Website Maintenance',
      description: 'Bug fixing, performance optimization, and legacy code refactoring.',
      icon: <Wrench size={32} className="text-pink-400" />,
      color: "from-pink-400 to-rose-500"
    }
  ];

  return (
    <section className="py-24 px-6 max-w-6xl mx-auto pt-28">
      <h2 className="text-3xl md:text-4xl font-bold mb-12 text-center text-white">What I Can <span className="text-blue-500">Do</span></h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {services.map((service, index) => (
          <div key={index} className="group relative bg-white/5 border border-white/10 p-8 rounded-2xl hover:-translate-y-2 transition-all duration-500 hover:shadow-2xl hover:shadow-blue-500/10 hover:border-white/20 overflow-hidden backdrop-blur-sm">
            {/* Hover Background Glow */}
            <div className={`absolute inset-0 opacity-0 group-hover:opacity-5 bg-gradient-to-br ${service.color} transition-opacity duration-500`}></div>
            
            <div className="relative z-10 bg-neutral-900/80 w-16 h-16 rounded-xl flex items-center justify-center mb-6 border border-white/5 transform transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3 shadow-inner">
              {service.icon}
            </div>
            
            <h3 className="relative z-10 text-xl font-bold text-white mb-3 transition-colors duration-300 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-white group-hover:to-neutral-400">
              {service.title}
            </h3>
            
            <p className="relative z-10 text-neutral-400 text-sm leading-relaxed transition-colors duration-300 group-hover:text-neutral-300">
              {service.description}
            </p>

            {/* Bottom Accent Line */}
            <div className={`absolute bottom-0 left-0 h-1 w-0 bg-gradient-to-r ${service.color} transition-all duration-500 group-hover:w-full`}></div>
          </div>
        ))}
      </div>
    </section>
  );
}
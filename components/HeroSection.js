'use client';

import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJsSquare } from 'react-icons/fa';
import { SiTypescript, SiTailwindcss, SiNextdotjs } from 'react-icons/si';

const FloatingIcons = () => {
  const icons = [
    { Icon: FaReact, color: 'text-blue-400', size: 40, top: '20%', left: '15%', delay: 0 },
    { Icon: FaNodeJs, color: 'text-green-500', size: 45, top: '60%', left: '10%', delay: 1 },
    { Icon: FaJsSquare, color: 'text-yellow-400', size: 35, top: '15%', right: '20%', delay: 0.5 },
    { Icon: SiTypescript, color: 'text-blue-500', size: 40, top: '65%', right: '15%', delay: 1.5 },
    { Icon: SiTailwindcss, color: 'text-teal-400', size: 50, top: '40%', left: '5%', delay: 2 },
    { Icon: SiNextdotjs, color: 'text-white', size: 45, top: '35%', right: '8%', delay: 2.5 },
  ];

  return (
    <div className="absolute inset-0 pointer-events-none overflow-hidden z-0">
      {icons.map((item, index) => (
        <motion.div
          key={index}
          className={`absolute ${item.color} opacity-30`}
          style={{ top: item.top, left: item.left, right: item.right }}
          animate={{
            y: [0, -20, 0],
            rotate: [0, 10, -10, 0],
            scale: [1, 1.1, 1],
          }}
          transition={{
            duration: 5,
            repeat: Infinity,
            delay: item.delay,
            ease: "easeInOut"
          }}
        >
          <item.Icon size={item.size} />
        </motion.div>
      ))}
    </div>
  );
};

export default function HeroSection() {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden pt-16 bg-neutral-950">
      <FloatingIcons />
      
      <div className="z-10 text-center px-6 py-10 backdrop-blur-sm bg-black/20 rounded-3xl border border-white/10 pointer-events-auto">
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs md:text-sm font-medium mb-6 shadow-[0_0_15px_rgba(16,185,129,0.2)]">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          Available For Frontend Internship
        </div>
        <p className="text-blue-400 font-medium mb-2 tracking-widest uppercase">HELLO, I'M</p>
        <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-4 text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">Aaditya Kumar</span>
        </h1>
        <h2 className="text-2xl md:text-3xl font-bold text-neutral-200 mb-6">BCA Graduate | IT Intern | Frontend Developer</h2>
        <p className="text-lg text-neutral-400 max-w-2xl mx-auto mb-8">
          Specializing in React.js to build modern, responsive, and user-friendly web applications.
        </p>
        <div className="flex flex-wrap justify-center gap-4">
          <a href="#projects" className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 rounded-full font-bold transition-all shadow-[0_0_20px_rgba(37,99,235,0.4)]">View Projects</a>
          <a href="#contact" className="bg-white/10 hover:bg-white/20 text-white border border-white/20 px-8 py-3 rounded-full font-bold transition-all">Contact Me</a>
        </div>
      </div>
    </section>
  );
}
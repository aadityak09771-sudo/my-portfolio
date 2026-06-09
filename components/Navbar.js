import React from 'react';

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full z-50 backdrop-blur-lg bg-neutral-950/70 border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        <a href="#home" className="text-2xl font-bold tracking-tighter text-white">
          Aaditya<span className="text-blue-500">.</span>
        </a>
        
        <div className="hidden md:flex gap-8 text-sm font-medium text-neutral-300">
          <a href="#home" className="hover:text-white transition-colors">Home</a>
          <a href="#about" className="hover:text-white transition-colors">About</a>
          <a href="#resume" className="hover:text-white transition-colors">Resume</a>
          <a href="#projects" className="hover:text-white transition-colors">Projects</a>
          <a href="#contact" className="hover:text-white transition-colors">Contact</a>
        </div>

        <a href="/resume.pdf" download className="hidden md:inline-block bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white px-5 py-2 rounded-lg text-sm font-bold transition-all shadow-lg hover:shadow-blue-500/25">
          Download Resume
        </a>
      </div>
    </nav>
  );
}
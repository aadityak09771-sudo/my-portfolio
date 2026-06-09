'use client';

import React from 'react';
import { motion, useScroll } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa6';

export default function GlobalUI() {
  const { scrollYProgress } = useScroll();
  
  return (
    <>
      {/* Top Scroll Progress Bar */}
      <motion.div
        className="fixed top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-emerald-400 z-[100] origin-left"
        style={{ scaleX: scrollYProgress }}
      />
      
      {/* Floating Social Bar (Hidden on Mobile) */}
      <div className="hidden lg:flex fixed left-8 bottom-0 flex-col items-center gap-6 z-50 after:content-[''] after:w-[1px] after:h-24 after:bg-neutral-800">
        <a href="https://github.com/aadityak09771-sudo" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-white hover:-translate-y-1 transition-all"><FaGithub size={22} /></a>
        <a href="https://linkedin.com/in/aadityakumar" target="_blank" rel="noreferrer" className="text-neutral-400 hover:text-blue-500 hover:-translate-y-1 transition-all"><FaLinkedin size={22} /></a>
        <a href="mailto:your-email@example.com" className="text-neutral-400 hover:text-emerald-500 hover:-translate-y-1 transition-all"><FaEnvelope size={22} /></a>
      </div>
    </>
  );
}
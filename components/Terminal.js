'use client';

import React from 'react';
import { motion } from 'framer-motion';

export default function Terminal() {
  return (
    <section className="py-24 px-6 max-w-4xl mx-auto pt-28">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5 }}
        className="bg-[#0D0D0D] rounded-2xl overflow-hidden border border-neutral-800 shadow-2xl font-mono text-sm sm:text-base relative z-10"
      >
        {/* Terminal Header */}
        <div className="bg-[#1A1A1A] px-4 py-3 flex items-center gap-2 border-b border-neutral-800">
          <div className="w-3 h-3 rounded-full bg-red-500"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
          <div className="w-3 h-3 rounded-full bg-green-500"></div>
          <span className="ml-4 text-neutral-500 text-xs">guest@aaditya-portfolio ~</span>
        </div>
        {/* Terminal Body */}
        <div className="p-6 sm:p-8 text-neutral-300 space-y-5 leading-relaxed">
          <div><span className="text-blue-400 font-bold">❯</span> whoami<br/><span className="text-emerald-400">Aaditya Kumar</span></div>
          <div><span className="text-blue-400 font-bold">❯</span> education<br/><span className="text-emerald-400">BCA Graduate</span></div>
          <div><span className="text-blue-400 font-bold">❯</span> role<br/><span className="text-emerald-400">IT Intern | Frontend Developer</span></div>
          <div><span className="text-blue-400 font-bold">❯</span> skills<br/><span className="text-yellow-400">["React", "TypeScript", "Tailwind CSS", "Next.js", "Node.js"]</span></div>
          <div className="flex items-center gap-2"><span className="text-blue-400 font-bold">❯</span> status <br/><span className="w-2 h-4 bg-emerald-500 animate-pulse inline-block ml-2"></span></div>
        </div>
      </motion.div>
    </section>
  );
}
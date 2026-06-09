import React from 'react';
import { Code2, GraduationCap } from 'lucide-react';

export default function About() {
  return (
    <section id="about" className="py-24 px-6 max-w-6xl mx-auto pt-28">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">About <span className="text-emerald-500">Me</span></h2>
        <div className="h-1 w-20 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full"></div>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-2 space-y-6 text-neutral-300 text-lg leading-relaxed">
          <p>
            I am a <strong className="text-white">BCA Graduate</strong> and currently working as an <strong className="text-white">IT Intern</strong>. I am passionate about web development and continuously learning modern technologies.
          </p>
          <p>
            My focus is on creating responsive, scalable, and user-friendly applications using React.js and modern frontend technologies. I thrive on solving complex problems and collaborating with teams to build exceptional digital experiences.
          </p>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 pt-6">
            {['React Developer', 'Problem Solver', 'Team Player', 'Quick Learner', 'UI/UX Enthusiast', 'Frontend Focused'].map((trait, i) => (
              <div key={i} className="bg-white/5 border border-white/10 p-4 rounded-xl text-center text-sm font-medium text-white hover:bg-emerald-500/20 hover:border-emerald-500/50 transition-colors cursor-default">
                {trait}
              </div>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 rounded-2xl border border-white/10 text-center flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-emerald-400 mb-2">10+</h3>
            <p className="text-sm text-neutral-400">Projects Completed</p>
          </div>
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 rounded-2xl border border-white/10 text-center flex flex-col justify-center">
            <h3 className="text-4xl font-bold text-emerald-400 mb-2">6</h3>
            <p className="text-sm text-neutral-400">Months Internship</p>
          </div>
          <div className="bg-gradient-to-br from-neutral-900 to-neutral-950 p-6 rounded-2xl border border-white/10 text-center flex flex-col justify-center col-span-2">
            <h3 className="text-4xl font-bold text-emerald-400 mb-2">15+</h3>
            <p className="text-sm text-neutral-400">Technologies Mastered</p>
          </div>
        </div>
      </div>
    </section>
  );
}
import React from 'react';
import { GraduationCap, Briefcase } from 'lucide-react';

export default function Experience() {
  const frontend = ['HTML5', 'CSS3', 'JavaScript', 'TypeScript', 'React.js', 'Tailwind CSS', 'Bootstrap'];
  const backend = ['Node.js', 'Express.js', 'MongoDB', 'MySQL'];
  const tools = ['Git', 'GitHub', 'VS Code', 'Postman', 'Figma'];
  const other = ['Responsive Design', 'API Integration', 'UI/UX Design', 'Problem Solving'];

  return (
    <section id="resume" className="py-24 px-6 max-w-6xl mx-auto pt-28">
      <div className="mb-16">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Resume & <span className="text-blue-500">Skills</span></h2>
        <div className="h-1 w-20 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full"></div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">
        {/* Experience Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <Briefcase className="text-blue-500" size={28} />
            <h3 className="text-2xl font-bold text-white">Professional Experience</h3>
          </div>
          <div className="space-y-12 border-l-2 border-neutral-800 pl-8 ml-3 relative">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-neutral-950 bg-blue-500"></div>
              <h4 className="text-xl font-bold text-white">IT Intern <span className="text-neutral-400 font-medium">@ Start</span></h4>
              <p className="text-blue-500 font-medium text-sm mb-3">15-03-2026 – 15-06-2026</p>
              <ul className="text-neutral-400 text-sm leading-relaxed space-y-2 list-disc pl-4 marker:text-neutral-700">
                <li>Developed responsive web interfaces.</li>
                <li>Worked on React.js applications.</li>
                <li>Collaborated with development teams.</li>
                <li>Fixed bugs and optimized performance.</li>
                <li>Implemented UI improvements.</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Education Timeline */}
        <div>
          <div className="flex items-center gap-3 mb-8">
            <GraduationCap className="text-purple-500" size={28} />
            <h3 className="text-2xl font-bold text-white">Education Journey</h3>
          </div>
          <div className="space-y-12 border-l-2 border-neutral-800 pl-8 ml-3 relative">
            <div className="relative">
              <div className="absolute -left-[41px] top-1 h-5 w-5 rounded-full border-4 border-neutral-950 bg-purple-500"></div>
              <h4 className="text-xl font-bold text-white">Bachelor of Computer Applications (BCA)</h4>
              <p className="text-purple-500 font-medium text-sm mb-3">Add Actual University Name | Add Duration</p>
              <p className="text-neutral-400 text-sm leading-relaxed">Focused on programming, software development, database management, networking, and modern web technologies.</p>
            </div>
          </div>
        </div>
      </div>

      {/* Skills Grid */}
      <h3 className="text-2xl font-bold text-white mb-8">Technical Skills</h3>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h4 className="text-lg font-bold mb-4 text-blue-400">Frontend</h4>
          <div className="flex flex-wrap gap-2">{frontend.map((s,i) => <span key={i} className="bg-neutral-900 px-3 py-1 rounded-md text-sm text-neutral-300">{s}</span>)}</div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h4 className="text-lg font-bold mb-4 text-emerald-400">Backend & DB</h4>
          <div className="flex flex-wrap gap-2">{backend.map((s,i) => <span key={i} className="bg-neutral-900 px-3 py-1 rounded-md text-sm text-neutral-300">{s}</span>)}</div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h4 className="text-lg font-bold mb-4 text-purple-400">Tools</h4>
          <div className="flex flex-wrap gap-2">{tools.map((s,i) => <span key={i} className="bg-neutral-900 px-3 py-1 rounded-md text-sm text-neutral-300">{s}</span>)}</div>
        </div>
        <div className="bg-white/5 border border-white/10 p-6 rounded-2xl">
          <h4 className="text-lg font-bold mb-4 text-pink-400">Other Skills</h4>
          <div className="flex flex-wrap gap-2">{other.map((s,i) => <span key={i} className="bg-neutral-900 px-3 py-1 rounded-md text-sm text-neutral-300">{s}</span>)}</div>
        </div>
      </div>
    </section>
  );
}
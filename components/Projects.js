'use client';

import React, { useState, useEffect } from 'react';
import { ExternalLink } from 'lucide-react';
import { FaGithub } from 'react-icons/fa6';
import { motion, AnimatePresence } from 'framer-motion';

export default function Projects() {
  const [filter, setFilter] = useState('All');
  const [githubProjects, setGithubProjects] = useState([]);
  const categories = ['All', 'React', 'Full Stack', 'Internship'];

  const staticProjects = [
    {
      title: 'Siksha Kendra',
      description: 'An educational platform built with React and modern UI. Features course management and interactive student portals.',
      tech: ['React', 'TypeScript', 'Tailwind CSS'],
      category: 'React',
      liveUrl: 'https://github.com/aadityak09771-sudo/Siksha-Kendra', // Replace with your actual live URL
      githubUrl: 'https://github.com/aadityak09771-sudo/Siksha-Kendra',
    },
    {
      title: 'Student Dashboard',
      description: 'A comprehensive student management and learning tracking platform with data visualization.',
      tech: ['React', 'JavaScript', 'Node.js'],
      category: 'Full Stack',
      liveUrl: 'https://github.com/aadityak09771-sudo/Student-Dashboard', // Replace with your actual live URL
      githubUrl: 'https://github.com/aadityak09771-sudo/Student-Dashboard',
    },
    {
      title: 'Portfolio Website',
      description: 'A premium personal portfolio showcasing projects, skills, and resume with a beautiful modern design.',
      tech: ['React', 'CSS', 'Next.js'],
      category: 'React',
      liveUrl: 'https://github.com/aadityak09771-sudo/my-portfolio', // Replace with your actual live URL
      githubUrl: 'https://github.com/aadityak09771-sudo/my-portfolio',
    }
  ];

  useEffect(() => {
    // Dynamically fetch your public repositories from GitHub
    fetch('https://api.github.com/users/aadityak09771-sudo/repos?sort=updated&per_page=9')
      .then((res) => res.json())
      .then((data) => {
        if (Array.isArray(data)) {
          const fetchedRepos = data.map((repo) => ({
            title: repo.name.replace(/-/g, ' '), // Format names like 'My-App' to 'My App'
            description: repo.description || 'A project developed and pushed on GitHub.',
            tech: repo.language ? [repo.language] : ['Open Source'],
            category: 'All', // By default, adding GitHub repos to the 'All' tab
            liveUrl: repo.homepage || repo.html_url,
            githubUrl: repo.html_url,
          }));

          // Avoid duplicating projects we already added manually above
          const manualTitles = staticProjects.map((p) => p.title.toLowerCase());
          const newProjects = fetchedRepos.filter((repo) => !manualTitles.includes(repo.title.toLowerCase()));
          
          setGithubProjects(newProjects);
        }
      })
      .catch((err) => console.error('Error fetching GitHub repos:', err));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const allProjects = [...staticProjects, ...githubProjects];
  const filteredProjects = allProjects.filter(project => filter === 'All' || project.category === filter);

  return (
    <section id="projects" className="py-24 px-6 max-w-6xl mx-auto bg-neutral-950/50 pt-28">
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8"
      >
        <div>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Selected <span className="text-purple-500">Works</span></h2>
          <div className="h-1 w-20 bg-gradient-to-r from-purple-500 to-pink-600 rounded-full"></div>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-2">
          {categories.map((cat, index) => (
            <button key={index} onClick={() => setFilter(cat)} className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${filter === cat ? 'bg-purple-600 text-white' : 'bg-neutral-900 text-neutral-400 hover:text-white hover:bg-neutral-800'}`}>
              {cat}
            </button>
          ))}
        </div>
      </motion.div>

      <motion.div layout className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <AnimatePresence>
          {filteredProjects.map((project, index) => (
            <motion.div layout initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.9 }} transition={{ duration: 0.3 }} key={project.title} className="group bg-white/5 backdrop-blur-lg border border-white/10 rounded-2xl overflow-hidden hover:-translate-y-2 transition-transform duration-300 flex flex-col relative">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="h-48 bg-neutral-900 border-b border-white/10 flex items-center justify-center overflow-hidden cursor-pointer block">
              {/* Placeholder for project image */}
              <span className="text-neutral-700 font-bold text-xl group-hover:scale-110 group-hover:text-neutral-500 transition-all duration-500">{project.title} Image</span>
            </a>
            
            <div className="p-8 flex-1 flex flex-col">
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors inline-block w-fit">
              <h3 className="text-2xl font-bold mb-3">{project.title}</h3>
            </a>
            <p className="text-neutral-400 mb-6">{project.description}</p>
            <div className="flex flex-wrap gap-2 mb-8">
              {project.tech.map((t, i) => (
                <span key={i} className="text-xs text-neutral-300 bg-neutral-800 px-3 py-1 rounded-md">{t}</span>
              ))}
            </div>
              <div className="flex gap-4 mt-auto">
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-white bg-blue-600 hover:bg-blue-700 px-4 py-2 rounded-lg transition-colors"><ExternalLink size={16} /> Live Demo</a>
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 text-sm text-neutral-300 hover:text-white border border-neutral-700 hover:border-neutral-500 px-4 py-2 rounded-lg transition-colors"><FaGithub size={16} /> Source</a>
            </div>
            </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </motion.div>
    </section>
  );
}
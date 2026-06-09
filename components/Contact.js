import React from 'react';
import { Mail, MapPin, Phone } from 'lucide-react';
import { FaGithub, FaLinkedin } from 'react-icons/fa6';

export default function Contact() {
  return (
    <section id="contact" className="py-24 px-6 max-w-6xl mx-auto pt-28">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Let's build something <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-emerald-400">together.</span></h2>
        <p className="text-neutral-400 mb-12 text-lg">Currently available for freelance opportunities or full-time roles.</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
        {/* Left Side: Contact Information */}
        <div className="space-y-8">
          <div>
            <h3 className="text-3xl font-bold mb-4 text-white">Get in touch</h3>
            <p className="text-neutral-400 leading-relaxed">Whether you have a project in mind, are looking for a developer to join your team, or just want to say hi, feel free to reach out!</p>
          </div>
          
          <div className="space-y-6">
            <a href="mailto:your-email@example.com" className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors"><Mail className="text-blue-500" /> your-email@example.com</a>
            <div className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors"><Phone className="text-purple-500" /> +91 XXXXXXXXXX</div>
            <div className="flex items-center gap-4 text-neutral-300 hover:text-white transition-colors"><MapPin className="text-emerald-500" /> Kanpur, Uttar Pradesh, India</div>
          </div>

          <div className="flex gap-6 pt-4">
            <a href="https://github.com/aadityak09771-sudo" target="_blank" rel="noreferrer" className="bg-neutral-900 p-3 rounded-full text-neutral-400 hover:text-white hover:bg-blue-600 transition-all"><FaGithub size={24} /></a>
            <a href="https://linkedin.com/in/aadityakumar" target="_blank" rel="noreferrer" className="bg-neutral-900 p-3 rounded-full text-neutral-400 hover:text-white hover:bg-blue-600 transition-all"><FaLinkedin size={24} /></a>
          </div>

          <div className="w-full h-48 bg-neutral-900 rounded-2xl border border-white/10 overflow-hidden flex items-center justify-center mt-8">
             <span className="text-neutral-600 font-medium">Google Maps Placeholder</span>
          </div>
        </div>

        {/* Right Side: The Form */}
        <form className="bg-white/5 p-8 rounded-3xl border border-white/10 shadow-2xl backdrop-blur-sm space-y-6">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            <input type="text" placeholder="Your Name" className="w-full bg-neutral-900/80 border border-neutral-800 text-white rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
            <input type="email" placeholder="Your Email" className="w-full bg-neutral-900/80 border border-neutral-800 text-white rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
          </div>
          <input type="text" placeholder="Subject" className="w-full bg-neutral-900/80 border border-neutral-800 text-white rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all" />
          <textarea rows="5" placeholder="Your Message" className="w-full bg-neutral-900/80 border border-neutral-800 text-white rounded-xl px-4 py-4 focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all resize-none"></textarea>
          <button type="button" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-500 hover:to-purple-500 text-white font-bold rounded-xl px-4 py-4 transition-all transform hover:scale-[1.02] shadow-lg hover:shadow-blue-500/25">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
}
import HeroSection from '../components/HeroSection';
import About from '../components/About';
import Services from '../components/Services';
import Experience from '../components/Experience';
import Terminal from '../components/Terminal';
import Certifications from '../components/Certifications';
import Projects from '../components/Projects';
import Testimonials from '../components/Testimonials';
import Contact from '../components/Contact';
import Navbar from '../components/Navbar';
import GlobalUI from '../components/GlobalUI';

export default function Home() {
  return (
    <main className="bg-neutral-950 min-h-screen text-white font-sans selection:bg-blue-500/30">
      <GlobalUI />
      <Navbar />
      <HeroSection />
      <About />
      <Services />
      <Experience />
      <Terminal />
      <Certifications />
      <Projects />
      <Testimonials />
      <Contact />
      
      <footer className="py-12 border-t border-neutral-900 bg-neutral-950/50 mt-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-8 text-sm">
          <div>
            <h3 className="font-bold text-xl text-white mb-2">Aaditya Kumar</h3>
            <p className="text-neutral-500">BCA Graduate | IT Intern | Frontend Developer.</p>
          </div>
          <div className="flex md:justify-end gap-6 font-medium">
            <a href="#home" className="text-neutral-500 hover:text-white transition-colors">Home</a>
            <a href="#about" className="text-neutral-500 hover:text-white transition-colors">About</a>
            <a href="#resume" className="text-neutral-500 hover:text-white transition-colors">Resume</a>
            <a href="#projects" className="text-neutral-500 hover:text-white transition-colors">Projects</a>
            <a href="#contact" className="text-neutral-500 hover:text-white transition-colors">Contact</a>
          </div>
        </div>
        <div className="max-w-6xl mx-auto px-6 mt-8 flex justify-center md:justify-end gap-4">
           <a href="https://linkedin.com/in/aadityakumar" className="text-neutral-500 hover:text-blue-500 transition-colors text-sm">LinkedIn</a>
           <a href="https://github.com/aadityakumar" className="text-neutral-500 hover:text-white transition-colors text-sm">GitHub</a>
        </div>
        <div className="text-center mt-8">
          <a href="#home" className="inline-block bg-neutral-900 hover:bg-neutral-800 text-neutral-400 p-2 rounded-full transition-colors">
            ↑ Back to Top
          </a>
        </div>
        <div className="text-center text-neutral-600 mt-12 pt-8 border-t border-neutral-900 text-xs">
          <p>© {new Date().getFullYear()} Aaditya Kumar. All rights reserved.</p>
        </div>
      </footer>
    </main>
  );
}
import React from 'react';
import { Quote } from 'lucide-react';

export default function Testimonials() {
  const testimonials = [
    {
      name: "John Doe",
      position: "Senior Developer @ TechCorp",
      review: "Aaditya is a fantastic developer. His understanding of React and modern web technologies is impressive. He delivered our project on time and with excellent code quality.",
      initials: "JD"
    },
    {
      name: "Jane Smith",
      position: "Project Manager @ StartupInc",
      review: "Working with Aaditya during his internship was a great experience. He is a quick learner, a great team player, and always eager to take on new challenges.",
      initials: "JS"
    }
  ];

  return (
    <section id="testimonials" className="py-24 px-6 max-w-6xl mx-auto pt-28">
      <div className="mb-16 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-4">Client <span className="text-pink-500">Testimonials</span></h2>
        <div className="h-1 w-20 bg-gradient-to-r from-pink-500 to-rose-600 rounded-full mx-auto"></div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {testimonials.map((test, index) => (
          <div key={index} className="bg-white/5 border border-white/10 p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300">
            <Quote size={40} className="text-pink-500/20 absolute top-6 right-6" />
            <p className="text-neutral-300 italic mb-8 relative z-10 leading-relaxed">"{test.review}"</p>
            <div className="flex items-center gap-4 mt-auto">
              <div className="w-12 h-12 bg-gradient-to-br from-neutral-700 to-neutral-900 rounded-full flex items-center justify-center text-white font-bold border border-white/10 shadow-inner">
                {test.initials}
              </div>
              <div>
                <h4 className="text-white font-bold">{test.name}</h4>
                <p className="text-neutral-500 text-sm">{test.position}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
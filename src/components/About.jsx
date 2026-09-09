import React from 'react';

export default function About() {
  return (
    // id='about' ensures smooth scrolling when clicking the About button in Navbar
    <section id="about" className="py-28 bg-slate-900 text-slate-300 px-6 min-h-[80vh] flex items-center border-t border-slate-800/60">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-10">
          <span className="text-xs font-semibold text-blue-400 tracking-[0.2em] uppercase block mb-2">
            Professional Overview
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight border-l-4 border-blue-500 pl-4">
            About the Practice
          </h2>
        </div>

        {/* Professional Body Content (Client-Focused & Authoritative) */}
        <div className="space-y-6 text-base md:text-lg leading-relaxed text-slate-300 font-normal">
          <p>
            Dedicated to engineering high-performance, accessible, and scalable digital solutions. 
            With a strong foundation in modern frontend architecture and full-stack development, 
            technical expertise is leveraged to translate complex business requirements into intuitive, 
            pixel-perfect user interfaces.
          </p>
          <p>
            Committed to clean code principles, optimal performance standards, and seamless user experiences 
            that maximize engagement and drive measurable business growth for clients globally.
          </p>
        </div>

        {/* Key Highlights / Core Focus Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-12 pt-10 border-t border-slate-800">
          <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
            <h3 className="text-white font-semibold text-base mb-1 text-blue-400">Frontend Excellence</h3>
            <p className="text-xs text-slate-400 leading-normal">Building responsive, dynamic UIs with React.js and Tailwind CSS.</p>
          </div>
          <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
            <h3 className="text-white font-semibold text-base mb-1 text-blue-400">Full-Stack Capability</h3>
            <p className="text-xs text-slate-400 leading-normal">Implementing robust backend logic and databases via PHP & MySQL.</p>
          </div>
          <div className="bg-slate-950/60 border border-slate-800 p-5 rounded-xl">
            <h3 className="text-white font-semibold text-base mb-1 text-blue-400">Mobile & Quality Assurance</h3>
            <p className="text-xs text-slate-400 leading-normal">Cross-platform app development in Flutter & rigorous testing practices.</p>
          </div>
        </div>

      </div>
    </section>
  );
}
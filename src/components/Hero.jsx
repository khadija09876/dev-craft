import React from 'react';

export default function Hero() {
  return (
    <section id="hero" className="bg-slate-950 text-white min-h-screen py-16 px-6 flex flex-col justify-between items-center relative overflow-hidden">
      
      {/* Subtle background glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-blue-600/10 blur-[100px] rounded-full pointer-events-none"></div>

      {/* Top Spacer */}
      <div className="w-full"></div>

      {/* Main Hero Content Centered */}
      <div className="max-w-3xl mx-auto text-center relative z-10 my-auto py-8">
        
        {/* Availability Badge */}
        <div className="inline-block mb-6 border border-blue-800/80 rounded-full bg-blue-950/40 backdrop-blur-md px-4 py-1.5">
          <span className="text-xs md:text-sm font-medium text-blue-300 flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse"></span>
            Available for High-Impact Projects & Contracting
          </span>
        </div>

        {/* Balanced & Professional Headline */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold tracking-tight mb-6 leading-snug">
          Architecting High-Performance <br />
          <span className="text-blue-500 font-extrabold">Digital Solutions</span>
        </h1>

        {/* Clean Sub-headline with proper spacing */}
        <p className="text-base sm:text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
          A high-performance web experience begins with strategic frontend architecture. 
          Transforming complex technical requirements into accessible, pixel-perfect user interfaces 
          engineered to drive business growth and user engagement.
        </p>

        {/* Strategic Call to Actions */}
        <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
          <a 
            href="#projects" 
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-3.5 text-sm font-semibold text-white transition-all duration-300 rounded-lg bg-blue-600 hover:bg-blue-500 shadow-md shadow-blue-600/25 group"
          >
            <span className="flex items-center gap-2">
              Explore Featured Case Studies
              <svg className="w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </span>
          </a>
          
          <a 
            href="#contact" 
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold text-slate-300 transition-all bg-slate-900 hover:bg-slate-800 hover:text-white rounded-lg border border-slate-800"
          >
            Initiate Project Inquiry
          </a>
        </div>

      </div>

      {/* Technology Stack Footer Indicator */}
      <div className="w-full max-w-3xl mx-auto pt-8 border-t border-slate-900/80 text-center relative z-10 mt-auto">
        <p className="text-[11px] font-semibold text-slate-500 tracking-[0.2em] uppercase mb-4">
          CORE TECHNOLOGIES & TOOLS
        </p>
        <div className="flex flex-wrap justify-center items-center gap-4 md:gap-8 text-slate-400 font-medium text-xs sm:text-sm">
          <span>React.js</span>
          <span className="text-slate-700">•</span>
          <span>JavaScript</span>
          <span className="text-slate-700">•</span>
          <span>Tailwind CSS</span>
          <span className="text-slate-700">•</span>
          <span>PHP & MySQL</span>
          <span className="text-slate-700">•</span>
          <span>Flutter & Dart</span>
        </div>
      </div>

    </section>
  );
}
import React from 'react';

export default function Projects() {
  const projectList = [
    { 
      title: "E-Commerce Platform Architecture", 
      desc: "Engineered a high-performance full-stack e-commerce system utilizing HTML, CSS, JavaScript, PHP, and MySQL. Successfully deployed via Vercel with strict Git version control protocols. Formally recognized and awarded 'Best Project in Web Technologies'.", 
      tech: ["HTML/CSS/JS", "PHP", "MySQL", "Vercel"],
      badge: "Award Winning",
      status: "Production Deployed"
    },
    { 
      title: "Cross-Platform Mobile Application", 
      desc: "Designed and developed a scalable cross-platform mobile application utilizing Flutter and Dart. Focused on clean widget composition, predictable state management, responsive layouts, and intuitive user workflows prototyped via FlutLab.io.", 
      tech: ["Flutter", "Dart", "FlutLab.io"],
      badge: "Mobile Architecture",
      status: "Validated & Tested"
    },
    { 
      title: "Modern React Web Dashboard", 
      desc: "Developed a dynamic, component-driven client dashboard using React.js and Tailwind CSS. Integrated robust state management, modular architecture, and optimized asynchronous data fetching for seamless enterprise user interaction.", 
      tech: ["React.js", "Tailwind CSS", "REST APIs"],
      badge: "Web Frontend",
      status: "Production Ready"
    },
    { 
      title: "React Native Mobile Ecosystem", 
      desc: "Architected a cross-platform native mobile solution utilizing React Native and Expo. Focused on native performance optimization, smooth gesture navigation, and robust persistent local storage configurations.", 
      tech: ["React Native", "Expo", "JavaScript"],
      badge: "Mobile App",
      status: "Fully Optimized"
    }
  ];

  return (
    <section id="projects" className="py-20 bg-slate-900 text-white px-4 sm:px-6 lg:px-8 border-t border-slate-800/65">
      <div className="max-w-6xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-14 text-center md:text-left">
          <span className="text-xs font-semibold text-blue-400 tracking-[0.2em] uppercase block mb-1">
            Client Portfolio Showcase
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight border-l-0 md:border-l-4 border-blue-500 pl-0 md:pl-4">
            Featured Case Studies
          </h2>
        </div>

        {/* Responsive Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 items-stretch">
          {projectList.map((p, index) => (
            <div 
              key={index} 
              className="bg-slate-950/90 border border-slate-800/80 p-5 rounded-xl flex flex-col justify-between transition-all duration-300 hover:border-blue-500/60 hover:shadow-xl hover:shadow-blue-500/5 group relative"
            >
              {/* Top Dynamic Accent Line */}
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-t-xl"></div>

              <div>
                {/* Project Header */}
                <div className="flex flex-col sm:flex-row sm:justify-between sm:items-start gap-2 sm:gap-3 mb-2">
                  <h3 className="text-base sm:text-lg font-semibold text-blue-400 group-hover:text-blue-300 transition-colors leading-snug">
                    {p.title}
                  </h3>
                  <span className="self-start sm:self-auto bg-blue-950/80 text-blue-300 text-[10px] uppercase font-bold tracking-wider px-2 py-0.5 rounded border border-blue-900/60 shrink-0">
                    {p.badge}
                  </span>
                </div>

                {/* Status Indicator */}
                <div className="flex items-center gap-2 mb-2.5">
                  <span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse shrink-0"></span>
                  <span className="text-xs text-slate-400 font-medium tracking-wide">{p.status}</span>
                </div>

                {/* Description */}
                <p className="text-slate-400 text-xs sm:text-sm mb-4 leading-relaxed">
                  {p.desc}
                </p>
              </div>

              <div>
                {/* Responsive Tech Tags */}
                <div className="flex gap-1.5 mb-4 flex-wrap">
                  {p.tech.map((t, i) => (
                    <span 
                      key={i} 
                      className="bg-slate-900/90 text-slate-300 text-[11px] px-2 py-0.5 rounded-md border border-slate-800 font-medium group-hover:border-slate-700 transition-colors"
                    >
                      {t}
                    </span>
                  ))}
                </div>

                {/* Action Link */}
                <div className="pt-3 border-t border-slate-900/80 flex items-center justify-between">
                  <a 
                    href="#contact" 
                    className="inline-flex items-center gap-2 text-xs sm:text-sm font-medium text-blue-400 hover:text-blue-300 transition-colors"
                  >
                    <span>Request Project Breakdown</span>
                    <svg className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-1.5 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  </a>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}
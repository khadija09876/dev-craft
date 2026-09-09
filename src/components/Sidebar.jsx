import React, { useState } from 'react';

export default function Sidebar() {
  const [activeSection, setActiveSection] = useState('hero');

  const navItems = [
    { 
      id: 'hero', 
      label: 'Home', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
        </svg>
      ) 
    },
    { 
      id: 'about', 
      label: 'About', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
        </svg>
      ) 
    },
    { 
      id: 'services', 
      label: 'Services', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ) 
    },
    { 
      id: 'skills', 
      label: 'Skills', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M13 10V3L4 14h7v7l9-11h-7z" />
        </svg>
      ) 
    },
    { 
      id: 'projects', 
      label: 'Projects', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.75} d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ) 
    },
    { 
      id: 'contact', 
      label: 'Contact', 
      icon: (
        <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
          <path strokeLinecap="round" strokeLinejoin="round5" strokeWidth={1.75} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
        </svg>
      ) 
    }
  ];

  const handleScrollTo = (e, id) => {
    e.preventDefault();
    setActiveSection(id);
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <>
      {/* Desktop Fixed Right Sidebar */}
      <aside className="fixed right-6 top-1/2 -translate-y-1/2 z-50 hidden lg:flex flex-col gap-3 bg-slate-900/90 border border-slate-800/90 p-2.5 rounded-2xl shadow-2xl backdrop-blur-md">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleScrollTo(e, item.id)}
            className={`group relative flex items-center justify-center p-3 rounded-xl transition-all duration-300 ${
              activeSection === item.id 
                ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                : 'text-slate-400 hover:bg-slate-800 hover:text-white'
            }`}
          >
            {item.icon}
            
            {/* Tooltip Label on Hover */}
            <span className="absolute right-14 bg-slate-900 text-slate-200 text-xs font-medium px-3 py-1.5 rounded-md border border-slate-800 shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap">
              {item.label}
            </span>
          </a>
        ))}
      </aside>

      {/* Mobile Bottom Quick Bar */}
      <div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 lg:hidden flex gap-1.5 bg-slate-900/95 border border-slate-800 p-2 rounded-full shadow-2xl backdrop-blur-md overflow-x-auto max-w-[95vw]">
        {navItems.map((item) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            onClick={(e) => handleScrollTo(e, item.id)}
            className={`px-3.5 py-2 rounded-full text-xs font-medium transition-all whitespace-nowrap ${
              activeSection === item.id 
                ? 'bg-blue-600 text-white shadow-md shadow-blue-500/20' 
                : 'text-slate-400 hover:text-white'
            }`}
          >
            {item.label}
          </a>
        ))}
      </div>
    </>
  );
}
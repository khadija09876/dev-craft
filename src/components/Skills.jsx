import React, { useState } from 'react';

export default function Skills() {
  // State to track which categories are open (all open by default, or use an index)
  const [openIndex, setOpenIndex] = useState(null);

  const toggleDropdown = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  const skillCategories = [
    {
      category: "Web Development",
      description: "Engineering responsive, component-driven web applications and secure full-stack backend solutions.",
      skills: ["React.js", "HTML5", "CSS3", "JavaScript (ES6+)", "PHP", "MySQL", "Tailwind CSS"]
    },
    {
      category: "Mobile Development",
      description: "Building scalable cross-platform mobile app architectures with fluid, native-feel UI/UX interactions.",
      skills: ["Flutter", "Dart", "React Native", "Expo", "State Management"]
    },
    {
      category: "QA & Software Testing",
      description: "Guaranteeing enterprise-grade software reliability through systematic test design and quality validation.",
      skills: ["Manual Testing", "Bug Lifecycle Tracking", "Test Case Design", "Functional Validation", "API Quality"]
    },
    {
      category: "Tools, Version Control & Core",
      description: "Utilizing modern developer toolchains, deployment pipelines, and strong core programming fundamentals.",
      skills: ["Git & GitHub", "Vercel Deployment", "VS Code", "Python", "Java", "RESTful APIs"]
    }
  ];

  return (
    <section id="skills" className="py-28 bg-slate-950 text-white px-6 min-h-[80vh] flex items-center border-t border-slate-900">
      <div className="max-w-4xl mx-auto w-full">
        
        {/* Section Header */}
        <div className="mb-12">
          <span className="text-xs font-semibold text-blue-400 tracking-[0.2em] uppercase block mb-2">
            Technical Proficiency & Stack
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white tracking-tight border-l-4 border-blue-500 pl-4">
            Skills & Expertise
          </h2>
        </div>

        {/* Skills Grid Layout - Original Alignment Maintained */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {skillCategories.map((group, index) => {
            const isOpen = openIndex === index;
            return (
              <div 
                key={index} 
                className="bg-slate-900/80 border border-slate-800/80 p-6 rounded-xl transition-all duration-300 hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-500/5 group relative overflow-hidden flex flex-col justify-between"
              >
                {/* Top Accent Gradient Line on Hover */}
                <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 to-blue-400 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  {/* Clickable Header with Dropdown Toggle Icon */}
                  <div 
                    onClick={() => toggleDropdown(index)}
                    className="flex justify-between items-center cursor-pointer select-none mb-2"
                  >
                    <h3 className="text-blue-400 font-semibold text-lg tracking-wide group-hover:text-blue-300 transition-colors">
                      {group.category}
                    </h3>
                    <span className={`text-slate-400 transform transition-transform duration-300 ${isOpen ? 'rotate-180 text-blue-400' : ''}`}>
                      ▼
                    </span>
                  </div>

                  <p className="text-slate-400 text-xs mb-4 leading-relaxed">
                    {group.description}
                  </p>
                </div>

                {/* Dropdown Content Container with smooth transition */}
                <div className={`transition-all duration-300 overflow-hidden ${isOpen ? 'max-h-96 opacity-150 mt-2' : 'max-h-0 opacity-0'}`}>
                  <div className="flex flex-wrap gap-2.5 pt-2 border-t border-slate-800/60">
                    {group.skills.map((skill, i) => (
                      <span 
                        key={i} 
                        className="bg-slate-950 text-slate-300 border border-slate-800/80 text-xs px-3.5 py-2 rounded-lg font-medium transition-all duration-200 hover:bg-blue-600 hover:text-white hover:border-blue-500 cursor-default shadow-sm"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
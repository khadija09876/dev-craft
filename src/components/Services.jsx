import React from 'react';

export default function Services() {
  const serviceItems = [
    {
      title: "Semester Projects & FYPs",
      description: "Complete end-to-end development for university students. From clean database design (MySQL) to responsive UI (React/Flutter) with full documentation support.",
      icon: "🎓"
    },
    {
      title: "Custom Business Web Apps",
      description: "Tailor-made web solutions built according to exact client requirements using modern React.js, Tailwind CSS, and scalable backend logic.",
      icon: "💻"
    },
    {
      title: "Cross-Platform Mobile Apps",
      description: "Sleek, high-performance mobile applications engineered with Flutter & Dart, tailored precisely for your business or project goals.",
      icon: "📱"
    },
    {
      title: "Professional Portfolios & Landing Pages",
      description: "Stand out in your career or business with high-converting, blazing-fast, and custom-animated portfolio websites built to impress recruiters and clients.",
      icon: "✨"
    }
  ];

  return (
    <section id="services" className="py-20 px-6 bg-slate-950 border-t border-slate-900/50 text-white">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-14">
          <span className="text-xs font-semibold text-blue-400 tracking-[0.2em] uppercase block mb-3">
            What We Offer
          </span>
          <h2 className="text-3xl sm:text-4xl font-bold tracking-tight">
            Tailored Development Services
          </h2>
          <p className="text-slate-400 text-sm sm:text-base mt-3 max-w-xl mx-auto">
            Built for academic excellence and scaled for real-world business needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-5 items-stretch">
          {serviceItems.map((item, index) => (
            <div 
              key={index} 
              className="bg-slate-900/60 border border-slate-800/80 p-6 rounded-2xl backdrop-blur-md hover:border-blue-500/50 transition-all duration-300 flex flex-col justify-between h-full group"
            >
              <div>
                <div className="text-xl mb-3 bg-slate-800/80 w-10 h-10 flex items-center justify-center rounded-xl group-hover:bg-blue-600/20 transition-colors">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold mb-2 text-slate-100">{item.title}</h3>
                <p className="text-slate-400 text-xs sm:text-sm leading-relaxed">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
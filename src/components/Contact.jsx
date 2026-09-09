import React, { useState } from 'react';

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const emailAddress = "contact.offical.devcrafts@gmail.com";
  const mailtoLink = `mailto:${emailAddress}?subject=Project Inquiry &body=Hi DevCraft Team, I would like to discuss a potential project opportunity with you.`;

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(emailAddress);
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <section id="contact" className="py-20 bg-slate-950 text-white px-4 sm:px-6 lg:px-8 border-t border-slate-900">
      <div className="max-w-3xl mx-auto w-full text-center">
        
        {/* Section Header */}
        <div className="mb-8">
          <span className="text-xs font-semibold text-blue-400 tracking-[0.2em] uppercase block mb-2">
            Let's Build Something Exceptional
          </span>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-white tracking-tight inline-block border-l-0 md:border-l-4 border-blue-500 pl-0 md:pl-4 uppercase">
            Get In Touch With DevCraft
          </h2>
        </div>

        {/* Engaging Description */}
        <p className="text-slate-400 text-sm sm:text-base mb-10 leading-relaxed max-w-xl mx-auto">
          Have a semester project, FYP, custom web application, or mobile architecture in mind? Connect with DevCraft directly and let's turn your vision into a production-ready solution.
        </p>

        {/* Interactive Contact Card Container */}
        <div className="bg-slate-900/80 border border-slate-800/80 p-6 sm:p-8 rounded-2xl shadow-2xl backdrop-blur-sm max-w-xl mx-auto relative group">
          
          {/* Subtle Top Border Gradient Glow */}
          <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-600 via-blue-400 to-indigo-600 rounded-t-2xl"></div>

          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6 pb-6 border-b border-slate-800/80">
            <div className="text-center sm:text-left">
              <span className="text-xs text-slate-400 uppercase tracking-widest font-semibold block mb-1">Direct Inquiries</span>
              <a 
                href={mailtoLink}
                className="text-sm sm:text-base font-mono text-blue-400 hover:text-blue-300 underline underline-offset-4 decoration-blue-500/40 hover:decoration-blue-400 transition-all block"
                title="Click to open email client"
              >
                {emailAddress}
              </a>
            </div>
            
            {/* Copy Email Button */}
            <button 
              onClick={handleCopyEmail}
              className="w-full sm:w-auto bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-medium px-4 py-2.5 rounded-lg border border-slate-700 transition-all flex items-center justify-center gap-2 active:scale-95 shrink-0"
            >
              {copied ? (
                <>
                  <svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span className="text-emerald-400 font-semibold">Copied to Clipboard!</span>
                </>
              ) : (
                <>
                  <svg className="w-4 h-4 text-slate-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 5H6a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2v-1M8 5a2 2 0 002 2h2a2 2 0 002-2M8 5a2 2 0 012-2h2a2 2 0 012 2m0 0h2a2 2 0 012 2v3m2 4H10m0 0l3-3m-3 3l3 3" />
                  </svg>
                  <span>Copy Address</span>
                </>
              )}
            </button>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-col sm:flex-row gap-3 justify-center items-center">
            <a 
              href={mailtoLink} 
              className="w-full sm:w-auto flex-1 bg-blue-600 hover:bg-blue-500 text-white font-medium text-sm px-6 py-3 rounded-xl transition-all shadow-lg shadow-blue-600/25 flex items-center justify-center gap-2 group/btn"
            >
              <span>Open Mail Client</span>
              <svg className="w-4 h-4 transition-transform group-hover/btn:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
              </svg>
            </a>

            <a 
              href="https://linkedin.com" 
              target="_blank" 
              rel="noopener noreferrer"
              className="w-full sm:w-auto bg-slate-800/80 hover:bg-slate-800 text-slate-300 hover:text-white font-medium text-sm px-6 py-3 rounded-xl border border-slate-700/80 transition-all flex items-center justify-center gap-2"
            >
              <span>Connect on LinkedIn</span>
            </a>
          </div>

        </div>

      </div>
    </section>
  );
}
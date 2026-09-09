import React, { useState, useEffect, useRef } from 'react';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isChatOpen, setIsChatOpen] = useState(false);
  const [isTyping, setIsTyping] = useState(false);
  const [messages, setMessages] = useState([
    { 
      sender: 'bot', 
      text: 'Welcome to DevCraft Intelligence 🚀. I am your virtual engineering consultant. How can we help architect your digital solution today?' 
    }
  ]);
  const [userQuery, setUserQuery] = useState('');
  const chatEndRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Auto-scroll to latest chat message
  useEffect(() => {
    chatEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  }, [messages, isTyping]);

  // Advanced NLP-based Intent Matching Engine for DevCraft
  const generateDevCraftResponse = (queryText) => {
    const query = queryText.toLowerCase();

    // 1. Services / Core Offerings
    if (query.match(/(service|offer|do you do|build|create|develop|project|fyp|semester)/)) {
      return 'At DevCraft, we provide end-to-end software development services tailored for academia and industry:\n\n• **Final Year Projects (FYPs)** & Semester Projects\n• **Custom Web Applications** (React.js, Tailwind CSS, PHP/MySQL)\n• **Cross-Platform Mobile Apps** (Flutter, React Native)\n• **High-Performance Landing Pages** & Portfolios';
    } 
    
    // 2. Pricing & Cost
    if (query.match(/(price|cost|charges|budget|fee|rate|how much)/)) {
      return 'Our project investment varies based on technical complexity, features, and delivery deadlines. We ensure competitive pricing for students and enterprises alike. Please share your project brief at contact.offical.devcrafts@gmail.com for an official quotation.';
    } 
    
    // 3. Tech Stack / Technologies
    if (query.match(/(tech|stack|technology|language|react|flutter|php|node|database)/)) {
      return 'We work with modern, industry-standard technologies to ensure scalability and performance:\n\n• **Frontend:** React.js, JavaScript, HTML5, Tailwind CSS\n• **Backend & Database:** PHP, Node.js, MySQL, Firebase\n• **Mobile:** Flutter, Dart, React Native';
    } 
    
    // 4. Contact / Hiring / Email
    if (query.match(/(contact|email|reach|hire|talk|owner|developer|whatsapp|phone)/)) {
      return 'You can directly collaborate with us via email at **contact.offical.devcrafts@gmail.com** or connect with our engineering leads via the direct inquiry form at the bottom of the page.';
    } 
    
    // 5. Timeline / Delivery
    if (query.match(/(time|duration|deliver|long|deadline)/)) {
      return 'Project delivery timelines depend on scope. Standard landing pages take 3-5 days, custom web apps take 1-3 weeks, and complex FYPs/Semester projects are managed efficiently according to your academic milestones.';
    }

    // 6. Greetings
    if (query.match(/(hi|hello|hey|greetings|salam)/)) {
      return 'Hello! It’s great to connect with you. Feel free to ask about our development services, tech stack, or project pricing.';
    }

    // Default Fallback for unmatched technical queries
    return 'That is a unique requirement! For a detailed architectural analysis and custom implementation roadmap, please email our core team directly at contact.offical.devcrafts@gmail.com.';
  };

  const handleQuickOption = (type) => {
    let textPrompt = '';
    if (type === 'services') textPrompt = 'What services do you offer?';
    if (type === 'pricing') textPrompt = 'What are your pricing structures?';
    if (type === 'tech') textPrompt = 'What is your tech stack?';
    if (type === 'contact') textPrompt = 'How can I contact DevCraft?';

    const userMsg = { sender: 'user', text: textPrompt };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateDevCraftResponse(textPrompt);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 600);
  };

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (!userQuery.trim()) return;

    const queryText = userQuery;
    setUserQuery('');
    setMessages((prev) => [...prev, { sender: 'user', text: queryText }]);
    setIsTyping(true);

    setTimeout(() => {
      const botReply = generateDevCraftResponse(queryText);
      setMessages((prev) => [...prev, { sender: 'bot', text: botReply }]);
      setIsTyping(false);
    }, 800);
  };

  return (
    <>
      <header className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${scrolled ? 'bg-slate-950/90 border-b border-slate-900/80 backdrop-blur-md py-4' : 'bg-transparent py-6'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          
          {/* Brand Logo - DevCraft */}
          <a href="#hero" className="flex items-center gap-2.5 group">
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white font-bold text-base shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform">
              D
            </div>
            <span className="text-lg font-bold tracking-tight text-white">
              Dev<span className="text-blue-500">Craft</span>
            </span>
          </a>

          {/* Quick Contact CTA with Chat Toggle */}
          <button 
            onClick={() => setIsChatOpen(true)}
            className="group inline-flex items-center gap-2.5 text-xs font-semibold px-4.5 py-2.5 rounded-full bg-slate-900/90 text-slate-200 border border-slate-800 hover:border-blue-500/60 hover:text-white transition-all shadow-md active:scale-95"
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
            </span>
            <span>Let's Talk</span>
            <svg className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
            </svg>
          </button>

        </div>
      </header>

      {/* Enterprise AI Assistant Modal */}
      {isChatOpen && (
        <div className="fixed inset-0 z-50 flex items-end sm:items-center justify-center sm:justify-end p-0 sm:p-6 bg-slate-950/80 backdrop-blur-md animate-fadeIn">
          <div className="w-full sm:w-[420px] bg-slate-900 border border-slate-800/90 rounded-t-3xl sm:rounded-2xl shadow-2xl flex flex-col h-[580px] overflow-hidden text-white">
            
            {/* Header */}
            <div className="bg-slate-950 px-5 py-4 border-b border-slate-800 flex justify-between items-center">
              <div className="flex items-center gap-3">
                <div className="relative">
                  <div className="w-10 h-10 rounded-xl bg-blue-600/20 border border-blue-500/40 flex items-center justify-center text-blue-400 font-bold text-xs tracking-wider">
                    DC
                  </div>
                  <span className="absolute bottom-0 right-0 w-2.5 h-2.5 rounded-full bg-emerald-500 border-2 border-slate-950"></span>
                </div>
                <div>
                  <h3 className="text-xs font-bold text-white tracking-wide uppercase flex items-center gap-1.5">
                    DevCraft Copilot
                  </h3>
                  <p className="text-[11px] text-slate-400">Verified Technical Consultant</p>
                </div>
              </div>
              <button 
                onClick={() => setIsChatOpen(false)}
                className="w-8 h-8 rounded-full bg-slate-800/80 hover:bg-slate-700 text-slate-300 flex items-center justify-center transition-colors text-xs font-bold"
              >
                ✕
              </button>
            </div>

            {/* Chat Body */}
            <div className="flex-1 p-4 overflow-y-auto space-y-3.5 bg-slate-950/40 text-xs">
              {messages.map((m, idx) => (
                <div key={idx} className={`flex ${m.sender === 'user' ? 'justify-end' : 'justify-start'}`}>
                  <div className={`max-w-[88%] p-3.5 rounded-xl leading-relaxed shadow-sm whitespace-pre-line ${
                    m.sender === 'user' 
                      ? 'bg-blue-600 text-white rounded-br-none font-medium' 
                      : 'bg-slate-800/90 text-slate-200 border border-slate-700/60 rounded-bl-none'
                  }`}>
                    {m.text}
                  </div>
                </div>
              ))}

              {/* Typing indicator */}
              {isTyping && (
                <div className="flex justify-start">
                  <div className="bg-slate-800/90 border border-slate-700/60 px-4 py-2.5 rounded-xl rounded-bl-none flex items-center gap-1.5">
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.2s]"></span>
                    <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce [animation-delay:0.4s]"></span>
                  </div>
                </div>
              )}
              <div ref={chatEndRef} />
            </div>

            {/* Professional Quick Action Pills */}
            <div className="px-3.5 py-2.5 bg-slate-900 border-t border-slate-800 flex gap-2 overflow-x-auto text-[11px] scrollbar-none">
              <button onClick={() => handleQuickOption('services')} className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-blue-600/20 hover:border-blue-500/50 border border-slate-700/80 text-slate-300 whitespace-nowrap transition-all font-medium">
                🛠️ Services & FYPs
              </button>
              <button onClick={() => handleQuickOption('tech')} className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-blue-600/20 hover:border-blue-500/50 border border-slate-700/80 text-slate-300 whitespace-nowrap transition-all font-medium">
                💻 Tech Stack
              </button>
              <button onClick={() => handleQuickOption('pricing')} className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-blue-600/20 hover:border-blue-500/50 border border-slate-700/80 text-slate-300 whitespace-nowrap transition-all font-medium">
                💰 Pricing
              </button>
              <button onClick={() => handleQuickOption('contact')} className="px-3 py-1.5 rounded-lg bg-slate-800/80 hover:bg-blue-600/20 hover:border-blue-500/50 border border-slate-700/80 text-slate-300 whitespace-nowrap transition-all font-medium">
                📬 Contact
              </button>
            </div>

            {/* Input Box */}
            <form onSubmit={handleSendMessage} className="p-3 bg-slate-950 border-t border-slate-800 flex gap-2 items-center">
              <input 
                type="text"
                placeholder="Ask about FYPs, tech stack, pricing..."
                value={userQuery}
                onChange={(e) => setUserQuery(e.target.value)}
                className="flex-1 bg-slate-900 border border-slate-800 rounded-xl px-3.5 py-2.5 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button 
                type="submit" 
                className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2.5 rounded-xl text-xs font-semibold transition-all shadow-md shadow-blue-600/20 shrink-0"
              >
                Send
              </button>
            </form>

          </div>
        </div>
      )}
    </>
  );
}

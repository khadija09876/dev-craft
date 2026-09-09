import React from 'react';
import Navbar from './components/Navbar'; // Import Navbar
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Contact from './components/Contact';
import Sidebar from './components/Sidebar';

export default function App() {
  return (
    <div className="relative bg-slate-950 min-h-screen">
      <Navbar /> {/* Added here */}
      <Sidebar />
      <main>
        <Hero />
        <About />
        <Services />
        <Skills />
        <Projects />
        <Contact />
      </main>
    </div>
  );
}
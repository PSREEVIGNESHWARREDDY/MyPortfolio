import React from 'react';
import NetworkCanvas from './components/NetworkCanvas';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Education from './components/Education';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Hackathons from './components/Hackathons';
import Hobbies from './components/Hobbies';
import Achievements from './components/Achievements';
import SocialLinks from './components/SocialLinks';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="relative min-h-screen bg-[#0B0F17] text-slate-200 overflow-hidden font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Background Interactive Cybersecurity Nodes Canvas */}
      <NetworkCanvas />

      {/* Sticky Header Navigation */}
      <Navbar />

      {/* Main Portfolio Sections */}
      <main>
        <Hero />
        <About />
        <Education />
        <Skills />
        <Projects />
        <Hackathons />
        <Hobbies />
        <Achievements />
        <SocialLinks />
        <Contact />
      </main>

      {/* Footer */}
      <Footer />
    </div>
  );
}

export default App;

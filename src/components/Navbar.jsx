import React, { useState, useEffect } from 'react';
import { Shield, Menu, X, Terminal, ChevronRight } from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const navItems = [
  { name: 'Home', href: '#home' },
  { name: 'About', href: '#about' },
  { name: 'Education', href: '#education' },
  { name: 'Skills', href: '#skills' },
  { name: 'Projects', href: '#projects' },
  { name: 'Hackathons', href: '#hackathons' },
  { name: 'Hobbies', href: '#hobbies' },
  { name: 'Achievements', href: '#achievements' },
  { name: 'Contact', href: '#contact' },
];

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      // Section intersection detection
      const sections = navItems.map((item) => item.href.substring(1));
      const scrollPosition = window.scrollY + 120;

      for (let i = sections.length - 1; i >= 0; i--) {
        const element = document.getElementById(sections[i]);
        if (element && element.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const targetId = href.substring(1);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? 'glass-nav py-3 shadow-lg shadow-black/40 border-b border-cyan-500/20'
          : 'bg-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between">
          {/* Logo / Brand */}
          <a
            href="#home"
            onClick={(e) => handleNavClick(e, '#home')}
            className="flex items-center gap-2.5 group"
            aria-label="Vigneshwar Reddy Home"
          >
            <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-400/30 flex items-center justify-center group-hover:border-cyan-400 group-hover:shadow-[0_0_15px_rgba(0,240,255,0.4)] transition-all">
              <Shield className="w-5 h-5 text-cyan-400 group-hover:scale-110 transition-transform" />
            </div>
            <div className="flex flex-col">
              <span className="font-bold text-slate-100 tracking-wide text-base group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                {personalInfo.shortName}
                <span className="inline-block w-1.5 h-1.5 rounded-full bg-cyan-400 animate-pulse" />
              </span>
              <span className="font-mono-code text-[10px] text-cyan-400/80 tracking-wider">
                CYBERSEC &bull; DEV
              </span>
            </div>
          </a>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1 bg-slate-900/60 p-1.5 rounded-full border border-slate-800 backdrop-blur-md">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-3.5 py-1.5 rounded-full text-xs font-medium transition-all ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-[0_0_10px_rgba(0,240,255,0.2)]'
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/50'
                  }`}
                >
                  {item.name}
                </a>
              );
            })}
          </nav>

          {/* Connect Badge Quick Action */}
          <div className="hidden lg:flex items-center">
            <a
              href="#contact"
              onClick={(e) => handleNavClick(e, '#contact')}
              className="flex items-center gap-2 px-4 py-2 rounded-xl text-xs font-semibold bg-gradient-to-r from-cyan-500/20 to-blue-600/20 text-cyan-300 border border-cyan-500/30 hover:border-cyan-400 hover:bg-cyan-500/30 transition-all shadow-[0_0_15px_rgba(0,240,255,0.15)] group"
            >
              <Terminal className="w-3.5 h-3.5 text-cyan-400" />
              <span>Get In Touch</span>
              <ChevronRight className="w-3.5 h-3.5 text-cyan-400 group-hover:translate-x-0.5 transition-transform" />
            </a>
          </div>

          {/* Mobile Hamburger Toggle */}
          <div className="flex lg:hidden">
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-xl bg-slate-900/80 border border-slate-800 text-slate-300 hover:text-cyan-400 focus:outline-none focus:ring-2 focus:ring-cyan-500/50"
              aria-label="Toggle Navigation Menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden glass-card border-b border-cyan-500/20 mt-3 px-4 pt-3 pb-6 mx-4 rounded-2xl animate-in fade-in slide-in-from-top-4 duration-200">
          <nav className="flex flex-col space-y-1.5">
            {navItems.map((item) => {
              const isActive = activeSection === item.href.substring(1);
              return (
                <a
                  key={item.name}
                  href={item.href}
                  onClick={(e) => handleNavClick(e, item.href)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-medium transition-all flex items-center justify-between ${
                    isActive
                      ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40'
                      : 'text-slate-300 hover:bg-slate-800/60 hover:text-cyan-300'
                  }`}
                >
                  <span>{item.name}</span>
                  {isActive && <span className="w-2 h-2 rounded-full bg-cyan-400" />}
                </a>
              );
            })}
            <div className="pt-3 border-t border-slate-800 mt-2">
              <a
                href="#contact"
                onClick={(e) => handleNavClick(e, '#contact')}
                className="w-full flex items-center justify-center gap-2 py-3 rounded-xl text-sm font-semibold bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 hover:from-cyan-400 hover:to-blue-500 transition-all shadow-md shadow-cyan-500/20"
              >
                <Terminal className="w-4 h-4" />
                <span>Connect With Me</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
};

export default Navbar;

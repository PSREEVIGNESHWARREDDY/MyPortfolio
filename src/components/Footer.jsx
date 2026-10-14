import React from 'react';
import { Shield, Mail, ArrowUp } from 'lucide-react';
import { InstagramIcon, GithubIcon, LinkedinIcon } from './SocialBrandIcons';
import { personalInfo, socialLinks } from '../data/portfolioData';

const iconMap = {
  Instagram: InstagramIcon,
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail: Mail
};

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative z-10 bg-slate-950 border-t border-slate-800/80 pt-16 pb-12 text-slate-400 font-light text-sm">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row items-center justify-between gap-8 pb-12 border-b border-slate-800/80">
          
          {/* Brand & Subtitle */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left space-y-2">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                <Shield className="w-4 h-4" />
              </div>
              <span className="font-bold text-slate-100 text-lg tracking-wide">
                {personalInfo.shortName}
              </span>
            </div>
            <p className="text-xs font-mono-code text-cyan-400/90">
              Cyber Security Student &bull; Developer &bull; Photographer
            </p>
            <p className="text-xs text-slate-500 max-w-md">
              {personalInfo.college} &bull; {personalInfo.location}
            </p>
          </div>

          {/* Social Icons Bar */}
          <div className="flex items-center gap-3">
            {socialLinks.map((item) => {
              const IconComp = iconMap[item.icon] || Shield;
              return item.isConfigured ? (
                <a
                  key={item.name}
                  href={item.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={item.name}
                  className="w-10 h-10 rounded-xl bg-slate-900 border border-cyan-500/30 hover:border-cyan-400 text-cyan-400 hover:text-cyan-300 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                >
                  <IconComp className="w-4 h-4" />
                </a>
              ) : (
                <div
                  key={item.name}
                  title={`${item.name} (Placeholder)`}
                  className="w-10 h-10 rounded-xl bg-slate-900/50 border border-slate-800 text-slate-600 flex items-center justify-center cursor-not-allowed opacity-60"
                >
                  <IconComp className="w-4 h-4" />
                </div>
              );
            })}
          </div>

          {/* Scroll to top button */}
          <div>
            <button
              onClick={scrollToTop}
              className="p-3 rounded-xl bg-slate-900 border border-slate-800 text-slate-300 hover:text-cyan-400 hover:border-cyan-500/40 transition-all cursor-pointer flex items-center gap-2 text-xs font-mono-code"
              aria-label="Scroll to top"
            >
              <span>Back to Top</span>
              <ArrowUp className="w-4 h-4 text-cyan-400" />
            </button>
          </div>

        </div>

        {/* Copyright Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs font-mono-code text-slate-500 gap-4">
          <p>
            &copy; 2026 {personalInfo.shortName}. All rights reserved.
          </p>
          <div className="flex items-center gap-4">
            <span className="hover:text-slate-400 transition-colors">
              Built with React, Vite & Tailwind CSS
            </span>
            <span>&bull;</span>
            <span className="text-cyan-400">Cybersecurity Aesthetic</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;

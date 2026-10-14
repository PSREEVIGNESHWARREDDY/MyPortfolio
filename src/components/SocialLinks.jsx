import React from 'react';
import { ExternalLink, Shield, Lock, Mail } from 'lucide-react';
import { InstagramIcon, GithubIcon, LinkedinIcon } from './SocialBrandIcons';
import { socialLinks, personalInfo } from '../data/portfolioData';

const iconMap = {
  Instagram: InstagramIcon,
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail: Mail
};

const SocialLinks = () => {
  return (
    <section id="social" className="py-20 relative z-10 bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code">
            <Shield className="w-3.5 h-3.5" />
            <span>08. SOCIAL PROFILES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Connect & Follow Online
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
          <p className="text-slate-400 text-sm max-w-2xl font-light">
            Verified social profile handles and placeholder slots for developer platforms.
          </p>
        </div>

        {/* Social Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl mx-auto">
          {socialLinks.map((item) => {
            const IconComp = iconMap[item.icon] || ExternalLink;
            return item.isConfigured ? (
              <a
                key={item.name}
                href={item.url}
                target="_blank"
                rel="noopener noreferrer"
                className="glass-card rounded-2xl p-6 border border-cyan-500/30 hover:border-cyan-400 transition-all flex flex-col justify-between space-y-4 group hover:-translate-y-1 shadow-lg shadow-cyan-500/5"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-pink-500/20 to-purple-600/20 border border-pink-500/30 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <ExternalLink className="w-4 h-4 text-cyan-400 opacity-70 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono-code text-cyan-400 mt-1">
                    {item.handle}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[11px] font-mono-code text-emerald-400 flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span>Verified Profile Link</span>
                </div>
              </a>
            ) : (
              <div
                key={item.name}
                className="glass-card rounded-2xl p-6 border border-slate-800/80 opacity-80 flex flex-col justify-between space-y-4"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400">
                    <IconComp className="w-6 h-6" />
                  </div>
                  <Lock className="w-4 h-4 text-slate-600" />
                </div>

                <div>
                  <h3 className="text-lg font-bold text-slate-300">
                    {item.name}
                  </h3>
                  <p className="text-xs font-mono-code text-slate-500 mt-1 truncate">
                    {item.handle}
                  </p>
                </div>

                <div className="pt-2 border-t border-slate-800 text-[11px] font-mono-code text-slate-500 italic">
                  Placeholder • Add link in portfolioData.js
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default SocialLinks;

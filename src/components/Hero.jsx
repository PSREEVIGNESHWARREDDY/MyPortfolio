import React, { useState, useEffect } from 'react';
import {
  Shield,
  MapPin,
  GraduationCap,
  ArrowRight,
  Send,
  Terminal,
  Code2,
  Lock,
  Camera,
  Mail,
  Trophy,
  Flame
} from 'lucide-react';
import { personalInfo, socialLinks } from '../data/portfolioData';
import { InstagramIcon, GithubIcon, LinkedinIcon } from './SocialBrandIcons';

const iconMap = {
  Instagram: InstagramIcon,
  Github: GithubIcon,
  Linkedin: LinkedinIcon,
  Mail: Mail
};

const terminalLogs = [
  { cmd: 'whoami', out: 'Patharched Sree Vigneshwar Reddy • Cyber Security' },
  { cmd: 'cat achievements.log', out: '🥈 2nd Place @ WARZONE 4.0 CTF (tr!n3tr@)' },
  { cmd: 'nmap -sV skills', out: 'C++, Python, Java, Cryptography, CTFs, DSA' },
  { cmd: 'leetcode --stats', out: '198+ Problems Solved • Contest Rating 1,557' },
  { cmd: 'status --active', out: 'Rank 34 Top 100 Coders • 100th GOPWNIT CTF' }
];

const Hero = () => {
  const [logIndex, setLogIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setLogIndex((prev) => (prev + 1) % terminalLogs.length);
    }, 3200);
    return () => clearInterval(timer);
  }, []);

  const handleScrollTo = (id) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="home"
      className="relative min-h-screen pt-32 pb-20 flex items-center justify-center overflow-hidden z-10"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Hero Content */}
          <div className="lg:col-span-7 flex flex-col space-y-6 text-left">
            
            {/* Status & Location Pill */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full glass-card border border-cyan-500/30 text-xs font-mono-code text-cyan-300 max-w-fit shadow-[0_0_15px_rgba(0,240,255,0.15)]">
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-ping" />
              <Shield className="w-3.5 h-3.5 text-cyan-400" />
              <span>2ND YEAR B.TECH &bull; CYBER SECURITY</span>
            </div>

            {/* Main Greeting & Name */}
            <div className="space-y-2">
              <span className="text-cyan-400 font-mono-code text-sm sm:text-base font-medium tracking-wide block">
                Hi, I'm
              </span>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold text-slate-100 tracking-tight leading-tight">
                {personalInfo.fullName}
              </h1>
            </div>

            {/* Short Tagline */}
            <h2 className="text-lg sm:text-xl lg:text-2xl font-semibold cyber-text-gradient tracking-wide">
              {personalInfo.tagline}
            </h2>

            {/* Short Introduction */}
            <p className="text-slate-300 text-base sm:text-lg leading-relaxed max-w-2xl font-light">
              {personalInfo.heroBio}
            </p>

            {/* Location & Institution Badges */}
            <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-slate-400 font-mono-code pt-1">
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <GraduationCap className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.collegeShort}</span>
              </div>
              <div className="flex items-center gap-1.5 bg-slate-900/80 px-3 py-1.5 rounded-lg border border-slate-800">
                <MapPin className="w-4 h-4 text-cyan-400" />
                <span>{personalInfo.location}</span>
              </div>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-wrap items-center gap-4 pt-4">
              {/* Explore Skills Button */}
              <button
                onClick={() => handleScrollTo('skills')}
                className="group relative px-6 py-3.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-[1.02] active:scale-[0.98] transition-all flex items-center gap-2 cursor-pointer"
              >
                <span>Explore Skills & Tech</span>
                <ArrowRight className="w-4 h-4 text-slate-950 group-hover:translate-x-1 transition-transform" />
              </button>

              {/* Connect With Me Button */}
              <button
                onClick={() => handleScrollTo('contact')}
                className="group px-6 py-3.5 rounded-xl glass-card border border-cyan-500/40 hover:border-cyan-400 text-cyan-300 hover:text-cyan-200 font-semibold text-sm tracking-wide hover:bg-cyan-500/10 transition-all flex items-center gap-2 cursor-pointer shadow-md"
              >
                <Send className="w-4 h-4 text-cyan-400 group-hover:rotate-12 transition-transform" />
                <span>Connect With Me</span>
              </button>

              {/* View Milestones Quick Action */}
              <button
                onClick={() => handleScrollTo('achievements')}
                className="group px-5 py-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-800 border border-slate-800 hover:border-cyan-500/30 text-slate-300 hover:text-cyan-300 font-medium text-sm tracking-wide transition-all flex items-center gap-2 cursor-pointer"
              >
                <Trophy className="w-4 h-4 text-amber-400 group-hover:scale-110 transition-transform" />
                <span>View Milestones</span>
              </button>
            </div>

            {/* Quick Direct Social Links */}
            <div className="flex items-center gap-3 pt-2 flex-wrap">
              <span className="text-xs font-mono-code text-slate-500">Profiles:</span>
              <div className="flex items-center gap-2">
                {socialLinks.map((item) => {
                  const IconComp = iconMap[item.icon] || Shield;
                  const isMail = item.url.startsWith('mailto:');
                  return item.isConfigured ? (
                    <a
                      key={item.name}
                      href={item.url}
                      target={isMail ? undefined : "_blank"}
                      rel={isMail ? undefined : "noopener noreferrer"}
                      aria-label={`Open ${item.name}`}
                      title={`${item.name}: ${item.handle}`}
                      className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-cyan-400 text-slate-400 hover:text-cyan-300 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                    >
                      <IconComp className="w-4 h-4" />
                    </a>
                  ) : null;
                })}
                <a
                  href="https://leetcode.com/u/p_sv_reddy2007/"
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label="LeetCode Profile"
                  title="LeetCode: @p_sv_reddy2007"
                  className="w-9 h-9 rounded-xl bg-slate-900/90 border border-slate-800 hover:border-amber-400 text-slate-400 hover:text-amber-300 flex items-center justify-center transition-all hover:scale-110 shadow-sm"
                >
                  <Flame className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>

          {/* Hero Visual Card / Tech Badge Display */}
          <div className="lg:col-span-5 relative flex justify-center">
            
            {/* Glowing Backdrop Aura */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 h-72 bg-cyan-500/20 rounded-full blur-3xl pointer-events-none animate-cyber-pulse" />
            
            <div className="relative w-full max-w-md glass-card rounded-3xl p-6 sm:p-8 border border-cyan-500/30 shadow-2xl space-y-6">
              
              {/* Card Header Header Terminal Bar */}
              <div className="flex items-center justify-between border-b border-slate-800 pb-4">
                <div className="flex items-center gap-2">
                  <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block" />
                  <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block" />
                </div>
                <div className="flex items-center gap-1.5 font-mono-code text-[11px] text-cyan-400/90 bg-slate-950/80 px-2.5 py-1 rounded-md border border-slate-800">
                  <Terminal className="w-3 h-3 text-cyan-400" />
                  <span>vigneshwar@vnrvjiet:~$</span>
                </div>
              </div>

              {/* Dynamic Cycling Terminal Console */}
              <div className="bg-slate-950/90 p-3.5 rounded-2xl border border-cyan-500/30 font-mono-code text-xs space-y-1.5 shadow-inner">
                <div className="flex items-center gap-1.5 text-cyan-400 text-[11px]">
                  <span className="text-pink-400">vigneshwar@vnrvjiet:~$</span>
                  <span className="text-slate-100 font-semibold">{terminalLogs[logIndex].cmd}</span>
                  <span className="w-1.5 h-3.5 bg-cyan-400 animate-pulse inline-block align-middle" />
                </div>
                <p className="text-emerald-400 pl-2.5 border-l-2 border-emerald-500/50 text-[11px] leading-relaxed">
                  ➜ {terminalLogs[logIndex].out}
                </p>
              </div>

              {/* Profile Highlight Badge Grid */}
              <div className="space-y-3 font-mono-code text-xs">
                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 shrink-0">
                    <Shield className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">MAJOR FOCUS</span>
                    <span className="text-slate-200 font-semibold">Cybersecurity & Cryptography</span>
                  </div>
                </div>

                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-500/10 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Code2 className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">DEVELOPMENT</span>
                    <span className="text-slate-200 font-semibold">C++ &bull; Java &bull; Python &bull; React</span>
                  </div>
                </div>

                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-purple-500/10 border border-purple-500/30 flex items-center justify-center text-purple-400 shrink-0">
                    <Lock className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">PRACTICE</span>
                    <span className="text-slate-200 font-semibold">CTF Competitions & DSA</span>
                  </div>
                </div>

                <div className="bg-slate-950/60 p-3 rounded-xl border border-slate-800/80 flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 shrink-0">
                    <Camera className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-slate-400 block text-[10px]">CREATIVE PASSION</span>
                    <span className="text-slate-200 font-semibold">Landscape & Sunset Photography</span>
                  </div>
                </div>
              </div>

              {/* Status Footer */}
              <div className="pt-2 flex items-center justify-between text-[11px] font-mono-code text-slate-400 border-t border-slate-800/60">
                <span className="flex items-center gap-1.5">
                  <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                  Open for CTFs & Projects
                </span>
                <span className="text-cyan-400/90 font-bold">2026</span>
              </div>
            </div>
          </div>

        </div>

        {/* Cyber Impact Metrics Ribbon */}
        <div className="mt-16 pt-10 border-t border-slate-800/80 grid grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="glass-card rounded-2xl p-5 border border-cyan-500/25 hover:border-cyan-400/60 transition-all text-left group hover:-translate-y-1 duration-200 shadow-lg shadow-cyan-500/5">
            <span className="text-[10px] font-mono-code text-cyan-400 uppercase tracking-wider block font-semibold">
              WARZONE 4.0 CTF
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl sm:text-3xl font-black text-slate-100 group-hover:text-cyan-300 transition-colors">
                2nd
              </span>
              <span className="text-xs font-mono-code text-emerald-400 font-bold">
                Place 🥈
              </span>
            </div>
            <span className="text-[11px] font-mono-code text-slate-400 block mt-1">
              Team tr!n3tr@ Podium
            </span>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-cyan-500/25 hover:border-cyan-400/60 transition-all text-left group hover:-translate-y-1 duration-200 shadow-lg shadow-cyan-500/5">
            <span className="text-[10px] font-mono-code text-cyan-400 uppercase tracking-wider block font-semibold">
              TOP 100 CODERS 3.0
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl sm:text-3xl font-black text-slate-100 group-hover:text-cyan-300 transition-colors">
                #34
              </span>
              <span className="text-xs font-mono-code text-amber-400 font-bold">
                Rank 🏆
              </span>
            </div>
            <span className="text-[11px] font-mono-code text-slate-400 block mt-1">
              VNRVJIET Krithomedh
            </span>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-cyan-500/25 hover:border-cyan-400/60 transition-all text-left group hover:-translate-y-1 duration-200 shadow-lg shadow-cyan-500/5">
            <span className="text-[10px] font-mono-code text-cyan-400 uppercase tracking-wider block font-semibold">
              LEETCODE SOLVED
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl sm:text-3xl font-black text-slate-100 group-hover:text-cyan-300 transition-colors">
                198+
              </span>
              <span className="text-xs font-mono-code text-emerald-400 font-bold">
                AC 🎯
              </span>
            </div>
            <span className="text-[11px] font-mono-code text-slate-400 block mt-1">
              Rating 1,557 • Top 31%
            </span>
          </div>

          <div className="glass-card rounded-2xl p-5 border border-cyan-500/25 hover:border-cyan-400/60 transition-all text-left group hover:-translate-y-1 duration-200 shadow-lg shadow-cyan-500/5">
            <span className="text-[10px] font-mono-code text-cyan-400 uppercase tracking-wider block font-semibold">
              GOPWNIT CTF 2026
            </span>
            <div className="flex items-baseline gap-1 mt-1">
              <span className="text-2xl sm:text-3xl font-black text-slate-100 group-hover:text-cyan-300 transition-colors">
                #100
              </span>
              <span className="text-xs font-mono-code text-cyan-400 font-bold">
                Rank 🛡️
              </span>
            </div>
            <span className="text-[11px] font-mono-code text-slate-400 block mt-1">
              National CTF Competitor
            </span>
          </div>
        </div>

      </div>
    </section>
  );
};

export default Hero;

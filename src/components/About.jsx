import React from 'react';
import {
  User,
  ShieldCheck,
  Code,
  Trophy,
  Camera,
  Terminal,
  Cpu,
  Sparkles,
  BookOpen
} from 'lucide-react';
import { personalInfo } from '../data/portfolioData';

const interests = [
  { label: 'Cybersecurity', icon: ShieldCheck, color: 'text-cyan-400 border-cyan-500/30 bg-cyan-500/10' },
  { label: 'Programming', icon: Code, color: 'text-blue-400 border-blue-500/30 bg-blue-500/10' },
  { label: 'Data Structures & Algorithms', icon: Cpu, color: 'text-indigo-400 border-indigo-500/30 bg-indigo-500/10' },
  { label: 'Competitive Coding', icon: Terminal, color: 'text-purple-400 border-purple-500/30 bg-purple-500/10' },
  { label: 'Software Development', icon: BookOpen, color: 'text-sky-400 border-sky-500/30 bg-sky-500/10' },
  { label: 'Hackathons', icon: Trophy, color: 'text-amber-400 border-amber-500/30 bg-amber-500/10' },
  { label: 'Capture The Flag (CTF)', icon: ShieldCheck, color: 'text-emerald-400 border-emerald-500/30 bg-emerald-500/10' },
  { label: 'Creative Photography', icon: Camera, color: 'text-pink-400 border-pink-500/30 bg-pink-500/10' }
];

const About = () => {
  return (
    <section id="about" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code">
            <User className="w-3.5 h-3.5" />
            <span>01. ABOUT ME</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Who I Am & What I Drive For
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
        </div>

        {/* Two-Column Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Left Column: Visual Profile Card */}
          <div className="lg:col-span-5 relative">
            
            {/* Ambient Background Glow */}
            <div className="absolute -inset-2 bg-gradient-to-r from-cyan-500/20 to-blue-600/20 rounded-3xl blur-xl opacity-70" />
            
            <div className="relative glass-card rounded-3xl p-8 border border-slate-700/60 text-center space-y-6">
              
              {/* Profile Avatar Frame */}
              <div className="relative w-36 h-36 mx-auto rounded-2xl bg-gradient-to-tr from-cyan-500/30 via-slate-900 to-blue-600/30 p-1 border-2 border-cyan-400/50 shadow-xl shadow-cyan-500/20 flex items-center justify-center group">
                <div className="w-full h-full rounded-xl bg-slate-950 flex flex-col items-center justify-center p-4 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyan-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <User className="w-16 h-16 text-cyan-400 mb-1 group-hover:scale-110 transition-transform" />
                  <span className="font-mono-code text-[10px] text-cyan-300 font-semibold tracking-wider">
                    P.S.V. REDDY
                  </span>
                </div>
              </div>

              {/* Quick Details */}
              <div className="space-y-2">
                <h3 className="text-xl font-bold text-slate-100">
                  {personalInfo.fullName}
                </h3>
                <p className="text-xs font-mono-code text-cyan-400">
                  {personalInfo.degree}
                </p>
                <p className="text-xs text-slate-400">
                  {personalInfo.college}
                </p>
              </div>

              {/* Micro Stats */}
              <div className="grid grid-cols-2 gap-3 pt-2 text-left font-mono-code text-xs">
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">LOCATION</span>
                  <span className="text-slate-200 font-medium text-[11px]">Hyderabad, IN</span>
                </div>
                <div className="bg-slate-900/80 p-3 rounded-xl border border-slate-800">
                  <span className="text-slate-500 block text-[10px]">FOCUS</span>
                  <span className="text-cyan-300 font-medium text-[11px]">Cyber Security</span>
                </div>
              </div>

              {/* Motto Badge */}
              <div className="pt-2 border-t border-slate-800/80">
                <p className="text-xs text-slate-400 italic">
                  "Driven by curiosity, analytical thinking, secure coding practices, and creative visual storytelling."
                </p>
              </div>
            </div>
          </div>

          {/* Right Column: Narrative & Interest Badges */}
          <div className="lg:col-span-7 space-y-6 text-left">
            <div className="space-y-4">
              <h3 className="text-2xl font-bold text-slate-100 flex items-center gap-2">
                <span>Passionate Cyber Security Student & Problem Solver</span>
                <Sparkles className="w-5 h-5 text-cyan-400 inline" />
              </h3>

              {personalInfo.aboutBio.map((paragraph, index) => (
                <p key={index} className="text-slate-300 text-base leading-relaxed">
                  {paragraph}
                </p>
              ))}
            </div>

            {/* Technical & Personal Core Interests */}
            <div className="pt-4 space-y-3">
              <h4 className="text-sm font-mono-code text-cyan-400 tracking-wider uppercase font-semibold">
                Core Focus Areas & Interests
              </h4>
              
              <div className="flex flex-wrap gap-2.5">
                {interests.map((item) => {
                  const IconComponent = item.icon;
                  return (
                    <div
                      key={item.label}
                      className={`flex items-center gap-2 px-3.5 py-2 rounded-xl border text-xs font-medium backdrop-blur-md transition-all hover:scale-[1.03] ${item.color}`}
                    >
                      <IconComponent className="w-3.5 h-3.5" />
                      <span>{item.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Objective Banner */}
            <div className="p-4 rounded-2xl bg-cyan-950/20 border border-cyan-500/20 text-xs text-cyan-200/90 leading-relaxed font-mono-code">
              <span className="font-bold text-cyan-400 mr-2">[STATUS]</span>
              Continuously building security-focused projects, refining algorithm proficiency, participating in hackathons & CTFs, and preparing for future security certifications.
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};

export default About;

import React from 'react';
import { Flag, Trophy, Award, ShieldAlert, Terminal, Sparkles, CheckCircle2 } from 'lucide-react';
import { hackathonsAndCyber } from '../data/portfolioData';

const iconMap = {
  Flag: Flag,
  Trophy: Trophy,
  Award: Award
};

const Hackathons = () => {
  return (
    <section id="hackathons" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code">
            <ShieldAlert className="w-3.5 h-3.5" />
            <span>05. COMPETITIONS & EVENTS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            {hackathonsAndCyber.sectionTitle}
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
          <p className="text-slate-400 text-sm max-w-2xl font-light">
            {hackathonsAndCyber.subtitle}
          </p>
        </div>

        {/* Cybersecurity Timeline & Cards Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {hackathonsAndCyber.activities.map((activity) => {
            const IconComp = iconMap[activity.icon] || Terminal;
            return (
              <div
                key={activity.id}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-6 group"
              >
                <div className="space-y-4">
                  {/* Top Badge */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <span className="text-[11px] font-mono-code px-2.5 py-1 rounded-md bg-slate-900 text-cyan-400 border border-cyan-500/20">
                      {activity.category}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {activity.title}
                  </h3>

                  <p className="text-xs font-mono-code text-slate-400">
                    {activity.event}
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {activity.description}
                  </p>
                </div>

                {/* Tags */}
                <div className="pt-4 border-t border-slate-800/60 space-y-3">
                  <div className="flex flex-wrap gap-2">
                    {activity.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2.5 py-0.5 rounded-md bg-slate-950 text-slate-400 border border-slate-800 text-[11px] font-mono-code flex items-center gap-1"
                      >
                        <CheckCircle2 className="w-3 h-3 text-cyan-400" />
                        <span>{tag}</span>
                      </span>
                    ))}
                  </div>
                </div>

              </div>
            );
          })}
        </div>

        {/* Commitment Banner */}
        <div className="mt-12 p-6 rounded-2xl glass-card border border-cyan-500/30 text-center max-w-3xl mx-auto space-y-2">
          <span className="inline-flex items-center gap-1.5 text-xs font-mono-code text-cyan-400">
            <Sparkles className="w-4 h-4 text-cyan-400" />
            <span>CONTINUOUS COMPETITION ENGAGEMENT</span>
          </span>
          <p className="text-slate-300 text-sm font-light">
            Actively seeking upcoming hackathons, CTF matches, and technical paper presentations to collaborate with teams and push technical boundaries.
          </p>
        </div>

      </div>
    </section>
  );
};

export default Hackathons;

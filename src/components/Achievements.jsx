import React from 'react';
import {
  Trophy,
  ShieldAlert,
  Code2,
  Medal,
  Zap,
  GraduationCap,
  Award,
  PlusCircle
} from 'lucide-react';
import { achievementsCategories } from '../data/portfolioData';

const iconMap = {
  Trophy: Trophy,
  ShieldAlert: ShieldAlert,
  CodeCheck: Code2,
  Medal: Medal,
  Zap: Zap,
  GraduationCap: GraduationCap
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code">
            <Award className="w-3.5 h-3.5" />
            <span>07. ACHIEVEMENTS & CERTIFICATIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Milestones & Honors Registry
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
          <p className="text-slate-400 text-sm max-w-2xl font-light">
            Structured records for hackathon placements, CTF ranks, coding ratings, certifications, and academic recognitions.
          </p>
        </div>

        {/* Categories Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {achievementsCategories.map((category) => {
            const IconComp = iconMap[category.icon] || Award;
            return (
              <div
                key={category.id}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-slate-100">
                      {category.title}
                    </h3>
                  </div>

                  {/* Items list */}
                  <div className="space-y-3">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 space-y-1.5"
                      >
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-slate-200">
                            {item.title}
                          </h4>
                          {item.isPlaceholder && (
                            <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-900 text-cyan-400 border border-slate-800">
                              READY FOR ENTRY
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">
                          {item.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Edit Note */}
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                  <span className="flex items-center gap-1">
                    <PlusCircle className="w-3 h-3 text-cyan-400" />
                    Easy to update in portfolioData.js
                  </span>
                </div>
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
};

export default Achievements;

import {
  ShieldAlert,
  Code2,
  Award,
  ShieldCheck,
  ExternalLink,
  Sparkles
} from 'lucide-react';
import { achievementsCategories } from '../data/portfolioData';
import LeetCodeCard from './LeetCodeCard';

const iconMap = {
  ShieldAlert: ShieldAlert,
  CodeCheck: Code2
};

const Achievements = () => {
  return (
    <section id="achievements" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code">
            <Award className="w-3.5 h-3.5" />
            <span>05. ACHIEVEMENTS & MILESTONES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Milestones & Honors Registry
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
          <p className="text-slate-400 text-sm max-w-2xl font-light">
            Verified competitive programming rankings, CTF podiums, and live algorithmic performance metrics.
          </p>
        </div>

        {/* Categories Grid: CTF (1 col) + Coding (2 cols) */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-stretch">
          {achievementsCategories.map((category) => {
            const isCoding = category.id === 'coding';
            const IconComp = iconMap[category.icon] || Award;

            if (isCoding) {
              return (
                <div
                  key={category.id}
                  className="lg:col-span-2 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-6"
                >
                  <div className="space-y-6">
                    {/* Category Header */}
                    <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                      <div className="flex items-center gap-3">
                        <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                          <IconComp className="w-5 h-5" />
                        </div>
                        <div>
                          <h3 className="text-lg font-bold text-slate-100">
                            {category.title}
                          </h3>
                          <p className="text-xs text-slate-400 font-mono-code">
                            Algorithmic competitions & live statistics
                          </p>
                        </div>
                      </div>
                      <span className="hidden sm:inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-cyan-500/10 border border-cyan-500/20 text-[11px] font-mono-code text-cyan-300">
                        <Sparkles className="w-3.5 h-3.5 text-cyan-400" />
                        <span>Live Synced</span>
                      </span>
                    </div>

                    {/* 2-Column Subgrid for Coding Items */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-stretch">
                      {category.items.map((item, idx) => {
                        if (item.isLeetCodeLive) {
                          return (
                            <div key={idx} className="h-full">
                              <LeetCodeCard username={item.username || "p_sv_reddy2007"} />
                            </div>
                          );
                        }

                        return (
                          <div
                            key={idx}
                            className="bg-slate-950/60 p-5 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-4 group/item"
                          >
                            <div className="space-y-3">
                              <div className="flex items-center justify-between gap-2 flex-wrap">
                                <span className="text-[10px] font-mono-code text-cyan-400 tracking-wider font-semibold uppercase">
                                  VNRVJIET KRITHOMEDH
                                </span>
                                {item.badge && (
                                  <span className="text-[10px] font-mono-code px-2.5 py-0.5 rounded-md border font-medium bg-amber-500/15 text-amber-300 border-amber-500/30">
                                    {item.badge}
                                  </span>
                                )}
                              </div>

                              <h4 className="text-sm sm:text-base font-bold text-slate-100 group-hover/item:text-cyan-300 transition-colors leading-snug">
                                {item.title}
                              </h4>

                              <p className="text-xs text-slate-400 font-light leading-relaxed">
                                {item.detail}
                              </p>

                              {/* Highlight Tags */}
                              <div className="flex flex-wrap gap-1.5 pt-1">
                                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                                  DSA & Algorithms
                                </span>
                                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                                  Speed & Accuracy
                                </span>
                                <span className="text-[10px] font-mono-code px-2 py-0.5 rounded bg-slate-900 border border-slate-800 text-slate-300">
                                  College Finalist
                                </span>
                              </div>
                            </div>

                            <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between flex-wrap gap-2">
                              {item.url && (
                                <a
                                  href={item.url}
                                  target="_blank"
                                  rel="noopener noreferrer"
                                  className="inline-flex items-center gap-1.5 text-xs font-mono-code text-cyan-400 hover:text-cyan-300 group/link"
                                >
                                  <span>View LinkedIn Post</span>
                                  <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                                </a>
                              )}
                              <span className="text-[10px] font-mono-code text-slate-500">
                                Rank Certificate
                              </span>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* Footer */}
                  <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                    <span className="flex items-center gap-1.5 text-cyan-400/90">
                      <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                      <span>Live Synced Algorithmic Metrics</span>
                    </span>
                    <span className="text-slate-500">Updated Real-Time</span>
                  </div>
                </div>
              );
            }

            // CTF Category (1 Column)
            return (
              <div
                key={category.id}
                className="lg:col-span-1 glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between space-y-6"
              >
                <div className="space-y-4">
                  {/* Category Header */}
                  <div className="flex items-center gap-3 border-b border-slate-800/80 pb-4">
                    <div className="w-10 h-10 rounded-xl bg-cyan-500/10 border border-cyan-500/30 flex items-center justify-center text-cyan-400">
                      <IconComp className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-slate-100">
                        {category.title}
                      </h3>
                      <p className="text-xs text-slate-400 font-mono-code">
                        Podiums & National Contests
                      </p>
                    </div>
                  </div>

                  {/* Items list */}
                  <div className="space-y-3">
                    {category.items.map((item, idx) => (
                      <div
                        key={idx}
                        className="bg-slate-950/60 p-4 rounded-2xl border border-slate-800/80 hover:border-cyan-500/40 transition-all space-y-2 group/item"
                      >
                        <div className="flex items-center justify-between gap-2 flex-wrap">
                          <h4 className="text-xs font-bold text-slate-200 group-hover/item:text-cyan-300 transition-colors">
                            {item.title}
                          </h4>
                          {item.badge && (
                            <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-md border shrink-0 font-medium bg-emerald-500/15 text-emerald-300 border-emerald-500/30">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-400 font-light leading-relaxed">
                          {item.detail}
                        </p>
                        {item.url && (
                          <div className="pt-1">
                            <a
                              href={item.url}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="inline-flex items-center gap-1.5 text-xs font-mono-code text-cyan-400 hover:text-cyan-300 group/link"
                            >
                              <span>View LinkedIn Post</span>
                              <ExternalLink className="w-3.5 h-3.5 group-hover/link:translate-x-0.5 group-hover/link:-translate-y-0.5 transition-transform" />
                            </a>
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {/* Footer Status Badge */}
                <div className="pt-2 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono-code text-slate-400">
                  <span className="flex items-center gap-1.5 text-cyan-400/90">
                    <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" />
                    <span>Verified CTF Records</span>
                  </span>
                  <span className="text-slate-500">2026</span>
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

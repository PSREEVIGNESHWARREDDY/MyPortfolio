import React from 'react';
import { GraduationCap, Calendar, MapPin, BookOpen, CheckCircle2, Milestone } from 'lucide-react';
import { educationTimeline, personalInfo } from '../data/portfolioData';

const Education = () => {
  return (
    <section id="education" className="py-24 relative z-10 bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code">
            <GraduationCap className="w-3.5 h-3.5" />
            <span>02. ACADEMICS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Education & Academic Roadmap
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
          <p className="text-slate-400 text-sm max-w-2xl font-light">
            Current undergraduate degree program and planned professional security development milestones.
          </p>
        </div>

        {/* Timeline Container */}
        <div className="max-w-4xl mx-auto relative">
          
          {/* Vertical Glowing Line */}
          <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-cyan-500 via-blue-500 to-slate-800" />

          <div className="space-y-10">
            {educationTimeline.map((item) => (
              <div key={item.id} className="relative pl-12 sm:pl-20 group">
                
                {/* Node Dot */}
                <div className={`absolute left-2.5 sm:left-6.5 top-1.5 -translate-x-1/2 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  item.isCurrent
                    ? 'bg-slate-950 border-cyan-400 shadow-[0_0_15px_rgba(0,240,255,0.5)] text-cyan-400'
                    : 'bg-slate-900 border-slate-700 text-slate-500 group-hover:border-cyan-500/50'
                }`}>
                  {item.isCurrent ? (
                    <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
                  ) : (
                    <Milestone className="w-3 h-3" />
                  )}
                </div>

                {/* Card Container */}
                <div className={`glass-card rounded-2xl p-6 sm:p-8 border transition-all ${
                  item.isCurrent
                    ? 'border-cyan-500/40 shadow-xl shadow-cyan-500/10'
                    : 'border-slate-800 hover:border-slate-700'
                }`}>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 border-b border-slate-800 pb-4 mb-4">
                    <div>
                      <div className="flex items-center gap-2 mb-1">
                        <h3 className="text-xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                          {item.degree}
                        </h3>
                        {item.isCurrent && (
                          <span className="px-2.5 py-0.5 rounded-full bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 text-[11px] font-mono-code">
                            CURRENT
                          </span>
                        )}
                      </div>
                      <p className="text-cyan-400 font-medium text-sm">
                        {item.institution}
                      </p>
                    </div>

                    <div className="flex flex-wrap items-center gap-2 text-xs font-mono-code text-slate-400">
                      <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800">
                        <MapPin className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.location}</span>
                      </div>
                      <div className="flex items-center gap-1 bg-slate-900 px-3 py-1.5 rounded-lg border border-slate-800 text-cyan-300">
                        <Calendar className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{item.status}</span>
                      </div>
                    </div>
                  </div>

                  <p className="text-slate-300 text-sm leading-relaxed mb-6 font-light">
                    {item.description}
                  </p>

                  {/* Badges */}
                  <div className="flex flex-wrap gap-2">
                    {item.badges.map((badge) => (
                      <span
                        key={badge}
                        className="px-3 py-1 rounded-lg bg-slate-900 text-slate-300 border border-slate-800 text-xs font-mono-code flex items-center gap-1.5"
                      >
                        <CheckCircle2 className="w-3.5 h-3.5 text-cyan-400" />
                        <span>{badge}</span>
                      </span>
                    ))}
                  </div>

                </div>
              </div>
            ))}
          </div>

          {/* Extensibility Note */}
          <div className="mt-8 text-center font-mono-code text-xs text-slate-500">
            Timeline structure designed for easy expansion of future degrees, certifications, and academic milestones.
          </div>

        </div>
      </div>
    </section>
  );
};

export default Education;

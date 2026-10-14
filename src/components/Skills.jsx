import React, { useState } from 'react';
import {
  Code2,
  Cpu,
  ShieldCheck,
  Wrench,
  Search,
  CheckCircle,
  Terminal,
  Layers
} from 'lucide-react';
import { skillCategories } from '../data/portfolioData';

const iconMap = {
  Code2: Code2,
  Cpu: Cpu,
  ShieldCheck: ShieldCheck,
  Wrench: Wrench
};

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredCategories = skillCategories.map((category) => {
    const matchesCategory = activeCategory === 'All' || category.title === activeCategory;
    
    if (!matchesCategory) return null;

    const filteredSkills = category.skills.filter((skill) =>
      skill.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      (skill.level && skill.level.toLowerCase().includes(searchQuery.toLowerCase()))
    );

    if (searchQuery && filteredSkills.length === 0) return null;

    return {
      ...category,
      skills: filteredSkills
    };
  }).filter(Boolean);

  return (
    <section id="skills" className="py-24 relative z-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code">
            <Terminal className="w-3.5 h-3.5" />
            <span>03. SKILLS & COMPETENCIES</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Technical Stack & Security Fundamentals
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
          <p className="text-slate-400 text-sm max-w-2xl font-light">
            Core programming languages, computer science foundations, cybersecurity practices, and developer tooling.
          </p>
        </div>

        {/* Filter Controls & Search Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-12 max-w-5xl mx-auto">
          
          {/* Category Tabs */}
          <div className="flex flex-wrap justify-center items-center gap-2 bg-slate-900/80 p-1.5 rounded-2xl border border-slate-800 backdrop-blur-md">
            <button
              onClick={() => setActiveCategory('All')}
              className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                activeCategory === 'All'
                  ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
              }`}
            >
              All Categories
            </button>
            {skillCategories.map((cat) => (
              <button
                key={cat.title}
                onClick={() => setActiveCategory(cat.title)}
                className={`px-4 py-2 rounded-xl text-xs font-semibold transition-all cursor-pointer ${
                  activeCategory === cat.title
                    ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-sm'
                    : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60'
                }`}
              >
                {cat.title}
              </button>
            ))}
          </div>

          {/* Search Input */}
          <div className="relative w-full md:w-64">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search skills..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-10 pr-4 py-2 rounded-xl bg-slate-900/80 border border-slate-800 text-xs text-slate-200 placeholder-slate-500 focus:outline-none focus:border-cyan-500/50 transition-colors"
            />
          </div>

        </div>

        {/* Skill Category Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredCategories.length > 0 ? (
            filteredCategories.map((category) => {
              const IconComp = iconMap[category.icon] || Layers;
              return (
                <div
                  key={category.title}
                  className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 hover:border-cyan-500/30 transition-all flex flex-col justify-between"
                >
                  <div className="space-y-6">
                    {/* Header */}
                    <div className="flex items-center gap-3.5 border-b border-slate-800/80 pb-4">
                      <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-cyan-500/20 to-blue-600/30 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
                        <IconComp className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="text-xl font-bold text-slate-100">
                          {category.title}
                        </h3>
                        <p className="text-xs text-slate-400 font-light">
                          {category.description}
                        </p>
                      </div>
                    </div>

                    {/* Skill Badges Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                      {category.skills.map((skill) => (
                        <div
                          key={skill.name}
                          className="bg-slate-950/60 hover:bg-slate-900/80 p-3.5 rounded-xl border border-slate-800/90 hover:border-cyan-500/30 transition-all flex items-center justify-between group"
                        >
                          <div className="flex items-center gap-2.5">
                            <CheckCircle className="w-4 h-4 text-cyan-400 group-hover:scale-110 transition-transform shrink-0" />
                            <span className="text-sm font-semibold text-slate-200 group-hover:text-cyan-300 transition-colors">
                              {skill.name}
                            </span>
                          </div>
                          {skill.level && (
                            <span className="text-[10px] font-mono-code px-2 py-0.5 rounded-md bg-slate-900 text-slate-400 border border-slate-800">
                              {skill.level}
                            </span>
                          )}
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="mt-6 pt-4 border-t border-slate-800/60 flex items-center justify-between text-[11px] font-mono-code text-slate-500">
                    <span>Active Competency</span>
                    <span className="text-cyan-400">{category.skills.length} Skills listed</span>
                  </div>
                </div>
              );
            })
          ) : (
            <div className="col-span-2 text-center py-12 glass-card rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-sm font-mono-code">
                No skills matching "{searchQuery}" in selected filter.
              </p>
            </div>
          )}
        </div>

      </div>
    </section>
  );
};

export default Skills;

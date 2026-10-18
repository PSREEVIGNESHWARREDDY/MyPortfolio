import React, { useState } from 'react';
import { Camera, Code, Shield, Video, Sparkles, CheckCircle2, Eye } from 'lucide-react';
import { hobbies } from '../data/portfolioData';
import PhotoModal from './PhotoModal';

const iconMap = {
  Camera: Camera,
  Code: Code,
  Shield: Shield,
  Video: Video
};

const Hobbies = () => {
  const [photoModalOpen, setPhotoModalOpen] = useState(false);

  return (
    <section id="hobbies" className="py-24 relative z-10 bg-slate-950/40 border-y border-slate-800/60">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col items-center text-center space-y-3 mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-500/10 border border-cyan-500/30 text-cyan-400 text-xs font-mono-code">
            <Sparkles className="w-3.5 h-3.5" />
            <span>04. HOBBIES & CREATIVE PASSIONS</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-100 tracking-tight">
            Beyond Code & Security Terminals
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-600 rounded-full" />
          <p className="text-slate-400 text-sm max-w-2xl font-light">
            Creative pursuits, algorithmic challenges, security research, and visual storytelling.
          </p>
        </div>

        {/* Hobbies Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {hobbies.map((hobby) => {
            const IconComp = iconMap[hobby.icon] || Sparkles;
            return (
              <div
                key={hobby.id}
                className="glass-card rounded-3xl p-6 sm:p-8 border border-slate-800/80 hover:border-cyan-500/40 transition-all flex flex-col justify-between space-y-6 group hover:-translate-y-1 duration-300"
              >
                <div className="space-y-4">
                  {/* Header */}
                  <div className="flex items-center justify-between border-b border-slate-800/80 pb-4">
                    <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-cyan-500/20 via-slate-900 to-blue-600/30 border border-cyan-500/30 flex items-center justify-center text-cyan-400 group-hover:scale-110 transition-transform">
                      <IconComp className="w-6 h-6" />
                    </div>
                    {hobby.hasModal && (
                      <span className="px-2.5 py-1 rounded-md bg-pink-500/10 border border-pink-500/30 text-pink-400 text-[11px] font-mono-code">
                        GALLERY AVAILABLE
                      </span>
                    )}
                  </div>

                  <h3 className="text-2xl font-bold text-slate-100 group-hover:text-cyan-300 transition-colors">
                    {hobby.title}
                  </h3>

                  <p className="text-xs font-mono-code text-cyan-400/90 italic">
                    "{hobby.tagline}"
                  </p>

                  <p className="text-slate-300 text-sm leading-relaxed font-light">
                    {hobby.description}
                  </p>

                  {/* Bullet Highlights */}
                  <div className="space-y-2 pt-2">
                    {hobby.details.map((detail) => (
                      <div
                        key={detail}
                        className="flex items-center gap-2.5 text-xs font-mono-code text-slate-300"
                      >
                        <CheckCircle2 className="w-4 h-4 text-cyan-400 shrink-0" />
                        <span>{detail}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Optional Gallery Action Button for Photography */}
                {hobby.hasModal && (
                  <div className="pt-4 border-t border-slate-800/80">
                    <button
                      onClick={() => setPhotoModalOpen(true)}
                      className="w-full py-3 rounded-xl bg-gradient-to-r from-pink-500/20 to-purple-600/20 hover:from-pink-500/30 hover:to-purple-600/30 text-pink-300 border border-pink-500/40 text-xs font-mono-code flex items-center justify-center gap-2 transition-all cursor-pointer shadow-md shadow-pink-500/10"
                    >
                      <Eye className="w-4 h-4 text-pink-400" />
                      <span>Explore Photography Lightbox Gallery</span>
                    </button>
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>

      {/* Photography Lightbox Modal */}
      <PhotoModal
        isOpen={photoModalOpen}
        onClose={() => setPhotoModalOpen(false)}
      />
    </section>
  );
};

export default Hobbies;

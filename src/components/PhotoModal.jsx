import React, { useState } from 'react';
import { X, Camera, ChevronLeft, ChevronRight } from 'lucide-react';
import { photographyCategories } from '../data/portfolioData';

const PhotoModal = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('landscape');
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);

  if (!isOpen) return null;

  const categoryObj = photographyCategories.find((cat) => cat.id === activeCategory) || photographyCategories[0];
  const currentPhoto = categoryObj.photos[activePhotoIndex] || categoryObj.photos[0];

  const handleNext = () => {
    setActivePhotoIndex((prev) => (prev + 1) % categoryObj.photos.length);
  };

  const handlePrev = () => {
    setActivePhotoIndex((prev) => (prev - 1 + categoryObj.photos.length) % categoryObj.photos.length);
  };

  const handleCategorySelect = (id) => {
    setActiveCategory(id);
    setActivePhotoIndex(0);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-slate-950/90 backdrop-blur-xl animate-in fade-in">
      <div className="glass-card rounded-3xl max-w-4xl w-full p-6 border border-cyan-500/40 space-y-6 relative flex flex-col max-h-[90vh]">
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400">
              <Camera className="w-5 h-5" />
            </div>
            <div>
              <h3 className="text-xl font-bold text-slate-100 flex items-center gap-2">
                <span>Creative Photography Gallery</span>
              </h3>
              <p className="text-xs text-slate-400 font-mono-code">
                Shot & curated by Patharched Sree Vigneshwar Reddy
              </p>
            </div>
          </div>

          <button
            onClick={onClose}
            className="p-2 rounded-xl bg-slate-900 border border-slate-800 text-slate-400 hover:text-white transition-colors cursor-pointer"
            aria-label="Close Gallery"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap gap-2 border-b border-slate-800 pb-3">
          {photographyCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-mono-code transition-all cursor-pointer ${
                activeCategory === cat.id
                  ? 'bg-pink-500/20 text-pink-300 border border-pink-500/40 shadow-sm'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900'
              }`}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Photo Display View */}
        <div className="relative flex-1 min-h-[300px] sm:min-h-[400px] rounded-2xl overflow-hidden bg-slate-950 border border-slate-800 flex items-center justify-center group">
          <img
            src={currentPhoto.url}
            alt={currentPhoto.caption}
            className="w-full h-full object-cover rounded-2xl transition-all duration-300"
          />

          {/* Overlay Navigation Arrows */}
          {categoryObj.photos.length > 1 && (
            <>
              <button
                onClick={handlePrev}
                className="absolute left-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 border border-slate-700 text-slate-200 hover:text-cyan-400 transition-all cursor-pointer opacity-80 hover:opacity-100"
                aria-label="Previous Photo"
              >
                <ChevronLeft className="w-6 h-6" />
              </button>
              <button
                onClick={handleNext}
                className="absolute right-3 top-1/2 -translate-y-1/2 p-2 rounded-full bg-slate-950/80 border border-slate-700 text-slate-200 hover:text-cyan-400 transition-all cursor-pointer opacity-80 hover:opacity-100"
                aria-label="Next Photo"
              >
                <ChevronRight className="w-6 h-6" />
              </button>
            </>
          )}

          {/* Caption Overlay */}
          <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-4 sm:p-6 text-left">
            <span className="text-[11px] font-mono-code text-pink-400 block mb-1">
              CATEGORY: {categoryObj.name.toUpperCase()}
            </span>
            <p className="text-sm sm:text-base font-semibold text-slate-100">
              {currentPhoto.caption}
            </p>
          </div>
        </div>

        {/* Modal Footer Controls */}
        <div className="flex items-center justify-between text-xs font-mono-code text-slate-400 pt-2">
          <span>
            Showing {activePhotoIndex + 1} of {categoryObj.photos.length} in {categoryObj.name}
          </span>
          <button
            onClick={onClose}
            className="px-4 py-2 rounded-xl bg-slate-900 text-slate-300 border border-slate-800 hover:bg-slate-800 transition-all cursor-pointer"
          >
            Close Viewer
          </button>
        </div>

      </div>
    </div>
  );
};

export default PhotoModal;

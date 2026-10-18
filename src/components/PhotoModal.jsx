import React, { useState, useEffect, useCallback, useRef } from 'react';
import { X, Camera, ChevronLeft, ChevronRight, ExternalLink } from 'lucide-react';
import { photographyCategories } from '../data/portfolioData';

const PhotoModal = ({ isOpen, onClose }) => {
  const [activeCategory, setActiveCategory] = useState('all');
  const [activePhotoIndex, setActivePhotoIndex] = useState(0);
  const touchStartX = useRef(0);
  const touchEndX = useRef(0);

  const categoryObj = photographyCategories.find((cat) => cat.id === activeCategory) || photographyCategories[0];
  const currentPhoto = categoryObj.photos[activePhotoIndex] || categoryObj.photos[0];

  const handleNext = useCallback(() => {
    setActivePhotoIndex((prev) => (prev + 1) % categoryObj.photos.length);
  }, [categoryObj.photos.length]);

  const handlePrev = useCallback(() => {
    setActivePhotoIndex((prev) => (prev - 1 + categoryObj.photos.length) % categoryObj.photos.length);
  }, [categoryObj.photos.length]);

  const handleCategorySelect = (id) => {
    setActiveCategory(id);
    setActivePhotoIndex(0);
  };

  // Lock background page scroll when modal is open
  useEffect(() => {
    if (!isOpen) return;

    const originalOverflow = document.body.style.overflow;
    const originalPaddingRight = document.body.style.paddingRight;
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;

    document.body.style.overflow = 'hidden';
    if (scrollbarWidth > 0) {
      document.body.style.paddingRight = `${scrollbarWidth}px`;
    }

    return () => {
      document.body.style.overflow = originalOverflow;
      document.body.style.paddingRight = originalPaddingRight;
    };
  }, [isOpen]);

  // Keyboard navigation support
  useEffect(() => {
    if (!isOpen) return;
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') {
        handleNext();
      } else if (e.key === 'ArrowLeft') {
        handlePrev();
      } else if (e.key === 'Escape') {
        onClose();
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, handleNext, handlePrev, onClose]);

  // Touch swipe support for mobile/tablet platforms
  const handleTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e) => {
    touchEndX.current = e.changedTouches[0].clientX;
    const diff = touchStartX.current - touchEndX.current;
    if (Math.abs(diff) > 45) {
      if (diff > 0) {
        handleNext(); // Swipe left -> next
      } else {
        handlePrev(); // Swipe right -> prev
      }
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-2 sm:p-4 md:p-6 bg-slate-950/95 backdrop-blur-2xl animate-in fade-in duration-200 overscroll-contain select-none"
      onClick={onClose}
    >
      <div
        className="glass-card rounded-2xl sm:rounded-3xl max-w-6xl w-full p-3 sm:p-5 border border-cyan-500/40 relative flex flex-col h-[96dvh] sm:h-auto sm:max-h-[94vh] shadow-2xl bg-slate-900/90 text-slate-100 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        
        {/* Modal Header */}
        <div className="flex items-center justify-between border-b border-slate-800 pb-2.5 sm:pb-3 shrink-0 gap-2">
          <div className="flex items-center gap-2.5 min-w-0">
            <div className="w-9 h-9 rounded-xl bg-pink-500/20 border border-pink-500/40 flex items-center justify-center text-pink-400 shrink-0">
              <Camera className="w-4 h-4 sm:w-5 sm:h-5" />
            </div>
            <div className="min-w-0">
              <h3 className="text-sm sm:text-lg font-bold text-slate-100 truncate flex items-center gap-2">
                <span>Personal Photography</span>
                <span className="hidden md:inline-block text-[11px] font-mono-code font-normal text-pink-300 px-2 py-0.5 rounded-full bg-pink-500/10 border border-pink-500/20">
                  {categoryObj.photos.length} Frames
                </span>
              </h3>
              <p className="text-[10px] sm:text-xs text-slate-400 font-mono-code truncate">
                Patharched Sree Vigneshwar Reddy
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 shrink-0">
            <a
              href="https://instagram.com/p_sv.reddy2007"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1.5 rounded-xl bg-pink-500/10 hover:bg-pink-500/20 border border-pink-500/30 text-pink-300 text-xs font-mono-code transition-all"
              title="Visit Instagram Profile"
            >
              <span className="hidden sm:inline">@p_sv.reddy2007</span>
              <span className="sm:hidden text-[11px]">Instagram</span>
              <ExternalLink className="w-3 h-3" />
            </a>
            <button
              onClick={onClose}
              className="p-2 rounded-xl bg-slate-800/80 hover:bg-slate-700 text-slate-300 hover:text-white transition-colors cursor-pointer"
              aria-label="Close Gallery"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* Category Tabs (Horizontally scrollable on all platforms) */}
        <div className="flex items-center gap-1.5 border-b border-slate-800/80 pb-2 overflow-x-auto shrink-0 scrollbar-none">
          {photographyCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => handleCategorySelect(cat.id)}
              className={`px-3 py-1 rounded-xl text-xs font-mono-code whitespace-nowrap transition-all cursor-pointer shrink-0 ${
                activeCategory === cat.id
                  ? 'bg-pink-500/25 text-pink-300 border border-pink-500/40 shadow-sm font-semibold'
                  : 'text-slate-400 hover:text-slate-200 hover:bg-slate-800/60 border border-transparent'
              }`}
            >
              {cat.name} ({cat.photos.length})
            </button>
          ))}
        </div>

        {/* Free Ratio Main Image Canvas */}
        <div
          className="relative flex-1 min-h-0 flex flex-col items-center justify-center overflow-hidden my-1"
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
        >
          {/* Natural free-ratio image viewport */}
          <div className="relative w-full h-full flex items-center justify-center p-1 sm:p-2">
            <img
              key={currentPhoto.url}
              src={currentPhoto.url}
              alt={currentPhoto.caption}
              className="max-h-[52vh] sm:max-h-[58vh] md:max-h-[62vh] w-auto max-w-full h-auto object-contain rounded-xl shadow-2xl transition-all duration-300"
              loading="lazy"
            />

            {/* Desktop / Tablet Navigation Arrows */}
            {categoryObj.photos.length > 1 && (
              <>
                <button
                  onClick={handlePrev}
                  className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-cyan-400 transition-all cursor-pointer opacity-85 hover:opacity-100 shadow-xl"
                  aria-label="Previous Photo"
                >
                  <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
                <button
                  onClick={handleNext}
                  className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 p-2.5 sm:p-3 rounded-full bg-slate-950/80 hover:bg-slate-900 border border-slate-700/80 text-slate-200 hover:text-cyan-400 transition-all cursor-pointer opacity-85 hover:opacity-100 shadow-xl"
                  aria-label="Next Photo"
                >
                  <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6" />
                </button>
              </>
            )}
          </div>
        </div>

        {/* Dedicated Unobstructed Caption Strip (Does NOT cover the photo) */}
        <div className="shrink-0 bg-slate-950/80 border border-slate-800/80 rounded-xl px-3.5 py-2 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
          <div className="min-w-0">
            <span className="text-[10px] font-mono-code text-pink-400 block">
              {categoryObj.name.toUpperCase()} &bull; FRAME {activePhotoIndex + 1} OF {categoryObj.photos.length}
            </span>
            <p className="text-xs sm:text-sm font-semibold text-slate-200 truncate">
              {currentPhoto.caption}
            </p>
          </div>
          <span className="text-[10px] font-mono-code text-slate-500 shrink-0 hidden sm:inline-block">
            Swipe or use arrow keys
          </span>
        </div>

        {/* Thumbnail Preview Strip */}
        <div className="shrink-0 flex items-center gap-2 overflow-x-auto py-1 scrollbar-thin scrollbar-thumb-slate-800">
          {categoryObj.photos.map((photo, idx) => (
            <button
              key={idx}
              onClick={() => setActivePhotoIndex(idx)}
              className={`relative shrink-0 w-12 h-12 sm:w-14 sm:h-14 rounded-lg sm:rounded-xl overflow-hidden border-2 transition-all cursor-pointer ${
                activePhotoIndex === idx
                  ? 'border-pink-400 scale-105 shadow-md shadow-pink-500/30'
                  : 'border-slate-800 opacity-55 hover:opacity-100 hover:border-slate-600'
              }`}
            >
              <img
                src={photo.url}
                alt={photo.caption}
                className="w-full h-full object-cover"
                loading="lazy"
              />
            </button>
          ))}
        </div>

        {/* Modal Footer Controls */}
        <div className="shrink-0 flex items-center justify-between text-[11px] font-mono-code text-slate-400 pt-2 border-t border-slate-800/60">
          <span className="hidden sm:inline">
            ← / → navigate &bull; Esc to exit
          </span>
          <span className="sm:hidden text-slate-500">
            Swipe left/right to browse
          </span>
          <button
            onClick={onClose}
            className="px-3 py-1 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 text-xs font-mono-code transition-all cursor-pointer ml-auto"
          >
            Close
          </button>
        </div>

      </div>
    </div>
  );
};

export default PhotoModal;

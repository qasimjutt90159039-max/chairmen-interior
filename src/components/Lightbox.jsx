import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

export default function Lightbox({
  isOpen,
  images = [],
  currentIndex = 0,
  onClose,
  onPrev,
  onNext
}) {
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };

    window.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';

    return () => {
      window.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'unset';
    };
  }, [isOpen, onClose, onPrev, onNext]);

  if (!isOpen || !images.length) return null;

  const currentItem = images[currentIndex] || images[0];

  return (
    <div
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-xl flex flex-col justify-between p-4 sm:p-6 lg:p-8 animate-fade-in"
      role="dialog"
      aria-modal="true"
    >
      {/* Top Controls Bar */}
      <div className="flex items-center justify-between z-10 w-full max-w-6xl mx-auto pb-4 border-b border-white/10 text-xs tracking-widest text-stone-300">
        <div className="flex items-center gap-3">
          <span className="font-mono text-luxury-bronze">
            {String(currentIndex + 1).padStart(2, '0')} / {String(images.length).padStart(2, '0')}
          </span>
          <span className="hidden sm:inline-block text-stone-600">|</span>
          <span className="hidden sm:inline-block uppercase font-mono text-[11px] text-stone-400">
            {currentItem.category || 'Architecture'}
          </span>
        </div>

        <div className="flex items-center gap-2">
          <span className="hidden md:inline-block text-[11px] text-stone-500 font-sans mr-2">
            Use Esc or arrow keys
          </span>
          <button
            type="button"
            onClick={onClose}
            className="p-2.5 text-stone-300 hover:text-white bg-white/5 hover:bg-white/10 rounded-full transition-colors focus:outline-none"
            aria-label="Close image viewer"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Main Image Stage */}
      <div className="relative flex-1 flex items-center justify-center max-w-6xl mx-auto w-full my-4 overflow-hidden">
        {/* Prev Button */}
        <button
          type="button"
          onClick={onPrev}
          className="absolute left-2 sm:left-4 z-20 p-3 text-white bg-black/60 hover:bg-luxury-bronze hover:text-black rounded-full backdrop-blur-md transition-all duration-300 -translate-y-1/2 top-1/2"
          aria-label="Previous image"
        >
          <ChevronLeft className="w-6 h-6" />
        </button>

        {/* Next Button */}
        <button
          type="button"
          onClick={onNext}
          className="absolute right-2 sm:right-4 z-20 p-3 text-white bg-black/60 hover:bg-luxury-bronze hover:text-black rounded-full backdrop-blur-md transition-all duration-300 -translate-y-1/2 top-1/2"
          aria-label="Next image"
        >
          <ChevronRight className="w-6 h-6" />
        </button>

        {/* Current Image */}
        <div className="relative max-h-[72vh] max-w-full flex items-center justify-center">
          <img
            src={currentItem.image}
            alt={currentItem.title || "Interior design concept"}
            className="max-h-[72vh] w-auto max-w-full object-contain rounded-sm shadow-2xl transition-opacity duration-300"
          />
        </div>
      </div>

      {/* Caption and Architectural Disclaimer */}
      <div className="w-full max-w-4xl mx-auto text-center pt-3 border-t border-white/10">
        <h4 className="font-serif text-lg sm:text-xl text-white font-medium">
          {currentItem.title}
        </h4>
        {currentItem.description && (
          <p className="mt-1 text-xs sm:text-sm text-stone-400 font-light">
            {currentItem.description}
          </p>
        )}
        <p className="mt-2 text-[10px] tracking-wider text-stone-500 uppercase font-mono">
          Curated Architectural Inspiration & Design Concept
        </p>
      </div>
    </div>
  );
}

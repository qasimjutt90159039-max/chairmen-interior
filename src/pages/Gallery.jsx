import React, { useState } from 'react';
import { Maximize2, Sparkles, Filter } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Lightbox from '../components/Lightbox';
import CTASection from '../components/CTASection';
import { galleryCategories, galleryItems } from '../data/galleryData';
import { businessInfo } from '../data/businessInfo';

export default function Gallery() {
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  const filteredItems = activeCategory === "All"
    ? galleryItems
    : galleryItems.filter(item => item.category === activeCategory);

  const handleOpenLightbox = (index) => {
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? filteredItems.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === filteredItems.length - 1 ? 0 : prev + 1));
  };

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO
        title="Interior & Wall Design Gallery Lahore | PVC Panels & Wallpapers"
        description="Browse Chairman Interiors' curated gallery of architectural wall design, fluted PVC panels, luxury wallpapers, and interior spaces in Lahore."
      />

      {/* =========================================================================
          GALLERY HERO
          ========================================================================= */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 bg-luxury-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-luxury uppercase text-luxury-bronze block mb-4">
              [Visual Inspiration]
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium leading-[1.1] text-balance">
              CURATED WALL & INTERIOR PORTFOLIO.
            </h1>
            <p className="mt-6 text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Explore how fluted PVC panels, fine wallpaper weaves, and ambient lighting come together to define modern interior architecture.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          FILTER BAR & MASONRY GALLERY
          ========================================================================= */}
      <section className="py-16 sm:py-24 bg-luxury-obsidian min-h-[70vh]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Category Filter Controls */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-8 mb-10 border-b border-white/10 gap-4">
            <div className="flex items-center gap-2 text-stone-400 text-xs uppercase tracking-widest font-mono">
              <Filter className="w-3.5 h-3.5 text-luxury-bronze" />
              <span>Filter Categories</span>
            </div>

            <div className="flex flex-wrap items-center gap-2">
              {galleryCategories.map((cat) => {
                const isActive = activeCategory === cat;
                return (
                  <button
                    key={cat}
                    type="button"
                    onClick={() => setActiveCategory(cat)}
                    className={`px-4 py-2 text-xs tracking-wider uppercase font-mono transition-all duration-300 border ${
                      isActive
                        ? 'bg-luxury-bronze text-luxury-black border-luxury-bronze font-semibold shadow-md'
                        : 'bg-luxury-black/60 text-stone-400 border-white/10 hover:border-luxury-bronze/40 hover:text-white'
                    }`}
                  >
                    {cat}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Masonry Responsive Layout */}
          <div className="columns-1 sm:columns-2 lg:columns-3 gap-6 space-y-6">
            {filteredItems.map((item, index) => {
              return (
                <div
                  key={item.id}
                  onClick={() => handleOpenLightbox(index)}
                  className="break-inside-avoid group relative cursor-pointer overflow-hidden bg-luxury-graphite border border-white/10 hover:border-luxury-bronze/60 transition-all duration-500"
                >
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    loading="lazy"
                    className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
                  />

                  {/* Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6" />

                  {/* Content Overlay */}
                  <div className="absolute inset-x-0 bottom-0 p-6 transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] uppercase font-mono tracking-luxury text-luxury-bronze">
                        {item.category}
                      </span>
                      <div className="p-1.5 bg-luxury-black/80 rounded-full text-luxury-bronze border border-white/10">
                        <Maximize2 className="w-3.5 h-3.5" />
                      </div>
                    </div>
                    <h3 className="font-serif text-lg text-white font-medium">
                      {item.title}
                    </h3>
                    <p className="mt-1 text-stone-300 text-xs font-light line-clamp-2">
                      {item.description}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Tasteful Disclaimer Note */}
          <div className="mt-16 pt-8 border-t border-white/10 text-center">
            <p className="text-[11px] font-mono tracking-wider text-stone-400 uppercase">
              Notice: Visuals reflect curated architectural wall concepts and design inspirations.
            </p>
          </div>

        </div>
      </section>

      {/* Lightbox Modal */}
      <Lightbox
        isOpen={lightboxOpen}
        images={filteredItems}
        currentIndex={currentIndex}
        onClose={() => setLightboxOpen(false)}
        onPrev={handlePrev}
        onNext={handleNext}
      />

      <CTASection
        tag="CONSULT OUR TEAM"
        title="Found an aesthetic that resonates with your vision?"
        subtitle="Bring your favorite references to our showroom on Beadon Road, Garhi Shahu, Lahore to review matching physical panels and wallpaper samples."
        primaryBtnText="Discuss This Style"
        primaryBtnTo="/contact"
      />
    </div>
  );
}

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Sparkles, SlidersHorizontal } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { wallpaperCategories, wallpaperCollections } from '../data/wallpaperData';
import { businessInfo } from '../data/businessInfo';

export default function Wallpapers() {
  const [activeCategory, setActiveCategory] = useState("All");

  const filteredWallpapers = activeCategory === "All"
    ? wallpaperCollections
    : wallpaperCollections.filter(wp => wp.category === activeCategory);

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO
        title="Luxury Imported Wallpapers Lahore | Modern & Textured Coverings"
        description="Explore Chairman Interiors' luxury wallpaper collections in Lahore. Modern, minimal, luxury, textured, classic, and feature wall designs for elegant homes."
      />

      {/* =========================================================================
          HERO: Luxury Wallpaper Showcase
          ========================================================================= */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 bg-luxury-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-luxury uppercase text-luxury-bronze block mb-4">
              [Surface Textiles & Murals]
            </span>
            <h1 className="font-serif text-4xl sm:text-6xl md:text-6.5xl text-white font-medium leading-[1.08] text-balance">
              TACTILE TEXTURES & CURATED WALLPAPERS.
            </h1>
            <p className="mt-6 text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              From organic slub linen weaves to burnished metallic leaf accents, our wallpaper collections soften harsh acoustics and lend bespoke visual warmth to your interior spaces.
            </p>

            <div className="mt-8 flex items-center gap-4">
              <Button to="/contact" variant="primary" size="lg">
                Find the Right Look
              </Button>
              <a
                href={businessInfo.phoneTel}
                className="text-xs font-mono text-stone-300 hover:text-luxury-bronze transition-colors py-3 px-4 border border-white/10"
              >
                Call {businessInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          CATEGORY FILTER & SHOWCASE GALLERY
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-luxury-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
            <div>
              <span className="text-[10px] font-mono tracking-luxury text-luxury-bronze uppercase block mb-1">
                [Curated Catalog]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                Explore by Design Aesthetic
              </h2>
            </div>

            {/* Filter Pills */}
            <div className="flex flex-wrap items-center gap-2">
              {wallpaperCategories.map((cat) => {
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

          {/* Wallpaper Grid with Elegant Hover Reveal */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8">
            {filteredWallpapers.map((wp) => (
              <article
                key={wp.id}
                className="group relative bg-luxury-graphite/40 border border-white/10 overflow-hidden flex flex-col justify-between transition-all duration-500 hover:border-luxury-bronze/50"
              >
                {/* Image Container with Subtle Zoom */}
                <div className="relative aspect-[3/4] overflow-hidden bg-luxury-obsidian">
                  <img
                    src={wp.image}
                    alt={`${wp.title} luxury wallpaper`}
                    loading="lazy"
                    className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                  />
                  
                  {/* Subtle Gradient Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-black/30 to-transparent opacity-80 group-hover:opacity-90 transition-opacity" />

                  {/* Category Pill */}
                  <div className="absolute top-4 left-4 z-10 bg-luxury-black/85 backdrop-blur-md px-3 py-1 border border-white/10 text-luxury-bronze font-mono text-[10px] tracking-widest uppercase">
                    {wp.category}
                  </div>

                  {/* Hover Information Slide-in */}
                  <div className="absolute inset-x-0 bottom-0 p-5 z-10 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="font-serif text-lg sm:text-xl text-white font-medium">
                      {wp.title}
                    </h3>
                    
                    <p className="mt-1 text-stone-300 text-xs line-clamp-2 font-light opacity-90">
                      {wp.description}
                    </p>

                    <div className="mt-3 pt-3 border-t border-white/15 space-y-1 text-[11px] text-stone-300 font-mono">
                      <div className="flex justify-between">
                        <span className="text-stone-400">Texture:</span>
                        <span className="text-luxury-bronze">{wp.texture}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-stone-400">Palette:</span>
                        <span>{wp.palette}</span>
                      </div>
                    </div>

                    <div className="mt-4 pt-2">
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-[11px] font-semibold uppercase tracking-luxury text-luxury-bronze group-hover:text-white transition-colors"
                      >
                        <span>Request Sample Details</span>
                        <ArrowUpRight className="ml-1 w-3.5 h-3.5" />
                      </Link>
                    </div>
                  </div>
                </div>
              </article>
            ))}
          </div>

          {/* Find The Right Look CTA Banner */}
          <div className="mt-20 p-8 sm:p-12 bg-luxury-black border border-white/10 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-[10px] font-mono uppercase tracking-luxury text-luxury-bronze block mb-1">
                Personalized Selection
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl text-white font-medium">
                Not sure which texture suits your room?
              </h3>
              <p className="mt-2 text-stone-400 text-xs sm:text-sm font-light">
                Bring your room photos or dimensions to Chairman Interiors on Beadon Road, Garhi Shahu, Lahore, or get in touch for personalized recommendations.
              </p>
            </div>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-luxury bg-luxury-bronze text-luxury-black hover:bg-luxury-bronzeLight transition-colors shrink-0"
            >
              <span>Find the Right Look</span>
              <ArrowUpRight className="ml-2 w-4 h-4" />
            </Link>
          </div>

        </div>
      </section>

      <CTASection
        tag="VIEW PHYSICAL WALLPAPER SWATCHES"
        title="Experience paper textures and weaves in person."
        subtitle="Visit our showroom on Beadon Road, Garhi Shahu, Lahore to see full catalog rolls and tactile swatches under natural light."
        primaryBtnText="Contact Chairman Interiors"
        primaryBtnTo="/contact"
      />
    </div>
  );
}

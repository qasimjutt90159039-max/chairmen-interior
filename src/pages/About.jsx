import React from 'react';
import { Link } from 'react-router-dom';
import { MapPin, Phone, ArrowUpRight, Check, Eye, Box, Sliders } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import CTASection from '../components/CTASection';
import { businessInfo } from '../data/businessInfo';

export default function About() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO
        title="About Our Brand & Aesthetic Philosophy"
        description="Learn about Chairman Interiors, based in Garhi Shahu, Lahore. Dedicated to architectural wall transformation, premium PVC panels, and imported wallpapers."
      />

      {/* =========================================================================
          PAGE HEADER: Architectural Minimalist Intro
          ========================================================================= */}
      <section className="relative pt-24 pb-16 sm:pt-32 sm:pb-20 bg-luxury-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-luxury uppercase text-luxury-bronze block mb-4">
              [Brand Narrative & Space]
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium leading-[1.1] text-balance">
              THE ART OF ELEVATED WALLS & INTERIORS.
            </h1>
            <p className="mt-6 text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              Based on Beadon Road, Garhi Shahu, Lahore, Chairman Interiors is dedicated to redefining residential and commercial spaces through purposeful wall treatments, tactile materials, and contemporary interior solutions.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SPLIT-SCREEN SECTION: Interior Aesthetics & Material Purpose
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-luxury-obsidian relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
            
            {/* Split Screen Image */}
            <div className="lg:col-span-6 relative group">
              <div className="aspect-[4/5] overflow-hidden bg-luxury-graphite border border-white/10 shadow-2xl">
                <img
                  src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80"
                  alt="Architectural wall panelling craftsmanship"
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="absolute -bottom-6 -right-6 hidden sm:block p-6 bg-luxury-black border border-white/10 max-w-xs shadow-xl backdrop-blur-md">
                <span className="text-[10px] uppercase font-mono tracking-luxury text-luxury-bronze block mb-1">
                  Location Verified
                </span>
                <p className="text-xs text-stone-300">
                  Beadon Rd, Victoria Park, Garhi Shahu, Lahore, Pakistan
                </p>
              </div>
            </div>

            {/* Split Screen Text */}
            <div className="lg:col-span-6 flex flex-col justify-center space-y-6">
              <span className="text-xs font-mono tracking-luxury text-luxury-bronze uppercase">
                Aesthetic Vision
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium leading-snug">
                Moving Beyond Bare Paint Towards Tactile Distinction.
              </h2>
              
              <p className="text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                Traditional flat painted walls often lack tactile interest and can easily appear sterile or reveal subtle masonry imperfections. At Chairman Interiors, our philosophy centers on the transformative power of surface texture and dimensional relief.
              </p>

              <p className="text-stone-400 text-sm sm:text-base leading-relaxed font-light">
                By thoughtfully introducing linear PVC fluted panels, warm woven wallpapers, and sculptural lighting accents, we help homeowners, architects, and business proprietors build spaces that possess warmth, depth, and unmistakable presence.
              </p>

              <div className="pt-4 border-t border-white/10 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-stone-300">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-luxury-bronze" />
                  <span>Curated Texture Matching</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-luxury-bronze" />
                  <span>Architectural Proportioning</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-luxury-bronze" />
                  <span>Moisture-Resistant Wall Paneling</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-luxury-bronze" />
                  <span>Refined Edge & Trim Detailing</span>
                </div>
              </div>

              <div className="pt-4">
                <Button to="/services" variant="primary" showArrow>
                  Explore Our Solutions
                </Button>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          PILLARS OF OUR WORK: Design Discipline
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-luxury-black relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            number="02"
            tag="Core Principles"
            title="How We Approach Every Wall & Interior"
            subtitle="Our work is guided by four fundamental disciplines: texture, precision, spatial balance, and long-term durability."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            
            <div className="p-8 bg-luxury-graphite/40 border border-white/5 hover:border-luxury-bronze/30 transition-colors">
              <Eye className="w-8 h-8 text-luxury-bronze mb-5" />
              <h3 className="font-serif text-lg text-white font-medium mb-2">
                Visual Depth
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
                We select fluting profiles and embossed wallpaper textures that create subtle shadow play under natural daylight and evening illumination.
              </p>
            </div>

            <div className="p-8 bg-luxury-graphite/40 border border-white/5 hover:border-luxury-bronze/30 transition-colors">
              <Box className="w-8 h-8 text-luxury-bronze mb-5" />
              <h3 className="font-serif text-lg text-white font-medium mb-2">
                Material Integrity
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
                High-density polymer PVC and heavy-gauge wallpaper rolls engineered to resist humidity, scuffs, and daily wear without warping.
              </p>
            </div>

            <div className="p-8 bg-luxury-graphite/40 border border-white/5 hover:border-luxury-bronze/30 transition-colors">
              <Sliders className="w-8 h-8 text-luxury-bronze mb-5" />
              <h3 className="font-serif text-lg text-white font-medium mb-2">
                Custom Proportions
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
                Every wall is measured and evaluated individually to ensure vertical panel alignments and wallpaper pattern repeats sit in perfect harmony.
              </p>
            </div>

            <div className="p-8 bg-luxury-graphite/40 border border-white/5 hover:border-luxury-bronze/30 transition-colors">
              <MapPin className="w-8 h-8 text-luxury-bronze mb-5" />
              <h3 className="font-serif text-lg text-white font-medium mb-2">
                Lahore Presence
              </h3>
              <p className="text-xs sm:text-sm text-stone-400 leading-relaxed font-light">
                Conveniently located on Beadon Road in Garhi Shahu, serving residences, apartments, and corporate clients throughout Lahore.
              </p>
            </div>

          </div>

        </div>
      </section>

      {/* =========================================================================
          STUDIO LOCATION SPOTLIGHT
          ========================================================================= */}
      <section className="py-20 bg-luxury-obsidian border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-luxury-black border border-white/10 p-8 sm:p-12 lg:p-16 flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-xl">
              <span className="text-xs font-mono uppercase tracking-luxury text-luxury-bronze block mb-2">
                Visit or Inquire
              </span>
              <h2 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium">
                Chairman Interiors in Garhi Shahu
              </h2>
              <p className="mt-3 text-sm text-stone-400 leading-relaxed font-light">
                {businessInfo.address.full}
              </p>
              <p className="mt-2 text-xs text-stone-500">
                Direct phone: <a href={businessInfo.phoneTel} className="text-stone-300 hover:text-luxury-bronze font-mono">{businessInfo.phoneDisplay}</a>
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 w-full md:w-auto shrink-0">
              <a
                href={businessInfo.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-semibold uppercase tracking-widest bg-luxury-bronze text-luxury-black hover:bg-luxury-bronzeLight transition-colors"
              >
                <span>Directions on Map</span>
                <ArrowUpRight className="ml-1.5 w-4 h-4" />
              </a>

              <a
                href={businessInfo.phoneTel}
                className="inline-flex items-center justify-center px-6 py-3.5 text-xs font-medium uppercase tracking-widest text-white border border-white/20 hover:border-luxury-bronze hover:bg-white/5 transition-colors"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-luxury-bronze" />
                <span>Call Now</span>
              </a>
            </div>
          </div>
        </div>
      </section>

      <CTASection
        title="Ready to talk through your wall transformation?"
        subtitle="Contact Chairman Interiors for advice on PVC panel profiles, wallpaper roll selections, and complete room treatments."
        primaryBtnText="Speak With Our Team"
        primaryBtnTo="/contact"
      />
    </div>
  );
}

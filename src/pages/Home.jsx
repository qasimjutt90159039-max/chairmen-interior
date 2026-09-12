import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowDown, ArrowUpRight, CheckCircle2, Layers, Sparkles, Compass } from 'lucide-react';
import SEO from '../components/SEO';
import Button from '../components/Button';
import SectionHeading from '../components/SectionHeading';
import ServiceCard from '../components/ServiceCard';
import CTASection from '../components/CTASection';
import { servicesData } from '../data/servicesData';
import { businessInfo } from '../data/businessInfo';

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO
        title="Luxury PVC Panels, Wallpapers & Modern Interiors Lahore"
        description="Chairman Interiors transforms walls and living environments with premium PVC fluted panels, imported wallpapers, and bespoke interior design in Garhi Shahu, Lahore."
      />

      {/* =========================================================================
          HERO SECTION: Cinematic Full-Screen Architectural Layout
          ========================================================================= */}
      <section className="relative min-h-[92vh] flex items-center justify-center bg-luxury-black overflow-hidden">
        {/* Background Image with dramatic editorial overlays */}
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
            alt="Architectural modern interior with fluted wall paneling in Lahore"
            className="w-full h-full object-cover object-center scale-105 animate-fade-in"
          />
          {/* Subtle gradient vignette */}
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black/95 via-luxury-black/75 to-luxury-black/50" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-transparent to-luxury-black/40" />
        </div>

        {/* Hero Content Container */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            {/* Architectural Subtitle Badge */}
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 bg-luxury-black/70 border border-luxury-bronze/30 backdrop-blur-md mb-6">
              <span className="w-1.5 h-1.5 rounded-full bg-luxury-bronze animate-pulse" />
              <span className="text-[11px] tracking-luxury uppercase font-mono text-luxury-bronze font-medium">
                Lahore Interior & Wall Solutions
              </span>
            </div>

            {/* Main Editorial Heading */}
            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl font-medium tracking-tight text-white leading-[1.08] text-balance">
              REDEFINE<br />
              YOUR SPACE.
            </h1>

            {/* Supporting Text */}
            <p className="mt-6 text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl text-balance">
              Premium PVC panels, wallpapers and interior solutions designed to bring character, depth and modern elegance to your space.
            </p>

            {/* Hero CTAs */}
            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button
                to="/gallery"
                variant="primary"
                size="lg"
                showArrow
              >
                Explore Our Work
              </Button>

              <Button
                to="/contact"
                variant="outline"
                size="lg"
              >
                Talk to Chairman Interiors
              </Button>
            </div>

            {/* Location Pill */}
            <div className="mt-10 pt-6 border-t border-white/10 flex items-center gap-6 text-xs text-stone-400 font-light">
              <div>
                <span className="text-luxury-bronze font-mono uppercase text-[10px] tracking-wider block">Studio Location</span>
                <span>Garhi Shahu, Lahore</span>
              </div>
              <div className="h-6 w-[1px] bg-white/10" />
              <div>
                <span className="text-luxury-bronze font-mono uppercase text-[10px] tracking-wider block">Direct Line</span>
                <span className="font-mono">{businessInfo.phoneDisplay}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-stone-400 text-[10px] uppercase tracking-widest pointer-events-none">
          <span>Scroll</span>
          <ArrowDown className="w-3.5 h-3.5 text-luxury-bronze animate-bounce" />
        </div>
      </section>

      {/* =========================================================================
          INTRODUCTION: Oversized Typography & Natural Craft Narrative
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-luxury-obsidian relative border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Oversized Statement */}
            <div className="lg:col-span-6">
              <span className="text-xs font-mono tracking-luxury text-luxury-bronze uppercase block mb-3">
                [Philosophy]
              </span>
              <h2 className="font-serif text-3xl sm:text-5xl lg:text-5.5xl text-white font-medium leading-[1.15] text-balance">
                SPACES THAT SPEAK FOR THEMSELVES.
              </h2>
            </div>

            {/* Natural Business Narrative */}
            <div className="lg:col-span-6 flex flex-col justify-between space-y-6 text-stone-300 text-sm sm:text-base leading-relaxed font-light">
              <p>
                Walls are more than structural boundaries; they are the primary visual and tactile backdrop of everyday life. At <span className="text-white font-medium">Chairman Interiors</span>, we approach wall design with an architectural perspective, focusing on how texture, shadow, and proportion define the character of a room.
              </p>
              <p>
                Operating from <span className="text-white font-medium">Beadon Road in Garhi Shahu, Lahore</span>, we supply and install high-grade PVC wall panels, imported textured wallpapers, and bespoke interior treatments. Whether you want to anchor a modern drawing room with a vertical fluted TV backdrop or soften a private bedroom suite with natural woven wall coverings, we focus on deliberate craftsmanship and balanced aesthetics.
              </p>

              <div className="pt-4 grid grid-cols-2 gap-6 border-t border-white/10">
                <div>
                  <h3 className="text-xs uppercase tracking-luxury text-luxury-bronze font-mono mb-1">
                    Tactile Materials
                  </h3>
                  <p className="text-xs text-stone-400">
                    Durable PVC slats, stone textures, and woven wall coverings.
                  </p>
                </div>
                <div>
                  <h3 className="text-xs uppercase tracking-luxury text-luxury-bronze font-mono mb-1">
                    Precision Fit
                  </h3>
                  <p className="text-xs text-stone-400">
                    Clean alignments, concealed fixtures, and sharp seam joints.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          VISUAL STORY SECTION: Editorial Magazine-Style Asymmetrical Grid
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-luxury-black relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <SectionHeading
              number="01"
              tag="Editorial Showcase"
              title="Material and Visual Harmony"
              subtitle="Explore the interplay of linear PVC textures, curated wallpapers, and spatial proportions."
            />
            <Link
              to="/gallery"
              className="inline-flex items-center text-xs uppercase tracking-luxury text-luxury-bronze hover:text-white transition-colors font-semibold"
            >
              <span>View Complete Gallery</span>
              <ArrowUpRight className="ml-1.5 w-4 h-4" />
            </Link>
          </div>

          {/* Asymmetrical Magazine Layout */}
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-stretch">
            
            {/* Col 1: Large Featured Item - PVC Panels */}
            <div className="md:col-span-7 group relative bg-luxury-graphite overflow-hidden border border-white/10 flex flex-col justify-end min-h-[440px] md:min-h-[580px]">
              <img
                src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1400&q=80"
                alt="Architectural PVC wall panels with vertical fluting"
                loading="lazy"
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent" />
              
              <div className="relative z-10 p-8 sm:p-10">
                <span className="text-[10px] tracking-luxury uppercase font-mono text-luxury-bronze block mb-2">
                  Feature Medium • 01
                </span>
                <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium">
                  PVC Wall Panels
                </h3>
                <p className="mt-3 text-stone-300 text-xs sm:text-sm max-w-lg leading-relaxed font-light">
                  Architectural linear fluting and stone-look surfaces that introduce tangible depth, acoustic softness, and long-lasting moisture resilience.
                </p>
                <div className="mt-6">
                  <Link
                    to="/pvc-panels"
                    className="inline-flex items-center text-xs uppercase tracking-widest text-luxury-bronze group-hover:text-white transition-colors font-semibold"
                  >
                    <span>Explore PVC Panel Collections</span>
                    <ArrowUpRight className="ml-1.5 w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            </div>

            {/* Col 2: Stacked Asymmetrical Items - Wallpapers & Interior Design */}
            <div className="md:col-span-5 flex flex-col gap-8">
              
              {/* Wallpaper Card */}
              <div className="group relative bg-luxury-graphite overflow-hidden border border-white/10 flex flex-col justify-end min-h-[260px] md:min-h-[274px]">
                <img
                  src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1000&q=80"
                  alt="Imported textured wallpaper"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="relative z-10 p-6 sm:p-8">
                  <span className="text-[10px] tracking-luxury uppercase font-mono text-luxury-bronze block mb-1">
                    Feature Medium • 02
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                    Imported Wallpapers
                  </h3>
                  <p className="mt-1.5 text-stone-300 text-xs line-clamp-2 font-light">
                    Tactile woven linens, geometric patterns, and metallic patinas for bedrooms and lounges.
                  </p>
                  <Link
                    to="/wallpapers"
                    className="mt-4 inline-flex items-center text-xs uppercase tracking-widest text-luxury-bronze group-hover:text-white transition-colors"
                  >
                    <span>View Wallpapers</span>
                    <ArrowUpRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>

              {/* Interior Design Card */}
              <div className="group relative bg-luxury-graphite overflow-hidden border border-white/10 flex flex-col justify-end min-h-[260px] md:min-h-[274px]">
                <img
                  src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1000&q=80"
                  alt="Modern interior design and wall transformation"
                  loading="lazy"
                  className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent" />
                
                <div className="relative z-10 p-6 sm:p-8">
                  <span className="text-[10px] tracking-luxury uppercase font-mono text-luxury-bronze block mb-1">
                    Feature Medium • 03
                  </span>
                  <h3 className="font-serif text-xl sm:text-2xl text-white font-medium">
                    Interior Design
                  </h3>
                  <p className="mt-1.5 text-stone-300 text-xs line-clamp-2 font-light">
                    Harmonizing focal elevations, ambient lighting channels, and modern spatial layouts.
                  </p>
                  <Link
                    to="/interior-design"
                    className="mt-4 inline-flex items-center text-xs uppercase tracking-widest text-luxury-bronze group-hover:text-white transition-colors"
                  >
                    <span>Explore Interiors</span>
                    <ArrowUpRight className="ml-1 w-3 h-3" />
                  </Link>
                </div>
              </div>

            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES SECTION: 6 Core Solutions with Professional Details
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-luxury-obsidian relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <SectionHeading
              align="center"
              number="02"
              tag="Comprehensive Capabilities"
              title="Tailored Wall & Interior Services"
              subtitle="From individual TV backdrop panels to full residential wall renovations across Lahore."
            />
          </div>

          {/* Grid of 6 Services */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {servicesData.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>

          <div className="mt-16 text-center">
            <Button
              to="/services"
              variant="outline"
              size="lg"
              showArrow
            >
              Explore All Services & Installation Approach
            </Button>
          </div>

        </div>
      </section>

      {/* =========================================================================
          MATERIAL FOCUS: The Architectural Advantage of PVC & Curated Coverings
          ========================================================================= */}
      <section className="py-24 sm:py-28 bg-luxury-black relative border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-5">
              <span className="text-xs font-mono tracking-luxury text-luxury-bronze uppercase block mb-3">
                [Material Standards]
              </span>
              <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium leading-tight">
                Designed for Visual Longevity and Climate Endurance.
              </h2>
              <p className="mt-5 text-stone-400 text-sm leading-relaxed font-light">
                Interior surfaces in Lahore experience diverse seasonal humidity and daily environmental wear. Our PVC panel profiles and selected wall coverings are curated to ensure enduring aesthetic quality without demanding continuous refinishing.
              </p>

              <div className="mt-8 space-y-4">
                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-luxury-bronze shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                      Moisture & Damp Resistance
                    </h4>
                    <p className="text-xs text-stone-400 mt-1">
                      Engineered to protect walls against surface dampness and ambient seasonal humidity.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-luxury-bronze shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                      Integrated Fluting & Shadow Dynamics
                    </h4>
                    <p className="text-xs text-stone-400 mt-1">
                      Precision-spaced grooves create captivating vertical shadow play with subtle lighting.
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <CheckCircle2 className="w-5 h-5 text-luxury-bronze shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-xs uppercase tracking-wider font-semibold text-white">
                      Hassle-Free Maintenance
                    </h4>
                    <p className="text-xs text-stone-400 mt-1">
                      Wipe-clean surfaces that retain color saturation and finish year after year.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div className="lg:col-span-7">
              <div className="relative grid grid-cols-2 gap-4">
                <div className="aspect-[4/5] overflow-hidden bg-luxury-graphite border border-white/10">
                  <img
                    src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80"
                    alt="Tactile wall details in bedroom"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="aspect-[4/5] overflow-hidden bg-luxury-graphite border border-white/10 mt-8">
                  <img
                    src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80"
                    alt="Precision TV wall backdrop"
                    loading="lazy"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          GLOBAL REUSABLE CTA SECTION
          ========================================================================= */}
      <CTASection
        tag="CONSULT WITH OUR LAHORE STUDIO"
        title="Transform your blank walls into modern architectural centerpieces."
        subtitle="Contact Chairman Interiors at our Beadon Road studio in Garhi Shahu, Lahore. Discuss paneling profiles, wallpaper samples, and interior estimates."
        primaryBtnText="Get in Touch"
        primaryBtnTo="/contact"
      />
    </div>
  );
}

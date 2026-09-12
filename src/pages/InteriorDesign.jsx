import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Compass, Sparkles, Layers, Sliders } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { interiorTransformations } from '../data/interiorData';
import { businessInfo } from '../data/businessInfo';

export default function InteriorDesign() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO
        title="Interior Design Lahore | Architectural Wall Transformations"
        description="Chairman Interiors transforms blank walls into beautiful spaces across Lahore. Residential, living rooms, bedrooms, offices, and commercial interior design."
      />

      {/* =========================================================================
          HERO: "FROM BLANK WALLS TO BEAUTIFUL SPACES."
          ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center bg-luxury-black overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
            alt="Interior design transformation in modern residence"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-luxury uppercase text-luxury-bronze block mb-4">
              [Spatial & Wall Transformations]
            </span>

            <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl lg:text-7.5xl text-white font-medium leading-[1.08] tracking-tight">
              FROM BLANK WALLS<br />
              TO BEAUTIFUL SPACES.
            </h1>

            <p className="mt-8 text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Every memorable space begins with the intentional composition of its vertical planes. Discover how thoughtful wall treatments, lighting harmony, and refined materials redefine rooms across Lahore.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button to="/contact" variant="primary" size="lg" showArrow>
                Discuss Your Interior
              </Button>
              <Button to="/gallery" variant="outline" size="lg">
                View Project Gallery
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          ARCHITECTURAL DESIGN APPROACH
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-luxury-obsidian border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            <div className="lg:col-span-6">
              <SectionHeading
                number="01"
                tag="Architectural Philosophy"
                title="The Synergy of Proportion, Texture & Ambient Light"
                subtitle="True interior design is not merely decoration; it is the deliberate orchestration of visual weight and spatial rhythm."
              />
              <div className="mt-6 space-y-4 text-stone-300 text-sm leading-relaxed font-light">
                <p>
                  When wall surfaces are carefully integrated with lighting fixtures and architectural openings, a room immediately gains quiet confidence and cohesion.
                </p>
                <p>
                  At Chairman Interiors, we evaluate room proportions, sightlines from entryways, and daytime versus evening lighting conditions to propose finishes that feel balanced and tailored to your daily routine.
                </p>
              </div>
            </div>

            <div className="lg:col-span-6">
              <div className="grid grid-cols-2 gap-4">
                <div className="p-6 bg-luxury-black border border-white/10">
                  <span className="text-luxury-bronze font-mono text-sm block mb-2">01. Spatial Flow</span>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    Connecting adjacent living, dining, and corridor areas through consistent tactile motifs.
                  </p>
                </div>
                <div className="p-6 bg-luxury-black border border-white/10">
                  <span className="text-luxury-bronze font-mono text-sm block mb-2">02. Focal Anchors</span>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    Establishing unambiguous visual anchors for TV elevations and master bed headboards.
                  </p>
                </div>
                <div className="p-6 bg-luxury-black border border-white/10">
                  <span className="text-luxury-bronze font-mono text-sm block mb-2">03. Light Play</span>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    Maximizing natural daylight diffusion and casting soft grazing shadows with linear slats.
                  </p>
                </div>
                <div className="p-6 bg-luxury-black border border-white/10">
                  <span className="text-luxury-bronze font-mono text-sm block mb-2">04. Climate Longevity</span>
                  <p className="text-xs text-stone-400 font-light leading-relaxed">
                    Selecting materials suited to Lahore's atmospheric conditions that resist dampness and wear.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================================================
          TRANSFORMATION SECTIONS:
          Residential Spaces, Bedrooms, Living Rooms, Offices, Commercial Interiors
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionHeading
              align="center"
              number="02"
              tag="Spatial Applications"
              title="How Spaces Transform Through Wall Architecture"
              subtitle="Explore transformations across residential retreats, social lounges, and high-performance commercial spaces."
            />
          </div>

          <div className="space-y-28">
            {interiorTransformations.map((item, index) => {
              const isEven = index % 2 === 1;
              return (
                <article
                  key={item.id}
                  id={item.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center scroll-mt-28"
                >
                  <div className={`lg:col-span-7 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="aspect-[16/10] overflow-hidden bg-luxury-graphite border border-white/10 group shadow-2xl">
                      <img
                        src={item.image}
                        alt={`${item.title} interior design in Lahore`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className={`lg:col-span-5 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-mono text-xs text-luxury-bronze font-semibold">
                        {item.number}
                      </span>
                      <span className="text-stone-600">/</span>
                      <span className="text-[10px] uppercase font-mono tracking-luxury text-stone-400">
                        {item.scope}
                      </span>
                    </div>

                    <h3 className="font-serif text-3xl sm:text-4xl text-white font-medium">
                      {item.title}
                    </h3>

                    <blockquote className="mt-4 pl-4 border-l-2 border-luxury-bronze/50 italic text-stone-300 text-xs sm:text-sm font-serif">
                      "{item.philosophy}"
                    </blockquote>

                    <p className="mt-4 text-stone-400 text-xs sm:text-sm leading-relaxed font-light">
                      {item.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                      {item.highlights.map((highlight, hIdx) => (
                        <div key={hIdx} className="flex items-center gap-2.5 text-xs text-stone-300">
                          <Check className="w-3.5 h-3.5 text-luxury-bronze shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-xs uppercase tracking-luxury font-semibold text-luxury-bronze hover:text-white transition-colors"
                      >
                        <span>Request Design Consultation</span>
                        <ArrowUpRight className="ml-1.5 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </article>
              );
            })}
          </div>

        </div>
      </section>

      <CTASection
        tag="START YOUR INTERIOR TRANSFORMATION"
        title="Bring refined architectural character to your Lahore property."
        subtitle="Schedule an on-site evaluation or visit Chairman Interiors on Beadon Road, Garhi Shahu, Lahore."
        primaryBtnText="Consult an Interior Specialist"
        primaryBtnTo="/contact"
      />
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { Check, Shield, Droplets, Sparkles, ArrowUpRight } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { pvcSpaces, pvcBenefits } from '../data/pvcData';
import { businessInfo } from '../data/businessInfo';

export default function PvcPanels() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO
        title="PVC Wall Panels Lahore | Fluted & Architectural Cladding"
        description="Premium PVC wall panels in Lahore by Chairman Interiors. Fluted, linear, and textured wall paneling for living rooms, TV walls, bedrooms, and commercial spaces."
      />

      {/* =========================================================================
          HERO SECTION: "TEXTURE. DEPTH. CHARACTER."
          ========================================================================= */}
      <section className="relative min-h-[85vh] flex items-center bg-luxury-black overflow-hidden border-b border-white/10">
        <div className="absolute inset-0 z-0">
          <img
            src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=2000&q=80"
            alt="Fluted PVC wall panels in luxury interior"
            className="w-full h-full object-cover opacity-35"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-luxury-black via-luxury-black/90 to-transparent" />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-obsidian via-transparent to-black/60" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-luxury uppercase text-luxury-bronze block mb-4">
              [Architectural Wall Cladding]
            </span>

            <h1 className="font-serif text-5xl sm:text-7xl lg:text-8xl text-white font-medium leading-[1.02] tracking-tight">
              TEXTURE.<br />
              DEPTH.<br />
              CHARACTER.
            </h1>

            <p className="mt-8 text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed max-w-2xl">
              Architectural PVC panels designed to add tangible depth, linear rhythm, and lasting moisture protection to residential and commercial walls throughout Lahore.
            </p>

            <div className="mt-10 flex flex-col sm:flex-row items-stretch sm:items-center gap-4">
              <Button to="/contact" variant="primary" size="lg" showArrow>
                Inquire for Your Space
              </Button>
              <a
                href={businessInfo.phoneTel}
                className="inline-flex items-center justify-center px-8 py-4 text-xs font-medium uppercase tracking-widest text-stone-200 border border-white/20 hover:border-luxury-bronze transition-colors"
              >
                Call {businessInfo.phoneDisplay}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================================================
          BENEFITS & PRACTICAL APPEAL SECTION
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-luxury-obsidian border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeading
            number="01"
            tag="Material Science & Practical Appeal"
            title="The Architectural Value of Modern PVC Panels"
            subtitle="Engineered for high aesthetic impact with effortless maintenance, moisture resistance, and rapid clean mounting."
          />

          <div className="mt-14 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {pvcBenefits.map((benefit, idx) => (
              <div
                key={idx}
                className="p-8 bg-luxury-graphite/40 border border-white/5 hover:border-luxury-bronze/30 transition-all duration-300"
              >
                <div className="w-10 h-10 rounded bg-luxury-bronze/10 border border-luxury-bronze/20 flex items-center justify-center text-luxury-bronze font-mono text-sm mb-6">
                  0{idx + 1}
                </div>
                <h3 className="font-serif text-lg text-white font-medium mb-3">
                  {benefit.title}
                </h3>
                <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================================================
          VISUAL SECTIONS FOR ROOM TYPES (Editorial Presentation)
          Living Rooms, Bedrooms, TV Walls, Offices, Commercial Spaces, Feature Walls
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-luxury-black">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto mb-20">
            <SectionHeading
              align="center"
              number="02"
              tag="Application Spaces"
              title="Tailored Across Every Architectural Context"
              subtitle="See how fluted and linear PVC paneling adapts across living rooms, bedrooms, executive offices, and commercial environments."
            />
          </div>

          <div className="space-y-24">
            {pvcSpaces.map((space, index) => {
              const isReversed = index % 2 === 1;
              return (
                <div
                  key={space.id}
                  id={space.id}
                  className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center scroll-mt-28"
                >
                  <div className={`lg:col-span-7 ${isReversed ? 'lg:order-2' : 'lg:order-1'}`}>
                    <div className="aspect-[16/10] overflow-hidden bg-luxury-graphite border border-white/10 group shadow-2xl">
                      <img
                        src={space.image}
                        alt={`${space.title} with PVC panels`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                  </div>

                  <div className={`lg:col-span-5 flex flex-col justify-center ${isReversed ? 'lg:order-1' : 'lg:order-2'}`}>
                    <span className="text-[10px] uppercase font-mono tracking-luxury text-luxury-bronze block mb-2">
                      {space.tagline}
                    </span>
                    <h3 className="font-serif text-2xl sm:text-3xl lg:text-4xl text-white font-medium leading-snug">
                      {space.title}
                    </h3>
                    <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                      {space.description}
                    </p>

                    <div className="mt-6 pt-4 border-t border-white/10 space-y-2">
                      {space.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2 text-xs text-stone-400">
                          <div className="w-1.5 h-1.5 rounded-full bg-luxury-bronze shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>

                    <div className="mt-8">
                      <Link
                        to="/contact"
                        className="inline-flex items-center text-xs uppercase tracking-luxury font-semibold text-luxury-bronze hover:text-white transition-colors"
                      >
                        <span>Plan This Room With Us</span>
                        <ArrowUpRight className="ml-1.5 w-4 h-4" />
                      </Link>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

        </div>
      </section>

      <CTASection
        tag="PVC WALL PANELS IN LAHORE"
        title="Ready to add texture and depth to your walls?"
        subtitle="Visit Chairman Interiors on Beadon Road, Garhi Shahu, Lahore or call +92 323 8845888 to view physical panel finishes."
        primaryBtnText="Consult on PVC Panels"
        primaryBtnTo="/contact"
      />
    </div>
  );
}

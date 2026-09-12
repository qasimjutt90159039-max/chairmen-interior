import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight, Check, Compass, Sparkles, ShieldCheck, Ruler } from 'lucide-react';
import SEO from '../components/SEO';
import SectionHeading from '../components/SectionHeading';
import Button from '../components/Button';
import CTASection from '../components/CTASection';
import { servicesData } from '../data/servicesData';
import { businessInfo } from '../data/businessInfo';

export default function Services() {
  const steps = [
    {
      number: "01",
      title: "Consultation & Surface Review",
      description: "We review your wall dimensions, lighting sources, and functional requirements to determine the right aesthetic direction."
    },
    {
      number: "02",
      title: "Material & Profile Selection",
      description: "Select from our curated ranges of linear fluted PVC panels, stone textures, or designer imported wallpapers."
    },
    {
      number: "03",
      title: "Precision Surface Preparation",
      description: "Ensuring proper wall leveling, moisture inspection, and accurate alignment markings for flawless panel and seam joins."
    },
    {
      number: "04",
      title: "Refined Execution & Handover",
      description: "Clean installation with concealed fasteners, seamless trim integration, and final inspection of every edge."
    }
  ];

  return (
    <div className="flex flex-col w-full overflow-hidden">
      <SEO
        title="Interior & Wall Decoration Services Lahore"
        description="Explore Chairman Interiors' comprehensive services in Lahore: PVC Wall Panels, Decorative Solutions, Wallpapers, Interior Decoration, Interior Design, and Feature Walls."
      />

      {/* =========================================================================
          PAGE HERO: Architectural Services Overview
          ========================================================================= */}
      <section className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 bg-luxury-black border-b border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <span className="text-xs font-mono tracking-luxury uppercase text-luxury-bronze block mb-4">
              [Comprehensive Wall & Interior Craft]
            </span>
            <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl text-white font-medium leading-[1.1] text-balance">
              PRECISION WALL TREATMENTS & MODERN INTERIORS.
            </h1>
            <p className="mt-6 text-stone-300 text-sm sm:text-base md:text-lg font-light leading-relaxed">
              We specialize in the supply, design, and installation of premium PVC panels, luxury wallpapers, and integrated interior solutions across Lahore. Explore our six core service specializations below.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================================================
          SERVICES DETAILED BREAKDOWN (Alternating Editorial Rows)
          ========================================================================= */}
      <section className="py-20 sm:py-28 bg-luxury-obsidian">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 sm:space-y-32">
          {servicesData.map((service, index) => {
            const isEven = index % 2 === 1;
            return (
              <article
                key={service.id}
                id={service.id}
                className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center scroll-mt-28"
              >
                {/* Image Col */}
                <div className={`lg:col-span-6 ${isEven ? 'lg:order-2' : 'lg:order-1'}`}>
                  <div className="relative group overflow-hidden bg-luxury-graphite border border-white/10 shadow-2xl">
                    <div className="aspect-[16/11] overflow-hidden">
                      <img
                        src={service.image}
                        alt={`${service.title} in modern interior`}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                      />
                    </div>
                    {/* Corner Number Badge */}
                    <div className="absolute top-4 left-4 bg-luxury-black/85 backdrop-blur-md px-3.5 py-1.5 border border-white/10 text-luxury-bronze font-mono text-xs">
                      {service.number}
                    </div>
                  </div>
                </div>

                {/* Content Col */}
                <div className={`lg:col-span-6 flex flex-col justify-center ${isEven ? 'lg:order-1' : 'lg:order-2'}`}>
                  <span className="text-[10px] tracking-luxury uppercase font-mono text-luxury-bronze block mb-2">
                    {service.subtitle}
                  </span>
                  
                  <h2 className="font-serif text-3xl sm:text-4xl text-white font-medium leading-tight">
                    {service.title}
                  </h2>

                  <p className="mt-4 text-stone-300 text-sm sm:text-base leading-relaxed font-light">
                    {service.longDescription || service.description}
                  </p>

                  {/* Feature Bullets */}
                  {service.features && (
                    <div className="mt-6 space-y-2.5 pt-4 border-t border-white/10">
                      {service.features.map((feat, fIdx) => (
                        <div key={fIdx} className="flex items-center gap-2.5 text-xs sm:text-sm text-stone-400">
                          <Check className="w-4 h-4 text-luxury-bronze shrink-0" />
                          <span>{feat}</span>
                        </div>
                      ))}
                    </div>
                  )}

                  <div className="mt-8 flex items-center gap-4">
                    <Link
                      to={service.link || '/contact'}
                      className="inline-flex items-center text-xs font-semibold uppercase tracking-widest px-6 py-3.5 bg-luxury-bronze text-luxury-black hover:bg-luxury-bronzeLight transition-colors shadow-md group"
                    >
                      <span>Explore Dedicated Page</span>
                      <ArrowUpRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </Link>

                    <Link
                      to="/contact"
                      className="inline-flex items-center text-xs font-medium uppercase tracking-widest px-5 py-3.5 text-stone-300 hover:text-white border border-white/15 hover:border-luxury-bronze transition-colors"
                    >
                      Inquire
                    </Link>
                  </div>
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* =========================================================================
          OUR PROCESS / APPROACH SECTION
          ========================================================================= */}
      <section className="py-24 sm:py-32 bg-luxury-black border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <SectionHeading
            number="03"
            tag="Execution Discipline"
            title="The Chairman Interiors Workflow"
            subtitle="From the first measurement on site to the final edge trim, we adhere to meticulous standards."
          />

          <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {steps.map((step) => (
              <div
                key={step.number}
                className="p-8 bg-luxury-graphite/40 border border-white/5 hover:border-luxury-bronze/30 transition-colors flex flex-col justify-between"
              >
                <div>
                  <span className="font-mono text-2xl text-luxury-bronze font-light block mb-4">
                    {step.number}
                  </span>
                  <h3 className="font-serif text-lg text-white font-medium mb-2">
                    {step.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-400 font-light leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      <CTASection
        tag="START YOUR PROJECT"
        title="Let us discuss the best wall solutions for your space."
        subtitle="Call Chairman Interiors on +92 323 8845888 or visit our showroom on Beadon Road, Garhi Shahu, Lahore."
        primaryBtnText="Request Consultation"
        primaryBtnTo="/contact"
      />
    </div>
  );
}

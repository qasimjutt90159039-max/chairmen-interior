import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, ArrowRight, MessageSquare } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function CTASection({
  tag = "CONSULTATION & ESTIMATION",
  title = "Ready to elevate your walls and interior spaces?",
  subtitle = "Speak directly with our team in Garhi Shahu, Lahore to discuss PVC panels, designer wallpapers, and custom interior solutions for your home or executive workspace.",
  primaryBtnText = "Request Consultation",
  primaryBtnTo = "/contact"
}) {
  return (
    <section className="relative py-20 sm:py-24 bg-luxury-black overflow-hidden border-t border-b border-white/10">
      {/* Subtle architectural ambient background glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-luxury-bronze/5 rounded-full blur-3xl pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <span className="text-xs tracking-luxury uppercase font-mono text-luxury-bronze inline-block mb-3">
          [{tag}]
        </span>

        <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl text-luxury-offwhite font-medium max-w-3xl mx-auto leading-tight">
          {title}
        </h2>

        <p className="mt-5 text-sm sm:text-base text-stone-400 max-w-2xl mx-auto leading-relaxed">
          {subtitle}
        </p>

        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            to={primaryBtnTo}
            className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 text-xs font-semibold uppercase tracking-luxury bg-luxury-bronze text-luxury-black hover:bg-luxury-bronzeLight transition-all duration-300 shadow-lg shadow-luxury-bronze/15 group"
          >
            <span>{primaryBtnText}</span>
            <ArrowRight className="ml-2 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" />
          </Link>

          <a
            href={businessInfo.phoneTel}
            className="w-full sm:w-auto inline-flex items-center justify-center px-7 py-4 text-xs font-medium uppercase tracking-widest text-luxury-offwhite border border-white/20 hover:border-luxury-bronze hover:bg-white/5 transition-colors"
          >
            <Phone className="w-4 h-4 mr-2.5 text-luxury-bronze" />
            <span>Call {businessInfo.phoneDisplay}</span>
          </a>

          <a
            href={businessInfo.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center px-6 py-4 text-xs font-medium uppercase tracking-widest text-stone-400 hover:text-white border border-transparent hover:border-white/10 transition-colors"
          >
            <MessageSquare className="w-4 h-4 mr-2 text-luxury-bronze" />
            <span>Facebook Page</span>
          </a>
        </div>

        <div className="mt-8 pt-8 border-t border-white/5 flex items-center justify-center text-xs text-stone-400">
          <span>Beadon Rd, Victoria Park, Garhi Shahu, Lahore, Pakistan</span>
        </div>
      </div>
    </section>
  );
}

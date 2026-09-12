import React from 'react';
import { Link } from 'react-router-dom';
import { Phone, MapPin, ExternalLink } from 'lucide-react';
import { businessInfo } from '../data/businessInfo';

export default function Footer() {
  const currentYear = 2026;

  return (
    <footer className="bg-luxury-black text-stone-300 border-t border-white/10 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 pb-14 border-b border-white/10">
          
          {/* Brand Col */}
          <div className="flex flex-col space-y-4">
            <Link to="/" className="inline-block group">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.18em] text-white block group-hover:text-luxury-bronze transition-colors">
                CHAIRMAN
              </span>
              <span className="font-serif italic text-base text-luxury-bronze font-light block">
                INTERIORS
              </span>
            </Link>
            
            <p className="text-xs tracking-[0.22em] uppercase text-stone-400 font-medium">
              PVC PANELS • WALLPAPERS • INTERIORS
            </p>

            <p className="text-stone-400 text-xs sm:text-sm leading-relaxed pt-2">
              Transforming residential and executive spaces across Lahore with architectural PVC panels, imported wallpapers, and bespoke wall design.
            </p>

            <div className="pt-2">
              <a
                href={businessInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-luxury-bronze hover:text-luxury-bronzeLight transition-colors font-medium"
              >
                <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
                <span>Follow on Facebook</span>
                <ExternalLink className="w-3 h-3 ml-0.5" />
              </a>
            </div>
          </div>

          {/* Quick Links Col */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-luxury-bronze font-semibold mb-5">
              Quick Links
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/" className="text-stone-400 hover:text-white transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-stone-400 hover:text-white transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-stone-400 hover:text-white transition-colors">
                  Services
                </Link>
              </li>
              <li>
                <Link to="/gallery" className="text-stone-400 hover:text-white transition-colors">
                  Gallery
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-stone-400 hover:text-white transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Services Col */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-luxury-bronze font-semibold mb-5">
              Services
            </h4>
            <ul className="space-y-2.5 text-xs sm:text-sm">
              <li>
                <Link to="/pvc-panels" className="text-stone-400 hover:text-white transition-colors">
                  PVC Panels
                </Link>
              </li>
              <li>
                <Link to="/wallpapers" className="text-stone-400 hover:text-white transition-colors">
                  Wallpapers
                </Link>
              </li>
              <li>
                <Link to="/interior-design" className="text-stone-400 hover:text-white transition-colors">
                  Interior Design
                </Link>
              </li>
              <li>
                <Link to="/services" className="text-stone-400 hover:text-white transition-colors">
                  Interior Decoration
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Col */}
          <div>
            <h4 className="text-xs uppercase tracking-luxury text-luxury-bronze font-semibold mb-5">
              Contact
            </h4>
            <div className="space-y-3.5 text-xs sm:text-sm">
              <a
                href={businessInfo.phoneTel}
                className="flex items-start text-stone-300 hover:text-luxury-bronze transition-colors group"
              >
                <Phone className="w-4 h-4 mr-2.5 mt-0.5 text-luxury-bronze group-hover:scale-110 transition-transform" />
                <span className="font-mono text-sm">{businessInfo.phoneDisplay}</span>
              </a>

              <div className="flex items-start text-stone-400">
                <MapPin className="w-4 h-4 mr-2.5 mt-0.5 text-luxury-bronze shrink-0" />
                <address className="not-italic leading-relaxed">
                  {businessInfo.address.street},<br />
                  {businessInfo.address.area}, {businessInfo.address.city},<br />
                  {businessInfo.address.postalCode}, {businessInfo.address.country}
                </address>
              </div>

              <div className="pt-2">
                <a
                  href={businessInfo.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-xs tracking-wider text-luxury-bronze hover:underline"
                >
                  <span>Open in Google Maps</span>
                  <ExternalLink className="w-3 h-3 ml-1" />
                </a>
              </div>
            </div>
          </div>

        </div>

        {/* Bottom Copyright */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between text-xs text-stone-500 gap-4">
          <p>© {currentYear} Chairman Interiors. All rights reserved.</p>
          <p className="text-stone-400">
            Garhi Shahu • Lahore, Pakistan
          </p>
        </div>
      </div>
    </footer>
  );
}

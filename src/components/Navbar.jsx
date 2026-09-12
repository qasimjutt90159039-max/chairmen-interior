import React, { useState, useEffect } from 'react';
import { Link, NavLink, useLocation } from 'react-router-dom';
import { Menu, X, Phone, ArrowUpRight } from 'lucide-react';
import { navLinks } from '../data/navigation';
import { businessInfo } from '../data/businessInfo';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile drawer when route changes
  useEffect(() => {
    setIsOpen(false);
  }, [location.pathname]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  return (
    <>
      <header
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled
            ? 'bg-luxury-black/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-3'
            : 'bg-luxury-obsidian/75 backdrop-blur-sm border-b border-white/5 py-4 lg:py-5'
        }`}
      >
        <div className="max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 flex items-center justify-between gap-4">
          {/* Logo Branding */}
          <Link to="/" className="group flex flex-col items-start focus:outline-none shrink-0">
            <div className="flex items-center gap-2">
              <span className="font-cinzel text-xl sm:text-2xl font-bold tracking-[0.18em] text-luxury-offwhite group-hover:text-luxury-bronze transition-colors whitespace-nowrap">
                CHAIRMAN
              </span>
              <span className="font-serif italic text-base sm:text-lg text-luxury-bronze font-light whitespace-nowrap">
                Interiors
              </span>
            </div>
            <span className="text-[9px] sm:text-[10px] tracking-[0.24em] uppercase text-stone-400 font-medium mt-0.5 whitespace-nowrap">
              PVC Panels • Wallpapers • Interiors
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <nav className="hidden lg:flex items-center gap-3.5 xl:gap-5 2xl:gap-7 shrink-0">
            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-[11px] xl:text-xs tracking-wider uppercase font-medium transition-colors relative py-1.5 whitespace-nowrap hover:text-luxury-bronze ${
                    isActive
                      ? 'text-luxury-bronze font-semibold'
                      : 'text-stone-300'
                  }`
                }
              >
                {({ isActive }) => (
                  <>
                    <span>{link.label}</span>
                    {isActive && (
                      <span className="absolute bottom-0 left-0 w-full h-[1.5px] bg-luxury-bronze rounded-full animate-fade-in" />
                    )}
                  </>
                )}
              </NavLink>
            ))}
          </nav>

          {/* Desktop CTA & Direct Phone */}
          <div className="hidden lg:flex items-center gap-3 xl:gap-4 shrink-0">
            <a
              href={businessInfo.phoneTel}
              className="hidden xl:flex items-center text-xs tracking-wider text-stone-300 hover:text-luxury-bronze transition-colors py-2 px-3 rounded border border-white/10 hover:border-luxury-bronze/40 whitespace-nowrap shrink-0"
              title="Call Chairman Interiors Lahore"
            >
              <Phone className="w-3.5 h-3.5 mr-2 text-luxury-bronze shrink-0" />
              <span className="font-mono text-xs whitespace-nowrap">{businessInfo.phoneDisplay}</span>
            </a>

            <Link
              to="/contact"
              className="inline-flex items-center justify-center px-4 xl:px-5 py-2.5 text-xs font-semibold uppercase tracking-widest bg-luxury-bronze text-luxury-black hover:bg-luxury-bronzeLight transition-all duration-300 shadow-md hover:shadow-luxury-bronze/20 group whitespace-nowrap shrink-0"
            >
              <span>Let's Talk</span>
              <ArrowUpRight className="ml-1.5 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
            </Link>
          </div>

          {/* Mobile / Tablet Hamburger Button (< lg) */}
          <div className="flex items-center lg:hidden gap-3 shrink-0">
            <a
              href={businessInfo.phoneTel}
              className="p-2 text-luxury-bronze border border-white/10 rounded-sm"
              aria-label="Call Chairman Interiors"
            >
              <Phone className="w-4 h-4" />
            </a>

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 text-luxury-offwhite hover:text-luxury-bronze transition-colors focus:outline-none"
              aria-label={isOpen ? "Close menu" : "Open menu"}
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Fullscreen Drawer Overlay */}
      {isOpen && (
        <div className="fixed inset-0 z-40 bg-luxury-black/95 backdrop-blur-xl lg:hidden flex flex-col pt-24 px-6 pb-8 animate-fade-in overflow-y-auto">
          <div className="flex flex-col space-y-4 max-w-md mx-auto w-full">
            <div className="border-b border-white/10 pb-3 mb-2">
              <span className="text-[10px] tracking-luxury uppercase text-luxury-bronze font-mono">
                Navigation Menu
              </span>
            </div>

            {navLinks.map((link) => (
              <NavLink
                key={link.path}
                to={link.path}
                className={({ isActive }) =>
                  `text-lg font-serif tracking-wide transition-colors py-2 flex items-center justify-between border-b border-white/5 ${
                    isActive
                      ? 'text-luxury-bronze font-medium'
                      : 'text-stone-300 hover:text-white'
                  }`
                }
              >
                <span>{link.label}</span>
                <span className="text-xs text-stone-500 font-sans tracking-widest uppercase">Explore</span>
              </NavLink>
            ))}

            <div className="pt-6 mt-4 flex flex-col gap-3">
              <Link
                to="/contact"
                className="w-full text-center py-3.5 bg-luxury-bronze text-luxury-black text-xs font-semibold uppercase tracking-widest shadow-md"
              >
                Let's Talk
              </Link>
              <a
                href={businessInfo.phoneTel}
                className="w-full flex items-center justify-center py-3.5 border border-white/20 text-stone-200 text-xs font-medium uppercase tracking-widest hover:border-luxury-bronze"
              >
                <Phone className="w-3.5 h-3.5 mr-2 text-luxury-bronze" />
                <span>Call {businessInfo.phoneDisplay}</span>
              </a>
            </div>

            <div className="pt-6 border-t border-white/10 text-stone-400 text-xs flex flex-col gap-1">
              <span className="text-stone-200 font-medium">Chairman Interiors</span>
              <span>{businessInfo.address.street}, {businessInfo.address.area}</span>
              <span>{businessInfo.address.city}, {businessInfo.address.country}</span>
              <a
                href={businessInfo.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-2 text-luxury-bronze hover:underline text-xs"
              >
                Visit our Facebook Page →
              </a>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

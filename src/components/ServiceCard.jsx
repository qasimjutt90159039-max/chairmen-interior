import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function ServiceCard({ service, index }) {
  return (
    <article className="group relative bg-luxury-graphite/40 border border-white/5 hover:border-luxury-bronze/40 transition-all duration-500 overflow-hidden flex flex-col justify-between">
      {/* Image Container with subtle zoom */}
      <div className="relative aspect-[16/10] overflow-hidden bg-luxury-obsidian">
        <img
          src={service.image}
          alt={service.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-luxury-black via-transparent to-transparent opacity-60" />
        
        {/* Service Number Badge */}
        <div className="absolute top-4 left-4 bg-luxury-black/80 backdrop-blur-md px-3 py-1 border border-white/10 text-luxury-bronze font-mono text-xs tracking-wider">
          {service.number}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-6 sm:p-8 flex flex-col flex-grow justify-between">
        <div>
          <span className="text-[10px] tracking-luxury uppercase text-luxury-bronze block mb-2 font-mono">
            {service.subtitle}
          </span>
          <h3 className="font-serif text-xl sm:text-2xl text-white font-medium group-hover:text-luxury-bronzeLight transition-colors">
            {service.title}
          </h3>
          <p className="mt-3 text-stone-400 text-xs sm:text-sm leading-relaxed line-clamp-3">
            {service.description}
          </p>
        </div>

        {/* Explore Button */}
        <div className="mt-6 pt-5 border-t border-white/10 flex items-center justify-between">
          <Link
            to={service.link || '/services'}
            className="inline-flex items-center text-xs tracking-widest uppercase font-semibold text-luxury-bronze group-hover:text-white transition-colors"
          >
            <span>Explore Solution</span>
            <ArrowUpRight className="ml-1.5 w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
          </Link>
        </div>
      </div>
    </article>
  );
}

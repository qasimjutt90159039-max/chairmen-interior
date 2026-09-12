import React from 'react';

export default function SectionHeading({
  tag,
  title,
  subtitle,
  number,
  align = 'left',
  className = '',
  light = false
}) {
  const alignClasses = {
    left: 'text-left items-start',
    center: 'text-center items-center mx-auto',
    right: 'text-right items-end ml-auto'
  };

  return (
    <div className={`flex flex-col max-w-3xl ${alignClasses[align] || alignClasses.left} ${className}`}>
      <div className="flex items-center gap-3 mb-3">
        {number && (
          <span className="text-[11px] font-mono tracking-widest text-luxury-bronze">
            [{number}]
          </span>
        )}
        {tag && (
          <span className="text-[11px] tracking-luxury uppercase font-semibold text-luxury-bronze">
            {tag}
          </span>
        )}
      </div>

      <h2 className={`font-serif text-3xl sm:text-4xl md:text-5xl lg:text-5.5xl leading-[1.15] tracking-tight font-medium ${
        light ? 'text-luxury-charcoal' : 'text-luxury-offwhite'
      }`}>
        {title}
      </h2>

      {subtitle && (
        <p className={`mt-4 text-sm sm:text-base leading-relaxed font-light ${
          light ? 'text-luxury-muted' : 'text-stone-400'
        } max-w-2xl`}>
          {subtitle}
        </p>
      )}
    </div>
  );
}

import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';

export default function Button({
  children,
  to,
  href,
  onClick,
  variant = 'primary',
  size = 'md',
  showArrow = false,
  className = '',
  target,
  rel,
  disabled = false,
  type = 'button'
}) {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 tracking-wider text-xs uppercase focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed group";

  const sizeStyles = {
    sm: "px-4 py-2.5 text-[11px]",
    md: "px-6 py-3.5 text-xs",
    lg: "px-8 py-4 text-xs tracking-luxury"
  };

  const variants = {
    primary: "bg-luxury-bronze text-luxury-black hover:bg-luxury-bronzeLight font-semibold shadow-md hover:shadow-luxury-bronze/20 active:scale-[0.99]",
    secondary: "bg-luxury-graphite text-luxury-offwhite hover:bg-luxury-charcoal border border-white/10 hover:border-luxury-bronze/40",
    outline: "border border-luxury-bronze/40 text-luxury-offwhite hover:border-luxury-bronze hover:bg-luxury-bronze/10",
    dark: "bg-luxury-obsidian text-luxury-offwhite border border-white/10 hover:border-white/30",
    text: "text-luxury-bronze hover:text-luxury-bronzeLight p-0 hover:underline underline-offset-8"
  };

  const combinedClasses = `${baseStyles} ${sizeStyles[size] || sizeStyles.md} ${variants[variant] || variants.primary} ${className}`;

  const arrow = showArrow && (
    <ArrowUpRight className="ml-2 w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
  );

  if (to) {
    return (
      <Link to={to} className={combinedClasses}>
        <span>{children}</span>
        {arrow}
      </Link>
    );
  }

  if (href) {
    return (
      <a href={href} className={combinedClasses} target={target} rel={rel}>
        <span>{children}</span>
        {arrow}
      </a>
    );
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={combinedClasses}>
      <span>{children}</span>
      {arrow}
    </button>
  );
}

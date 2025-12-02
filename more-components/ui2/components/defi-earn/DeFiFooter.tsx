import React from 'react';
import { Diamond, Globe, Twitter, Github, Mail } from 'lucide-react';
import { DeFiFooterProps } from './types';

/**
 * DeFiFooter - Footer with brand info, social links, and navigation
 * 
 * Features:
 * - Logo and description
 * - Social media links
 * - Navigation columns
 * - Copyright and tagline
 * - Glass morphism social buttons
 * - Responsive grid layout
 */
export const DeFiFooter: React.FC<DeFiFooterProps> = ({
  logo,
  description,
  socialLinks,
  columns,
  copyright,
  tagline
}) => {
  const getSocialIcon = (platform: string) => {
    const icons: Record<string, React.ComponentType<{ className?: string }>> = {
      Globe,
      Twitter,
      Github,
      Mail
    };
    return icons[platform] || Globe;
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-12 md:mt-16 border-t border-white/5 pt-8">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
        {/* Brand section */}
        <div className="md:col-span-2">
          <a href="#" className="flex items-center gap-2">
            <div className="flex h-8 w-8 ring-1 ring-black/5 text-white bg-neutral-900 rounded-full shadow-sm items-center justify-center">
              <Diamond className="h-4 w-4" aria-hidden="true" />
            </div>
            <span className="text-[17px] uppercase font-semibold tracking-tighter font-sans">
              {logo.text}
            </span>
          </a>
          <p className="mt-3 text-sm text-neutral-400 max-w-md">{description}</p>
          
          {/* Social links */}
          <div className="mt-4 flex items-center gap-2">
            {socialLinks.map((link, index) => {
              const IconComponent = getSocialIcon(link.platform);
              return (
                <a
                  key={index}
                  href={link.href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg bg-white/5 ring-1 ring-white/10 text-neutral-300 hover:text-white hover:bg-white/[0.08] transition"
                  aria-label={`Visit our ${link.platform}`}
                >
                  <IconComponent className="h-4 w-4" aria-hidden="true" />
                </a>
              );
            })}
          </div>
        </div>

        {/* Navigation columns */}
        {columns.map((column, colIndex) => (
          <div key={colIndex}>
            <p className="text-sm font-semibold text-white">{column.title}</p>
            <ul className="mt-3 space-y-2 text-sm text-neutral-300">
              {column.links.map((link, linkIndex) => (
                <li key={linkIndex}>
                  <a href={link.href} className="hover:text-white transition">
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      {/* Bottom bar */}
      <div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-white/5 pt-6">
        <p className="text-xs text-neutral-500">
          {copyright || `© ${currentYear} ${logo.text}. All rights reserved.`}
        </p>
        {tagline && <p className="text-xs text-neutral-500">{tagline}</p>}
      </div>
    </footer>
  );
};

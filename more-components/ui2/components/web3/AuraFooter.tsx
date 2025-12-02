/**
 * Aura Footer Component
 * Footer section with logo, description, and social links
 * @module AuraFooter
 */

'use client';

import React from 'react';
import { Twitter, Github, MessageCircle } from 'lucide-react';
import type { AuraFooterProps } from '../types/web3.types';

export const AuraFooter: React.FC<AuraFooterProps> = ({
  logo = { text: 'Aura' },
  description = 'Professional blockchain infrastructure for the next generation of decentralized networks.',
  socialLinks,
  copyright = '© 2024 Aura Infrastructure. All rights reserved.'
}) => {
  const iconMap: Record<string, React.ReactNode> = {
    twitter: <Twitter className="w-5 h-5" />,
    github: <Github className="w-5 h-5" />,
    discord: <MessageCircle className="w-5 h-5" />,
  };

  return (
    <footer className="py-16 border-t border-white/10">
      <div className="mx-auto max-w-7xl px-4 md:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-8">
          {/* Logo and Description */}
          <div className="text-center md:text-left max-w-md">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <div className="relative">
                <span className="block h-3 w-3 rounded-full bg-gradient-to-r from-orange-400 to-orange-600 shadow-lg"></span>
                <span className="absolute inset-0 block h-3 w-3 rounded-full bg-orange-500 opacity-75 animate-ping"></span>
              </div>
              <span className="text-xl font-semibold tracking-tight font-geist">{logo.text}</span>
            </div>
            {description && (
              <p className="text-sm text-gray-400 font-geist">{description}</p>
            )}
          </div>

          {/* Social Links */}
          <div className="flex items-center gap-4">
            {socialLinks.map((link, index) => (
              <a
                key={index}
                href={link.href}
                target="_blank"
                rel="noopener noreferrer"
                className="p-3 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all duration-200"
                aria-label={link.name}
              >
                {iconMap[link.icon.toLowerCase()] || iconMap.twitter}
              </a>
            ))}
          </div>
        </div>

        {/* Copyright */}
        <div className="mt-12 pt-8 border-t border-white/10 text-center">
          <p className="text-sm text-gray-500 font-geist">{copyright}</p>
        </div>
      </div>
    </footer>
  );
};

AuraFooter.displayName = 'AuraFooter';

export default AuraFooter;

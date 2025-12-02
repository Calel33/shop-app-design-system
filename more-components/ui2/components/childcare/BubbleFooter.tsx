/**
 * BubbleFooter Component
 * Footer with links and social media
 * @module childcare/BubbleFooter
 */

import { Mail, Phone, Instagram, Facebook, Twitter } from 'lucide-react';
import type { BubbleFooterProps, SocialLink } from '../types/childcare.types';

const defaultSections = [
  {
    title: 'Center',
    links: [
      { label: 'Programs', href: '#programs' },
      { label: 'Our Approach', href: '#about' },
      { label: 'Parent Stories', href: '#stories' },
      { label: 'Book a Visit', href: '#visit' },
    ],
  },
  {
    title: 'Resources',
    links: [
      { label: 'Family Handbook', href: '#' },
      { label: 'Health & Safety', href: '#' },
      { label: 'Tuition & Schedule', href: '#' },
      { label: 'Careers', href: '#' },
    ],
  },
];

const defaultLegalLinks = [
  { label: 'Privacy', href: '#' },
  { label: 'Terms', href: '#' },
  { label: 'Accessibility', href: '#' },
];

const SocialIcon = ({ platform }: { platform: SocialLink['platform'] }) => {
  switch (platform) {
    case 'instagram':
      return <Instagram className="h-4 w-4" />;
    case 'facebook':
      return <Facebook className="h-4 w-4" />;
    case 'twitter':
      return <Twitter className="h-4 w-4" />;
    default:
      return null;
  }
};

export const BubbleFooter = ({
  logoUrl,
  logoAlt = 'Bubble Childcare',
  tagline = 'Nurturing care and playful learning for bright beginnings.',
  email = 'hello@bubble.co',
  phone = '(555) 214‑0199',
  sections = defaultSections,
  socialLinks = [
    { platform: 'instagram', href: '#', ariaLabel: 'Instagram' },
    { platform: 'facebook', href: '#', ariaLabel: 'Facebook' },
    { platform: 'twitter', href: '#', ariaLabel: 'Twitter' },
  ],
  copyrightText,
  legalLinks = defaultLegalLinks,
  className = '',
}: BubbleFooterProps) => {
  const currentYear = new Date().getFullYear();
  const copyright = copyrightText || `© ${currentYear} Bubble. All rights reserved.`;

  return (
    <footer id="contact" className={`border-black/10 border-t pt-10 pb-10 ${className}`}>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          <div>
            <a
              href="#"
              className="inline-flex items-center justify-center bg-center mix-blend-multiply w-[140px] h-[40px] bg-cover rounded invert"
              style={{ backgroundImage: `url(${logoUrl})` }}
              aria-label={logoAlt}
            />
            <p className="mt-3 text-sm text-black/70 font-nunito">
              {tagline}
            </p>
            <div className="mt-4 flex items-center gap-3 text-sm text-black/70 font-nunito">
              <Mail className="h-4 w-4" />
              {email}
            </div>
            <div className="mt-2 flex items-center gap-3 text-sm text-black/70 font-nunito">
              <Phone className="h-4 w-4" />
              {phone}
            </div>
          </div>

          {sections.map((section, index) => (
            <div key={index}>
              <h4 className="text-sm font-semibold tracking-tight font-nunito">
                {section.title}
              </h4>
              <ul className="mt-3 space-y-2 text-sm text-black/70">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a className="hover:text-black font-nunito" href={link.href}>
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}

          <div>
            <h4 className="text-sm font-semibold tracking-tight font-nunito">Follow</h4>
            <div className="mt-3 flex gap-2">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-lg border transition border-black/10 hover:bg-black/5"
                  href={social.href}
                  aria-label={social.ariaLabel}
                >
                  <SocialIcon platform={social.platform} />
                </a>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center justify-between gap-4 border-t pt-6 text-xs sm:flex-row border-black/10 text-black/60">
          <p className="font-nunito">{copyright}</p>
          <div className="flex items-center gap-4">
            {legalLinks.map((link, index) => (
              <a key={index} className="hover:text-black font-nunito" href={link.href}>
                {link.label}
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

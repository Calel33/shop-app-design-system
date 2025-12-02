// SkincareFooter.tsx - Multi-column footer with newsletter signup
import { useState } from 'react';
import type { SkincareFooterProps } from '../types/skincare.types';

export function SkincareFooter({
  newsletter,
  sections,
  socialLinks,
  paymentIcons,
  copyright,
  className = '',
}: SkincareFooterProps) {
  const [email, setEmail] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    newsletter.onSubmit?.(email);
    setEmail('');
  };

  return (
    <footer className={`bg-neutral-900 dark:bg-black text-white border-t border-neutral-800 dark:border-neutral-900 transition-colors duration-300 ${className}`}>
      <div className="max-w-7xl mx-auto px-6 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
          {/* Newsletter */}
          <div className="lg:col-span-1">
            <h3 className="text-lg font-semibold mb-2">{newsletter.title}</h3>
            <p className="text-sm text-neutral-400 mb-4">{newsletter.subtitle}</p>
            <form onSubmit={handleSubmit} className="flex gap-2">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder={newsletter.placeholder}
                className="flex-1 px-4 py-2 rounded-lg bg-neutral-800 dark:bg-neutral-900 border border-neutral-700 focus:outline-none focus:ring-2 focus:ring-white text-sm"
                required
              />
              <button
                type="submit"
                className="px-4 py-2 rounded-lg bg-white text-neutral-900 font-medium hover:bg-neutral-100 transition text-sm"
              >
                Subscribe
              </button>
            </form>
          </div>

          {/* Footer sections */}
          {sections.map((section) => (
            <div key={section.title}>
              <h3 className="text-lg font-semibold mb-4">{section.title}</h3>
              <ul className="space-y-2">
                {section.links.map((link) => (
                  <li key={link.label}>
                    <a
                      href={link.href}
                      onClick={link.onClick}
                      className="text-sm text-neutral-400 hover:text-white transition"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-12 pt-8 border-t border-neutral-800 dark:border-neutral-900 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-neutral-400">{copyright}</p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social) => (
              <a
                key={social.platform}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-neutral-400 hover:text-white transition"
                aria-label={social.platform}
              >
                {social.icon}
              </a>
            ))}
          </div>
          
          <div className="flex items-center gap-2">
            {paymentIcons.map((icon, index) => (
              <div key={index} className="text-neutral-400">
                {icon}
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}

import { BadgeCheck, ArrowUp, Github, Twitter, Linkedin } from 'lucide-react';
import { FooterProps } from './types';
import { ContactForm } from './ContactForm';
import { NewsletterForm } from './NewsletterForm';
import { useScrollToTop } from '../../hooks/useScrollToTop';

export const Footer = ({
  companyName,
  companyLogo,
  tagline,
  contactInfo,
  navigationSections,
  socialLinks,
  legalLinks,
  onContactSubmit,
  onSubscribe,
  showDecorativeGlows = true,
  className = '',
}: FooterProps) => {
  const { scrollToTop } = useScrollToTop();
  const currentYear = new Date().getFullYear();

  const getSocialIcon = (platform: string) => {
    const iconMap = {
      github: Github,
      twitter: Twitter,
      linkedin: Linkedin,
      facebook: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
        </svg>
      ),
      instagram: () => (
        <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
          <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
        </svg>
      ),
    };

    const IconComponent = iconMap[platform as keyof typeof iconMap];
    return IconComponent ? <IconComponent className="w-4 h-4" /> : null;
  };

  return (
    <footer className={`w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pt-12 pr-4 pb-10 pl-4 ${className}`}>
      <div 
        className="relative overflow-hidden rounded-3xl"
        style={{ backgroundColor: 'var(--gray-900)' }}
      >
        <div className="relative z-10 sm:p-12 md:p-16 pt-12 pr-8 pb-8 pl-8">
          {/* Header Section with Contact Form */}
          <div 
            className="pb-12 border-b"
            style={{ borderColor: 'rgba(255, 255, 255, 0.1)' }}
          >
            <div className="flex items-center gap-2 mb-4">
              {companyLogo || <BadgeCheck className="w-5 h-5" style={{ color: 'rgba(255, 255, 255, 0.8)' }} />}
              <h3 
                className="text-2xl font-semibold tracking-tight"
                style={{ color: 'white' }}
              >
                {companyName}
              </h3>
            </div>
            <p 
              className="max-w-3xl mb-6"
              style={{ color: 'rgba(255, 255, 255, 0.7)' }}
            >
              {tagline}
            </p>

            <ContactForm
              contactInfo={contactInfo}
              onSubmit={onContactSubmit}
            />
          </div>

          {/* Navigation Section */}
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 pt-12">
            {navigationSections.map((section, index) => (
              <div key={index}>
                <h4 
                  className="text-xs uppercase tracking-[0.2em]"
                  style={{ color: 'rgba(255, 255, 255, 0.8)' }}
                >
                  {section.title}
                </h4>
                <ul className="mt-3 space-y-2 text-sm">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        target={link.external ? '_blank' : undefined}
                        rel={link.external ? 'noopener noreferrer' : undefined}
                        className="inline-flex items-center gap-2 transition-colors"
                        style={{ 
                          color: 'var(--gray-300)'
                        }}
                        onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                        onMouseOut={(e) => e.currentTarget.style.color = 'var(--gray-300)'}
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}

            {/* Newsletter Section */}
            <div>
              <h4 
                className="uppercase text-xs tracking-[0.2em]"
                style={{ color: 'rgba(255, 255, 255, 0.8)' }}
              >
                Stay in touch
              </h4>
              <NewsletterForm onSubscribe={onSubscribe} />

              {/* Social Links */}
              <div className="mt-4 flex items-center gap-3">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    aria-label={social.ariaLabel}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex h-9 w-9 items-center justify-center rounded-full transition-colors ring-1 ring-white/10"
                    style={{
                      backgroundColor: 'rgba(255, 255, 255, 0.05)',
                      color: 'rgba(255, 255, 255, 0.8)'
                    }}
                    onMouseOver={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.1)';
                      e.currentTarget.style.color = 'white';
                    }}
                    onMouseOut={(e) => {
                      e.currentTarget.style.backgroundColor = 'rgba(255, 255, 255, 0.05)';
                      e.currentTarget.style.color = 'rgba(255, 255, 255, 0.8)';
                    }}
                  >
                    {getSocialIcon(social.platform)}
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* Footer Bar */}
          <div 
            className="mt-10 pt-6 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3"
            style={{ borderTop: '1px solid rgba(255, 255, 255, 0.1)' }}
          >
            <p 
              className="text-sm"
              style={{ color: 'rgba(255, 255, 255, 0.6)' }}
            >
              © {currentYear} {companyName}. All rights reserved.
            </p>
            <div className="flex items-center gap-4 text-sm">
              {legalLinks.map((link, index) => (
                <div key={index} className="flex items-center gap-4">
                  <a 
                    href={link.href} 
                    className="transition-colors"
                    style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                    onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                    onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
                  >
                    {link.label}
                  </a>
                  {index < legalLinks.length - 1 && (
                    <span className="hidden sm:block" style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
                  )}
                </div>
              ))}
              <span className="hidden sm:block" style={{ color: 'rgba(255, 255, 255, 0.2)' }}>•</span>
              <button
                onClick={() => scrollToTop()}
                className="inline-flex items-center gap-1 transition-colors"
                style={{ color: 'rgba(255, 255, 255, 0.6)' }}
                onMouseOver={(e) => e.currentTarget.style.color = 'white'}
                onMouseOut={(e) => e.currentTarget.style.color = 'rgba(255, 255, 255, 0.6)'}
              >
                <ArrowUp className="w-4 h-4" />
                Back to top
              </button>
            </div>
          </div>
        </div>

        {/* Decorative glows */}
        {showDecorativeGlows && (
          <>
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -top-16 -right-10 h-72 w-72 rounded-full blur-3xl"
              style={{ backgroundColor: 'rgba(251, 191, 36, 0.1)' }}
            />
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -bottom-20 -left-10 h-80 w-80 rounded-full blur-3xl"
              style={{ backgroundColor: 'rgba(99, 102, 241, 0.1)' }}
            />
          </>
        )}
      </div>
    </footer>
  );
};

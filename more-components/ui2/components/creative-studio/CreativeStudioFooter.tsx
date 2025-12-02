import React from 'react';
import { Zap } from 'lucide-react';
import { CreativeStudioFooterProps } from './types';

export const CreativeStudioFooter: React.FC<CreativeStudioFooterProps> = ({
  brandName = "Lumi",
  description = "Creative studio bringing ideas to life through innovative design and strategic thinking.",
  services = {
    title: "Services",
    links: [
      { label: "Brand Identity", href: "#" },
      { label: "UI/UX Design", href: "#" },
      { label: "Art Direction", href: "#" },
      { label: "Motion Graphics", href: "#" }
    ]
  },
  contact = {
    title: "Contact",
    email: "hello@lumi.studio",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA"
  },
  socialLinks = [],
  className = ''
}) => {
  return (
    <footer className={`bg-gradient-to-br from-card to-background ring-t ring-border pt-12 pb-12 scroll-element fade-in-up ${className}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-xl font-semibold tracking-tight text-foreground">
                {brandName}
              </span>
              <span className="inline-flex h-5 w-5 items-center justify-center rounded-full bg-accent/10">
                <Zap className="w-3.5 h-3.5 text-accent" />
              </span>
            </div>
            <p className="text-muted-foreground mb-4">{description}</p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social, index) => {
                const IconComponent = social.icon;
                return (
                  <a
                    key={index}
                    href={social.href}
                    className="text-muted-foreground hover:text-accent transition-colors"
                    aria-label={social.platform}
                  >
                    <IconComponent className="w-5 h-5" />
                  </a>
                );
              })}
            </div>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              {services.title}
            </h4>
            <ul className="space-y-2">
              {services.links.map((link, index) => (
                <li key={index}>
                  <a
                    href={link.href}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-sm font-semibold text-foreground mb-4">
              {contact.title}
            </h4>
            <ul className="space-y-2">
              {contact.email && (
                <li>
                  <a
                    href={`mailto:${contact.email}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {contact.email}
                  </a>
                </li>
              )}
              {contact.phone && (
                <li>
                  <a
                    href={`tel:${contact.phone}`}
                    className="text-sm text-muted-foreground hover:text-accent transition-colors"
                  >
                    {contact.phone}
                  </a>
                </li>
              )}
              {contact.location && (
                <li>
                  <span className="text-sm text-muted-foreground">
                    {contact.location}
                  </span>
                </li>
              )}
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-border flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 {brandName} Creative Studio. All rights reserved.
          </p>
          <div className="flex items-center gap-6 mt-4 sm:mt-0">
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Privacy Policy
            </a>
            <a
              href="#"
              className="text-sm text-muted-foreground hover:text-accent transition-colors"
            >
              Terms of Service
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default CreativeStudioFooter;
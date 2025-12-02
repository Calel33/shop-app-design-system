/**
 * ContactFooter Component for KYRO Portfolio
 * Glass-effect footer with email and messaging CTAs
 */

import React from 'react';
import { Mail, MessageSquare } from 'lucide-react';
import type { ContactFooterProps } from '../../types/kyro-portfolio.types';

export const ContactFooter: React.FC<ContactFooterProps> = ({
  status,
  title,
  email,
  className = '',
}) => {
  const currentYear = new Date().getFullYear();

  return (
    <footer id="contact" className={`max-w-7xl mx-auto px-4 sm:px-6 mt-16 sm:mt-24 mb-10 ${className}`}>
      <div className="rounded-2xl p-6 sm:p-8 ring-1 ring-white/10 bg-white/5">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
          <div>
            <p className="text-sm text-neutral-400">{status}</p>
            <h3 className="mt-1 text-xl sm:text-2xl tracking-tight font-semibold text-white">
              {title}
            </h3>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${email}`}
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 transition-colors"
              aria-label={`Email ${email}`}
            >
              <Mail className="w-4 h-4" />
              <span>{email}</span>
            </a>
            <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-emerald-500/90 hover:bg-emerald-500 transition-colors">
              <MessageSquare className="w-4 h-4" />
              <span>Message</span>
            </button>
          </div>
        </div>
      </div>
      <p className="mt-6 text-xs text-neutral-500">© {currentYear} Kyro Studio</p>
    </footer>
  );
};

export default ContactFooter;

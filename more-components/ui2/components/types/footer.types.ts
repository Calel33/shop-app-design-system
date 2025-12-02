/**
 * Type definitions for Footer components
 * @module footer.types
 */

import { ReactNode } from 'react';

export interface FooterProps {
  companyName: string;
  companyLogo?: ReactNode;
  tagline: string;
  contactInfo: ContactInfo;
  navigationSections: NavigationSection[];
  socialLinks: SocialLink[];
  legalLinks: LegalLink[];
  onContactSubmit: (data: ContactFormData) => Promise<void>;
  onSubscribe: (email: string) => Promise<void>;
  showDecorativeGlows?: boolean;
  className?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  statusBadge?: StatusBadge;
  features: string[];
}

export interface StatusBadge {
  text: string;
  variant: 'success' | 'warning' | 'info';
}

export interface ContactFormData {
  name: string;
  email: string;
  company?: string;
  projectType: 'product' | 'feature' | 'advisory' | 'ai';
  message?: string;
  nda: boolean;
}

export interface NavigationSection {
  title: string;
  links: NavigationLink[];
}

export interface NavigationLink {
  label: string;
  href: string;
  external?: boolean;
}

export interface SocialLink {
  platform: 'github' | 'twitter' | 'linkedin' | 'facebook' | 'instagram';
  url: string;
  ariaLabel: string;
}

export interface LegalLink {
  label: string;
  href: string;
}

export interface ContactFormProps {
  contactInfo: ContactInfo;
  onSubmit: (data: ContactFormData) => Promise<void>;
  className?: string;
}

export interface NewsletterFormProps {
  onSubscribe: (email: string) => Promise<void>;
  className?: string;
}

export type FormStatus = 'idle' | 'loading' | 'success' | 'error';

export interface FormState<T> {
  status: FormStatus;
  error?: string;
  data?: T;
}

/**
 * ServicesSection Component for KYRO Portfolio
 * Three detailed service offerings with imagery, checklists, and CTAs
 */

import React from 'react';
import { Download, Calendar, FileText } from 'lucide-react';
import { ServiceCard } from './ServiceCard';

export const ServicesSection: React.FC = () => {
  const services = [
    {
      number: '1',
      title: 'Brand Identity',
      subtitle: 'Logos, visual systems, guidelines',
      services: [
        'Logo Design',
        'Typography & Color Systems',
        'Brand Guidelines & Visual Systems',
      ],
      images: [
        {
          src: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b870108f-3551-40b3-bb97-ae4fc783d1df_320w.jpg',
          alt: 'Brand stationery set with bold colors',
        },
        {
          src: 'https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/4d5175fe-2aa3-4ef3-8a6f-44a752f57930_320w.jpg',
          alt: 'Business cards and patterns',
        },
        {
          src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2d210766-5c9f-4df0-873c-edb4557202b7_320w.jpg',
          alt: 'Stationery mockups on yellow background',
        },
        {
          src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/781b233e-9c54-40fc-8c11-186d4ce76914_320w.jpg',
          alt: 'Colorful brand collateral',
        },
      ],
    },
    {
      number: '2',
      title: 'Creative Strategy',
      subtitle: 'Positioning, messaging, audits',
      services: [
        'Brand Positioning',
        'Messaging & Tone of Voice',
        'Design Consultation & Audit',
      ],
      images: [
        {
          src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c7c0abe-b3bf-4f26-92a0-126405775d17_320w.jpg',
          alt: 'Workshop desk',
          className: 'grayscale aspect-[16/10] w-28 sm:w-32',
        },
        {
          src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1c79362c-952e-4a16-b043-e48fb1f55728_320w.jpg',
          alt: 'Strategy notes and artifacts',
          className: 'grayscale aspect-[16/10] w-28 sm:w-32',
        },
      ],
    },
    {
      number: '3',
      title: 'Web Design',
      subtitle: 'Interfaces, systems, prototypes',
      services: [
        'Responsive Web Design',
        'Design Systems & UI Kits',
        'High‑fidelity Prototypes',
        'SEO & Performance Pass',
      ],
      images: [
        {
          src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/237ae1f5-edc0-48a4-bb60-1eb41e314e05_320w.jpg',
          alt: 'Designing interface on laptop',
          className: 'aspect-[16/10] w-32 sm:w-40',
        },
        {
          src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/79fd2860-1afb-406f-b9d8-56f13319c7c7_320w.jpg',
          alt: 'Team collaborating over wireframes',
          className: 'aspect-[16/10] w-32 sm:w-40',
        },
      ],
    },
  ];

  return (
    <section id="services" className="max-w-7xl mx-auto px-4 sm:px-6 mt-14 sm:mt-20">
      <div className="ring-1 ring-white/10 overflow-hidden bg-white/5 rounded-2xl">
        {/* Header */}
        <div className="flex items-end justify-between p-6 border-b border-white/10">
          <h2 className="text-2xl sm:text-3xl tracking-tight font-semibold text-white">Services</h2>
          <div className="hidden sm:flex items-center gap-2">
            <button className="inline-flex items-center gap-2 rounded-full px-3 py-1.5 text-xs font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 ring-1 ring-white/10 transition-colors">
              <Download className="w-3.5 h-3.5" />
              <span>Services Deck</span>
            </button>
          </div>
        </div>

        {/* Service Cards */}
        {services.map((service, index) => (
          <ServiceCard
            key={service.number}
            {...service}
            className={index < services.length - 1 ? 'border-b border-white/10' : ''}
          />
        ))}

        {/* CTA */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 p-6 sm:p-8 border-t border-white/10">
          <p className="text-sm text-neutral-300">
            Need something tailored? Get a scoped proposal in 24 hours.
          </p>
          <div className="flex items-center gap-3">
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-emerald-500/90 hover:bg-emerald-500 transition-colors"
            >
              <Calendar className="w-4 h-4" />
              <span>Book Intro Call</span>
            </a>
            <button className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-sm font-medium tracking-tight text-white bg-white/10 hover:bg-white/20 ring-1 ring-white/10 transition-colors">
              <FileText className="w-4 h-4" />
              <span>Request Estimate</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;

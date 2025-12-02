import React, { useState } from 'react';
import { Star, Users, ChevronsRight } from 'lucide-react';
import { useCounterAnimation } from '../../hooks/useCounterAnimation';
import { ProductFeatureTabsProps } from '../types/product.types';
import { DiagramWithNodes } from './DiagramWithNodes';
import { SpecList } from './SpecList';
import { CertificationGrid } from './CertificationGrid';

export const ProductFeatureTabs: React.FC<ProductFeatureTabsProps> = ({
  tabs,
  rating,
  totalReviews,
  recommendPercent,
  diagramNodes,
  backgroundImage,
  className = ''
}) => {
  const [activeTab, setActiveTab] = useState(tabs[0]?.id || '');
  
  const animatedRating = useCounterAnimation({
    end: rating,
    duration: 2000,
    decimals: 1
  });
  
  const animatedRecommend = useCounterAnimation({
    end: recommendPercent,
    duration: 2000,
    suffix: '%'
  });

  // activeTab data reference is not required for current layout

  return (
    <section
      className={`relative z-10 animate-[fadeInUp_1s_ease-out_1.2s_forwards] ${className}`}
      style={{ transform: 'translateY(50px)' }}
    >
      <div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
        <div className="grid gap-12 lg:grid-cols-2">
          {/* Diagram */}
          <DiagramWithNodes 
            nodes={diagramNodes || []}
            backgroundImage={backgroundImage}
          />

          <div className="">
            <div className="mb-4 flex flex-wrap items-center gap-2 text-xs" id="tech-tabs">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`tech-tab ${activeTab === tab.id ? 'active' : ''} rounded-full px-3 py-1 font-medium font-sans transition-all duration-200 ${
                    activeTab === tab.id
                      ? 'bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-400/30'
                      : 'bg-white/5 text-neutral-300 ring-1 ring-white/10 hover:bg-white/10 hover:scale-105'
                  }`}
                  data-tab={tab.id}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            <div className={`tech-content ${activeTab !== 'technology' ? 'hidden' : ''}`} id="technology">
              {tabs.find((t) => t.id === 'technology')?.content || (
                <>
                  <h3 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold hover:text-emerald-200 transition-colors duration-500">
                    Industry‑leading precision, professionally certified
                  </h3>
                  <p className="mt-4 text-neutral-300 font-sans">
                    Advanced multi-spectral analysis technology delivers unmatched color accuracy across diverse materials and lighting conditions. Engineered for professionals who demand excellence in every measurement.
                  </p>
                </>
              )}
            </div>

            <div className={`tech-content ${activeTab !== 'specs' ? 'hidden' : ''}`} id="specs">
              <h3 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold">Technical Specifications</h3>
              <p className="mt-4 text-neutral-300 font-sans">Precision engineered with cutting-edge hardware and software integration for professional color analysis workflows.</p>
              <SpecList specs={(tabs as any).specs || []} className="mt-6" />
            </div>

            <div className={`tech-content ${activeTab !== 'certifications' ? 'hidden' : ''}`} id="certifications">
              <h3 className="text-4xl tracking-tight text-white sm:text-5xl font-sans font-semibold">Certifications & Standards</h3>
              <p className="mt-4 text-neutral-300 font-sans">Meets and exceeds international standards for color measurement and professional certification requirements.</p>
              <CertificationGrid certifications={(tabs as any).certifications || []} className="mt-6" />
            </div>

            <div className="mt-6 grid gap-6 sm:grid-cols-2">
              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/40 transition-all">
                  <Star
                    data-lucide="star"
                    className="lucide lucide-star w-[20px] h-[20px] text-zinc-400 hover:text-emerald-400 transition-colors"
                    style={{ width: 20, height: 20 }}
                  />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-2xl tracking-tight font-sans font-semibold rating-number"
                      data-target={String(rating)}
                    >
                      {animatedRating.count}
                    </span>
                    <span className="text-sm text-neutral-400 font-sans">/5</span>
                  </div>
                  <p className="text-xs text-neutral-400 font-sans">{totalReviews} professional reviews</p>
                </div>
              </div>

              <div className="flex items-center gap-3 hover:scale-105 transition-transform duration-200 cursor-pointer">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-white/5 ring-1 ring-white/10 hover:ring-emerald-400/40 transition-all">
                  <Users
                    data-lucide="users"
                    className="lucide lucide-users w-[20px] h-[20px] text-gray-400 hover:text-emerald-400 transition-colors"
                    style={{ width: 20, height: 20 }}
                  />
                </div>
                <div>
                  <div className="flex items-baseline gap-2">
                    <span
                      className="text-2xl tracking-tight font-sans font-semibold rating-number"
                      data-target={String(recommendPercent)}
                    >
                      {animatedRecommend.count}
                    </span>
                  </div>
                  <p className="text-xs text-neutral-400 font-sans">Users recommend to colleagues</p>
                </div>
              </div>
            </div>

            <div className="mt-8">
              <a
                href="#"
                className="relative inline-flex items-center gap-2 rounded-xl px-5 py-3 text-sm font-medium text-white hover:scale-105 transition-all duration-200 group"
              >
                <span className="absolute inset-0 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-500/20"></span>
                <span className="absolute inset-0 rounded-xl ring-1 ring-emerald-400/40 group-hover:ring-emerald-400/60 transition-all"></span>
                <span className="relative font-sans">Technical Documentation</span>
                <ChevronsRight
                  data-lucide="chevrons-right"
                  className="lucide lucide-chevrons-right relative h-4 w-4 group-hover:translate-x-1 transition-transform"
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

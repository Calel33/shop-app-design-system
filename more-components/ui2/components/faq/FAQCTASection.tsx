import React, { useEffect, useRef, useState } from 'react';
import { FileText, MessageCircle, ArrowRight } from 'lucide-react';
import type { FAQCTASectionProps } from '../types/faq.types';

export const FAQCTASection: React.FC<FAQCTASectionProps> = ({
  onBrowseAll,
  onAskExperts,
  totalCount = 47,
  animated = true,
}) => {
  const [isVisible, setIsVisible] = useState(!animated);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!animated) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
          }
        });
      },
      {
        threshold: 0.1,
      }
    );

    if (ctaRef.current) {
      observer.observe(ctaRef.current);
    }

    return () => {
      if (ctaRef.current) {
        observer.unobserve(ctaRef.current);
      }
    };
  }, [animated]);

  return (
    <div
      ref={ctaRef}
      className={`
        text-center
        transition-all duration-800 ease-out
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
      `}
      style={{ transitionDelay: animated ? '0.7s' : '0s' }}
    >
      <div className="inline-flex flex-col sm:flex-row gap-4">
        {/* Browse All Button */}
        <button
          onClick={onBrowseAll}
          className="
            group inline-flex items-center gap-3 rounded-xl border border-neutral-700/50 
            bg-neutral-800/30 backdrop-blur-sm px-8 py-4 text-sm font-medium tracking-wide 
            hover:bg-neutral-800/60 hover:border-neutral-600 
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-primary/50
          "
          aria-label={`Browse all ${totalCount} frequently asked questions`}
        >
          <FileText className="w-4 h-4" aria-hidden="true" />
          Browse All {totalCount} FAQs
          <ArrowRight 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            aria-hidden="true"
          />
        </button>

        {/* Ask Experts Button */}
        <button
          onClick={onAskExperts}
          className="
            group inline-flex items-center gap-3 rounded-xl 
            bg-gradient-to-r from-red-500 to-orange-500 
            px-8 py-4 text-sm font-semibold tracking-wide text-white 
            hover:shadow-lg hover:shadow-red-500/25 
            transition-all duration-300
            focus:outline-none focus:ring-2 focus:ring-red-500/50
          "
          aria-label="Contact our experts with your questions"
        >
          <MessageCircle className="w-4 h-4" aria-hidden="true" />
          Ask Our Experts
          <ArrowRight 
            className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
            aria-hidden="true"
          />
        </button>
      </div>

      {/* Support Text */}
      <p className="mt-6 text-sm text-neutral-500">
        Still have questions? Our team responds within 2 hours during business days.
      </p>
    </div>
  );
};

import React, { useEffect, useRef, useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import type { FAQCardProps } from '../types/faq.types';
import { FAQCategoryBadge } from './FAQCategoryBadge';
import { FAQCornerIcons } from './FAQCornerIcons';

export const FAQCard: React.FC<FAQCardProps> = ({
  faq,
  onReadMore,
  animationDelay = 0,
  animated = true,
}) => {
  const [isVisible, setIsVisible] = useState(!animated);
  const cardRef = useRef<HTMLElement>(null);

  useEffect(() => {
    if (!animated || !cardRef.current) {
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
        rootMargin: '0px 0px -50px 0px',
      }
    );

    observer.observe(cardRef.current);

    return () => {
      if (cardRef.current) {
        observer.unobserve(cardRef.current);
      }
    };
  }, [animated]);

  const handleReadMore = () => {
    if (onReadMore) {
      onReadMore(faq.id);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      handleReadMore();
    }
  };

  return (
    <article
      ref={cardRef}
      className={`
        relative rounded-2xl p-8 sm:p-10 flex flex-col h-full
        bg-gradient-to-br from-neutral-900/95 to-neutral-800/95
        dark:from-neutral-800/95 dark:to-neutral-900/95
        backdrop-blur-sm
        transition-all duration-300 ease-out
        hover:-translate-y-1 hover:shadow-xl hover:shadow-neutral-900/50
        focus-within:ring-2 focus-within:ring-primary/50
        ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-5'}
        ${faq.featured ? 'md:col-span-2 lg:col-span-1' : ''}
      `}
      style={{
        transitionDelay: animated ? `${animationDelay}s` : '0s',
      }}
      tabIndex={0}
      role="button"
      onClick={handleReadMore}
      onKeyDown={handleKeyPress}
      aria-label={`FAQ: ${faq.question}`}
    >
      {/* Gradient border effect */}
      <div
        className="absolute inset-0 rounded-2xl opacity-30 pointer-events-none"
        style={{
          background: `linear-gradient(135deg, ${getGradientColor(faq.category.color)})`,
          padding: '1px',
          WebkitMask: 'linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0)',
          WebkitMaskComposite: 'xor',
          maskComposite: 'exclude',
        }}
      />

      {/* Corner Icons */}
      <FAQCornerIcons color={faq.category.color} />

      <div className="flex-1 space-y-6 relative z-10">
        {/* Category Badge */}
        <FAQCategoryBadge category={faq.category} />

        {/* Question */}
        <h3 className="text-xl sm:text-2xl lg:text-3xl leading-tight text-white font-serif">
          {faq.question}
        </h3>

        {/* Answer Preview */}
        <p className="text-neutral-400 text-sm sm:text-base leading-relaxed line-clamp-3">
          {faq.answer}
        </p>
      </div>

      {/* Read More Button */}
      <button
        className="mt-8 group inline-flex items-center gap-2 text-sm font-medium tracking-wide text-neutral-300 hover:text-white transition-all duration-300 relative z-10"
        onClick={(e) => {
          e.stopPropagation();
          handleReadMore();
        }}
        aria-label={`Read full answer for: ${faq.question}`}
      >
        Read Full Answer
        <ArrowUpRight 
          className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" 
          aria-hidden="true"
        />
      </button>
    </article>
  );
};

function getGradientColor(color: string): string {
  const gradients: Record<string, string> = {
    red: 'rgba(239, 68, 68, 0.3), rgba(115, 115, 115, 0.2)',
    blue: 'rgba(59, 130, 246, 0.3), rgba(115, 115, 115, 0.2)',
    green: 'rgba(34, 197, 94, 0.3), rgba(115, 115, 115, 0.2)',
    purple: 'rgba(168, 85, 247, 0.3), rgba(115, 115, 115, 0.2)',
    orange: 'rgba(249, 115, 22, 0.3), rgba(115, 115, 115, 0.2)',
    emerald: 'rgba(16, 185, 129, 0.3), rgba(115, 115, 115, 0.2)',
  };
  return gradients[color] || gradients.red;
}

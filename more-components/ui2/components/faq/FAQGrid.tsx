import React from 'react';
import type { FAQGridProps } from '../types/faq.types';
import { FAQCard } from './FAQCard';

export const FAQGrid: React.FC<FAQGridProps> = ({
  faqs,
  onReadMore,
  animateOnScroll = true,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-16">
      {faqs.map((faq, index) => (
        <FAQCard
          key={faq.id}
          faq={faq}
          onReadMore={onReadMore}
          animationDelay={animateOnScroll ? index * 0.1 : 0}
          animated={animateOnScroll}
        />
      ))}
    </div>
  );
};

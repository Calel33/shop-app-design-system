/**
 * FAQ Section Component
 * Accordion-style FAQ section with expand/collapse functionality
 * @module FAQSection
 */

'use client';

import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';
import type { FAQSectionProps } from '../types/web3.types';

export const FAQSection: React.FC<FAQSectionProps> = ({
  title,
  description,
  faqs
}) => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="py-20 border-t border-white/10">
      <div className="mx-auto max-w-4xl px-4 md:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl tracking-tight mb-4 font-geist font-light">
            {title}
          </h2>
          <p className="text-gray-400 max-w-2xl mx-auto font-geist">
            {description}
          </p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white/5 border border-white/10 rounded-2xl overflow-hidden"
            >
              <button
                className="w-full text-left p-6 hover:bg-white/5 transition-colors flex items-center justify-between"
                onClick={() => toggleFAQ(index)}
                aria-expanded={openIndex === index}
                aria-controls={`faq-content-${index}`}
              >
                <span className="font-semibold font-geist">{faq.question}</span>
                <ChevronDown
                  className={`w-5 h-5 transition-transform ${
                    openIndex === index ? 'rotate-180' : ''
                  }`}
                />
              </button>
              {openIndex === index && (
                <div
                  id={`faq-content-${index}`}
                  className="px-6 pb-6"
                >
                  <p className="text-gray-400 leading-relaxed font-geist">
                    {faq.answer}
                  </p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

FAQSection.displayName = 'FAQSection';

export default FAQSection;

/**
 * Chapter Content Component
 * Wrapper for chapter content with staggered fade-in animations
 * @module ChapterContent
 */

'use client';

import React, { useEffect, useRef } from 'react';
import type { ChapterContentProps } from '../types/storytelling.types';

export const ChapterContent: React.FC<ChapterContentProps> = ({
  content,
  isActive,
  staggerDelay = 400,
}) => {
  const elementsRef = useRef<(HTMLElement | null)[]>([]);

  useEffect(() => {
    if (isActive) {
      elementsRef.current.forEach((el, i) => {
        if (el) {
          setTimeout(() => {
            el.classList.add('active');
          }, i * staggerDelay);
        }
      });
    } else {
      elementsRef.current.forEach((el) => {
        if (el) {
          el.classList.remove('active');
        }
      });
    }
  }, [isActive, staggerDelay]);

  const addToRefs = (el: HTMLElement | null) => {
    if (el && !elementsRef.current.includes(el)) {
      elementsRef.current.push(el);
    }
  };

  return (
    <>
      {content.heading && (
        <h2
          ref={addToRefs}
          className="story-text fade-in mb-12"
          style={{ fontSize: 'clamp(2.5rem, 6vw, 5rem)', lineHeight: '1.2', fontWeight: 100 }}
        >
          {content.heading}
        </h2>
      )}

      {content.paragraphs && content.paragraphs.map((paragraph, index) => (
        <p
          key={index}
          ref={addToRefs}
          className="text-xl md:text-2xl opacity-80 fade-in mb-8 max-w-4xl mx-auto"
        >
          {paragraph}
        </p>
      ))}

      {content.features && (
        <div className="grid md:grid-cols-3 gap-12 mt-16">
          {content.features.map((feature, index) => (
            <div key={index} ref={addToRefs} className="fade-in text-center">
              {feature.icon && (
                <div className="mx-auto mb-8 flex items-center justify-center">
                  {feature.icon}
                </div>
              )}
              <h3 className="text-2xl mb-6 font-thin">{feature.title}</h3>
              <p className="opacity-70 text-lg font-thin">{feature.description}</p>
            </div>
          ))}
        </div>
      )}

      {content.cta && (
        <div ref={addToRefs} className="fade-in mt-16">
          <button
            onClick={content.cta.onClick}
            className="border-2 border-white px-12 md:px-20 py-6 md:py-8 text-lg md:text-xl tracking-widest hover:bg-white hover:text-black transition-all duration-700 transform hover:scale-105 font-thin"
          >
            {content.cta.text}
          </button>
        </div>
      )}
    </>
  );
};

ChapterContent.displayName = 'ChapterContent';

export default ChapterContent;

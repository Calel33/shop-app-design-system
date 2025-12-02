/**
 * Chapter Component
 * Individual chapter with gradient background and decorations
 * @module Chapter
 */

'use client';

import React from 'react';
import { ChapterContent } from './ChapterContent';
import type { ChapterProps } from '../types/storytelling.types';

export const Chapter: React.FC<ChapterProps> = ({ chapter, isActive, chapterIndex }) => {
  const renderDecorations = () => {
    if (!chapter.decorations) return null;

    return chapter.decorations.map((decoration, index) => {
      const positionStyles = decoration.position || {};
      
      switch (decoration.type) {
        case 'pulse-dot':
          return (
            <div
              key={index}
              className="absolute w-2 h-2 rounded-full animate-pulse"
              style={{
                backgroundColor: decoration.color || 'white',
                animationDelay: `${decoration.animationDelay || 0}ms`,
                ...positionStyles,
              }}
            />
          );
        
        case 'spinning-circle':
          return (
            <div
              key={index}
              className="absolute border rounded-full animate-spin"
              style={{
                width: decoration.size || '20rem',
                height: decoration.size || '20rem',
                borderColor: decoration.color || 'rgba(255,255,255,0.3)',
                animationDuration: `${decoration.animationDuration || 20}s`,
                ...positionStyles,
              }}
            />
          );
        
        case 'gradient-overlay':
          return (
            <div
              key={index}
              className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))]"
              style={{
                background: decoration.color || 'radial-gradient(circle at center, rgba(0,0,0,0.5) 0%, transparent 100%)',
                ...positionStyles,
              }}
            />
          );
        
        case 'geometric-shape':
          return (
            <div
              key={index}
              className="absolute border-2 transform rotate-45"
              style={{
                width: decoration.size || '7rem',
                height: decoration.size || '7rem',
                borderColor: decoration.color || 'white',
                ...positionStyles,
              }}
            >
              <div className="w-14 h-14 opacity-20 transform -rotate-45" style={{ backgroundColor: decoration.color || 'white' }} />
            </div>
          );
        
        default:
          return null;
      }
    });
  };

  return (
    <section
      className={`section h-screen flex items-center justify-center ${chapter.gradient} relative overflow-hidden`}
      aria-label={`Chapter ${chapter.number}`}
    >
      {/* Chapter Number Background */}
      <div
        className="chapter-number absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-[0.08] font-thin pointer-events-none"
        style={{ fontSize: 'clamp(10rem, 20vw, 25rem)' }}
        aria-hidden="true"
      >
        {chapter.number}
      </div>

      {/* Decorations */}
      {renderDecorations()}

      {/* Content */}
      <div className={`text-center max-w-6xl px-8 ${chapter.layout === 'split' ? 'grid md:grid-cols-2 gap-16 items-center' : ''}`}>
        <ChapterContent content={chapter.content} isActive={isActive} />
      </div>
    </section>
  );
};

Chapter.displayName = 'Chapter';

export default Chapter;

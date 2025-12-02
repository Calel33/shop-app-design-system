/**
 * Main Scroll Story Component
 * Multi-chapter scroll-based storytelling experience
 * @module ScrollStory
 */

'use client';

import React, { useEffect, useRef } from 'react';
import { CustomCursor } from './CustomCursor';
import { ChapterNavigation } from './ChapterNavigation';
import { Chapter } from './Chapter';
import { useScrollNavigation } from './hooks/useScrollNavigation';
import type { ScrollStoryProps } from '../types/storytelling.types';
import './scroll-story.css';

/**
 * ScrollStory Component
 * Features:
 * - Multi-chapter vertical scroll navigation
 * - Custom cursor with mix-blend-mode
 * - Wheel event hijacking for smooth transitions
 * - Keyboard navigation (Arrow keys, Page keys, Home, End)
 * - Staggered fade-in animations with blur effects
 * - Responsive typography with clamp()
 * - Full-screen chapters with gradient backgrounds
 * - Decorative animated elements
 * - Accessibility features (keyboard nav, ARIA labels)
 */
export const ScrollStory: React.FC<ScrollStoryProps> = ({
  chapters,
  onChapterChange,
  enableCustomCursor = true,
  enableKeyboardNav = true,
  transitionDuration = 1200,
  staggerDelay = 400,
}) => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  const {
    currentChapter,
    isScrolling,
  } = useScrollNavigation({
    totalChapters: chapters.length,
    onChapterChange,
    transitionDuration,
  });

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.style.transform = `translateY(-${currentChapter * 100}vh)`;
    }
  }, [currentChapter]);

  useEffect(() => {
    // Hide default cursor if custom cursor is enabled
    if (enableCustomCursor) {
      document.body.style.cursor = 'none';
    }

    // Prevent default scroll
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.cursor = '';
      document.body.style.overflow = '';
    };
  }, [enableCustomCursor]);

  const chapterLabels = chapters.map(chapter => String(chapter.number));

  return (
    <div className="bg-black text-white font-thin min-h-screen">
      {/* Custom Cursor */}
      {enableCustomCursor && <CustomCursor enabled={enableCustomCursor} />}

      {/* Chapter Navigation */}
      <ChapterNavigation
        currentChapter={currentChapter}
        totalChapters={chapters.length}
        chapterLabels={chapterLabels}
      />

      {/* Chapters Container */}
      <div
        ref={containerRef}
        id="scroll-story-container"
        className="relative transition-transform"
        style={{
          transitionDuration: `${transitionDuration}ms`,
          transitionTimingFunction: 'cubic-bezier(0.19, 1, 0.22, 1)',
        }}
      >
        {chapters.map((chapter, index) => (
          <Chapter
            key={index}
            chapter={chapter}
            isActive={currentChapter === index}
            chapterIndex={index}
          />
        ))}
      </div>

      {/* Skip Navigation for Accessibility */}
      <div className="sr-only" role="region" aria-live="polite">
        <button onClick={() => {}} className="sr-only focus:not-sr-only">
          Skip to chapter navigation
        </button>
      </div>
    </div>
  );
};

ScrollStory.displayName = 'ScrollStory';

export default ScrollStory;

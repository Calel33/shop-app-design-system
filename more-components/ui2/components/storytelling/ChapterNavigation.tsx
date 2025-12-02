/**
 * Chapter Navigation Component
 * Fixed navigation showing current chapter and scroll hint
 * @module ChapterNavigation
 */

'use client';

import React from 'react';
import type { ChapterNavigationProps } from '../types/storytelling.types';

export const ChapterNavigation: React.FC<ChapterNavigationProps> = ({
  currentChapter,
  totalChapters,
  chapterLabels,
}) => {
  const getChapterLabel = () => {
    if (chapterLabels && chapterLabels[currentChapter]) {
      return chapterLabels[currentChapter];
    }
    return String(currentChapter + 1).padStart(2, '0');
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 p-8" aria-label="Chapter navigation">
      <div className="flex justify-between items-center">
        <div
          className="text-sm tracking-[0.3em] opacity-60 font-thin"
          role="status"
          aria-live="polite"
          aria-atomic="true"
        >
          CHAPTER <span id="chapter-indicator">{getChapterLabel()}</span>
        </div>
        <div className="text-sm tracking-[0.3em] opacity-60 font-thin" aria-label="Scroll hint">
          SCROLL TO CONTINUE
        </div>
      </div>
    </nav>
  );
};

ChapterNavigation.displayName = 'ChapterNavigation';

export default ChapterNavigation;

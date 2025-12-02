/**
 * Custom Hook for Scroll-based Chapter Navigation
 * Handles wheel events, keyboard navigation, and chapter transitions
 * @module useScrollNavigation
 */

import { useState, useEffect, useCallback, useRef } from 'react';
import type { UseScrollNavigationProps, UseScrollNavigationReturn } from '../../types/storytelling.types';

export const useScrollNavigation = ({
  totalChapters,
  onChapterChange,
  transitionDuration = 1200,
}: UseScrollNavigationProps): UseScrollNavigationReturn => {
  const [currentChapter, setCurrentChapter] = useState(0);
  const [isScrolling, setIsScrolling] = useState(false);
  const scrollTimeoutRef = useRef<NodeJS.Timeout>();

  const goToChapter = useCallback((chapter: number) => {
    if (isScrolling || chapter < 0 || chapter >= totalChapters || chapter === currentChapter) {
      return;
    }

    setIsScrolling(true);
    setCurrentChapter(chapter);
    
    if (onChapterChange) {
      onChapterChange(chapter);
    }

    if (scrollTimeoutRef.current) {
      clearTimeout(scrollTimeoutRef.current);
    }

    scrollTimeoutRef.current = setTimeout(() => {
      setIsScrolling(false);
    }, transitionDuration);
  }, [isScrolling, totalChapters, currentChapter, onChapterChange, transitionDuration]);

  const nextChapter = useCallback(() => {
    if (currentChapter < totalChapters - 1) {
      goToChapter(currentChapter + 1);
    }
  }, [currentChapter, totalChapters, goToChapter]);

  const previousChapter = useCallback(() => {
    if (currentChapter > 0) {
      goToChapter(currentChapter - 1);
    }
  }, [currentChapter, goToChapter]);

  useEffect(() => {
    const handleWheel = (e: WheelEvent) => {
      e.preventDefault();
      
      if (isScrolling) return;

      if (e.deltaY > 0) {
        nextChapter();
      } else if (e.deltaY < 0) {
        previousChapter();
      }
    };

    const handleKeyDown = (e: KeyboardEvent) => {
      if (isScrolling) return;

      switch (e.key) {
        case 'ArrowDown':
        case 'PageDown':
          e.preventDefault();
          nextChapter();
          break;
        case 'ArrowUp':
        case 'PageUp':
          e.preventDefault();
          previousChapter();
          break;
        case 'Home':
          e.preventDefault();
          goToChapter(0);
          break;
        case 'End':
          e.preventDefault();
          goToChapter(totalChapters - 1);
          break;
      }
    };

    window.addEventListener('wheel', handleWheel, { passive: false });
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      window.removeEventListener('wheel', handleWheel);
      window.removeEventListener('keydown', handleKeyDown);
      if (scrollTimeoutRef.current) {
        clearTimeout(scrollTimeoutRef.current);
      }
    };
  }, [isScrolling, nextChapter, previousChapter, goToChapter, totalChapters]);

  return {
    currentChapter,
    isScrolling,
    goToChapter,
    nextChapter,
    previousChapter,
  };
};

export default useScrollNavigation;

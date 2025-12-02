/**
 * TypeScript Type Definitions for Storytelling Components
 * @module storytelling.types
 */

export interface ChapterDecoration {
  type: 'pulse-dot' | 'spinning-circle' | 'gradient-overlay' | 'geometric-shape';
  position?: { top?: string; left?: string; right?: string; bottom?: string };
  color?: string;
  size?: string;
  animationDelay?: number;
  animationDuration?: number;
}

export interface ChapterContent {
  heading?: string;
  paragraphs?: string[];
  features?: Array<{
    icon?: React.ReactNode;
    title: string;
    description: string;
  }>;
  cta?: {
    text: string;
    href?: string;
    onClick?: () => void;
  };
}

export interface Chapter {
  number: string | number;
  gradient: string;
  content: ChapterContent;
  decorations?: ChapterDecoration[];
  layout?: 'center' | 'split' | 'grid';
}

export interface ScrollStoryProps {
  chapters: Chapter[];
  onChapterChange?: (chapterIndex: number) => void;
  enableCustomCursor?: boolean;
  enableKeyboardNav?: boolean;
  transitionDuration?: number;
  staggerDelay?: number;
}

export interface CustomCursorProps {
  enabled?: boolean;
}

export interface ChapterNavigationProps {
  currentChapter: number;
  totalChapters: number;
  chapterLabels?: string[];
}

export interface ChapterProps {
  chapter: Chapter;
  isActive: boolean;
  chapterIndex: number;
}

export interface ChapterContentProps {
  content: ChapterContent;
  isActive: boolean;
  staggerDelay?: number;
}

export interface UseScrollNavigationProps {
  totalChapters: number;
  onChapterChange?: (chapter: number) => void;
  transitionDuration?: number;
}

export interface UseScrollNavigationReturn {
  currentChapter: number;
  isScrolling: boolean;
  goToChapter: (chapter: number) => void;
  nextChapter: () => void;
  previousChapter: () => void;
}

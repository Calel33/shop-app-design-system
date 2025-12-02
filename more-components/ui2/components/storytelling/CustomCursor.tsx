/**
 * Custom Cursor Component
 * Circular cursor with mix-blend-mode for visual effect
 * @module CustomCursor
 */

'use client';

import React, { useEffect, useRef } from 'react';
import type { CustomCursorProps } from '../types/storytelling.types';

export const CustomCursor: React.FC<CustomCursorProps> = ({ enabled = true }) => {
  const cursorRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!enabled) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (cursorRef.current) {
        cursorRef.current.style.left = `${e.clientX - 10}px`;
        cursorRef.current.style.top = `${e.clientY - 10}px`;
      }
    };

    document.addEventListener('mousemove', handleMouseMove);

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
    };
  }, [enabled]);

  if (!enabled) return null;

  return (
    <div
      ref={cursorRef}
      className="custom-cursor fixed w-5 h-5 border-2 border-white rounded-full pointer-events-none z-[9999] transition-transform duration-100"
      style={{ mixBlendMode: 'difference' }}
      aria-hidden="true"
    />
  );
};

CustomCursor.displayName = 'CustomCursor';

export default CustomCursor;

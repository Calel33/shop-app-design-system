// useTheme.ts - Dark mode management
import { useState, useEffect, useCallback } from 'react';
import type { Theme, UseThemeReturn } from '../components/types/skincare.types';

const STORAGE_KEY = 'skincare-theme';

export function useTheme(): UseThemeReturn {
  const [theme, setThemeState] = useState<Theme>(() => {
    if (typeof window === 'undefined') return 'light';
    
    const stored = localStorage.getItem(STORAGE_KEY) as Theme | null;
    if (stored) return stored;
    
    return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  });

  useEffect(() => {
    const root = document.documentElement;
    
    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }
    
    localStorage.setItem(STORAGE_KEY, theme);
  }, [theme]);

  const toggleTheme = useCallback(() => {
    setThemeState((prev) => (prev === 'light' ? 'dark' : 'light'));
  }, []);

  const setTheme = useCallback((newTheme: Theme) => {
    setThemeState(newTheme);
  }, []);

  return {
    theme,
    toggleTheme,
    setTheme,
  };
}

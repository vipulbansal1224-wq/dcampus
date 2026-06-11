"use client";

import React, { createContext, useContext, useState, useEffect } from 'react';

type Theme = 'default' | 'dark' | 'nature' | 'ocean';
type Font = 'sans' | 'serif' | 'mono';
type Layout = 'wide' | 'boxed';

interface ThemeContextProps {
  theme: Theme;
  setTheme: (theme: Theme) => void;
  font: Font;
  setFont: (font: Font) => void;
  layout: Layout;
  setLayout: (layout: Layout) => void;
  resetToDefault: () => void;
}

const ThemeContext = createContext<ThemeContextProps | undefined>(undefined);

export function ThemeProvider({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<Theme>('default');
  const [font, setFont] = useState<Font>('sans');
  const [layout, setLayout] = useState<Layout>('wide');

  // Load from localStorage on mount
  useEffect(() => {
    const savedTheme = localStorage.getItem('dcc-theme') as Theme;
    const savedFont = localStorage.getItem('dcc-font') as Font;
    const savedLayout = localStorage.getItem('dcc-layout') as Layout;

    if (savedTheme) setTheme(savedTheme);
    if (savedFont) setFont(savedFont);
    if (savedLayout) setLayout(savedLayout);
  }, []);

  // Apply changes when state updates
  useEffect(() => {
    // Theme
    if (theme === 'default') {
      document.documentElement.removeAttribute('data-theme');
    } else {
      document.documentElement.setAttribute('data-theme', theme);
    }
    localStorage.setItem('dcc-theme', theme);

    // Font
    document.documentElement.setAttribute('data-font', font);
    localStorage.setItem('dcc-font', font);

    // Layout
    document.documentElement.setAttribute('data-layout', layout);
    localStorage.setItem('dcc-layout', layout);

  }, [theme, font, layout]);

  const resetToDefault = () => {
    setTheme('default');
    setFont('sans');
    setLayout('wide');
  };

  return (
    <ThemeContext.Provider value={{ theme, setTheme, font, setFont, layout, setLayout, resetToDefault }}>
      {children}
    </ThemeContext.Provider>
  );
}

export function useThemeContext() {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useThemeContext must be used within a ThemeProvider');
  }
  return context;
}

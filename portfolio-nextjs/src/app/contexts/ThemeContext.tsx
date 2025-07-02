"use client";

import React, { createContext, useState, useEffect, useContext, ReactNode } from 'react';

type Theme = 'light' | 'dark';

interface ThemeContextType {
  theme: Theme;
  toggleTheme: () => void;
}

// Provide a default value that matches the context type structure
const defaultThemeContextValue: ThemeContextType = {
  theme: 'dark', // Default theme
  toggleTheme: () => {
    // Default no-op toggle function
    // This will be overridden by the provider's value
    console.warn('toggleTheme called outside of ThemeProvider');
  },
};

const ThemeContext = createContext<ThemeContextType>(defaultThemeContextValue);


export const ThemeProvider = ({ children }: { children: ReactNode }) => {
  // Initialize theme state carefully to avoid SSR/hydration issues with localStorage
  const [theme, setTheme] = useState<Theme>(() => {
    if (typeof window !== 'undefined') {
      const savedTheme = localStorage.getItem('theme') as Theme | null;
      if (savedTheme) return savedTheme;
      // return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
      // For now, to ensure no mismatch, default to 'dark' on server, then update on client.
      // The effect below will handle client-side initialization.
    }
    return 'dark'; // Default theme before client-side check
  });

  // Effect for initial theme load from localStorage / system preference (client-side only)
  useEffect(() => {
    const savedTheme = localStorage.getItem('theme') as Theme | null;
    if (savedTheme) {
      setTheme(savedTheme);
    } else {
      const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
      setTheme(prefersDark ? 'dark' : 'light');
    }
  }, []);


  // Effect to update body class and localStorage when theme changes
  useEffect(() => {
    if (theme === 'light') {
      document.body.classList.add('light');
      document.body.classList.remove('dark');
    } else {
      document.body.classList.add('dark');
      document.body.classList.remove('light');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  // Ensure the provider passes down the dynamically changing theme and toggleTheme
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  // No need to check if context is undefined if a default value is always provided to createContext
  return context;
};

"use client";

import React from 'react';
import { useTheme } from '@/app/contexts/ThemeContext';

export default function ThemeToggleButton() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="theme-toggle-button" // Add a class for styling
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      type="button"
    >
      {theme === 'light' ? '🌙' : '☀️'} {/* Moon icon when light (to switch to dark), Sun icon when dark (to switch to light) */}
    </button>
  );
}

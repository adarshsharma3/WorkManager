import React, { useEffect, useState } from 'react';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const [theme, setTheme] = useState(() => {
    // Get saved theme from localStorage, or default to 'light'
    return localStorage.getItem('theme') || 'light';
  });

  // Update <html> class and localStorage when theme changes
  useEffect(() => {
    const root = window.document.documentElement;

    if (theme === 'dark') {
      root.classList.add('dark');
    } else {
      root.classList.remove('dark');
    }

    try {
      localStorage.setItem('theme', theme);
    } catch (error) {
      console.error('Failed to save theme to localStorage', error);
    }
  }, [theme]);

  const handleToggle = () => {
    setTheme(prev => (prev === 'light' ? 'dark' : 'light'));
  };

  return (
    <button
      onClick={handleToggle}
      className="flex items-center justify-center w-10 h-10 rounded-lg bg-gray-100 dark:bg-gray-700 hover:bg-gray-200 dark:hover:bg-gray-600 transition-colors duration-200"
      aria-label="Toggle theme"
    >
      {theme === 'light' ? (
        <Moon size={20} className="text-gray-600 dark:text-gray-300" />
      ) : (
        <Sun size={20} className="text-gray-600 dark:text-gray-300" />
      )}
    </button>
  );
};

export default ThemeToggle;

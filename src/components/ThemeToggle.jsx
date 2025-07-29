import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { toggleTheme } from '../features/ui/uiSlice';
import { Sun, Moon } from 'lucide-react';

const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.ui.theme);

  const handleToggle = () => {
    dispatch(toggleTheme());
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
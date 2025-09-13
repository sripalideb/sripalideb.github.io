import React from 'react';
import { useTheme } from '../hooks/useTheme';
import Sun from './icons/Sun';
import Moon from './icons/Moon';

const ThemeToggle: React.FC = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      className="relative p-2 rounded-lg transition-colors duration-200 hover:bg-neutral-gray/10 focus:bg-neutral-gray/10"
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
      role="switch"
      aria-checked={theme === 'dark'}
    >
      <div className="relative w-5 h-5">
        <Sun 
          className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 ${
            theme === 'light' ? 'opacity-100' : 'opacity-0'
          }`}
        />
        <Moon 
          className={`absolute inset-0 w-5 h-5 transition-opacity duration-200 ${
            theme === 'dark' ? 'opacity-100' : 'opacity-0'
          }`}
        />
      </div>
    </button>
  );
};

export default ThemeToggle;
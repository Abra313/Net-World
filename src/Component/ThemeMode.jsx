import React, { useState, useEffect } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';

const ThemeSwitcher = ({ onThemeChange }) => {
  // Initialize state with the value from localStorage, default to false (light mode)
  const [isDarkMode, setIsDarkMode] = useState(() => {
    const savedTheme = localStorage.getItem('isDarkMode');
    return savedTheme === 'true'; // Convert the saved value to a boolean
  });

  useEffect(() => {
    // Update the body class based on the current theme
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';

    // Save the theme preference to localStorage
    localStorage.setItem('isDarkMode', isDarkMode);

    // Notify parent component about the theme change, if callback is provided
    if (onThemeChange) {
      onThemeChange(isDarkMode);
    }
  }, [isDarkMode, onThemeChange]);

  return (
    <button
      className="flex gap-[5px] items-center"
      onClick={() => setIsDarkMode(!isDarkMode)}
      style={{ fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer' }}
    >
      {isDarkMode ? (
        <IoMdSunny className='w-[25px] h-[25px]' />
      ) : (
        <IoMdMoon className='w-[25px] h-[25px]' />
      )}
      <p className='text-[16px] max-sm:hidden'>Theme</p>
      <span className='text-[16px]'>{isDarkMode ? '' : ''}</span>
    </button>
  );
};

export default ThemeSwitcher;


import React, { useState, useEffect } from 'react';
import { IoMdMoon, IoMdSunny } from 'react-icons/io';


const ThemeSwitcher = ({ onThemeChange }) => {
  const [isDarkMode, setIsDarkMode] = useState(false);

  useEffect(() => {
    document.body.className = isDarkMode ? 'dark-mode' : 'light-mode';
    if (onThemeChange) {
      onThemeChange(isDarkMode);
    }
  }, [isDarkMode, onThemeChange]);

  return (
    <button  className="flex gap-[5px] items-center"onClick={() => setIsDarkMode(!isDarkMode)} style={{ fontSize: '24px', background: 'none', border: 'none', cursor: 'pointer' }}>
      {isDarkMode ? <IoMdSunny className='w-[25px] h-[25px]' /> : <IoMdMoon className='w-[25px] h-[25px] ' />} 
      <p className='text-[16px] max-sm:hidden'>Theme</p>
      <span className='text-[16px]'>{isDarkMode ? '' : ''}</span>
    </button>
  );

};


export default ThemeSwitcher;

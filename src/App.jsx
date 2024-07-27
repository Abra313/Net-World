import React, { useState } from 'react';
import './App.css';
import AppRoute from './Route';

function App() {
  const [isDarkMode, setIsDarkMode] = useState(false);

  const toggleMode = () => {
    setIsDarkMode(!isDarkMode);
  };

  return (
    <div className={`app ${isDarkMode ? 'app-dark' : 'app-light'}`}>
      
      <button onClick={toggleMode} className="mode-toggle fixed z-[100]">
        {isDarkMode ? 'Switch to Light Mode' : 'Switch to Dark Mode'}
      </button>
      <AppRoute />
      
    </div>
  );
}

export default App;

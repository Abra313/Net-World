import React from 'react';
import netWorld from '../asset/images/net world logo.png';


const Header = () => {
  

  return (
    <header className="bg-secondary h-20 flex flex-col md:flex-row md:items-center px-4 w-full gap-2 md:gap-5 fixed top-0 left-0">
      <div className="flex items-center justify-start w-full md:w-auto">
            <img src={netWorld} alt="net-world" className='w-12 md:w-16' />
      </div>
            <h1 className="text-white font-bold text-lg md:text-2xl hidden md:block">Net World</h1>
      
      
    </header>
  );
}

export default Header;

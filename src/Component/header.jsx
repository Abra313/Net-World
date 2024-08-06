import React, { useState } from 'react';
import netWorld from '../asset/images/net world logo.png';
import { CiSearch } from "react-icons/ci";

const Header = () => {
 

  return (
    <header className="bg-secondary h-20 flex items-center fixed w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12">
      <div className="flex items-center flex-1">
        <img src={netWorld} alt="net-world" className='w-16' />
        <h1 className="text-white font-bold text-xl sm:text-2xl ml-4 max-sm:">Net World</h1>
      </div>
      
      
    </header>
  );
};

export default Header;

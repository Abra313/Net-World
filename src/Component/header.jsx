import React, { useState } from 'react';
import netWorld from '../asset/images/net world logo.png'
const Header = () => {
  return (
    <header className="bg-secondary h-20 flex justify-center items-center px-4 w-[100%] gap-[5px] fixed ">
      <img src={netWorld} alt="net-world"  className='w-[50px]' />
      <h1 className="text-white font-bold text-2xl ">Net World</h1>

      
   
    </header>
  );
}

export default Header;

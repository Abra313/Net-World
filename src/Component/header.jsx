import React, { useState } from 'react';
import netWorld from '../asset/images/net world logo.png';
import { CiSearch } from 'react-icons/ci';
import { MdClose } from 'react-icons/md';

const Header = () => {
  const [isSearchVisible, setIsSearchVisible] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const toggleSearchVisibility = () => {
    setIsSearchVisible(!isSearchVisible);
  };

  const handleSearch = () => {
    console.log('Search Query:', searchQuery); // Handle search logic here
    // Optionally close the search bar after searching
    setIsSearchVisible(false);
  };

  const handleCancel = () => {
    setSearchQuery('');
    setIsSearchVisible(false);
  };

  return (
    <header className="bg-secondary h-20 flex items-center fixed w-full px-4 sm:px-6 md:px-8 lg:px-10 xl:px-12 z-10">
      <div className="flex items-center flex-1">
        <img src={netWorld} alt="net-world" className="w-16" />
        <h1 className="text-white font-bold text-xl sm:text-2xl ml-4">Net World</h1>
      </div>

      {/* Desktop Search Bar */}
      <div className="hidden  -max-md:hidden flex items-center flex-1 justify-center">
        <div className="flex border-[1px] h-[51px] rounded-[4px] items-center p-[10px] space-x-[4px] max-w-[500px] w-full">
          <CiSearch className="text-white text-xl" />
          <input
            type="text"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchChange}
            className="outline-none border-0 flex-1 bg-transparent text-white"
          />
        </div>
      </div>

      {/* Mobile Search Toggle Button */}
      <button
        className="md:hidden flex items-center ml-4"
        onClick={toggleSearchVisibility}
      >
        <CiSearch className="text-white text-[1.5rem]" />
      </button>

      {/* Mobile Search Bar */}
      <div
        className={`fixed top-20 right-0 bg-secondary w-[83%] max-w-md p-4 border-t border-t-gray-600 transition-transform transform ${
          isSearchVisible ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="flex items-center border-[1px] h-[51px] rounded-[4px] p-[10px] space-x-[4px]">
          
          <input
            type="text"
            placeholder="Search Friends,Group"
            value={searchQuery}
            onChange={handleSearchChange}
            className="outline-none border-0 flex-1 bg-transparent text-white"
          />
          <button onClick={handleSearch} className="text-white ml-3">
            Search
          </button>
          <button onClick={handleCancel} className="text-white ml-3">
            <MdClose className="text-xl text-red-500" />
          </button>
        </div>
      </div>
    </header>
  );
};

export default Header;

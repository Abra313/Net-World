import { Link } from 'react-router-dom';
import { useAuth } from '../Context/AuthContext';  // Import the AuthContext
import Button from './Button';
import { ImHome } from 'react-icons/im';
import { IoMdNotifications } from 'react-icons/io';
import { BiSolidMessageRoundedDetail } from 'react-icons/bi';
import { BiSolidBookmarks } from 'react-icons/bi';
import { IoListSharp } from 'react-icons/io5';
import { MdGroups2 } from 'react-icons/md';
import { MdAddCard } from 'react-icons/md';
import { ImProfile } from 'react-icons/im';
import ThemeSwitcher from '../Component/ThemeMode';
import { useState, useEffect } from 'react';

const Aside = () => {
  const { user } = useAuth();  // Access user from AuthContext

  const [isDarkMode, setIsDarkMode] = useState(false); // Track theme state

  useEffect(() => {
    // Logic to check if dark mode is enabled, assuming ThemeSwitcher updates state/context
    setIsDarkMode(localStorage.getItem("theme") === "dark"); // Example for checking dark mode from localStorage
  }, []);

  // Function to get the user's initials
  const getInitials = (fullName) => {
    const nameParts = fullName.split(' ');
    const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('');
    return initials;
  };

  // Set a default placeholder image or use initials
  const profileImage = user?.profileImage || null; // Assume `profileImage` contains the user's image URL
  const userInitials = user?.FullName ? getInitials(user.FullName) : '';

  // Define handleThemeChange function
  const handleThemeChange = (isDarkMode) => {
    console.log(`Theme changed: ${isDarkMode ? 'Dark Mode' : 'Light Mode'}`);
    setIsDarkMode(isDarkMode);
    // You can add additional logic to switch themes, if necessary
  };

  // Define handleClick function
  const handleClick = () => {
    console.log('New Post Button clicked!');
    // You can add the logic to handle new post creation
  };

  return (
    <div className="w-[17.7%] h-[50vh] border-r-[0] flex justify-center mt-[8%] fixed max-sm:ml-[%] max-sm:mt-[37%] text-primary">
      <div className={`flex justify-center flex-col items-start space-y-2 max-sm:gap-[10px] ${isDarkMode ? 'bg-transparent' : 'bg-white'}`}>
        {/* Profile Section */}
        <div className="flex justify-center items-center space-x-3 mt-5">
          <div className="w-[50px] h-[50px] bg-gray-500 rounded-full flex justify-center items-center text-primary">
            {profileImage ? (
              <img src={profileImage} alt="User" className="w-full h-full object-cover rounded-full" />
            ) : (
              <span className="text-xl font-bold">{userInitials}</span>
            )}
          </div>
          <p className="text-primary max-sm:hidden">{user?.FullName || 'User Name'}</p>
        </div>

        {/* Navigation Links */}
        <div className="flex justify-center items-center space-x-3 mt-5">
          <Link to="/user" className="flex justify-center items-center gap-[10px]">
            <ImHome className={`w-[25px] h-[25px] ${isDarkMode ? 'text-white' : 'text-primary'}`} />
            <p className="max-sm:hidden text-primary">Home</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/notification" className="flex justify-center items-center gap-[10px]">
            <IoMdNotifications className={`w-[25px] h-[25px] ${isDarkMode ? 'text-white' : 'text-primary'}`} />
            <p className="max-sm:hidden text-primary">Notification</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/message" className="flex justify-center items-center gap-[10px]">
            <BiSolidMessageRoundedDetail className={`w-[25px] h-[25px] ${isDarkMode ? 'text-white' : 'text-primary'}`} />
            <p className="max-sm:hidden text-primary">Message</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/bookmark" className="flex justify-center items-center gap-[10px]">
            <BiSolidBookmarks className={`w-[25px] h-[25px] ${isDarkMode ? 'text-white' : 'text-primary'}`} />
            <p className="max-sm:hidden text-primary">Bookmark</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
  <Link to="/user/friends" className="flex justify-center items-center gap-[10px]">
    <IoListSharp className={`w-[25px] h-[25px] ${isDarkMode ? 'text-white' : 'text-primary'}`} />
    <p className="max-sm:hidden text-primary">Friends</p>
  </Link>
</div>


        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/group" className="flex justify-center items-center gap-[10px]">
            <MdGroups2 className={`w-[25px] h-[25px] ${isDarkMode ? 'text-white' : 'text-primary'}`} />
            <p className="max-sm:hidden text-primary">Group</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/add" className="flex justify-center items-center gap-[10px]">
            <MdAddCard className={`w-[25px] h-[25px] ${isDarkMode ? 'text-white' : 'text-primary'}`} />
            <p className="max-sm:hidden text-primary">Add Card</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/profile" className="flex justify-center items-center gap-[10px]">
            <ImProfile className={`w-[25px] h-[25px] ${isDarkMode ? 'text-white' : 'text-primary'}`} />
            <p className="max-sm:hidden text-primary">Profile</p>
          </Link>
        </div>

        {/* Theme Switcher */}
        <div className="flex justify-center items-center space-x-3">
          <div className="App">
            <header className="App-header">
              <ThemeSwitcher onThemeChange={handleThemeChange} />
            </header>
          </div>
        </div>

        {/* New Post Button */}
        <Button onClick={handleClick} className="bg-primary max-sm:hidden text-white" children="+ New Post" />
      </div>
    </div>
  );
};

export default Aside;

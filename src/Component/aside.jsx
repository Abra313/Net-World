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

const Aside = () => {
  const { user } = useAuth();  // Access user from AuthContext

  // Function to get the user's initials
  const getInitials = (fullName) => {
    const nameParts = fullName.split(' ');
    const initials = nameParts.map(part => part.charAt(0).toUpperCase()).join('');
    return initials;
  };

  // Set a default placeholder image or use initials
  const profileImage = user?.profileImage || null; // Assume `profileImage` contains the user's image URL
  const userInitials = user?.userName ? getInitials(user.userName) : '';

  // Define handleThemeChange function
  const handleThemeChange = (isDarkMode) => {
    console.log(`Theme changed: ${isDarkMode ? 'Dark Mode' : 'Light Mode'}`);
    // You can add additional logic to switch themes, if necessary
  };

  // Define handleClick function
  const handleClick = () => {
    console.log('New Post Button clicked!');
    // You can add the logic to handle new post creation
  };

  return (
    <div className="w-[17.7%] h-[50vh] border-r-[0] flex justify-center mt-[8%] fixed max-sm:ml-[%] max-sm:mt-[37%]">
      <div className="flex justify-center flex-col items-start space-y-2 max-sm:gap-[10px]">
        {/* Check if profile image exists, else show initials */}
        {profileImage ? (
          <img src={profileImage} alt="Profile" className="w-[40px] h-[70px]  max-sm:ml-[-5px]" />
        ) : (
          <div className="w-[40px] h-[70px]  bg-primary flex items-center justify-center max-sm:ml-[-5px]">
            <span className="text-white font-semibold text-sm">{userInitials}</span>
          </div>
        )}

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user" className='flex justify-center items-center gap-[10px]'>
            <ImHome className='w-[25px] h-[25px] text-black' />
            <p className='max-sm:hidden'>Home</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/notification" className='flex justify-center items-center gap-[10px]'>
            <IoMdNotifications className='w-[25px] h-[25px] outline-black' />
            <p className='max-sm:hidden'>Notification</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/message" className='flex justify-center items-center gap-[10px]'>
            <BiSolidMessageRoundedDetail className='w-[25px] h-[25px] outline-black' />
            <p className='max-sm:hidden'>Message</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/bookmark" className='flex justify-center items-center gap-[10px]'>
            <BiSolidBookmarks className='w-[25px] h-[25px] outline-black' />
            <p className='max-sm:hidden'>Bookmark</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/list" className='flex justify-center items-center gap-[10px]'>
            <IoListSharp className='w-[25px] h-[25px] outline-black' />
            <p className='max-sm:hidden'>Lists</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/group" className='flex justify-center items-center gap-[10px]'>
            <MdGroups2 className='w-[25px] h-[25px] outline-black' />
            <p className='max-sm:hidden'>Group</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/add" className='flex justify-center items-center gap-[10px]'>
            <MdAddCard className='w-[25px] h-[25px] outline-black' />
            <p className='max-sm:hidden'>Add Card</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <Link to="/user/profile" className='flex justify-center items-center gap-[10px]'>
            <ImProfile className='w-[25px] h-[25px] outline-black' />
            <p className='max-sm:hidden'>Profile</p>
          </Link>
        </div>

        <div className="flex justify-center items-center space-x-3">
          <div className="App">
            <header className="App-header">
              <ThemeSwitcher onThemeChange={handleThemeChange} />
            </header>
          </div>
        </div>

        <Button onClick={handleClick} className="bg-primary max-sm:hidden" children='+ New Post' />
      </div>
    </div>
  );
};

export default Aside;

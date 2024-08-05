import { Link } from 'react-router-dom';
import pp from '../asset/images/post3.jpg';
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
  const handleClick = () => {
   
  };
  
  const handleThemeChange = (isDarkMode) => {
    console.log(`Theme changed: ${isDarkMode ? 'Dark Mode' : 'Light Mode'}`);
    // You can add additional logic here if needed
  };


  return (
    <>
      <div className="w-[17.7%] h-[50vh] border-r-[0] flex justify-center mt-[6%] fixed">
        <div className="flex justify-center flex-col items-start space-y-2 ">
          <img src={pp} alt="pp" className="w-[40px] h-[40px] rounded-[50%]"/>

          <div className="flex justify-center items-center space-x-3">
            <ImHome />
            <Link to="/user">Home</Link>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <IoMdNotifications />
            <Link to="/user/notification">Notification</Link>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <BiSolidMessageRoundedDetail />
            <Link to="/user/message">Message</Link>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <BiSolidBookmarks />
            <Link to="/user/bookmark">Bookmark</Link>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <IoListSharp />
            <Link to="/user/list">Lists</Link>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <MdGroups2 />
            <Link to="/user/group">Group</Link>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <MdAddCard />
            <Link to="/user/add">Add Card</Link>
          </div>

          <div className="flex justify-center items-center space-x-3">
            <ImProfile />
            <Link to="/user/profile">Profile</Link>
          </div>

          <div className="flex justify-center items-center space-x-3">
            
          <div className="App">
              <header className="App-header">
                
                <ThemeSwitcher onThemeChange={handleThemeChange} />
              </header>
          </div>
          </div>

          <Button onClick={handleClick}
          className="bg-primary"
          children=' + New Post'
          />
            
        </div>
      </div>
    </>
  );
};

export default Aside;

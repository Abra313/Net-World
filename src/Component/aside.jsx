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
      <div className="w-[17.7%] h-[50vh] border-r-[0] flex justify-center mt-[6%] fixed  max-sm:ml-[%] max-sm:mt-[37%] ">
        <div className="flex justify-center flex-col items-start space-y-2 max-sm:gap-[10px] ">
          <img src={pp} alt="pp" className="w-[40px] h-[40px] rounded-[50%] max-sm:ml-[-5px]"/>

          
              <div className="flex justify-center items-center space-x-3">
                
                <Link to="/user" className='flex justify-center items-center gap-[10px]'><ImHome  className='w-[25px] h-[25px] text-blcak'/><p className='max-sm:hidden'>Home</p></Link>
              </div>

              <div className="flex justify-center items-center space-x-3">
                
                <Link to="/user/notification" className='flex justify-center items-center gap-[10px]'><IoMdNotifications  className='w-[25px] h-[25px] outline-black'/> <p className='max-sm:hidden'>Notification</p></Link>
              </div>

              <div className="flex justify-center items-center space-x-3">
                
                <Link to="/user/message" className='flex justify-center items-center gap-[10px]'><BiSolidMessageRoundedDetail  className='w-[25px] h-[25px] outline-black' /> <p className='max-sm:hidden'>Message</p></Link>
              </div>

              <div className="flex justify-center items-center space-x-3">
                
                <Link to="/user/bookmark" className='flex justify-center items-center gap-[10px]'> <BiSolidBookmarks className='w-[25px] h-[25px] outline-black' /> <p className='max-sm:hidden'>Bookmark</p></Link>
              </div>

              <div className="flex justify-center items-center space-x-3">
                
                <Link to="/user/list" className='flex justify-center items-center gap-[10px]'><IoListSharp className='w-[25px] h-[25px] outline-black' /> <p className='max-sm:hidden'>Lists</p></Link>
              </div>

              <div className="flex justify-center items-center space-x-3">
                
                <Link to="/user/group" className='flex justify-center items-center gap-[10px]'> <MdGroups2  className='w-[25px] h-[25px] outline-black'/> <p className='max-sm:hidden'>Group</p></Link>
              </div>

              <div className="flex justify-center items-center space-x-3">
              
                <Link to="/user/add" className='flex justify-center items-center gap-[10px]' >  <MdAddCard   className='w-[25px] h-[25px] outline-black'/> <p className='max-sm:hidden' >Add Card</p></Link>
              </div>

              <div className="flex justify-center items-center space-x-3">
                
                <Link to="/user/profile" className='flex justify-center items-center gap-[10px]'> <ImProfile  className='w-[25px] h-[25px] outline-black'/> <p className='max-sm:hidden'>Profile</p></Link>
              </div>

              <div className="flex justify-center items-center space-x-3">
                
              <div className="App">
                  <header className="App-header">
                    
                    <ThemeSwitcher onThemeChange={handleThemeChange} />
                  </header>
              </div>
              </div>

              <Button onClick={handleClick}
              className="bg-primary max-sm:hidden"
              children=' + New Post'
              />
          
            
        </div>
      </div>
    </>
  );
};

export default Aside;

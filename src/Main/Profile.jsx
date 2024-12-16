import { useAuth } from '../Context/AuthContext'; // Adjust the path based on where your AuthContext is located
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft, FaRegImage, FaVideo, FaPoll, FaShare } from 'react-icons/fa';
import { MdSettingsVoice, MdGroup, MdBookmarks, MdModeEdit } from 'react-icons/md';
import { GiSandsOfTime } from 'react-icons/gi';
import { BsBroadcast } from 'react-icons/bs';
import Button from '../Component/Button';
import Recheal from '../asset/images/recheal.jpg'; // Fallback image

const Profile = () => {
  const { user } = useAuth(); // Access the user data from context
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate(-1); // Navigate to the previous page
  };

  // Get the first letter of the first name for the placeholder image
  const profilePic = user?.profilePicture || `${user?.FullName?.charAt(0).toUpperCase()}`;

  return (
    <div>
      {/* Profile Header */}
      <div className="bg-blue-50 h-[40vh] mt-[10px] max-sm:mt-[30%]">
        <div className="flex">
          <FaArrowLeft
            className="text-primary font-bold mt-[1%] text-[1.5rem] ml-[10px] cursor-pointer"
            onClick={handleBackClick}
          />
          <div className="flex flex-col items-start justify-center">
            <h2 className="text-primary font-bold mt-[1%] text-[1.5rem] ml-[10px]">
              {user?.FullName} {/* Display full name */}
            </h2>
            <p className="text-ashDark ml-[10%]">{user?.posts} posts</p> {/* Assuming posts count is part of the user object */}
          </div>
        </div>
      </div>

      {/* Profile Information */}
      <div className="flex justify-around mt-[-30px]">
        <div className="flex gap-[5px]">
          {/* If profile picture exists, display it; otherwise, display the first letter of the full name */}
          {user?.profilePicture ? (
            <img src={user.profilePicture} alt="Profile" className="rounded-full w-[50px] h-[50px]" />
          ) : (
            <div className="flex items-center justify-center bg-primary text-white rounded-full w-[50px] h-[50px]">
              {profilePic}
            </div>
          )}
          <div className="flex flex-col">
            <h2 className="text-primary font-bold mt-[1%] text-[1.5rem] max-sm:text-[0.9rem]">
              {user?.FullName} {/* Display full name */}
            </h2>
            <p className="text-ashDark max-sm:text-[0.8rem]">@{user?.userName}</p> {/* Display username */}
          </div>
        </div>
        <div className="flex gap-[10px]">
          <Button className="flex gap-[5px] items-center bg-ashDark border-[2px] text-primary h-[45px] rounded-[20px] max-sm:h-[35px] mt-[10px]">
            <MdModeEdit className="text-[1rem] max-sm:text-[1.5rem]" />
            <p className="max-sm:hidden">Edit Profile</p>
          </Button>

          <Button className="flex gap-[5px] items-center bg-ashDark border-[2px] text-primary h-[45px] rounded-[20px] max-sm:h-[35px] mt-[10px]">
            <FaShare className="text-[1rem] max-sm:text-[1.5rem]" />
            <p className="max-sm:hidden">Share</p>
          </Button>
        </div>
      </div>

      {/* Post Creation Section */}
      <div className="m-[10px] mt-[2%]">
        <div className="bg-ashLight border-[1px] h-[265px] rounded-[5px] max-sm:h-[150px]">
          <div className="bg-white h-[170px] rounded-[5px] m-[15px] border-[2px] flex flex-col gap-[70px] pl-[20px] pt-[20px] max-sm:h-[50px]">
            <p className="text-[1.3rem] text-ashDark max-sm:mt-[-10px]">Compose new post</p>
            <div className="flex gap-[30px] max-sm:gap-[20px] ml-[-15px] max-sm:mt-[-65px]">
              <FaRegImage className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" />
              <FaVideo className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" />
              <MdSettingsVoice className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" />
              <FaPoll className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" />
              <GiSandsOfTime className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" />
              <BsBroadcast className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" />
              <MdGroup className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" />
            </div>
          </div>
          <div className="flex items-center gap-[30px] m-[20px] justify-end max-sm:mt-[35px] flex justify-between">
            <h2 className="text-primary font-bold">Post Later</h2>
            <Button className="w-[120px] bg-primary">Post</Button>
          </div>
        </div>

        {/* Statistics Section */}
        <div className="flex gap-[20px] mt-[20px] max-sm:overflow-x-auto mr-[10px] pr-[10px]">
          <p className="text-[0.8rem] font-bold max-sm:text-[1rem]">Followers: 120</p>
          <p className="text-[0.8rem] font-bold max-sm:text-[1rem]">Fans: 300</p>
          <p className="text-[0.8rem] font-bold max-sm:text-[1rem]">Likes: 250</p>
          <p className="text-[0.8rem] font-bold max-sm:text-[1rem]">Posts: 40</p>
          <p className="text-[0.8rem] font-bold max-sm:text-[1rem]">Video: 5</p>
          <p className="text-[0.8rem] font-bold max-sm:text-[1rem]">Audio: 3</p>
          <p className="text-[0.8rem] font-bold max-sm:text-[1rem]">Vault: 2</p>
        </div>
        <hr className="mt-[20px] max-sm:hidden" />

        {/* Followers Section */}
        <div className="flex flex-col gap-[30px] max-sm:mt-[20px]">
          <div>
            <h2 className="text-[0.8rem] font-bold max-sm:text-[0.9rem] font-light">Olaide John</h2>
            <p className="text-ashDark text-[0.8rem]">@olaidejohn</p>
          </div>
          <div>
            <h2 className="text-[0.8rem] font-bold max-sm:text-[0.9rem] font-light">Jay Storm</h2>
            <p className="text-ashDark text-[0.8rem]">@jaystorm</p>
          </div>
          <div>
            <h2 className="text-[0.8rem] font-bold max-sm:text-[0.9rem] font-light">Godwin Dickson</h2>
            <p className="text-ashDark text-[0.8rem]">@godwindickson</p>
          </div>
          <div>
            <h2 className="text-[0.8rem] font-bold max-sm:text-[0.9rem] font-light">Ceeprints Peace</h2>
            <p className="text-ashDark text-[0.8rem]">@ceeprintspeace</p>
          </div>
          <div>
            <h2 className="text-[0.8rem] font-bold max-sm:text-[0.9rem] font-light">Favour Uch</h2>
            <p className="text-ashDark text-[0.8rem]">@favouruch</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;

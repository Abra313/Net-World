import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { useAuth } from '../Context/AuthContext'; // Import AuthContext
import Button from '../Component/Button';
import { MdModeEdit, MdSettingsVoice, MdGroup } from 'react-icons/md';
import { FaRegImage, FaVideo, FaPoll, FaShare } from 'react-icons/fa';
import { GiSandsOfTime } from 'react-icons/gi';
import { BsBroadcast } from 'react-icons/bs';

const Profile = () => {
    const navigate = useNavigate();
    const { user } = useAuth(); // Get user details from AuthContext

    // Fallback if user data is missing
    const userData = user || {
        name: "Guest User",
        username: "@guestuser",
        posts: 0,
        fans: 0,
        likes: 0,
    };

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div>
            <div className="bg-blue-50 h-[40vh] mt-[10px] max-sm:mt-[30%]">
                <div className="flex">
                    <FaArrowLeft
                        className="text-primary font-bold mt-[1%] text-[1.5rem] ml-[10px] cursor-pointer"
                        onClick={handleBackClick}
                    />
                    <div className='flex flex-col items-start justify-center'>
                        <h2 className='text-primary font-bold mt-[1%] text-[1.5rem] ml-[10px]'>
                            {userData.FullName}
                        </h2>
                        <p className='text-ashDark ml-[10%]'>{userData.posts} posts</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-around mt-[-30px]">
                <div className='flex gap-[5px]'>
                    <img 
                        src={userData.profilePicture} 
                        alt="Profile" 
                        className='rounded-full w-[50px] h-[50px]' 
                    />
                    <div className='flex flex-col'>
                        <h2 className='text-primary font-bold mt-[1%] text-[1.5rem] max-sm:text-[0.9rem]'>
                            {userData.FullName}
                        </h2>
                        <p className='text-ashDark max-sm:text-[0.8rem]'>{userData.userName}</p>
                    </div>
                </div>
                <div className='flex gap-[10px]'>
                    <Button className="flex gap-[5px] items-center bg-ashDark border-[2px] text-primary h-[45px] rounded-[20px] max-sm:h-[35px] mt-[10px]">
                        <MdModeEdit className='text-[1rem] max-sm:text-[1.5rem]' />
                        <p className='max-sm:hidden'> Edit Profile</p>
                    </Button>

                    <Button className="flex gap-[5px] items-center bg-ashDark border-[2px] text-primary h-[45px] rounded-[20px] max-sm:h-[35px] mt-[10px]">
                        <FaShare className='text-[1rem] max-sm:text-[1.5rem]' />
                        <p className='max-sm:hidden'>Share</p>
                    </Button>
                </div>
            </div>

            <div className="m-[10px] mt-[2%]">
                <div className="bg-ashLight border-[1px] h-[265px] rounded-[5px] max-sm:h-[150px]">
                    <div className="bg-white h-[170px] rounded-[5px] m-[15px] border-[2px] flex flex-col gap-[70px] pl-[20px] pt-[20px] max-sm:h-[50px]">
                        <p className="text-[1.3rem] text-ashDark max-sm:mt-[-10px]">Compose new post</p>

                        <div className="flex gap-[30px] max-sm:gap-[20px] ml-[-15px] max-sm:mt-[-65px]">
                            <FaRegImage className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] max-sm:h-[40px]" />
                            <FaVideo className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] max-sm:h-[40px]" />
                            <MdSettingsVoice className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] max-sm:h-[40px]" />
                            <FaPoll className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] max-sm:h-[40px]" />
                            <GiSandsOfTime className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] max-sm:h-[40px]" />
                            <BsBroadcast className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] max-sm:h-[40px]" />
                            <MdGroup className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] max-sm:h-[40px]" />
                        </div>
                    </div>
                    <div className="flex items-center gap-[30px] m-[20px] justify-end max-sm:mt-[35px] flex justify-between">
                        <h2 className="text-primary font-bold">Post Later</h2>
                        <Button className="w-[120px] bg-primary">Post</Button>
                    </div>
                </div>

                <div className='flex gap-[20px] mt-[20px] max-sm:overflow-x-auto mr-[10px] pr-[10px]'>
                    <p className='text-[0.8rem] font-bold max-sm:text-[1rem]'>Followers: {userData.followers}</p>
                    <p className='text-[0.8rem] font-bold max-sm:text-[1rem]'>Likes: {userData.likes}</p>
                    <p className='text-[0.8rem] font-bold max-sm:text-[1rem]'>Posts: {userData.posts}</p>
                </div>
            </div>
        </div>
    );
};

export default Profile;

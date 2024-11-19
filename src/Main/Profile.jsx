import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react';
import { FaRegImage, FaVideo, FaPoll } from 'react-icons/fa';
import { MdSettingsVoice, MdGroup, MdBookmarks, MdModeEdit } from 'react-icons/md';
import { GiSandsOfTime } from 'react-icons/gi';
import { BsBroadcast } from 'react-icons/bs';
import { FaShare } from "react-icons/fa";
import Button from '../Component/Button';
import Recheal from '../asset/images/recheal.jpg';

const Profile = () => {
    const navigate = useNavigate();

    // Dynamic Data
    const userData = {
        name: "Tracy Vicky",
        username: "@tracyvicky",
        postsCount: 40,
        followers: 120,
        fans: 300,
        likes: 250,
        video: 5,
        audio: 3,
        vault: 2,
    };

    const followersList = [
        { name: "Olaide John", username: "@olaidejohn" },
        { name: "Jay Storm", username: "@jaystorm" },
        { name: "Godwin Dickson", username: "@godwindickson" },
        { name: "Ceeprints Peace", username: "@ceeprintspeace" },
        { name: "Favour Uch", username: "@favouruch" },
    ];

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
                            {userData.name}
                        </h2>
                        <p className='text-ashDark ml-[10%]'>{userData.postsCount} posts</p>
                    </div>
                </div>
            </div>

            <div className="flex justify-around mt-[-30px]">
                <div className='flex gap-[5px]'>
                    <img src={Recheal} alt="" className='rounded-full w-[50px] h-[50px]' />
                    <div className='flex flex-col'>
                        <h2 className='text-primary font-bold mt-[1%] text-[1.5rem] max-sm:text-[0.9rem]'>
                            {userData.name}
                        </h2>
                        <p className='text-ashDark max-sm:text-[0.8rem]'>{userData.username}</p>
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
                            <FaRegImage className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                            <FaVideo className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                            <MdSettingsVoice className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                            <FaPoll className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                            <GiSandsOfTime className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                            <BsBroadcast className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                            <MdGroup className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                        </div>
                    </div>
                    <div className="flex items-center gap-[30px] m-[20px] justify-end max-sm:mt-[35px] flex justify-between">
                        <h2 className="text-primary font-bold">Post Later</h2>
                        <Button className="w-[120px] bg-primary">Post</Button>
                    </div>
                </div>

                <div className='flex gap-[20px] mt-[20px] max-sm:overflow-x-auto mr-[10px] pr-[10px]'>
                    <p className='text-[0.8rem] font-bold max-sm:text-[1rem]'>Followers: {userData.followers}</p>
                    <p className='text-[0.8rem] font-bold max-sm:text-[1rem]'>Fans: {userData.fans}</p>
                    <p className='text-[0.8rem] font-bold max-sm:text-[1rem]'>Likes: {userData.likes}</p>
                    <p className='text-[0.8rem] font-bold max-sm:text-[1rem]'>Posts: {userData.postsCount}</p>
                    <p className='text-[0.8rem] font-bold max-sm:text-[1rem]'>Video: {userData.video}</p>
                    <p className='text-[0.8rem] font-bold max-sm:text-[1rem]'>Audio: {userData.audio}</p>
                    <p className='text-[0.8rem] font-bold max-sm:text-[1rem]'>Vault: {userData.vault}</p>
                </div>
                <hr className='mt-[20px] max-sm:hidden' />

                <div className='flex flex-col gap-[30px] max-sm:mt-[20px]'>
                    {followersList.map((follower, index) => (
                        <div key={index}>
                            <h2 className='text-[0.8rem] font-bold max-sm:text-[0.9rem] font-light'>{follower.name}</h2>
                            <p className='text-ashDark text-[0.8rem]'>{follower.username}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default Profile;

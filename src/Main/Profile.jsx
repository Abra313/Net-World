import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { useState } from 'react';
import { FaRegImage, FaVideo, FaPoll} from 'react-icons/fa';
import { MdSettingsVoice, MdGroup, MdBookmarks } from 'react-icons/md';
import { GiSandsOfTime } from 'react-icons/gi';
import { BsBroadcast } from 'react-icons/bs';
import { IoMdList } from 'react-icons/io';
import { CgMoreO } from 'react-icons/cg';
import { MdModeEdit } from "react-icons/md";
import { FaShare } from "react-icons/fa";
import Button from '../Component/Button';
const Profile = () => {

    const navigate = useNavigate();
    

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

   
    return(
        <div>
            <div  className="bg-blue-50 h-[40vh] mt-[10px]"  >
                <div className="flex ">
                            <FaArrowLeft 
                                className="text-primary font-bold mt-[1%] text-[1.5rem] ml-[10px] cursor-pointer" 
                                onClick={handleBackClick} 
                            />
                        <div className='flex flex-col items-start justify-center'>
                        <h2 className='text-primary font-bold mt-[1%] text-[1.5rem] ml-[10px]'>
                                Tracy Vicky
                            </h2>
                            <p className='text-ashDark ml-[10%]'>40 posts</p>
                        </div>
                        
                </div>
            </div>


            <div className="">
                <div className='flex justify-around mt-[-30px]'>
                        <div className='flex flex-col'>
                            <h2 className='text-primary font-bold mt-[1%] text-[1.5rem]'>Tracy Vicky</h2>
                            <p className='text-ashDark'>@tracyvicky</p>
                        </div>
                        <div className='flex gap-[10px]'> 
                            <Button
                            className="flex gap-[5px] items-center bg-ashDark border-[2px] text-primary h-[45px] rounded-[20px]"
                            > <MdModeEdit  className='text-[1rem]'/>
                            Edit Profile</Button>
                            
                            <Button
                            className="flex gap-[5px] items-center bg-ashDark border-[2px] text-primary h-[45px] rounded-[20px]"
                            > <FaShare className='text-[1rem]'/>
                            Share</Button>
                        </div>
                </div>
            </div>


            <div className="m-[10px] mt-[2%]">
                    <div className="bg-ashLight border-[1px] h-[265px] rounded-[5px]">
                        <div className="bg-white h-[170px] rounded-[5px] m-[15px] border-[2px] flex flex-col gap-[70px] pl-[20px] pt-[20px]">
                            <p className="text-[1.3rem] text-ashDark">Compose new post</p>

                            <div className="flex gap-[30px]">
                                <FaRegImage className="w-[30px] h-[30px] text-ashDark" />
                                <FaVideo className="w-[30px] h-[30px] text-ashDark" />
                                <MdSettingsVoice className="w-[30px] h-[30px] text-ashDark" />
                                <FaPoll className="w-[30px] h-[30px] text-ashDark" />
                                <GiSandsOfTime className="w-[30px] h-[30px] text-ashDark" />
                                <BsBroadcast className="w-[30px] h-[30px] text-ashDark" />
                                <MdGroup className="w-[30px] h-[30px] text-ashDark" />
                            </div>
                        </div>
                        <div className="flex items-center gap-[30px] m-[20px] justify-end">
                            <h2 className="text-primary font-bold">Post Later</h2>
                            <Button
                                
                                className="w-[120px] bg-primary"
                                children="Post"
                            />
                        </div>
                    </div>

                    <div className='flex gap-[20px] mt-[20px]'>
                        <p className='text-[0.8rem] font-bold'>Followers</p>
                        <p className='text-[0.8rem] font-bold'>Fans</p>
                        <p className='text-[0.8rem] font-bold'>Likes</p>
                        <p className='text-[0.8rem] font-bold '>Posts</p>
                        <p className='text-[0.8rem] font-bold'>Video</p>
                        <p className='text-[0.8rem] font-bold'>Audio</p>
                        <p className='text-[0.8rem] font-bold'>Vault</p>
                    </div>
                    <hr  className='mt-[20px]'/>

                    <div className=' flex flex-col gap-[30px]'>
                        <div>
                            <h2 className='text-[0.8rem] font-bold'>Olaide John</h2>
                            <p className='text-ashDark text-[0.8rem]'>@olaidejohn</p>
                        </div>

                        <div>
                            <h2 className='text-[0.8rem] font-bold'>Jay Storm</h2>
                            <p className='text-ashDark text-[0.8rem]'>@jaystorm</p>
                        </div>

                        <div>
                            <h2 className='text-[0.8rem] font-bold'>Godwin Dickson</h2>
                            <p className='text-ashDark text-[0.8rem]'>@godwindickson</p>
                        </div>

                        <div>
                            <h2 className='text-[0.8rem] font-bold'>Ceeprints Peace</h2>
                            <p className='text-ashDark text-[0.8rem]'>@ceeprintspeace</p>
                        </div>

                        <div>
                            <h2 className='text-[0.8rem] font-bold'>Favour Uch</h2>
                            <p className='text-ashDark text-[0.8rem]'>@favouruch</p>
                        </div>

                    </div>

            </div>


        </div>
    )
}
export default Profile
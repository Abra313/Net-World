import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";

import Button from "../Component/Button";
import post4 from '../asset/images/post4.jpg';
import Glory from '../asset/images/glory.jpg';
import Kelly from '../asset/images/kelly.jpg';
import Recheal from '../asset/images/recheal.jpg';
import Pual from '../asset/images/paul.jpg';
import post1 from '../asset/images/post1.jpg';
import post2 from '../asset/images/post2.jpg';
import post3 from '../asset/images/post3.jpg';

const Notification = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState(null);

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleNotiSetting = () => {
        navigate('/noti');
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div>
            <div className="m-[10px]">
                <div className="wrapper">
                    <div className="flex justify-between items-center">
                        <FaArrowLeft 
                            className="text-primary font-bold mt-[1%] text-[1.5rem] ml-[10px] cursor-pointer" 
                            onClick={handleBackClick} 
                        />
                        <h2 className='text-primary font-bold mt-[1%] text-[1.5rem] ml-[10px]'>
                            Notification
                        </h2>
                        <IoMdSettings 
                            className="text-primary font-bold mt-[1%] text-[1.5rem] mr-[10px]" 
                            onClick={handleNotiSetting} 
                        />
                    </div>

                    <div className="flex gap-[5%] mt-[2%]">
                        <Button 
                            className={`rounded-[%] ${activeButton === 'All' ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                            onClick={() => handleButtonClick('All')}
                        >
                            All
                        </Button>
                        <Button 
                            className={`rounded-[%] ${activeButton === 'Followers' ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                            onClick={() => handleButtonClick('Followers')}
                        >
                            Followers
                        </Button>
                        <Button 
                            className={`rounded-[%] ${activeButton === 'Likes' ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                            onClick={() => handleButtonClick('Likes')}
                        >
                            Likes
                        </Button>
                        <Button 
                            className={`rounded-[%] ${activeButton === 'Comments' ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                            onClick={() => handleButtonClick('Comments')}
                        >
                            Comments
                        </Button>
                    </div>
                    <hr className="mt-[3%]" />

                    {/* Notification Items */}
                    <div className="mt-[2%] flex justify-between items-center text-ashDark">
                        <div className="flex items-center gap-[5px]">
                            <img src={Kelly} alt="kelly" className="rounded-[50%] w-[40px] h-[40px]" />
                            <div>
                                <h2 className="text-secondary font-bold">Kelly Johnson</h2>
                                <p className="text-ashDark">Liked your post recently</p>
                            </div>
                        </div>
                        <p>1 min ago</p>
                    </div>
                    <hr className="mt-[3%]" />

                    <div className="mt-[2%] flex justify-between items-center text-ashDark">
                        <div className="flex items-center gap-[5px]">
                            <img src={post1} alt="post" className="rounded-[50%] w-[40px] h-[40px]" />
                            <div>
                                <h2 className="text-secondary font-bold">Tracy Vicky</h2>
                                <p className="text-ashDark">Added a new post</p>
                            </div>
                        </div>
                        <p>15 mins ago</p>
                    </div>
                    <hr className="mt-[3%]" />

                    <div className="mt-[2%] flex justify-between items-center text-ashDark">
                        <div className="flex items-center gap-[5px]">
                            <img src={post2} alt="post" className="rounded-[50%] w-[40px] h-[40px]" />
                            <div>
                                <h2 className="text-secondary font-bold">Olaide John</h2>
                                <p className="text-ashDark">Liked your post</p>
                            </div>
                        </div>
                        <p>20 mins ago</p>
                    </div>
                    <hr className="mt-[3%]" />

                    <div className="mt-[2%] flex justify-between items-center text-ashDark">
                        <div className="flex items-center gap-[5px]">
                            <img src={post3} alt="post" className="rounded-[50%] w-[40px] h-[40px]" />
                            <div>
                                <h2 className="text-secondary font-bold">Dorothy</h2>
                                <p className="text-ashDark">Mentioned you in a comment</p>
                            </div>
                        </div>
                        <p>30 mins ago</p>
                    </div>
                    <hr className="mt-[3%]" />

                    <div className="mt-[2%] flex justify-between items-center text-ashDark">
                        <div className="flex items-center gap-[5px]">
                            <img src={post4} alt="Success" className="rounded-[50%] w-[40px] h-[40px]" />
                            <div>
                                <h2 className="text-secondary font-bold">Success</h2>
                                <p className="text-ashDark">Liked your post</p>
                            </div>
                        </div>
                        <p>40 mins ago</p>
                    </div>
                    <hr className="mt-[3%]" />

                    <div className="mt-[2%] flex justify-between items-center text-ashDark">
                        <div className="flex items-center gap-[5px]">
                            <img src={Pual} alt="paul" className="rounded-[50%] w-[40px] h-[40px]" />
                            <div>
                                <h2 className="text-secondary font-bold">Paul Chisom</h2>
                                <p className="text-ashDark">Accepted your friend request</p>
                            </div>
                        </div>
                        <p>59 mins ago</p>
                    </div>
                    <hr className="mt-[3%]" />
                </div>
            </div>
        </div>
    );
};

export default Notification;

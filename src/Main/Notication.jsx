import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
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
    const [activeButton, setActiveButton] = useState('All');

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleNotiSetting = () => {
        navigate('/user/noti');
    };

    const handleButtonClick = (buttonName) => {
        setActiveButton(buttonName);
    };

    return (
        <div className="m-4 max-sm:mt-8 max-sm:border-0 max-sm:overflow-x-auto">
            <div className="wrapper">
                <div className="flex justify-between items-center max-sm:mt-[15%]">
                    <FaArrowLeft 
                        className="text-primary font-bold text-2xl ml-2 cursor-pointer max-sm:hidden" 
                        onClick={handleBackClick} 
                    />
                    <h2 className='text-primary font-bold text-2xl '>
                        Notification
                    </h2>
                    <IoMdSettings 
                        className="text-primary font-bold text-2xl " 
                        onClick={handleNotiSetting} 
                    />
                </div>

                <div className="flex gap-4 mt-4 overflow-x-auto">
                    <Link to="/notifications/all">
                        <Button 
                            className={`rounded-full px-4 py-2 ${activeButton === 'All' ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                            onClick={() => handleButtonClick('All')}
                        >
                            All
                        </Button>
                    </Link>
                    <Link to="/notifications/followers">
                        <Button 
                            className={`rounded-full px-4 py-2 ${activeButton === 'Followers' ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                            onClick={() => handleButtonClick('Followers')}
                        >
                            Followers
                        </Button>
                    </Link>
                    <Link to="/notifications/likes">
                        <Button 
                            className={`rounded-full px-4 py-2 ${activeButton === 'Likes' ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                            onClick={() => handleButtonClick('Likes')}
                        >
                            Likes
                        </Button>
                    </Link>
                    <Link to="/notifications/comments">
                        <Button 
                            className={`rounded-full px-4 py-2 ${activeButton === 'Comments' ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                            onClick={() => handleButtonClick('Comments')}
                        >
                            Comments
                        </Button>
                    </Link>
                </div>
                <hr className="mt-4 max-sm:hidden" />

                {/* Notification Items */}
                {[
                    { img: Kelly, name: 'Kelly Johnson', text: 'Liked your post recently', time: '1 min ago' },
                    { img: post1, name: 'Tracy Vicky', text: 'Added a new post', time: '15 mins ago' },
                    { img: post2, name: 'Olaide John', text: 'Liked your post', time: '20 mins ago' },
                    { img: post3, name: 'Dorothy', text: 'Mention you in a post', time: '30 mins ago' },
                    { img: post4, name: 'Success', text: 'Liked your post', time: '40 mins ago' },
                    { img: Pual, name: 'Paul Chisom', text: 'Accept your request', time: '59 mins ago' }
                ].map((notification, index) => (
                    <div key={index} className="mt-4 flex justify-between items-center text-ashDark">
                        <div className="flex items-center gap-2">
                            <img src={notification.img} alt="notification" className="rounded-full w-10 h-10" />
                            <div>
                                <h2 className="text-secondary font-bold">{notification.name}</h2>
                                <p className="text-ashDark">{notification.text}</p>
                            </div>
                        </div>
                        <p>{notification.time}</p>
                    </div>
                ))}
                <hr className="mt-4 max-sm:hidden" />
            </div>
        </div>
    );
};

export default Notification;

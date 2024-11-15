import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Button from "../Component/Button";
import Kelly from '../asset/images/kelly.jpg';
import post1 from '../asset/images/post1.jpg';
import post2 from '../asset/images/post2.jpg';
// You can add other imports here as needed

const Notification = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('All');

    // Array for the buttons (you can add more buttons if needed)
    const buttons = [
        { label: 'All', action: '/user/all' },
        { label: 'Follower', action: '/user/follower' },
        { label: 'Likes', action: '/user/like' },
        { label: 'Comments', action: '/user/comment' },
    ];

    // Array for notifications (this can be expanded or dynamically fetched)
    const notifications = [
        { img: Kelly, name: 'Kelly Johnson', text: 'Liked your post recently', time: '1 min ago' },
        { img: post1, name: 'Tracy Vicky', text: 'Added a new post', time: '15 mins ago' },
        { img: post2, name: 'Olaide John', text: 'Liked your post', time: '20 mins ago' }, 
        { img: post2, name: 'williams John', text: 'Liked your post', time: '20 mins ago' }, 
        // Add more notifications here if needed
    ];

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleButtonClick = (action) => {
        navigate(action); // Dynamically navigate based on button action
    };

    const handleNotiSetting = () => {
        navigate('/user/noti');
    };

    return (
        <div className="m-4 max-sm:mt-8 max-sm:border-0 max-sm:overflow-x-auto">
            <div className="wrapper">
                <div className="flex justify-between items-center max-sm:mt-[15%]">
                    <FaArrowLeft 
                        className="text-primary font-bold text-2xl ml-2 cursor-pointer max-sm:hidden" 
                        onClick={handleBackClick} 
                    />
                    <h2 className='text-primary font-bold text-2xl'>
                        Notification
                    </h2>
                    <IoMdSettings 
                        className="text-primary font-bold text-2xl" 
                        onClick={handleNotiSetting} 
                    />
                </div>

                <div className="flex gap-4 mt-4 overflow-x-auto">
                    {buttons.map((button, index) => (
                        <Button 
                            key={index}
                            className={`rounded-full px-4 py-2 ${activeButton === button.label ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                            onClick={() => handleButtonClick(button.action)}
                            children={button.label}
                        />
                    ))}
                </div>
                <hr className="mt-4 max-sm:hidden" />

                {/* Mapping through the notifications array */}
                {notifications.map((notification, index) => (
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

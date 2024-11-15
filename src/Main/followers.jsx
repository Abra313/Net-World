import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { IoMdSettings } from "react-icons/io";
import Button from "../Component/Button";
import Kelly from '../asset/images/kelly.jpg';
import post1 from '../asset/images/post1.jpg';
import post2 from '../asset/images/post2.jpg';

const Notification = () => {
    const navigate = useNavigate();
    const [activeButton, setActiveButton] = useState('All');

    // Notification items array
    const notifications = [
        { img: Kelly, name: 'Kelly Johnson', text: 'followed you ', time: '1 min ago' },
        { img: post1, name: 'Tracy Vicky', text: 'followed you', time: '15 mins ago' },
        { img: post2, name: 'Olaide John', text: 'followed you', time: '20 mins ago' },
        { img: post2, name: 'vicent williams', text: 'followed you', time: '20 mins ago' },
        { img: post2, name: 'johnson John', text: 'followed you', time: '20 mins ago' },
        // Additional notifications can be added here
    ];

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    const handleNotiSetting = () => {
        navigate('/user/noti');
    };

    const handleFollowers = () => {
        navigate('/user/follower');
    };
    const handleAll = () => {
        navigate('/user/all');
    };
    const handleComment = () => {
        navigate('/user/comment');
    };
    const handleLikes = () => {
        navigate('/user/like');
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
                    <Button 
                        className={`rounded-full px-4 py-2 ${activeButton === 'All' ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                        onClick={handleAll}
                        children="All"
                    />
                    <Button 
                        className={`rounded-full px-4 py-2 ${activeButton === 'Follower' ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                        onClick={handleFollowers}
                        children="Follower"
                    />
                    <Button 
                        className={`rounded-full px-4 py-2 ${activeButton === 'Likes' ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                        onClick={handleLikes}
                        children="Likes"
                    />
                    <Button 
                        className={`rounded-full px-4 py-2 ${activeButton === 'Comments' ? 'bg-gray-400 text-white' : 'bg-primary text-black'}`}
                        onClick={handleComment}
                        children="Comments"
                    />
                </div>
                <hr className="mt-4 max-sm:hidden" />

                {/* Notification Items */}
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

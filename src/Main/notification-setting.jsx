import { useState, useEffect } from 'react';
import { BsToggleOn, BsToggleOff } from 'react-icons/bs';

const NotiSetting = () => {
    // Initial state from localStorage or default values
    const initialState = () => {
        const savedState = localStorage.getItem('notificationToggles');
        return savedState ? JSON.parse(savedState) : {
            pushNotifications: true,
            newCampaignPayment: true,
            newSubscription: true,
            newTip: true,
            newFollower: true,
            newSubscriber: true,
            newLikes: true,
            newComment: true,
            newLiveStream: true,
            newPhoto: true,
            newVideo: true,
            newAudio: true,
            vipMessage: true,
            newMessage: true
        };
    };

    const [toggles, setToggles] = useState(initialState);

    // Update localStorage whenever the state changes
    useEffect(() => {
        localStorage.setItem('notificationToggles', JSON.stringify(toggles));
    }, [toggles]);

    // Toggle function to update state for each specific notification type
    const handleToggle = (key) => {
        setToggles(prevToggles => ({
            ...prevToggles,
            [key]: !prevToggles[key]
        }));
    };

    return (
        <div className="m-4 max-sm:mt-8 max-sm:border-0 max-sm:overflow-x-auto">
            <div className="wrapper">
                <div className="flex justify-between items-center max-sm:mt-[15%] ">
                    <h2 className="text-primary font-bold text-2xl max-sm:ml-[10%]">
                        Notification Settings
                    </h2>
                </div>
                <hr className="mt-[5%] max-sm:hidden" />
                <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                    <h4 className='text-primary font-bold text-[0.8rem]'>Push Notifications</h4>
                    <div onClick={() => handleToggle('pushNotifications')} className="cursor-pointer">
                        {toggles.pushNotifications ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                    </div>
                </div>

                <hr className="mt-[5%] max-sm:hidden" />

                <div className="mt-[1%] max-sm:mt-[10%]">
                    <h4 className='text-black font-bold text-[0.9rem]'>You and Your Posts</h4>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>New Campaign Payment</h4>
                        <div onClick={() => handleToggle('newCampaignPayment')} className="cursor-pointer">
                            {toggles.newCampaignPayment ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>New Subscription</h4>
                        <div onClick={() => handleToggle('newSubscription')} className="cursor-pointer">
                            {toggles.newSubscription ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>New Tip</h4>
                        <div onClick={() => handleToggle('newTip')} className="cursor-pointer">
                            {toggles.newTip ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>New Follower</h4>
                        <div onClick={() => handleToggle('newFollower')} className="cursor-pointer">
                            {toggles.newFollower ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>New Subscriber</h4>
                        <div onClick={() => handleToggle('newSubscriber')} className="cursor-pointer">
                            {toggles.newSubscriber ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>New Likes</h4>
                        <div onClick={() => handleToggle('newLikes')} className="cursor-pointer">
                            {toggles.newLikes ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>New Comment</h4>
                        <div onClick={() => handleToggle('newComment')} className="cursor-pointer">
                            {toggles.newComment ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>
                </div>

                {/* Subscriptions and Following */}

                <div className="mt-[1%] max-sm:mt-[10%]">
                    <h4 className='text-black font-bold text-[0.9rem]'>Subscriptions and Following</h4>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>New Live Stream</h4>
                        <div onClick={() => handleToggle('newLiveStream')} className="cursor-pointer">
                            {toggles.newLiveStream ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>New Photo</h4>
                        <div onClick={() => handleToggle('newPhoto')} className="cursor-pointer">
                            {toggles.newPhoto ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>New Video</h4>
                        <div onClick={() => handleToggle('newVideo')} className="cursor-pointer">
                            {toggles.newVideo ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>New Audio</h4>
                        <div onClick={() => handleToggle('newAudio')} className="cursor-pointer">
                            {toggles.newAudio ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>
                </div>

                {/* MESSAGE */}

                <div className="mt-[1%] max-sm:mt-[10%]">
                    <h4 className='text-black font-bold text-[0.9rem]'>Message</h4>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>VIP Message</h4>
                        <div onClick={() => handleToggle('vipMessage')} className="cursor-pointer">
                            {toggles.vipMessage ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>

                    <div className="flex items-center justify-between mt-[1%] max-sm:mt-[3%]">
                        <h4 className='text-ashDark text-[0.8rem]'>New Message</h4>
                        <div onClick={() => handleToggle('newMessage')} className="cursor-pointer">
                            {toggles.newMessage ? <BsToggleOn size={24} color="blue" /> : <BsToggleOff size={24} color="blue" />}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default NotiSetting;

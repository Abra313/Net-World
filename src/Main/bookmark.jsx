import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { BsListNested } from "react-icons/bs";

const Bookmark = () => {
    const navigate = useNavigate();

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="border-[1px] h-[100vh] mt-[5px]">
            <div className="mt-[10px] h-[100vh] m-[10px]">
                <div className="flex gap-[40%] items-center">
                         <FaArrowLeft 
                            className="text-ashDark cursor-pointer text-primary font-bold mt-[1%] text-[1.5rem] ml-[10px] " 
                            onClick={handleBackClick} 
                        />
                    <h2 className='text-primary font-bold mt-[2%] text-[1.5rem] ml-[10px] flex items-center gap-[10px]'>
                       
                        Bookmarks
                    </h2>
                </div>
                <hr className="mt-[2%]" />
                <div className="flex justify-between items-center mt-[2%]">
                    <p className="text-primary">All Bookmarks</p>
                    <BsListNested />
                </div>
                <hr className="mt-[1%]" />

                <div className="mt-[1%]">
                    <p className="text-primary">Photos</p>
                    <small>566</small>
                </div>

                <div className="mt-[1%]">
                    <p className="text-primary">Videos</p>
                    <small>130</small>
                </div>

                <div className="mt-[1%]">
                    <p className="text-primary">Audio</p>
                    <small>100</small>
                </div>

                <div className="mt-[1%]">
                    <p className="text-primary">Posts</p>
                    <small>20</small>
                </div>

                <div className="mt-[1%]">
                    <p className="text-primary">Messages</p>
                    <small>400</small>
                </div>

                <div className="mt-[1%]">
                    <p className="text-primary">Locked</p>
                    <small>123</small>
                </div>

                <div className="mt-[1%]">
                    <p className="text-primary">Blocked</p>
                    <small>Empty</small>
                </div>
            </div>
        </div>
    );
};

export default Bookmark;

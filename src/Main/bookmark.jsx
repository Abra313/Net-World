import React from 'react';
import { useNavigate } from 'react-router-dom';
import { FaArrowLeft } from "react-icons/fa";
import { BsListNested } from "react-icons/bs";

const Bookmark = () => {
    const navigate = useNavigate();

    // Array of categories for bookmarks
    const categories = [
        { name: "Photos", count: 566 },
        { name: "Videos", count: 130 },
        { name: "Audio", count: 100 },
        { name: "Posts", count: 20 },
        { name: "Messages", count: 400 },
        { name: "Locked", count: 123 },
        { name: "Blocked", count: 'Empty' },
    ];

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="border-[1px] h-[100vh] mt-[5px] max-sm:border-[0]">
            <div className="mt-[10px] h-[100vh] m-[10px] max-sm:mt-[20%]">
                <div className="flex gap-[40%] items-center">
                    <FaArrowLeft
                        className="text-ashDark cursor-pointer text-primary font-bold mt-[1%] text-[1.5rem] ml-[10px] max-sm:hidden"
                        onClick={handleBackClick}
                    />
                    <h2 className='text-primary font-bold mt-[2%] text-[1.5rem] ml-[10px] flex items-center gap-[10px]'>
                        Bookmarks
                    </h2>
                </div>
                <hr className="mt-[2%] max-sm:hidden" />
                <div className="flex justify-between items-center mt-[2%]">
                    <p className="text-primary">All Bookmarks</p>
                    <div>
                        <BsListNested className=' relative hover:block  '/>
                        <div className='border-[2px] w-[100px] h-[100px] absolute hidden  '></div>
                    </div>
                </div>
                <hr className="mt-[1%] max-sm:hidden" />

                {/* Mapping through categories to dynamically render each one */}
                {categories.map((category, index) => (
                    <div key={index} className="mt-[1%] max-sm:flex justify-between items-center">
                        <p className="text-primary">{category.name}</p>
                        <small>{category.count}</small>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Bookmark;

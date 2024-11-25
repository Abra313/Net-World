import { FaPlus, FaArrowLeft } from 'react-icons/fa';
import { BsListNested } from 'react-icons/bs';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';

const List = () => {
    const [isPlusVisible, setIsPlusVisible] = useState(false);
    const handlePlusVisible = (event) => {
        setSearchQuery(event.target.value);
      };

    const navigate = useNavigate(); // Initialize useNavigate

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className="border-[1px] h-[100vh] mt-[5px] max-sm:border-[0]">
            <div className="mt-[10px] h-[100vh] m-[10px] max-sm:mt-[22%]">
                <div className="flex justify-between items-center">
                        <FaArrowLeft
                            className="text-primary font-bold text-[1.5rem] ml-[10px] cursor-pointer max-sm:hidden"
                            onClick={handleBackClick}
                        />
                    <div className="flex items-center">
                        
                        <h2 className='text-primary font-bold mt-[2%] text-[1.5rem] ml-[10px] flex items-center gap-[10px]'>
                            Lists
                        </h2>
                    </div>
                    <div className="">
                        <FaPlus className="text-white text-xl"
                        onClick={handlePlusVisible} />
                       
                    </div>
                </div>
                <hr className="mt-[2%] max-sm:hidden" />
                <div className="flex justify-between items-center mt-[2%] max-sm:mt-[5%]">
                    <p className="text-primary">Custom Order</p>
                    <BsListNested />
                </div>
                <hr className="mt-[1%] max-sm:hidden" />

                <div className="mt-[1%] max-sm:mt-[5%]">
                    <p className="text-primary">Following</p>
                    <small>Empty</small>
                </div>
                <hr className="mt-[1%] max-sm:hidden" />

                <div className="mt-[1%]">
                    <p className="text-primary">Followers</p>
                    <small>Empty</small>
                </div>
                <hr className="mt-[1%] max-sm:hidden" />

                <div className="mt-[1%]">
                    <p className="text-primary">Fans</p>
                    <small>Empty</small>
                </div>
                <hr className="mt-[1%] max-sm:hidden" />

                <div className="mt-[1%]">
                    <p className="text-primary">Likes</p>
                    <small>Empty</small>
                </div>
                <hr className="mt-[1%] max-sm:hidden" />

                <div className="mt-[1%]">
                    <p className="text-primary">Close Customer</p>
                    <small>Empty</small>
                </div>
                <hr className="mt-[1%] max-sm:hidden" />

                <div className="mt-[1%]">
                    <p className="text-primary">Restricted</p>
                    <small>Empty</small>
                </div>
                <hr className="mt-[1%] max-sm:hidden" />

                <div className="mt-[1%]">
                    <p className="text-primary">Blocked</p>
                    <small>Empty</small>
                </div>
                <hr className="mt-[1%] max-sm:hidden" />
            </div>
        </div>
    );
};

export default List;

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaRegImage, FaVideo, FaPoll, FaArrowLeft } from 'react-icons/fa';
import { MdSettingsVoice, MdGroup, MdBookmarks } from 'react-icons/md';
import { GiSandsOfTime } from 'react-icons/gi';
import { BsBroadcast } from 'react-icons/bs';
import { IoMdList } from 'react-icons/io';
import { CgMoreO } from 'react-icons/cg';
import { BiLike, BiDislike } from 'react-icons/bi';
import { TfiCommentAlt } from 'react-icons/tfi';
import Button from '../Component/Button';
import post4 from '../asset/images/post4.jpg';
import Glory from '../asset/images/glory.jpg';
import Kelly from '../asset/images/kelly.jpg';
import Recheal from '../asset/images/recheal.jpg';
import Pual from '../asset/images/paul.jpg';
import Igbo from '../asset/images/igbo.jpg';
import Pre from '../asset/images/pre.jpg';
import post1 from '../asset/images/post1.jpg';
import post2 from '../asset/images/post2.jpg';
import post3 from '../asset/images/post3.jpg';
import post5 from '../asset/images/post5.jpg';

const MainPage = () => {
    const navigate = useNavigate();
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [commentCount, setCommentCount] = useState(0);
    const [comments, setComments] = useState([]);
    const [newComment, setNewComment] = useState('');

    const handleLike = () => {
        if (liked) {
            setLiked(false);
            setLikeCount(likeCount - 1);
        } else {
            setLiked(true);
            setLikeCount(likeCount + 1);
            if (disliked) {
                setDisliked(false);
                setLikeCount(likeCount + 1);
            }
        }
    };

    const handleDislike = () => {
        if (disliked) {
            setDisliked(false);
        } else {
            setDisliked(true);
            if (liked) {
                setLiked(false);
                setLikeCount(likeCount - 1);
            }
        }
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, { text: newComment }]);
            setNewComment('');
            setCommentCount(commentCount + 1); // Update the comment count
        }
    };

    const handleCommentDelete = (index) => {
        const updatedComments = comments.filter((_, t) => t !== index);
        setComments(updatedComments);
        setCommentCount(commentCount - 1); // Update the comment count
    };

    const handleClick = () => {
        alert('Post scheduled for later');
    };

    const handleBackClick = () => {
        navigate(-1); // Navigate to the previous page
    };

    return (
        <div className='m-[0]'>
            <div className="m-[10px] max-sm:mt-[20%]">
                <div className="flex items-center gap-[45%] mb-[10px]">
                    <FaArrowLeft 
                        className="text-primary font-bold text-[1.5rem] ml-[10px] cursor-pointer max-sm:hidden" 
                        onClick={handleBackClick} 
                    />
                    <h1 className='text-primary font-bold text-[1.5rem] ml-[10px]'>Home</h1>
                </div>
                <div className="flex gap-[5px] w-[99%] m-[10px] overflow-y-auto">
                    {/* ... (existing code for displaying images) */}
                </div>
            </div>
            <div className="bg-ashLight border-[1px] m-[10px] h-[265px] rounded-[5px] max-sm:h-[150px]">
                <div className="bg-white h-[170px] rounded-[5px] m-[15px] border-[2px] flex flex-col gap-[70px] pl-[20px] pt-[20px] max-sm:h-[50px] ">
                    <p className="text-[1.3rem] text-ashDark max-sm:mt-[-10px]">Compose new post</p>
                    <div className="flex gap-[30px] max-sm:mt-[-70px] max-sm:gap-[20px] ml-[-15px]">
                    
                                <FaRegImage className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                                <FaVideo className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px] " />
                                <MdSettingsVoice className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                                <FaPoll className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                                <GiSandsOfTime className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                                <BsBroadcast className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                                <MdGroup className="w-[30px] h-[30px] text-ashDark max-sm: w-[90px] h-[40px]" />
                            
                    </div>
                </div>
                <div className="flex items-center gap-[30px] m-[20px] justify-end max-sm:mt-[35px] flex justify-between">
                    <h2 className="text-primary font-bold">Post Later</h2>
                    <Button
                        onClick={handleClick}
                        className="w-[120px] bg-primary"
                        children="Post"
                    />
                </div>
            </div>
            <div className="h-[50px] m-[10px] flex justify-between items-center pl-[5px]">
                <p className="text-[1.2rem] text-ashDark">All</p>
                <IoMdList className="w-[30px] h-[30px] text-ashDark" />
            </div>
            <hr className='max-sm:hidden' />
            <div>
                {/* ... (existing code for post and images) */}
                <div className="flex flex-col gap-[10px] border-[1px] rounded-[5px] p-[7px] mt-[25px] ml-[40px] mr-[30px] max-sm:border-[0]">
                    <div className="flex justify-between">
                        <div className="flex gap-[40px]">
                            <BiLike
                                className={`w-[20px] h-[20px] ${liked ? 'text-blue-500' : 'text-ashDark'}`}
                                onClick={handleLike}
                            />
                            <BiDislike
                                className={`w-[20px] h-[20px] ${disliked ? 'text-blue-500' : 'text-ashDark'}`}
                                onClick={handleDislike}
                            />
                            <TfiCommentAlt className="w-[20px] h-[20px] text-ashDark" />
                        </div>
                        <MdBookmarks className="w-[20px] h-[20px] text-ashDark" />
                    </div>
                    <hr className='max-sm:hidden'/>
                    <p className="text-ashDark">{likeCount} likes this</p>
                </div>

                {/* Comment Section */}
                <div className="mt-[20px] ml-[40px] mr-[30px]">
                    <textarea
                        className="w-full p-[10px] border rounded mb-[10px]"
                        value={newComment}
                        onChange={handleCommentChange}
                        placeholder="Add a comment..."
                    />
                    <div className='flex justify-between'>
                        <button
                        className="bg-primary text-white px-[10px] py-[5px] rounded"
                        onClick={handleCommentSubmit}
                        children="Submit"
                    />
                    <p className="text-ashDark mt-[10px]">Total Comments: {commentCount}</p>
                    </div>
                    <div className="mt-[10px]">
                        {comments.map((comment, index) => (
                            <div key={index} className="flex justify-between border-b py-[5px]">
                                <p>{comment.text}</p>
                                <button
                                    className="text-red-500"
                                    onClick={() => handleCommentDelete(index)}
                                    children="Delete"
                                />
                            </div>
                        ))}
                    </div>
                    
                </div>
            </div>
        </div>
    );
};

export default MainPage;

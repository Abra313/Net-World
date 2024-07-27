import { useState } from 'react';
import { FaRegImage, FaRegHeart } from 'react-icons/fa6';
import { FaVideo, FaPoll } from 'react-icons/fa';
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

const MainPage = () => {
    // State for like/dislike functionality
    const [liked, setLiked] = useState(false);
    const [disliked, setDisliked] = useState(false);
    const [likeCount, setLikeCount] = useState(4000); // Initial like count

    // State for comments
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
                setDisliked(false); // Ensure disliked is removed if liked
                setLikeCount(likeCount + 1); // Remove dislike effect if already disliked
            }
        }
    };

    const handleDislike = () => {
        if (disliked) {
            setDisliked(false);
        } else {
            setDisliked(true);
            if (liked) {
                setLiked(false); // Ensure liked is removed if disliked
                setLikeCount(likeCount - 1); // Remove like effect if already liked
            }
        }
    };

    const handleCommentChange = (e) => {
        setNewComment(e.target.value);
    };

    const handleCommentSubmit = () => {
        if (newComment.trim() !== '') {
            setComments([...comments, newComment]);
            setNewComment('');
        }
    };

    const handleCommentDelete = (index) => {
        const updatedComments = comments.filter((_, i) => i !== index);
        setComments(updatedComments);
    };

    const handleClick = () => {
        alert('Post scheduled for later');
    };

    return (
        <div>
            <div className="bg-ashLight border-[1px] m-[10px] h-[265px] mt-[25px] rounded-[5px] mt-[23%]">
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
                    <h2 className="text-secondary font-bold">Post Later</h2>

                    <Button
                        onClick={handleClick}
                        className="w-[120px] bg-secondary"
                        children="Post"
                    />
                </div>
            </div>
            <div className="h-[50px] m-[10px] flex justify-between items-center pl-[5px]">
                <p className="text-[1.2rem] text-ashDark">All</p>
                <IoMdList className="w-[30px] h-[30px] text-ashDark" />
            </div>
            <hr />
            <div>
                <div className="flex justify-between mr-[10px] ml-[10px] mt-[30px]">
                    <div className="flex gap-[10px]">
                        <img src={post4} alt="post" className="w-[60px] h-[60px] rounded-[50%]" />
                        <div className="mt-[9px]">
                            <h3 className="font-bold text-[18px]">Abiodun</h3>
                            <p className="text-[14px] text-ashDark">@AbiodunKehinde</p>
                        </div>
                    </div>
                    <div className="flex gap-[10px] items-center text-ashDark">
                        <p>July 30</p>
                        <CgMoreO />
                    </div>
                </div>

                <div className="mt-[30px] ml-[10px] flex gap-[10px]  w-[98%]">
                    <div><img src={Kelly} alt="kelly" className="h-[400px]" /></div>
                    <div className="flex gap-[10px] flex-col">
                        <div><img src={Glory} alt="glory" className="h-[200px]" /></div>
                        <div><img src={Recheal} alt="recheal" className="h-[190px]" /></div>
                    </div>
                    <div className="flex gap-[10px] flex-col">
                        <div><img src={Pre} alt="pre" className="h-[200px]" /></div>
                        <div><img src={Pual} alt="paul" className="h-[190px]" /></div>
                    </div>
                    <div><img src={Igbo} alt="igbo" className="h-[400px]" /></div>
                </div>
                <div className="flex flex-col gap-[10px] border-[1px] rounded-[5px] p-[7px] mt-[25px] ml-[40px] mr-[30px]">
                    <div className="flex justify-between">
                        <div className="flex gap-[40px]">
                            <FaRegHeart
                                className={`w-[20px] h-[20px] ${liked ? 'text-red-500' : 'text-ashDark'}`}
                                onClick={handleLike}
                            />
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
                    <hr />
                    <p className="text-ashDark">{likeCount} likes this</p>
                </div>

                {/* Comment Section */}
                <div className="mt-[20px] ml-[40px] mr-[30px]">
                    <textarea
                        className="w-full p-[10px] border rounded"
                        value={newComment}
                        onChange={handleCommentChange}
                        placeholder="Add a comment..."
                    />
                    <button
                        className="mt-[10px] bg-secondary text-white px-[10px] py-[5px] rounded"
                        onClick={handleCommentSubmit}
                        children="Submit"
                    />
                        
                   
                    <div className="mt-[10px]">
                        {comments.map((comment, index) => (
                            <div key={index} className="flex justify-between border-b py-[5px]">
                                <p>{comment}</p>
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

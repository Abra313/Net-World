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
    const [imageFile, setImageFile] = useState(null);
    const [videoFile, setVideoFile] = useState(null);

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

    const handleImageClick = () => {
        document.getElementById('image-upload').click();
    };

    const handleVideoClick = () => {
        document.getElementById('video-upload').click();
    };

    const handleImageChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setImageFile(URL.createObjectURL(file)); // Store or preview the image
        }
    };

    const handleVideoChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setVideoFile(URL.createObjectURL(file)); // Store or preview the video
        }
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
                <div className="flex gap-[5px] w-[99%] m-[10px] overflow-y-auto max-sm:ml-[0]" >
                    <div className='bg-primary text-white w-[80px] h-[90px] flex justify-center text-center font-bold rounded-[5px]'>+ <br /> Add <br />Story</div>
                    <img src={post1} alt="" className='w-[80px] h-[90px] rounded-[5px]' />
                    <img src={post2} alt="" className='w-[80px] h-[90px] rounded-[5px]' />
                    <img src={post3} alt="" className='w-[80px] h-[90px] rounded-[5px]' />
                    <img src={post4} alt="" className='w-[80px] h-[90px] rounded-[5px]' />
                    <img src={post5} alt="" className='w-[80px] h-[90px] rounded-[5px]' />
                    <img src={Kelly} alt="" className='w-[80px] h-[90px] rounded-[5px]' />
                    <img src={Recheal} alt="" className='w-[80px] h-[90px] rounded-[5px]' />
                    <img src={Igbo} alt="" className='w-[80px] h-[90px] rounded-[5px]' />
                    <img src={Pre} alt="" className='w-[80px] h-[90px] rounded-[5px]' />
                    <img src={Pual} alt="" className='w-[80px] h-[90px] rounded-[5px]' />
                </div>
            </div>
            <div className="bg-ashLight border-[1px] m-[10px] h-[265px] rounded-[5px] max-sm:h-[150px]">
                <div className="bg-white h-[170px] rounded-[5px] m-[15px] border-[2px] flex flex-col gap-[70px] pl-[20px] pt-[20px] max-sm:h-[50px]">
                    <input
                        type="text"
                        value={newComment}
                        onChange={handleCommentChange}
                        placeholder="Compose new post"
                        className="bg-transparent border-[0] outline-[0] text-ashDark placeholder-ashDark font-bold text-[1rem] max-sm:mt-[-10px]"
                    />
                    <div className="flex gap-[30px] max-sm:mt-[-60px] max-sm:gap-[20px] ml-[-15px]">
                        <FaRegImage 
                            className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" 
                            onClick={handleImageClick} 
                        />
                        <input 
                            type="file" 
                            id="image-upload" 
                            accept="image/*" 
                            style={{ display: 'none' }} 
                            onChange={handleImageChange} 
                        />
                        <FaVideo 
                            className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" 
                            onClick={handleVideoClick} 
                        />
                        <input 
                            type="file" 
                            id="video-upload" 
                            accept="video/*" 
                            style={{ display: 'none' }} 
                            onChange={handleVideoChange} 
                        />
                        <MdSettingsVoice className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" />
                        <FaPoll className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" />
                        <GiSandsOfTime className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" />
                        <BsBroadcast className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" />
                        <MdGroup className="w-[30px] h-[30px] text-ashDark max-sm:w-[90px] h-[40px]" />
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
                <div className='m-[10px] flex justify-between' >
                    <div className='flex gap-[9px] items-center'>
                        <img src={Kelly} alt="" className='w-[40px] h-[40px] rounded-[50%]' />
                        <div>
                            <h3 className='font-bold text-[12px]'>Kelly</h3>
                            <p className='text-[10px] text-ashDark'>@kellywilliams</p>
                        </div>
                    </div>
                    <div className=' flex items-center gap-[2px]'>
                        <p className='text-ashDark'>August 24</p>
                        <CgMoreO className='text-ashDark'/>
                    </div>
                </div>
                    {/* Post */}
                <div className='p-[20px]' >
                    {imageFile && <img src={imageFile} alt="Uploaded" className="w-full h-auto" />}
                    {videoFile && <video src={videoFile} controls className="w-full h-auto" />}
                </div>
                <div className='m-[10px]'>
                    <hr className='text-ashLight'/>
                    <div className='flex gap-[80px] justify-between'>
                        <div className='flex gap-[5px]'>
                            <BiLike className={`w-[18px] h-[18px] text-ashDark ${liked ? 'fill-primary' : 'cursor-pointer'}`} onClick={handleLike} />
                            <span className='text-[12px]'>{likeCount} Likes</span>
                        </div>
                        <div className='flex gap-[5px]'>
                            <BiDislike className={`w-[18px] h-[18px] text-ashDark ${disliked ? 'fill-primary' : 'cursor-pointer'}`} onClick={handleDislike} />
                            <span className='text-[12px]'>{commentCount} Comments</span>
                        </div>
                    </div>
                </div>
                <div className='m-[20px]'>
                    {comments.map((comment, index) => (
                        <div key={index} className='flex justify-between'>
                            <p className='text-[12px] text-ashDark'>{comment.text}</p>
                            <button onClick={() => handleCommentDelete(index)} className="text-primary text-[12px]">Delete</button>
                        </div>
                    ))}
                    <input
                        type="text"
                        value={newComment}
                        onChange={handleCommentChange}
                        placeholder="Add a comment..."
                        className="w-full text-[12px] p-[5px] border border-ashLight rounded-[5px] mt-[10px]"
                    />
                    <Button onClick={handleCommentSubmit} children="Post Comment" className="bg-primary text-white w-15% mt-[10px]" />
                </div>
            </div>
        </div>
    );
};

export default MainPage;
